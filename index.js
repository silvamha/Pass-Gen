const passEl = document.querySelector("#pass-el");

const createRandomPassword = (charLength, numLength) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let passwordChars = "";
  let passwordNumbers = "";

  // Ensure at least one character from each category
  passwordChars += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  passwordChars += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  passwordChars += symbols.charAt(Math.floor(Math.random() * symbols.length));

  let combinedChars = upperCase + lowerCase + symbols;
  for (let i = 0; i < charLength - 3; i++) {
    passwordChars += combinedChars.charAt(Math.floor(Math.random() * combinedChars.length));
  }

  // Generate numbers
  for (let i = 0; i < numLength; i++) {
    passwordNumbers += Math.floor(Math.random() * 10);
  }

  // Combine characters and numbers
  let password = `${passwordChars}${passwordNumbers}`;

  passEl.textContent = `Password: ${password}`;

  console.log(password);
};

createRandomPassword(8, 6);


