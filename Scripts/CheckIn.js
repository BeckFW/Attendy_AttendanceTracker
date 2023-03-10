// CheckIn.js
// Functionality for CheckIn page. Captures and stores attendance information

// 03 March 2023

// Functionality

// TO DO - Check if localstorage item exists. If it does, use it, if not, fetch json

// Get Data from URL parameters
try 
{
    let urlParams = new URLSearchParams(window.location.search); 
    let currentRoom = urlParams.get('room_number'); 
}
catch (err) 
{
    console.warn("No url parameters provided"); 
}

// TO DO check room and time against lut to get current module in setModule()

// Global Variables
let currentTime; 
let formattedTime;
let currentModule = "CI517";

// HTML Elements
let submitButton = document.querySelector("#Submit");

// Functions // 

// Async Fetch Json 
async function fetchAttendanceJson() {
    await fetch("/Scripts/AttendanceData.json")
    .then(res => res.json())
    .then(resJson => {
        data = resJson; 
    });
}

// Update Time Field
let getCurrentTime = () =>
{
    let timeDisplay = document.querySelector("#CheckInTime")
    currentTime = new Date();
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()

    if (minutes < 10) {minutes = "0" + minutes};

    formattedTime = hours + ":" + minutes;

    timeDisplay.value = formattedTime;

    // New
    return formattedTime; 
}

let checkIn = () => 
{

    let studentID = document.querySelector("#StudentID").value;
    let roomNumber = document.querySelector("#RoomNumber").value;
    let checkInTime = document.querySelector("#CheckInTime").value;

    // Create new attendance object
    let attendanceObj = {}; 
    
    attendanceObj.type = "lecture"; 
    attendanceObj.date = Date.now(); 
    attendanceObj.room = roomNumber;
    attendanceObj.time = formattedTime; 
    
    data.data[studentID].attendance[currentModule].entries.push(attendanceObj);
    data.data[studentID].attendance[currentModule].entries_num++; 
    data.data[studentID].attendance[currentModule].meetings++;  

    console.log("New attendance record created" + attendanceObj); 

    // Update Local Storage
    updateJsonContent(data, studentID); 
}

let setCurrentModule = () => 
{
    
}

let updateJsonContent = (_newData, _studentID) => 
// Prep for handover to attendance details page
{
    // Clear local storage from previous demos
    localStorage.clear()

    // add logged in student to local storage (demo only)
    localStorage.setItem('studentID', _studentID); 

    // Add JSON to local storage for this session
    localStorage.setItem('jsonData', JSON.stringify(_newData)); 
    console.log("Local storage updated..."); 
    console.log(localStorage.getItem('jsonData')); 
}

let data = fetchAttendanceJson(); 

// Button Event Listener
submitButton.addEventListener("click", checkIn); 

// Update Time Field
getCurrentTime(); 