const appEl = document.querySelector("#app-el");
const passEl = document.querySelector("#pass-el");

const genPass = (length) => {

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  
  console.log(upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
};

// for (let i = 0; i < upperCase.length; i++) {}
