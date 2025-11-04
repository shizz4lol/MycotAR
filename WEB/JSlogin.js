function comprobar(event){
    event.preventDefault();
    var n = document.getElementById("nom");
    var c =document.getElementById("contra");
    var ex =document.getElementById("exito");
    
    if ((n.value.trim()=="ambar")&&(c.value.trim()=='micontra')){
        window.location.replace('noticias.html');

    }
    else{
        ex.innerHTML="Usuario no registrado!!!";
    }
}