document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const contactForm = document.getElementById("contactForm");

  // 1. Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Simple Contact Form Validation
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Clear previous errors
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("messageError").textContent = "";

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let isValid = true;

      // Name validation
      if (name === "") {
        document.getElementById("nameError").textContent =
          "Please enter your name.";
        isValid = false;
      }

      // Email validation (Basic regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        document.getElementById("emailError").textContent =
          "Please enter your email.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
          "Please enter a valid email address.";
        isValid = false;
      }

      // Message validation
      if (message === "") {
        document.getElementById("messageError").textContent =
          "Please enter a message.";
        isValid = false;
      }

      if (isValid) {
        // In a real scenario, you'd send this data to a server
        alert(
          "Thank you, " + name + "! Your message has been sent successfully."
        );
        contactForm.reset();
      }
    });
  }

  // 3. Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for fixed navbar
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });
});
