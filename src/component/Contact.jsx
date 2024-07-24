import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <div>
        <form>
            <input type='email'/>
            <input type='text'/>
            <textarea></textarea>
            <button className=''>
                Send
            </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
