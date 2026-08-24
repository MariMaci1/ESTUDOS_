/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanolPreco = 3.89;
const gasolinaPreco = 5.79;
let tipoCombustivel = String("etanol");
const gastoDeCombustivel = 12;
let distanciaViagem = 100;

let gastoPorKM = distanciaViagem / gastoDeCombustivel;
let valorViagem;

if(tipoCombustivel == "gasolina"){
    valorViagem = gastoPorKM * gasolinaPreco;
} else if(tipoCombustivel == "etanol"){
    valorViagem = gastoPorKM * etanolPreco;
}
console.log(valorViagem.toFixed(2));