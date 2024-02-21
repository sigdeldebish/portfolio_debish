document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const feedbackElement = document.getElementById('for_submit_message');
      const formData = new FormData(event.target);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));
      console.log("Feedback Submitted:", data);
      feedbackElement.textContent = "Your feedback is submitted! Thanks!"; 
      feedbackElement.style.color = 'green'
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const feedbackElement = document.getElementById('contact_submit_message');
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        console.log("Feedback Submitted:", data);
        feedbackElement.textContent = "Thanks!"; 
        feedbackElement.style.color = 'green'
    });
});