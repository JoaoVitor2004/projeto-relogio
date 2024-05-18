
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const relogio = () => {
    const data = new Date()
    horas.innerHTML = String(data.getHours()).padStart(2,'0')
    minutos.innerHTML = String(data.getMinutes()).padStart(2,'0')
    segundos.innerHTML = String(data.getSeconds()).padStart(2,'0')
}
const intervalo = setInterval(relogio, 1000)