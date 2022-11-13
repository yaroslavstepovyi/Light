const usersFilterSearchSelect = document.querySelector(".users__filter__search-select");
let selectRole = "sortByRole";

const handleRoleSelect = (e) =>{
    selectRole = e.target.value;
    console.log("select:", selectRole);
}

usersFilterSearchSelect.addEventListener("change", handleRoleSelect);
