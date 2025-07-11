// script.js
// Smooth scroll and active nav highlight

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('section'));

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active nav highlight on scroll
  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});

// Feedback form submission
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('fb-name').value.trim();
    const message = document.getElementById('fb-message').value.trim();
    const status = document.getElementById('fb-status');
    if (name && message) {
      status.textContent = 'Thank you for your feedback!';
      status.style.color = 'green';
      feedbackForm.reset();
    } else {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
    }
    setTimeout(() => { status.textContent = ''; }, 3000);
  });
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️ Light Mode';
    } else {
      themeToggle.textContent = '🌙 Dark Mode';
    }
  });
}
