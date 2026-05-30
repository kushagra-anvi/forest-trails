const forms = document.querySelectorAll(".lead-form");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name") || "Customer";
    const phone = formData.get("phone") || "";
    const interest = formData.get("interest") || "Forest Trails Bhugaon";
    const text = encodeURIComponent(
      `New enquiry for ${interest}\nName: ${name}\nPhone: ${phone}`
    );

    window.location.href = `https://wa.me/917066787989?text=${text}`;
  });
});

if (!reduceMotion) {
  document.body.classList.add("has-animations");

  const revealSets = [
    {
      selector: ".intro-copy, .section-heading, .masterplan-copy, .location > div:first-child, .final-copy",
      variant: "reveal-left",
      step: 0
    },
    {
      selector: ".featured-residence, .masterplan-image, .contact-form",
      variant: "reveal-scale",
      step: 0
    },
    {
      selector: ".intro-notes article, .stats-band div, .project-card, .amenity-grid article, .location-list span, .contact-lines a",
      variant: "reveal",
      step: 80
    }
  ];

  revealSets.forEach(({ selector, variant, step }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("reveal", variant);
      element.style.setProperty("--reveal-delay", `${Math.min(index * step, 360)}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  const updateScrolledState = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateScrolledState();
  window.addEventListener("scroll", updateScrolledState, { passive: true });
}
