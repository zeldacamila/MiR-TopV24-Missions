// Ejercicio 2
// Escribir una función crearContador que retorne una nueva función que incremente un número y lo retorne cada vez que es invocada:
// Recuerda de hacer uso de closures para evitar el uso de variables globales.

function createContador(){
    let item = 0;

    function augment(){
        item++
        console.log(item)
    }

    return augment
}
const contar = createContador()
contar() // 1
contar() // 2
contar() // 3