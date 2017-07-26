/////////////////////////////////
// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Place {
	constructor(name, buildYear){
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Streets {
	constructor(streets){
		this.streets = streets;
	}	
	
	totalStreetLength() {
		let totalLength = 0;
		for(let v of this.streets.map(curr => {		  	
				return curr.length;
			})){
			totalLength += v;
		}
		return totalLength;
	}
	
	averageStreetLength(){
		return this.totalStreetLength() / this.streets.length;
	}
}

class Parks {
	constructor(parks){
		this.parks = parks;
	}
	
	overAThousand(){
		let overAThousand = [];
		this.parks.map(elem => {
			if(elem.numbersOfTrees > 1000){				
				overAThousand.push(elem);
			} 
		});
		return overAThousand;
	}
	
	averageAge(){
		let parkAverageAge = 0;
		for(let v of this.parks.map(curr => {		  	
				return curr.age();
			})){
			parkAverageAge += v;
		}
		return parkAverageAge = parkAverageAge / this.parks.length;
	}
}

class Park extends Place {
	constructor(name, buildYear, numbersOfTrees, area){
		super(name, buildYear);
		this.numbersOfTrees = numbersOfTrees;
		this.area = area;
	}
	
	age(){
		return new Date().getFullYear() - this.buildYear;
	}
	
	treeDensity() {
		return (`has a tree density of ${ this.numbersOfTrees / this.area } trees per sq. mile`);	
	}
}

class Street extends Place {
	constructor(name, buildYear, length = -1){
		super(name, buildYear);
		this.length = length;

		switch(true) {
			case this.length > 0 && this.length <= 2:
				this.streetSize = 'tiny'
				break;				
			case this.length > 2 && this.length <= 3:
				this.streetSize = 'small'
				break;	
			case this.length > 3 && this.length <= 4:
				this.streetSize = 'normal'
				break;	
			case this.length > 4 && this.length <= 5:
				this.streetSize = 'big'
				break;
			case this.length > 5 && this.length <= 7:
				this.streetSize = 'huge'
				break;					
			default:
				this.streetSize = 'unknown'
				break;
		}
	}
}

const parks = new Parks([
	new Park('Simpson park', 1935, 2436, 5),
	new Park('Getchel\'s field', 1905, 237, 2),
	new Park('Patriot\'s field', 1988, 6320, 6)
	]
);

const streets = new Streets([
	new Street('Washington St.', 1975, 2),
	new Street('Elm St.', 1918, 3),
	new Street('Main St.', 1995, 6),
	new Street('Smith St.', 1995, 5)
]);

console.log('---- Parks Report ----');
console.log(`Our ${parks.parks.length} parks have and average age of ${parks.averageAge()}`);

const parkReport = parks.parks.forEach(curr => {	
	console.log(`${curr.name} ${curr.treeDensity()}`); 
});

parks.overAThousand().forEach(curr => {
	console.log(`${curr.name} has more than 1000 trees`);
});

console.log('---- Streets Report ----');
console.log(`Our ${streets.streets.length} streets have a total length of ${streets.totalStreetLength()} miles, with an average length of ${streets.averageStreetLength()} miles`);

const streetReport = streets.streets.forEach(curr => {		  	
	console.log(`${curr.name} built in ${curr.buildYear} is a ${curr.streetSize} street.`); 
});
