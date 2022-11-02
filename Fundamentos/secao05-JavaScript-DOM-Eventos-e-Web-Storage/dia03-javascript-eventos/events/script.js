const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Parte 1

const daysOfMonth = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

function daysOfDecember() {
  let getDaysList = document.getElementById('days')// getDaysList agora contem o ID 'Days', e as informacoes precisam ser acopladas nele, or ser o pai
  for (let index = 0; index < daysOfMonth.length; index++) {
    let day = daysOfMonth[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holliday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem)

    }
    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);

    }
    else if (day === 25) {
      dayItem.className = 'day holliday friday'
      dayItem.innerHTML = day //o dayItem esta guardando o createElement 'li', e a variavel 'days'esta guardando todas os dias que foram percorridos no for. Ao juntá-los, o array de numeros fica formatado em lista.
      getDaysList.appendChild(dayItem)
    }
    else {
      dayItem.className = 'day'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    }
  }
}

daysOfDecember();


//Parte 2

function botaoferiado(buttonName) {
  let idContainer = document.querySelector('.buttons-container') // Referenciar o pai de todos
  let newButton = document.createElement('button') // criar o elemento pedido, nesse caso 'button'
  let newButtonID = 'btn-holiday'; //criacao de uma variavel que vai ser uma ID

  newButton.innerHTML = buttonName; // tudo o que for escrito em newButton será igual ao que for escrito no parametro da funcao
  newButtonID = newButton.id; //Criacao da ID

  idContainer.appendChild(newButton); // appendando o newButton (elemento criado) ao pai de todos.


}

botaoferiado('Feriados')

//Parte 3


const displayHolidays = () => {
  let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
  let getHolidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let setNewColor = 'black'; // armazena a nova cor que será utilizada ao pressionar o botão.

  getHolidayButton.addEventListener('click', () => 
    {for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

//Parte 4

function botaoSextou(parametroNome) {
let selecionaContainer = document.querySelector ('.buttons-container'); // Armazena o container de botões;
let createButton = document.createElement ('button') //Cria um botão;
let newIDButton = 'btn-friday' //armazena o ID do botao

createButton.innerHTML = parametroNome //adiciona o nome do botão
newIDButton.ID = newIDButton //adiciona o id do botão

selecionaContainer.appendChild (createButton)

}

createFridayButton('Sexta-feira')

//Parte 5


function createDisplayFriday (parametrof){
let fridayButon = document.querySelector ('#btn-friday');
let todasAsSextas = document.getElementsByClassName ('friday');
let oQueSeraMostrado = 'SEXTOU!'

fridayButon.addEventListener('click', () => {
 for (let index = 0; friday < array.length; index++) {
  if (fridays[index].innerHTML !== newFridayText) {
    fridays[index].innerHTML = newFridayText;
    //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
} else {
    fridays[index].innerHTML = fridaysArray[index];
    //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
  }
  
 }
});
}

let decemberFridays = [ 4, 11, 18, 25 ];
createDisplayFriday(decemberFridays);


// Parte 6
const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}

dayMouseOver();
dayMouseOut();


//  Parte 7

const newTaskSpan = (task) => {
  let tasksContainer = document.querySelector('.my-tasks'); // armazena o elemento com classe igual a 'my-tasks'
  let taskName = document.createElement('span'); // armazena a criação de um elemento do tipo 'span'

taskName.innerHTML = task
tasksContainer.appendChild(taskName)
}

newTaskSpan('projeto');


//Parte 8

function taskColor (color) {
let Odin = document.getElementsByClassName ('my-tasks');
let divColor = document.createElement ('div');

divColor.className = 'task';
divColor.style.backgroundColor = color
Odin.appendChild (divColor)


}

taskColor ('green')


// Parte 9

const setTaskClass = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {

      event.target.className = 'task selected';
      // Caso selectedTask retornar um array com nenhum item
    } else {
      event.target.className = 'task';
      // Caso a primeira condição retornar falso
    }
  });
}

setTaskClass();

//PARTE 10


const setDayColor = () => {
  let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days'); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task'); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"

days.addEventListener('click', (event) => { // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
  let eventTargetColor = event.target.style.color;
  if (selectedTask.length > 0 && eventTargetColor !== taskColor) { // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "taskColor"
    let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
  } else if (eventTargetColor === taskColor) { // Caso a cor do evento alvo seja igual à da variável "taskColor"
    event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
  }

})
}

setDayColor();