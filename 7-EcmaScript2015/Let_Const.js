/////////////////////////////
////////////lECTURE LET & CONST
//ES 5 VS ES 6


// ES 5
var name5 = 'Jim';
var age5 = 52;
name5 = 'Jim Lapine'

// ES 6
const name6 = 'Jim'
let age6 = 52
//name6 += 'Jim Storm';

// ES 5
function driversLicense5(passedTest){
	if(passedTest){
		console.log(firstName);
		var firstName = 'John';
		var yerarOfBirth = 1943;
	}
	
	//vars are function scoped
	console.log(firstName + ' born in ' + yerarOfBirth + 
			   ' now offically allowed to drive.');	
}

driversLicense5(true);

/////////////////////
// ES6
function driversLicense6(passedTest){
	//In the temporal dead zone
	//console.log(firstName);
	let firstName;
	const yerarOfBirth = 1943;
	
	if(passedTest){
		firstName = 'John';
	}
	
	//let and const are block scoped, not function scope
	console.log(firstName + ' born in ' + yerarOfBirth + 
			' now offically allowed to drive.');	
}

driversLicense6(true);

/////////////////////
// ES6
let i =23;
console.log(i + ' before');

for(let i = 0; i < 5; i++){
	console.log(i);
}

console.log(i + ' after');

// ES5
var j =23;
console.log(j + ' before');
for(var j = 0; j < 5; j++){
	console.log(j);
}

console.log(j + ' after');
