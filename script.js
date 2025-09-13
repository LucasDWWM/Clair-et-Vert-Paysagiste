document.addEventListener('DOMContentLoaded', function() {
  const lemons = document.querySelectorAll('.shape.lemon');
  const variants = ['variant-1', 'variant-2', 'variant-3', 'variant-4'];

  lemons.forEach(lemon => {
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    lemon.classList.add(randomVariant);
  });
});
