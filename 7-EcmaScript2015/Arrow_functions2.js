
/////////////////////////////
//////////// Arrow Functions 2

//ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		// we have access to color and position here, because this is object
		var self = this;
		document.querySelector('.green').addEventListener('click', function(e) {
			// we dont have access to color and position here, because this is window object
			var str = 'this box number ' + self.position + ' and it is ' + self.color;			
			alert(str);
		});;
	}
};
box5.clickMe();

//ES6
const box6 = {
	color: 'blue',
	position: 2,
	// use prenthesis when there are no parameters
	clickMe: function(){
		document.querySelector('.blue').addEventListener('click', () => {
			// Arrow functions have access to the this  of the object they are contained in lexical access
			const str = 'this box number ' + this.position + ' and it is ' + this.color;			
			alert(str);
		});;
	}
};
box6.clickMe();

const box66 = {
	color: 'orange',
	position: 3,
	// use parenthesis when there are no parameters
	clickMe: function() {
		//will not work since the clickMe function this object will point to the window object
		document.querySelector('.orange').addEventListener('click', () => {
			// Arrow functions have access to the this  of the object they are contained in lexical access
			const str = 'this box number ' + this.position + ' and it is ' + this.color;			
			alert(str);
		});;
	}
};
box66.clickMe();

//ES 5
function Person(name){
	this.name = name;
};

Person.prototype.myFriends5 = function (friends) {	
	var arr = friends.map(function(curr){
		return this.name + ' is friends with ' + curr;
	}.bind(this)); // we can bind this to the function call
	console.log(arr);
};

//ES 6
Person.prototype.myFriends6 = function (friends) {
	//use arrow function, we share the lexical access to the this keyword
	const arr = friends.map((curr) => `${ this.name } is friends with ${ curr }`);
	console.log(arr);
};

var friends = ['Gorgor', 'Da Milne', 'Rob Slawyer'];
new Person('Jim').myFriends5(friends);
new Person('Mike').myFriends6(friends);
