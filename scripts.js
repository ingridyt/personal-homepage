document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data using an email service API or server-side script
    fetch('https://formsubmit.co/ajax/friming@hotmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').innerText = 'Message sent successfully!';
    })
    .catch(error => {
        document.getElementById('response-message').innerText = 'Error sending message. Please try again later.';
    });

    // Clear form fields
    document.getElementById('contact-form').reset();
});
