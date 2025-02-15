const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".tap-right") ||
        e.target.matches(".tap-left") ||
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');

        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.querySelector('.envelope-wrapper');
  const jsConfetti = new JSConfetti(); // ¡Ojo con la "J" mayúscula!

 // En tu script.js
envelope.addEventListener('click', () => {
  // Primer disparo: Emojis grandes
  jsConfetti.addConfetti({
      emojis: ['💖','💌','🌹','✨'],
      emojiSize: 50,
      confettiNumber: 15
  });

  // Segundo disparo: Lluvia de corazones
  jsConfetti.addConfetti({
      confettiColors: ['#ff69b4'],
      confettiNumber: 200,
      confettiRadius: 4
  });

  // Tercer disparo: Efecto explosivo
  jsConfetti.addConfetti({
      emojis: ['💕','💞','💓','💗', '✨'],
      confettiNumber: 100,
      angle: 60,
      spread: 100
  });
});

});
