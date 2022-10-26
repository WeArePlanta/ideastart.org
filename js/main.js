
document.addEventListener("DOMContentLoaded", function(event) {

const today      = new Date();
console.log(today);

const daysLeft = Math.floor( (  ( new Date("2022-11-20T00:00:00.000-05:00") ) - today ) / ( 1000 * 60 * 60 * 24 ) )
console.log(daysLeft);

const hours = Math.floor( (today/(1000*60*60)) % 24 );
console.log(hours);

const minutes = Math.floor( (today/1000/60) % 60 );
console.log(minutes);

const seconds = Math.floor( (today/1000) % 60 );
console.log(seconds);

//acá creo los elementos html correspondientes para cada valor

//dias
var diaTexto = document.createElement("p");
var diaSpan = document.createElement("span");
//horas
var hoursTexto = document.createElement("p");
var hoursSpan = document.createElement("span");
//minutos
var minutesTexto = document.createElement("p");
var minutesSpan = document.createElement("span");
//segundos
var secondsTexto = document.createElement("p");
var secondsSpan = document.createElement("span");

//acá creo los textos que iran dentro de los elementos html

//dias
var text = document.createTextNode(daysLeft);
var textDiaSpan = document.createTextNode("Días");
//horas
var textHoras = document.createTextNode(hours);
var textHorasSpan = document.createTextNode("Horas");
//minutos
var textMinutos = document.createTextNode(minutes);
var textMinutosSpan = document.createTextNode("Minutos");
//segundos
var textSegundos = document.createTextNode(seconds);
var textSegundosSpan = document.createTextNode("Segundos");


//acá agrego los textos creados a los elementos creados 
//dias
diaTexto.appendChild(textHoras);
diaSpan.appendChild(textDiaSpan); 
//horas
hoursTexto.appendChild(text);
hoursSpan.appendChild(textHorasSpan); 
//minutos
minutesTexto.appendChild(textMinutos);
minutesSpan.appendChild(textMinutosSpan); 
//segundos
secondsTexto.appendChild(textSegundos);
secondsSpan.appendChild(textSegundosSpan); 

//acá llamo al div que ya existe en el html y le agrego a cada uno sus elementos correspondientes
//dias
var divUno = document.getElementById('div-uno');
divUno.appendChild(diaTexto);
divUno.appendChild(diaSpan);
//horas
var divDos = document.getElementById('div-dos');
divDos.appendChild(hoursTexto);
divDos.appendChild(hoursSpan);
//minutos
var divTres = document.getElementById('div-tres');
divTres.appendChild(minutesTexto);
divTres.appendChild(minutesSpan);
//segundos
var divCuatro = document.getElementById('div-cuatro');
divCuatro.appendChild(secondsTexto);
divCuatro.appendChild(secondsSpan);


});



