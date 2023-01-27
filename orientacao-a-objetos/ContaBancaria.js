class ContaBancaria {
    constructor(agencia, numero){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = '';
        this.saldo = 0;

    }
    
    setSaldo(saldo){
        this.saldo = parseFloat(saldo);
    }

    getSaldo(){
        console.log(this.saldo.toFixed(2));
    }

    depositar(valor){
        if(valor > 2000){
            console.log("Limite de depósito diário é de R$ 2000.00");
        } else {
            this.saldo += parseFloat(valor);
        }
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
        } else {
            valor > 1000.00 ? console.log("Limite diário p/ saque: R$ 1000.00") :
                              this.saldo -= valor;

            console.log(`Saldo disponível: R$ ${this.saldo}`)
        }
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(){
        super();
        this.cartaoCredito = {};
        this.corrente = true;
    }

    setCartaoDeCredito(numeroCartao, tipo, bandeira){

        if(numeroCartao.length < 16 || numeroCartao.length > 16){
            return console.log("Digite os 16 números do cartão")
        } else if (!Number(numeroCartao)){
            return console.log("Digite apenas números no ID do cartão");
        }
        
        this.cartaoCredito.numeroCartao = Number(numeroCartao);
        this.cartaoCredito.tipo = tipo;
        this.cartaoCredito.bandeira = bandeira;
    }

    getCartaoDeCredito(){
        return console.log(this.cartaoCredito);
    }
}


class ContaPoupanca extends ContaBancaria {

}


class ContaUniversitaria extends ContaBancaria {
    sacarContaUniversitaria(valor){
        valor >= 500? console.log("Só é permitido sacar valores menores que R$ 500.00") :
                        `${console.log("Saque efetuado!")} ${this.saldo -= Number(valor)}`;
        
                        return console.log(`Saldo disponível: ${this.saldo.toFixed(2)}`);
    }
}

