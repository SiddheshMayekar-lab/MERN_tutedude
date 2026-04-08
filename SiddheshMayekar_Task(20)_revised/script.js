let cart = [];

document.addEventListener('DOMContentLoaded', function () {

  // Setup scroll to booking section
  const bookBtn = document.getElementById('bookBtn');
  if (bookBtn) {
    bookBtn.addEventListener('click', scrollToBooking);
  }

  // Setup add to cart buttons
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      addItem(this);
    });
  });

  // Setup booking form
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBooking);
  }

  // Setup newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleSubscribe);
  }

  // Load any saved subscriptions
  loadSubscriptions();
});

function scrollToBooking() {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add item to cart
function addItem(button) {
  // Get the parent service element
  const serviceElement = button.parentElement;

  // Get data attributes
  const name = serviceElement.getAttribute('data-name');
  const price = parseInt(serviceElement.getAttribute('data-price'));

  // Add to cart array
  cart.push({
    name: name,
    price: price
  });

  // Update the cart display
  updateCartDisplay();

  // Show feedback
  showMessage('Added ' + name + ' to cart', 'success');
}

// Remove item from cart
function removeItem(index) {
  // Remove item at index
  cart.splice(index, 1);

  // Update display
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');

  // Clear current display
  cartDiv.innerHTML = '';

  // Check if cart is empty
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    totalSpan.textContent = '0';
    return;
  }

  // Calculate total
  let total = 0;

  // Add each item to display
  cart.forEach(function (item, index) {
    total += item.price;

    // Create cart item element
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML =
      '<span>' + item.name + ' - ₹' + item.price + '</span>' +
      '<button class="remove-btn">Remove</button>';

    // Add remove functionality
    const removeBtn = itemDiv.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function () {
      removeItem(index);
    });

    cartDiv.appendChild(itemDiv);
  });

  // Update total
  totalSpan.textContent = total;
}

// Validate email format using regex
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Validate phone number (Indian format)
function isValidPhone(phone) {
  // Accepts 10 digit numbers starting with 6, 7, 8, or 9
  const phonePattern = /^[6-9]\d{9}$/;
  return phonePattern.test(phone);
}

function handleBooking(event) {
  // Prevent form from submitting normally
  event.preventDefault();

  // Get form values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageEl = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validation checks
  if (cart.length === 0) {
    showMessage('Please add at least one service to cart', 'error');
    return;
  }

  if (name === '') {
    showMessage('Please enter your name', 'error');
    nameInput.focus();
    return;
  }

  if (email === '') {
    showMessage('Please enter your email', 'error');
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    showMessage('Please enter a valid email address', 'error');
    emailInput.focus();
    return;
  }

  if (phone === '') {
    showMessage('Please enter your phone number', 'error');
    phoneInput.focus();
    return;
  }

  if (!isValidPhone(phone)) {
    showMessage('Please enter a valid 10-digit phone number', 'error');
    phoneInput.focus();
    return;
  }

  // All validation passed - simulate booking
  // In a real app, this would send data to a server

  // Get services list
  const servicesList = cart.map(function (item) {
    return item.name;
  }).join(', ');

  const total = cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);

  // Create booking object
  const booking = {
    name: name,
    email: email,
    phone: phone,
    services: servicesList,
    total: total,
    date: new Date().toLocaleString()
  };

  // Save to localStorage (for demo purposes)
  saveBooking(booking);

  // Show success message
  showMessage(
    'Thank you ' + name + '! Your booking for ' + servicesList +
    ' (₹' + total + ') has been received. We will contact you soon!',
    'success'
  );

  // Clear cart and form
  cart = [];
  updateCartDisplay();
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
}

// Save booking to localStorage
function saveBooking(booking) {
  // Get existing bookings or create empty array
  let bookings = JSON.parse(localStorage.getItem('laundryBookings')) || [];

  // Add new booking
  bookings.push(booking);

  // Save back to localStorage
  localStorage.setItem('laundryBookings', JSON.stringify(bookings));
}

function handleSubscribe(event) {
  event.preventDefault();

  const nameInput = document.getElementById('subName');
  const emailInput = document.getElementById('subEmail');
  const messageEl = document.getElementById('subMessage');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Validation
  if (name === '') {
    messageEl.textContent = 'Please enter your name';
    messageEl.style.color = '#e74c3c';
    nameInput.focus();
    return;
  }

  if (email === '') {
    messageEl.textContent = 'Please enter your email';
    messageEl.style.color = '#e74c3c';
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    messageEl.textContent = 'Please enter a valid email address';
    messageEl.style.color = '#e74c3c';
    emailInput.focus();
    return;
  }

  // Check if already subscribed
  let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];

  const alreadySubscribed = subscribers.some(function (sub) {
    return sub.email === email;
  });

  if (alreadySubscribed) {
    messageEl.textContent = 'You are already subscribed!';
    messageEl.style.color = '#f39c12';
    return;
  }

  // Add subscriber
  subscribers.push({
    name: name,
    email: email,
    date: new Date().toLocaleString()
  });

  localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));

  // Show success
  messageEl.textContent = 'Thank you for subscribing, ' + name + '!';
  messageEl.style.color = '#4ecca3';

  // Clear form
  nameInput.value = '';
  emailInput.value = '';
}

// Load and display subscriptions (for demo)
function loadSubscriptions() {
  // This function can be used to display subscriber count
  // or manage subscriptions in an admin view
  const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
  console.log('Total subscribers: ' + subscribers.length);
}

// Show message to user
function showMessage(text, type) {
  const messageEl = document.getElementById('message');
  if (messageEl) {
    messageEl.textContent = text;
    messageEl.className = type;

    // Clear message after 3 seconds
    setTimeout(function () {
      messageEl.textContent = '';
      messageEl.className = '';
    }, 3000);
  }
}