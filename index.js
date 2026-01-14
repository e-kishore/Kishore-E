document.addEventListener('DOMContentLoaded', () => {

  AOS.init({
    duration: 1000,
    once: true,
  });

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const toggleIcon = themeToggle.querySelector('i');

  const setTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      toggleIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      toggleIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    setTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
  });

  // Typewriter Effect
  const taglineEl = document.querySelector('.tagline');
  const taglineText = "Computer Science Engineer | Java | Python | Machine Learning | AWS";
  let index = 0;

  function typeWriter() {
    if (index < taglineText.length) {
      taglineEl.textContent += taglineText.charAt(index++);
      setTimeout(typeWriter, 60);
    }
  }

  setTimeout(typeWriter, 800);
});
