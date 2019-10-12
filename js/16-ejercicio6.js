/* 
    Hacer un programa que nos diga si un numero es impar o par.
*/

while( isNaN(num)){
    var num = parseInt(prompt("Inserta un numero:"));
}

if(num % 2 === 0){
    console.log("El numero " + num + " es par.");
}else{
    console.log("El numero " + num + " es impar.");
}