// для ie 11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('lock')
})

const btnFavorite = document.querySelectorAll('.btn-favorite');

btnFavorite.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')

    })
})

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('active');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('active');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.btn-pageup');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);