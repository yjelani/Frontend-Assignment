// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    // Create a new task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = "";
  }
});
