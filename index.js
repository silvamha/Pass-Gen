const passEl = document.querySelector("#pass-el");

// Initialize variables of different data types

const createRandomPassword = (length) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  let combined = upperCase + lowerCase + numbers + symbols;
  for (let i = 0; i < length -4; i++) {
    password += combined.charAt(Math.floor(Math.random() * combined.length));
  }

  passEl.textContent = `Password: ${password}`;

  // for (let i = 4; i <= length; i++) {
  //   password += i;
  // }
  console.log(password);
};

createRandomPassword(6);
