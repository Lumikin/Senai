// function sudacao() {
//     console.log("função em javaScript :3c")
//     funcao2()
// }

// function funcao2() {
//     console.log("Resultado da funcao 2")
// }

// sudacao()

//SOMAR !!!

// function somar(num1, num2) {
//     return num1 + num2
// }

// let resultado = somar(12, 21)
// console.log(resultado)

// usando mais de um valor

// function somaNumeros(...valores) {
//     let resultado = 0 
//     for (let i = 0; i < valores.length; i++) {
//         resultado += valores[i];
        
//     }
//     return resultado
// }

// console.log(somaNumeros(1, 54, 42, 4))


// funcao usando constante !!!

// const multuplicar = function (valor1 , valor2) {
//     return valor1 * valor2
// }
// console.log(multuplicar(6,9))

//funcoes imediatamente invocadas

// (function () {
//     console.log("esta é uma função imediatamente invocada!")
// })();

//funcoes de seta

function div(num1, num2) {
    return num1 / num2
    
}
const dividir = (valorA, valorB) => valorA / valorB;

console.log(div(100,10))
console.log(dividir(100,10))

const numeros = [1, 2, 3, 4, 5, 6]
const dobrados = numeros.map(num => num * 2);
console.log(dobrados)