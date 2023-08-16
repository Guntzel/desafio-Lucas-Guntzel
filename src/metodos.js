class metodos {

    validaItemExtra(item, cardapio)
    {
        let valida = 0;

        for(let i = 0; i < cardapio.length; i++)
        {
            if((item == "chantily" && cardapio[i][0] == "cafe") || (item == "queijo" && cardapio[i][0] == "sanduiche"))
            {
                valida = 1;
            }
        }
        return valida
    }

    validaItens(item, cardapio)
    {
        let valida = 0;
        for(let i = 0; i < cardapio.length; i++)
        {
            if(item == cardapio[i][0])
            {
                valida = 1;
            }
        }
        return valida;
    }
}

export { metodos }