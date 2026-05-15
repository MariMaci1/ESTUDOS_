/*
Imersão JavaScript – Estruturas de Seleção e Repetição (Linha de Bootcamps)
*/

// ELEITOR

let nome =  prompt("Digite sue nome: ");
let ano_nascimento = prompt("Digite o ano de seu nascimento: ");
let ano_atual = prompt("Digite o ano atual: ");

const eleitorMenor = 16;
const eleitorIgual = 18;
const eleitorMaior = 65;

console.log(nome, ano_atual, ano_nascimento);

let idade = ano_atual - ano_nascimento;
console.log(idade);

if(idade < eleitorMenor){
    alert(`Sua idade é aproximademente ${idade}. Logo você não precisa ser eleitor.`);
} else if(idade>= eleitorIgual && idade <= eleitorMaior){
    alert(`Sua idade é aproximademente ${idade}.Você é um eleitor obrigatório.`);
} else if(idade > eleitorMaior){
    alert(`Sua idade é aproximademente ${idade}. Você é um eleitor facultativo.`);
} else if(idade>= eleitorMenor && idade <= eleitorIgual){
    alert(`Sua idade é aproximademente ${idade}. Você é um eleitor facultativo.`);
}


/*
    OBJ: receber dois valores, o operação matemático e devolver a conta e o resultado
*/

let valor1 = parseInt(prompt("Digite um valor: "));
let valor2 = parseInt(prompt("Digite um outro valor: "));
let operacao = prompt("Qual operação numérica você deseja executar?");

console.log(valor1, valor2, operacao);

// as operações são: (+ - * /)
// switch(){ case }

switch(operacao){
    case "+": var resul= valor1+valor2; break;
    case "-":var resul= valor1-valor2; break;
    case "*":var resul= valor1*valor2; break;
    case "/":var resul= valor1/valor2; break;
    default: alert("Favor digitar uma operação válida");
}

console.log(`O resultado da operação ${valor1} ${operacao} ${valor2} = ${resul}`);




/* 
    OBJ: Entrada de dois valores inteiros e saída da tabuada do 1° valor int até 2° valor int
    EX: valor1: 2; valor2: 20;
    Resul:  2x1=2
            2x2=4
            2x3=6...
*/
document.write("Tabuada: <br>")

let num = parseInt(prompt("Digite um número: "))
let qtd = 1


while(qtd <= 10){
    resul = num*qtd
    document.write(`${num} x ${qtd} = ${resul} <br>`)
    qtd++
}
