function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() === "") return;
    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}