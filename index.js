let app = document.querySelector("#app");
let password = document.querySelector("#password");
let passwordLength = 12;
let passwordLowercase = true;
let passwordUppercase = true;
let passwordNumbers = true;
let passwordSymbols = true;

let body = document.querySelector("body");

function generatePassword(length) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+={}[]|;:,.<>?";

  let password = "";

  // Ensure we have at least one of each type
  password += letters.charAt(Math.floor(Math.random() * letters.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  // Fill the rest of the password with random characters
  for (let i = 3; i < length; i++) {
    const allChars = letters + numbers + symbols;
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
    console.log(allChars)
  }

  // Shuffle the password for extra security
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
  return password;
}

// Example usage
let newPassword = generatePassword(12);
console.log(newPassword);
