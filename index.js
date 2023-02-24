const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const companyRouter = require("./routers/companyRouter")
app.use(cors());
app.use(express.json());
app.use("/api/organizations", companyRouter)

const MONGODB_CONNECTION__STRING =
  "mongodb+srv://admin:admin@user-cluster.ioias8a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGODB_CONNECTION__STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}).then(() => {
    console.log("Mongodb Connected")
}).catch(err => {
    console.log(err.message)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running in the port", PORT);
});
