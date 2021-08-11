/* TOGGLE MENU */

const menu = document.querySelector('.icon-menu');
const close = document.querySelector('.icon-close');
const nav = document.querySelector('#header nav');

menu.addEventListener('click', () => {
  nav.classList.add('show');
});

close.addEventListener('click', () => {
  nav.classList.remove('show');
});

/* HIDE MENU ITEM */

const items = document.querySelectorAll('nav ul li a');

for(const item of items) {
  item.addEventListener('click', () => {
    nav.classList.remove('show');
  });
};

/* SHADOW ON SCROLL */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  };
};

/* SWIPER */


const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* SCROLLREVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
   `,
{interval: 100});

/* BACK TO TOP */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  };
};

window.addEventListener('scroll', () => {
  backToTop();
  changeHeaderWhenScroll();
  activeMenuAtCurrentSection();
});

/* ACTIVE MENU */

const sections = document.querySelectorAll('section[id]');

function activeMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for ( const section of sections ) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
    }

  };
}; 
