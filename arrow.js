//Task-1
var sayHello=()=> console.log("Hello"); 
sayHello();
//Task-2
var printNumber=() =>console.log(5); 
printNumber();
//Task-3
var addAndprint=()=>console.log(2 + 3); 
addAndprint();
//Task-4
var add=(a, b) =>{
	return a + b; 
}
console.log(add(30,90));
//Task-5
var subtract=(a, b)=> { 
    return a - b; 
    }
console.log(subtract(80,54));
//task-6
var double=x=> { 
    return x + x; 
    }
console.log(double(9));
//task-7
var isPositive=x=> { 
    return x > 0;
    }
console.log(isPositive(80));
//task-8
var square=function (x) { 
    return x * x; 
    }
console.log(square(6));
//task-9
var absoluate=x=>{ 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
    }
console.log(absoluate(-90));
//task-10
var max=(a, b)=> { 
    if (a > b) { 
    return a;
    } 
    return b;
}
console.log(max(89,120));   