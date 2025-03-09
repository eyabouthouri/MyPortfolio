import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = useState({ message: "", success: null });

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "9c81ef9a-1102-4634-9a61-1941c161618b"); // Remplace par ta clé Web3Forms
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then(response => response.json());
    
        if (response.success) {
            setFormStatus({ message: "Message sent successfully!", success: true });
            event.target.reset();
        } else {
            setFormStatus({ message: "Something went wrong. Try again.", success: false });
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently open to job opportunities, so feel free to contact me for any collaboration.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <span className="contact-detail-icon">📧</span>
                            <p>eya.bouthouri@esprit.tn</p>
                        </div>
                        <div className='contact-detail'>
                            <span className="contact-detail-icon">📞</span>
                            <p>+216 52423262</p>
                        </div>
                        <div className='contact-detail'>
                            <span className="contact-detail-icon">📍</span>
                            <p>Mourouj, Tunisia</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' id="name" required/>
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' id="email" required/>
                    
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' id="message" required></textarea>
                    
                    <button type='submit' className='contact-submit'>Submit Now</button>

                    {/* Affichage du message après soumission */}
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
