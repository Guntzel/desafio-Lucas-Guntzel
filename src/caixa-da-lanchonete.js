class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = [
            ["cafe", "Café", 3.00],
            ["chantily", "Chantily (extra do Café)", 1.50],
            ["suco", "Suco Natural", 6.20],
            ["sanduiche", "Sanduíche", 6.50],
            ["queijo", "Queijo (extra do Sanduíche)", 2.00],
            ["salgado", "Salgado", 7.25],
            ["combo1", "1 Suco e 1 Sanduíche", 9.50],
            ["combo2", "1 Café e 1 Sanduíche", 3.00]
        ];
//SEPARANDO OS ITENS
        let valor = 0;
        let valorTotal;
        let saidaValorFinal;
        let itensSeparados =[];
        for(let i = 0; i< itens.length; i++)
        {
            itensSeparados.push(itens[i].split(","));
        }
//VALIDANDO PAGAMENTO
        if(metodoDePagamento != "debito" && metodoDePagamento != "credito" && metodoDePagamento != "dinheiro") //VALIDANDO MÉTODO DE PAGAMENTO
        {
            return  "Forma de pagamento inválida!";
        }
//VALIDANDO CARRINHO DE COMPRA VAZIO     
        if(itensSeparados.length == 0) 
        {
            return "Não há itens no carrinho de compra!";
        }
//VALIDANDO ITEM EXTRA
        for (let i = 0; i < itensSeparados.length; i++)
        {
            if(itensSeparados[i][0] == "chantily" || itensSeparados[i][0] == "queijo" )
            {
                let itemExtra = new metodos().validaItemExtra(itensSeparados[i][0], itensSeparados);
                if(itemExtra == 0)
                {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
//VALIDANDO QUANTIDADE
            if(itensSeparados[i][1] == 0)
            {
                return "Quantidade inválida!"
            }
//VALIDANDO ITEM
            let validaItem = new metodos().validaItens(itensSeparados[i][0], cardapio);
            if(validaItem == 0)
            {
                return "Item inválido!";
            }
//CALCULANDO
            for(let j = 0; j < cardapio.length; j++)
            {
                if(itensSeparados[i][0] == cardapio[j][0])
                {
                    valor = valor + cardapio[j][2]*Number(itensSeparados[i][1]);
                }
            }
        }
        if(metodoDePagamento == "debito")
        {
            valorTotal = valor;
        }else if(metodoDePagamento == "dinheiro")
        {
            valorTotal = valor - valor*0.05;
        }else if(metodoDePagamento == "credito")
        {
            valorTotal = valor + valor*0.03
        }
        valorTotal = "R$ "+ valorTotal.toFixed(2).toString().replace(".",",");
        return valorTotal;
    }
}
export { CaixaDaLanchonete };
import { metodos } from "./metodos.js";