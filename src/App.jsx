import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState(null)
  const [showBlog, setShowBlog] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleBlog = () => {
    setShowBlog(!showBlog)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setMobileMenuOpen(false)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setShowBlog(false)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formular gesendet:', formData)
    alert('Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const BlogPage = () => (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1>Blog & Tipps</h1>
          <p>Nützliche Informationen und Tipps für Hundebesitzer</p>
        </div>
      </div>
      
      <section className="blog">
        <div className="container">
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">🧴</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">15. Januar 2024</span>
                <h3>Wie pflege ich das Fell meines Hundes zu Hause?</h3>
                <p>
                  Regelmäßige Fellpflege ist die Grundlage für die Gesundheit Ihres Lieblings. Hier sind einige einfache Schritte, 
                  die Sie täglich zwischen den Groomer-Besuchen durchführen können...
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">✨</span>
                    <span>Täglich bürsten, um Verfilzungen zu vermeiden</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">💧</span>
                    <span>Verwenden Sie spezielle Hundeshampoos</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🔄</span>
                    <span>Prüfen Sie regelmäßig den Hautzustand unter dem Fell</span>
                  </div>
                </div>
                <button className="read-more-btn">Mehr lesen</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">✂️</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">8. Januar 2024</span>
                <h3>Warum lohnt es sich, regelmäßig zum Groomer zu gehen?</h3>
                <p>
                  Professionelle Pflege ist nicht nur eine Frage der Ästhetik. Es ist vor allem die Sorge 
                  um die Gesundheit und den Komfort Ihres vierbeinigen Freundes...
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🏥</span>
                    <span>Frühe Erkennung von Hautproblemen</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🦷</span>
                    <span>Kontrolle von Ohren und Krallen</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">😌</span>
                    <span>Reduzierung von pflegebedingtem Stress</span>
                  </div>
                </div>
                <button className="read-more-btn">Mehr lesen</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">🌡️</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">2. Januar 2024</span>
                <h3>Hundepflege im Winter - praktische Tipps</h3>
                <p>
                  Die Wintermonate erfordern besondere Aufmerksamkeit für das Fell und die Pfoten unserer Lieblinge. 
                  Niedrige Temperaturen und Streusalz können eine Herausforderung sein...
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🥾</span>
                    <span>Schützen Sie die Pfoten vor Salz und Eis</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🧥</span>
                    <span>Kurzhaarige Hunde brauchen Wärme</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">💨</span>
                    <span>Vermeiden Sie zu häufiges Baden im Winter</span>
                  </div>
                </div>
                <button className="read-more-btn">Mehr lesen</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">🐕‍🦺</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">28. Dezember 2023</span>
                <h3>Wie bereite ich einen Welpen auf den ersten Besuch vor?</h3>
                <p>
                  Der erste Groomer-Besuch ist ein wichtiger Moment im Leben eines Welpen. Die richtige Vorbereitung 
                  hilft ihm, sich sicher und selbstbewusst zu fühlen...
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🎯</span>
                    <span>Gewöhnen Sie ihn schrittweise an Pfoten-Berührungen</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🔊</span>
                    <span>Gewöhnen Sie ihn an Scherengeräusche</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🍖</span>
                    <span>Verwenden Sie positive Assoziationen und Leckerlis</span>
                  </div>
                </div>
                <button className="read-more-btn">Mehr lesen</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )

  if (currentPage === 'blog') {
    return (
      <div className="app overflow-x-hidden">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <button onClick={() => navigateToPage('home')} className="logo-btn">
                <span className="logo-icon">🐾</span>
                <span className="logo-text">Ania Groomer</span>
              </button>
            </div>
            
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            
            <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><button onClick={() => navigateToPage('home')} className="nav-link">← Zurück zur Hauptseite</button></li>
            </ul>
          </div>
        </nav>
        <BlogPage />
      </div>
    )
  }

  return (
    <div className="app overflow-x-hidden">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <button onClick={() => navigateToPage('home')} className="logo-btn">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">Ania Groomer</span>
            </button>
          </div>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">Start</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">Über mich</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav-link">Galerie</button></li>
            <li><button onClick={() => scrollToSection('reviews')} className="nav-link">Bewertungen</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="nav-link">Preise</button></li>
            <li><button onClick={() => scrollToSection('process')} className="nav-link">Ablauf</button></li>
            <li className="nav-dropdown">
              <button onClick={toggleBlog} className="nav-link dropdown-toggle">
                Mehr <span className={`dropdown-arrow ${showBlog ? 'open' : ''}`}>▼</span>
              </button>
              {showBlog && (
                <ul className="dropdown-menu">
                  <li><button onClick={() => navigateToPage('blog')} className="nav-link">Blog & Tipps</button></li>
                  <li><button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button></li>
                </ul>
              )}
            </li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link nav-cta">Kontakt</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero overflow-hidden">
        <div className="hero-content max-w-full">
          <div className="hero-text">
            <h1>
              <span className="paw-icon">🐾</span>
              Ania – Professioneller Hundefriseur
              <span className="paw-icon">🐾</span>
            </h1>
            <p>Ihr Liebling verdient die beste Pflege und professionelle Betreuung</p>
            <button className="cta-button">
              <span className="scissors-icon">✂️</span>
              Termin vereinbaren
            </button>
          </div>
          <div className="hero-image">
            <img src="/img/ZdjęcieAni.png" alt="Ania - professioneller Hundefriseur" className="hero-photo" />
          </div>
        </div>
      </header>

      {/* Über mich Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Über mich</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hallo! Ich bin Ania und beschäftige mich seit Jahren leidenschaftlich mit der 
                professionellen Hundepflege. Jeder Liebling ist für mich ein besonderer Kunde, 
                dessen Komfort und Sicherheit für mich oberste Priorität haben.
              </p>
              <p>
                Meine Erfahrung und Liebe zu Tieren ermöglichen es mir, Ihrem vierbeinigen 
                Freund nicht nur ein schönes Aussehen zu verleihen, sondern auch Entspannung 
                und ein angenehmes Erlebnis während der Behandlung zu bieten.
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">❤️</span>
                  <span>Liebe zu Hunden</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎓</span>
                  <span>Professionelle Erfahrung</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🛡️</span>
                  <span>Sicherheit an erster Stelle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Vorher-Nachher Galerie</h2>
          <p className="gallery-subtitle">Sehen Sie, wie Ihr Liebling nach einem Besuch bei mir aussehen kann</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/img/przed-Po/Jack_russell_terrier_przed_po.jpg" alt="Jack Russell Terrier - Vorher und Nachher" />
              <div className="gallery-overlay">
                <span>Jack Russell Terrier</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/Yorkshire_Groomer_Warszawa_psi_fryzjer.jpg" alt="Yorkshire Terrier" />
              <div className="gallery-overlay">
                <span>Yorkshire Terrier</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/Psi_Fryzjer_Fiumi_Gdansk_Wrzeszcz.webp" alt="Professionelle Hundepflege" />
              <div className="gallery-overlay">
                <span>Professionelle Pflege</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/fryzjer_03.jpg" alt="Stilvolle Frisur für Hunde" />
              <div className="gallery-overlay">
                <span>Stilvolle Frisur</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/unnamed (1).jpg" alt="Hund nach dem Grooming" />
              <div className="gallery-overlay">
                <span>Schönes Ergebnis</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/unnamed.jpg" alt="Gepflegter Hund" />
              <div className="gallery-overlay">
                <span>Zufriedener Kunde</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <h2>Was meine Kunden sagen</h2>
          <div className="reviews-grid">
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Ania ist eine echte Profi! Mein Burek hat noch nie so schön ausgesehen. Man sieht, dass Ania liebt, was sie tut."</p>
                <div className="review-author">
                  <strong>- Maria K.</strong>
                  <span>Besitzerin eines Golden Retrievers</span>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Fantastischer Umgang mit Tieren. Meine Zuzia, die normalerweise Angst vor Fremden hat, mochte Ania sofort. Von ganzem Herzen empfehlenswert!"</p>
                <div className="review-author">
                  <strong>- Thomas W.</strong>
                  <span>Besitzer eines Yorkshire Terriers</span>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Professionalität auf höchstem Niveau. Rex kommt immer ruhig und wunderbar duftend von Anias Besuch zurück. Sehr empfehlenswert!"</p>
                <div className="review-author">
                  <strong>- Anna P.</strong>
                  <span>Besitzerin eines Labradors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Preisliste</h2>
          <div className="pricing-table">
            <div className="pricing-item">
              <h3>Baden & Trocknen</h3>
              <div className="price">ab 40 €</div>
              <ul>
                <li>Baden mit professionellen Produkten</li>
                <li>Trocknen und Kämmen</li>
                <li>Ohrenreinigung</li>
                <li>Krallenschneiden</li>
              </ul>
            </div>
            <div className="pricing-item featured">
              <div className="popular-badge">Am beliebtesten</div>
              <h3>Vollpflege</h3>
              <div className="price">ab 80 €</div>
              <ul>
                <li>Alles aus dem Grundpaket</li>
                <li>Schnitt nach Rassestandard</li>
                <li>Frisur-Styling</li>
                <li>Pfotenpflege</li>
                <li>Parfümierung</li>
              </ul>
            </div>
            <div className="pricing-item">
              <h3>Spezialschnitt</h3>
              <div className="price">ab 120 €</div>
              <ul>
                <li>Individuelle Stilberatung</li>
                <li>Ausstellungsschnitt</li>
                <li>Sichere Farbgebung</li>
                <li>Beratung vor der Behandlung</li>
              </ul>
            </div>
          </div>
          <p className="pricing-note">
            <em>Die Preise hängen von Rasse, Größe und Fellzustand des Hundes ab. Den genauen Preis erhalten Sie nach einer Beratung.</em>
          </p>
        </div>
      </section>

      {/* Ablauf Section */}
      <section id="process" className="process">
        <div className="container">
          <h2>Wie läuft ein Besuch ab?</h2>
          <p className="process-subtitle">Einfacher Ablauf in 4 Schritten</p>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">📞</div>
              <h3>Termin vereinbaren</h3>
              <p>
                Rufen Sie an, schreiben Sie eine SMS oder senden Sie eine Nachricht über das Formular. 
                Wir besprechen die Bedürfnisse Ihres Lieblings und vereinbaren einen passenden Termin.
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">🚗</div>
              <h3>Hund mitbringen</h3>
              <p>
                Kommen Sie pünktlich zum vereinbarten Termin. Ihr Hund lernt 
                mich und den Salon kennen, um sich wohl und sicher zu fühlen.
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">✂️</div>
              <h3>Professionelle Pflege</h3>
              <p>
                Professionelle Behandlung: Baden, Schneiden, Krallenpflege 
                und Ohrenreinigung. Alles in entspannter Atmosphäre.
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-icon">🐕</div>
              <h3>Glücklichen Liebling abholen</h3>
              <p>
                Ihr Hund kommt schön, duftend und zufrieden heraus. 
                Sie erhalten auch Tipps für die weitere Pflege.
              </p>
            </div>
          </div>
          
          <div className="process-cta">
            <p>Bereit für einen Besuch?</p>
            <button className="process-btn">
              <span className="heart-icon">💕</span>
              Heute Termin vereinbaren!
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>Häufig gestellte Fragen</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                <span className="faq-icon">❓</span>
                <span>Wie bereite ich meinen Hund auf den Besuch vor?</span>
                <span className={`faq-arrow ${openFaq === 0 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                <p>
                  Am besten baden Sie Ihren Hund vor dem Besuch nicht - professionelle Kosmetika wirken besser auf natürlichem Fell. 
                  Es reicht, wenn Ihr Liebling ruhig und satt ist, einige Stunden vor dem Besuch.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                <span className="faq-icon">⏰</span>
                <span>Wie lange dauert das Schneiden?</span>
                <span className={`faq-arrow ${openFaq === 1 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                <p>
                  Die Behandlungszeit hängt von Rasse und Größe des Hundes ab. Standardschnitt dauert 1-2 Stunden, 
                  vollständiges Grooming kann 2-3 Stunden dauern. Ich arbeite immer ohne Eile, damit sich der Hund wohl fühlt.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                <span className="faq-icon">🐕</span>
                <span>Nehmen Sie aggressive Hunde an?</span>
                <span className={`faq-arrow ${openFaq === 2 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                <p>
                  Jeder Hund verdient Pflege! Ich spezialisiere mich auf die Arbeit mit Hunden verschiedener Temperamente. 
                  Vor dem Besuch führe ich immer eine Beratung durch, um den Ansatz an den Charakter Ihres Lieblings anzupassen.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                <span className="faq-icon">💰</span>
                <span>Kann ich mit Karte bezahlen?</span>
                <span className={`faq-arrow ${openFaq === 3 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                <p>
                  Ja! Ich akzeptiere Zahlungen bar, mit Karte und per Überweisung. Den Preis legen wir immer vor Behandlungsbeginn fest, 
                  ohne versteckte Kosten.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                <span className="faq-icon">📅</span>
                <span>Wie vereinbare ich einen Termin?</span>
                <span className={`faq-arrow ${openFaq === 4 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 4 ? 'open' : ''}`}>
                <p>
                  Am einfachsten rufen Sie an oder schreiben eine SMS/WhatsApp. Sie können auch eine Nachricht über das Kontaktformular senden. 
                  Ich antworte normalerweise innerhalb weniger Stunden und wir finden einen passenden Termin.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
                <span className="faq-icon">🏠</span>
                <span>Bieten Sie Hausbesuche an?</span>
                <span className={`faq-arrow ${openFaq === 5 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 5 ? 'open' : ''}`}>
                <p>
                  In besonderen Situationen kann ich zum Kunden kommen, besonders bei älteren 
                  oder sehr gestressten Hunden. Kontaktieren Sie mich, um die Details zu besprechen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Kontakt</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Kontaktieren Sie mich</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Telefon:</strong>
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>E-Mail:</strong>
                  <a href="mailto:ania@groomer.pl">ania@groomer.pl</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Adresse:</strong>
                  <span>Eichendorffstraße 2, Bad Friedrichshall, Deutschland</span>
                </div>
              </div>
              <div className="social-links">
                <h4>Finden Sie mich in den sozialen Medien:</h4>
                <div className="social-icons">
                  <a href="#" className="social-link facebook">📘 Facebook</a>
                  <a href="#" className="social-link instagram">📷 Instagram</a>
                  <a href="#" className="social-link tiktok">🎵 TikTok</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Schreiben Sie mir</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Vor- und Nachname:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beschreiben Sie Ihren Liebling und welche Dienstleistung Sie interessiert..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <span className="heart-icon">💌</span>
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
          
          {/* Mapa Section */}
          <div className="map-section">
            <h3>Finden Sie mich auf der Karte</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.8936947891856!2d9.20426851573!3d49.13456797932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479826ce8dfafff9%3A0xcb8c8ef88db2e280!2sEichendorffstra%C3%9Fe%202%2C%2074177%20Bad%20Friedrichshall%2C%20Germany!5e0!3m2!1sen!2spl!4v1642598765432!5m2!1sen!2spl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja - Eichendorffstraße 2, Bad Friedrichshall"
              ></iframe>
              <div className="map-overlay">
                <div className="map-info">
                  <span className="map-icon">📍</span>
                  <div>
                    <strong>Eichendorffstraße 2</strong>
                    <span>74177 Bad Friedrichshall, Deutschland</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/dir//Eichendorffstra%C3%9Fe+2,+74177+Bad+Friedrichshall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479826ce8dfafff9:0xcb8c8ef88db2e280?sa=X&ved=1t:707&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    🗺️ Anfahrt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ania - Professioneller Hundefriseur. Alle Rechte vorbehalten.</p>
          <p className="footer-tagline">
            <span className="paw-icon">🐾</span>
            Mit Liebe zu jedem Liebling
            <span className="paw-icon">🐾</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App