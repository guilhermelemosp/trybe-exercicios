// Parte I
// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// Copie o código abaixo e rode-o para verificar sua saída:
// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:

    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // const pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);

//       🚀 Modifique a variável para que não ocorra Erro;

var pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  } 
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);



// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;
// Copie o código abaixo:

const numeroAleatorio = (_) => Math.random()

//   console.log(numeroAleatorio());


// Transforme a função hello em uma arrow function;
// Copie o código abaixo:

const hello = nome => {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
//   console.log(hello(nome));



// 🚀 Transforme a função nomeCompleto em uma arrow function;
// Copie o código abaixo:

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

//   console.log(nomeCompleto(`Ivan`, `Pires`));


//Altere a expressão if/else utilizando ternary operator;

//Copie o código abaixo:

    const speedCar = (speed) => {
        const velocidadeNaoPermitida = `Você ultrapassou o limite de velocidade`
        const velocidadePermitida = `Você está na velocidade permitida`
    return (speed>=120) ?  velocidadeNaoPermitida : velocidadePermitida 
    };

console.log (speedCar(80))

//RESOLUÇAO: https://stackoverflow.com/questions/19439219/ternary-operator-with-return-statements-javascript

// const speedCar = (speed) => {
//     const velocidadeNaoPermitida = `Você ultrapassou o limite de velocidade`
//     const velocidadePermitida = `Você está na velocidade permitida`

//     if (speed >= 120){
//         return velocidadeNaoPermitida
//     }
//     else {return velocidadePermitida}

// }

// console.log (speedCar(10))

