const express = require('express');
const app = express();
app.use('/admin',(req,res,next)=>{
    const token='xyz';
    console.log('token')
    if(token==='xyz'){
        next();
    }
    else{
        res.status(401).send('Unauthorized Token')
    }

})

app.get('/admin/data',(req,res)=>{
    res.send({firstName:"Neha",lastName:"Biyani"});

});
app.post('/admin',(req,res)=>{
    res.send("data saved successfully")
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})