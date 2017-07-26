/////////////////////////////
///Maps
// We can use anything as keys

//ES 6
const question = new Map();
question.set('question', 'What is the offical name of the lastest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true,'Correct Answer');
question.set(false,'Please try again!');

//console.log(question);
//console.log(question.get('question')); // by key
//console.log(question.size); // size not length

if(question.has(4)){ // check for existance of key
	//question.delete(4);
	console.log(question.get(4));
}
//question.clear(); //Clear all elements
question.forEach(function (value, key) {
	//console.log(`This is ${key} and it's set to ${value}`);
});

// Use can use destructuring to get the values
for (let q of question.entries()){
	let [key, value] = [q];
	//console.log(`This is ${key} and it's set to ${value}`);
}

// or even more streamlined
for (let [key, value]  of question.entries()){
	//console.log(`This is Key: ${key} and it's value set to ${value}`);
	if(typeof(key) === 'number'){
		console.log(`answer ${key} is ${value}`);
	}
}

const answr = parseInt(prompt('Write the correct answer'));
// if answer == to Correct answer, access by true / false key
console.log(question.get(answr === question.get('correct')));