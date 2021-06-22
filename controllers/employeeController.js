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

let employeeList= function(req,res){
    //  console.log(req.user)
        employeeModel.findAll()
        .then(employees=>{
            // console.log(employees)
            res.status(httpStatus.OK).json(employees)
        })

}



module.exports={
    employeeCreate,
    employeeList
}