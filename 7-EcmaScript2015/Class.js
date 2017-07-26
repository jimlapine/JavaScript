/////////////////////////
// Lecture: Classess

//ES 5
console.log('*************ES5');
var Person5 = function(name, yearOfBirth, job) {
	this.name= name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
	
}

var jim5 = new Person5('Jim', 1965, 'Engineer');
jim5.calculateAge();


//Classes are NOT Hoisted!
//ES 6
console.log('*************ES6');
class Person6 {
	constructor (name, yearOfBirth, job) {
		this.name= name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	
	calculateAge() {
		let age  = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);		
	}
	
	//this do not get inherited
	static greeting(){
		console.log('Hi There!');
	}
}

const jim6 = new Person6('Lynda', 1955, 'Housewife');
jim6.calculateAge();

console.log(Person6);
console.log(jim5);
console.log(jim6);

//Static Methods
Person6.greeting();