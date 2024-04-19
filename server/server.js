const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.get('/login', (req, res)=>{
    res.send({message: "message already sent"});
})

app.listen(process.env.PORT || 2000 , ()=>{
    console.log(`Listening on the port ${process.env.PORT}`)
});