import React from 'react'

const ConnectWithUs = () => {
  return (
    <div className='connect_with_us'>
    <div className='container mt-5'>
      <h3 >Connect with us</h3>
      <div className="row my-3">
        <div className="col-4 ">
          <input className='w-100 p-2' placeholder='Full Name' />
        </div>
        <div className="col-4">
          <input className='w-100 p-2' placeholder='Enter your email' />
        </div>
        <div className="col-4">
          <input className='w-100 p-2' placeholder='Enter your phone number' />
        </div>
      </div>
      <div className='row  p-0 '>
      <div className="col-12">
        <textarea className='w-100' placeholder='message'  />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
      <button>Get Started</button>
      </div>
    </div>
    </div>
  )
}

export default ConnectWithUs
