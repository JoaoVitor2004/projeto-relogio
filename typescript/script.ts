const horas: HTMLElement | null = document.getElementById('horas')
const minutos: HTMLElement | null = document.getElementById('minutos')
const segundos: HTMLElement | null = document.getElementById('segundos')
const dia: HTMLElement | null = document.getElementById('dia')
const mes: HTMLElement | null = document.getElementById('mes')
const ano: HTMLElement | null = document.getElementById('ano')

const dataAtual = ():void => {
    const data = new Date()
    if (dia) dia.innerHTML = `${String(data.getDate()).padStart(2,'0')} do`
    if (mes) mes.innerHTML = `${String(data.getMonth() + 1).padStart(2,'0')} de`
    if (ano) ano.innerHTML = data.getFullYear().toString()
}

dataAtual()

function horario():void {
    const data = new Date()
    if (horas) horas.innerHTML = `${String(data.getHours()).padStart(2,'0')} :`
    if (minutos) minutos.innerHTML =`${ String(data.getMinutes()).padStart(2,'0')} :`
    if (segundos) segundos.innerHTML = `${String(data.getSeconds()).padStart(2,'0')}`
}

const intervalo = setInterval(horario, 1000)