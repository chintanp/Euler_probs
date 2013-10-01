//This is the program to find the solution to Project Euler problem 6

find_sum_of_squares = function(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
	sum = sum + i*i;
    }
    return sum;
}

find_square_of_sum = function(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
	sum = sum + i;
    }
    return sum*sum;
}

var difference = 0;

difference = find_square_of_sum(100) - find_sum_of_squares(100);

console.log("The required difference is: " + difference);


