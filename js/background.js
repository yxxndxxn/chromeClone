const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //js에서 html을 만든거, ""안에 태그를 넣는거임(img 태그)

// bgImage.src = `img/${chosenImage}`;  //여기서 img는 폴더 이름임 / 랜덤은 이거 활성화
bgImage.src = `img/1.jpg`;  //랜덤 돌리기 싫어서 걍 고정해버림

console.log(bgImage);

document.body.appendChild(bgImage); //appendChild가 아닌 prepend를 쓰면 맨 앞에 있게 됨
