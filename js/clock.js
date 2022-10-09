//clock

const clock = document.querySelector("#clock");

function timmer(){
    const date = new Date;
    let hour = String(date.getHours()).padStart(2,'0');
    let min = String(date.getMinutes()).padStart(2,'0');
    let sec = String(date.getSeconds()).padStart(2,'0');

    clock.innerHTML=`${(hour)} : ${min} : ${sec}`;
}

timmer()    // 초기화
window.setInterval(timmer,1000)
