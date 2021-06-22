let router=require('express').Router()
let employeeController=require('../controllers/employeeController')

router.post('/create',employeeController.employeeCreate)
router.get('/list',employeeController.employeeList)
router.patch('/update/:id',employeeController.employeeUpdate)
router.delete('/deleteOne/:id',employeeController.employeeDelete)
router.delete('/deleteAll',employeeController.employeeALLDelete)






module.exports=router