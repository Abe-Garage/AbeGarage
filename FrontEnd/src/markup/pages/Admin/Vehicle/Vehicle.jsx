import React, { useState } from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';
import Vehicleform from '../../../components/Admin/VehicleForm/Vehicleform';
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { MdBorderClear } from 'react-icons/md';
import zIndex from '@mui/material/styles/zIndex';
import { useParams } from 'react-router-dom';


const Vehicle = () => {

    const circleStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'inline-block',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '100px',
        position:'relative',
        zIndex:'100'
      }

      const lineStyle ={

      borderLeft: '2px solid #DDD',
      height:' 500px',/* Adjust the height as needed */
      position: 'absolute',
      top:'95px',
      left: '10%',
    //   transform: 'translateX(-50%)'

      }

     const{id}= useParams()
     console.log(id)

 
  return (
        <div>
            <div className="container-fluid admin-pages">
                <div className="row">
                    <div className="col-md-3 admin-left-side">
                    <AdminMenu />
                    </div>

                    <div className="col-md-9 admin-right-side d-flex" style={{position:'relative'}}>

                        <div style={lineStyle}></div>


                            <div className='pl-5 pt-5 d-flex flex-column'>

                                <div className='text-center bg-info my-5' style={circleStyle}>
                                    Info
                                </div>

                                <div className='text-center bg-info my-5' style={circleStyle}>
                                    Cars
                                </div>


                                <div className='text-center bg-warning my-5' style={circleStyle}>
                                    Orders
                                </div>

                            </div>


                            <div>
                                <div className=' contact-section row'>

                                    <div className='auto-container col-md-10'>
                                    <div className='customer-vehicle'>
                                        <h2>Customer : Elias</h2>
                                    </div>

                                    <div className='v_info'>
                                            <p><span className='v_title'>Email</span> :<span>elias@eva.com</span></p>
                                            <p><span className='v_title'>phone no</span> :<span>555555</span></p>
                                            <p><span className='v_title'> Active Customer</span> :<span>yes</span></p>
                                            <p><span className='v_title'>Edit Customer info</span> :<span><EditCalendarOutlinedIcon /></span></p>
                                    </div>
                                    </div>
                                
                                </div>

                                <div className="contact-section row pad">
                                        <div className='auto-container  col-md-10 '>
                                        
                                            <div className="contact-title mrg">
                                                <h2>Vehicles of Team4</h2>
                                                <div className='contact-form'>
                                                        <div className='row clearfix'>
                                                                <div className="form-group col-md-12 search">
                                                                <input type="text" name="vehicle-model" placeholder="No Vehicle found" required/>
                                                                </div>
                                                        </div>
                                                </div>
                                            </div>
                                    

                                        </div>
                                </div>

                                    <Vehicleform id={id}/>
                            </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Vehicle