function gerar() {
    var entradaNumero = document.querySelector("#entrada-numero")
    var resultado = document.querySelector("#res")
    var radioT = document.getElementsByName("tabuada")
    
    var entrada = Number(entradaNumero.value)

    if(entradaNumero.value.length == 0) {
        alert("Por favor, digite um número!")

        entradaNumero.focus()
    } else if(radioT[0].checked) {
        resultado.innerHTML = ""
        for(var contador = 1; contador <= 10; contador += 1) {
            resultado.innerHTML += `${entrada} + ${contador} = ${entrada + contador} <br>`
        } entradaNumero.value = ""
        entradaNumero.focus()
        
    } else if(radioT[1].checked) {
        resultado.innerHTML = ""
        for(var contador = 1; contador <= 10; contador += 1) {
            resultado.innerHTML += `${entrada} - ${contador} = ${entrada - contador} <br>`
        } entradaNumero.value = ""
        entradaNumero.focus()

    } else if(radioT[2].checked) {
        resultado.innerHTML = ""
        for(var contador = 1; contador <= 10; contador += 1) {
            resultado.innerHTML += `${entrada} x ${contador} = ${entrada*contador} <br>`
        } entradaNumero.value = ""

        entradaNumero.focus()
    } else if(radioT[3].checked) {
        resultado.innerHTML = ""
        for(var contador = 1; contador <= 10; contador += 1) {
            resultado.innerHTML += `${entrada} ÷ ${contador} = ${parseInt(entrada / contador)} <br>`
        } entradaNumero.value = ""
        entradaNumero.focus()
    } 

} function carregar() {
    var entradaNumero = document.querySelector("#entrada-numero")
    entradaNumero.focus()
}
function clicar() {
    var entradaNumero = document.querySelector("#entrada-numero")
    var radioT = document.getElementsByName("tabuada")
    var resultado = document.querySelector("#res")

    if(radioT[0].checked || radioT[1].checked || radioT[2].checked || radioT[3].checked) {
        entradaNumero.focus();
        
    
    } 
}