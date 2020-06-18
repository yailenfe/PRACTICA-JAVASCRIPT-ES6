// atrubutos
// Element.getAttribute("atributo")
// Element.setAttribute("atribute",value)


// clases
// Element.classList.add("class","class",...)
// Element.classList.remove("class","class",...)
// Element.classList.toggle("class" [,force])
// Element.classList.contains("class")
// Element.classList.replace("oldClass","newClass")


// atribute directos
// id
// value


const button = document.getElementById("submit");
button.onclick = function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const grado = document.getElementById("grado").value;

    if (!nombre || !edad || !grado) {
        alert("rellene los adtos")
    } else {
        const id = Math.random();
        const fila = `<tr id="${id}"> 
        <th scope="row">1</th>
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${grado}</td>
        <td><button type="button" class="btn btn-outline-danger" onclick="eliminar(${id})">-</button></td>
    </tr>`
        const tabla = document.getElementById("tabla_body");
        tabla.insertAdjacentHTML("afterbegin", fila);

        const filasAnteriores = localStorage.getItem("tabla")

        localStorage.setItem("tabla", fila + filasAnteriores)


        document.getElementById("myForm").reset();
        document.getElementById("nombre").focus()


    }

}

function pintarTabla() {
    const filasAnteriores = localStorage.getItem("tabla");
    const tabla = document.getElementById("tabla_body");
    tabla.insertAdjacentHTML("afterbegin", filasAnteriores);
}

pintarTabla();


function eliminar(id) {
    document.getElementById(id).remove();
}