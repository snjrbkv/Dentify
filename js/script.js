function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
  document.body.style.overflow = menu.classList.contains("show")
    ? "hidden"
    : "auto";
}
const prevButton = document.querySelector(".controls.prev");
const nextButton = document.querySelector(".controls.next");
const newprevButton = document.querySelector(".review--prev");
const newnextButton = document.querySelector(".review--next");

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: newnextButton, // Кастомная кнопка Next
    prevEl: newprevButton, // Кастомная кнопка Prev
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Обработчики для стандартных кнопок

// Обработчики для кастомных кнопок
newprevButton.addEventListener("click", () => swiper.slidePrev());
newnextButton.addEventListener("click", () => swiper.slideNext());

nextButton.addEventListener("click", () => swiper.slideNext());
prevButton.addEventListener("click", () => swiper.slidePrev());
