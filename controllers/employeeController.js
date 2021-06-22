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
        .catch(error=>{
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        })

}

let employeeUpdate= function(req,res){
    let {id}=req.params
    let {name,status,selary,phone,email}=req.body
    employeeModel.update({
        name,status,selary,phone,email
    },
    {
        where:{
            id:id
        }
    })
    .then(()=>{
        res.status(httpStatus.OK).json({message:"Employee Updated Successfully"})
    })
    .catch(error=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    })

}

employeeDelete= function(req,res){
    let {id}=req.params
   employeeModel.destroy({
      where:{
          id
      }
   })
   .then(()=>{
       res.status(httpStatus.OK).json({message:"Employee Deleted Succesfully"})
   })
   .catch(error=>{
       res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
   })
}
 let employeeALLDelete= function(req,res){
    employeeModel.destroy({
        where:{}
    })
    .then(()=>{
        res.status(httpStatus.OK).json({message:"All Records From Employee is Deleted Succesfully"})
    })
    .catch(error=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    })
 }




module.exports={
    employeeCreate,
    employeeList,
    employeeUpdate,
    employeeDelete,
    employeeALLDelete
}