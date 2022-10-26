//FUNCOES
//Hora de testar 💻: Cumprimente e exiba a idade de mais 3 pessoas:

/*function imprimirDados (nome, sobrenome, idade) {
const chamadaNome = 'Olá ' + nome + " " + sobrenome + '!';
const chamadaIdade = 'Voce possui ' + idade + ' anos.'

return chamadaNome + ' ' + chamadaIdade;
}

console.log (imprimirDados ('Carlos', 'Machado', 35));
console.log (imprimirDados ('Guilherme', 'Lemos', 28));
console.log (imprimirDados('Sara', 'Baroni', 33)); */

//Agora que você já aprendeu como passar parâmetros e já cumprimentou todas as pessoas que rodaram seu código, imagine que você quer calcular as despesas do mês, como luz e internet. Como você faria?

/*function ContasAPagar(agua, luz, telefone) {
const somaContas = agua + luz + telefone

return 'Valor a pagar: ' + somaContas;

}

console.log (ContasAPagar (50, 100, 300))
*/

/*Exercícios
Crie uma função que exiba a frase: Vamo que vamo! 🚀
Crie uma função mostrarFrase que retorne a frase ‘Vamo que vamo!’ quando chamada.*/

/*
function mostrarFrase (){
    const frase = "Vamo que vamo!"
    
    return frase
}

console.log (mostrarFrase());



Saudação, terráqueo 🛸
Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação, por exemplo: 'Olá, Julia!'



function mostrarNome (nome) {
const saudacao = 'Olá, ' 

return saudacao + nome

}

console.log (mostrarNome ('Guilherme'))




Pedido na pizzaria 🍕
Crie uma função clientePedido que receba um parâmetro numeroPedido. Considere as condições a seguir:

Se numeroPedido for igual a 1, retorne a mensagem 'Pizza de Calabresa';
Se numeroPedido for igual a 2, retorne a mensagem 'Pizza de Quatro Queijos';
Se numeroPedido for igual a 3, retorne a mensagem 'Pizza de Frango com Catupiry';
Se numeroPedido for igual a 4, retorne a mensagem 'Pizza de Brigadeiro';
Se numeroPedido não entrar nas condições acima, retorne a mensagem 'Número do pedido inválido!'.


function clientePedido (numeroPedido){

   if (numeroPedido === 1) { return 'pizza de calabresa'}
 else if (numeroPedido === 2) { return 'pizza de quatro queijos'}
 else if (numeroPedido === 3) { return'pizza de frango com catupiry'}
 else if (numeroPedido === 4) {return 'pizza de brigadeiro'}
else { return 'numero do pedido inválido'}

}

console.log (clientePedido (2))





Fazendo média 🔢
Crie uma função chamada mediaDosNumeros que recebe como parâmetro um array de números chamado arrayNumeros e retorna a média desses números.

De olho na dica 👀 : Use uma estrutura de repetição for para percorrer o array.
*/

// function mediaDosNumeros (numero1, numero2, numero3) {

//     arrayNumeros = 0

//     for (let index = 0; index < arrayNumeros.length; index++) {
//         arrayNumeros +=  arrayNumeros[index] / arrayNumeros.length;
        
//     }

//     return numerosSalvos
// }

// console.log (mediaDosNumeros())  FICOU DUVIDAAAAAAAAA




//EXERCICIOS DO DIA

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:


let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
  };

//Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

//console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

//Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.


//console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');



// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

//console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' possui ' + player['medals'].golden + ' medalhas de ouro e ' + player['medals'].silver + ' medalhas de prata.');



//Gabarito: Exercícios - funções

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindrome (word){
//     for (index in word) {
//     if (word [index] != word[(word.length - 1) - index])
    
//     {return false}
    
//     }
//     return true
//     }
//     console.log (verificaPalindrome())


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }

//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4




// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }

  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function palavraMaior (nomes){
maiorCaractere = 0

for (let index in nomes) {
  if (nomes[index].length > maiorCaractere.length ) {

    maiorCaractere = index
  }
}
return maiorCaractere
}
console.log (palavraMaior (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

const valorInteiro = (maisRepete) => {
var numeros;
for (let index = 0; index < numeros.length; index++) {
    for (let index = 0; index < maisRepete.length; index++) {

      numeros += index
    }
    

return numeros

  }
  }


// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.


// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// const wordsTogether = (p1, p2) => {
// p1 = pi.split (``)
// p2 = p2.split (``)






// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false


// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false