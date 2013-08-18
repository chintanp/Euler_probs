

#!/usr/bin/env node

//Euler Problem 4

var isPalindrome = function(num) {
    var str = num.toString();
    var len = str.length;
    var limit = Math.ceil(len / 2);
    //console.log("THe length of the number is " + len  + " The limit of iteration is " + limit);
    for(var i = 0; i < limit; ++i) {
	//console.log("Loop variable is " + i);
	if(str.charAt(i) != str.charAt(len - 1 - i))
	    return false;
    }
    return true;
};

var palindromeSet = [];

var testPalindrome = function(numDigit) {
    var startFactor = (Math.pow(10, numDigit)) - 1;
    var endFactor = Math.pow(10, numDigit - 1 );

    var startNum = startFactor * startFactor;
    var endNum = endFactor * endFactor;

    while(startNum > endNum) {
	for( var i = startFactor; i > endFactor; i--) {
	    if(startNum % i == 0 && isPalindrome(startNum) && (startNum / i) > endFactor && (startNum / i) < startFactor) {
		return startNum;
	    }
	}	     
	startNum--;
     }
	
};

console.log(testPalindrome(3));


