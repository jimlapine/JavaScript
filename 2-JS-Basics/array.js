/////////////////////
// Lecture: Arrays

var names = ['Jim', 'Lynda', 'Kevin'];
var years = new Array(1952, 1955, 1994);

var jim = ['Jim', 'Lapine', 1965, 'Engineer', true];

//console.log(names);
//console.log(years);
//console.log(names[0]);
//console.log(years[0]);
//names[0] = 'Fred';
//console.log(names[0]);

jim.push('Red'); // add to end
jim.unshift('Mr.') // add to beginning
jim.pop(); //remove last Element
jim.shift() //remove first element

console.log(jim.indexOf('Lapine')); //returns indx of item passed in
console.log(jim);

if(jim.indexOf('Teacher') === -1){
	console.log('Jim is not a teacher.');
}
