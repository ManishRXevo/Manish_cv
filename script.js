document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('show');
    });
  });

console.log('Website Loaded!');

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name && email && message) {
      var whatsappNumber = '916369117285'; 

      var finalMessage = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;

      var whatsappLink = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;

      window.open(whatsappLink, '_blank');
  } else {
      alert('Please fill out all fields!');
  }
});
