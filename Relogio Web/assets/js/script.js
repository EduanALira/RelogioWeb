const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if (hour < 10) hour = '0' + hour
    if (min < 10) min = '0' + min
    if (second < 10) second = '0' + second


    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = second;


});

// em rem