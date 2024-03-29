//require all the necessary ingredients
const db = require("./db/connection");
const express = require("express");
const startInquirer = require("./lib/departments");
const PORT = process.env.PORT || 3003;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// (Not found)
app.use((req, res) => {
    res.status(404).end();
  });

  // Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      startInquirer();
    });
  });