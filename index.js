// Typing Effect
const text = "Java | Python | Machine Learning | AWS";
let i = 0;
const tagline = document.getElementById("tagline");

function typeEffect() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

// Dark Mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Mobile Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// AOS Init
AOS.init({
  duration: 900,
  once: true
});
