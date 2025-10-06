// Import the Express framework
const express = require('express');
const app = express();

// Define the port to run the server on. 
// It uses the environment variable PORT, which is often set by hosting providers, 
// or defaults to 3000 for local development.
const PORT = process.env.PORT || 3000;

// Define a simple route for the homepage
app.get('/', (req, res) => {
  console.log('Request received for /');
  res.send('<h1>Hello from Node.js CI/CD App!</h1><p>Deployment successful via GitHub Actions.</p>');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Export the app instance (useful for external testing frameworks)
module.exports = app;
