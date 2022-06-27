/**
Ler a duração de dias e horas.
Calcule e informe a duração total da viagem em número de horas.

Exemplo: 
Numero de dias: 2
Numero de horas: 4
Total de horas: 52
*/

const prompt = require('prompt-sync')();
// biblioteca para usar o prompt

console.log("Quantos dias de viagem?");
let dias = Number(prompt());
// obriga o dado a vir em valor numérico
let diasEmHoras = dias *24
// pegar quantos dias e converter em horas

console.log("E quantas horas?");
let horas = Number(prompt());
// pegar as horas

let viagemTotal = diasEmHoras + horas;
// somar as horas totais da viagem

console.log("A sua viagem teve um total de " + viagemTotal + " horas");
