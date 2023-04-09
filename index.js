const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "1b5c701f9fcd3edff1f0001c34e533ae";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  //this is what we send back when somebody is visiting the aforementioned url
  res.send("welcome to amazon scraper");
});

//get product details

app.listen(PORT, () =>
  console.log(`server is currently running on port ${PORT}`)
);
