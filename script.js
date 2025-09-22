document.addEventListener('DOMContentLoaded', function() {
  const lemons = document.querySelectorAll('.shape.lemon');
  const variants = ['variant-1', 'variant-2', 'variant-3', 'variant-4'];

  lemons.forEach(lemon => {
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    lemon.classList.add(randomVariant);
  });
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  if (index < track.children.length - 1) {
    index++;
    track.style.transform = `translateX(-${index * 320}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 320}px)`;
  }
});
