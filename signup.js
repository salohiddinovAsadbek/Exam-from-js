const passwordCheck1 = document.getElementById("passwordCheck1");
const passwordCheck2 = document.getElementById("passwordCheck2");
const passwordCheck3 = document.getElementById("passwordCheck3");
const passwordCheck = document.getElementById("Password");
const checkColor = document.querySelector(".checkColor");
const reminderPassword = document.querySelector(".reminderPassword");
let harflar = "qwertyuiopasdfghjklzxcvbnm";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+{}|:'<>?,./;[]`¡™£¢∞§¶•ªº";
let sum1 = 0;

passwordCheck.addEventListener("input", function (event1) {
  const arr = event1.target.value.split("");
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (harflar.includes(arr[i])) {
      count1 = 1;
    } else if (numbers.includes(arr[i])) {
      count2 = 1;
    } else if (symbols.includes(arr[i])) {
      count3 = 1;
    }
  }
  sum1 = count1 + count2 + count3;

  if (sum1 == 1) {
    checkColor.style.display = "flex";
    passwordCheck1.style.backgroundColor = "red";
    passwordCheck2.style.backgroundColor = "white";
    passwordCheck3.style.backgroundColor = "white";
  } else if (sum1 == 2) {
    checkColor.style.display = "flex";
    passwordCheck1.style.backgroundColor = "orange";
    passwordCheck2.style.backgroundColor = "orange";
    passwordCheck3.style.backgroundColor = "white";
  } else if (sum1 == 3) {
    checkColor.style.display = "flex";
    passwordCheck1.style.backgroundColor = "green";
    passwordCheck2.style.backgroundColor = "green";
    passwordCheck3.style.backgroundColor = "green";
  } else {
    checkColor.style.display = "none";
  }

  if (event1.target.value.length < 8) {
    reminderPassword.style.display = "flex";
  } else {
    reminderPassword.style.display = "none";
  }
});
