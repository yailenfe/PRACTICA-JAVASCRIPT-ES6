"use strict";

var usuario = {
  nombre: "carlos",
  correo: "pepe2KSS",
  pais: "mescio",
  profesion: "arquitercto"
};
var nombre = usuario.nombre,
    correo = usuario.correo;

var mostartDatos = function mostartDatos(_ref) {
  var nombre = _ref.nombre,
      _ref$edad = _ref.edad,
      edad = _ref$edad === void 0 ? 25 : _ref$edad;
  return console.log(nombre, edad);
};

mostartDatos(usuario);