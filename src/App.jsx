import { useState } from 'react';
import './App.css';

const services = [
  { number: '01', title: 'Limpieza dental', text: 'Prevención y cuidado profundo para que tu sonrisa se mantenga sana y luminosa.', icon: '✦' },
  { number: '02', title: 'Blanqueamiento', text: 'Tratamientos seguros y personalizados para recuperar el brillo natural de tus dientes.', icon: '✧' },
  { number: '03', title: 'Ortodoncia', text: 'Alineación funcional y estética con un plan pensado para tu ritmo de vida.', icon: '⌁' },
  { number: '04', title: 'Urgencias', text: 'Te acompañamos cuando más lo necesitás, todos los días, incluso fuera de horario.', icon: '+' },
];

const faqs = [
  ['¿Atienden urgencias fuera de horario?', 'Sí. Las urgencias se atienden todos los días, incluso fuera del horario habitual. Llamá al número de guardia para recibir indicaciones y coordinar tu atención.'],
  ['¿Atienden a niños?', 'Atendemos pacientes desde los 12 años. Las urgencias pediátricas de menores de 12 años se derivan al Hospital Pediátrico más cercano.'],
  ['¿Cómo puedo reservar una consulta?', 'Podés escribirnos por WhatsApp o completar el formulario de contacto. Nuestro equipo te responde para encontrar el horario más conveniente.'],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="topline"><div className="container top-line-content"><span><i className="status-dot" /> Agenda abierta esta semana</span><a href="tel:+59829001234">Guardia 24 h <strong>+598 2900 1234</strong></a></div></div>
      <header className="navbar container">
        <a className="brand" href="#inicio" aria-label="Sonrisa Uruguaya, inicio"><span className="brand-mark">SU</span><span><strong>sonrisa</strong><small>uruguaya</small></span></a>
        <button className="menu-toggle" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a><a href="#clinica" onClick={() => setMenuOpen(false)}>La clínica</a><a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a><a className="button button-small" href="#contacto" onClick={() => setMenuOpen(false)}>Reservar consulta <ArrowIcon /></a></nav>
      </header>

      <main>
        <section className="hero container" id="inicio"><div className="hero-copy"><p className="eyebrow"><span /> Clínica dental · Montevideo</p><h1>Una sonrisa que<br /><em>te representa.</em></h1><p className="hero-intro">Cuidamos tu salud bucal con una mirada cercana, clara y humana. Tu próxima visita puede empezar hoy.</p><div className="hero-actions"><a className="button" href="#contacto">Agendar mi consulta <ArrowIcon /></a><a className="text-link" href="tel:+59829001234">¿Es una urgencia? <strong>Llamá a la guardia</strong></a></div><div className="hero-note"><span className="note-icon">✓</span><span><strong>Atención sin apuro</strong><br />Te explicamos cada paso antes de empezar.</span></div></div><div className="hero-visual"><div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85" alt="Paciente sonriendo durante una consulta dental" /></div><div className="float-card float-card-rating"><span className="stars">★★★★★</span><strong>4.9 / 5</strong><small>experiencia de pacientes</small></div><div className="float-card float-card-hours"><span className="clock-icon">◷</span><span><strong>Hoy estamos</strong><small>09:00 — 18:00 h</small></span></div><span className="circle-stamp">DESDE<br /><b>2012</b></span></div></section>

        <section className="trust-bar"><div className="container trust-items"><span>Odontología con propósito</span><i /><span>Profesionales certificados</span><i /><span>En el corazón de Montevideo</span></div></section>

        <section className="section services-section container" id="servicios"><div className="section-heading"><div><p className="eyebrow">Lo que hacemos</p><h2>Todo empieza<br /><em>por sentirte bien.</em></h2></div><p className="heading-aside">Soluciones pensadas para acompañarte en cada etapa, con tecnología, experiencia y un trato que se siente.</p></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contacto" aria-label={`Conocer más sobre ${service.title}`}><ArrowIcon /></a></article>)}</div></section>

        <section className="story-section" id="clinica"><div className="container story-grid"><div className="story-image"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" alt="Interior luminoso de la clínica dental" /><span className="image-label">Un espacio<br /><em>para vos</em></span></div><div className="story-copy"><p className="eyebrow">Nuestra forma de cuidar</p><h2>La confianza también<br /><em>se construye.</em></h2><p>Sabemos que venir al dentista puede generar preguntas. Por eso creamos un espacio donde podés hablar, entender y decidir con tranquilidad.</p><p>Estamos en Montevideo desde 2012, construyendo vínculos duraderos con cada paciente y celebrando cada avance, grande o pequeño.</p><a className="underlined-link" href="#contacto">Conocé nuestra clínica <ArrowIcon /></a><div className="signature">Con cariño,<br /><b>Equipo Sonrisa Uruguaya</b></div></div></div></section>

        <section className="schedule-section container"><div className="schedule-card"><div><p className="eyebrow">Horarios de atención</p><h2>Estamos cuando<br /><em>nos necesitás.</em></h2></div><div className="hours-list"><div><span>Lunes a viernes</span><strong>09:00 — 18:00</strong></div><div><span>Sábados</span><strong>09:00 — 13:00</strong></div><div className="emergency-row"><span><i className="status-dot" /> Urgencias</span><strong>Todos los días · 24 h</strong></div></div><a className="button button-light" href="tel:+59829001234">Llamar a la guardia <ArrowIcon /></a></div></section>

        <section className="faq-section container" id="preguntas"><div className="faq-heading"><p className="eyebrow">Antes de venir</p><h2>Preguntas<br /><em>frecuentes.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="contact-section container" id="contacto"><div className="contact-card"><div><p className="eyebrow">Tu próxima sonrisa</p><h2>Hablemos de<br /><em>lo que necesitás.</em></h2><p>Contanos brevemente cómo podemos ayudarte y te contactamos para coordinar tu visita.</p></div><form onSubmit={(event) => event.preventDefault()}><label>Tu nombre<input type="text" placeholder="¿Cómo te llamás?" required /></label><label>Tu teléfono<input type="tel" placeholder="099 000 000" required /></label><button className="button" type="submit">Quiero que me contacten <ArrowIcon /></button><small>Al enviar, aceptás que te contactemos para coordinar tu consulta.</small></form></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><a className="brand" href="#inicio"><span className="brand-mark">SU</span><span><strong>sonrisa</strong><small>uruguaya</small></span></a><div className="footer-contact"><a href="mailto:hola@sonrisauruguaya.com.uy">hola@sonrisauruguaya.com.uy</a><a href="tel:+59829001234">+598 2900 1234</a></div><p>Montevideo, Uruguay<br />Cuidamos lo que te hace sonreír.</p></div><div className="container footer-bottom"><span>© 2024 Sonrisa Uruguaya</span><span>Hecho con cuidado en Montevideo <span className="heart">♥</span></span></div></footer>
    </div>
  );
}

export default App;
