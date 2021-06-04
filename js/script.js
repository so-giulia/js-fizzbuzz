// FizzBuzz

// Scrivi un programma che stampi i num. da 1 a 100
// Per i multipli di 3 deve stampare anche "Fizz" di fianco al numero
// Per i multipli di 5 deve stampare anche "Buzz" di fianco al numero
// Per i multipli di 3 e di 5 stampare anche "FizzBuzz" di fianco al numero

//Mio vecchio

/* for (var i = 1; i < 101; i++){ 	

    if(i % 3 == 0 && i % 5 == 0){
        console.log((i) + " " + "FizzBuzz"); 
    }else if(i % 3 == 0){
        console.log((i) + " " + "Fizz"); 
    }else if (i % 5 == 0){
        console.log((i) + " " + "Buzz"); 
    }else{
        console.log(i); 
    } 

} */


// Nuovo in classe corretto

for (var i = 1; i <= 100; i++){ 	

    document.getElementById("output").innerHTML += i + " ";

    if(i % 3 == 0){
        document.getElementById("output").innerHTML += "Fizz";
    }
    if(i % 5 == 0){
        document.getElementById("output").innerHTML += "Buzz";
    }
    if(i % 6 == 0){
        document.getElementById("output").innerHTML += "Boolean";
    }

    document.getElementById("output").innerHTML += "<br>";
}