/**
 * 
 * Programa calculo do peso ideal
 * Usando os estudos de Devine que determina o peso ideal para cada sexo é:
 * No caso de homens, o peso ideal seria = 52 kg + 1.9 kg para cada 0, 02 metros acima de 1, 52 m.
 * Enquanto isso, para mulheres = 49 kg + 1.7 kg para cada 0,02 metros acima de 1, 52 m.
 * Por exemplo, um homem de 1, 85 deveria pesar 52 kg, mais 1,9 kg para cada 0.02 m adicionais.
 Peso Homem = 52 + (((Altura - 1.52) / 0.02) * 1.9)
 Peso Mulher = 49 + (((Altura - 1.52) / 0.02) * 1.7)

 * Criaremos um programa onde receberemos 3 dados e calcularemos o peso ideal de uma pessoa.
 * Entrada: Nome, Sexo(M, F) e altura(em metros)
 - Saída Esperada: Jorge, seu peso ideal é: 88.312 kg
 * 
 */

const prompt = require('prompt-sync')();

console.log("Programa de calculo do peso ideal\n")
console.log("Qual o seu sexo? Homem ou Mulher?")

let sexo = prompt()

if(sexo == 'Homem'){
let sexo = "H"
console.log(sexo)
}else{
    console.log("Por favor, verifique se digitou corretamente.")
    return
} 


// if(sexo == 'Mulher'){
// let sexo = mulher
// }else{
//     console.log("Por favor, verifique se digitou corretamente.")
// } 

