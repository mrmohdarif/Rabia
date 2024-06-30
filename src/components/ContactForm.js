import React from 'react';

function ContactForm() {
  return (
    <form
      method="POST"
      action="https://formspree.io/f/{your-form-id}" // Replace with your Formspree form ID or your preferred form handling service.
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
