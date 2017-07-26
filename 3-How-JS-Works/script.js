///////////////////////////////////////
// Lecture: Hoisting

//calculateAge(1965);
////functions are available before code excuted
//function calculateAge (year) {
//	console.log(new Date().getFullYear() - year);
//}
//
////retirement(1965);
//
////Expressions are not availalbe until executed
//var retirement = function(year) {
//	console.log(65 - (new Date().getFullYear() - year));
//}
//
//retirement(1965);
//
//// variables have been hoisted and are set to undefined
////Javascript knows variables exists at this point, but has not been defined
//console.log(age);
//
////This variable is in the global excution context
//var age = 52;
//
//console.log(age);
//
//foo();
//
//function foo () {
//	console.log(age);
//	var age = 62;
//	//This is because of execution context scope
//	console.log(age);
//}
//
//console.log(age);
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

//Global scope, var and function
//var a = 'Hello!';
//first();
//
//function first() {
//	// Scope is first function
//    var b = 'Hi!';
//    second();
//
//    function second() {
//		// Scope is second function
//		// Remember scope has access to it's parent's scope
//        var c = 'Hey!';
//        console.log(a + ' ' + b + ' ' + c);
//    }
//}

// Example to show the differece between execution stack and scope chain


//var a = 'Hello! ';
//first();
//
//function first() {
//    var b = 'Hi! ';
//    second();
//
//    function second() {
//        var c = 'Hey! ';
//        third();
//    }
//}
//
//// This is global scope and b & C and not available
//function third() {
//    var d = 'John';
//    console.log(a + d);
//}


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
sayWhat('Fred');

function sayWhat (word) {
	// This refers to the object that called the method
	console.log(this); // function is attached to global context, so this is window;
	console.log(word);
}

var Jim = {
	firstName : 'Jim',
	lastName : 'Lapine',
	yearOfbirth: 1965,
	calculateAge : function() {
		console.log(this);
		console.log(new Date().getFullYear() - this.yearOfbirth);
	}
}

Jim.calculateAge();

var Mike = {
	firstName : 'Mike',
	lastName : 'Lapine',
	yearOfbirth: 1956,	
}

//Method borrowing
Mike.calculateAge = Jim.calculateAge;
// Proves this is not defined until function is call because now this.yearOfBirth is Mikes
Mike.calculateAge();


