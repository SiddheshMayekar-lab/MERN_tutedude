// emailjs init
(function () {
  emailjs.init("x_5JCvFq7sgRoy_f5");
})();

// services list
var services = [
  { name: "Wash & Fold", price: 100 },
  { name: "Dry Cleaning", price: 200 },
  { name: "Ironing", price: 50 }
];

var cart = [];

// show services
var container = document.getElementById("serviceContainer");

for (var i = 0; i < services.length; i++) {

  var div = document.createElement("div");
  div.className = "service-card";

  div.innerHTML =
    services[i].name + " - ₹" + services[i].price +
    " <button onclick='addItem(" + i + ")'>Add</button>";

  container.appendChild(div);
}

// add item
function addItem(index) {
  cart.push(services[index]);
  updateCart();
}

// remove item
function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}

// update cart
function updateCart() {

  var cartDiv = document.getElementById("cartItems");
  var totalSpan = document.getElementById("total");

  cartDiv.innerHTML = "";

  var total = 0;

  for (var i = 0; i < cart.length; i++) {

    total = total + cart[i].price;

    var div = document.createElement("div");

    div.innerHTML =
      cart[i].name + " - ₹" + cart[i].price +
      " <button onclick='removeItem(" + i + ")'>X</button>";

    cartDiv.appendChild(div);
  }

  totalSpan.innerText = total;
}

// scroll
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView();
}

// simple email check
function checkEmail(email) {
  if (email.indexOf("@") == -1) return false;
  if (email.indexOf(".") == -1) return false;
  return true;
}

// simple phone check
function checkPhone(phone) {
  if (phone.length != 10) return false;
  if (isNaN(phone)) return false;
  return true;
}

// booking
function bookNow() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (name == "" || email == "" || phone == "") {
    alert("Fill all fields");
    return;
  }

  if (!checkEmail(email)) {
    alert("Wrong email");
    return;
  }

  if (!checkPhone(phone)) {
    alert("Wrong phone");
    return;
  }

  if (cart.length == 0) {
    alert("Cart empty");
    return;
  }

  var order = "";
  for (var i = 0; i < cart.length; i++) {
    order = order + cart[i].name + ", ";
  }

  var total = document.getElementById("total").innerText;

  var data = {
    name: name,
    email: email,
    phone: phone,
    order: order,
    total: total
  };

  emailjs.send("service_e4h7u2f", "template_6wvu3wj", data)
    .then(function () {
      document.getElementById("msg").innerText = "Booking Done";

      cart = [];
      updateCart();
    })
    .catch(function () {
      alert("Error sending email");
    });
}

// newsletter
function subscribe() {

  var name = document.getElementById("newsName").value;
  var email = document.getElementById("newsEmail").value;

  if (name == "" || email == "") {
    alert("Fill all fields");
    return;
  }

  if (!checkEmail(email)) {
    alert("Wrong email");
    return;
  }

  localStorage.setItem("user", name + " - " + email);

  document.getElementById("newsMsg").innerText = "Subscribed";
}