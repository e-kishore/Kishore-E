const text = "B.Tech AI & ML Student | Aspiring Software Developer";
let i = 0;
const tagline = document.getElementById("tagline");

function type() {
  if (i < text.length) {
    tagline.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
type();
