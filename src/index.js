document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const prioritySelect = document.getElementById("priority");

  // Array to store tasks
  let tasks = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTaskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (newTaskText !== "") {
      // Push new task object
      tasks.push({
        text: newTaskText,
        priority: priority
      });

      // Sort tasks: high → medium → low
      tasks.sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority));

      // Re-render task list
      renderTasks();

      // Clear input
      form.reset();
    }
  });

  function priorityValue(priority) {
    if (priority === "high") return 1;
    if (priority === "medium") return 2;
    return 3; // low
  }

  function renderTasks() {
    // Clear list first
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text + " ";

      // Color by priority
      if (task.priority === "high") {
        li.style.color = "red";
      } else if (task.priority === "medium") {
        li.style.color = "orange";
      } else {
        li.style.color = "green";
      }

      // Delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.addEventListener("click", () => {
        tasks.splice(index, 1); // Remove from array
        renderTasks(); // Re-render
      });

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
          task.text = newText.trim();
          renderTasks();
        }
      });

      li.appendChild(editBtn);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }
});
