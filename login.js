let getItem = JSON.parse(localStorage.getItem("student")) || [];
let admin = "./index.html";
let studentPage = "./home.html";
let us = [];
let arr = "";
// let getItem2 = JSON.parse(localStorage.getItem("studentId")) || [];

function logIn() {
  const nameCheck = document.getElementById("NameCheck").value;
  const passwordCheck = document.getElementById("PasswordCheck").value;
  if (getItem.length > 0) {
    getItem.map((inson) => {
      if (nameCheck == inson.name && passwordCheck == inson.password) {
        arr = "student";
        us.push(inson);
        localStorage.setItem("studentId", JSON.stringify(us));
      } else if (nameCheck == "asadbek" && passwordCheck == "asadbek") {
        arr = "admin";
      } else {
        arr = "bosh";
      }
    });
  } else {
    alert("Incorrect");
  }

  if (arr == "student") {
    window.location.href = studentPage;
  } else if (arr == "admin") {
    window.location.href = admin;
  } else if (arr == "bosh") {
    alert("Password and Name can be incorrect");
  }
}
