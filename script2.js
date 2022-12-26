export function scriptPagina2(tema, inputQuantidadeJogadores, quantosCirculos) {
  //!Selecionando os elementos no DOM ---------------------------------------

  const containerDefinidor = document.getElementById('container_definidor');

  //!Variáveis --------------------------------------------------------------

  let arr = [];

  containerDefinidor.innerHTML = ` <div id="tampa_tela"></div>
<header>
  <h3>memória</h3>
  <div id="lado_esquerdo">
    <button id="botao_menu">Menu</button>
  </div>
</header>
<main id="container_circulos_pai"></main>
<footer>
  <div class="box_jogador ativo">
    <p class="jogador_titulo">P1</p>
    <p class="numero_pontos">0</p>
  </div>
  <div class="box_jogador">
    <p class="jogador_titulo">P2</p>
    <p class="numero_pontos">0</p>
  </div>
  <div class="box_jogador">
    <p class="jogador_titulo">P3</p>
    <p class="numero_pontos">0</p>
  </div>
  <div class="box_jogador">
    <p class="jogador_titulo">P4</p>
    <p class="numero_pontos">0</p>
  </div>
</footer>

<!-- !Modais ------ -->

<div id="modal_fim_de_jogo">
  <div id="modal_header">
    <p id="quem_ganhou">Jogador 3 ganhou!</p>
    <p id="mensagem_resultado">Fim de jogo! Confira o resultado</p>
  </div>
  <div id="modal_main">
    <div class="container_vencedor">
      <p class="jogador_vencedor">Jogador 3</p>
      <p class="quantos_marcou">8 pares</p>
    </div>
    <div class="container_vencedor">
      <p class="jogador_vencedor">Jogador 3</p>
      <p class="quantos_marcou">8 pares</p>
    </div>
    <div class="container_vencedor">
      <p class="jogador_vencedor">Jogador 3</p>
      <p class="quantos_marcou">8 pares</p>
    </div>
    <div class="container_vencedor">
      <p class="jogador_vencedor">Jogador 3</p>
      <p class="quantos_marcou">8 pares</p>
    </div>
  </div>
  <div id="modal_footer">
    <button class="botao_recomecar">Recomeçar</button>
    <button class="botao_configurar_jogo">Configurar Novo Jogo</button>
  </div>
</div>`;
  const containerCirculos = document.getElementById('container_circulos_pai');
  containerDefinidor.classList.add('pagina2');

  //! Variáveis para uso ------------------------------------------------------

  // let quantosCirculos = arrayteste[0];
  // let quantosCirculos = 36;
  let pontuacaoJogadores = [];
  let pares = quantosCirculos / 2;
  let jogadorAtivo = 0;
  let temp, pontuacao;
  let vencedor;
  let valoresPontuacao = [0, 0, 0, 0];
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
      aumentaPonttuacao();
    } else {
      arrSelecionados[0].classList.add('errado');
      arrSelecionados[1].classList.add('errado');
      setTimeout(() => {
        arrSelecionados[0].classList.remove('errado');
        arrSelecionados[1].classList.remove('errado');
        arrSelecionados[0].classList.remove('selecionado');
        arrSelecionados[1].classList.remove('selecionado');
      }, 1000);
      trocaJogador();
    }
  }

  function trocaJogador() {
    //todo Função que faz o controle para a troca dos jogadores utilizando a variável 'jogadorAtivo'

    let jogadores = document.querySelectorAll('.box_jogador');
    jogadores.forEach((e) => {
      e.classList.remove('ativo');
    });
    jogadorAtivo++;
    jogadorAtivo === 4 ? (jogadorAtivo = 0) : '';
    jogadores[jogadorAtivo].classList.add('ativo');
  }

  //! Função que aumenta a pontuação -- <

  function aumentaPonttuacao() {
    //todo Função que irá aumentar a pontuação caso o jogador acerte na escolha e irá ficar fazendo a verificação 'checarPontuação' que irá encerrar o jogo quando o a pontuação dos jogadores se igualar a quantidade de pares de números.
    let pontuacaoJogadores = document.querySelectorAll('.numero_pontos');
    temp = Number(pontuacaoJogadores[jogadorAtivo].innerHTML);
    temp++;
    pontuacaoJogadores[jogadorAtivo].innerHTML = temp;
    checarPontuacao(pontuacaoJogadores);
    valoresPontuacao[jogadorAtivo] = temp;
    console.log(valoresPontuacao);
  }
  n;

  function checarPontuacao(pontuacaoJogadores) {
    //todo Função que faz a verificação entre o número de pares e a pontuação dos jogadores, para encerrar o jogo caso ambos sejam iguais.
    let acumulador = 0;
    pontuacaoJogadores.forEach((elemento, index) => {
      pontuacaoJogadores;
      acumulador += Number(elemento.innerHTML);
    });
    if (acumulador === pares) {
      pontuacao = 0;
      vencedor = 0;
      pontuacaoJogadores.forEach((elemento, index) => {
        Number(elemento.innerHTML) > pontuacao ? (vencedor = index) : '';
      });
      console.log(`O vencedor foi o jogador ${[vencedor]}`);
      mostraResultado();
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

  //! Criando lógica para troca dos jogadores -----------------------------------
  function mostraResultado() {
    //Seleção  dos elementos
    let tampaTela = document.getElementById('tampa_tela');
    let modalFim = document.getElementById('modal_fim_de_jogo');
    let botaoRecomecar = document.querySelector('.botao_recomecar');
    let botaoConfigurarJogo = document.querySelector('.botao_configurar_jogo');

    tampaTela.style.display = 'block';
    modalFim.style.display = 'block';
  }
}
