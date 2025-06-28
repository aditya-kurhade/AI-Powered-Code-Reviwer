const express = require('express');
const aiRoute = require('./routes/ai.route');
const cors = require('cors');


const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/" , (req, res) => {
    res.send("Welcome to the AI-Powered Code Reviewer!");
})

app.use("/ai", aiRoute);


module.exports = app;