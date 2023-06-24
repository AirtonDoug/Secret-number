function checkGuess(guess) {
    // Remove non-numeric characters using regular expression
    const number = guess.replace(/\D/g, '');
    
    if (number === '') {
      guessElement.innerHTML += '<div>Invalid input</div>';
      return;
    }
    
    const parsedNumber = parseInt(number);
  
    if (isNaN(parsedNumber)) {
      guessElement.innerHTML += '<div>Invalid input</div>';
      return;
    }
  
    if (parsedNumber < lowerValue || parsedNumber > greaterValue) {
      guessElement.innerHTML += `<div>Number needs to be between ${lowerValue} and ${greaterValue}</div>`;
      return;
    }
  
    if (parsedNumber === secretNumber) {
      document.body.innerHTML = `
        <h2>You did it!</h2>
        <h3>The secret number is: ${secretNumber}</h3>
        <button id="jogar-novamente" class="btn-jogar">Play Again</button>
      `;
    } else if (parsedNumber > secretNumber) {
      guessElement.innerHTML += `
        <div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>
      `;
    } else {
      guessElement.innerHTML += `
        <div>The secret number is greater <i class="fa-solid fa-up-long"></i></div>
      `;
    }
  
    function greaterLowerThan(number) {
      return number > greaterValue || number < lowerValue;
    }
  
    document.body.addEventListener('click', e => {
      if (e.target.id == 'jogar-novamente') {
        window.location.reload();
      }
    });
  }
  