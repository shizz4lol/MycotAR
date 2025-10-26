function vacio(){
    $inputs = document.getElementsByClassName("campo");
    var $v;
    $validacion= Array();
    for ($i=0;$i<$inputs.length;$i++){
        if ($inputs[$i].value==""){
            $v=1;
        }}
        /* else{
            $v=0;
        }
        $validacion[$i]=$v;
    } */
    /* return $validacion; */
}
/* function vacio_muestra(){
    $val=vacio();
    $w =document.getElementsByName("parrafo");
    for ($i=0;$i<$val.length;$i++){
        if ($val[$i]==1){
            console.log("HOLA");
        }
    }
} */