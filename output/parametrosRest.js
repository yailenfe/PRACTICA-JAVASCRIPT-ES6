"use strict";

// pasar una funcion un numero indefinida de elemntos y notro resivirlo de una forma sencilla
var mostrardatos = function mostrardatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrardatos("pepe", 25, "f");