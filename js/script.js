// FizzBuszz

// Scrivi un programma che stampi i num. da 1 a 100
// Per i multipli di 3 deve stampare anche "Fizz" di fianco al numero
// Per i multipli di 5 deve stampare anche "Buzz" di fianco al numero

//stampo i numeri da 1 a 100
for (var i = 1; i < 101; i++)  { 	

    if(i % 15 == 0){
        console.log((i) + " " + "FizzBuzz"); 
    }else if(i % 3 == 0){
        console.log((i) + " " + "Fizz"); 
    }else if (i % 5 == 0){
        console.log((i) + " " + "Buzz"); 
    }

    console.log(i); 
}