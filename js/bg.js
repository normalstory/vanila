const img = [
    "unsplash_@Mathieu Odin.png",
    "unsplash_@Kyle Spalinger.png",
    "unsplash_@Jerry Zhang.png",
    "unsplash_@Evgeni Tcherkasski.png",
    "unsplash_@Einar Ingi Sigmundsson.png",
    "unsplash_@Daniel Tran.png",
    "unsplash_@Aaron Burden.png"
]

let chosenImg = Math.floor(Math.random() * (img.length));
// const wrapper = document.querySelector("#wrapper");
// wrapper.style.backgroundImage = `url("./img/${img[chosenImg]}")`;

document.body.style.backgroundImage = `url("./img/${img[chosenImg]}")`;

const imgBy = document.createElement("span");
imgBy.id="imgBy";
const cntNum=img[chosenImg].indexOf(".",0)
imgBy.innerText=img[chosenImg].substring(0,cntNum);
document.body.appendChild(imgBy);

// const bgImg = document.createElement("img");
// bgImg.id="bgImg";
// bgImg.src=`./img/${img[chosenImg]}`
// document.body.appendChild(bgImg);

