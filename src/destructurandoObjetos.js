const usuario = {
    nombre: "carlos",
    correo: "pepe2KSS",
    pais: "mescio",
    profesion: "arquitercto"
}

const { nombre, correo } = usuario

const mostartDatos = ({ nombre, edad = 25 }) => console.log(nombre, edad)

mostartDatos(usuario)