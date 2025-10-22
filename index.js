// Set up express
const express = require("express");
const app = express();
const port = 8000; 

console.log("Starting Node server...");

// Handle the routes

const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

app.get("/", (req, res) => res.send("Hello World!")); 

app.get("/about", (req, res) => {
    res.send("<h1>This is about page</h1>");
  });

app.get("/contact", (req, res) => {
    res.send("<h1>This is contact page</h1>");
});

app.get("/date", (req, res) => {
    const currentDate = new Date().toLocaleDateString('en-GB');
    const time  = new Date().toLocaleTimeString('en-GB')// Gets current date & time
    res.send(`<h1>Today's date and time is: ${time}  | ${currentDate}</h1>`);
  });

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));