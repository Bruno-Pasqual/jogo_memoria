//!Selecionando elementos necessários para o DOM ------------------------------
//todo Tela inicial !

const inputOpcoesTema = document.querySelectorAll('.opcao_tema');
const inputQuantidadeJogadores = document.querySelectorAll(
  '.opcao_numero_jogadores'
);
const inputOpcoesTamanho = document.querySelectorAll('.opcao_tamanho');
const botaoComecar = document.getElementById('botao_comecar');
const containerCirculos = document.getElementById('container_circulo');

//! Variáveis necessárias ----------------------------------------------------

let arrNumeros = [];
let arrIcones = [
  './img/ball.svg',
  './img/bug.svg',
  './img/frasco.svg',
  './img/neve.svg',
  './img/carro.svg',
  './img/ancora.svg',
];

let opcaoTema = [arrNumeros, arrIcones];
let referencia = 16;

//! Funções -------------------------------------------------------------------

//FUnção que irá remover a classe de todos os elementos dentro do array

//! Event handlers ------------------------------------------------------------

//Selecionando o tema do jogo -----

inputOpcoesTema.forEach((e) => {
  e.addEventListener('click', () => {
    inputOpcoesTema.forEach((e) => {
      e.classList.remove('selecionado');
    });
    e.classList.add('selecionado');
  });
});

//Selecionando a quantidade de jogadores -----

inputQuantidadeJogadores.forEach((e) => {
  e.addEventListener('click', () => {
    inputQuantidadeJogadores.forEach((elemento) => {
      elemento.classList.remove('selecionado');
    });
    e.classList.add('selecionado');
  });
});

//Selecionando o tamanho do grid para o jogo -----

inputOpcoesTamanho.forEach((e) => {
  e.addEventListener('click', () => {
    inputOpcoesTamanho.forEach((elemento) => {
      elemento.classList.remove('selecionado');
    });
    e.classList.add('selecionado');
  });
});

botaoComecar.addEventListener('click', () => {
  console.log('eai vacilao');
});

//todo Alterando a HTML -----------------------------------------------
