// Task #1
const words = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS"
];
words.sort();
// const splitWords = words[0].split("");
let splitResult = [];
// Split the word to character.
const splitWords = words.map(word => {
  splitResult.push(word.split(""));
});

const comepareWords = [...words];

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  let checkArray = arr[1].split("");
  for (let i = 0; i < checkArray.length; i++) {
    if (arr[0].indexOf(checkArray[i]) == -1) return false;
  }
  return true;
}

const result = [];

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < comepareWords.length; j++) {
    if (
      mutation([words[i], comepareWords[j]]) === true &&
      words[i] != comepareWords[j]
    ) {
      console.log(`${words[i]} - ${comepareWords[j]}`);
      //   console.log(comepareWords[j]);
    }
  }
}
// console.log(mutation(["AMOR", "XISELA"]));

// Task 2
/**
 * 
 * You have to remove the parentheses and reverse the word inside. 

 */

let reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

let reverseParentheses = str => {
  while (str.includes("(")) {
    const leftParentheses = str.lastIndexOf("(");
    const righParentheses = str.indexOf(")", str.lastIndexOf("("));
    str =
      str.slice(0, leftParentheses) +
      reverse(str.slice(leftParentheses + 1, righParentheses)) +
      (righParentheses + 1 === str.length
        ? str.slice(righParentheses, -1)
        : str.slice(righParentheses + 1));
  }
  return str;
};

// foo(bar) => foorab
// (bar) => rab
// foo(bar)blim => foorabblim
// foo(foo(bar))blim => foobaroofblim
console.log(reverseParentheses("foo(bar)"));
console.log(reverseParentheses("(bar)"));
console.log(reverseParentheses("foo(bar)blim"));
console.log(reverseParentheses("foo(foo(bar))blim"));
