import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Vehicleform = () => {
  return (
    <section className="contact-section row pad">
         
    <div className="auto-container col-md-8 bgc ">
        <div className='close-btn'><IoCloseSharp  color='#fff' style={{background:'red',borderRadius:'4px'}}/></div>
  
        <div className="contact-title ">
            <h2>Add a new  Vehicle</h2>
        </div>
        
        <div className="row clearfix">
        
            <div className="form-column ">
                <div className="inner-column ">
                    <div className="contact-form  col-lg-10 ">
                        
                        <form >
                            <div className="row clearfix">

                                <div className="form-group col-md-12">
                                    {/* {serverError && <div className="validation-error" role="alert">{serverError}</div>} */}
                                    <input type="text" name="vehicle-year"  placeholder="Vehicle year" required  />

                                    {/* {emailError && <div className="validation-error" role="alert">{emailError}</div>} */}
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="first-name" placeholder="Vehicle make"/>

                                    {/* {firstNameRequired && <div className="validation-error" role="alert">{firstNameRequired}</div>} */}
                                </div>
                                
                                
                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-model" placeholder="Vehicle model" required/>
                                </div>
                                
                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-type"  placeholder="Vehicle type" required  />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-mileage"  placeholder="Vehicle mileage" required  />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-tag"  placeholder="Vehicle tag" required  />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-serial"  placeholder="Vehicle serial" required  />
                                </div>


                                <div className="form-group col-md-12">
                                    <input type="text" name="vehicle-color"  placeholder="Vehicle color" required  />
                                </div>

                          
                                <div className="form-group col-md-12">
                                    <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>ADD VEHICLE</span></button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        
            
        </div>
    </div>
</section>
  )
}

export default Vehicleform