//JavaScript Avanzado - Ejercicio asincrónico 02
//Crear arreglo con los días de la semana
const diasSemana = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ];

//Asignar fecha de hoy a una variable
var fechaHoy = new Date();
var comprobarFecha;
//Asignar fecha de hoy en una variable con un formato sensible a la localización, adaptándose así al idioma y formato del lugar
//Esta varaible la utilizare para mostrarla por pantalla al usuario
var fecha = fechaHoy.toLocaleDateString();
//Asignar el dia (posicion del dia en la semana) a una variable
var numeroDia = fechaHoy.getDay();
//Seleccionar el nombre del dia desde el arreglo con los nombres de los días de la semana ulizando la posicion del día
var nombreDia = diasSemana[numeroDia];
//alert que expresa qué día de la semana es
alert('Hoy es ' + nombreDia + ' ' + fecha + ".");

//Extra 
//Para mejor vizualizaciohn por parte del usuario
document.getElementById('parrafo').innerHTML = ('Hoy es ' + nombreDia + ' ' + fecha + ".");

//Funcion para probar con otros día de la semana
function comprobarDiaSemana() {
    //Recuperar fecha ingresada por el usuario
    var dia = document.getElementById('comprobarFecha').value;
    dia+= " 17:00:00";
    //Instaciar un objeto del tipo DAte a partir de la fecha ingresada por el usuario
    var diaN = new Date(dia);
    //nuevamente usare una variable para guardar la fecha con un formato mas compresible para el usuario
    var diaString = diaN.toLocaleDateString();
    //Obtener la posición del día dentro de la semana
    numeroDia = diaN.getDay();
    //Obtener el nombre del día utilizando la posición del día en el arreglo de los dias de la semana
    nombreDia = diasSemana[numeroDia];
    //Mostrar al usuario la respuesta
    document.getElementById('parrafoComprobar').innerHTML = ('La fecha seleccionada ' + diaString + ' corresponde a un día ' + nombreDia);
}