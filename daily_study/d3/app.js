

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);






/** refactoring 03 */
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleTitleClick);





/** refactoring 02 */
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const asisColor = h1.style.color;
//     let tobeColor;  
//     if(asisColor==="blue"){
//         tobeColor="tomato";
//     }else{
//         tobeColor="blue";
//     }
//     h1.style.color=tobeColor;
// }

// h1.addEventListener("click", handleTitleClick);



/** refactoring 01 */
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     if(h1.style.color==="blue"){
//         h1.style.color="tomato"
//     }else{
//         h1.style.color="blue"
//     }
// }

// h1.addEventListener("click", handleTitleClick);`