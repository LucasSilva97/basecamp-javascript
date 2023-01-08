const arr = [1, 2, 3, 4, 5, 6];
const valorInitial = 0;

const somaNumeros = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual,
  valorInitial);

console.log(somaNumeros);