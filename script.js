(function () {
      var toggle = document.querySelector('.menu-toggle');
      var nav = document.querySelector('nav');
      function setOpen(open) { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); }
      toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
      toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!nav.classList.contains('open')); } });
      nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    })();
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero-text h1", { duration: 1, opacity: 0, y: 40, ease: "power3.out" });
    gsap.from(".tagline", { duration: 1, opacity: 0, y: 30, delay: 0.2, ease: "power3.out" });
    gsap.from(".cta-buttons", { duration: 1, opacity: 0, y: 30, delay: 0.4, ease: "power3.out" });
    gsap.utils.toArray(".tool-card").forEach((card, index) => {
      gsap.from(card, { scrollTrigger: { trigger: card, start: "top 75%" }, duration: 0.8, opacity: 0, y: 40, rotation: -5, delay: index * 0.15, ease: "back.out(1.7)" });
    });
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, { scrollTrigger: { trigger: title, start: "top 80%" }, duration: 1, opacity: 0, y: 40, ease: "power3.out" });
    });
    gsap.utils.toArray(".member-card").forEach((card, index) => {
      gsap.from(card, { scrollTrigger: { trigger: card, start: "top 75%" }, duration: 0.8, opacity: 0, y: 40, scale: 0.9, delay: index * 0.2, ease: "back.out(1.7)" });
    });
    gsap.from(".form-section", { scrollTrigger: { trigger: ".form-section", start: "top 70%" }, duration: 1, opacity: 0, y: 50, ease: "power2.out" });