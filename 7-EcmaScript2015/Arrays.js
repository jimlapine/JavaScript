/////////////////////////////
///Rest Paraments look the same as spread, but exactly opposite

//ES 5
function isFullAge5() {
    //Arguments is not an array, but an array like object
    //console.log(arguments);
    //Convert arguments to an array
    var argsArr = Array.prototype.slice.call(arguments);
    //console.log(argsArr);
    //Log ages looping through array
    argsArr.forEach(function (elem) {
        console.log(new Date().getFullYear() - elem);
    });
}
console.log('******ES5');
//isFullAge5(1990, 1965, 1935);
//isFullAge5(1990, 1965, 1935, 2016, 1987);
function isFullAge6(...ages) {
    //console.log(ages);
    ages.forEach(curr => console.log(new Date().getFullYear() - curr));
}
//console.log('******ES6');                 
//isFullAge6(1990, 1965, 1935);
//isFullAge6(1990, 1965, 1935, 2016, 1987);

function isFullAge55(limit) {
    //Arguments is not an array, but an array like object
    //console.log(arguments);
    //Convert arguments to an array
    var argsArr = Array.prototype.slice.call(arguments, 1); // slices starting at elem 1, skipping limit
    //console.log(argsArr);
    //Log ages looping through array
    argsArr.forEach(function (elem) {
        console.log((new Date().getFullYear() - elem) > limit);
    });
}

isFullAge55(21, 1990, 1965, 1935, 2016, 1987);

console.log('******ES6');
function isFullAge66(limit, ...ages) {
    //console.log(ages);
    ages.forEach(curr => console.log((new Date().getFullYear() - curr) > limit));
}

isFullAge66(21, 1990, 1965, 1935, 2016, 1987);