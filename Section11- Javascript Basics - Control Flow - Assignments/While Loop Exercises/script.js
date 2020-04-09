var num = -10;
console.log("Print all numbers between -10 and 19");
while(num < 20) {
    console.log(num);
    num++;
};

num = 10;
console.log("Print all even numbers between 10 and 40");
while(num < 41) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num++;
};

num = 300;
console.log("Print all odd numbers between 300 and 333");
while (num < 334) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num++;
};

num = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(num < 51) {
    if((num % 5 === 0) && (num % 3 === 0)) {
        console.log(num);
    }
    num++;
};


