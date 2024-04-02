import React from 'react'
import logo from '../assets/logo.png'
import headerImg from '../assets/header_image.png'

const HeaderBanner = () => {
    return (
            <div className='header_banner'>
                <div className='header_inner'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container ">
                      <img src={logo} alt="logo"/>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white button_header">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                <div className='row '>
                    <div className='header_content_heading col-6 align-self-center text-white'>
                        <h3 >
                           <span>Beassist</span>  is committed to delivering <span>excellence</span> and <span>adding value</span> to the businesses <span>we serve</span> .
                        </h3>
                        <p>
                            Beassist Group is a multifaceted online business solutions provider, primarily serving other businesses
                        </p>
                        <button>Get Started</button>

                    </div>
                    <div className='header_content_image col-6 d-flex align-center justify-content-center'>
                        <img src={headerImg} alt='header_image' />
                    </div>
                </div>
                </div>
                </div>
            </div>
        
    )
}

export default HeaderBanner