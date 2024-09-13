//named function :
function double(x) { 
    return x + x; 
    }
console.log(double(2001));
//anonoymous function:
var double = function (x){
    return x + x;
} 
console.log(double(2001));
//arrow function:
var double = (x) =>{
    return x + x;
}  
console.log(double(2001));