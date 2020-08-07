document.addEventListener("DOMContentLoaded", function() {

	var btnToggle = document.querySelector('.wrap-nav__toggle');
	btnToggle ? btnToggle.addEventListener('click', function (e) {
    e.preventDefault();
    btnToggle.classList.toggle('wrap-nav__toggle-active')
    console.log(btnToggle)
  }) : btnToggle

});
