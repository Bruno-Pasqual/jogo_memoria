/* const bolasSelecao = document.querySelectorAll('.box_bolas');
let arr = [];

bolasSelecao.forEach((value) => {
  if (value.innerHTML === '?') {
    let temp = Math.floor(Math.random() * 8 + 1);
    value.innerHTML = temp;
    arr.unshift(temp);
  }
});

console.log(arr);
 */

var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}

console.log(getOccurrence(arr, 1));
console.log(getOccurrence(arr, 3));
