//!Checando se o html que está atualmente sendo mostrado é do pagina 1 e executando código caso seja

window.location.pathname.endsWith('index.html') ? scriptPagina1() : '';

function scriptPagina1() {
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

  //! Variáveis de teste --------------------- <<<<< >>>>>

  // let tema, numeroJogadores, tamanhoGrid;
  let arrEscolhas = [];

  //! Funções -------------------------------------------------------------------

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
      e.innerHTML === '4x4' ? (arrEscolhas[2] = 16) : (arrEscolhas[2] = 36);
    });
  });

  botaoComecar.addEventListener('click', () => {
    console.log(arrEscolhas);
  });

  //todo Alterando a HTML -----------------------------------------------
}
