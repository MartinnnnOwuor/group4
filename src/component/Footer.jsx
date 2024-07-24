import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='bg-blue-300 py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='mb-6 md:mb-0 md:w-1/3 '>
            <h3 className='mb-4 text-xl font-semi-bold'>E Kart Limited</h3>  
            <p className='text-gray-500 mb-4'>
              Talk to us on social media for upcoming news, insights and engaging discussions.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-blue-500 hover:text-blue-600'>
                <FontAwesomeIcon icon={faFacebook} className='text-lg'/>
              </a>
              <a href='#' className='text-black'>
                <FontAwesomeIcon icon={faXTwitter} className='text-lg'/>
              </a>
              <a href='#' className='text-pink-500 hover:text-blue-600'>
                <FontAwesomeIcon icon={faInstagram} className='text-lg'/>
              </a>
              <a href='#' className='text-blue-700 hover:text-blue-800'>
                <FontAwesomeIcon icon={faLinkedin} className='text-lg'/>
              </a>
            </div>
          </div>
          <div className='mb-6 md:mb-0 md:w-1/3'>
            <h3 className='text-xl font-semibold mb-2'>Links</h3>
            <ul className='space-y-2 text-gray-600'>
              <li><a href='/' className='hover:text-blue-400'>Home</a></li>
              <li><a href='/about' className='hover:text-blue-400'>About</a></li>
              <li><a href='/shopping' className='hover:text-blue-400'>Products</a></li>
            </ul>
          </div>
          <div className='md:w-1/3'>
            <h3 className='text-xl font-semibold mb-2'>Offices</h3>
            <ul className='space-y-2 text-gray-600'>
              <li><a href='#' className='hover:underline'>Westlands, Nairobi</a></li>
              <li><a href='#' className='hover:underline'>Milimani, Kisumu</a></li>
              <li><a href='#' className='hover:underline'>Free Area, Nakuru</a></li>
            </ul>
          </div>
        </div>
          <div className='py-4 mt-10'>
            <div className='container mx-auto text-center text-gray-600'>
              All Rights Reserved. &copy;{new Date().getFullYear()} E-Kart Limited
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
