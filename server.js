//require all the necessary ingredients
const db = require("./db/connection");
const express = require("express");
const startInquirer = require("./lib/departments");
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// (Not found)
app.use((req, res) => {
    res.status(404).end();
  });

  