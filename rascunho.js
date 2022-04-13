var cotações = {}

var cifroes = {
    BRL:"R$",
    USD:"US$",
    EUR:"€",
    BITCOIN:"B"
}

var acesso = {
    USDBRL:'USD-BRL',
    BRLEUR:'BRL-EUR',
    USDEUR:'USD-EUR',
    BTCBRL:'BTC-BRL',
    BTCEUR:'BTC-EUR',
    BTCUSD:'BTC-USD',
    CADBRL:'CAD-BRL',
    CADUSD:'CAD-USD',
    CADEUR:'CAD-EUR',
    ARSBRL:'ARS-BRL',
    ARSUSD:'ARS-USD',
    ARSEUR:'ARS-EUR',
    JPYBRL:'JPY-BRL',
    JPYUSD:'JPY-USD',
    JPYEUR:'JPY-EUR'
}

function converter(){
    var de = document.getElementById("de").value
    var para = document.getElementById("para").value
    var valorInicial = document.getElementById("from").value
    var resultado = document.getElementById("for")
    var valorFinal
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
    else{
        valorFinal=valorInicial
    }
    
    if(para == 'BTC'){
        retorno = valorFinal.toFixed(10)
    }
    else if(de == para){
        retorno = valorFinal
    }
    else{
        retorno = valorFinal.toFixed(2)
    }
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
        if (cotacao == "BTCBRL"){
            var valor = moedas[tabela].bid
            cotações[cotacao] = valor.replaceAll(".", "")
        }
        else{
            cotações[cotacao] = moedas[tabela].bid
        }
    }
    fetchapi(`https://economia.awesomeapi.com.br/json/last/`+acesso[cotacao],cotacao)
}