const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// const loginForm = document.getElementById("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


function onLoginBtnClick(){
    const username=loginInput.value;
    if(username===""){
        alert("plz write your name");
    }else if(username.length>15){
        alert("your name too long");
    }

    // console.dir("hello "+loginInput.value);
    // console.log("click");
}
loginButton.addEventListener("click",onLoginBtnClick);
