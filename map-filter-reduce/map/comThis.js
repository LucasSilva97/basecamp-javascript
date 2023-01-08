

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
  
  
  function aplicandoComissaoVendas() {

    return vendedores.map(() => {
      if (this.vendas >= 10000.00 && this.vendas < 15000.00) {
        return vendedores.comissao = (this.vendas * 0.12).toFixed(2);
      } else if (this.vendas >= 15000.00 && this.vendas < 20000.00) {
        return vendedores.comissao = (this.vendas * 0.18).toFixed(2);
      } else if (this.vendas >= 20000.00) {
        return vendedores.comissao = (this.vendas * 0.22).toFixed(2);
      } else {
        return vendedores.comissao = "Sem comissão, apenas fixo $1200,00"
      }
  
    }, vendedores);
  }
  
  console.log(aplicandoComissaoVendas());