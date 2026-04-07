let cart = [];
let total = 0;

// SCROLL
function scrollToBooking() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// ADD ITEM
function addItem(btn) {
  const parent = btn.parentElement;
  const name = parent.dataset.name;
  const price = parseInt(parent.dataset.price);

  cart.push({ name, price });
  total += price;

  updateCart();
}

// UPDATE CART UI
function updateCart() {
  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeItem(${index})">Remove</button>`;
    cartDiv.appendChild(div);
  });

  totalSpan.innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// EMAILJS INIT (PUT YOUR KEYS)
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// BOOK NOW
function bookNow() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || cart.length === 0) {
    alert("Fill details and add services");
    return;
  }

  const services = cart.map(item => item.name).join(", ");

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    user_name: name,
    user_email: email,
    user_phone: phone,
    services: services,
    total: total
  }).then(() => {
    document.getElementById("message").innerText =
      "Thank you for booking! We will get back to you soon.";
  });
}