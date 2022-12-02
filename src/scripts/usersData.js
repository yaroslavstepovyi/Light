import { USERS } from "../mocks/users.js";

const initialUsers = [...USERS];
const usersTableRowsList = document.querySelector(".users__datas-table");
const usersFilterSearchSelect = document.querySelector(".users__filter__search-select");
const resetButton = document.querySelector(".reset-button");
const selectId = document.getElementById("select");


const renderItem = (user) =>{
    const rowElement = document.createElement("tr");

    rowElement.innerHTML = `
        <td><img class="users__datas-user-img" src="../../../Assets/icons/${user.img}.svg" alt=${user.name}></td>
        <td><span>${user.name}</span></td>
        <td><span>${user.country}</span></td>
        <td><span>${user.age}</span></td>
        <td><span>${user.email}</span></td>
        <td><span>${user.role}</span></th>
        <td>
            <button type="submit" class="users__btn-dots">
                <img class="users__datas-dots" src="../../../Assets/icons/users-three-dots.svg" alt="">
            </button>
            <div class="role hidden">
                <ul class="role__lists">
                    <li class="role__list"><button><p>Send email</p></button></li>
                    <li class="role__list"><button><p>Change Role</p></button></li>
                    <li class="role__list"><button><p>Block</p></button></li>
                    <li class="role__list"><button><p>Delete</p></button></li>
                </ul>
            </div>
        </td>
    `;
 

    return rowElement;
};

const renderList = (element, list) =>{
    const bodyElement = document.createElement("tbody");

    const completeBodyElement = list.reduce((bodyElement, item) =>{
        bodyElement.appendChild(renderItem(item));

        return bodyElement;
    }, bodyElement);

    

    element.appendChild(completeBodyElement);
}

renderList(usersTableRowsList, USERS);

//default users order:
const handleBtnReset = () =>{
    usersTableRowsList.innerHTML = `
    <tbody>
    <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Country</th>
        <th>Age</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
    </tr>
    </tbody>`;
    resetButton.style.display = "none";
    selectId.value = "default";

    renderList(usersTableRowsList, initialUsers);
}

//sort:
const handleRoleSelect = (e) =>{
    usersTableRowsList.innerHTML = `
    <tbody>
        <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Country</th>
            <th>Age</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
    </tbody>`;

    const sortRole = e.target.value;
    let sortedUsers = null;

    switch (sortRole) {
        case "admin": 
        console.log("admin", sortRole);
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "admin" ?  -1 : 0);
            break;
        case "moderator":
            console.log("moderator", sortRole);
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "moderator" ?  -1 : 0);
            break;
        case "user":
            console.log("user", sortRole);
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "user" ?  -1 : 0)
            break;
    }

    renderList(usersTableRowsList, sortedUsers);
    resetButton.addEventListener("click", handleBtnReset);
}

usersFilterSearchSelect.addEventListener("change", handleRoleSelect);


const usersBtnDots = document.querySelectorAll(".users__btn-dots");
const role = document.querySelector(".role");

const handleBtnDotsClick = () =>{
    role.classList.toggle("hidden");
}

usersBtnDots.forEach((btn) => {btn.addEventListener("click", handleBtnDotsClick)});