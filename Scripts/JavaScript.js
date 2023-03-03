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

window.onload = UpdateCheckIn();