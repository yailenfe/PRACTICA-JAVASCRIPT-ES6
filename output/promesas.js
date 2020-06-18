"use strict";

// una promesa es una sentencia que nos permite esperar a que suceda algo y dependiendo si sude o no  vamos a jecutar algo
var promesa = new Promise(function (resolve, reject) {
  //accion que se ejucatarra
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});
promesa.then(function () {
  alert("exito");
});
promesa["catch"](function () {
  alert("no exito");
});