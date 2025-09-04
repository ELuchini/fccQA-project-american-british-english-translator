class Translator {
  constructor(americanOnly, amToBrSpelling, amToBrTitles, britishOnly) {
    this.americanOnly = americanOnly;
    this.amToBrSpelling = amToBrSpelling;
    this.amToBrTitles = amToBrTitles;
    this.britishOnly = britishOnly;
    this.brToAmSpelling = this._invertDictionary(this.amToBrSpelling);
    this.brToAmTitles = this._invertDictionary(this.amToBrTitles);
    this.spanOpen = '<span class="highlight">';
    this.spanClose = "</span>";
  }
  translate(text, locale) {
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
    return null;
  }

  americanToBritish(text) {
    let translatedText = text;

    //American Only
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.americanOnly
    );
    console.log("[AmToBr] 1- : " + translatedText);

    //Spelling
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.amToBrSpelling
    );
    console.log("[AmToBr] 2- : " + translatedText);

    //Titles
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.amToBrTitles
    );
    console.log("[AmToBr] 3- : " + translatedText);
    text = translatedText;

    //Hour
    const timeRegex = /\d{1,2}:\d{2}/;
    const timeMatch = text.match(timeRegex);
    if (timeMatch) {
      const time = timeMatch[0];
      console.log("Time found: " + time);
      let timeReplace = time.replace(":", ".");
      console.log("Time replaced: " + timeReplace);
      text = text.replace(
        time,
        `${this.spanOpen}${timeReplace}${this.spanClose}`
      );
    }
    return text;
  }

  britishToAmerican(text) {
    //British Only
    console.log("[BrToAm] 1- Starting : " + text);

    let translatedText = text;
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.britishOnly
    );

    console.log("[BrToAm] 2- : " + translatedText);
    // text = translatedText;
    // for (let i = 0; i < this.britishOnlyK.length; i++) {
    //   text = text.replace(
    //     this.britishOnlyK[i],
    //     `${this.spanOpen} ${this.britishOnlyV[i]} ${this.spanClose}`
    //   );
    // }

    //Spelling
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.brToAmSpelling
    );

    // for (let i = 0; i < this.amToBrSpellingK.length; i++) {
    //   text = text.replace(
    //     this.amToBrSpellingV[i],
    //     `${this.spanOpen} ${this.amToBrSpellingK[i]} ${this.spanClose}`
    //   );
    // }
    console.log("[BrToAm] 3- : " + translatedText);
    // text = translatedText;

    //Titles
    translatedText = this._replaceWithHighlight(
      translatedText,
      this.brToAmTitles
    );
    text = translatedText;
    /* for (let i = 0; i < this.amToBrTitlesK.length; i++) {
      //W. Uppercase
      let textSearch =
        this.amToBrTitlesV[i][0].toUpperCase() + this.amToBrTitlesV[i].slice(1);
      let textReplace =
        this.amToBrTitlesK[i][0].toUpperCase() + this.amToBrTitlesK[i].slice(1);
      text = text.replace(
        textSearch,
        `${this.spanOpen}${textReplace}${this.spanClose}`
      );
      //W. Lowercase
      text = text.replace(
        this.amToBrTitlesV[i],
        `${this.spanOpen}${this.amToBrTitlesK[i]}${this.spanClose}`
      );
    } */
    console.log("[BrToAm] 4- : " + translatedText);
    //Hour
    const timeRegex = /\d{1,2}\.\d{2}/;
    const timeMatch = text.match(timeRegex);
    if (timeMatch) {
      const time = timeMatch[0];
      console.log("Time found: " + time);
      let timeReplace = time.replace(".", ":");
      console.log("Time replaced: " + timeReplace);
      text = text.replace(
        time,
        `${this.spanOpen}${timeReplace}${this.spanClose}`
      );
    }
    console.log("[BrToAm] 5- : " + text);

    return text;
  }

  _replaceWithHighlight(text, dictionary) {
    let newText = text;
    console.log("[RWH 1-] : " + text);

    for (const key in dictionary) {
      // Construcción de la Regex Condicional
      let regexString = `\\b${this._escapeRegExp(key)}`;
      // Solo añade el límite de palabra al final si la clave termina con un carácter de palabra.
      if (/\w$/.test(key)) {
        regexString += "\\b";
      }
      const regex = new RegExp(regexString, "gi");

      const replacementValue = dictionary[key];
      // Mantiene la capitalización.
      newText = newText.replace(regex, (match) => {
        // Mantiene la capitalización original
        if (match[0] === match[0].toUpperCase()) {
          console.log("[RWH 2-] : regex:" + regex + " match: " + match);
          const capitalizedReplacement =
            replacementValue[0].toUpperCase() + replacementValue.slice(1);
          return `${this.spanOpen}${capitalizedReplacement}${this.spanClose}`;
        }
        return `${this.spanOpen}${replacementValue}${this.spanClose}`;
      });
    }
    return newText;
  }

  _invertDictionary(data) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [value, key])
    );
  }

  _escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\\]/g, "\\$&");
  }
}

module.exports = Translator;
