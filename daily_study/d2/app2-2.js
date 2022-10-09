const calculator ={
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    }
}

const plus = calculator.plus(10,20);
const minus = calculator.minus(10,20);
const multiply = calculator.multiply(10,20);
const divide = calculator.divide(10,20);

console.log("plus ="+plus)
console.log("minus ="+minus)
console.log("multiply ="+multiply)
console.log("divide ="+divide)




// const calculator ={
//     plus: function(a, b){
//         console.log(a+b);
//     },
//     minus: function(a, b){
//         console.log(a-b);
//     },
//     multiply: function(a, b){
//         console.log(a*b);
//     },
//     divide: function(a, b){
//         console.log(a/b);
//     }
// }

// calculator.plus(10,20);
// calculator.minus(10,20);
// calculator.multiply(10,20);
// calculator.divide(10,20);
