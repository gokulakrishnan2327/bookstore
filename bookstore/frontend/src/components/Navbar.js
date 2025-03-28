import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { logout } from '../utils/localstorage';
import { setInitialState } from '../redux/actions/userAction';

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const history = useHistory();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const _handleLogout = () => {
    dispatch(setInitialState());
    logout();
    history.push('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/"><h2>Our Bookstore</h2></Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        {!user.userInfo.isLogin ? (
          <li>
            <Link to="/signin">Login</Link>
          </li>
        ) : (
          <li>
            <p onClick={_handleLogout}>Logout</p>
          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
