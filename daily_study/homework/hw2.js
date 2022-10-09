const setGame = document.querySelector("#setGame");
const setGameInput = document.querySelector("#setGame input");
const playGame = document.querySelector("#playGame");
const playGameInput = document.querySelector("#playGame input");
const resultGame = document.querySelector("#resultGame");

let sumNum = {
    set:null,
    you:null,
    marchin:null,
    result:""
}

function countGame(){
    if(parseInt(sumNum.you) === parseInt(sumNum.marchin)){
        sumNum.result="You Won!!"
        createResult(sumNum); 
    }else{
        sumNum.result="You Lost!!"
        createResult(sumNum);
    }
}

function createResult(sumNum){
    console.log("sumNum total : ",sumNum)
    if(resultGame.childElementCount===0){
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        resultGame.appendChild(li1);
        resultGame.appendChild(li2);
    }
    resultGame.firstChild.innerText=`You chose:${sumNum.you}, the machin chose:${sumNum.marchin}`;
    resultGame.lastChild.innerText=sumNum.result;
}

function handlesetGame(setNum){
    setNum.preventDefault();
    sumNum.set=setGameInput.value;
    console.log("set area : ",sumNum.set)
}
function handlePlaySetNnm(playNum){
    playNum.preventDefault();
    sumNum.you = playGameInput.value;
    console.log("you : ",sumNum.you)
    sumNum.marchin = Math.round(Math.random()*sumNum.set);
    console.log("machineNum : ",sumNum.marchin)
    countGame();
}

setGame.addEventListener("submit",handlesetGame);
playGame.addEventListener("submit",handlePlaySetNnm);