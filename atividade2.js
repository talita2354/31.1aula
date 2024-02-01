
function calcularImovel(metragem, quartos) {
    let precoPorMetroQuadrado = 3000;
    if (quartos === 1) {
        precoPorMetroQuadrado *= 1; 
    } else if (quartos === 2) {
        precoPorMetroQuadrado *= 1.2; 
    } else if (quartos === 3) {
        precoPorMetroQuadrado *= 1.5; 
    } else {
        console.log("Número de quartos não suportado.");
        return null; 
    }
    let precoTotal = metragem * precoPorMetroQuadrado;
    return precoTotal;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);