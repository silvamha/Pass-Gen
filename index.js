const passEl = document.querySelector("#pass-el");

const createRandomPassword = (charLength, numLength) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let passwordChars = "";
  let passwordNumbers = [];

  // Ensure at least one character from each category
  passwordChars += upperCase.charAt(
    Math.floor(Math.random() * upperCase.length)
  );
  passwordChars += lowerCase.charAt(
    Math.floor(Math.random() * lowerCase.length)
  );
  passwordChars += symbols.charAt(Math.floor(Math.random() * symbols.length));

  let combinedChars = upperCase + lowerCase + symbols;
  for (let i = 0; i < charLength - 3; i++) {
    passwordChars += combinedChars.charAt(
      Math.floor(Math.random() * combinedChars.length)
    );
  }

  // Generate numbers
  for (let i = 0; i < numLength; i++) {
    passwordNumbers.push(Math.floor(Math.random() * 10));
  }

  // Shuffle characters and numbers separately
  passwordChars = shuffleString(passwordChars);
  passwordNumbers = shuffleArray(passwordNumbers);

  // Interleave characters and numbers
  let password = interleave(passwordChars.split(""), passwordNumbers);

  passEl.textContent = `Password: ${password}`;

  console.log(password);
};

// Fisher-Yates shuffle algorithm for strings
const shuffleString = (str) => {
  let arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};

// Fisher-Yates shuffle algorithm for arrays
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Interleave two arrays
const interleave = (arr1, arr2) => {
  let result = [];
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }
  return result.join("");
};

createRandomPassword(8, 6);
