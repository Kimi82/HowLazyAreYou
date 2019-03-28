const tasks = [];
var submitTaskButton = document.getElementById("submitTaskButton");

submitTaskButton.onclick = function() {
    var ta= document.getElementById("task").value
    tasks = ta.push()
}
