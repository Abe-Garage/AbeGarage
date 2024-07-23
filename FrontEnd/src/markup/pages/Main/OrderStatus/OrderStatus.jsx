import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../../../../assets/images/side.jpg'

const OrderStatus = () => {

    const style={
        backGround:'white',
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)',
        padding:'20px',
        borderRadius:'6px'

    }

    const {order_hash} =useParams()
  return (
    <div className='' >

          <div className='w-75 m-auto my-5' style={style}>
                <div className="contact-section pad_1">
                    <div className="contact-title mb-1">
                        <h2 className='v_font'>Check Your Car Service Status Anytime!</h2>
                    </div>
                </div>

               <div className='d-flex m-auto'>
                    
                    <div className='w-' style={{width:'60%'}}>
                         Services
                    </div>

                    <div className='w-2' style={{width:'30%'}} >
                        <img src={img} alt="" />
                    </div>
               </div>


               <div className="contact-section pad_1 mt-5">
                    <div className="contact-title mb-1">
                        <h2 className='v_font'>status</h2>
                    </div>
                </div>



          </div>
    </div>
  )
}

export default OrderStatus