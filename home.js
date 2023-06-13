// Uc 19 – Display Employee Details in Tabular Format usingTemplate Literals

window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

  let innerHtml = `${headerHtml}`;
  let employeePayrollDataList = createEmployeePayrollJSON();

  for (const employeePayrollData of employeePayrollDataList) {
    innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" src="${
          employeePayrollData._profileImage
        }" alt="profile_img-1"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>
        
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
  let employeePayrollListLocal = [
    {
      _name: "Yogesh More",
      _gender: "Male",
      _department: ["HR", "Engineer"],
      _salary: 35000000,
      _startDate: "02 jun 2021",
      _note: "Employee payroll application",
      _id: new Date().getTime(),
      _profileImage: "../assets/profile-images/Ellipse -05.png",
    },
    {
      _name: "Rajat Nikam",
      _gender: "Male",
      _department: ["HR"],
      _salary: 4000000,
      _startDate: "08 jun 2022",
      _note: "Employee details",
      _id: new Date().getTime(),
      _profileImage: "../assets/profile-images/Ellipse -02.png",
    },
  ];
  return employeePayrollListLocal;
};
const getDepartmentHtml = (departmentList) => {
  let departmentHtml = "";
  for (const department of departmentList) {
    departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`;
  }
  return departmentHtml;
};
