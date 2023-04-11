// Get elements from the DOM
const taskBar = document.getElementById("taskBar");
const addButton = document.getElementById("setButton");
const taskCart = document.getElementById("taskCart");

// Initialize tasks array
let tasks = [];

// Add task to the array and the task list, Used ChatGPT for line 15-19.
function addTask() {
  if (taskBar.value === "") {
    return;
  }

  // Date enables basic storage and now retrieves the storage.
  const task = {
    id: Date.now(),
    name: taskBar.value,
    done: false,
  };

  tasks.push(task);
  taskBar.value = "";

  updateLocalStorage();
  displayTasks();
}

// Toggle task as done, Used Stackoverflow and w3Schools for the done callback.
function toggleDone(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].done = !tasks[taskIndex].done;

  updateLocalStorage();
  displayTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  updateLocalStorage();
  displayTasks();
}

// Display tasks, Used a combination of Garrits website as well as w3Schools.
function displayTasks() {
  taskCart.innerHTML = "";

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const taskName = document.createElement("p");
    taskName.innerText = task.name;

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-button");
    doneButton.innerText = task.done ? "Undone" : "Done";
    doneButton.addEventListener("click", () => toggleDone(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    if (task.done) {
      taskName.classList.add("done");
    }

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(doneButton);
    taskContainer.appendChild(deleteButton);

    taskCart.appendChild(taskContainer);
  });
}

// Update local storage
function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get tasks from local storage
function getTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
  }
}

// Event listeners, Used ChatGPT to help out with the following lines (93-98)
addButton.addEventListener("click", addTask);
taskBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initialize the app
getTasks();
