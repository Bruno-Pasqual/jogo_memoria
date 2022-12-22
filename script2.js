//!Selecionando os elementos no DOM ---------------------------------------

const containerCirculos = document.getElementById('container_circulos');

//! Variáveis para uso ------------------------------------------------------

let quantosCirculos = 36;
let pares = quantosCirculos / 2;
let arr = [];

//! Funções -----------------------------------------------------------------

function alteraCirculo() {
  const circulos = document.querySelectorAll('.container_circulos');
  circulos.forEach((el) => {
    el.style.height = '46.88px';
    el.style.width = '46.88px';
  });
}

//!Declarando funções

function getOccurrence(array, value) {
  //todo Função que checa quantas vezes um um determinado valor ocorreu dentro de um array
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}

function atribuiValores(elemento) {
  //todoIrá gerar números aleatórios dentro do limite estabelecido pela variável "pares"
  const circulos = document.querySelectorAll('.container_circulos');
  let temp = Math.floor(Math.random() * pares + 1);
  if (getOccurrence(arr, temp) < 2) {
    arr.unshift(temp);
    elemento.innerHTML = temp;
  } else {
    atribuiValores(elemento);
  }
}

function comparaSelecionados(arrSelecionados) {
  //todo Função que compara os valores dos dois circulos selecionados e manipula suas classes de acordo com o resultado dessa comparação
  if (arrSelecionados[0].innerHTML === arrSelecionados[1].innerHTML) {
    //adicionando classe de correto nas divs selecionadas
    arrSelecionados[0].classList.add('correto');
    arrSelecionados[1].classList.add('correto');
    //Removendo classe de selecionado das divs
    arrSelecionados[0].classList.remove('selecionado');
    arrSelecionados[1].classList.remove('selecionado');
  } else {
    arrSelecionados[0].classList.add('errado');
    arrSelecionados[1].classList.add('errado');
    setTimeout(() => {
      arrSelecionados[0].classList.remove('errado');
      arrSelecionados[1].classList.remove('errado');
      arrSelecionados[0].classList.remove('selecionado');
      arrSelecionados[1].classList.remove('selecionado');
    }, 1000);
  }
}

//! Event handlers ----------------------------------------------------------

//todo Criando lógica que irá criar os círculos de acordo com o tamanho do grid escolhido pelo jogador e já irá atribuir os números aleatórios a essas divs.

//Cria os círculos com base na quantidade escolhida pelo jogador
for (let i = 0; i < quantosCirculos; i++) {
  containerCirculos.innerHTML += `<div class="container_circulos">4</div>`;
}
const circulos = document.querySelectorAll('.container_circulos');

//Altera a largura e altura dos círculos dependendo do tamanho do GRID
quantosCirculos === 36 ? alteraCirculo() : '';

circulos.forEach((elemento) => {
  if (elemento.innerHTML === '4') {
    atribuiValores(elemento);
  }
});

//todo Criando a lógica para selecionar os elementos

circulos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    elemento.classList.toggle('selecionado');
    let arrSelecionados = document.querySelectorAll('.selecionado');
    console.log(arrSelecionados);
    arrSelecionados.length === 2 ? comparaSelecionados(arrSelecionados) : '';
  });
});
