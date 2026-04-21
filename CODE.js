/* SE TIVER DÚVIDAS ENTRAR NO MDN.COM 
if(se) é uma condição afirmativa ex: if(se) eu chutar a bola ela anda.
else(se não) uma condição negativa ex: else(se não) ela não anda.   
console.log -> ver condição(valor) no console do navegador
quando usar um variável lembrar de colocar ("")('') -> para texto e (``) -> para template string(expressões)
*/

//SOMA BÁSICA ENTRE DUAS VARIÁVEIS

let nome = prompt("Digite seu nome:");
document.write(`Boas vindas ${nome}.`);
let num1 = prompt("Digite um número entre 0 e 10:");
let num2 = prompt("Digite outro número de 0 a 10:");
console.log(num1, num2);
let soma = Number(num1) + Number(num2);
console.log(soma);
document.write(`A soma entre ${num1} e ${num2} é igual a ${soma}`);
