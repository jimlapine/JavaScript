///////////////////////////
// Lecture: Objects

var jim = {
	firstName: "Jim",
	lastName: "Lapine",
	yearOfbirth : 1965,
	job: "Engineer",
	isMarried : true,
};

//console.log(jim);
//console.log(jim.isMarried);
//console.log(jim.yearOfbirth);
//console.log(jim["yearOfbirth"]);

var xyz = 'job';
console.log(jim[xyz]);

jim.lastName = 'Storm';
console.log(jim);

var jane = new Object();
jane.firstName = "Jane";
jane.lastName = "Smith";
jane["yearOfbirth"] = 1988;
jane["job"] = 'Teacher';
jane["isMarried"] = false;

console.log(jane);