

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

const numerosApostados = [33, 6, 15, 22, 55, 34];
const numerosPremiados = [43, 24, 22, 54, 15, 78];
const numerosRepetidos = []

for (indexApostados = 0 ; indexApostados < numerosApostados.length ; indexApostados = indexApostados +1){
    for (indexPremiados = 0 ; indexPremiados < numerosPremiados.length ; indexPremiados = indexPremiados +1)
    if (numerosApostados[indexApostados] === numerosPremiados[indexPremiados]) {numerosRepetidos.push (numerosPremiados[indexPremiados])}
}

console.log ('Os numeros que se repetem sao: '+ numerosRepetidos)

