"use strict";

var nombre = ["carlos", "pepe", "juan", "lola"];
var number_caracter = nombre.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letas");
});
console.log(number_caracter); // (parametro) => {
//     //    return  codigo a ejecutar 
// }