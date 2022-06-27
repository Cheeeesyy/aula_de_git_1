/**
 * As vendas do mercado PATATI no setor de higine, estão cada dia piores, para melhorar
 * o mercado resolveu dar um desconto de 50% para um item na compra de 3 unidades do mesmo produto.
 * Ler a descricao do produto e valor
 * Após apresente as mensagens indicando a promoção.
 * Exemplo:
 * Produto: Creme Dental Boldate
 * Preço R$: 8.00
 * Saída Esperada => 
 * Creme Dental Boldate: Promoção leve 3 por R$ 20.00
 * A 3a unidade do Creme Dental Boldate saí por R$ 4.00
 */

const prompt = require('prompt-sync')();

console.log("Qual o pruduto a ser comprado?");
let produto = prompt();
console.log("Qual o valor?")
let valorProduto = Number(prompt());
console.log("O valor do produto " + produto + " é: " + valorProduto + " Reais\n");
console.log("Caso o Senhor(a) compre 3 " + produto + "s" + "receberá um desconto de 50% em uma das unidades deste mesmo produto")

