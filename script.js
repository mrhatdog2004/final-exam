document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
