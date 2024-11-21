let studentId = JSON.parse(localStorage.getItem("studentId"));
const nameStudent = document.querySelectorAll(".nameStudent");
const courseStudent = document.querySelectorAll(".courseStudent");

console.log(studentId);

studentId.map((inson) => {
  nameStudent[0].textContent = inson.name;
  nameStudent[1].textContent = inson.name;
  courseStudent[0].textContent = inson.option;
});
