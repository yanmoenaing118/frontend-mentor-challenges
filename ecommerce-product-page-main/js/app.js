const mobileMenu = document.querySelector(".mobile-menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close");

const cartBtn = document.querySelector(".cart-icon");
const carts = document.querySelector(".carts");

cartBtn.addEventListener("click", (e) => {
  if (carts.classList.contains("hide-carts")) {
    return carts.classList.remove("hide-carts");
  }
  carts.classList.add("hide-carts");
});

mobileMenu.addEventListener("click", (e) => {
  sidebar.style.left = 0;
});

closeSidebarBtn.addEventListener("click", (e) => {
  sidebar.style.left = "-100%";
});
