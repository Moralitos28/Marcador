
var faltasvisi = 0;
function Agregarfaltavisi() {
 
 faltasvisi += 1;
 document.getElementById("faltasvisi").innerHTML = faltasvisi;

}

function Quitarfaltavisi() {

    faltasvisi -= 1;
    document.getElementById("faltasvisi").innerHTML = faltasvisi;
}


var goleslocal = 0;
function AgregarGolLocal() {

goleslocal += 1;
document.getElementById("goleslocal").innerHTML = goleslocal;


}
function QuitarGolLocal() {
goleslocal -= 1;
document.getElementById("goleslocal").innerHTML = goleslocal;
   
}

var inicio=0;
var timeout=0;

function empezarDetener(elemento)
{
    if(timeout==0)
    {
        //Empezar el cronometro

        elemento.value="Detener";

        //Obtenemos el valor actual
        inicio=vuelta=new Date().getTime();

        //iniciamos el proceso
        funcionando();
    }else{
        //Detener el cronometro

        elemento.value="Empezar";
        clearTimeout(timeout);
        timeout=0;
    }
}

var faltaslocal = 0;
function Agregarfaltalocal() {
 
 faltaslocal += 1;
 document.getElementById("faltaslocal").innerHTML = faltaslocal;

}
var golesvisi  = 0;
function AgregarGolVisi() {

 golesvisi += 1;
 document.getElementById("golesvisi").innerHTML = golesvisi;


}
function QuitarGolVisi() {
 golesvisi -= 1;
 document.getElementById("golesvisi").innerHTML = golesvisi;

}

function Quitarfaltalocal() {

    faltaslocal -= 1;
    document.getElementById("faltaslocal").innerHTML = faltaslocal;
}

function funcionando()
{
    // obteneos la fecha actual
    var actual = new Date().getTime();

    // obtenemos la diferencia entre la fecha actual y la de inicio
    var diff=new Date(actual-inicio);

    // mostramos la diferencia entre la fecha actual y la inicial
    var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
    document.getElementById('crono').innerHTML = result;

    // Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
    timeout=setTimeout("funcionando()",1000);
}

/* Funcion que pone un 0 delante de un valor si es necesario */
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}