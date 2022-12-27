import { scriptPagina2 } from './script2.js';

//!Checando se o html que está atualmente sendo mostrado é do pagina 1 e executando código caso seja

export function scriptPagina1() {
  //!Selecionando elementos necessários para o DOM ------------------------------
  //todo Tela inicial !
  const containerDefinidor = document.getElementById('container_definidor');
  const inputOpcoesTema = document.querySelectorAll('.opcao_tema');
  const inputQuantidadeJogadores = document.querySelectorAll(
    '.opcao_numero_jogadores'
  );
  const inputOpcoesTamanho = document.querySelectorAll('.opcao_tamanho');
  const botaoComecar = document.getElementById('botao_comecar');

  //Container que irá ser alterado

  //! Variáveis necessárias ----------------------------------------------------

  //todo Array que irá conter as escolhas feitas pelo usuário, e passará as mesmas como argumentos ao executar a função da página 2.

  let arrEscolhas = ['Ícones', 1, 16];

  //! Funções ------------------------------------------------------------------

  //FUnção que irá remover a classe de todos os elementos dentro do array

  //! Event handlers ------------------------------------------------------------

  //Selecionando o tema do jogo -----

  inputOpcoesTema.forEach((e) => {
    e.addEventListener('click', (value, index) => {
      inputOpcoesTema.forEach((e) => {
        e.classList.remove('selecionado');
      });
      e.classList.add('selecionado');
      arrEscolhas[0] = e.innerHTML;
    });
  });

  //Selecionando a quantidade de jogadores -----

  inputQuantidadeJogadores.forEach((e) => {
    e.addEventListener('click', () => {
      inputQuantidadeJogadores.forEach((elemento) => {
        elemento.classList.remove('selecionado');
      });
      e.classList.add('selecionado');
      arrEscolhas[1] = Number(e.innerHTML);
    });
  });

  //Selecionando o tamanho do grid para o jogo -----

  inputOpcoesTamanho.forEach((e) => {
    e.addEventListener('click', () => {
      inputOpcoesTamanho.forEach((elemento) => {
        elemento.classList.remove('selecionado');
      });
      e.classList.add('selecionado');
      if (e.innerHTML === '4x4') {
        arrEscolhas[2] = 16;
      } else {
        arrEscolhas[2] = 36;
      }
    });
  });

  botaoComecar.addEventListener('click', () => {
    scriptPagina2(...arrEscolhas);
    console.log(...arrEscolhas);
  });

  //todo Alterando a HTML -----------------------------------------------
}

/* let pontuacao = [0, 5, 6, 2];
let pontuacaoEntry = pontuacao.entries();
let objetoJogadores = [];

objetoJogadores.push({ jogador: 0, pontuacao: 5 });
objetoJogadores.push({ jogador: 1, pontuacao: 3 });
objetoJogadores.push({ jogador: 2, pontuacao: 4 });
objetoJogadores.push({ jogador: 3, pontuacao: 9 });
console.log(objetoJogadores);

let organizados = objetoJogadores.sort(function (a, b) {
  if (a.pontuacao > b.pontuacao) {
    return -1;
  } else {
    return true;
  }
});
 */

scriptPagina1();
