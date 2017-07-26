/////////Coding Challenge 2
var Challenge = function(years) {
	var cYear = new Date().getFullYear(),
	fill_array = [],
	is_eighteen = [];
	//console.log('years: ' + years);
	for(var i = years.length-1; i>=0; i--) {
	  fill_array.push(years[i]);
	  var bool;
	  if ( cYear - years[i] >= 18 ) {
		bool = true;
		is_eighteen.push(bool);
	  }
	  else {
		bool = false;
		is_eighteen.push(bool)
	  }
	}
	//console.log(fill_array);
  	return { fill_array, is_eighteen };
};

function printFullAge (years) {
	var fullAges = [];
	var ages = []
	
	for(var i = 0; i < years.length; i++) {
		ages.push(new Date().getFullYear() - years[i]);
		if (ages[i] < 18) {
			console.log('Person:' + (i + 1) + ' is ' + ages[i] + ' is is not of full age');
			fullAges.push(false);
		} else {
			console.log('Person:' + (i + 1)  + ' is ' + ages[i] + ' is is of full age');
			fullAges.push(true);
		}
	}
	return fullAges;
}

var years = [1965, 1955, 1994, 2001];
var ages = [];

for(var i = 0; i < years.length; i++) {
	ages[i] = new Date().getFullYear() - years[i];
}
//
//for(var i = 0; i < ages.length; i++) {
//	if (ages[i] < 18) {
//		console.log('Person:' + (i + 1) + ' is ' + ages[i] + ' is is not of full age');
//	} else {
//		console.log('Person:' + (i + 1)  + ' is ' + ages[i] + ' is is of full age');
//	}
//}


//var full1 = printFullAge(years);
//var full2 = printFullAge([2012, 1915, 1999]);
//console.log(full1);
//console.log(full2);
var results  = Challenge([1998, 1876, 1987, 1995, 1932, 1987, 1743, 1990, 2001, 2011, 1999, 2017]);

console.log(results.fill_array + "\nEighteen or Older?:\n" + results.is_eighteen);
