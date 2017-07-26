/////////////////////////////
///Spread operator ...
function addFouurAges (a,b,c,d) {
    return a + b + c + d;
};

var sum1 = addFouurAges(52,62,23,52);
console.log('sum1:' ,sum1);

var ages5 = [52,62,23,52];

//First paraments is what this variable is.
var sum2 = addFouurAges.apply(null, ages5);
console.log('sum2:' ,sum2);

//ES 6
const sum3 = addFouurAges(...ages5);
console.log('sum3:' ,sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anne'];

const bigFamilty = [...familySmith, ...familyMiller];
console.log(bigFamilty);

const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [heading, ...boxes]; // Combine the h1 with the box node list
console.log(all);
Array.from(all).forEach(curr => curr.style.color = 'purple');