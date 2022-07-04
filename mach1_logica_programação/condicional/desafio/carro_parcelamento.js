/**
 * Construa um programa para uma revenda de veículos, 
 * onde essa só financia o veículo com 50 % de entrada 
 * a cada 12 meses os juros são de 14.64 % , ou seja, 1,22 % ao mês, esse programa deve ler:
 * Marca, modelo e valor de venda.
 * Apresentar como resposta o valor da entrada, marca e nome do veículo e o saldo em 12 x incluindo os juros na parcela.
 * 
 * Valor do carro: R$ 200000
 * Mercedez Benz C - 180
 * Entrada: R$ 100.000
 * Parcelas: +12 x de R$ 9.553, 33
 * 
 */

const prompt = require('prompt-sync')();

console.log("Seja bem vindo(a) ao nosso programa de revenda de veiculos! \n")

console.log("Qual o preço do seu veículo?")
let precoVeiculo = Number(prompt())

if(isNaN(precoVeiculo)){
    console.log("Por favor, coloque o valor do seu veículo!")
    return
}

console.log("Qual o modelo do veículo?")
let modeloVeiculo = prompt()

let entradaVeiculo = (precoVeiculo /2)

// let parcelas = (entradaVeiculo /12) * jurosAnual

console.log("Quantas parcelas?")
let numeroParcelas = Number(prompt())

let jurosMensal =  numeroParcelas * 0.0122

let parcelas = (entradaVeiculo /numeroParcelas) * jurosMensal

console.log("Valor do carro: " + precoVeiculo)
console.log("Modelo do carro: " + modeloVeiculo)
console.log("Entrada: " + entradaVeiculo)
console.log("Parcelas: " + parcelas.toFixed(2))
