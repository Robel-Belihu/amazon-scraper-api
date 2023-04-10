const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = "1b5c701f9fcd3edff1f0001c34e533ae";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  //this is what we send back when somebody is visiting the aforementioned url
  res.send(
    "welcome to amazon scraper, This is an api made with the help of scraperapi which provides 4 endpoints which lead to amazon product details, amazon product reviews, product offers and amazon search results."
  );
});

//GET PRODUCT DETAILS

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//GET PRODUCT REVIEW
app.get("/products/:productId/reviews", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
//GET OFFERS
app.get("/products/:productId/offers", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//IMPLEMENT THE SEARCH RESULTS
app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () =>
  console.log(`server is currently running on port ${PORT}`)
);
