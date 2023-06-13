// <!-- UC 8 - Ability to Set Event Listener on Salary Range to display appropriate value -->

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

//  <!--Uc 12 – On Document Load Set Event Listeners.-->

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().name = name.value;
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });
});
