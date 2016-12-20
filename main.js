var tiempo_Llamada=null;
var costo_Minuto=null;
var costo_Llamada=null;

tiempo_Llamada=prompt("Por favor ingresa el tiempo de la llamada");
costo_Minuto=prompt("Por favor ingresa el costo por minuto");

costo_Llamada=(parseFloat(tiempo_Llamada)*parseFloat(costo_Minuto));
alert(costo_Llamada);