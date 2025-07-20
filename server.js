const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the wheat information page
app.get('/wheat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Wheat.html'));
});

app.get('/maize', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Maize.html'));
});

app.get('/jowar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'jowar.html'));
});
app.get('/paddy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'paddy.html'));
});
app.get('/cotton', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cotton.html'));
});
app.get('/sugarcane', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sugarcane.html'));
});
app.get('/redgram', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'red gram.html'));
});
app.get('/greengram', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'green gram.html'));
});
app.get('/groundnut', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'groundnut.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
