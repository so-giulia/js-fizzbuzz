// FizzBuzz

// Scrivi un programma che stampi i num. da 1 a 100
// Per i multipli di 3 deve stampare anche "Fizz" di fianco al numero
// Per i multipli di 5 deve stampare anche "Buzz" di fianco al numero
// Per i multipli di 3 e di 5 stampare anche "FizzBuzz" di fianco al numero
// Per i multipli di 6 stampare anche "Boolean" di fianco al numero

var output = document.getElementById("output");
for(i=1; i<= 100; i++)output.innerHTML+=i+' '+(i%3?'':' Fizz ')+(i%5?'':' Buzz ')+(i%6?'':' Boolean ');
