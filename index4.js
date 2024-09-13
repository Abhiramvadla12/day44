//named function:
function subtract(a, b) { 
    return a - b; 
    }
console.log(subtract(0.00000000000001,0.01234456764856764));
//anonoymous function:
var subtract = function (a,b){
    return a - b;
}  
console.log(subtract(0.00000000000001,0.01234456764856764));  
//arrow function:
var subtract = (a,b) =>{
    return a-b;
}
console.log(subtract(0.00000000000001,0.01234456764856764));