"use strict";

var mostarDatos = function mostarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

var pepe = ["lolo", "pepe", 25];
mostarDatos.apply(void 0, pepe);