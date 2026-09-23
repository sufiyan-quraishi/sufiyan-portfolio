import { useState } from 'react';
import { Send, MessageCircle, Mail } from 'lucide-react';
import { isEmailServiceConfigured, sendContactMessage } from '../services/emailService';
import { links } from '../data/personal';
import { useToast } from './Toast.jsx';

const initialForm = { name: '', email: '', subject: '', message: '', phone: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const { showToast } = useToast();
  const configured = isEmailServiceConfigured();

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!EMAIL_RE.test(form.email)) next.email = 'A valid email is required.';
    if (!form.subject.trim()) next.subject = 'Subject is required.';
    if (!form.message.trim()) next.message = 'Message is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await sendContactMessage(form);
      setStatus('success');
      showToast('Message sent successfully.', 'success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      showToast('Unable to send right now. Please use WhatsApp or Email instead.', 'error');
    }
  };

  if (!configured) {
    return (
      <div className="contact-form contact-form--fallback card">
        <p>Email service is not configured yet. You can contact me directly using WhatsApp or Email.</p>
        <div className="contact-form__fallback-ctas">
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            <MessageCircle size={15} /> Chat on WhatsApp
          </a>
          <a href={links.email} className="btn btn-secondary btn-sm">
            <Mail size={15} /> Send Email
          </a>
        </div>
        <style>{contactFormStyles}</style>
      </div>
    );
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <label>
          <span>Full Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
          {errors.name && <em>{errors.name}</em>}
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
          {errors.email && <em>{errors.email}</em>}
        </label>
      </div>

      <label>
        <span>Phone Number <small>(optional)</small></span>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
      </label>

      <label>
        <span>Subject</span>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} />
        {errors.subject && <em>{errors.subject}</em>}
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
        {errors.message && <em>{errors.message}</em>}
      </label>

      <button type="submit" className="btn btn-primary contact-form__submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : <>Send Message <Send size={16} /></>}
      </button>

      <style>{contactFormStyles}</style>
    </form>
  );
}

const contactFormStyles = `
  .contact-form { padding: 30px; display: flex; flex-direction: column; gap: 18px; }
  .contact-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .contact-form label { display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 600; color: var(--text-2); }
  .contact-form label small { font-weight: 400; color: var(--muted); }
  .contact-form input, .contact-form textarea {
    font-family: inherit; font-size: 14.5px; color: var(--text);
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 10px;
    padding: 12px 14px; resize: vertical; transition: border-color 0.25s var(--ease);
  }
  .contact-form input:focus, .contact-form textarea:focus { border-color: var(--primary); outline: none; }
  .contact-form input[aria-invalid="true"], .contact-form textarea[aria-invalid="true"] { border-color: #ef4444; }
  .contact-form em { font-style: normal; font-size: 12.5px; color: #ef4444; }
  .contact-form__submit { margin-top: 4px; justify-content: center; width: 100%; }
  .contact-form--fallback { text-align: center; gap: 20px; }
  .contact-form--fallback p { color: var(--text-2); font-size: 15px; line-height: 1.6; }
  .contact-form__fallback-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  @media (max-width: 560px) {
    .contact-form__row { grid-template-columns: 1fr; }
  }
`;
