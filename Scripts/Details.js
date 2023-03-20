
function UpdateDetails()
{

  let localStorageFile = localStorage.getItem("jsonData");
  let jsonFile = JSON.parse(localStorageFile);

  let studentID = localStorage.getItem("studentID");


  var allMeetings = 0;
  var attended = 0;
  var missed = 0;
  var currentAllMeetings = 0;
  var currentAttended = 0;
  var attendanceData;
  let modules = jsonFile.data[studentID].enlisted_modules;
  for(let i = 0; i < modules.length; i++)
  {
    currentAllMeetings = jsonFile.data[studentID].attendance[modules[i]].meetings;
    currentAttended = jsonFile.data[studentID].attendance[modules[i]].entries_num;
    missed = currentAllMeetings - currentAttended;

    // Create chart for each module
    let chartData = [currentAttended, missed];
    createChart(modules[i], chartData);

    // Manage data for each module
    let textClassAttended = ".HomeContainer_ModuleSessionInformation_Attended_" + modules[i]; 
    let textClassAbsent = ".HomeContainer_ModuleSessionInformation_Absent_" + modules[i];
    document.querySelector(textClassAttended).textContent = "Attended: " + currentAttended;
    document.querySelector(textClassAbsent).textContent = "Absent: " + missed;

    // Update overall attendance data
    allMeetings += currentAllMeetings;
    attended += currentAttended;

  }
    
  // Update variable to apply for overall attendance
  missed = allMeetings - attended;
  document.querySelector(".Attended_Text").textContent = "Attended: " + attended;
  document.querySelector(".Absent_Text").textContent = "Absent: " + missed;
  document.querySelector(".TotalSessions_Text").textContent = "Total Sessions: " + allMeetings;


  attendanceData = [attended, missed];
  let name = "OverallAttendanceDonut";
  createChart(name, attendanceData)

  

}

function createChart(chartName, pData)
{
  new Chart(chartName, {
    type: "doughnut",
    data: {
      labels: ["Attended", "Missed"],
      datasets: [{
        backgroundColor: [
          "#1e7145",
          "#b91d47"
          ],
        data: pData
      }]
    },
    options: {
        legend: {
            display: false
        }
    }
  });
}

function getAllMeetings(jsonFile, studentID, module)
{
  return jsonFile.data[studentID].attendance[module].meetings;
}

window.onload = UpdateDetails();



