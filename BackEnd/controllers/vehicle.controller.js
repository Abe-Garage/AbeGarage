const vehicleService = require('../services/vehicle.service')


async function singleVehicle(req,res){

    try {
        const {id}= req.params;

        const result = await vehicleService.singleVehicle(id)
        let response = {}
     
        if(result.length == 0){
                 
           response={
                status: "fail",
                message: "vehicle does not exist",
                data:[]
           }
     
           return res.status(400).json(response)
        }
     
        response={
          status:'success',
          data:result
        }
     
     
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'Server Error'
        })
    }
 
}


async function addVehicle(req,res){

    try {
        const  vehicleData= req.body;



        const result = await vehicleService.addVehicle(vehicleData)
        let response ={}
     
        if(!result.status){
                 
           response={
                status: "fail",
                success:false,
                message: "failed to add vehicle"
           }
     
           return res.status(400).json(response)
        }
     
        response={
          status:'success',
          success:true,
          data:result
        }
     
     
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            message:'Server Error'
        })
    }
 
}


async function updateVehicle(req,res){
    try {

        const updateVehicleData= req.body;
        console.log(updateVehicleData)

        const result = await vehicleService.updateVehicleInfo(updateVehicleData);

        if(!result.status){
                 
            response={
                 status: "fail",
                 success:false,
                 message: "failed to update vehicle info"
            }
      
            return res.status(400).json(response)
         }
      
         response={
           status:'success',
           success:true,
           data:result
         }
      
      
         return res.status(200).json(response)


        
    } catch (error) {
        return res.status(500).json({
            message:'Server Error'
        })
    }
}

async function vehiclePerCustomer(req,res){

    try {

        const { customer_id }=req.params;
        const ID = customer_id

        const result = await vehicleService.vehiclePerCustomer(ID);
        // console.log(result)

        if(result){

            res.status(200).json(result)
        } else{

            res.status(400).json({message:'not found '})
        }

    
    } catch (error) {
        return res.status(500).json({
            message:'Server Error'
        })
    }
}


module.exports={
    singleVehicle,
    addVehicle,
    updateVehicle,
    vehiclePerCustomer

}