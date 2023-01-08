const listaDeCompras = [
    {
      item: 'Sapatos',
      preco: 108.50,
    },
    {
      item: 'Camisa',
      preco: 76.56,
    },
    {
      item: 'Cinto de couro',
      preco: 35.00,
    },
    {
      item: 'Par de meias',
      preco: 15.50
    },
    {
      item: 'Calças',
      preco: 250.00
    }
  ]
  
  const saldoInicial = 700.00;
  
  const saldoRestante = listaDeCompras.reduce(
    (somaPrecoItens, valorItemAtual) =>
      (somaPrecoItens - valorItemAtual.preco).toFixed(2)
    , saldoInicial)
  
  console.log(`Saldo restante: $${saldoRestante}`);
  
  
  