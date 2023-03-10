
function UpdateDetails()
{

  let localStorageFile = localStorage.getItem("jsonData");
  let jsonFile = JSON.parse(localStorageFile);

  let studentID = localStorage.getItem("studentID");


  var allMeetings = 0;
  let modules = jsonFile.data[studentID].enlisted_modules;
  for(let i = 0; i < modules.length; i++)
  {
    allMeetings += jsonFile.data[studentID].attendance[modules[i]].meetings;
  }
    
  var attended = 0;
  for(let i = 0; i < modules.length; i++)
  {
    attended += jsonFile.data[studentID].attendance[modules[i]].entries_num;
  }

   var missed = allMeetings - attended;
   document.querySelector(".Attended_Text").textContent = "Attended: " + attended;
   document.querySelector(".Absent_Text").textContent = "Absent: " + missed;
   document.querySelector(".TotalSessions_Text").textContent = "Total Sessions: " + allMeetings;
   var xValues = ["Attended", "Missed"];
   var yValues = [attended, missed];
   var barColors = [
   "#1e7145",
   "#b91d47"
   ];

   new Chart("OverallAttendanceDonut", {
       type: "doughnut",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
           legend: {
               display: false
           }
       }
     });
}

window.onload = UpdateDetails();



