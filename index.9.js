//named function:
function max(a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
     }
console.log(max(10,56));
//anonymous function:
var max_1 = function(a,b){
    if (a > b) { 
        return a;
        } 
        return b;
}
console.log(max_1(100,56)); 
//arrow function:
var max_2 = function(a,b){
    if (a > b) { 
        return a;
        } 
        return b;
}
console.log(max_2(10,560));
