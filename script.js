// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 72,
          behavior: "smooth"
        });
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// IntersectionObserver for fade-in animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Dark mode toggle (body.light vs default dark)
const darkToggle = document.getElementById("darkToggle");
const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
const storedTheme = localStorage.getItem("gl-theme");

if (storedTheme === "light" || (!storedTheme && prefersLight)) {
  document.body.classList.add("light");
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const mode = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("gl-theme", mode);
  });
}

// Contact form basic handler (front-end only)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    setTimeout(() => {
      statusEl.textContent = "Thank you — your inquiry has been received. You'll get a follow-up email with next steps.";
      form.reset();
    }, 700);
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
