"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log(`Res: ${JSON.stringify(req.body)}`);
    res.json({ translation: "Hello World" });
  });
};
