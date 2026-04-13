// INIT EMAILJS
(function () {
  emailjs.init("x_5JCvFq7sgRoy_f5");
})();

// SERVICES DATA
const services = [
  { name: "Wash & Fold", price: 100 },
  { name: "Dry Cleaning", price: 200 },
  { name: "Ironing", price: 50 }
];

let cart = [];

// LOAD SERVICES
const container = document.getElementById("serviceContainer");

services.forEach((s, index) => {
  const div = document.createElement("div");
  div.className = "service-card";

  div.innerHTML = `
    <span>${s.name} - ₹${s.price}</span>
    <button onclick="addItem(${index})">Add</button>
  `;

  container.appendChild(div);
});

// ADD ITEM
function addItem(index) {
  cart.push(services[index]);
  updateCart();
}

// UPDATE CART
function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  const totalSpan = document.getElementById("total");

  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    const div = document.createElement("div");
    div.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${i})">Remove</button>
    `;
    cartDiv.appendChild(div);
  });

  totalSpan.innerText = total;
}

// REMOVE ITEM
function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}

// SCROLL
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView();
}

// BOOK NOW (EMAILJS)
function bookNow() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Fill all fields");
    return;
  }

  let order = cart.map(item => item.name).join(", ");
  let total = document.getElementById("total").innerText;

  const params = {
    name: name,
    email: email,
    phone: phone,
    order: order,
    total: total
  };

  emailjs.send("service_e4h7u2f", "template_6wvu3wj", params)
    .then(() => {
      document.getElementById("msg").innerText =
        "Thank you for booking! We will get back to you soon.";

      cart = [];
      updateCart();
    })
    .catch(() => {
      alert("Email failed");
    });
}