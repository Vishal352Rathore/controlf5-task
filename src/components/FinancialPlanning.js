import React from 'react'
import listIcon from '../assets/list_icon.png'

const FinancialPlanning = () => {
    return (
        <div className='financial_planning'>
            <div className='container '>
                <h3>Get a free financial planning consultation.</h3>
                <div className="row">
                    <div className="col-4" >
                            <div className="card card2">
                                <span>Intro</span>
                                <h5 className="card-title">$50/Month</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <ul>
                                <li><img src={listIcon} alt="" /> An item</li>
                                <li><img src={listIcon} alt="" /> A second item</li>
                                <li><img src={listIcon} alt="" /> A third item</li>
                            </ul>
                            <div >
                            <button>Get Started</button>
                            </div>
                            </div>
                    </div>
                    <div className=" col-4" > 
                            <div className="card card2">
                            <span>Solo (Recommended) </span>
                                <h5 className="card-title">$50/Month</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <ul>
                                <li><img src={listIcon} alt="" /> An item</li>
                                <li><img src={listIcon} alt="" /> A second item</li>
                                <li><img src={listIcon} alt="" /> A third item</li>
                            </ul>
                            <div>
                            <button>Get Started</button>
                            </div>
                            </div>
                           
                    </div>
                    <div className=" col-4" >
                            <div className=" card card2">
                            <span>Teams</span>
                                <h5 className="card-title">$50/Month</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <ul>
                                <li><img src={listIcon} alt="" /> An item</li>
                                <li><img src={listIcon} alt="" /> A second item</li>
                                <li><img src={listIcon} alt="" /> A third item</li>
                            </ul>
                            <div >
                            <button>Get Started</button>
                            </div>
                            </div>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialPlanning
