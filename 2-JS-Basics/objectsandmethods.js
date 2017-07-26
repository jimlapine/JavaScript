//////////////////////////////
// Lecture: Ojects and Methods

var jim = {
	firstName: "Jim",
	lastName: "Lapine",
	yearOfbirth : 1965,
	job: "Engineer",
	isMarried : true,
	family: ['Michael', 'Diane','Steven', 'Myron'],
	calculateAge: function(){
		return new Date().getFullYear() - this.yearOfbirth;
	}
};

var Kevin = {
	firstName: "Kevin",
	lastName: "Lapine",
	yearOfbirth : 1994,
	job: "Prep Cook",
	isMarried : false,
	calculateAge: function(){
		this.age = new Date().getFullYear() - this.yearOfbirth;
	}
};

console.log(jim);
//console.log(jim.calculateAge());
//console.log(jim.family);
//console.log(jim.family[2]);

console.log(Kevin.calculateAge());
console.log(Kevin);