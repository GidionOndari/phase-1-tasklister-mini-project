document.addEventListener("DOMContentLoaded", () => {
// your code here
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const newTask = taskInput.value.trim();

    if (newTask !== "") {
      const li = document.createElement("li");
      li.textContent = newTask;

      //  Add delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.addEventListener("click", () => li.remove());
// Clear input
      li.appendChild(delBtn);
      taskList.appendChild(li);
      taskInput.value = ""; 
    }
  });
});

