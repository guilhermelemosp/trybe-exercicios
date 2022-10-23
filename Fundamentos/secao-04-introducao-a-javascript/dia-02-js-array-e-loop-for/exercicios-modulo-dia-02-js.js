/*

****** Percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; ******

console.log (numbers);


******* Some todos os valores contidos no array e imprima o resultado; *******

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0

for (index = 0 ; index < numbers.length ; index++) {

soma += numbers[index] 
}

console.log (soma)

*************Calcule e imprima a média aritmética dos valores contidos no array;******************
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var media = 0

for (index = 0 ; index < numbers.length ; index++) {

media += numbers[index]/numbers.length

if (numbers < )
}

console.log (media)



*********Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; **********

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var media = 0

for (index = 0 ; index < numbers.length ; index++) {

media += numbers[index]/numbers.length

}
console.log (media)

if (media > 20) {console.log ('valor maior que 20')}
else {console.log ('valor menor que 20')}


************* Utilizando for, descubra qual o maior valor contido no array e imprima-o;************
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = 0

for ( index = 0 ; index < numbers.length ; index++) {
if (higherNumber < numbers[index]) {

    higherNumber = numbers[index]
}

}

console.log (higherNumber)

***************** Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; *****************

************* Utilizando for, descubra qual o menor valor contido no array e imprima-o;************

************Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*****************

********** Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.***********/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantidadeDeImpares = 0

for ( index = 0 ; index < numbers.length ; index++) {
if ( numbers[index] % 2 !== 0) {
    quantidadeDeImpares += 1
}
}

if (quantidadeDeImpares === 0) {
    console.log ('Nenhum valor impar encontrado')
}
else {console.log ('numeros impares encontrados: ' + quantidadeDeImpares)}
