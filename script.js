const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const count = document.getElementById("count");
const clearBtn = document.getElementById("clearBtn");

function updateCount() {
  count.textContent = taskList.children.length;
}

addBtn.onclick = () => {
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${taskInput.value}</span><button><i class="fa fa-trash"></i></button>`;

  li.querySelector("button").onclick = () => {
    li.remove();
    updateCount();
  };

  taskList.appendChild(li);
  taskInput.value = "";
  updateCount();
};

clearBtn.onclick = () => {
  taskList.innerHTML = "";
  updateCount();
};
