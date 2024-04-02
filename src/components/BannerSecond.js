import React from 'react'
import banner2Image from '../assets/banner2_image.png'

const BannerSecond = () => {
  return (
    <div className='second_banner '>
      <div className='row second_banner_row'>
        <div className='col-5 second_banner_image'>
          <img src={banner2Image} alt='banner2Image'/>
        </div>
        <div className='col-5 second_banner_content'>
            <h2>Why you should choose us</h2>
            <p>Beassist Group is a multifaceted online business solutions provider, primarily serving other businesses. Our core strength lies in offering tailored services that encompass Payroll Management, Accounting & Bookkeeping, Business Consultancy, Data Analytics, and comprehensive Human Resources Management. By partnering with our clients, we aim to streamline their operations, provide strategic insights, and foster growth. Whether it's ensuring accurate financial records, offering data-driven insights, or managing human resources, Beassist is committed to delivering excellence and adding value to the businesses we serve.</p>
           <button>KNOW MORE ABOUT US</button>
        </div>
      </div>
    </div>
  )
}

export default BannerSecond
