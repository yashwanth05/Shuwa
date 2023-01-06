const http = require("http");
const fs = require("fs");
const { response } = require("express");
const axios = require("axios");

const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.end(
    fs.readFile(
      "C:/Users/Yashwanth/OneDrive/Desktop/py2/Hackzon/models/model.json"
    )
  );
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
  console.log(`http://localhost:${port}/model.json`);
});

axios.get(url[config]);
