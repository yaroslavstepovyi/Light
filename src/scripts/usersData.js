import { USERS } from "../mocks/users.js";

const initialUsers = [...USERS];
const usersTableRowsList = document.querySelector(".users__datas-table");
const usersFilterSearchSelect = document.querySelector(".users__filter__search-select");
const resetButton = document.querySelector(".reset-button");
const selectId = document.getElementById("select");
const backgroundTransparent = document.querySelector(".background-transparent");


const renderItem = (user) =>{
    const rowElement = document.createElement("tr");
    rowElement.classList.add("users__datas-row");

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
    </tbody>`
    
    rowElement.innerHTML = `
        <td><img class="users__datas-user-img" src="../../../Assets/icons/${user.img}.svg" alt=${user.name}></td>
        <td>${user.name}</td>
        <td>${user.country}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.role}</th>
        <td class="users__datas-user-action">
            <button type="submit" class="users__btn-dots" data-id="${user.id}" data-name="${user.name}">
                <img class="users__datas-dots" src="../../../Assets/icons/users-three-dots.svg" alt="">
            </button>
            <div class="role hidden">
                <ul class="role__lists">
                    <li class="role__list role-send-email"><button>Send email</button></li>
                    <li class="role__list role-change-role"><button>Change Role</button></li>
                    <li class="role__list role-block"><button>Block</button></li>
                    <li class="role__list role-delete"><button>Delete</button></li>
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

const dialogRoleShow = () =>{
    const userRole = JSON.parse(localStorage.getItem("user")).role;
    const userLogged = JSON.parse(localStorage.getItem("user"));
    const usersBtnDots = document.querySelectorAll(".users__btn-dots");
    const role = document.querySelectorAll(".role");
    const rightChangeRole = document.querySelectorAll(".role-change-role");
    const rightSendEmail = document.querySelectorAll(".role-send-email");
    const rightBlock = document.querySelectorAll(".role-block");
    const rightDelete = document.querySelectorAll(".role-delete");
    
    for(let elem in usersBtnDots){
        const handleUsersBtnDots = () =>{
                role[elem].classList.toggle("hidden");
                
                if(userRole === "moderator"){
                    rightDelete[elem].classList.add("hidden");
                }
    
                if(userRole === "user"){
                    rightChangeRole[elem].classList.add("hidden");
                    rightBlock[elem].classList.add("hidden");
                    rightDelete[elem].classList.add("hidden");
                }

                if(userLogged.id === usersBtnDots[elem].getAttribute("data-id")){
                    backgroundTransparent.classList.toggle("hidden");
                    return;
                }else{
                    rightChangeRole[elem].addEventListener("click", function showRightRole(){
                        console.log("change role:", "\n",
                        "id:", userLogged.id, "name:", userLogged.name, "\n",
                        "id:", usersBtnDots[elem].getAttribute("data-id"), "name:", usersBtnDots[elem].getAttribute("data-name"));
                    })
        
                    rightBlock[elem].addEventListener("click", () => { 
                        console.log("block:", "\n",
                        "id:", userLogged.id, "name:", userLogged.name, "\n",
                        "id:", usersBtnDots[elem].getAttribute("data-id"), "name:", usersBtnDots[elem].getAttribute("data-name"));
                    })
        
                    rightDelete[elem].addEventListener("click", () => {
                        console.log("delete:", "\n",
                        "id:", userLogged.id, "name:", userLogged.name, "\n",
                        "id:", usersBtnDots[elem].getAttribute("data-id"), "name:", usersBtnDots[elem].getAttribute("data-name"));
                    })
        
                    rightSendEmail[elem].addEventListener("click", () => {
                        console.log("send email:", "\n",
                        "id:", userLogged.id, "name:", userLogged.name, "\n",
                        "id:", usersBtnDots[elem].getAttribute("data-id"), "name:", usersBtnDots[elem].getAttribute("data-name"));
                    })
                }
    
                backgroundTransparent.classList.toggle("hidden");
        }

        usersBtnDots[elem].addEventListener("click", handleUsersBtnDots);       

        backgroundTransparent.addEventListener("click", () =>{
            backgroundTransparent.classList.add("hidden");
            role[elem].classList.add("hidden");
        })
    }
}

const usersDatasRow = document.querySelector(".users__datas-row");
const paginationListBtns = document.querySelector(".pagination__list-btns");
let notesOnPage = 6;                                                                      

const pagination = () =>{
    
    const amountElementOnPage = Math.ceil(USERS.length / (notesOnPage));

    let items = [];
    for(let i = 1; i <= amountElementOnPage; i++){
        const li = document.createElement("li");
        li.classList.add("pagination__list-btn");
        li.classList.add("hidden");

        if(USERS.length > notesOnPage){
            li.classList.remove("hidden");
        }

        const button = document.createElement("button");
        button.classList.add("pagination__list-btn-page");
        li.appendChild(button);
        button.innerHTML = i;
        paginationListBtns.appendChild(li);
        items.push(button);
    }
    
    let active;
    showPage(items[0]);

    for(let item of items){
        item.addEventListener("click", function(){
            showPage(this);
            dialogRoleShow();
        })
    }

    function showPage(elem) {
        if(active){
            active.classList.remove("active");
        }
        
        active = elem;
        elem.classList.add("active");
    
        let pageNum = +elem.innerHTML;
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;
        let notes = USERS.slice(start, end);
        
        usersDatasRow.innerHTML = "";
        
        renderList(usersTableRowsList, notes);  
    }
}

//default users order:
const handleBtnReset = () =>{
    resetButton.style.display = "none";
    selectId.value = "default";
    
    renderList(usersTableRowsList, initialUsers.slice(0, notesOnPage));
    dialogRoleShow ();
}

//sort:
const handleRoleSelect = (e) =>{
    const sortRole = e.target.value;
    let sortedUsers = null;
    
    switch (sortRole) {
        case "admin": 
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "admin" ?  -1 : 0);
            break;
        case "moderator":
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "moderator" ?  -1 : 0);
            break;
        case "user":
            resetButton.style.display = "block";
            sortedUsers = USERS.sort((a) => a.role === "user" ?  -1 : 0);
            break;
    }
    
    renderList(usersTableRowsList, sortedUsers.slice(0, notesOnPage));
    resetButton.addEventListener("click", handleBtnReset);
    dialogRoleShow ();
}

usersFilterSearchSelect.addEventListener("change", handleRoleSelect);

pagination();

dialogRoleShow();

