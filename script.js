//!Selecionando elementos necessários para o DOM ------------------------------
//todo Tela inicial !

const inputOpcoesTema = document.querySelectorAll('.opcao_tema');
const inputQuantidadeJogadores = document.querySelectorAll(
  '.opcao_numero_jogadores'
);
const inputOpcoesTamanho = document.querySelectorAll('.opcao_tamanho');

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
