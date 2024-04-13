const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })


      tab.classList.add('active');
      contents[index].classList.add('active');

    })

  })

}
toggleContentByTab();



var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu');
var cross = document.querySelector('.cross')
var cross = document.querySelector('.cross')
burger.addEventListener('click', () => {

  // burger.classList.add('active');


  console.log(burger);
  console.log(mobileMenu);


  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
  else {
    burger.classList.add('active');
    mobileMenu.classList.add('active');
  }
});
cross.addEventListener('click', () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
});
cross.addEventListener('click', () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
});