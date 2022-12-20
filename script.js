//! Selecionando elementos para o DOM -----------------------

const bolasSelecao = document.querySelectorAll('.box_bolas');

//! Criando variáveis ------------------------------------
let arr = [];

//! Funções -----------------------------------------------

//FUnção que irá verificar quantas vezes um número aparece dentro de um array
function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}

//Função que irá verificar se o número aleatório já foi atribuído para alguma div 2 vezes, caso não tenha irá o atribuir.
function checarNumero(numero) {
  let temp = Math.floor(Math.random() * 8 + 1);
  if (getOccurrence(arr, temp) < 2) {
    arr.unshift(temp);
    numero.innerHTML = temp;
  } else {
    checarNumero(numero);
  }
}

//Função que irá comparar os valores dentro das duas divs selecionadas.

function comparaSelecionados(arrSelecionados) {
  console.log(arrSelecionados);
  if (arrSelecionados[0].innerHTML === arrSelecionados[1].innerHTML) {
    console.log('Os dois são iguais');
    arrSelecionados.forEach((e) => {
      e.classList.add('correto');
    });
    // arrSelecionados[0].style.background = 'green';
    // arrSelecionados[1].style.background = 'green';
    arrSelecionados.forEach((e) => {
      e.classList.remove('selecionado');
    });
  } else {
    arrSelecionados.forEach((e) => {
      e.classList.remove('selecionado');
      e.classList.add('errado');
      setTimeout(console.log('eai'), 5000);
    });
  }
}

//! Execução da bagaça -------------------------------------

bolasSelecao.forEach((numero) => {
  if (numero.innerHTML === '?') {
    checarNumero(numero);
  }
});

// function checarSelecionados() {}

bolasSelecao.forEach((numero_bolas) => {
  numero_bolas.addEventListener('click', () => {
    numero_bolas.classList.toggle('selecionado');
    //Selecionando
    let arrSelecionados = document.querySelectorAll('.selecionado');
    if (arrSelecionados.length === 2) {
      comparaSelecionados(arrSelecionados);
    }
  });
});
