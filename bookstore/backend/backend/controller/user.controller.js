const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { sendResponseError } = require('../middleware/middleware')
const { checkPassword, newToken } = require('../utils/utility.function')

const signUpUser = async (req, res) => {
  const { email, fullName, password } = req.body

  if (!email || !password || !fullName) {
    return sendResponseError(400, 'All fields are required', res)
  }

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return sendResponseError(400, 'User already exists', res)
    }

    const hash = await bcrypt.hash(password, 8)
    await User.create({ email, fullName, password: hash })

    return res.status(201).send('Successfully created an account')
  } catch (err) {
    console.log('Error:', err)
    return sendResponseError(500, 'Something went wrong. Please try again', res)
  }
}

const signInUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return sendResponseError(400, 'Email and password are required', res)
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return sendResponseError(400, 'You need to sign up first!', res)
    }

    const same = await checkPassword(password, user.password)
    if (!same) {
      return sendResponseError(400, 'Invalid password!', res)
    }

    let token = newToken(user)
    return res.status(200).send({ status: 'ok', token })
  } catch (err) {
    console.log('ERROR:', err)
    return sendResponseError(500, `Error ${err.message}`, res)
  }
}

const getUser = async (req, res) => {
  return res.status(200).send({ user: req.user })
}

module.exports = { signUpUser, signInUser, getUser }
