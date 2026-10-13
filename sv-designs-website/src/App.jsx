import { useState } from "react";

const services = [
  { icon: "💍", title: "Wedding Cards", description: "Invitations and wedding stationery for your special day." },
  { icon: "▤", title: "Visiting Card", description: "Professional business cards that make a lasting impression." },
  { icon: "▰", title: "Flex Printing", description: "Banners, flex boards and promotional printing." },
  { icon: "☑", title: "e-Sevai", description: "Assistance with available e-Sevai and online public services." },
  { icon: "▧", title: "Xerox", description: "Convenient photocopying and document copy services." },
  { icon: "⌨", title: "DTP", description: "Document typing, formatting and desktop publishing." },
];

const phoneNumbers = ["7502767420", "9500366534"];
const whatsappNumber = "917502767420";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General enquiry");
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");

  function sendWhatsApp(event) {
    event.preventDefault();
    const text = [
      "Hello SV Designs,",
      `Name: ${customerName || "Not provided"}`,
      `Service: ${selectedService}`,
      `Message: ${message || "I'd like to know more."}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu}>SV <span>DESIGNS</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? "✕" : "☰"}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact us ↗</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-copy">
              <p className="eyebrow"><span /> YOUR LOCAL PRINTING & DIGITAL SERVICE CENTRE</p>
              <h1>Every detail printed.<br /><em>Every service made simple.</em></h1>
              <p className="hero-description">From wedding invitations and visiting cards to flex printing, Xerox and digital services — SV Designs is here to help.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#services">Explore services <span>↘</span></a>
                <a className="button button-outline" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp us ↗</a>
              </div>
              <div className="location-note"><span className="pin">⌖</span> Makkinampatti, Pollachi, Tamil Nadu</div>
            </div>
            <div className="banner-frame">
              <img src="/images/sv-designs-banner.jpg" alt="SV Designs printing and digital services banner showing services, phone numbers and address" />
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow dark">WHAT WE OFFER</p>
                <h2>Services for every need.</h2>
              </div>
              <p>Friendly service, careful work, and practical solutions for your printing and digital needs.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">0{index + 1}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" onClick={() => setSelectedService(service.title)} className="service-link">Enquire about this ↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-badge"><span>SV</span><small>PRINTING<br />& DIGITAL</small></div>
            <div>
              <p className="eyebrow">ABOUT SV DESIGNS</p>
              <h2>Quality printing.<br /><em>Reliable digital solutions.</em></h2>
              <p className="about-text">SV Designs provides printing and digital services for individuals, families, students and businesses in and around Pollachi. Contact us to discuss what you need and how we can help.</p>
              <a className="text-link" href="#contact">Talk to our team ↗</a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow dark">GET IN TOUCH</p>
              <h2>Have a service<br />in mind?</h2>
              <p>Call us or send a WhatsApp message. We’ll help you with the next step.</p>
              <div className="contact-details">
                {phoneNumbers.map((phone) => <a key={phone} href={`tel:${phone}`} className="contact-line"><span>☎</span><strong>{phone}</strong><small>Call now ↗</small></a>)}
                <div className="contact-line address-line"><span>⌖</span><div><strong>Visit SV Designs</strong><small>3/174 Selva Lakshmi Nagar, Makkinampatti,<br />Pollachi – 642003, Tamil Nadu</small></div></div>
                <a className="contact-line" href="mailto:svdesignsprinters@gmail.com"><span>✉</span><div><strong>Email us</strong><small>svdesignsprinters@gmail.com</small></div><small>Send email ↗</small></a>
                <a className="contact-line" href="https://www.instagram.com/svprinters_pollachi/" target="_blank" rel="noreferrer"><span>◎</span><div><strong>Instagram</strong><small>@svprinters_pollachi</small></div><small>View profile ↗</small></a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={sendWhatsApp}>
              <h3>Send an enquiry</h3>
              <p>Fill in the details and continue in WhatsApp.</p>
              <label htmlFor="customer-name">Your name</label>
              <input id="customer-name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter your name" />
              <label htmlFor="service">Service you need</label>
              <select id="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                <option>General enquiry</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
              <label htmlFor="message">Your message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you need..." rows="4" />
              <button className="button button-maroon" type="submit">Continue on WhatsApp ↗</button>
              <small className="form-note">This opens WhatsApp with your enquiry ready to send.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">SV <span>DESIGNS</span></a>
          <p>Quality Printing · Digital Solutions · Fast Service<br /><a href="mailto:svdesignsprinters@gmail.com">svdesignsprinters@gmail.com</a> · <a href="https://www.instagram.com/svprinters_pollachi/" target="_blank" rel="noreferrer">Instagram @svprinters_pollachi</a></p>
          <a href="#home" className="back-top">Back to top ↑</a>
          <small>© {new Date().getFullYear()} SV Designs. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default App;