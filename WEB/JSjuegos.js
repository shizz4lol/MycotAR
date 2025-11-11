function correcion(event,id) {
    event.preventDefault(); // evita que el formulario se recargue
    var form = document.getElementById("form");
    const preguntas = form.getElementsByClassName("pregun");
    var resultado= document.getElementById("r");
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
            if (seleccion.value=="v") {
                aciertos++;
                pregunta.style.backgroundColor="#d4edda"; 
            } else {
                pregunta.style.backgroundColor="#f8d7da"; 
            }
        } else {
            pregunta.style.backgroundColor = "#fff3cd";
        }
    }
    if(aciertos==total){
        otro=document.getElementById('otro')
        otro2=document.getElementById('volver')
        form.innerHTML="";
        resultado.innerHTML='¡Lo lograste!<br>';
        otro.style.display='inline';
        otro2.style.display='inline';
        console.log(otro)
        otro.onclick = function() {
            if (id=='f1') {
                window.location.replace('test2.html');
            } else if (id=='f2'){
                window.location.replace('test1.html');
            }
        }
        otro2.onclick= function(){
            window.location.replace('juegos.html');
        }
    }
    
}
