// get list of all 5 letter words
const allWords = require("./words");
// has these letters
const hasLetters = ["r", "e"];
// must not has these letters
const mustNotHaveLetters = ["w", "n", "d", "y", "a", , "l"];
// must have selected letters in these positions
const mustHaveLettersInPosition = ["p", , , , "e"];
// not in these positions
const mustNotHaveLettersInPosition = [, "o", , "e", "r"];

const containsLetter = (word, letter) => {
  return word.includes(letter);
};

const doesNotContainLetter = (word, letter) => {
  return !word.includes(letter);
};

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
};

const filteredWords = allWords.filter((word) => {
  return (
    hasLetters.every((letter) => containsLetter(word, letter)) &&
    mustNotHaveLetters.every((letter) => doesNotContainLetter(word, letter)) &&
    mustHaveLettersInPosition.every((letter, index) =>
      hasLetterInPosition(word, letter, index)
    ) &&
    mustNotHaveLettersInPosition.every(
      (letter, index) => !hasLetterInPosition(word, letter, index)
    )
  );
});

console.log(filteredWords);
console.log("possible words", filteredWords.length);
