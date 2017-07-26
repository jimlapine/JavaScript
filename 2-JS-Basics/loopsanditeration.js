//////////////////////////////
// Lecture: Loops and Iteration
for(var i = 1; i <= 10; ++i) {
	console.log(i);
}

var names = ['Jim', 'Lynda', 'Kevin']

for(var i = 0; i < 3; ++i) {
	console.log(names[i]);
}

console.log('-----------');

for(var i = 2; i >=0; --i) {
	console.log(names[i]);
}

console.log('-----------');
names.forEach(function(val, indx){
	console.log(val);
});

console.log('-----------');
var indx = 0;
while (indx < names.length) {
	console.log(names[indx]);
	indx++;
}
console.log('-----------');
for(var i = 0; i < names.length; ++i) {
	console.log(names[i]);
	if(i === 1) {
		break;
	}
}
console.log('-----------');
for(var i = 0; i < names.length; ++i) {
	if(i === 1) {
		continue;
	}
	console.log(names[i]);
}