#!/usr/bin/env node

//Euler Problem 3

var testNum = 600851475143; 

var startNum = Math.floor(Math.sqrt(testNum));

function checkPrime(num)
{
    
    var limit = Math.floor(Math.sqrt(num));
    for(var i = 2; i <= limit; i++)
    {
        if( num % i == 0)
            return false;
    }
    return true;
  
}

while(startNum > 1)
{
    if(testNum % startNum == 0 && checkPrime(startNum))
    {
          // alert("The largest prime factor of " + testNum + " is " + startNum);
	   console.log("The largest prime factor of " + testNum + " is " + startNum);
           break;

    }
    startNum--;
}
