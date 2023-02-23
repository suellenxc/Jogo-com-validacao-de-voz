function verificaChute(chute){
    //só de somar ele transforma o número para inteiro
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML = `Você disse: ${chute}. Valor inválido!`
    }

    if(numeroInvalido(numero)){
        elementoChute.innerHTML = `Valor inválido, diga um valor entre ${menorValor} e ${maiorValor}!`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <br>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <br>
        <button id='btn-reset' class='btn-reset'>RESET</button>
        `

    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<h2>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></h2>`
    }else{
        elementoChute.innerHTML += `<h2>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></h2>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroInvalido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn-reset'){
        window.location.reload();
    }
});