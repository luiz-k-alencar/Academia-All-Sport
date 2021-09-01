(function () {
  var menu = document.getElementById('header');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('headerFixed', 'optionFixed');
      else menu.classList.remove('headerFixed', 'optionFixed');
  });
})();

(function () {
  var menu = document.getElementById('incioNav');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('optionFixed');
      else menu.classList.remove('optionFixed');
  });
})();

(function () {
  var menu = document.getElementById('modalidadesNav');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('optionFixed');
      else menu.classList.remove('optionFixed');
  });
})();

(function () {
  var menu = document.getElementById('comoChegarNav');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('optionFixed');
      else menu.classList.remove('optionFixed');
  });
})();

(function () {
  var menu = document.getElementById('horariosNav');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('optionFixed');
      else menu.classList.remove('optionFixed');
  });
})();

(function () {
  var menu = document.getElementById('academiaLogoWhite');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('academiaLogoWhite');
      else menu.classList.remove('academiaLogoWhite');
  });
})();

(function () {
  var menu = document.getElementById('academiaLogoBlack');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) menu.classList.add('academiaLogoBlack');
      else menu.classList.remove('academiaLogoBlack');
  });
})();

