let contador = 1;
let qtd = prompt("Quantas notas?");
let soma = 0;
let nota = 0;

    while(contador <= qtd){
        console.log(contador)
        nota = Number(prompt(`Digite a nota ${contador}`))
        soma = soma + nota;
        contador++
    }
        console.log(`Soma das notas é ${soma}`);
        let media = soma/qtd;
        let mediaEscolar = 7;
        let mediaReprovado = 3;
        console.log(`A média final é ${media}`);

            if(media>=mediaEscolar){
                alert(`Sua média final é ${media}. Parabéns você foi aprovado!`);
            } else if(media <= mediaEscolar && media > mediaReprovado){
                alert(`Sua média final é ${media}. Você está de recuperação!`);
            } else{
                alert(`Sua média final é ${media}. Você foi reprovado!`);
            }
