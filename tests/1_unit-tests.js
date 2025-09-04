const chai = require("chai");
const assert = chai.assert;

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
const brToAm = "british-to-american";
const amToBr = "american-to-british";

suite("Unit Tests", () => {
  suite("Translate to British English", () => {
    test("Translate Mangoes are my favorite fruit. to British English", () => {
      let input = "Mangoes are my favorite fruit.";
      let expected =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate I ate yogurt for breakfast. to British English", () => {
      let input = "I ate yogurt for breakfast.";
      let expected =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate We had a party at my friend's condo. to British English", () => {
      let input = "We had a party at my friend's condo.";
      let expected =
        'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate Can you toss this in the trashcan for me? to British English", () => {
      let input = "Can you toss this in the trashcan for me?";
      let expected =
        'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate The parking lot was full. to British English", () => {
      let input = "The parking lot was full.";
      let expected = 'The <span class="highlight">car park</span> was full.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
      let input = "Like a high tech Rube Goldberg machine.";
      let expected =
        'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate To play hooky means to skip class or work. to British English", () => {
      let input = "To play hooky means to skip class or work.";
      let expected =
        'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
      let input = "No Mr. Bond, I expect you to die.";
      let expected =
        'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate Dr. Grosh will see you now. to British English", () => {
      let input = "Dr. Grosh will see you now.";
      let expected =
        '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
    test("Translate Lunch is at 12:15 today. to British English", () => {
      let input = "Lunch is at 12:15 today.";
      let expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation"
      );
    });
  });

  suite("Translate to American English", () => {
    test("Translate We watched the footie match for a while. to American English", () => {
      let input = "We watched the footie match for a while.";
      let expected =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
      let input = "Paracetamol takes up to an hour to work.";
      let expected =
        '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate First, caramelise the onions. to American English", () => {
      let input = "First, caramelise the onions.";
      let expected =
        'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate I spent the bank holiday at the funfair. to American English", () => {
      let input = "I spent the bank holiday at the funfair.";
      let expected =
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate I had a bicky then went to the chippy. to American English", () => {
      let input = "I had a bicky then went to the chippy.";
      let expected =
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
      let input = "I've just got bits and bobs in my bum bag.";
      let expected =
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
      let input = "The car boot sale at Boxted Airfield was called off.";
      let expected =
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate Have you met Mrs Kalyani? to American English", () => {
      let input = "Have you met Mrs Kalyani?";
      let expected =
        'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate Prof Joyner of King's College, London. to American English", () => {
      let input = "Prof Joyner of King's College, London.";
      let expected =
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
      let input = "Tea time is usually around 4 or 4.30.";
      let expected =
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation"
      );
    });
  });

  suite("Highlight translation", () => {
    test("Highlight translation in Mangoes are my favorite fruit.", () => {
      let input = "Mangoes are my favorite fruit.";
      let expected =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Highlight translation"
      );
    });
    test("Highlight translation in I ate yogurt for breakfast.", () => {
      let input = "I ate yogurt for breakfast.";
      let expected =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Highlight translation"
      );
    });
    test("Highlight translation in We watched the footie match for a while.", () => {
      let input = "We watched the footie match for a while.";
      let expected =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Highlight translation"
      );
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
      let input = "Paracetamol takes up to an hour to work.";
      let expected =
        '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Highlight translation"
      );
    });
  });
  suite("Particular cases optimize", () => {
    test("Dr. 1 (Dr.) to British English", () => {
      let input = "Dr. Grosh will see you now.";
      let expected =
        '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation "
      );
    });
    test("Dr. 2 (dr.) to British English", () => {
      let input = "dr. Grosh will see you now.";
      let expected =
        '<span class="highlight">dr</span> Grosh will see you now.';
      assert.equal(
        translator.translate(input, amToBr),
        expected,
        "Translation "
      );
    });
    test("Dr. 3 (Dr) to American English", () => {
      let input = "Dr Grosh will see you now.";
      let expected =
        '<span class="highlight">Dr.</span> Grosh will see you now.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation "
      );
    });
    test("Dr. 4 (dr) to American English", () => {
      let input = "dr Grosh will see you now.";
      let expected =
        '<span class="highlight">dr.</span> Grosh will see you now.';
      assert.equal(
        translator.translate(input, brToAm),
        expected,
        "Translation "
      );
    });
  });
});

/*
---Translate Mangoes are my favorite fruit. to British English
---Translate I ate yogurt for breakfast. to British English
---Translate We had a party at my friend's condo. to British English
---Translate Can you toss this in the trashcan for me? to British English
---Translate The parking lot was full. to British English
-Translate Like a high tech Rube Goldberg machine. to British English
-Translate To play hooky means to skip class or work. to British English
-Translate No Mr. Bond, I expect you to die. to British English
-Translate Dr. Grosh will see you now. to British English
-Translate Lunch is at 12:15 today. to British English

---Translate We watched the footie match for a while. to American English
-Translate Paracetamol takes up to an hour to work. to American English
-Translate First, caramelise the onions. to American English
-Translate I spent the bank holiday at the funfair. to American English
-Translate I had a bicky then went to the chippy. to American English
-Translate I've just got bits and bobs in my bum bag. to American English
---Translate The car boot sale at Boxted Airfield was called off. to American English
-Translate Have you met Mrs Kalyani? to American English
-Translate Prof Joyner of King's College, London. to American English
---Translate Tea time is usually around 4 or 4.30. to American English

Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.
*/
