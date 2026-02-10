// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(r => revealObserver.observe(r));

// Stats counter animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      let count = 0;

      const update = () => {
        count += Math.ceil(target / 80);
        if (count < target) {
          counter.textContent = count;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };

      update();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.6 });

counters.forEach(c => counterObserver.observe(c));
