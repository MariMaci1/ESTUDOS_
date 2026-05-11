// Eleitor

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

