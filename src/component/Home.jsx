import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <div className=''>
      <div 
      className='bg-blue-100 p-10'
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1061369956/photo/coin-stacks-and-chart-graphs-on-a-chessboard.webp?b=1&s=170667a&w=0&k=20&c=zcumQNaDUpaKYiQDLiNTn0bGOIETe8rXIicHH0jcHpU=")',
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}>
        <div className='pt-10'>
            <h1 className='text-center text-3xl font-bold'>Welcome to the Future of Accessories:</h1>
            <h2 className='text-center text-3xl font-bold'>E-Kart Limited</h2>
        </div>
        <div className='bg-gray py-2'>
            <div className='bg-blue-300 shadow-md rounded-xl mx-auto max-w-4xl p-6'>
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
      <div className='bg-white py-16 px-8 md:px-16'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold text-gray-700 mb-4'>Why choose us?</h2>
                <ul className='text-gray-600 text-lg space-y-2'>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faCheck} className='text-blue-500 mr-2'/>
                        Expertise
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faCheck} className='text-blue-500 mr-2'/>
                        Reliability
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faCheck} className='text-blue-500 mr-2'/>
                        Customer-centricity
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faCheck} className='text-blue-500 mr-2'/>
                        Innovation
                    </li>
                </ul>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0'>
                <img 
                src='https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2h5JTIwY2hvb3NlJTIwaW1hZ2VzfGVufDB8fDB8fHww'
                alt='whychoose us'
                className='w-full h-auto rounded-full'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
