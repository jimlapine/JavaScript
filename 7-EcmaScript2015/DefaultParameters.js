/////////////////////////////
///Default Paraments
function SmithPerson (firstName, yearOfBirth, nationality) {
	this.firstname = firstName !== undefined ? firstName : 'Fred';
	this.yearOfBirth = yearOfBirth !== undefined ? yearOfBirth: 9999;
	this.nationality = nationality !== undefined ? nationality : 'N/A';
}

var bob = new SmithPerson('Bob');
console.log(bob);

console.log('******ES6');
function SmithPerson6 (firstName, yearOfBirth = 9999, nationality = 'N/A') {
	this.firstname = firstName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var bob6 = new SmithPerson6('Bob');
console.log(bob6);