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

function addNew() {
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("Phone").value;
  const password = document.getElementById("Password").value;
  const name1 = document.getElementById("Name").value;

  let student = JSON.parse(localStorage.getItem("student")) || [];
  let info = {
    name: name1,
    password: password,
    phone: phone,
    email: email,
    month: month,
    date: date,
    year: year,
  };

  if (email !== "" && phone !== "" && password !== "" && name1 !== "") {
    student.push(info);
    localStorage.setItem("student", JSON.stringify(student));
    alert("Student successfully added");
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
                  <td>${pupil.email}</td>
                  <td>${pupil.phone}</td>
                  <td>${index + 1}</td>
                  <td>${pupil.date}-${pupil.month}, ${pupil.year}</td>
                  <td>
                    <button>
                      <img src="img/pen.svg" alt="pen" />
                    </button>
                    <button>
                      <img src="img/delete.svg" alt="delete" />
                    </button>
                  </td>
                </tr>
        `;
  });
}

let getItem = JSON.parse(localStorage.getItem("student"));

table(getItem);
