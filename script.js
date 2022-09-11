function calcular() {
    var valor = document.getElementById('valor'); //input que recebe o valor
    var tara = document.getElementById('tara');  //input que recebe a tara
    var peso = document.getElementById('peso');  //input que recebe o peso
    var txt = document.getElementById('txt');  //onde sera exibido o texto com valor final

    var valorFinal
    var pesoRefeicao

    peso = peso.value.replace("g", "")                  //remove o "g" que a mascara insere para compreensão do usuario 
    tara = tara.value.replace("g", "")
    pesoRefeicao = peso - tara;                 //remove o peso do prato da refeição
    valorFinal = valor.value.replace(",", ".")          //altera o "," para "." para realizar os calculos
    valorFinal = valorFinal * (pesoRefeicao / 1000)     //calcula o valor final

    txt.innerHTML = `O prato de ${peso} gramas custa: R$${valorFinal.toFixed(2)}`  //exibe
}


$(document).ready(function () {
    $('.money').mask('000.000,00', { reverse: true }); //criei a mascara do input que recebe o valor
    $('.peso').mask('000000g', { reverse: true });  //criei a mascara do input que recebe o peso
});