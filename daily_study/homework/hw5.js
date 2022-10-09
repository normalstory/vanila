const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
const cBnt = document.querySelector("#cBnt");

function handleColors(){
  let selColNum1 = Math.floor(Math.random()*colors.length);
  let selColNum2 = Math.floor(Math.random()*colors.length);
  console.log("1 : ",colors[selColNum1]);
  console.log("2 : ",colors[selColNum2]);
  console.log("-------------------------");
  document.body.style.background = `linear-gradient(${colors[selColNum1]}, ${colors[selColNum2]})`;
}

cBnt.addEventListener("click", handleColors);