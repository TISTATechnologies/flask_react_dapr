
// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3

const path = require("path");
const express = require("express");
const app = express(); // create express app
const axios = require("axios");
const cors = require('cors');

app.use(cors({
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false,
  'optionsSuccessStatus': 204
}))



app.use(express.static("build"));

app.get('/api/currentTime', (req,res) => {
    const DAPR_HOST = process.env.DAPR_HOST || "http://localhost";
    const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || "3500";

    let APP_NAME = 'flask-backend'
    let METHOD = 'currentTime';

    url = `${DAPR_HOST}:${DAPR_HTTP_PORT}/v1.0/invoke/${APP_NAME}/method/${METHOD}`;

    axios.get(url).then(resp => {
         res.send(resp.data)
         res.end()
    }).catch(err =>  {return res.send(err.data)});
    

});


app.listen(8080, () => {
    console.log("server started on port 8080");
});


// 1. Run npm run build
// 2. run node express.js