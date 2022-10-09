
function sayHello(yourName, age){
    console.log("Hello my name is "+ yourName+ "and my age is" +age)
}

sayHello("kim", 10);
sayHello("park", 10);
sayHello("jane", 10);



const player ={
    name : 'chanwoo',
    sayHi: function (otherName){
        console.log( "Nice to meet you "+ otherName+ ", I am "+this.name )
    }
}

player.sayHi("Lynn");