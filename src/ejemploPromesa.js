const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hola")
        resolve({
            json: function() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("como estas")
                        resolve({ name: "pepe" })
                    }, 2000)

                })
            }
        })
    }, 2000)

})

promesa.then(res => res.json())
    .then(res => console.log(res.name));