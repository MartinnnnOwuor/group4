import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faStar, faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className='container my-5'>
      <div className='text-center mb-5'>
        <h2 className='text-lg font-bold'>Who We Are</h2>
        <p>We are a dynamic team committed to providing you with unique accessories and a diverse range of high-quality products. Our mission is to make shopping a delightful experience with a focus on innovation and customer satisfaction.</p>
      </div>

      <div className='row text-center'>
        <div className='col-md-6 mb-4'>
          <div className='bg-indigo-200 card shadow-lg border-0 rounded-lg'>
            <div className='card-body'>
              <FontAwesomeIcon icon={faBullseye} size='3x' className='mb-3 text-success'/>
              <h3 className='card-title'>Mission</h3>
              <p className='card-text'>We aim to deliver exceptional products and services that exceed our customers' expectations, fostering a community of satisfaction and trust.</p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card shadow-lg border-0 rounded-lg'>
            <div className='card-body'>
              <FontAwesomeIcon icon={faEye} size='3x' className='mb-3 text-primary'/>
              <h3 className='card-title'>Vision</h3>
              <p className='card-text'>We aspire to be a leading e-commerce platform known for our commitment to quality, innovation, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-5'>
        <h2 className='text-lg font-bold mb-4'>What We Do</h2>
        <p>At Ekart, we specialize in offering a curated selection of trendy fashion items, cutting-edge electronics, and essential home appliances. We strive to provide products that combine style, functionality, and value, ensuring you find exactly what you need.</p>
      </div>

      <div className='text-center mt-5'>
        <h2 className='text-lg font-bold mb-4'>Why Us?</h2>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-lg'>
              <div className='card-body'>
                <FontAwesomeIcon icon={faStar} size='3x' className='mb-3 text-warning'/>
                <h3 className='card-title'>Quality</h3>
                <p className='card-text'>We bring you the best quality products to ensure satisfaction with every purchase.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-lg'>
              <div className='card-body'>
                <FontAwesomeIcon icon={faCheck} size='3x' className='mb-3 text-success'/>
                <h3 className='card-title'>Reliability</h3>
                <p className='card-text'>Count on us for dependable service and consistent product excellence.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='card shadow-lg border-0 rounded-lg'>
              <div className='card-body'>
                <FontAwesomeIcon icon={faDollarSign} size='3x' className='mb-3 text-danger'/>
                <h3 className='card-title'>Price</h3>
                <p className='card-text'>We offer competitive pricing to ensure you get the best value for your money.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
