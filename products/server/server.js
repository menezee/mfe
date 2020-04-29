import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 3000;

const app = express();
app.disable('etag');

app.use("/products", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data
        .replace(
          '<div id="products"></div>',
          `<div id="products">
            ${ReactDOMServer.renderToString(<App />)}
          </div>`
        )
        .replace(
          '<div id="profile"></div>',
          `<div id="profile">
            <!--# include virtual="/profile" -->
          </div>`
        )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build/')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
