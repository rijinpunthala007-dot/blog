// Hamburger toggle + close on link click (nice and tidy)
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
