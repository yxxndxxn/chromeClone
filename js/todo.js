const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //todos는 key 이름, JSON.stringify로 string으로 저장해버림
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //삭제버튼을 눌렀을 때 어떤 li를 눌렀는지 확인하는 방법(= target.parentElement)
  //target은 클릭된 HTML element(= 여기서는 button)
  //parentElement는 클릭된 element의 부모(= 여기서는 li)

  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //내가 클릭한 li.id와 다른 toDo는 남겨둔다는 코드!  (클릭한 li만 삭제)
  saveToDos();
}

function paintToDo(newTodo) {
  //li, span 생성
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); //li 안에 span 넣고
  li.appendChild(button); //li 안에 button 넣고
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); //기본값 없애주기
  const newTodo = toDoInput.value; //저장해놓고
  toDoInput.value = ""; //비워버리기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos 배열에 newTodo 넣어버리기
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string을 array로 다시 저장 -> parsedToDos
  toDos = parsedToDos; //빈 배열이 아닌 저장했던 이전 배열들도 나타나기 위해 다시 저장
  parsedToDos.forEach(paintToDo);
}

/*
1. To-Do-List 작성시 localStorage 에 저장이 됩니다.
2. 근데 저장이 될때 string data type 으로 저장이 되요. (예: "[a,b,c,d,e]")
3. 그래서 JSON.parse()를 통해 string data type을 object로 바꾼거에요. 근데 이 Object는 Array 같이 바뀌었어요.
 즉 index를 통해 value를 access할수 있어요
예: "[a,b,c,d]" (string) => [a, b, c, d] (array);
array[0] = a; array[1] = b; array[2] = c; array[3] = d
5. array 형태가 된 값을 parsedToDos 라는 const variable 에다가 넣어놨어요.
6. 이 상태에서 parsedToDos 는 array 형태라고 가정했을때 .foreach() 라는 function 을 사용할수 있는데 이건 mdn 웹사이트 가면 나오지만 그냥 단순히 array 에 들어있는 모든 값을 iterate (순찰(?)) 할수 있는 function 입니다.
7. 즉 index 0 부터 마지막 index 까지 한바뀌 도는건데 돌면서 그 값들을 item 라는 곳 또는 element에 (이름은 정하기 나름) 저장이 되는거에요.
ex)
Array = [ a, b, c, d]
Array.foreach( (item) => console.log(item))
// output:
a
b
c
d*/
