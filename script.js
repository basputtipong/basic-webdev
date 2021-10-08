let imageSrc = [
  "./assets/image/products/ip-13-pink.jpg",
  "./assets/image/products/ip-13-blue.jpg",
  "./assets/image/products/ip-12-gold.jpg",
  "./assets/image/products/ip-12-blue.jpg",
  "./assets/image/products/ip-11-green.jpg",
  "./assets/image/products/ip-11-gold.jpg",
  "./assets/image/products/ipad-air-black.jpg",
  "./assets/image/products/ipad-pro-white.jpg",
];

fetch("products.json")
  .then((res) => res.json())
  .then((data) => displayProduct(data));

let cart = [];
let obj = {};
let res = [];

function displayProduct(data) {
  for (i = 0; i < data.length; i++) {
    let container = document.querySelector(".product-con");
    let item = document.createElement("div");
    item.className = "product-item";
    container.appendChild(item);

    let image = document.createElement("img");
    image.src = imageSrc[i];
    item.appendChild(image);

    let title = document.createElement("h2");
    title.className = "item-title";
    title.id = "item-title";
    title.innerHTML = data[i].name;
    item.appendChild(title);

    let des = document.createElement("h4");
    des.innerHTML = data[i].description;
    item.appendChild(des);

    let itemCon = document.createElement("div");
    itemCon.className = "item-content";
    item.appendChild(itemCon);

    let price = document.createElement("p");
    price.className = "price";
    price.innerHTML = "$" + data[i].price;
    itemCon.appendChild(price);

    let divBtn = document.createElement("div");
    divBtn.className = "order-el";
    itemCon.appendChild(divBtn);

    let button = document.createElement("button");
    button.className = "order-btn";
    button.innerHTML = "Order";
    divBtn.appendChild(button);
    button.addEventListener("click", function () {
      cart.push({
        name: title.textContent,
        description: des.textContent,
        price: price.textContent,
      });
      alert(`${title.textContent} Successfully Added!`);
    });
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  cart.forEach((index) => {
    let modal = document.querySelector(".modal-content");
    let list = document.createElement("h6");
    list.className = "list-text";
    list.innerHTML = `Product name: ${index.name} <br>Description: ${index.description} <br>Price: ${index.price}`;
    modal.appendChild(list);
    cart.pop();
  });
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// **************************Carousel Script**************************
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// **************************End Carousel Script**************************
