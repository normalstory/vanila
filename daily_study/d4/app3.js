const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    // console.log(loginInput.value);
    const userName = loginInput.value;
    greeting.innerText = `hello ${userName} keep going !`;
    greeting.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit", onLoginSubmit);