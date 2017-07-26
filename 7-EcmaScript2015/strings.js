/////////////////////////////
//////////// Strings
let firstName = 'Jim';
let lastMName = 'Lapine';
const yearOfBirth = 1965;
function calcAge(year){
	return new Date().getFullYear() - year;
};

console.log(calcAge(yearOfBirth));

//ES 5
console.log('This is the ' + firstName + ' ' + lastMName + '. He was born in ' 
		   + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

//ES 6
//Use template literals
// specified using ` back tics
console.log(`This is the ${firstName} ${lastMName}. He was born in ${yearOfBirth} Today he is ${calcAge(yearOfBirth)} years old.`);


// New ES6 strings functions
// Declare template literal
const n = `${firstName} ${lastMName}`;
console.log(n.startsWith('J')); // case sensitve
console.log(n.endsWith('ne')); // case sensitve
console.log(n.includes('m' )); // case sensitve
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));