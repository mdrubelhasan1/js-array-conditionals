// problem-1 solution:
var fruits = ['Apple', 'banana', 'Orange'];
// a. find the index of banana:

var positionIndex = fruits.indexOf('banana');
console.log(positionIndex);
// b.
fruits[1] = 'mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon')  
console.log(fruits);

// problrm-2 solution:
// Grade program:

var marks =41;

if (marks >= 80){
    console.log('Grade-A');
}
else if (marks >= 60) {
    console.log('Grade-B');
}
else if (marks >= 50) {
    console.log('Grade-C');
}
else if (marks >= 40) {
    console.log('Grade-D');
}
else if (marks <= 39) {
    console.log ('Grade-F');
}


// problem-3 solution:

var num1 = 13;
var num2 = 7;
var num3 = 45;

if ( num1 > num2 && num1 > num3 ){
    console.log(num1);
}
else if (num2 > num1 && num2 > num3){
    console.log(num2);
}
else if (num3 > num1 && num3 > num2){
    console.log( num3);
}
