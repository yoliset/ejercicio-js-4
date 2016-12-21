var Tiempo_Llamada=null;
var Costo_Minuto=null;
var Costo_Llamada=null;

Tiempo_Llamada=prompt("Por favor ingresa el tiempo de la llamada");
Costo_Minuto=prompt("Por favor ingresa el costo por minuto");

Costo_Llamada=(parseFloat(Tiempo_Llamada)*parseFloat(Costo_Minuto));
alert(Costo_Llamada);