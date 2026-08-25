(function () {
      var toggle = document.querySelector('.menu-toggle');
      var nav = document.querySelector('nav');
      function setOpen(open) { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); }
      toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
      toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!nav.classList.contains('open')); } });
      nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    })();