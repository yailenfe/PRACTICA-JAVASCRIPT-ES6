"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hola");
    resolve({
      json: function json() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log("como estas");
            resolve({
              name: "pepe"
            });
          }, 2000);
        });
      }
    });
  }, 2000);
});
promesa.then(function (res) {
  return res.json();
}).then(function (res) {
  return console.log(res.name);
});