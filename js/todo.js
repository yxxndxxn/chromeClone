const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){  //li, span 생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();  //기본값 없애주기
    const newTodo = toDoInput.value; //저장해놓고
    toDoInput.value = "";  //비워버리기
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);