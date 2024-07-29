/* 1. Create a new directory and initialize a new Node.js project:

    bash
    mkdir express-app
    cd express-app
    npm init -y*/

/*2. Install Express:*

    bash
    npm install express*/

/*3. Create an index.js file with the following content:**
 */
// javascript
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request
app.get('/', (req, res) => {
  res.send('This is a GET request response');
});

// POST request
app.post('/', (req, res) => {
  res.json(req.body);
});

// PUT request
app.put('/', (req, res) => {
  res.send('Update successful');
});

// DELETE request
app.delete('/', (req, res) => {
  res.send('Delete request successful');
});

app.listen(5000, () => {
  console.log(`app is running at http://localhost:${5000}`);
});
