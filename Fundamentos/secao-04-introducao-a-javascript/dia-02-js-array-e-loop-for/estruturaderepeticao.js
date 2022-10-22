

//for (expressão inicial; condição a ser cumprida; atualização da expressão inicial)

//let anonovo = 0

//for (let index = 10; index >= 1; index = index -1) {
  //  console.log (index)}

//console.log ('FELIZ ANO NOVO UHULLLLLLL')

//const listaDeCompras = [
    //'maçã',
    //'gengibre',
    //'miojo',
    //'biscoito/bolacha',
    //'banana',
    //'feijão carioquinha',
    //'pasta de dente',
  //]; // itens para comprar
  //const carrinho = []; // array vazio que irá receber os itens da variável listaDeCompras

  //for (let index=0; index < listaDeCompras.length ; index = index +1) {
//if (listaDeCompras[index] === 'maçã' || listaDeCompras[index] === 'banana') {carrinho.push (listaDeCompras[index])}
  //}

  //console.log (carrinho)


  // múltiplos de 9
  //let numero = 9;

  //for (let index = 1 ; index <= 10 ; index = index + 1) {console.log (numero * index)}



  /* Utilizando duas estruturas de repetição 'for' aninhadas

  Você já entrou no perfil de uma pessoa na rede social e viu que vocês possuem amizades em comum? Suponha que você precise desenvolver um recurso com essa mesma finalidade para uma empresa. Como você faria?

Se você pensou em utilizar o for, está no caminho certo! Mas se prepare, porque vai usar dois!!*/

/*const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
    if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]){
      amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
    }
  }
}

console.log(amizadesEmComum);*/


//EXERCICIO DA MEGASENA FEITO SOZINHO - UHUUUUUUULLLLLLLLL

/* const numerosApostados = [33, 6, 15, 22, 55, 34];
const numerosPremiados = [43, 24, 22, 54, 15, 78];
const numerosRepetidos = []

for (indexApostados = 0 ; indexApostados < numerosApostados.length ; indexApostados = indexApostados +1){
    for (indexPremiados = 0 ; indexPremiados < numerosPremiados.length ; indexPremiados = indexPremiados +1)
    if (numerosApostados[indexApostados] === numerosPremiados[indexPremiados]) {numerosRepetidos.push (numerosPremiados[indexPremiados])}
}
console.log ('Os numeros que se repetem sao: '+ numerosRepetidos)
*/

//EXERCICIO

//A constante numeros é um array de números. Sendo assim:

//Crie um algoritmo que utiliza estrutura de repetição;
//Exiba no console cada item de dentro do array.

/*const numeros = [1, 2, 3, 4, 5];
const numerosemordem = []
for (index = 1 ; index <= numeros.length ; index = index +1){
  console.log (index)
}*/



/*EXERCICIO - Calcule os preços 🏷
Você foi a uma lanchonete e gostaria de comprar um sanduíche, uma batata frita e um refrigerante, mas não sabia se seu dinheiro seria suficiente. Para descobrir se você tem saldo para pagar pelo pedido, some os valores dos produtos:

Sanduíche - R$ 10;
Batata frita - R$ 12;
Refrigerante - R$ 8.
Os valores dos produtos foram salvos dentro de um array na variável valoresProdutos:

Utilize a estrutura de repetição for para somar os valores;
Armazene a soma dos valores na variável somaTotal e exiba o resultado no console. */

/*const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for (index = 0 ; index < valoresProdutos.length ; index = index +1) {
   somaTotal += valoresProdutos[index];

}

console.log (somaTotal)*/

/*let listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];

listaDeFrutas.push = ('manga')

for (index = 0 ; index <= listaDeFrutas.length ; index ++) {
console.log(listaDeFrutas[index]);

}*/

const frutas = ['banana', 'uva', 'pera', 'uva', 'maçã', 'uva'];
  const frutasSelecionadas = [];

  for (let index = 0; index < frutas.length; index = index + 1) {
    if (frutas[index] === 'uva') {
      frutasSelecionadas.push(frutas[index]);
    }
  }
  console.log (frutasSelecionadas)