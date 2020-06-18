"use strict";

var persona = ["barbaro laturo", " mexico", "desarrolador", 23]; // const nombre = persona[0];

var nombre = persona[0],
    pais = persona[1],
    profesion = persona[2],
    edad = persona[3];

var mostrandoInfo = function mostrandoInfo(persona) {
  console.log(persona[2]);
};

mostrandoInfo(persona);