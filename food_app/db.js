const mongoose=require("mongoose");
var mongoURL='mongodb+srv://dharshikas:dharshika2004@cluster0.ncs76lg.mongodb.net/Foodordering'

mongoose.connect(mongoURL ,{useUnifiedTopology:true , useNewUrlParser:true})
var db = mongoose.connection


db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})
db.on('error' , ()=>{
    console.log('Mongo DB Connection failed');
})