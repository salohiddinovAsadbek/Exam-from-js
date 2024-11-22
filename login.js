let getItem = JSON.parse(localStorage.getItem("student")) || [];
let admin = "./index1.html";
let studentPage = "./home.html";
let us = JSON.parse(localStorage.getItem("studentId")) || [];

// let getItem2 = JSON.parse(localStorage.getItem("studentId")) || [];

function logIn() {
  let arr = "";
  const nameCheck = document.getElementById("NameCheck").value;
  const passwordCheck = document.getElementById("PasswordCheck").value;
  if (getItem.length > 0) {
    getItem.map((inson) => {
      if (inson.name == nameCheck && inson.password == passwordCheck) {
        arr = "student";
        us[0] = inson;
        localStorage.setItem("studentId", JSON.stringify(us));
      } else if (nameCheck == "asadbek" && passwordCheck == "asadbek") {
        arr = "admin";
      }
    });
  }
  if (nameCheck == "") {
    arr = "bosh";
  } else if (passwordCheck == "") {
    arr = "bosh";
  }

  if (arr == "student") {
    window.location.href = studentPage;
  } else if (arr == "admin") {
    window.location.href = admin;
  } else if (arr == "bosh") {
    alert("Password and Name can be incorrect");
  }
}
