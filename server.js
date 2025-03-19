const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    console.log(req.body); // Log incoming request data to the terminal
    res.json(req.body); // Send the same data back in response
});

// Define a simple route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});