const express = require('express'); // Import the express module
const app = express(); // Create an Express application instance
const port = 3000; // Define the port number

// Define a GET route for the root URL ('/') //
app.get('/', (req, res) => {
  res.send('Hello World! This is an Express app. Uploaing on Vercel'); // Send a response
});

// Start the server and listen for incoming connections
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
