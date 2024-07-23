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
      <div className=''>
        <h3 className='text-center text-2xl pt-5 font-bold'>Solutions We Offer</h3>
        <div className='shadow-xl flex flex-col md:flex-row space-4'>
            <h1 className='text-lg'>Electronics</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
