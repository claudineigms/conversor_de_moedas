var cotações = {}

var cifroes = {
    BRL:"R$",
    USD:"US$",
    EUR:"€",
    bitcoin:"B"
}

var acesso = {
    USDBRL:'USD-BRL',
    BRLEUR:'BRL-EUR',
    USDEUR:'USD-EUR'}

function converter(){
    var de = document.getElementById("de").value
    var para = document.getElementById("para").value
    var valorInicial = document.getElementById("from").value
    var resultado = document.getElementById("for")
    if (de == "" | para =="" | valorInicial == ""){
        None
    }
    else if (de+para in cotações){
        valor = cotações[de+para]
        valorFinal=valorInicial*valor
    }
    else if (para+de in cotações){
        valor = cotações[para+de]
        valorFinal=valorInicial/valor
    }
    else if (para == de){
        valorFinal=valorInicial
    }
    retorno = valorFinal.toFixed(2)
    resultado.value=retorno
}

for (cotacao in acesso){
    async function fetchapi(url,cotacao){
        const itens = await fetch(url)
        const moedas = await itens.json()
        var tabela = cotacao.substring(0,3)
        console.log(cotacao)
        console.log(tabela)
        console.log(moedas[tabela])
        cotações[cotacao] = moedas[tabela].bid
    }
    fetchapi(`https://economia.awesomeapi.com.br/json/last/`+acesso[cotacao],cotacao)
}