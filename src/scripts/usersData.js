import { USERS } from "../mocks/users.js";

const initialUsers = [...USERS];
const usersTableRowsList = document.querySelector(".users__datas-table");
const usersFilterSearchSelect = document.querySelector(".users__filter__search-select");
const resetButton = document.querySelector(".reset-button");
const selectId = document.getElementById("select");


const renderItem = (user) =>{
    const rowElement = document.createElement("tr");
    rowElement.classList.add("users__datas-row");
    
    rowElement.innerHTML = `
        <td><img class="users__datas-user-img" src="../../../Assets/icons/${user.img}.svg" alt=${user.name}></td>
        <td class="users__datas-user-name">${user.name}</td>
        <td class="users__datas-user-country">${user.country}</td>
        <td class="users__datas-user-age">${user.age}</td>
        <td class="users__datas-user-email">${user.email}</td>
        <td class="users__datas-user-role">${user.role}</th>
        <td class="users__datas-user-action">
            <button type="submit" class="users__btn-dots">
                <img class="users__datas-dots" src="../../../Assets/icons/users-three-dots.svg" alt="">
            </button>
            <div class="role hidden">
                <ul class="role__lists">
                    <li class="role__list role__list-email"><button>Send email</button></li>
                    <li class="role__list role__list-role"><button>Change Role</button></li>
                    <li class="role__list role__list-block"><button>Block</button></li>
                    <li class="role__list role__list-delete"><button>Delete</button></li>
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

usersBtnDots.forEach((btn) => {
    btn.addEventListener("click", handleBtnDotsClick);
});

