//named function:
function square(x) { 
    return x * x; 
    }
console.log(square(19));  
//anonymous function:
var square = function(x){
    return x*x;
}
console.log(square(17));
//arrow function:
var square = (x) =>{
    return x*x;
}
console.log(square(18))