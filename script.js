// --- Hamburger Menu ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

const toggleMenu = () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
};

hamburger.addEventListener('click', toggleMenu);
links.forEach(link => link.addEventListener('click', () => {
  if (nav.classList.contains('open')) toggleMenu();
}));

// --- Dark / Light Mode Toggle ---
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;
const moonIcon = 'fa-moon';
const sunIcon = 'fa-sun';

// Function to apply the saved theme on load
const applyTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.firstElementChild.className = `fas ${sunIcon}`;
  } else {
    body.classList.remove('dark-mode');
    themeToggle.firstElementChild.className = `fas ${moonIcon}`;
  }
};

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save preference and update icon
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.firstElementChild.className = `fas ${sunIcon}`;
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.firstElementChild.className = `fas ${moonIcon}`;
  }
});

// Apply the theme when the page loads
document.addEventListener('DOMContentLoaded', applyTheme);