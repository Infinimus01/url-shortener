const express = require('express')
const {connectToMongoDB}= require('./connect')
const urlRoutes = require('./routes/url')
const URL = require('./models/url')


const app= express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then((

)=> console.log("mongodb connected"));

app.use(express.json());

app.use("/url", urlRoutes);

app.get("/:shortId", async (req,res) =>{
    const shortId= req.params.shortId;
    await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistroy: {
                timestamp: Date.now(),
            }
        }
    })
})

app.listen(PORT, ()=> console.log(`server started ate PORT :${PORT}`) );
