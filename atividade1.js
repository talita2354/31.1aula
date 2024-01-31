promptSync = require('prompt-sync');
const prompt = promptSync();

let valor;

valor = Number(prompt("Digite o valor da tabuada"))

while(valor<=0){
    valor = Number(prompt("o número precisa ser maior que zero,didite um numero positivo:"))
}
for(i=1;i<=10;i++){
     tabuada = valor * i
     console.log(valor,"x", i,"=",tabuada)
}