import React from 'react'
import group from '../assets/Group.png'
import vector1 from '../assets/Vector_1.png'
import group1 from '../assets/Group_1.png'


const YourGoal = () => {
    return (

            <div className='container you_goal'>
                <h3>Helping you achieve your goals.</h3>
                <div className="row ">
                    <div className=' col-4 mt-5'>
                        <div className="card-body card card1">
                            <div>
                                <img src={group} alt="vector" />
                            </div>
                            <h5 className="card-title">Payroll Management:</h5>
                            <p className="card-text ">Efficiently manage your team's payments with our comprehensive payroll services. Whether you have a small team or a large workforce, our system ensures timely and accurate payroll processing, letting you focus on what you do best.</p>
                        </div>
                    </div>
                    <div className=' col-4 mt-5'>
                        <div className="card-body card card1">
                            <div>
                                <img src={group} alt="vector" />
                            </div>
                            <h5 className="card-title">Accounting and Bookkeeping</h5>
                            <p className="card-text">Stay on top of your finances without the headache. Our expert team provides meticulous accounting and bookkeeping services, ensuring that your financial records are accurate, up-to-date, and compliant.</p>
                        </div>
                    </div>
                    <div className=' col-4 mt-5'>
                        <div className="card-body card card1" >
                            <div>
                                <img src={vector1} alt="vector" />
                            </div>
                            <h5 className="card-title">Business Consultancy</h5>
                            <p className="card-text">Navigate the complexities of the business world with our expert guidance. From market insights to strategic planning, our consultancy services are designed to provide actionable recommendations, fueling your business growth.</p>
                        </div>
                    </div>
                    <div className=' col-4 mt-5'>
                        <div className="card-body card card1">
                            <div>
                                <img src={group1} alt="vector" />
                            </div>
                            <h5 className="card-title">Data Analytics</h5>
                            <p className="card-text">Unlock the power of data-driven decision-making. Our data analytics services delve deep into your business metrics, offering insights and patterns that can redefine your strategies and give you a competitive edge.</p>
                        </div>
                    </div>
                    <div className=' col-4 mt-5'>
                        <div className="card-body card card1">
                            <div>
                                <img src={group } alt="vector" />
                            </div>
                            <h5 className="card-title">Human Resources Management</h5>
                            <p className="card-text">People are the heart of any business. We offer a range of HR services - from recruitment & staffing, performance monitoring & management, to comprehensive HR solutions. Let us help you create a team that's aligned with your vision and values.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default YourGoal
