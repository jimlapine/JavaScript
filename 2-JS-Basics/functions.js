//////////////////////////////////////////
//Lecture: Functions
function calculateAge(yearOfBirth) {
	var age = (new Date().getFullYear() - yearOfBirth);
	return age;
}

function yearsToRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth), yearsLeft = 65 - age, message = "";
	if (yearsToRetirement >= 0) {
		message = (name + ' has ' + yearsLeft + ' years until retirement');
	} else {
		message = (name + ' should already be retired for ' + Math.abs(yearsLeft) + ' years.');
	}
	return message;
}

var ageJim = calculateAge(1965);
var ageKevin = calculateAge(1994);
var ageLnyda = calculateAge(1955);

var yearsToRetirementJim = yearsToRetirement('Jim', 1965);
var yearsToRetirementKevin = yearsToRetirement('Kevin', 1994);
var yearsToRetirementLynda = yearsToRetirement('Lynda', 1955);
var yearsToRetirementJohn = yearsToRetirement('John', 1950);

console.log(ageJim);
console.log(ageKevin);
console.log(ageLnyda);

console.log(yearsToRetirementJim);
console.log(yearsToRetirementKevin);
console.log(yearsToRetirementLynda);
console.log(yearsToRetirementJohn);
