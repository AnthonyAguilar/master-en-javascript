/* 
    Muestre todos los numeros divisores de un numero introducido en un prompt.
*/

var num = parseInt(prompt("Introduce un numero"));

for (let i=0; i <= num; i++){
    if( num % i === 0) {
        console.log("Divisor: " + i);
    }
}