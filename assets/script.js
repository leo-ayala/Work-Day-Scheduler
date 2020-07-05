saveTaskEl = document.getElementById("save-Task")
textAreaEl = document.querySelector("#Work-todo")
var ToDo = ['','','','','','','','',''];

const m = moment();
currentDayEl = document.querySelector("#currentDay")
currentDayEl.textContent = m.format("dddd, MMMM Do YYYY");
var currentHour = (m.format("HH"));
loadTasks();

$(".saveBtn").on("click", function () {
    var time = $(this).attr("data-time");
    var text = $("#"+ time + "-Text").val();
    ToDo[parseInt(time)-9] = text
    console.log(ToDo);
    localStorage.setItem("Tasks", JSON.stringify(ToDo))
});

function loadTasks () {
    var savedTasks = localStorage.getItem("Tasks");

    if (!savedTasks) {
        return false;
    };

    savedTasks = JSON.parse(savedTasks);
        // loop through savedTasks array
    for (var i = 0; i < savedTasks.length; i++) {
       $("#" + (i+9) + "-Text").val(savedTasks[i]);
       ToDo[i] = savedTasks[i];
        if ((i+9) < currentHour) {
        $("#"+ (i+9) + "-Text").addClass("past");
        }
        else if ((i+9) == currentHour) {
        $("#"+ (i+9) + "-Text").addClass("present");
        }
        else {
        $("#"+ (i+9) + "-Text").addClass("future");
        }
    }
}