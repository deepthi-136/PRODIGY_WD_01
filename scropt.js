// Navbar scroll effect: add 'scrolled' class after 50px scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile hamburger menu toggle
const navLinks = document.getElementById('nav-links');

// Create hamburger button dynamically
const header = document.getElementById('header');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
header.appendChild(hamburger);

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
