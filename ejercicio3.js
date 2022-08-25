// Ejercicio 3
// Escribir una función createGame que retorne una nueva función que reciba un número y permita adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto la función retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”. Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”

function createGame(){
    let item = Math.floor(Math.random()*101);
    console.log("el numero es "+item);

    return function Attempts(number){
        if(number>item){
            console.log("Muy Alto")
        }
        if(number<item){
            console.log("Muy bajo")

        }
        if(number===item){
            console.log("Lo adivinaste, felicitaciones!")
        }
    }
    
}

const guess = createGame()
guess(8) // "Muy alto!"
guess(4) // "Muy bajo!"
guess(5) // "Lo adivinaste, felicitaciones!"

//bonus
let interruptor = true
let item = Math.floor(Math.random()*101);
console.log("el numero es "+item);
function createGame(){
    let number = parseInt(prompt("ingresa un numero"));

       return function Attempts(){
        if(number>item){
            console.log("Muy Alto")
        }
        if(number<item){
            console.log("Muy bajo")

        }
        if(number===item){
            interruptor = false
            console.log("Lo adivinaste, felicitaciones!")
        }


}
}
while(interruptor == true){
const guess = createGame()
guess()
}

