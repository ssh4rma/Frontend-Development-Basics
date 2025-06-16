window.addEventListener("DOMContentLoaded", loadTasks);

const tasks = document.getElementById("taskInput");

document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let task = tasks.value;
  if (task.trim() !== "") {
    document.getElementById("todoList").insertAdjacentHTML(
      "beforeend",
      `<li>
             <input type="checkbox" class="taskdone">
             <span class="tasklist">${task}</span>
           </li>`
    );
    tasks.value = "";
    saveTasks();
  } else {
    alert("Enter the valid task");
  }
});

document.getElementById("todoList").addEventListener("click", (e) => {
  if (e.target.classList.contains("taskdone")) {
    e.target.closest("li").remove();
    saveTasks();
  }
});

//local storage contains 2 steps : first one is to save the current elements and then add them back again in the DOM structure when the page will get reloaded.

function saveTasks() {
  const taskElement = document.querySelectorAll(".tasklist");
  const tasks = Array.from(taskElement).map((task) => task.textContent);
  localStorage.setItem("todotasks", JSON.stringify(tasks));
}

function loadTasks() {
  //get the saved tasks
  const savedTasks = localStorage.getItem("todotasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    tasks.forEach((task) => {
      document.getElementById("todoList").insertAdjacentHTML(
        "beforeend",
        `<li>
          <input type="checkbox" class="taskdone">
          <span class="tasklist">${task}</span>
        </li>`
      );
    });
  }
}
