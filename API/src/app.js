const express = require ("express")
const app = express()

app.all ("*", function(req,res,next){
    console.log("passamos pelo app, irruuuuu!!!)
    next ()
})

// rotas
const index = require ("")
const alunas = require ("")
app.use('/', index)
app.use("/alunas", alunas)
module.exports = app 