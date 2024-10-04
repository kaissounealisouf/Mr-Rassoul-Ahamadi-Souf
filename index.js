const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Set random left and top positions within the browser's inner width and height
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  confetti.style.left = `${Math.random() * innerWidth}px`;
  confetti.style.top = `${Math.random() * innerHeight}px`;

  // Set random animation delay
  confetti.style.animationDelay = `${Math.random() * 2}s`;

  // Set random color for each confetti
  confetti.style.backgroundColor = getRandomColor();

  confettiContainer.appendChild(confetti);
}

// Create confetti on page load
window.addEventListener('load', () => {
  for (let i = 0; i < 1000; i++) {
    createConfetti();
  }
});

// Adjust confetti positions on window resize
window.addEventListener('resize', () => {
  const confettiElements = document.querySelectorAll('.confetti');
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  confettiElements.forEach(confetti => {
    confetti.style.left = `${Math.random() * innerWidth}px`;
    confetti.style.top = `${Math.random() * innerHeight}px`;
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}