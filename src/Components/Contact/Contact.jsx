import { useRef, useState } from 'react';
import './Contact.css';
import useInView from '../../hooks/useInView';
import { useApp } from '../../context/AppContext';

const Contact = () => {
  const { t } = useApp();
  const [formStatus, setFormStatus] = useState({ message: '', success: null });
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormStatus({ message: '', success: null });

    const formData = new FormData(event.target);
    formData.append('access_key', '9c81ef9a-1102-4634-9a61-1941c161618b');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (response.success) {
        setFormStatus({ message: t.contact.success, success: true });
        event.target.reset();
      } else {
        setFormStatus({ message: t.contact.error, success: false });
      }
    } catch {
      setFormStatus({ message: t.contact.error, success: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className={`contact reveal ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="contact-title">
        <h1>{t.contact.title}</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>{t.contact.talk}</h1>
          <p>{t.contact.text}</p>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon">📧</span>
              <a href="mailto:eyabouthouri@outlook.com">eyabouthouri@outlook.com</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">📞</span>
              <a href="tel:+33744866774">+33 7 44 86 67 74</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">📍</span>
              <p>France</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">{t.contact.name}</label>
          <input type="text" placeholder={t.contact.namePh} name="name" id="name" required />

          <label htmlFor="email">{t.contact.email}</label>
          <input type="email" placeholder={t.contact.emailPh} name="email" id="email" required />

          <label htmlFor="message">{t.contact.message}</label>
          <textarea name="message" rows="6" placeholder={t.contact.messagePh} id="message" required />

          <button type="submit" className="contact-submit" disabled={submitting}>
            {submitting ? t.contact.sending : t.contact.submit}
          </button>

          {formStatus.message && (
            <p className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
