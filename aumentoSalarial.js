/*
Verificação de aumento de salários:
estagiario: 100%
analista: 50%
gerente: 30%
presidente: 10%
*/
let cargo = prompt("Digite seu cargo para descobri o aumento:").toLowerCase();
let aumento = 0;
let salario = prompt("Digite seu salário SEM R$:");
console.log(salario);
let salarioNumber = Number(salario);

switch(cargo){
    case "estagiário": aumento= 1; break;
    case "analista": aumento = 0.5; break;
    case "gerente": aumento = 0.3; break;
    case "presidente": aumento = 0.1; break;
    default: alert("Favor escolher um cargo válido!");
}
console.log(aumento);
let novoSalario = salarioNumber + (salarioNumber * aumento);
console.log(`Seu salário atual é R$: ${novoSalario}`);
