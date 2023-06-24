const guessElement = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    guess = e.results[0][0].transcript;
    showGuess(guess);
    checkGuess(guess);
}

function showGuess(guess){
    guessElement.innerHTML=`
    <div>Você disse </div>
    <span class = "box">${guess}</span>
    `
}

recognition.addEventListener('end',()=> recognition.start())
