const quotes = [
    {
        quote: "[험난함이 내 삶의 거름이 되어]",
        author: "이정하",
    },
    {
        quote: "기쁨이라는 것은 언제나 잠시뿐",
        author: "이정하",
    },
    {
        quote: "돌아서고 나면 험난한 구비가 다시 펼쳐져 있는 이 인생의 길",
        author: "이정하",
    },
    {
        quote: "삶이 막막함으로 다가와 주체할 수 없이 울적할 때",
        author: "이정하",
    },
    {
        quote: "세상의 중심에서 밀려나 구석에 서 있는 것 같은 느낌이 들 때",
        author: "이정하",
    },
    {
        quote: "자신의 존재가 한낱 가랑잎처럼 힘없이 팔랑거릴 때",
        author: "이정하",
    },
    {
        quote: "그러나 그런 때일수록 나는 더욱 소망한다",
        author: "이정하",
    },
    {
        quote: "그것들이 내 삶의 거름이 되어 화사한 꽃밭을 일구어낼 수 있기를",
        author: "이정하",
    },
    {
        quote: "나중에 알찬 열매만 맺을 수 있다면",
        author: "이정하",
    },
    {
        quote: "지금 당장 꽃이 아니라고 슬퍼할 이유가 없지 않은가",
        author: "이정하",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//-> 랜덤으로 나온는 숫자가 ex)9.8일 때, Math.floor를 써서 9로 내림 시켜 버리기

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;