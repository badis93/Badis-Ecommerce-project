const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://badis:badis@ecommerce.yvqot.mongodb.net/products?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => 
        { 
            if(err) console.log(err);
            else console.log("db connected");
        }
)

app.use(express.json());

app.use("/api/products", require("./routes/productsRoutes"));

app.listen(5000, (err) => 
    { 
        if(err) console.log(err);
        else console.log("server is running");
    }
)

