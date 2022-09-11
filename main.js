const allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePasswordBtn = document.getElementById("generate-password-btn");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");

let passwordLength = 12;

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * allCharacters.length);
  return allCharacters[randomChar];
}

function generateRandomPassword() {
  let randomPasswordOne = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPasswordOne += getRandomCharacter();
  }
  passwordOne.textContent = randomPasswordOne;

  let randomPasswordTwo = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPasswordTwo += getRandomCharacter();
  }
  passwordTwo.textContent = randomPasswordTwo;
}

generatePasswordBtn.addEventListener("click", generateRandomPassword);
