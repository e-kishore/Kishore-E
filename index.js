document.addEventListener("DOMContentLoaded", () => {

  AOS.init({
    duration: 1000,
    once: true
  });

  const toggle = document.getElementById("theme-toggle");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  const tagline = document.querySelector(".tagline");
  const text = "Computer Science Graduate | Java | Python | ML | AWS";
  let i = 0;

  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }
  type();
});
