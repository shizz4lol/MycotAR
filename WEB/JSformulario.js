function verif_vacio(event) {
    //metodo para evitar el default: re-envio del formulario
    event.preventDefault(); 
    const campos = document.getElementsByClassName("campo");
    const p_e = document.getElementById("exito");
    const p_warning = document.getElementsByName("warning");
    var cant_vacios = Array();
    p_e.innerHTML = ""; 
    let vacios = 0; 
    for (let i = 0; i < campos.length; i++) {
      if (campos[i].value.trim() === "") {
        vacios++;
        cant_vacios[i]=vacios;
      } else {
        campos[i].style.border = "";
      }
    }
    for (i in cant_vacios){
        p_warning[i].innerHTML+= "Campo vacio <br>";
    }
    if (vacios == 0) {
      p_e.innerHTML = "Envio exitoso!";
      return true; // podrías permitir el envío si querés
    }
  
    return false; // evita el envío si hay vacíos
  }
