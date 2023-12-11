// Dynamic Welcome Message
const welcomeMessage = document.getElementById('welcome-message');
const currentTime = new Date().getHours();

if (currentTime < 12) {
  welcomeMessage.textContent = 'Good morning!';
} else if (currentTime < 18) {
  welcomeMessage.textContent = 'Good afternoon!';
} else {
  welcomeMessage.textContent = 'Good evening!';
}

// Form Validation for Contact Us Page
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (!nameInput.value || !emailInput.value) {
    alert('Please fill out all fields in the form.');
    return false; // Prevent form submission
  }

  return true; // Allow form submission
}

// Image Slider for Home Section
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Call the slideshow function when the page loads
window.onload = showSlides;

// Product Information Display
const productImages = document.querySelectorAll('.mySlides img');

productImages.forEach((img) => {
  img.addEventListener('click', displayProductInfo);
});

function displayProductInfo() {
  const productName = this.alt;
  const productDescription = this.parentElement.nextElementSibling.textContent;
  alert(`Product: ${productName}\nDescription: ${productDescription}`);
}

// Smooth Scroll Effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Toggle Service Details
function toggleServiceDetails(service) {
  const details = service.querySelector('.details');
  details.classList.toggle('visible');
}
// Dynamic Welcome Message
const welcomeMessage = document.getElementById('welcome-message');
const currentTime = new Date().getHours();

if (currentTime < 12) {
  welcomeMessage.textContent = 'Good morning!';
} else if (currentTime < 18) {
  welcomeMessage.textContent = 'Good afternoon!';
} else {
  welcomeMessage.textContent = 'Good evening!';
}

// Form Validation for Contact Us Page
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields in the form.');
    return false; // Prevent form submission
  }

  return true; // Allow form submission
}

// Image Slider for Home Section
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Call the slideshow function when the page loads
window.onload = showSlides;

// Product Information Display
const productImages = document.querySelectorAll(".mySlides img");

productImages.forEach((img) => {
  img.addEventListener('click', displayProductInfo);
});

function displayProductInfo() {
  const productName = this.nextElementSibling.textContent;
  const productDescription = this.nextElementSibling.nextElementSibling.textContent;
  alert(`Product: ${productName}\nDescription: ${productDescription}`);
}

// Smooth Scroll Effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
