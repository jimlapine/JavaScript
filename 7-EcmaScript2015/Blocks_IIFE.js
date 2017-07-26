/////////////////////////////
//////////// Blocks and IIFE

{
	const a = 1;
	let b = 2;
	var c = 42;
}

// Not accessable
// console.log(a + b);
// Is accessable
console.log(c);

//ES 5
(function(){
	var e = 1;
	var f = 2;
})();
console.log(e);