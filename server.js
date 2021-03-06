const express = require("express");
const app = express();
const connectDB=require('./config/connectDB')

//4- parse data
app.use(express.json())
//3- routes
app.use('/api/contacts', require("./routes/contact"))
//2- connect DB
connectDB()
//1- run server
const port = process.env.PORT || 7000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on ${port}`);
});
