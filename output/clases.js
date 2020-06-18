"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, edad, correo, pais) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.pais = pais;
  }

  _createClass(Usuario, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo(mensaje) {
      return mensaje;
    }
  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n       <b> nombre:</b> ".concat(this.nombre, " <br/>\n       <b>edad:</b> ").concat(this.edad, " <br/>\n       <b> correo:</b> ").concat(this.correo, "<br/>\n       <b>pais:</b> ").concat(this.pais, "\n        <hr/>\n        ");
    }
  }]);

  return Usuario;
}();

var Estudiante = /*#__PURE__*/function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  var _super = _createSuper(Estudiante);

  function Estudiante(nombre, edad, correo, pais, curso, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    _this = _super.call(this, nombre, edad, correo, pais);
    _this.curso = curso;
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n       ".concat(_get(_getPrototypeOf(Estudiante.prototype), "mostrarInfo", this).call(this), "\n       <b>curso:</b> ").concat(this.curso, "<br/>\n       <b>carrera:</b> ").concat(this.carrera, "<br/>\n        <hr/>\n        ");
    }
  }]);

  return Estudiante;
}(Usuario);

var Profesores = /*#__PURE__*/function (_Usuario2) {
  _inherits(Profesores, _Usuario2);

  var _super2 = _createSuper(Profesores);

  function Profesores(nombre, edad, correo, pais, sexo, color) {
    var _this2;

    _classCallCheck(this, Profesores);

    _this2 = _super2.call(this, nombre, edad, correo, pais);
    _this2.sexo = sexo;
    _this2.color = color;
    return _this2;
  }

  _createClass(Profesores, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n       <b> nombre:</b>".concat(this.nombre, " <br/>\n       <b>edad:</b>").concat(this.edad, " <br/>\n       <b> correo:</b>").concat(this.correo, "<br/>\n       <b>pais:</b>").concat(this.pais, "<br/>\n       <b>sexo:</b>").concat(this.sexo, "<br/>\n       <b>color</b>").concat(this.color, "<br/>\n        <hr/>\n        ");
    }
  }]);

  return Profesores;
}(Usuario);

var carlos = new Usuario("yailen", 23, "pepe@HashChangeEvent.ci", "mexico");
document.write(carlos.mostrarInfo());
var alejandro = new Estudiante("pepe", 25, "lolo@kaka.ci", "cuba", "programcion", "informatica");
document.write(alejandro.mostrarInfo());
var laura = new Profesores("yailen", 35, "pepe@HashChangeEvent.ci", "mexico", "femeina", "blanca");
document.write(laura.mostrarInfo()); // const alejandro = new Usuario
// document.write(alejandro.edad);
// nos va permietir  organizar un poco nustro codigo para separar lo que  seria variables y funciones que esten relacionada .
//  para agregar variable , hay que asignarlas hay que utilizar el metodo contructor, es una funciones que se va ajecutar una vez que hagamos una intancia de la clase.pero es importante porque es lo que nos va a permitir saber las varibales que van estard entro de la clase
// intancia  se le conoce, como hacer un nuevo variable heredando las propiedades de la clase.
// las variables dentro de una clases se conoce como propiedades