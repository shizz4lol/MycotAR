function verif_vacio(event) {
    //metodo para evitar el default: re-envio del formulario
    event.preventDefault(); 
    const campos = document.getElementsByClassName("campo");
    const p_e = document.getElementById("exito");
    const p_warning = document.getElementsByClassName("warning");
    var parrafos = document.getElementsByTagName("p");
    var cant_vacios = Array();
    let vacios = 0; 
    for (var i = 0; i < campos.length; i++){
      if (campos[i].value.trim() == "") {
        vacios++;
        cant_vacios[i]=vacios;
      } else {
        p_warning[i].innerHTML= "";
      }
    }
    for (i in cant_vacios){
       p_warning[i].innerHTML= "CAMPO VACIO";
    }
    e=otros();
    if ((vacios == 0)&&(e==0)) {
      for (i=0;i<parrafos.length;i++){
        parrafos[i].innerHTML ="";
      }
      p_e.innerHTML = "¡ENVIADO!";
      return true; 
    }
    return false; 
  }
function otros(){
  var n = document.getElementById("nom");
  var c =document.getElementById("correo");
  var r =document.getElementById("razon");
  error=0;
  var n2 = document.getElementById("nom2");
  var c2 =document.getElementById("correo2");
  var r2 =document.getElementById("razon2");
  var reNom=/^[a-zA-Z\s]+$/;
  var reCor=/\w+@\w+\.com$/;
  if (!reNom.test(n.value) && (n.value!="")){
  n2.innerHTML= "INGRESE SOLO LETRAS";
  error++;
  }
  if(!reCor.test(c.value) && (c.value!="")){
    c2.innerHTML= "CORREO INVALIDO";
    error++;
  }
  return (error);
  /* ^\w+\s\w+\s$ para letras*/
  /* \w+@\w+\.com */

}