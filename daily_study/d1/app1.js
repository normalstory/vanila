//alert('hi')

const a=5;
const b=2;
let myName="chanwoo";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+myName);

myName = "chan";
console.log("my name is "+myName);

const amiFat=false;
let somrthing; // undefine 
console.log(amiFat, somrthing);

const week = ["mon", "tue", "wed", "thu", "fir", "sat"]; // *** array
console.log(week);
console.log("금요일의 영어 약자는 "+week[4])+"이다";
week.push("sun")
console.log(week);


// const playerName ="chan";
// const playerPoints=10;
// const playerHandsome=false;
// const playerFat = "little bit"
// const player =["chan", 10, false, "little bit"] 
const player = {  
    name:"chan",
    points:10,
    hansome:false,
    fat:"little fat",
}   // *** object 
console.log(player);
console.log(player["fat"]);
console.log(player.fat);
player.fat=false;
console.log(player);
player.lastName="woo"; // *** add 
player.points = player.points + 20;
console.log(player);