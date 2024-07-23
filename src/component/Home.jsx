import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Home() {
  return (
    <div className=''>
      <div className='bg-blue-100'>
        <div className='pt-10'>
            <h1 className='text-center text-3xl font-bold'>Welcome to the Future of Accessories:</h1>
            <h2 className='text-center text-3xl font-bold'>E-Kart Limited</h2>
        </div>
        <div className='bg-gray py-2'>
            <div className='bg-blue-100 shadow-md rounded-xl mx-auto max-w-4xl p-6'>
                <p className='text-center text-lg mb-2'>Our advanced solutions, from seamless payment processing to ecure transactions, streamline operations, enhance customer experiences, and drive growth.</p>
                <p className='text-center text-lg'>As industry leaders, we redefine norms and push boundaries, shaping a future where technology transforms the shopping experience.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center py-5'>
            <button className='bg-blue-500 text-white hover:bg-blue-600 py-3 px-4 rounded-xl mx-4'>
                Learn More
            </button>
            <button className='bg-black text-white py-3 rounded-xl px-4'>
                Let's Talk
            </button>
        </div>
      </div>
      <div className='py-10'>
        <h3 className='text-center text-2xl pt-5 font-bold'>Solutions We Offer</h3>
        <div className='flex flex-col md:flex-row gap-10 mx-10 justify-center py-5'>
            <div className='shadow-xl flex flex-col p-6 bg-white rounded-xl items-center'>
                <h1 className='text-lg text-center font-bold mb-2'>Inventory Management</h1>
                <p className='text-center'>
                    Efficiently track and manage your inventory o ensure the right products are always in stock.
                </p>
            </div>
            <div className='shadow-xl p-6 flex flex-col items-center rounded-xl bg-white'>
                <h1 className='text-lg text-center font-bold mb-2'>Customer Relationship Management</h1>
                <p className='text-center'>
                    Build and maintain strong relationships with your customers hrough personalized interactions.
                </p>
            </div>
            <div className='shadow-xl flex flex-col p-6 rounded-xl bg-white items-center'>
                <h1 className='text-lg text-center font-bold mb-2'>Payment Gateway  Integration</h1>
                <p className='text-center'>
                    Provide secure and seamless payment options to enhance the customer purchase experience.
                </p>
            </div>
        </div>
      </div>
      <div className=''>
        <div className=''>
            <h1 className='font-bold text-xl py-4'>Why use our products?</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
