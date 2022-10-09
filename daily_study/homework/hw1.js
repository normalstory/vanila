function checkSize(size){
    if(500>=size){
        document.body.style.backgroundColor="skyblue";
    }else if(size>1200){
        document.body.style.backgroundColor="red";
    }else{
        document.body.style.backgroundColor="green";
    }
}

function changeColor() {
  var intFrameWidth = window.innerWidth;
  console.log(intFrameWidth);
  checkSize(intFrameWidth);
}
window.addEventListener("resize", changeColor);
