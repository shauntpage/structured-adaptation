// Simple form handling note - replace Formspree ID with real one
document.getElementById('contact-form').addEventListener('submit', function(e) {
  // For demo, prevent default if no real endpoint
  // In production, remove this and use a real form service
  console.log('Form submitted');
});
