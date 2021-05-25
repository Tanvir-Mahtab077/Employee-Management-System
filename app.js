let express=require('express')
const { Sequelize } = require('sequelize')
let morgan=require('morgan')
let bodyParser=require('body-parser')
let cors=require('cors')
let dotenv = require('dotenv').config()
rootRouter=require('./routes/index')


let app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


let port=process.env.PORT
app.listen(port,()=>{
    const sequelize = new Sequelize('emp_manag_sys', 'emp_manag_sys', '#JG%*FHK#hds', {
        host:'localhost',
        dialect:'mysql'
      })

      sequelize.authenticate()
      .then(()=>{
          console.log('Database connected Successfully')
      })
      .catch((error)=>{
          console.log(error)
      })

      console.log(`http://localhost:${port}/api`)
})

app.use('/api',rootRouter)

