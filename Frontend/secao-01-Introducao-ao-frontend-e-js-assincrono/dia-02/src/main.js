
import Swal from "sweetalert2";

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

const randomId = () => Math.floor(Math.random() * 1000); //funçao que gera um numero aleatorio mediante quantidade de heróis. são 750, mas coloquei 1000 para testar o catch


button.addEventListener('click', (event) => {
event.preventDefault();

const id = randomId();

fetch(`${url}/${id}.json`)
.then((result) => result.json())
.then((data) => {
    img.src = data.images.lg;
    name.innerHTML = data.name;
})
.catch((error) => Swal.showValidationMessage(`Request failed: ${error}`));


});