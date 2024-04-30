document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const nav = document.querySelector('header .header-content nav');
  menu.addEventListener('click', () => {
    nav.classList.toggle('appear')
  })

  new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    gap: 50,
    autoplay: 3000,
    hoverpause: true,
    focusAt: 1,
    breakpoints: {
      1024: {
        perView: 3
      },
      625: {
        perView: 1,
        gap: 20,
        peek: {
          before: 100,
          after: 100,
        }
      }
    }
  }).mount();
});