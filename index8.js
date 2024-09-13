//named function:
function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
    }
console.log(absolute(10));
//anonymous function:
var absolute = function(x){
    if (x < 0) { 
        return 0 - x; 
        }
         return x; 
}
console.log(absolute(-10));
//arrow function:
var absolute = (x) =>{
    if (x < 0) { 
        return 0 - x; 
        }
         return x;
}
console.log(absolute(-90));
