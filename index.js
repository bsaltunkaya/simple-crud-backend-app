//dependencies
const express = require('express')
const mongoose = require('mongoose')
const Product =require('./models/product.model.js')
const productRoute = require("./routes/product.route.js")
//express initialisation(middleware)
const app = express()
app.use(express.json())
//for form URL
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products", productRoute)



//landing page GET API
app.get('/',(req,res)=>{
  res.send("Greetings from the Node API.")
})



//mongo connection initialisation
mongoose.connect('mongodb+srv://bsaltunkaya:123321aa@backenddb.a16yk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
  console.log("DB connection successfull.")
  app.listen(3000, ()=>{
    console.log('Server running on port 3000.')
  })
})
.catch(()=>{
  console.log("DB connection failed.")
})

