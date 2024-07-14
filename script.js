
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dia = document.getElementById('dia')
const mês = document.getElementById('mes')
const ano = document.getElementById('ano')

const dataAtual = () => {
    const data = new Date()
    dia.innerHTML = `${String(data.getDate()).padStart(2,'0')} do`
    mês.innerHTML = `${String(data.getMonth() + 1).padStart(2,'0')} de`
    ano.innerHTML = data.getFullYear()
}

dataAtual()

function horario() {
    const data = new Date()
    horas.innerHTML = `${String(data.getHours()).padStart(2,'0')} :`
    minutos.innerHTML =`${ String(data.getMinutes()).padStart(2,'0')} :`
    segundos.innerHTML = `${String(data.getSeconds()).padStart(2,'0')}`
}

const intervalo = setInterval(horario, 1000)