const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//이르케 반복되는 string들은 대문자 변수로 저장해놓는것이 관습!
const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();  //브라우저의 기본 동작 막아주는겨(= submit 했을 때 새로고침 안 되게 해주는겨)

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //loginInput 값을 변수에 저장
    localStorage.setItem(USERNAME_KEY, username);  //localStorage는 약간 미니DB 같은거!

    paintGreetings(username);
}

function paintGreetings(username){  //코드 중복으로 함수로 만들어버림~!
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);  //저장되어있는 username

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);  //submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다는 사실~!
    
}else{
    paintGreetings(savedUsername);

}