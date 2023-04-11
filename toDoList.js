// const contentElement = document.getElementById("content");
// const setTaskElement = document.getElementById("addTask");
// let currentTask;

// let taskList = [];

// function addTaskList() {
//   setTaskElement.innerHTML = "";

//   if (currentTask) {
//     setTaskElement.innerText = "" + currentTask;

//     const checkButton = document.createElement("button");
//     checkButton.innertext = "Check";
//     setTaskElement.appendChild(checkButton);
//     checkButton.addEventListener("click", () => {
//       currentTask = undefined;
//       addTaskList();
//     });
//   } else {
//     const inputElement = document.createElement("input");
//     inputElement.placeholder = "Write Task";
//     setTaskElement.appendChild(inputElement);

//     const removeButton = document.createElement("button");
//     removeButton.innerText = "Remove";
//     setTaskElement.appendChild(removeButton);
//     removeButton.addEventListener("click", () => {
//       if (inputElement.value.length > 0) {
//         currentTask = inputElement.value;
//         addTaskList();
//       }
//     });
//   }
// }

const tasks = [""];
const taskListElement = document.getElementById("addTask");
const taskCartElement = document.getElementById("taskCart");

let taskList = [];

for (let task of tasks) {
  const taskElement = document.createElement("input");
  taskElement.innerText = task;
  taskElement.onclick = addToTaskList;
  taskListElement.appendChild(taskElement);
}

function addToTaskList() {
  taskList.push(this.innerText);

  const cartElement = document.createElement("div");
  cartElement.innertext = this.innerText;
  taskCartElement.appendChild(cartElement);
}
