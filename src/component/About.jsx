import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="mb-4">About Us</h2>
          <p>Welcome to our e-commerce store!</p>
          <p>We are dedicated to providing high-quality products and excellent services to our customers.</p>
          <p>Our mission is to make your shopping experience enjoyable and hassle-free.</p>
          <p>Feel free to browse through our collection of products and don't hesitate to contact us if you have any questions.</p>
          <p>Thank you for choosing us!</p>

          <h2 className="mt-5 mb-4">Contact Us</h2>
          <p>If you have any questions or concerns, please don't hesitate to get in touch with us:</p>
          <ul>
            <li>Email: Ekart@company.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, Nairobi, Kenya</li>
          </ul>

          <h2 className="mt-5 mb-4">Why Shop with us?</h2>
          <ul>
            <li>Secure checkout process</li>
            <li>Fast and reliable shipping</li>
            <li>Easy returns and exchanges</li>
            <li>Customer reviews and ratings</li>
            <li>Responsive customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
