// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send ("<h1>This is the contact page</h1>"));

router.get("/date", (req, res) => {
    const currentDate = new Date().toLocaleDateString('en-GB');
    const time  = new Date().toLocaleTimeString('en-GB')// Gets current date & time
    res.send(`<h1>Today's date and time is: ${time}  | ${currentDate}</h1>`);
  });
// Export the router object so index.js can access it
module.exports = router;
