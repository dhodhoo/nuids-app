// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animate statistics on scroll
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-target"));
          animateNumber(entry.target, 0, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".value-card, .feature-card, .team-card, .timeline-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(30px)";

          setTimeout(() => {
            entry.target.style.transition = "all 0.6s ease";
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, 100);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  animateStats();
  animateOnScroll();
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }
});
