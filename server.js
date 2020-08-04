const express = require('express');
const cors = require('cors');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const app = express();


app.use(cors());
app.use(express.json());

// Send static files to browser when running in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get("*", (req, res) =>{
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}


const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>{
    console.log("app is listening on " + PORT)
})