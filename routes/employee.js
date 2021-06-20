let router=require('express').Router()
let employeeController=require('../controllers/employeeController')

router.post('/create',employeeController.employeeCreate)





module.exports=router