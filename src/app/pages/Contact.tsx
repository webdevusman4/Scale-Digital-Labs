import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, MapPin, Clock, Send, CheckCircle, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const SOCIALS = [
  { label: "Twitter",   icon: Twitter,   href: "#" },
  { label: "LinkedIn",  icon: Linkedin,  href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Github",    icon: Github,    href: "#" },
];

const CONTACT_INFO = [
  { icon: Mail, label: "Email us", value: "hello@scaledigitallabs.studio", href: "mailto:hello@scaledigitallabs.studio" },
  { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div ref={headerRef as React.RefObject<HTMLDivElement>} className="animate-on-scroll">
            <span className="section-label">Get in Touch</span>
            <h1 className="page-header__title">
              Let's Talk <span className="gradient-text">About Your Project</span>
            </h1>
            <p className="page-header__sub">
              Ready to bring your vision to life? We're here to help. Reach out and let's create something remarkable together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-info-grid" ref={infoRef as React.RefObject<HTMLDivElement>}>
            {CONTACT_INFO.map((info, i) => (
              <div
                key={i}
                className="contact-info-card animate-on-scroll"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="contact-info-card__icon">
                  <info.icon size={22} />
                </div>
                <p className="contact-info-card__label">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="contact-info-card__value contact-info-card__value--link">
                    {info.value}
                  </a>
                ) : (
                  <p className="contact-info-card__value">{info.value}</p>
                )}
                <div className="contact-info-card__bar" />
              </div>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="contact-avail animate-on-scroll" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <span className="contact-avail__dot" />
            <span>Open for new projects — 2 spots left in June 2025</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section--alt">
        <div className="container">
          <div className="contact-form-wrap" ref={formRef as React.RefObject<HTMLDivElement>}>
            {submitted ? (
              <div className="contact-success animate-on-scroll">
                <div className="contact-success__icon">
                  <CheckCircle size={48} strokeWidth={1.5} />
                </div>
                <h2 className="contact-success__title">Message Sent Successfully!</h2>
                <p className="contact-success__sub">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn btn--outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="contact-form-inner animate-on-scroll">
                <div className="contact-form-header">
                  <h2 className="contact-form-header__title">Send us a message</h2>
                  <p className="contact-form-header__sub">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form__row">
                    <div className="form-field">
                      <label className="form-field__label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="form-field__input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-field__label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="form-field__input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-field__label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="form-field__input"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-field__label">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="form-field__input form-field__textarea"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="contact-form__footer">
                    <button type="submit" className="contact-submit-btn">
                      <span>Send Message</span>
                      <Send size={20} />
                    </button>
                  </div>
                </form>

                {/* Social Links */}
                <div className="contact-socials">
                  <p className="contact-socials__label">Or connect with us on social media</p>
                  <div className="contact-socials__links">
                    {SOCIALS.map(({ label, icon: Icon, href }) => (
                      <a key={label} href={href} className="contact-social" aria-label={label}>
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
