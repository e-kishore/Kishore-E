document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     AOS INITIALIZATION
  ====================== */
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic"
  });

  /* =====================
     THEME TOGGLE
  ====================== */
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const body = document.body;

  const setTheme = (mode) => {
    if (mode === "dark") {
      body.classList.add("dark-mode");
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const current = body.classList.contains("dark-mode") ? "dark" : "light";
    setTheme(current === "dark" ? "light" : "dark");
  });

  /* =====================
     TYPEWRITER TAGLINE
  ====================== */
  const tagline = document.querySelector(".tagline");
  const text = "Computer Science Engineer | Java | Python | ML | AWS";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 60);
    }
  }

  setTimeout(typeEffect, 800);
});
