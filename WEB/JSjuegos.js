function correcion(event) {
    event.preventDefault(); // evita que el formulario se recargue
    var form = document.getElementById("form");
    const preguntas = form.getElementsByClassName("pregun");
    let aciertos = 0;
    let total = preguntas.length;

    for (let i = 0; i < preguntas.length; i++) {
        let pregunta = preguntas[i];
        let inputs = pregunta.getElementsByTagName("input");
        let seleccion = null;

        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].checked) {
                seleccion = inputs[j];
                break;
            }
        }

        if (seleccion) {
            if (seleccion.value === "v") {
                aciertos++;
                pregunta.style.backgroundColor = "#d4edda"; // verde claro
            } else {
                pregunta.style.backgroundColor = "#f8d7da"; // rojo claro
            }
        } else {
            pregunta.style.backgroundColor = "#fff3cd"; // amarillo si no seleccionó
        }
    }
    if(aciertos==total){
        form.innerHTML="";
        document.getElementById("r").innerHTML = 'Lo lograste!!!!!!';
    }
    
}
