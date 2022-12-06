// // //O desafio prático
// // Imagine que você tenha passado para a etapa seguinte de uma vaga de trabalho: o desafio prático! E agora precise mostrar todas as suas habilidades em reduce, resolvendo diversas questões.
// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, outra HOF. A informação será citada no enunciado.

// Para realizar os exercícios de 1 a 3, utilize o array abaixo:

// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  //acc é o valor que sempre vai alterar. Ele começa com um valor definido (ou não), e a medida que o segundo parametro vai passando ele vai se alterando.
  // o segundo parâmetro é o que vai ser rodado.

  //1 - Calcule a quantidade total da população de todos os países.

//   const expectedResult = 120797034;

  const getPopulation = countries.reduce((total, numero) => total + numero.population, 0);

  //2 - Calcule a área total de todos os países.

//   const expectedResult = 4311757;

const getTotalArea = countries.reduce((total, numeros) => total + numeros.area, 0)
console.log(getTotalArea);

//🚀 3 - Encontre o país com o maior nome.

// const expectedResult = {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
//   }
  
  const longestName = countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
  console.log(longestName);

  //se o valor do acumulador (que é o primeiro item, já que não foi declarado o inicial) for maior que os valores que serão percorridos pelo segundo parâmetro (no caso o curr), o valor se mantém. Caso contrário o valor de curr passa para o acumulador. O resultado final é sempre o que o acumulador apresentar, nesse caso o American Samoa. o curr percorreu todos os name.length de countries e encontrou o maior nome para ser colocado no acc.

  //🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   const expectedResult = 20;
  const lettersArray = names.join('').toLowerCase().split('');

  const countA = lettersArray.reduce((acc, curr) => curr === 'a' ? acc+= 1 : acc, 0)

  console.log(countA);

  //🚀 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

  // O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = students.map((student, index) => ({name: student, average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length}));

console.log(studentAverage);
