let router=require('express').Router()
let employeeRoute= require('../routes/employee')


router.use('/employee',employeeRoute)


router.get('/',(req,res,next)=>{

    res.send('<h1>first page</h1>')
})

module.exports= router