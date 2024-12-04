let current = new Date();
let month = current.getMonth();
let date = current.getDate();
let year = current.getFullYear();
switch (month) {
  case 0:
    month = "Jan"; // January
    break;
  case 1:
    month = "Feb"; // February
    break;
  case 2:
    month = "Mar"; // March
    break;
  case 3:
    month = "Apr"; // April
    break;
  case 4:
    month = "May"; // May
    break;
  case 5:
    month = "Jun"; // June
    break;
  case 6:
    month = "Jul"; // July
    break;
  case 7:
    month = "Aug"; // August
    break;
  case 8:
    month = "Sep"; // September
    break;
  case 9:
    month = "Oct"; // October
    break;
  case 10:
    month = "Nov"; // November
    break;
  case 11:
    month = "Dec"; // December
    break;
  default:
    month = "Invalid"; // Noto'g'ri oy raqami
}

// password start

// password end

function addNew() {
  const option = document.getElementById("option").value;
  const phone = document.getElementById("Phone").value;
  const password = document.getElementById("Password").value;
  const name1 = document.getElementById("Name").value;

  let student = JSON.parse(localStorage.getItem("student")) || [];
  let info = {
    name: name1,
    password: password,
    phone: phone,
    option: option,
    month: month,
    date: date,
    year: year,
  };

  let studentId = JSON.parse(localStorage.getItem("studentId")) || [];

  if (
    option !== "" &&
    phone !== "" &&
    password !== "" &&
    name1 !== "" &&
    sum1 == 3 &&
    password.length > 8
  ) {
    student.push(info);
    localStorage.setItem("student", JSON.stringify(student));
    studentId[0] = info;
    localStorage.setItem("studentId", JSON.stringify(studentId));
    alert("Student successfully added");
    window.location.href = "./home.html";
  } else {
    alert("Fill all the information");
  }
}

const tbody1 = document.querySelector(".tbody");

function table(student) {
  tbody1.innerHTML = "";
  student.map((pupil, index) => {
    tbody1.innerHTML += `
            <tr>
                  <td>
                    <img src="img/person photo.svg" alt="person" />
                    <span>${pupil.name}</span>
                  </td>
                  <td>${pupil.option}</td>
                  <td>${pupil.phone}</td>
                  <td>${pupil.password}</td>
                  <td>${pupil.date}-${pupil.month}, ${pupil.year}</td>
                  <td>
                    <button onclick= "reverse(${index + 1})">
                      <img src="img/pen.svg" alt="pen" />
                    </button>
                    <button onclick="delete1(${index + 1})">
                      <img src="img/delete.svg" alt="delete" />
                    </button>
                  </td>
                </tr>
        `;
  });
}

let getItem = JSON.parse(localStorage.getItem("student"));

table(getItem);

let signUp = "./signUp.html";

function reverse(a) {
  let inson = JSON.parse(localStorage.getItem("studentReverse")) || [];
  console.log("slaomn");

  inson[0] = getItem[a];
  localStorage.setItem("studentReverse", JSON.stringify(inson));
  window.location.href = signUp;
}

const input = document.querySelector(".search");
const searchBtn = document.querySelector(".searchBtn");

input.addEventListener("input", function (event) {
  const filtered = getItem.filter((inson) => {
    if (inson.name.toLowerCase().includes(event.target.value.toLowerCase())) {
      return inson;
    } else if (inson.phone.includes(event.target.value)) {
      return inson;
    }
  });
  table(filtered);
});
let sara = "";
function sort() {
  const sorted = getItem.sort((a, b) => a.name.localeCompare(b.name));
  const sorted1 = getItem.sort((a, b) => a.option.localeCompare(b.option));
  if (sara == "sara") {
    table(sorted1);
    sara = "";
  } else {
    table(sorted);
    console.log("salom");
    sara = "sara";
  }
}

function delete1(id) {
  console.log(id);
  getItem.splice(id - 1, 1);
  localStorage.setItem("student", JSON.stringify(getItem));
  location.reload();
}
