var toggleBtn = document.getElementById("toggleBtn");
var slideBtn = document.getElementById("slideIcon");
var heroSection = document.getElementById("heroSection");
var mainSection = document.getElementById("mainSection");
var socialCube1 = document.getElementsByClassName("socialCube1");
var overView1 = document.getElementsByClassName('"overView1');

let i = false;
function toggleIcon() {
  toggleBtn.classList.toggle("toggleLeft");
  document.body.classList.toggle("lightTheme");
  if (!i) {
    i = true;
    slideBtn.style.backgroundColor = "#fff";
  } else {
    slideBtn.style.backgroundColor = "var(--Very-Dark-Blue-2)";
    i = false;
  }
}
