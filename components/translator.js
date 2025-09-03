class Translator {
  constructor(americanOnly, amToBrSpelling, amToBrTitles, britishOnly) {
    this.americanOnlyK = Object.keys(americanOnly);
    this.americanOnlyV = Object.values(americanOnly);
    this.amToBrSpellingK = Object.keys(amToBrSpelling);
    this.amToBrSpellingV = Object.values(amToBrSpelling);
    this.amToBrTitlesK = Object.keys(amToBrTitles);
    this.amToBrTitlesV = Object.values(amToBrTitles);
    this.britishOnlyK = Object.keys(britishOnly);
    this.britishOnlyV = Object.values(britishOnly);
    this.spanOpen = '<span class="highlight">';
    this.spanClose = "</span>";
    this.isCap = false;
  }
  translate(text, locale) {
    // console.log("locale: " + locale);
    // console.log("text: " + text);
    // console.log(this.amToBrSpellingK.length);

    switch (locale) {
      case "american-to-british":
        // console.log("case: american-to-british");
        return this.americanToBritish(text);
      case "british-to-american":
        // console.log("case: british-to-american");
        return this.britishToAmerican(text);
      default:
        return text;
    }
  }

  americanToBritish(text) {
    for (let i = 0; i < this.americanOnlyK.length; i++) {
      text = text.replace(
        this.americanOnlyK[i],
        `${this.spanOpen}${this.americanOnlyV[i]}${this.spanClose}`
      );
    }
    for (let i = 0; i < this.amToBrSpellingK.length; i++) {
      text = text.replace(
        this.amToBrSpellingK[i],
        `${this.spanOpen}${this.amToBrSpellingV[i]}${this.spanClose}`
      );
    }
    for (let i = 0; i < this.amToBrTitlesK.length; i++) {
      text = text.replace(
        this.amToBrTitlesK[i],
        `${this.spanOpen} ${this.amToBrTitlesV[i]} ${this.spanClose}`
      );
    }
    return text;
  }

  britishToAmerican(text) {
    for (let i = 0; i < this.britishOnlyK.length; i++) {
      text = text.replace(
        this.britishOnlyK[i],
        `${this.spanOpen} ${this.britishOnlyV[i]} ${this.spanClose}`
      );
    }
    for (let i = 0; i < this.amToBrSpellingK.length; i++) {
      text = text.replace(
        this.amToBrSpellingV[i],
        `${this.spanOpen} ${this.amToBrSpellingK[i]} ${this.spanClose}`
      );
    }
    for (let i = 0; i < this.amToBrTitlesK.length; i++) {
      // if (text[0] == text[0].toUpperCase()) {
      //   this.isCap = true;
      // }
      //   if (text.toLowerCase().includes(this.amToBrTitlesV[i])) {
      text = text.replace(
        this.amToBrTitlesV[i],
        `${this.spanOpen} ${this.amToBrTitlesK[i]} ${this.spanClose}`
      );
    }
    // }
    return text;
  }

  validate(text, locale) {
    if (locale !== "american-to-british" && locale !== "british-to-american") {
      return { error: "Invalid value for locale field" };
    }
    if (text == "") {
      console.log("No text to translate");
      return { error: "No text to translate" };
    }
    if (!text || !locale) {
      console.log("Required field(s) missing");
      return { error: "Required field(s) missing" };
    }
    if (typeof text !== "string") {
      console.log("Text is not a string, No text to translate");
      return { error: "No text to translate" };
    }
  }
}

module.exports = Translator;
