const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const dbConfig = require("./Config/database");

// Connect to database
mongoose.connect(dbConfig.database);

// On connection
mongoose.connection.on("connected", () => {
   console.log("Connected to database " + dbConfig.database);
});

// On Error
mongoose.connection.on("error", (err) => {
   console.log("Database connection error: " + err);
});

const users = require("./Routes/users");

const port = 3000;

const app = express();

// CORS middleware
app.use(cors());

// Set static folder (for client)
app.use(express.static(path.join(__dirname, 'Public')));

// Body parser middleware
app.use(bodyParser.json());

app.use("/users", users);

function onServerStart() {
   console.log("Server started on port " + port);
}

// Index route
app.get('/', (req, res) => {
   res.send('Invalid Endpoint');
})

app.listen(port, onServerStart);
