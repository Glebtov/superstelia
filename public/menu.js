const menu = document.getElementById("menu");
const modal = document.getElementById("modal");

function showMenu() {
  menu.style.right = "0%";
  document.body.style.overflow = "hidden";
  modal.style.display = "block";
}

function closeMenu() {
  menu.style.right = "-100%";
  document.body.style.overflow = "auto";
  modal.style.display = "none";
}

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeMenu();
  }
});
