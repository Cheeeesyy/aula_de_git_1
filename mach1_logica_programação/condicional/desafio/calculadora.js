/*
Elaborar um programa para receber dois valores e o tipo de operação (+ - * /)
Esse programa irá calcular a expressão entre esses dois valores
Utilizar o if para fazer
Verificar se são numeros  => caso informe um valor diferente de numero: DIGITE UM NUMERO VALIDO
Verificar se os simbolos são válidos => caso informe um simbolo diferente: Os símbolos válidos são + - * /
Executar o calculo conforme o esperado.
Exemplo de entrada:
Digite o valor 1:
10
Infome a operação(+ - * /) 
*
Digite o valor 2:
30
Exemplo de saida:
O resutado de 10 * 30 = 300
*/

const prompt = require("prompt-sync")();

const MENSAGEM_ERRO_1 = "DIGITE UM NÚMERO VALIDO";
const MENSAGEM_ERRO_2 = "OPERADOR INVALIDO! Os símbolos válidos são: + - * /";
let valor1, valor2, operador, resultado;

console.log("Digite o primeiro valor");
valor1 = Number(prompt());

console.log("Digite o segundo valor");
valor2 = Number(prompt());

if (isNaN(valor1) || isNaN(valor2)) {
    return console.log(MENSAGEM_ERRO_1);
};

console.log("Escolha a operação (+ - * /)");
operador = prompt();

if (operador === "+") {
    resultado = valor1 + valor2
} else if (operador ==="-") {
    resultado = valor1 - valor2
} else if (operador === "*") {
    resultado = valor1 * valor2
} else if (operador === "/") {
    resultado = valor1 / valor2
} else {
    return console.log(MENSAGEM_ERRO_2)
};

console.log(resultado);
console.log(`O resultado de ${valor1} ${operador} ${valor2} = ${resultado}`);

// Constantes devem ser escritas em caixa alta