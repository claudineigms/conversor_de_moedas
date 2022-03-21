var cotações = {
USDBRL:0,
BRLEUR:0,
USDEUR:0,
}

var cifroes = {
    BRL:"R$",
    USD:"US$",
    EUR:"€",
    bitcoin:"B"
}

function converter(){
    var de = document.getElementById("de").value
    var para = document.getElementById("para").value
    var valorInicial = document.getElementById("number").value
    var resultado = document.getElementById("resultado")
    if (de == "" | para =="" | valorInicial == ""){
        alert("Favor preencher todos os campos, eu não sou bola de cristal caraio")
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
    resultado.innerHTML="O valor convertido de "+de+" para "+para+" é de "+cifroes[para]+retorno
}

const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-EUR,USD-EUR`
async function fetchapi(){
    const itens = await fetch(url)
    const moedas = await itens.json()
    cotações.USDBRL = moedas.USDBRL.bid
    cotações.BRLEUR = moedas.BRLEUR.bid
    cotações.USDEUR = moedas.USDEUR.bid   
}
fetchapi()