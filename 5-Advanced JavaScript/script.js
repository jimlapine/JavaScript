///////////////////////////////////
// Lecture: Bind, call and apply
var jim = {
	name: 'Jim',
	age: 52,
	job: "Software Engineer",
	presentation: function(style, timeOfDay){
		if (style === 'formal'){
			console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly'){
			console.log('Hey! what\'s up, ladies and gentleman! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
		}
	}
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'Designer'
};

jim.presentation('formal', 'morning');
jim.presentation('friendly', 'morning');
//Method borrowing
jim.presentation.call(emily, 'friendly', 'afternoon');
jim.presentation.apply(emily, ['formal', 'evening']);

//Bind method, makes a copy of function doesn't call it right away
// Currying
var emilyFriendly = jim.presentation.bind(emily, 'friendly');
emilyFriendly('morning');
emilyFriendly('evening');

// Currying
var JimFriendly = jim.presentation.bind(jim, 'friendly');
JimFriendly('morning');
JimFriendly('evening');

var years = [1965, 1955, 1994, 2000]
function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return new Date().getFullYear() - el;
};

function IsFullAge(limit, el){
	console.log('el: ' + el + ' limit: ' + limit);
    return el >= limit;
}

var resultsAge = arrayCalc(years, calculateAge);
var resultsIsFullAge = arrayCalc(resultsAge, IsFullAge.bind(this, 18));
var resultsIsFullAgeJapan = arrayCalc(resultsAge, IsFullAge.bind(this, 20));
console.log('Ages: ' + resultsAge);
console.log('Is Full Age: ' + resultsIsFullAge);
console.log('Is Full Age Japan: ' + resultsIsFullAgeJapan);