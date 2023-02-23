const elementoChute = document.querySelector('.mensagem')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeNaTela(chute);
    verificaChute(chute);
}

function exibeNaTela(chute){
    elementoChute.innerHTML = `
    <p class="texto-mensagem">Você disse:</p>
    <span class="box">${chute}</span> 
    `
}

recognition.addEventListener('end', () => recognition.start());