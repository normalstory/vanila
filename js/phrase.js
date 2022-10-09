const phraseSet =[
    {
        phrase:"삶이 있는 한 희망은 있다", 
        author:"키케로"
    },{
        phrase:"산다는것 그것은 치열한 전투이다", 
        author:"로망로랑"
    },{
        phrase:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다", 
        author:"사무엘존슨"
    },{
        phrase:"언제나 현재에 집중할수 있다면 행복할것이다", 
        author:"파울로 코엘료"
    },{
        phrase:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해", 
        author:"찰리 채플린"
    },{
        phrase:"단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가", 
        author:"이드리스 샤흐"
    },{
        phrase:"행복한 삶을 살기위해 필요한 것은 거의 없다", 
        author:"마르쿠스 아우렐리우스 안토니우스"
    },{
        phrase:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다", 
        author:"L.론허바드"
    },
];

const phrase = document.querySelector("#lifeQuotes span:first-child");
const author = document.querySelector("#lifeQuotes span:last-child");
// p = element, span = tag

let chosenNum = Math.floor(Math.random() * (phraseSet.length));
let chosenPhrase = phraseSet[chosenNum].phrase;
let chosenAuthor = phraseSet[chosenNum].author;

phrase.innerHTML = chosenPhrase; 
author.innerHTML = chosenAuthor;