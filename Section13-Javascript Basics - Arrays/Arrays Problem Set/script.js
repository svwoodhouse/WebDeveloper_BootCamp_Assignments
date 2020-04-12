var numArray = [1,2,3,4];
var letterArray = ["a","b","c"];

printReverse(numArray);
printReverse(letterArray);

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));

console.log(sumArray([1,2,3]));
console.log(sumArray([10,2,10,4]));
console.log(sumArray([-5,100]));

console.log(max([1,2,3]));
console.log(max([10,2,10,4]));
console.log(max([-5,100]));

function printReverse(array) {
    for(var i = array.length-1; i >=0; i--) {
        console.log(array[i]);
    }
};

function isUniform(array) {
    var search = array[0];
    for(var i = 1; i < array.length; i++) {
        if(array[i] !== search)
            return false;
    };
    return true;
};

function sumArray(array){
    var sum =0;
    array.forEach(function(element){
        sum+=element;
    });
    return sum;
};

function max(array) {
    var max = array[0];
    array.forEach(function(element) {
        if(element > max)
            max = element;
    });
    return max;
};