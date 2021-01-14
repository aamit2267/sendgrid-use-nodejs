const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendgrid = require("@sendgrid/mail");
const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,     PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/backend", (request, response, next) =>{
  response.send("It's working")
});
app.listen(2000)

app.post("/backend", (request, response, next) => {      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const message = {
  to: "test@mail.com",
  from: "test@mail.com",
  subject: "Website Contact",
  text: request.body.message
}
sendgrid.send(message);
