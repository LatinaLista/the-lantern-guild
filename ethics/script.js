(function () {
      var toggle = document.querySelector('.menu-toggle');
      var nav = document.querySelector('nav');
      function setOpen(open) { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); }
      toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
      toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!nav.classList.contains('open')); } });
      nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    })();
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("h1", { duration: 1, opacity: 0, y: 40, ease: "power3.out" });
    gsap.utils.toArray(".ethics-item").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 80%" },
        duration: 0.7,
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
        delay: (index % 3) * 0.1,
        ease: "power2.out"
      });
    });