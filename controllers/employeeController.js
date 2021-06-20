let employeeModel=require('../models').employee
let httpStatus=require('http-status')

let employeeCreate= function(req,res){
    employeeModel.create(req.body)
    .then(function(){
        res.status(httpStatus.CREATED).json({message:"Employee created succesfully"})
    })
    .catch(function(error){
        console.log(error)
        res.status(httpStatus.BAD_REQUEST).json(error)
    })
}



module.exports={
    employeeCreate,
}