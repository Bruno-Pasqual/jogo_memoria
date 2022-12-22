//!Selecionando os elementos no DOM ---------------------------------------

const containerCirculos = document.getElementById('container_circulos');

//! Variáveis para uso ------------------------------------------------------

let quantosCirculos = 36;

//! Funções -----------------------------------------------------------------

function alteraCirculo() {
  const circulos = document.querySelectorAll('.container_circulos');
  circulos.forEach((el) => {
    console.log(el);
    el.style.height = '46.88px';
    el.style.width = '46.88px';
  });
}

//! Event handlers ----------------------------------------------------------

//Cria os círculos com base na quantidade escolhida pelo jogador
for (let i = 0; i < quantosCirculos; i++) {
  containerCirculos.innerHTML += `<div class="container_circulos">4</div>`;
}

//Altera a largura e altura dos círculos dependendo do tamanho do GRID
quantosCirculos === 36 ? alteraCirculo() : '';
