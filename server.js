const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve the JSON file from the 'public' directory
app.use(express.static('public'));

// // API route to fetch car data
// app.get('/cars.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'cars.json'));
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${7118}`);
});
