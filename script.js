// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-q");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all FAQs
    faqItems.forEach(faq => {
      faq.classList.remove("active");
      faq.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      faq.querySelector(".arrow").textContent = "+";
    });

    // Open clicked FAQ
    if (!isActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      item.querySelector(".arrow").textContent = "−";
    }
  });
});