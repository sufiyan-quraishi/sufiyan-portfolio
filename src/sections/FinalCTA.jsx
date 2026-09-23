import { MessageCircle, ArrowRight } from 'lucide-react';
import { links } from '../data/personal';

export default function FinalCTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2>Have an idea worth building?</h2>
        <p>Let&rsquo;s turn it into something useful.</p>
        <div className="final-cta__ctas">
          <a href="#contact" onClick={scrollToContact} className="btn final-cta__btn-primary">
            Start a Conversation <ArrowRight size={17} />
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn final-cta__btn-secondary">
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .final-cta {
          margin: 0 var(--pad-desktop) 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(120deg, #2563eb, #06b6d4);
          overflow: hidden;
        }
        .final-cta__inner {
          padding: 72px 24px;
          text-align: center;
          color: #ffffff;
        }
        .final-cta__inner h2 { font-size: clamp(26px, 4vw, 38px); font-weight: 800; letter-spacing: -0.02em; }
        .final-cta__inner p { margin-top: 12px; font-size: 17px; opacity: 0.92; }
        .final-cta__ctas { margin-top: 30px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .final-cta__btn-primary { background: #ffffff; color: #1d4ed8; }
        .final-cta__btn-primary:hover { transform: translateY(-2px); }
        .final-cta__btn-secondary { background: rgba(255,255,255,0.14); color: #fff; border: 1px solid rgba(255,255,255,0.4); }
        .final-cta__btn-secondary:hover { background: rgba(255,255,255,0.22); }

        @media (max-width: 768px) {
          .final-cta { margin: 0 var(--pad-tablet); }
        }
        @media (max-width: 480px) {
          .final-cta { margin: 0 var(--pad-mobile); }
          .final-cta__inner { padding: 52px 18px; }
        }
      `}</style>
    </section>
  );
}
