let router=require('express').Router()
let employeeController=require('../controllers/employeeController')

router.post('/create',employeeController.employeeCreate)
router.get('/list',employeeController.employeeList)





module.exports=router