const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
// require('dotenv/config');


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://recon:reconkaiseho@cluster0.sayqo.mongodb.net/Data', () => {
    console.log("connected to DB!")
});


const dataSchema = new mongoose.Schema({
    fName : String,
    lName : String,
    CNumb : Number,
    Mail : String,
    Msg : String
})

const Data = mongoose.model("Data", dataSchema);

app.post('/', function(req, res){
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.ContactNumb);
    // console.log(req.body.EMail);
    // console.log(req.body.Message);
    
    const detail = new Data({
       fName: req.body.firstName,
       lName: req.body.lastName,
       ContactNum: req.body.ContactNumb,
       Mail: req.body.EMail,
       Msg: req.body.Message
}).save().then((err)=>{
    if(!err) res.send("Data Submitted Succesfully");
    else res.send(err);
})
})

app.listen(5000,function(){
        console.log("Server Getting Started @ 5000 Port");
    })