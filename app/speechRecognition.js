const guessElement = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

// Request microphone permission when the page loads
document.addEventListener('DOMContentLoaded', () => {
  askForMicrophonePermission();
});

function askForMicrophonePermission() {
  recognition.start();
  recognition.stop();
}

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const guess = e.results[0][0].transcript;
  showGuess(guess);
  checkGuess(guess);
}

function showGuess(guess) {
  guessElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${guess}</span>
  `;
}

recognition.addEventListener('end', () => {
  // Restart speech recognition after it ends
  recognition.start();
});
