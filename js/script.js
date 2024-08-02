"use strict";
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const dataAtual = () => {
    const data = new Date();
    if (dia)
        dia.innerHTML = `${String(data.getDate()).padStart(2, '0')} do`;
    if (mes)
        mes.innerHTML = `${String(data.getMonth() + 1).padStart(2, '0')} de`;
    if (ano)
        ano.innerHTML = data.getFullYear().toString();
};
dataAtual();
function horario() {
    const data = new Date();
    if (horas)
        horas.innerHTML = `${String(data.getHours()).padStart(2, '0')} :`;
    if (minutos)
        minutos.innerHTML = `${String(data.getMinutes()).padStart(2, '0')} :`;
    if (segundos)
        segundos.innerHTML = `${String(data.getSeconds()).padStart(2, '0')}`;
}
const intervalo = setInterval(horario, 1000);
