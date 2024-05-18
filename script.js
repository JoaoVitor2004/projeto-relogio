
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



// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let soma = 5 + 5
//         if (soma === 10) {
//             resolve('Tudo certo, valor encontrado')
//         } else {
//             reject('Erro, valor não encontrado')
//         }
//     }, 2000)
// })

// promesa.then((resolvido) => {
//     console.log(resolvido)
// }).catch((erro) => {
//     console.log(erro)
// }).finally((final) => {
//     console.log('Fim da aplicação')
// })