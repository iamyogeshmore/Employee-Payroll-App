// Day 45 -UC 6 – Display Employee Details from Local Storage

let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
return localStorage.getItem('EmployeePayrollList') ? 
JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
const headerHtml ="<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
                "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        
if(employeePayrollList.length == 0)return;
let innerHtml = `${headerHtml}`;
for(const employeePayrollData of employeePayrollList){
innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" src="${employeePayrollData._profileImage}"></td>  
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData.fullDate}</td>
        <td>
        <img id =${employeePayrollData._id} src="../assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this.id)">
        <img id =${employeePayrollData._id} src="../assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this.id)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
    departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
}

// Day 46-UC 1 – Remove an Employee from the Payroll details

const remove = (node) => {
    console.log(node);
    let employeePayrollData = employeePayrollList.find(employeeData => employeeData._id == node);
    console.log(employeePayrollData);
    if (!employeePayrollData)
    return;
const index = employeePayrollList
                .map(employeeData => employeeData._id)
                .indexOf(employeePayrollData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
};