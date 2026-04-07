const services = [
    {
        id: 1,
        name: "Haircut",
        price: 200,
        img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600"
    },
    {
        id: 2,
        name: "Spa",
        price: 500,
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600"
    },
    {
        id: 3,
        name: "Facial",
        price: 300,
        img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600"
    }
];

let selectedServices = [];
let totalAmount = 0;

const servicesContainer = document.getElementById("services");
const cartList = document.getElementById("cart-list");
const totalDisplay = document.getElementById("total");

// Render Services
services.forEach(service => {
    const div = document.createElement("div");
    div.classList.add("service");

    div.innerHTML = `
        <img src="${service.img}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p>₹${service.price}</p>
        <button class="add-btn" onclick="addItem(${service.id})">Add Item</button>
        <button class="skip-btn">Skip</button>
      `;

    servicesContainer.appendChild(div);
});

function addItem(id) {
    const service = services.find(s => s.id === id);
    selectedServices.push(service);
    totalAmount += service.price;
    updateCart();
}

function updateCart() {
    cartList.innerHTML = "";

    if (selectedServices.length === 0) {
        cartList.innerHTML = "No items added";
    } else {
        selectedServices.forEach(item => {
            const p = document.createElement("p");
            p.textContent = `${item.name} - ₹${item.price}`;
            cartList.appendChild(p);
        });
    }

    totalDisplay.textContent = totalAmount;
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    if (selectedServices.length === 0) {
        alert("Please add at least one service");
        return;
    }

    alert("Booking Confirmed!");
});

function logout() {
    alert("Logged out");
}