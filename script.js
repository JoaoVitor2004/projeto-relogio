const resultado = document.querySelector('#relogio')
const relogio = () => {
    const data = new Date()
    const horas = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')
    const segundos = String(data.getSeconds()).padStart(2, '0')
    resultado.innerHTML = `${horas}:${minutos}:${segundos}`
}
const intervalo = setInterval(relogio, 1000)

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let soma = 5 + 5
        if (soma === 10) {
            resolve('Tudo certo, valor encontrado')
        } else {
            reject('Erro, valor não encontrado')
        }
    }, 2000)
})

promesa.then((resolvido) => {
    console.log(resolvido)
}).catch((erro) => {
    console.log(erro)
}).finally((final) => {
    console.log('Fim da aplicação')
})