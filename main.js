//A. 날짜 기능
const today = document.querySelector(".today");
let newToday = new Date();

today.textContent = `${newToday.getFullYear()}년 ${
  newToday.getMonth() + 1
}월 ${newToday.getDate()}일`;

//B. Todo추가 기능
const input = document.querySelector(".footer__input");
const button = document.querySelector(".footer__button");
const todos = document.querySelector(".todos");
let todoInput;
let newTodoList;

function makeListItem(content) {
  const newTodoRow = document.createElement("li");
  newTodoRow.setAttribute("class", "todo__row");
  const newTodo = document.createElement("div");
  newTodo.setAttribute("class", "todo");
  const newTodoName = document.createElement("span");
  newTodoName.setAttribute("class", "todo__name");
  newTodoName.textContent = `${content}`;
  const newTodoButton = document.createElement("button");
  newTodoButton.setAttribute("class", "todo__button");
  const newTodoTrash = document.createElement("i");

  newTodoTrash.setAttribute("class", "far fa-trash-alt");
  newTodoRow.append(newTodo);
  newTodo.append(newTodoName, newTodoButton);
  newTodoButton.append(newTodoTrash);
  todos.append(newTodoRow);

  input.value = "";
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value) {
    makeListItem(input.value);
  }
});

button.addEventListener("click", (e) => {
  if (input.value) {
    makeListItem(input.value);
  }
});

//C. Todo 삭제 기능
todos.addEventListener("click", (e) => {
  if (e.path[3].className === "todo__row") {
    e.path[3].remove();
  }
});
