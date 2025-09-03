"use strict";

const Translator = require("../components/translator.js");
const americanOnly = require("../components/american-only.js");
const americanToBritishSpelling = require("../components/american-to-british-spelling.js");
const americanToBritishTitles = require("../components/american-to-british-titles.js");
const britishOnly = require("../components/british-only.js");
const translator = new Translator(
  americanOnly,
  americanToBritishSpelling,
  americanToBritishTitles,
  britishOnly
);

module.exports = function (app) {
  app.route("/api/translate").post((req, res) => {
    console.log(`[API IN]: ${JSON.stringify(req.body)}`);
    const validation = translator.validate(req.body.text, req.body.locale);
    if (validation) {
      res.json(validation);
      return;
    }

    let translation = translator.translate(req.body.text, req.body.locale);
    if (translation == req.body.text) {
      console.log("Everything looks good to me!");
      translation = "Everything looks good to me!";
    }
    const response = {
      text: req.body.text,
      translation: translation,
    };
    console.log(`[API OU]: ${JSON.stringify(response)}`);
    res.json(response);
  });
};
