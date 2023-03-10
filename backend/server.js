//Variable decleration
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//Assign into localhost ports
const PORT = process.env.PORT || 8070;

//Json Methods
app.use(cors());
app.use(bodyParser.json());

//Database Connection
const URL = process.env.MONGODB_URL;

//MongoDB configurations
mongoose.connect(URL, {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false,

});
    

//Mongoose Connection
const connection = mongoose.connection;
connection.once("open",() => { 
    console.log("MongoDB Connection Successful!");
})

//Routers Connection
const serviceRouter=require("./routes/addservice");
const supplierRouter=require("./routes/supplier");
const stockRouter=require("./routes/stock");

//Routers
app.use("/service",serviceRouter)
app.use("/supplier",supplierRouter)
app.use("/stock",stockRouter)
const employeeRouter = require("./routes/employee");
const staffallowance=require("./routes/addallowance");
const staffpaysalary=require("./routes/paysalary");
const customer=require("./routes/customer");


//Routers
app.use("/service",serviceRouter)
app.use("/employee",employeeRouter);

app.use("/staffallowance",staffallowance)
app.use("/staffpaysalary",staffpaysalary)

app.use("/customer",customer)


//Run on port
app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`)
})
