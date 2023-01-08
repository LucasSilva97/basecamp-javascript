

const vendedores = [
    {
      nome: "Carlos",
      vendas: 12000.00,
    },
    {
      nome: "Ana",
      vendas: 15354.20,
    },
    {
      nome: "Maria",
      vendas: 24045.03,
    },
    {
      nome: "Lucas",
      vendas: 13486.23,
    },
    {
      nome: "Tania",
      vendas: 17546.00,
    },
  
    {
      nome: "Daniel",
      vendas: 9958.23,
    }
  ]
  
  
  function aplicandoComissaoVendas(arr) {
  
    return arr.map((vendedor) => {
      if (vendedor.vendas >= 10000.00 && vendedor.vendas < 15000.00) {
        vendedor.comissao = (vendedor.vendas * 0.12).toFixed(2);
      } else if (vendedor.vendas >= 15000.00 && vendedor.vendas < 20000.00) {
        vendedor.comissao = (vendedor.vendas * 0.18).toFixed(2);
      } else if (vendedor.vendas >= 20000.00) {
        vendedor.comissao = (vendedor.vendas * 0.22).toFixed(2);
      } else {
        vendedor.comissao = "Sem comissão, apenas fixo $1200,00"
      }
  
      return vendedor;
    });
  }
  
  console.log(aplicandoComissaoVendas(vendedores));