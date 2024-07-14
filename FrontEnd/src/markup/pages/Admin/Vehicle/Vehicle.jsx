import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';
import Vehicleform from '../../../components/Admin/VehicleForm/Vehicleform';
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { MdBorderClear } from 'react-icons/md';
import zIndex from '@mui/material/styles/zIndex';
import { useParams,Link } from 'react-router-dom';
import customerService from '../../../../services/customer.service';
import { useAuth } from '../../../../Context/AuthContext';


const Vehicle = () => {

    const [customerinfo, setCustomerInfo] = useState({})
    const [addvehicle, setVehicle]=useState(false)
    const {employee}=  useAuth()
    // console.log(employee,employee?.employee_token)
    const{id}= useParams()
    // console.log(id)

    const token = employee?.employee_token;

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

      const singCustomerData =async () =>{
         const data = await customerService.singleCustomer(id,token)
        //  console.log(data.customer)
         setCustomerInfo(data.customer)
      }

   

     useEffect(()=>{
         singCustomerData()
     },[])

    //  console.log(customerinfo)

 
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


                            <div className='col-md-9'>
                                <div className=' contact-section row'>

                                    <div className='auto-container col-md-10'>
                                    <div className='customer-vehicle'>
                                        <h2>Customer : {customerinfo.customer_first_name}  {customerinfo.customer_last_name}</h2>
                                    </div>

                                    <div className='v_info'>
                                            <p><span className='v_title'>Email</span> :<span>{customerinfo.customer_email}</span></p>
                                            <p><span className='v_title'>phone no</span> :<span>{customerinfo.customer_phone_number}</span></p>
                                            <p><span className='v_title'> Active Customer</span> :<span>{customerinfo.active_customer_status ? 'Yes': 'No'}</span></p>
                                            <p><span className='v_title'>Edit Customer info</span> :<span><Link to={`/admin/edit-customer/${id}`}><EditCalendarOutlinedIcon /></Link></span></p>
                                    </div>
                                    </div>
                                
                                </div>

                                <div className="contact-section row pad">
                                        <div className='auto-container  col-md-10 '>
                                        
                                            <div className="contact-title mrg">
                                                <h2>Vehicles of {customerinfo.customer_first_name}</h2>
                                                <div className='contact-form'>
                                                        <div className='row clearfix'>
                                                                <div className="form-group col-md-12 search">
                                                                <input type="text" name="vehicle-model" placeholder="No Vehicle found" required/>
                                                                </div>
                                                        </div>
                                                </div>


                                                 {
                                                 !addvehicle && 
                                                  (<div className="form-group col-md-10" style={{paddingLeft:'0'}}>
                                                     <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..." onClick={()=>setVehicle(!addvehicle)}><span>ADD NEW VEHICLE</span></button>
                                                  </div>)
                                                 }
                                            </div>
                                    

                                        </div>

                                       
                                </div>

                                

                                  {addvehicle &&  <Vehicleform id={id} v={{addvehicle,setVehicle}} />}
                            </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Vehicle