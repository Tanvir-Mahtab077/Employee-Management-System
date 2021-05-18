let express=require('express')
let morgan=require('morgan')
let bodyParser=require('body-parser')
let cors=require('cors')
let dotenv=require('dotenv').config()
rootRouter=require('./routes/index')


let app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


let port=process.env.PORT
app.listen(port,()=>{console.log(`server is running on ${port}`)})

app.use('/api',rootRouter)

