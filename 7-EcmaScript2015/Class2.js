/////////////////////////
// Lecture: Classess
// Inheriting Classes

//ES 5
console.log('*************ES5');
var Person5 = function(name, yearOfBirth, job) {
	this.name= name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

// Add a function to the prototype
Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

//create a Athelete who inhertis from person
var Athlete5 =  function(name, yearOfBirth, job, olympicGames, medals) {
	//We need to call our Parent class
	//This will point to the empty object created by the new keyword.
	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = olympicGames;
}

var jim5 = new Person5('Jim', 1965, 'Engineer');
jim5.calculateAge();
console.log(jim5);

// We have to set the prototype of the athelete to be the same as the person
// using Object.Create
Athlete5.prototype = Object.create(Person5.prototype);

//Add a wonMedal function to the athelete prototype, no for person
Athlete5.prototype.wonMedal = function () {
	this.medals ++;
	console.log('# of medals is now: ' + this.medals);
};

var athelete5 = new Athlete5('Steve', 1965, 'Engineer', 5, 3);
console.log(athelete5);
athelete5.calculateAge();
athelete5.wonMedal();

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
}

class Athelete6 extends Person6 {
	constructor (name, yearOfBirth, job, olympicGames, medals) {
		//Call the parent function known as super
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}	
	
	wonMedal() {
		this.medals ++;
		console.log('# of medals is now: ' + this.medals);
	}
}

let athelete6 = new Athelete6('Claudia', 1975, 'Admin', 15, 13);
console.log(athelete6);
athelete6.calculateAge();
athelete6.wonMedal();