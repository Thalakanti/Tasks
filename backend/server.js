const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const { json } = require("body-parser");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*", // Allow all origins, but it's better to specify specific origins for security.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};
app.use(cors(corsOptions));

const port = 5000;

const mongoUrl =
  "mongodb+srv://thalakanti4r:Venkat1234@atlascluster.dukjchm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose.connect(mongoUrl, {});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

const userRoutes = require("./routes/userRoute");
app.use("/api", userRoutes);

const eventRoutes = require("./routes/eventRoute");

app.use("/api", eventRoutes);

app.listen(port, () => {
  console.log("My server has started on the port " + port);
});
