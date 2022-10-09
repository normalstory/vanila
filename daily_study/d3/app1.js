const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color="blue";
}
function handelMouseEnter(){
    h1.innerHTML="mouse is here"
}
function handelMouseLeave(){
    h1.innerHTML="mouse is gone"
}
function handelWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handelWindowCopy(){
    alert("you are copyer !")
}
function handleWindowoffline(){
    alert("SOS no Wifi")
}
function handleWindowonline(){
    alert("all gooood! ")
}

h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter", handelMouseEnter);
h1.addEventListener("mouseleave", handelMouseLeave);

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy",handelWindowCopy);
window.addEventListener("offline",handleWindowoffline);
window.addEventListener("online",handleWindowonline);
