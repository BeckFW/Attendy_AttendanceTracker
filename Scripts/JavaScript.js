if (document.title == "Attendy: Check In")
{    
    function UpdateCheckIn()
    {
        // Update Time
        let timeDisplay = document.querySelector("#CheckInTime")
        let currentTime = new Date();
        let hours = currentTime.getHours()
        let minutes = currentTime.getMinutes()

        if (minutes < 10) {minutes = "0" + minutes};

        let formattedTime = hours + ":" + minutes;

        timeDisplay.value = formattedTime;

        // Update Student Name
        let headerText = document.querySelector(".CheckInContainer_HeaderText")
        let studentNames = ["Dale", "Beck", "Max", "Lynx", "Artemis"]
        let numOfStudents = studentNames.length
        let studentName = studentNames[Math.floor(Math.random() * numOfStudents)]

        headerText.textContent = "Welcome " + studentName
    }
    window.onload = UpdateCheckIn()
}

// Module Dropdown
HC_ModuleOne = document.querySelector(".HomeContainer_ModuleOne")
HC_ModuleOne.addEventListener("click", ToggleModuleOneContent)

HC_ModuleTwo = document.querySelector(".HomeContainer_ModuleTwo")
HC_ModuleTwo.addEventListener("click", ToggleModuleTwoContent)

HC_ModuleThree = document.querySelector(".HomeContainer_ModuleThree")
HC_ModuleThree.addEventListener("click", ToggleModuleThreeContent)

// Forces the display to be in a "hidden" state so you don't need to double-click.
let HC_M1_Content = document.querySelector(".HomeContainer_ModuleOne_Content")
HC_M1_Content.style.display = "none";

let HC_M2_Content = document.querySelector(".HomeContainer_ModuleTwo_Content")
HC_M2_Content.style.display = "none";

let HC_M3_Content = document.querySelector(".HomeContainer_ModuleThree_Content")
HC_M3_Content.style.display = "none";

// This can be duplicated per module. I think there has to be a better way to do this.
function ToggleModuleOneContent()
{
    if (HC_M1_Content.style.display === "none")
        HC_M1_Content.style.display = "flex";
    else
        HC_M1_Content.style.display = "none";
}

function ToggleModuleTwoContent()
{
    if (HC_M2_Content.style.display === "none")
        HC_M2_Content.style.display = "flex";
    else
        HC_M2_Content.style.display = "none";
}

function ToggleModuleThreeContent()
{
    if (HC_M3_Content.style.display === "none")
        HC_M3_Content.style.display = "flex";
    else
        HC_M3_Content.style.display = "none";
}