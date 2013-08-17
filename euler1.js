#!/usr/bin/env node

//Project Euler Problem 1

var divides = function(a, b) {
    return b % a === 0;
};

var anydivide = function(as, b) {
    for(var ii in as) {
	if(divides(as[ii], b))
	    return true;
	}
    }
    return false;
};

var sum = function(arr) {
    var cc = 0;
    for(var ii in arr) {
	cc += arr[ii];
    }
    return cc;
};

var fizzbuzz = function(factors, max) {
    var out = [];
    for(var nn = 1; nn < max; nn += 1) {
	if(anydivide(factors, nn)) {
	    out.push(nn);
	}
    }
    return sum(out);
};

console.log(fizzbuzz([3,5], 1000));


    


