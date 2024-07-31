const clock = document.querySelector("h1#clock");

//이게 니코쌤 가르침..
// function getClock(){
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");  //padStart는 string에만 사용 가넝(그래서 number를 string으로 바꾼거!)
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }
// getClock();  //새로고침했을 때 바로 나타나게 미리 함수 실행!
// setInterval(getClock, 1000);

// 난 이걸로 할란당!
// mdn 잘 살펴보면 한번에 해결하는 방법도 있네요!
// 이거 쓰면 '오전, 오후'가 붙고, 14시 -> 2시로 표기 !
function getClock(){
clock.innerText = new Date().toLocaleTimeString();
}
getClock();
setInterval(getClock, 1000);  //setInterval이 실시간으로 시간이 바뀌도록 도와주어용~!