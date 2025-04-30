// Handle contact form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  });
}


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('nav-hover');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('nav-hover');
  });
});
