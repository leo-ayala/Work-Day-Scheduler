saveTaskEl = document.getElementById("save-Task")
textAreaEl = document.querySelector("#Work-todo")
var ToDo = ['','','','','','','','',''];

const m = moment();
currentDayEl = document.querySelector("#currentDay")
currentDayEl.textContent = m.format("dddd, MMMM Do YYYY");


$(".saveBtn").on("click", function () {
    var time = $(this).attr("data-time");
    var text = $("#"+ time + "-Text").val();
    ToDo[parseInt(time)-9] = text
    console.log(ToDo);
    localStorage.setItem("Tasks", JSON.stringify(ToDo))
});