import React, { useState } from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';
import Vehicleform from '../../../components/Admin/VehicleForm/Vehicleform';
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";


const Vehicle = () => {

 
  return (
        <div>
            <div className="container-fluid admin-pages">
                <div className="row">
                    <div className="col-md-3 admin-left-side">
                    <AdminMenu />
                    </div>

                    <div className="col-md-9 admin-right-side">


                        <div className=' contact-section row'>

                                <div className='auto-container col-md-8'>
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
                            <div className='auto-container  col-md-8 '>
                            
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

                        <Vehicleform />
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Vehicle