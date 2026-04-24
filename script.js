const buttonHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

buttonHamburger.addEventListener('click', () => {
    buttonHamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-aktif');
});

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        buttonHamburger.classList.remove('is-active');
        menu.classList.remove('menu-aktif');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
        575: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

AOS.init({
    once: true,
    offset: 100
});

const loadMoreBtn = document.querySelector('#load-more-btn');
const boxes = document.querySelectorAll('.feedback-card');
let currentItem = 3;

for(let i = currentItem; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
}

loadMoreBtn.addEventListener('click', () => {
    for (let i = currentItem; i < currentItem + 3; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'block';
        }
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
});