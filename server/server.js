const express = require('express')
const app = express()
app.get('/add',(req,res)=> {
    console.log(req.query.a,req.query.b )
    res.json({"sum":  parseInt(req.query.a)+parseInt(req.query.b)})
    console.log(res)
})

app.listen(5000,()=>{console.log("Server started")})