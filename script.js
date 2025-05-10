// Dynamic text effect for tagline
const dynamicText = document.getElementById('dynamic-text');
const phrases = [
  'Computer Science Student',
  'Software Developer',
  'Tech Enthusiast',
  'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
    dynamicText.textContent = currentPhrase.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 600);
    } else {
      setTimeout(typeEffect, 40);
    }
  } else {
    charIndex++;
    dynamicText.textContent = currentPhrase.substring(0, charIndex);
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
    } else {
      setTimeout(typeEffect, 80);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();

  // Smooth scroll for navbar links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}); 