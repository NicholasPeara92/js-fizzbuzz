// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


// Creare un ciclo for con variabile da 1 a 100

const container = document.querySelector(".container");


for (let i = 1; i <=100; i++) {
    const element = document.createElement('div');
    element.classList.add('box');
    container.append(element);
    
    if (i % 15 === 0) {
        // nei multipli di 3 viene stampato "FizzBuzz"
        console.log("FizzBuzz");
        element.innerHTML = 'FizzBuzz';
        element.classList.add('fizz-buzz');
        
    } else if ( i % 5 === 0) {
        // nei multipli di 5 viene stampato "Buzz"
        console.log("Buzz");
        element.innerHTML = 'Buzz';
        element.classList.add('buzz');
        
    } else if ( i % 3 === 0) {
        // nei multipli di 3 viene stampato "Fizz"
        console.log("Fizz");
        element.innerHTML = 'Fizz';
        element.classList.add('fizz');
        
    } else {
        element.innerHTML = i;
        console.log(i);
    }
    
}