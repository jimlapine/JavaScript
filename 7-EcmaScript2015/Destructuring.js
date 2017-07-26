/////////////////////////////
//////////// Destructuring
//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name, age);

//ES6
const [name6, age6] = ['John', 26];
console.log(name6, age6);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);