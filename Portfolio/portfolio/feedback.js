// feedback form dynamic UX
const form = document.getElementById('feedbackForm');
const statusDiv = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    statusDiv.textContent = 'Sending...';
    statusDiv.style.color = '#3e6ff4';
    setTimeout(() => {
      statusDiv.textContent = 'Thank you for your feedback!';
      statusDiv.style.color = 'green';
      setTimeout(() => { statusDiv.textContent = ''; }, 4000);
    }, 1200);
  });
  // Animate input focus
  const inputs = form.querySelectorAll('.contact-inputs');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
}
