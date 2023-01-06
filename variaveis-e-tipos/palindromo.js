const word = "radar"

const wordLowerCase = word.toLowerCase();
const wordSplited = wordLowerCase.split('');

const reverseLetters = wordSplited.reverse();

const reverseWord = reverseLetters.join('');

function sameWords(initialWord, finalWord) {
  return initialWord === finalWord ? `${initialWord} é um palíndromo!` : `${initialWord} não é um palíndromo!`;
}

console.log(sameWords(wordLowerCase, reverseWord));