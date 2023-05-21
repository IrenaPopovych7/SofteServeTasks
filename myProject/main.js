const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");
const todosListEl = document.getElementById("todos-list");
// const todoListElem = document.getElementsByClassName("todo");
////vars
let todos = [];

/// form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  saveTodo();
  renderTodos();
});

/////////save todo
function saveTodo() {
  const todoValue = todoInput.value;

  // check if the todo is empty
  const isEmpty = todoValue === "";
  const isDuplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todoValue.toUpperCase()
  );

  if (isEmpty) {
    alert("Todo's input is empty");
  } else if (isDuplicate) {
    alert("Todo is already exist");
  } else {
    todos.push({
      value: todoValue,
      checked: false,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });
    todoInput.value = "";
  }
}
// Render todos

function renderTodos() {
  // clear element
  todosListEl.innerHTML = ``;

  todos.forEach((todo, index) => {
    // render
    todosListEl.innerHTML += `
    <div class="todo" id="${index}">
                <i 
                class="bi ${
                  todo.checked ? "bi-check-circle-fill" : "bi-circle"
                }"
                style="color : ${todo.color}"
                data-action = "check";
                ></i>
             <p class="" data-action = "check">${todo.value}</p>
                <i class="bi bi-vector-pen" data-action = "edit"></i>
                <i class="bi bi-trash" data-action = "delete"></i>
    </div>
    `;
  });
}

// clicl event lisnener for all the todos

todosListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;
  if (parentElement.className !== "todo") return;

  //to do id
  const todo = parentElement;
  const todoId = todo.id;

  // target action 

  const action = target.dataset.action;

  console.log(todoId, action);
});
