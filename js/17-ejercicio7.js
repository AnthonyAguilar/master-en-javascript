/* 
     Tabla de multiplicar de un numero introducido por pantalla;
*/


while(isNaN(num)){
    var num = parseInt(prompt("De que numero quieres saber la tabla", 1));
}
document.write("<h1> TABLA DE MULTIPLICAR DEL " + num + "</h1>")
for(let i=0; i<=10; i++){
    document.write("<p>" + i + "x"+ num + " = " + i*num + "<p/>");
    console.log(i + "x"+ num + " = " + i*num);
}