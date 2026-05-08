/*
    Nesse código eu fiz o somatório da média final de um aluno e a sua situação final: APROVADO, RECUPERAÇÃO, REPROVADO 
*/

let media_escolar = (6);
let media_reprovado = (3);

let nome= prompt ("Digite seu nome: ");
console.log(nome);
alert(`Olá ${nome}, vamos calcular sua média final`);

let nota1=prompt ("Digite sua nota do 1° Bimestre:");
console.log(nota1);
let nota2=prompt ("Digite sua nota do 2° Bimestre:");
console.log(nota2);
let nota3=prompt ("Digite sua nota do 3° Bimestre:");
console.log(nota3);
let nota4=prompt ("Digite sua nota do 4° Bimestre:");
console.log(nota4);

let media_final = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4;
console.log(media_final);
    if(media_final>=media_escolar){
        alert(`Sua média final é ${media_final}. Parabéns você foi aprovado!`);
    } else if(media_final>=media_reprovado && media_final<media_escolar){
        alert(`Sua média final é ${media_final}. Você está de recuperação!`);
    } else{
        alert(`Sua média final é ${media_final}. Você foi reprovado!`);
    }

 /*
    let mensagem = media_final >= 6? "aprovado" : "reprovado";
    console.log(mensagem);
*/
