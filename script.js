var toggleBtn = document.getElementById("toggleBtn");
var slideBtn = document.getElementById("slideIcon");
function toggleIcon() {
  toggleBtn.classList.toggle("toggleLeft");
  let i = 2;
  if (!i == 1) {
    slideBtn.style.backgroundColor = "green";
    i++;
    return false;
  } else {
    slideBtn.style.backgroundColor = "white";
    return true;
  }
}
