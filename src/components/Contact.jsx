import { useState } from 'react';

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact">
      <div className="section-label">06 // Connect</div>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid fade-in visible">
        <div className="contact-info">
          <p>{contact.intro}</p>
          <div className="contact-links">
            {contact.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : ''}
              >
                <span className="contact-link-icon">{link.icon}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
