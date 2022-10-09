const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAMEKEY = "userName";

function paintGreetings(userName){
    greeting.innerText = `hello ${userName} keep going !`;
    greeting.classList.remove(HIDDEN);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem(USERNAMEKEY,userName);
    paintGreetings(userName);
}


//start 
const savedUserName = localStorage.getItem(USERNAMEKEY);

//check 
if(savedUserName===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}