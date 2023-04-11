const contentElement = document.getElementById("content");
const setTaskElement = document.getElementById("addTask");
let currentTask;

let taskList = [];

//function displayTasks() {
//
//}

function addTaskList() {
  setTaskElement.innerHTML = "";

  if (currentTask) {
    setTaskElement.innerText = "" + currentTask;

    const checkButton = document.createElement("button");
    checkButton.innertext = "Check";
    setTaskElement.appendChild(checkButton);
    checkButton.addEventListener("click", () => {
      currentTask = undefined;
      addTaskList();
    });
  } else {
    const inputElement = document.createElement("input");
    inputElement.placeholder = "Write Task";
    setTaskElement.appendChild(inputElement);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    setTaskElement.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      if (inputElement.value.length > 0) {
        currentTask = inputElement.value;
        addTaskList();
      }
    });
  }
}
