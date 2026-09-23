import emailjs from '@emailjs/browser';
import { personal } from '../data/personal';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Whether EmailJS has been configured via environment variables.
 * The contact form uses this to decide whether to render the live
 * form or a graceful WhatsApp/Email fallback.
 */
export function isEmailServiceConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

/**
 * Sends a contact form message via EmailJS.
 * Expects { name, email, subject, message, phone } and delivers it
 * to the address configured in data/personal.js, using the template
 * variables: from_name, from_email, subject, message, phone.
 */
export async function sendContactMessage({ name, email, subject, message, phone }) {
  if (!isEmailServiceConfigured()) {
    throw new Error('EmailJS is not configured.');
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    subject: `Portfolio Contact — ${subject}`,
    message,
    phone: phone || 'Not provided',
    to_email: personal.email,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
}
