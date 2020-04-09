var num = -10;
console.log("Print all numbers between -10 and 19");
for(num; num <= 19; num++) {
    console.log(num);
}

num = 10;
console.log("Print all even numbers between 10 and 40");
for(num; num < 41; num++) {
    if(num % 2 === 0) {
        console.log(num);
    }
};

num = 300;
console.log("Print all odd numbers between 300 and 333");
for (num; num < 334; num++) {
    if(num % 2 !== 0) {
        console.log(num);
    }
};

num = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(num; num < 51; num++) {
    if((num % 5 === 0) && (num % 3 === 0)) {
        console.log(num);
    }
};
