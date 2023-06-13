// Uc 19 – Display Employee Details in Tabular Format usingTemplate Literals

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

const headerHtml =
    `<tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
<tr>
<td><img class="profile" src="assets/Profile-Images/Ellipse -03.png" alt="profile_img-1"></td>
<td>Yogesh More</td>
<td>Male</td>
<td>
<div class="dept-label">HR</div>
<div class="dept-label">Finance</div>
<div class="dept-label">Engineer</div>
</td>
<td>&#8377; 3500000</td>
<td>25 Oct 2021</td>
<td>
<img id="1" onclick="remove(this)" alt="delete"src="assets/Icons/delete-black-18dp.svg"  >
<img id="1" onclick="update(this)" alt="edit" src="assets/Icons/create-black-18dp.svg"  >
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}