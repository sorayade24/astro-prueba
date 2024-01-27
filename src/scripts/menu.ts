
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (navLinks && hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('expanded');
    });
  }
});
