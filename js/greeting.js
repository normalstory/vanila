const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const main = document.querySelector("#main");
const board = document.querySelector("#board");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAMEKEY = "userName";

function paintGreetings(userName){
    greeting.innerHTML = `hello <u>${userName}</u> world!`;
    main.classList.remove(HIDDEN);
    board.classList.remove(HIDDEN);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem(USERNAMEKEY,userName);
    paintGreetings(userName);
}

//start:login - check
const savedUserName = localStorage.getItem(USERNAMEKEY);

//login: input - check 
if(savedUserName===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}

