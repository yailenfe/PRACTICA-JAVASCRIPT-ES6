class Usuario {
    constructor(nombre, edad, correo, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.pais = pais;
    }

    mostrarSaludo(mensaje) {
        return mensaje
    }


    mostrarInfo() {
        return `
       <b> nombre:</b> ${this.nombre} <br/>
       <b>edad:</b> ${this.edad} <br/>
       <b> correo:</b> ${this.correo}<br/>
       <b>pais:</b> ${this.pais}
        <hr/>
        `
    };


}


class Estudiante extends Usuario {

    constructor(nombre, edad, correo, pais, curso, carrera) {
        super(nombre, edad, correo, pais)
        this.curso = curso;
        this.carrera = carrera;
    }

    mostrarInfo() {
        return `
       ${super.mostrarInfo()}
       <b>curso:</b> ${this.curso}<br/>
       <b>carrera:</b> ${this.carrera}<br/>
        <hr/>
        `
    };

}

class Profesores extends Usuario {

    constructor(nombre, edad, correo, pais, sexo, color) {
        super(nombre, edad, correo, pais)
        this.sexo = sexo;
        this.color = color;
    }

    mostrarInfo() {
        return `
       <b> nombre:</b>${this.nombre} <br/>
       <b>edad:</b>${this.edad} <br/>
       <b> correo:</b>${this.correo}<br/>
       <b>pais:</b>${this.pais}<br/>
       <b>sexo:</b>${this.sexo}<br/>
       <b>color</b>${this.color}<br/>
        <hr/>
        `
    };

}

const carlos = new Usuario("yailen", 23, "pepe@HashChangeEvent.ci", "mexico");
document.write(carlos.mostrarInfo());

const alejandro = new Estudiante("pepe", 25, "lolo@kaka.ci", "cuba", "programcion", "informatica")
document.write(alejandro.mostrarInfo());

const laura = new Profesores("yailen", 35, "pepe@HashChangeEvent.ci", "mexico", "femeina", "blanca");
document.write(laura.mostrarInfo());





// const alejandro = new Usuario
// document.write(alejandro.edad);


// nos va permietir  organizar un poco nustro codigo para separar lo que  seria variables y funciones que esten relacionada .
//  para agregar variable , hay que asignarlas hay que utilizar el metodo contructor, es una funciones que se va ajecutar una vez que hagamos una intancia de la clase.pero es importante porque es lo que nos va a permitir saber las varibales que van estard entro de la clase


// intancia  se le conoce, como hacer un nuevo variable heredando las propiedades de la clase.


// las variables dentro de una clases se conoce como propiedades