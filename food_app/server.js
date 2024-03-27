
const express=require("express");
const db=require('./db')
const {pizzaModels}=require('./models/PizzaModels.js')
const app=express();
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Server working");
});
app.get("/getpizzas",async function(req,res){
    try{
        const details=await pizzaModels.find();
        res.status(200).json({
            "total":details
        })
    }
    catch(error){
        response.status(500).json({
            "status":"not sucessfully recieved",
            "error":error
        });
    }

});

const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running on port');