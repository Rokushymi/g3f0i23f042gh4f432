function searchProject() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(project => {
    const title = project.querySelector("h3").textContent.toLowerCase();

    if (title.includes(input) || input === "") {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // зупиняємо стандартну відправку

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const service = this.service.value.trim();
    const description = this.description.value.trim();
    const message = document.getElementById("formMessage");

    // Простий regex для перевірки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !service || !description) {
        message.textContent = "Будь ласка, заповніть всі поля.";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Введіть коректну електронну адресу.";
        return;
    }

    // Якщо всі перевірки пройшли — відправляємо форму
    this.submit();
});
