document.addEventListener("DOMContentLoaded", function () {

  var btnToggle = document.querySelector('.wrap-nav__toggle');
  var navList = document.querySelector('.wrap-nav__list')
  // var container = document.querySelector('.js-container')

  btnToggle ? btnToggle.addEventListener('click', function (e) {
    e.preventDefault();
    btnToggle.classList.toggle('wrap-nav__toggle-active') ?
      navList.classList.add('wrap-nav__list-active') :
      navList.classList.remove('wrap-nav__list-active')

  }) : btnToggle

});
