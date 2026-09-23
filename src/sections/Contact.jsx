import { Mail, MessageCircle, Phone, Github, Linkedin, FileText, Copy } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import { useToast } from '../components/Toast.jsx';
import { personal, links } from '../data/personal';
import { socialLinks } from '../data/socialLinks';
import { assets } from '../data/assets';
import { copyToClipboard } from '../utils/clipboard';

export default function Contact() {
  const { showToast } = useToast();

  const handleCopy = (value) => async (e) => {
    e.preventDefault();
    const ok = await copyToClipboard(value);
    showToast(ok ? 'Copied to clipboard.' : 'Could not copy — please copy manually.', ok ? 'success' : 'error');
  };

  const cards = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: links.email,
      copyValue: personal.email,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: personal.phoneDisplay,
      href: links.whatsapp,
      external: true,
      copyValue: personal.phoneDisplay,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phoneDisplay,
      href: links.phone,
      copyValue: personal.phoneDisplay,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Sufiyan-quraishi',
      href: socialLinks.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Mohammad Sufiyan Quraishi',
      href: socialLinks.linkedin,
      external: true,
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'View / Download PDF',
      href: assets.resume.pdf,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&rsquo;s Build Something Together.</h2>
          <p className="section-subtitle">
            Have an opportunity, project idea or simply want to connect? Send me a message.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__cards">
            {cards.map((c) => (
              <div className="contact-card card card--hover" key={c.label}>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noreferrer' : undefined}
                  className="contact-card__link"
                >
                  <span className="contact-card__icon"><c.icon size={18} /></span>
                  <span className="contact-card__text">
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </span>
                </a>
                {c.copyValue && (
                  <button className="contact-card__copy" onClick={handleCopy(c.copyValue)} aria-label={`Copy ${c.label}`}>
                    <Copy size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 24px;
          align-items: start;
        }
        .contact__cards { display: flex; flex-direction: column; gap: 12px; }
        .contact-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 8px 8px 16px;
        }
        .contact-card__link { display: flex; align-items: center; gap: 14px; flex: 1; min-width: 0; padding: 8px 0; }
        .contact-card__icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); color: var(--primary);
        }
        .contact-card__text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .contact-card__text strong { font-size: 13px; color: var(--muted); font-weight: 600; }
        .contact-card__text span { font-size: 14.5px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .contact-card__copy {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: transparent; border: 1px solid var(--border); color: var(--muted); cursor: pointer;
        }
        .contact-card__copy:hover { color: var(--primary); border-color: var(--primary); }

        @media (max-width: 900px) {
          .contact__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
