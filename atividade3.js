promptSync = require('prompt-sync');
const prompt = promptSync();

function calcularQuadrado() {
    let numero = prompt("Digite um número:");

    numero = parseFloat(numero);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
        return null;
    }

    let quadrado = numero * numero;

    return quadrado;
}

let resultado = calcularQuadrado();
if (resultado !== null) {
    console.log(`O quadrado do número é: ${resultado}`);
}
