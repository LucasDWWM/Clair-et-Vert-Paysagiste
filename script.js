document.addEventListener('DOMContentLoaded', function() {
  const lemons = document.querySelectorAll('.shape.lemon');
  const variants = ['rotate(-30deg)', 'rotate(30deg)', 'rotate(120deg)', 'rotate(-120deg)'];

  lemons.forEach(lemon => {
    const random = variants[Math.floor(Math.random() * variants.length)];
    lemon.style.transform = random;
  });
});

// Init Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow", // donne un effet 3D comme ton screenshot
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
});
