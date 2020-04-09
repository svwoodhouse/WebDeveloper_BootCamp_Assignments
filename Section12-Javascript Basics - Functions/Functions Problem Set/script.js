function isEven(x){
    if(x % 2 === 0)
    return true;

    else
    return false;
}

function factorial(x) {
    if (x <= 1)
        return 1;
    var count = x-1;

    while(count >=1 ) {
        x*=count;
        count--;
    }
    return x;
}

function kebabToSnake(str) {
    //replace all '-' with "_"'s
    var newStr = str.replace(/-/g , "_");
    return newStr;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("hello-world-again!"));
