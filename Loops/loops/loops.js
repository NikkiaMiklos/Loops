/*
Author: Nikkia Miklos
Date: 10/06/2024
loops and prime numbers
*/
"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

// average rolls for a 6
var averageRolls = function() {
    var total = 0;
    var max = -Infinity;
    var rolls;

    for (var count = 0; count < 10000; count++) {
        rolls = 1;
        do {
            rolls++;
        } while (getRandomNumber(6) !== 6);
        total += rolls;
        if (rolls > max) max = rolls;
    }

    var average = total / 10000;
    alert("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
};

// display factors
var displayFactors = function() {
	var number = $("number").value;
	var factors = "";
	for ( var i = 1; i < number; i++ ) {
		if ( number % i === 0 ) {
			factors +=  i + " ";
		}
	}
	alert("Factors of ".concat(number, ": ", factors));
}

// determine if a number is prime
var determineIfPrime = function() {
    var number = $("number").value;
    var prime = isPrime(number);
    var message = prime ? number + " is prime." : number + " is not prime.";
    $("primes").value = message; 
};
//Receives a number and returns the number if it is prime or 0 if it isnt.
var isPrime = function(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return 0; // Not a prime
        }
    }
    return number; // Prime number
};
//Gets all the prime numbers between 1 and the number the input number.
var getPrimeNumbers = function() {
    var number = $("number").value;
    var primes = "";
    var count = 0;
    for (var i = 2; i <= number; i++) {
        var prime = isPrime(i);
        if (prime) {
            primes += prime + " ";
            count++;
        }
    }
    $("count").value = count; // Puts the number of prime numbers in the box labeled count.
    $("primes").value = primes; // Puts the list prime numbers in the box labeled primes.
}
var processEntries = function() {
	//averageRolls();
	//displayFactors();
	//determineIfPrime();
	getPrimeNumbers(); // Calls the new function to find all prime numbers
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("number").focus();
};
