// Module Dropdown
HC_ModuleOne = document.querySelector(".HomeContainer_ModuleOne")
HC_ModuleOne.addEventListener("click", ToggleModuleOneContent)

HC_ModuleTwo = document.querySelector(".HomeContainer_ModuleTwo")
HC_ModuleTwo.addEventListener("click", ToggleModuleTwoContent)

HC_ModuleThree = document.querySelector(".HomeContainer_ModuleThree")
HC_ModuleThree.addEventListener("click", ToggleModuleThreeContent)

// Forces the display to be in a "hidden" state so you don't need to double-click.
let HomeContainer_ModuleOne_Content = document.querySelector(".HomeContainer_ModuleOne_Content")
let HomeContainer_ModuleOne_AttendanceDonut = document.querySelector(".HomeContainer_ModuleOne_AttendanceDonut")
HomeContainer_ModuleOne_Content.style.display = "none";
HomeContainer_ModuleOne_AttendanceDonut.style.display = "none";

let HomeContainer_ModuleTwo_Content = document.querySelector(".HomeContainer_ModuleTwo_Content")
HomeContainer_ModuleTwo_Content.style.display = "none";
let HomeContainer_ModuleTwo_AttendanceDonut = document.querySelector(".HomeContainer_ModuleTwo_AttendanceDonut")
HomeContainer_ModuleTwo_AttendanceDonut.style.display = "none";

let HomeContainer_ModuleThree_Content = document.querySelector(".HomeContainer_ModuleThree_Content")
HomeContainer_ModuleThree_Content.style.display = "none";
let HomeContainer_ModuleThree_AttendanceDonut = document.querySelector(".HomeContainer_ModuleThree_AttendanceDonut")
HomeContainer_ModuleThree_AttendanceDonut.style.display = "none";

// This can be duplicated per module. I think there has to be a better way to do this.
function ToggleModuleOneContent()
{
    if (HomeContainer_ModuleOne_Content.style.display === "none")
{    HomeContainer_ModuleOne_Content.style.display = "flex";
    HomeContainer_ModuleOne_AttendanceDonut.style.display = "flex"}
    else
{        HomeContainer_ModuleOne_Content.style.display = "none";
        HomeContainer_ModuleOne_AttendanceDonut.style.display = "none";}
}

function ToggleModuleTwoContent()
{
    if (HomeContainer_ModuleTwo_Content.style.display === "none")
{    HomeContainer_ModuleTwo_Content.style.display = "flex";
    HomeContainer_ModuleTwo_AttendanceDonut.style.display = "flex"}
    else
{        HomeContainer_ModuleTwo_Content.style.display = "none";
        HomeContainer_ModuleTwo_AttendanceDonut.style.display = "none";}
}

function ToggleModuleThreeContent()
{
    if (HomeContainer_ModuleThree_Content.style.display === "none")
{    HomeContainer_ModuleThree_Content.style.display = "flex";
    HomeContainer_ModuleThree_AttendanceDonut.style.display = "flex"}
    else
{        HomeContainer_ModuleThree_Content.style.display = "none";
        HomeContainer_ModuleThree_AttendanceDonut.style.display = "none";}
}