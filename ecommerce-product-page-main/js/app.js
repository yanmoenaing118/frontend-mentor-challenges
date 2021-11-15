const mobileMenu = document.querySelector(".mobile-menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close");

const cartBtn = document.querySelector(".cart-icon");
const carts = document.querySelector(".carts");

const productImage = document.querySelector(".product-image-item");
const activeProduct = document.querySelector(".product-active");
const activeBackdrop = document.querySelector(".active-backdrop");
const closeActiveProduct = document.querySelector(".active-product-close-btn");

console.log(productImage);

productImage.addEventListener("click", (e) => {
  console.log(activeProduct.classList.contains("product-active--hide"));
  if (activeProduct.classList.contains("product-active--hide")) {
    return activeProduct.classList.remove("product-active--hide");
  }
  return activeProduct.classList.add("product-active--hide");
});

closeActiveProduct.addEventListener("click", (e) => {
  console.log(activeProduct.classList.contains("product-active--hide"));
  if (activeProduct.classList.contains("product-active--hide")) {
    return activeProduct.classList.remove("product-active--hide");
  }
  return activeProduct.classList.add("product-active--hide");
});

activeBackdrop.addEventListener("click", (e) => {
  console.log(activeProduct.classList.contains("product-active--hide"));
  if (activeProduct.classList.contains("product-active--hide")) {
    return activeProduct.classList.remove("product-active--hide");
  }
  return activeProduct.classList.add("product-active--hide");
});

cartBtn.addEventListener("click", (e) => {
  if (!carts.classList.contains("hide-carts")) {
    return carts.classList.add("hide-carts");
  }
  carts.classList.remove("hide-carts");
});

mobileMenu.addEventListener("click", (e) => {
  sidebar.style.left = 0;
});

closeSidebarBtn.addEventListener("click", (e) => {
  sidebar.style.left = "-100%";
});

const productImageEl = productImage.querySelector("img");
const productImageItemThumbnails = document.querySelectorAll(
  ".product-image-item-list li"
);

productImageItemThumbnails.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    productImageItemThumbnails.forEach((el) =>
      el.classList.remove("product-image-item-list--active")
    );
    const newSrc = `images/image-product-${idx + 1}.jpg`;
    productImageEl.src = newSrc;
    el.classList.add("product-image-item-list--active");
  });
  console.log(el.classList);
});

const activeProductImg = document.querySelector(".active-image-item img");
const nextBtn = document.querySelector(".active-arrows--next");
const prevBtn = document.querySelector(".active-arrows--prev");
let currentActiveIndex = 1;

activeProductImg.src = `images/image-product-${currentActiveIndex}.jpg`;

nextBtn.addEventListener("click", () => {
  const newActiveIndex = currentActiveIndex < 4 ? currentActiveIndex + 1 : 1;
  activeProductImg.src = `images/image-product-${newActiveIndex}.jpg`;
  currentActiveIndex = newActiveIndex;
});

prevBtn.addEventListener("click", () => {
  const newActiveIndex = currentActiveIndex > 1 ? currentActiveIndex - 1 : 4;
  activeProductImg.src = `images/image-product-${newActiveIndex}.jpg`;
  currentActiveIndex = newActiveIndex;
});

const cartsFetchFromServer = [];

const cartIcon = document.querySelector(".cart-icon");

const addToCartBtn = document.querySelector(".add-cart--btn");

function addCartItems() {
  const newItem =
    '<li class="carts-item"><div class="cart"><div class="cart-info"><img src="images/image-product-1-thumbnail.jpg" alt="Item 1" class="cart-info--img"><div class="cart-info--content"><p>Fall Limited Edition Sneakers</p><p>$125.00x3 <strong>$375.00</strong></p></div></div><img src="images/icon-delete.svg" alt=""></div></li>';

  cartsFetchFromServer.push({
    id: cartsFetchFromServer.length,
    content: newItem,
  });

  renderCartItems(cartsFetchFromServer);
}

function renderCartItems(carts) {
  if (carts.length === 0) {
    document.querySelector(".carts-items").innerHTML =
      "<li><div class='empyt-list'>Empty List</div></li>";
  } else {
    let cartItems = document.querySelector(".carts-items");
    cartItems.innerHTML = "<ul class='.carts-items'>";
    carts.forEach(({ id, content }) => {
      cartItems.innerHTML += content;
    });
    cartItems.innerHTML += "</ul>";
  }
  renderNoti(carts.length);
}

function renderNoti(no) {
  console.log(no);
  const cartIconNoti = document.querySelector(".cart-icon span");
  if (no == 0) {
    cartIconNoti.style.opacity = 0;
  } else {
    cartIconNoti.style.opacity = 1;
    cartIconNoti.textContent = no;
  }
}

renderNoti(0);
renderCartItems(cartsFetchFromServer);

addToCartBtn.addEventListener("click", () => {
  addCartItems();
});
