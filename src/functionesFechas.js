const nombre = ["carlos", "pepe", "juan", "lola"]

const number_caracter = nombre.map(nombre =>
    `${nombre } tiene ${nombre.length} letas`
);

console.log(number_caracter)

// (parametro) => {
//     //    return  codigo a ejecutar 
// }