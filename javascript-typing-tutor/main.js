const typing = document.querySelectorAll('.typing-tutor span');
let currentIndex = 0;

document.addEventListener('keypress', function (event) {
  const currentCharacter = typing[currentIndex];

  if (!currentCharacter) return;

  const pressedKey = event.key;

  if (pressedKey === currentCharacter.textContent) {
    currentCharacter.classList.add('correct-char');
    currentCharacter.classList.remove('current-char', 'incorrect-char');
    currentIndex++;
    if (currentIndex < typing.length) {
      typing[currentIndex].classList.add(
        'current-char',
        'current-char-underline'
      );
    }
  } else {
    currentCharacter.classList.add('incorrect-char');
    currentCharacter.classList.remove('current-char', 'correct-char');
  }
});
