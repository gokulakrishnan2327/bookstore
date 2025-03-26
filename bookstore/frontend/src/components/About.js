import React from 'react';
import './About.css'; // Optional for adding styles

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Bookstore</h1>
      <p>Welcome to our bookstore, your ultimate destination for a diverse collection of books across various genres. Whether you're a passionate reader, a student, or a professional looking for insightful knowledge, we have something for everyone.</p>

      <p>Our mission is to promote the love of reading by offering carefully curated books ranging from programming and technology to fiction, self-development, and beyond. We believe in making quality books accessible to all.</p>

      <p>With a strong commitment to customer satisfaction, we provide an easy-to-use online platform where you can explore, purchase, and enjoy books from the comfort of your home.</p>

      <p>Browse our collection today and embark on a journey of knowledge and imagination. <a href="/contact">Contact us</a> for any inquiries or assistance.</p>
    </div>
  );
};

export default About;
