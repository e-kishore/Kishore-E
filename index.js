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
