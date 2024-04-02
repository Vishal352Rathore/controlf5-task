import React from 'react'
import vector_11 from '../assets/Vector_11.png'
import vector_12 from '../assets/Vector_12.png'
import vector_13 from '../assets/Vector_13.png'


const RealResults = () => {
  return (
        <div className='real_result'>
            <h3>Real People, Real Results</h3>
            <p className='px-5 mx-5 mb-5'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>

            <div className="row  real_result_symbol ">
              <div className="col-2"><p><img src={vector_11} alt=""/>Lighthouse</p></div>

              <div className="col-2"><p><img src={vector_12} alt=""/>Segment</p></div>

              <div className="col-2"><p><img src={vector_13} alt=""/>Digital Marketing</p></div>

              <div className="col-2"><p><img src={vector_12} alt=""/>Segment</p></div>

              <div className="col-2"><p><img src={vector_11} alt=""/>Lighthouse</p></div>

            </div>
        </div>
        )
}

export default RealResults
