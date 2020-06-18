const persona = ["barbaro laturo", " mexico", "desarrolador", 23]

// const nombre = persona[0];

const [nombre, pais, profesion, edad] = persona;

const mostrandoInfo = (persona) => {
    console.log(persona[2]);
}

mostrandoInfo(persona)