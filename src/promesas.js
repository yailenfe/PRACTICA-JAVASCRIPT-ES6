// una promesa es una sentencia que nos permite esperar a que suceda algo y dependiendo si sude o no  vamos a jecutar algo

const promesa = new Promise((resolve, reject) => {
    //accion que se ejucatarra
    setTimeout(() => {
        const exito = false
        if (exito) {
            resolve();
        } else {
            reject();
        }
    }, 1000)

})

promesa.then(() => {
    alert("exito")

})

promesa.catch(() => {
    alert("no exito")
})