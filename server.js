// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// add any necessary code you'd want to!

app.use(express.static(path.join(__dirname, "public")));

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    //TODO add code!
      res.redirect("https://github.com/yoo-hec/Climate-Crisis");
  });
  
  // Route for Typesetting
  app.get("/typesetting", (req, res) => {
    //TODO add code
      res.redirect("https://github.com/yoo-hec/Typesetting");
  });
  
  // Route for Four Algorithms
  app.get("/four-algorithms", (req, res) => {
    //TODO add code 
      res.redirect("https://github.com/yoo-hec/CSC-317");
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
