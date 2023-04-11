// Get elements from the DOM
const taskBar = document.querySelector(".task-bar");
const addButton = document.querySelector("#set-button");
const taskCart = document.querySelector("#taskCart");

// Initialize tasks array
let tasks = [];

// Add task to the array and the task list
function addTask() {
  if (taskBar.value === "") {
    alert("Please enter a task.");
    return;
  }

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

// Toggle task as done
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

// Display tasks
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

// Event listeners
addButton.addEventListener("click", addTask);
taskBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initialize the app
getTasks();
