const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

//DOMcontentLoaded : 문서객체모델에서 어떠한 데이터를 불러오게 된다면 ~
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", manageTodo);

function addTodo(e) {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-content");
  newDiv.appendChild(newTodo);

  saveToLocal(todoInput.value);

  // 완료 버튼
  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  completeButton.classList.add("complete-button");
  newDiv.appendChild(completeButton);

  // 삭제 버튼
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.classList.add("delete-button");
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);
  todoInput.value = "";
}


// localStorage에 할 일 저장
function saveToLocal(todo) {
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 새로고침 했을 때 localStorage이 사라지지 않고 계속 출력되게
function getLocal() {
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-content");
    
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.classList.add("complete-button");
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.classList.add("delete-button");
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
  })
}


// 완료 & X 버튼
function manageTodo(e) {
  // 인덱스 값으로 which 안에 들어온 버튼이 어떤 버튼인지 식별하기 위해
  const whichButton = e.target.classList[0];

  if(whichButton === "complete-button") {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle("completed");
  } else if(whichButton === "delete-button") {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}

function removeLocal(todo) {
  let todos;
  
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}