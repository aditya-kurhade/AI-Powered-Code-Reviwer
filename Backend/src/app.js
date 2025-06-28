const express = require('express');
const aiRoute = require('./routes/ai.route');

const app = express();

app.get("/" , (req, res) => {
    res.send("Welcome to the AI-Powered Code Reviewer!");
})

app.use("/ai", aiRoute);
app.use(express.json()); // Middleware to parse JSON bodies

module.exports = app;