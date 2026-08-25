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
    gsap.utils.toArray("h2").forEach((heading, index) => {
      gsap.from(heading, {
        scrollTrigger: { trigger: heading, start: "top 80%" },
        duration: 0.8,
        opacity: 0,
        x: -30,
        delay: index * 0.1,
        ease: "power2.out"
      });
    });
    gsap.utils.toArray(".highlight").forEach((box) => {
      gsap.from(box, {
        scrollTrigger: { trigger: box, start: "top 75%" },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power2.out"
      });
    });