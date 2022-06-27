/**
Ler o valor da conta, calcular e infomar o valor da taxa de 13% do garçom e o valor total a ser pago no jantar.
*/

const prompt = require('prompt-sync')();

console.log("Digite o valor da conta");
let valor = Number(prompt());

let taxaGarcom = 0.13 *valor;

console.log("O Valor da taxa de 13% do garçom é: " +taxaGarcom.toFixed(2));

let totalPagamento = taxaGarcom + valor;

console.log("O valor total a ser pago é: " + totalPagamento);