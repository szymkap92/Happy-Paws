import { useState, useEffect } from 'react'
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
  const [language, setLanguage] = useState('de') // 'de' for German, 'pl' for Polish

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'pl' : 'de')
  }

  // Translation object
  const translations = {
    de: {
      // Navigation
      start: "Start",
      about: "Über mich",
      gallery: "Metamorfozy",
      reviews: "Bewertungen",
      pricing: "Preise",
      process: "Ablauf",
      more: "Mehr",
      blog: "Blog & Tipps",
      faq: "FAQ",
      contact: "Kontakt",
      backToMain: "← Zurück zur Hauptseite",
      
      // Hero section
      heroTitle: "Ania – Professioneller Hundefriseur",
      heroSubtitle: "Ihr Liebling verdient die beste Pflege und professionelle Betreuung",
      makeAppointment: "Termin vereinbaren",
      
      // About section
      aboutTitle: "Über mich",
      aboutText1: "Hallo! Ich bin Ania und beschäftige mich seit Jahren leidenschaftlich mit der professionellen Hundepflege. Jeder Liebling ist für mich ein besonderer Kunde, dessen Komfort und Sicherheit für mich oberste Priorität haben.",
      aboutText2: "Meine Erfahrung und Liebe zu Tieren ermöglichen es mir, Ihrem vierbeinigen Freund nicht nur ein schönes Aussehen zu verleihen, sondern auch Entspannung und ein angenehmes Erlebnis während der Behandlung zu bieten.",
      loveForDogs: "Liebe zu Hunden",
      professionalExperience: "Professionelle Erfahrung",
      safetyFirst: "Sicherheit an erster Stelle",
      
      // Gallery section
      galleryTitle: "Metamorfozy",
      gallerySubtitle: "Sehen Sie, wie Ihr Liebling nach einem Besuch bei mir aussehen kann",
      seeAllTransformations: "Alle Metamorfozy ansehen",
      collapseGallery: "Galerie einklappen",
      jackRussell: "Jack Russell Terrier",
      yorkshire: "Yorkshire Terrier",
      professionalCare: "Professionelle Pflege",
      stylishCut: "Stilvolle Frisur",
      beautifulResult: "Schönes Ergebnis",
      satisfiedCustomer: "Zufriedener Kunde",
      
      // Reviews section
      reviewsTitle: "Was meine Kunden sagen",
      review1: "\"Ania ist eine echte Profi! Mein Burek hat noch nie so schön ausgesehen. Man sieht, dass Ania liebt, was sie tut.\"",
      review1Author: "- Maria K.",
      review1Subtitle: "Besitzerin eines Golden Retrievers",
      review2: "\"Fantastischer Umgang mit Tieren. Meine Zuzia, die normalerweise Angst vor Fremden hat, mochte Ania sofort. Von ganzem Herzen empfehlenswert!\"",
      review2Author: "- Thomas W.",
      review2Subtitle: "Besitzer eines Yorkshire Terriers",
      review3: "\"Professionalität auf höchstem Niveau. Rex kommt immer ruhig und wunderbar duftend von Anias Besuch zurück. Sehr empfehlenswert!\"",
      review3Author: "- Anna P.",
      review3Subtitle: "Besitzerin eines Labradors",
      
      // Pricing section
      pricingTitle: "Preisliste",
      bathingDrying: "Baden & Trocknen",
      from: "ab",
      bathingServices: ["Baden mit professionellen Produkten", "Trocknen und Kämmen", "Ohrenreinigung", "Krallenschneiden"],
      mostPopular: "Am beliebtesten",
      fullCare: "Vollpflege",
      fullCareServices: ["Alles aus dem Grundpaket", "Schnitt nach Rassestandard", "Frisur-Styling", "Pfotenpflege", "Parfümierung"],
      specialCut: "Spezialschnitt",
      specialServices: ["Individuelle Stilberatung", "Ausstellungsschnitt", "Sichere Farbgebung", "Beratung vor der Behandlung"],
      pricingNote: "Die Preise hängen von Rasse, Größe und Fellzustand des Hundes ab. Den genauen Preis erhalten Sie nach einer Beratung.",
      seeFullOffer: "Vollständiges Angebot ansehen",
      fullPricingTitle: "Vollständiger Preisplan",
      fullPricingSubtitle: "Detaillierte Preise für alle Dienstleistungen",
      smallDogs: "Kleine Hunde",
      smallDogsDesc: "bis 10 kg (Yorkie, Maltipoo, Jack Russell, etc.)",
      mediumDogs: "Mittelgroße Hunde", 
      mediumDogsDesc: "10-25 kg (Cocker Spaniel, Border Collie, etc.)",
      largeDogs: "Große Hunde",
      largeDogsDesc: "über 25 kg (Golden Retriever, Deutscher Schäferhund, etc.)",
      basicBath: "Grundbad",
      basicBathServices: ["Professionelles Bad", "Trocknen und Kämmen", "Ohrenreinigung"],
      fullGrooming: "Vollpflege",
      fullGroomingServices: ["Alles aus dem Grundpaket", "Schnitt nach Standard", "Krallenpflege", "Parfümierung"],
      showGrooming: "Ausstellungsschnitt",
      showGroomingServices: ["Professioneller Ausstellungsschnitt", "Individuelle Beratung", "Premium-Produkte"],
      extraServices: "Zusätzliche Dienstleistungen",
      nailTrim: "Krallenschnitt",
      earCleaning: "Ohrenreinigung", 
      teethCleaning: "Zahnreinigung",
      backToMain: "Zurück zur Hauptseite",
      training: "Schulungen",
      trainingTitle: "Professionelle Hundefriseur-Schulungen",
      trainingSubtitle: "Erlernen Sie die Kunst der professionellen Hundepflege",
      basicGrooming: "Grundkurs Hundepflege",
      basicGroomingDesc: "Perfekt für Anfänger - lernen Sie die Grundlagen der Hundepflege",
      basicGroomingFeatures: ["Grundlagen der Hundepflege", "Sicherheit beim Umgang mit Hunden", "Basiswerkzeuge und deren Verwendung", "Erste Schnitte und Styling", "Praktische Übungen"],
      advancedGrooming: "Fortgeschrittene Techniken",
      advancedGroomingDesc: "Für erfahrene Groomer - erweiterte Techniken und Spezialisierung",
      advancedGroomingFeatures: ["Fortgeschrittene Schnitttechniken", "Rassenspezifische Schnitte", "Ausstellungsschnitte", "Problemlösung bei schwierigen Hunden", "Geschäftsentwicklung"],
      businessTraining: "Geschäftsführung für Groomer",
      businessTrainingDesc: "Lernen Sie, wie Sie Ihr eigenes Grooming-Geschäft führen",
      businessTrainingFeatures: ["Geschäftsplanung und Marketing", "Kundenservice und Kommunikation", "Preisgestaltung und Gewinnoptimierung", "Rechtliche Aspekte", "Online-Präsenz aufbauen"],
      courseDuration: "Kursdauer",
      days: "Tage",
      coursePrice: "Preis",
      enrollNow: "Jetzt anmelden",
      trainingContact: "Kontaktieren Sie uns für weitere Informationen über unsere Schulungen",
      
      // Process section
      processTitle: "Wie läuft ein Besuch ab?",
      processSubtitle: "Einfacher Ablauf in 4 Schritten",
      step1Title: "Termin vereinbaren",
      step1Text: "Rufen Sie an, schreiben Sie eine SMS oder senden Sie eine Nachricht über das Formular. Wir besprechen die Bedürfnisse Ihres Lieblings und vereinbaren einen passenden Termin.",
      step2Title: "Hund mitbringen",
      step2Text: "Kommen Sie pünktlich zum vereinbarten Termin. Ihr Hund lernt mich und den Salon kennen, um sich wohl und sicher zu fühlen.",
      step3Title: "Professionelle Pflege",
      step3Text: "Professionelle Behandlung: Baden, Schneiden, Krallenpflege und Ohrenreinigung. Alles in entspannter Atmosphäre.",
      step4Title: "Glücklichen Liebling abholen",
      step4Text: "Ihr Hund kommt schön, duftend und zufrieden heraus. Sie erhalten auch Tipps für die weitere Pflege.",
      readyForVisit: "Bereit für einen Besuch?",
      makeAppointmentToday: "Heute Termin vereinbaren!",
      
      // FAQ section
      faqTitle: "Häufig gestellte Fragen",
      faq1Q: "Wie bereite ich meinen Hund auf den Besuch vor?",
      faq1A: "Am besten baden Sie Ihren Hund vor dem Besuch nicht - professionelle Kosmetika wirken besser auf natürlichem Fell. Es reicht, wenn Ihr Liebling ruhig und satt ist, einige Stunden vor dem Besuch.",
      faq2Q: "Wie lange dauert das Schneiden?",
      faq2A: "Die Behandlungszeit hängt von Rasse und Größe des Hundes ab. Standardschnitt dauert 1-2 Stunden, vollständiges Grooming kann 2-3 Stunden dauern. Ich arbeite immer ohne Eile, damit sich der Hund wohl fühlt.",
      faq3Q: "Nehmen Sie aggressive Hunde an?",
      faq3A: "Jeder Hund verdient Pflege! Ich spezialisiere mich auf die Arbeit mit Hunden verschiedener Temperamente. Vor dem Besuch führe ich immer eine Beratung durch, um den Ansatz an den Charakter Ihres Lieblings anzupassen.",
      faq4Q: "Kann ich mit Karte bezahlen?",
      faq4A: "Ja! Ich akzeptiere Zahlungen bar, mit Karte und per Überweisung. Den Preis legen wir immer vor Behandlungsbeginn fest, ohne versteckte Kosten.",
      faq5Q: "Wie vereinbare ich einen Termin?",
      faq5A: "Am einfachsten rufen Sie an oder schreiben eine SMS/WhatsApp. Sie können auch eine Nachricht über das Kontaktformular senden. Ich antworte normalerweise innerhalb weniger Stunden und wir finden einen passenden Termin.",
      faq6Q: "Bieten Sie Hausbesuche an?",
      faq6A: "In besonderen Situationen kann ich zum Kunden kommen, besonders bei älteren oder sehr gestressten Hunden. Kontaktieren Sie mich, um die Details zu besprechen.",
      
      // Contact section
      contactTitle: "Kontakt",
      contactMe: "Kontaktieren Sie mich",
      phone: "Telefon:",
      email: "E-Mail:",
      address: "Adresse:",
      addressText: "Eichendorffstraße 2, Bad Friedrichshall, Deutschland",
      socialMedia: "Finden Sie mich in den sozialen Medien:",
      writeToMe: "Schreiben Sie mir",
      nameLabel: "Vor- und Nachname:",
      emailLabel: "E-Mail:",
      phoneLabel: "Telefon:",
      messageLabel: "Nachricht:",
      messagePlaceholder: "Beschreiben Sie Ihren Liebling und welche Dienstleistung Sie interessiert...",
      sendMessage: "Nachricht senden",
      findOnMap: "Finden Sie mich auf der Karte",
      directions: "🗺️ Anfahrt",
      
      // Footer
      footerCopyright: "© 2024 Ania - Professioneller Hundefriseur. Alle Rechte vorbehalten.",
      footerTagline: "Mit Liebe zu jedem Liebling",
      
      // Blog
      blogTitle: "Blog & Tipps",
      blogSubtitle: "Nützliche Informationen und Tipps für Hundebesitzer",
      readMore: "Mehr lesen",
      
      // Form messages
      formSuccess: "Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.",
      
      // Blog content
      blogPost1Date: "15. Januar 2024",
      blogPost1Title: "Wie pflege ich das Fell meines Hundes zu Hause?",
      blogPost1Content: "Regelmäßige Fellpflege ist die Grundlage für die Gesundheit Ihres Lieblings. Hier sind einige einfache Schritte, die Sie täglich zwischen den Groomer-Besuchen durchführen können...",
      blogPost1Tip1: "Täglich bürsten, um Verfilzungen zu vermeiden",
      blogPost1Tip2: "Verwenden Sie spezielle Hundeshampoos",
      blogPost1Tip3: "Prüfen Sie regelmäßig den Hautzustand unter dem Fell",
      
      blogPost2Date: "8. Januar 2024",
      blogPost2Title: "Warum lohnt es sich, regelmäßig zum Groomer zu gehen?",
      blogPost2Content: "Professionelle Pflege ist nicht nur eine Frage der Ästhetik. Es ist vor allem die Sorge um die Gesundheit und den Komfort Ihres vierbeinigen Freundes...",
      blogPost2Tip1: "Frühe Erkennung von Hautproblemen",
      blogPost2Tip2: "Kontrolle von Ohren und Krallen",
      blogPost2Tip3: "Reduzierung von pflegebedingtem Stress",
      
      blogPost3Date: "2. Januar 2024",
      blogPost3Title: "Hundepflege im Winter - praktische Tipps",
      blogPost3Content: "Die Wintermonate erfordern besondere Aufmerksamkeit für das Fell und die Pfoten unserer Lieblinge. Niedrige Temperaturen und Streusalz können eine Herausforderung sein...",
      blogPost3Tip1: "Schützen Sie die Pfoten vor Salz und Eis",
      blogPost3Tip2: "Kurzhaarige Hunde brauchen Wärme",
      blogPost3Tip3: "Vermeiden Sie zu häufiges Baden im Winter",
      
      blogPost4Date: "28. Dezember 2023",
      blogPost4Title: "Wie bereite ich einen Welpen auf den ersten Besuch vor?",
      blogPost4Content: "Der erste Groomer-Besuch ist ein wichtiger Moment im Leben eines Welpen. Die richtige Vorbereitung hilft ihm, sich sicher und selbstbewusst zu fühlen...",
      blogPost4Tip1: "Gewöhnen Sie ihn schrittweise an Pfoten-Berührungen",
      blogPost4Tip2: "Gewöhnen Sie ihn an Scherengeräusche",
      blogPost4Tip3: "Verwenden Sie positive Assoziationen und Leckerlis",
    },
    pl: {
      // Navigation
      start: "Start",
      about: "O mnie",
      gallery: "Metamorfozy",
      reviews: "Opinie",
      pricing: "Cennik",
      process: "Przebieg",
      more: "Więcej",
      blog: "Blog i Porady",
      faq: "FAQ",
      contact: "Kontakt",
      backToMain: "← Powrót do strony głównej",
      
      // Hero section
      heroTitle: "Ania – Profesjonalny fryzjer dla psów",
      heroSubtitle: "Twój pupil zasługuje na najlepszą pielęgnację i profesjonalną opiekę",
      makeAppointment: "Umów wizytę",
      
      // About section
      aboutTitle: "O mnie",
      aboutText1: "Cześć! Jestem Ania i od lat z pasją zajmuję się profesjonalną pielęgnacją psów. Każdy pupil to dla mnie wyjątkowy klient, którego komfort i bezpieczeństwo są dla mnie najważniejsze.",
      aboutText2: "Moje doświadczenie i miłość do zwierząt pozwalają mi zapewnić Twojemu czworonożnemu przyjacielowi nie tylko piękny wygląd, ale także relaks i przyjemne doświadczenie podczas zabiegu.",
      loveForDogs: "Miłość do psów",
      professionalExperience: "Profesjonalne doświadczenie",
      safetyFirst: "Bezpieczeństwo na pierwszym miejscu",
      
      // Gallery section
      galleryTitle: "Metamorfozy",
      gallerySubtitle: "Zobacz, jak może wyglądać Twój pupil po wizycie u mnie",
      seeAllTransformations: "Zobacz wszystkie metamorfozy",
      collapseGallery: "Zwiń galerię",
      jackRussell: "Jack Russell Terrier",
      yorkshire: "Yorkshire Terrier",
      professionalCare: "Profesjonalna pielęgnacja",
      stylishCut: "Stylowa fryzura",
      beautifulResult: "Piękny rezultat",
      satisfiedCustomer: "Zadowolony klient",
      
      // Reviews section
      reviewsTitle: "Co mówią moi klienci",
      review1: "\"Ania to prawdziwy profesjonalista! Mój Burek nigdy nie wyglądał tak pięknie. Widać, że Ania kocha to, co robi.\"",
      review1Author: "- Maria K.",
      review1Subtitle: "Właścicielka Golden Retrievera",
      review2: "\"Fantastyczne podejście do zwierząt. Moja Zuzia, która zwykle boi się obcych, od razu polubiła Anię. Polecam z całego serca!\"",
      review2Author: "- Tomasz W.",
      review2Subtitle: "Właściciel Yorkshire Terriera",
      review3: "\"Profesjonalizm na najwyższym poziomie. Rex zawsze wraca spokojny i pięknie pachnący z wizyty u Ani. Bardzo polecam!\"",
      review3Author: "- Anna P.",
      review3Subtitle: "Właścicielka Labradora",
      
      // Pricing section
      pricingTitle: "Cennik",
      bathingDrying: "Kąpiel i suszenie",
      from: "od",
      bathingServices: ["Kąpiel profesjonalnymi produktami", "Suszenie i rozczesywanie", "Czyszczenie uszu", "Obcinanie pazurów"],
      mostPopular: "Najpopularniejsze",
      fullCare: "Pełna pielęgnacja",
      fullCareServices: ["Wszystko z pakietu podstawowego", "Strzyżenie według standardu rasy", "Stylizacja fryzury", "Pielęgnacja łapek", "Perfumowanie"],
      specialCut: "Strzyżenie specjalne",
      specialServices: ["Indywidualna konsultacja stylistyczna", "Strzyżenie wystawowe", "Bezpieczne kolorowanie", "Konsultacja przed zabiegiem"],
      pricingNote: "Ceny zależą od rasy, wielkości i stanu sierści psa. Dokładną cenę otrzymasz po konsultacji.",
      seeFullOffer: "Zobacz Pełną Ofertę",
      fullPricingTitle: "Pełny Cennik",
      fullPricingSubtitle: "Szczegółowe ceny wszystkich usług",
      smallDogs: "Małe Pieski",
      smallDogsDesc: "do 10 kg (York, Maltipoo, Jack Russell, itp.)",
      mediumDogs: "Średnie Pieski", 
      mediumDogsDesc: "10-25 kg (Cocker Spaniel, Border Collie, itp.)",
      largeDogs: "Duże Pieski",
      largeDogsDesc: "powyżej 25 kg (Golden Retriever, Owczarek Niemiecki, itp.)",
      basicBath: "Podstawowa Kąpiel",
      basicBathServices: ["Profesjonalna kąpiel", "Suszenie i rozczesywanie", "Czyszczenie uszu"],
      fullGrooming: "Pełna Pielęgnacja",
      fullGroomingServices: ["Wszystko z pakietu podstawowego", "Strzyżenie według standardu", "Pielęgnacja pazurów", "Perfumowanie"],
      showGrooming: "Strzyżenie Wystawowe",
      showGroomingServices: ["Profesjonalne strzyżenie wystawowe", "Indywidualna konsultacja", "Produkty premium"],
      extraServices: "Usługi Dodatkowe",
      nailTrim: "Obcinanie Pazurków",
      earCleaning: "Czyszczenie Uszek", 
      teethCleaning: "Czyszczenie Zębów",
      backToMain: "Powrót do Strony Głównej",
      training: "Szkolenia",
      trainingTitle: "Profesjonalne Szkolenia dla Groomerów",
      trainingSubtitle: "Naucz się sztuki profesjonalnej pielęgnacji psów",
      basicGrooming: "Kurs Podstawowy",
      basicGroomingDesc: "Idealny dla początkujących - poznaj podstawy pielęgnacji psów",
      basicGroomingFeatures: ["Podstawy pielęgnacji psów", "Bezpieczeństwo w pracy z psami", "Podstawowe narzędzia i ich użycie", "Pierwsze strzyżenia i stylizacje", "Praktyczne ćwiczenia"],
      advancedGrooming: "Techniki Zaawansowane",
      advancedGroomingDesc: "Dla doświadczonych groomerów - zaawansowane techniki i specjalizacja",
      advancedGroomingFeatures: ["Zaawansowane techniki strzyżenia", "Strzyżenia rasowe", "Strzyżenia wystawowe", "Rozwiązywanie problemów z trudnymi psami", "Rozwój biznesu"],
      businessTraining: "Prowadzenie Biznesu Groomerskiego",
      businessTrainingDesc: "Naucz się, jak prowadzić własny salon groomerski",
      businessTrainingFeatures: ["Planowanie biznesu i marketing", "Obsługa klienta i komunikacja", "Ustalanie cen i optymalizacja zysków", "Aspekty prawne", "Budowanie obecności online"],
      courseDuration: "Czas trwania kursu",
      days: "dni",
      coursePrice: "Cena",
      enrollNow: "Zapisz się teraz",
      trainingContact: "Skontaktuj się z nami, aby uzyskać więcej informacji o naszych szkoleniach",
      
      // Process section
      processTitle: "Jak przebiega wizyta?",
      processSubtitle: "Prosty proces w 4 krokach",
      step1Title: "Umówienie wizyty",
      step1Text: "Zadzwoń, napisz SMS lub wyślij wiadomość przez formularz. Omówimy potrzeby Twojego pupila i ustalimy odpowiedni termin.",
      step2Title: "Przyprowadzenie psa",
      step2Text: "Przyjdź punktualnie na umówiony termin. Twój pies pozna mnie i salon, aby poczuć się komfortowo i bezpiecznie.",
      step3Title: "Profesjonalna pielęgnacja",
      step3Text: "Profesjonalny zabieg: kąpiel, strzyżenie, pielęgnacja pazurów i czyszczenie uszu. Wszystko w spokojnej atmosferze.",
      step4Title: "Odebranie szczęśliwego pupila",
      step4Text: "Twój pies wychodzi piękny, pachnący i zadowolony. Otrzymasz też porady dotyczące dalszej pielęgnacji.",
      readyForVisit: "Gotowy na wizytę?",
      makeAppointmentToday: "Umów się już dziś!",
      
      // FAQ section
      faqTitle: "Najczęściej zadawane pytania",
      faq1Q: "Jak przygotować psa na wizytę?",
      faq1A: "Najlepiej nie kąpać psa przed wizytą - profesjonalne kosmetyki działają lepiej na naturalnej sierści. Wystarczy, żeby Twój pupil był spokojny i najedzony, kilka godzin przed wizytą.",
      faq2Q: "Jak długo trwa strzyżenie?",
      faq2A: "Czas zabiegu zależy od rasy i wielkości psa. Standardowe strzyżenie trwa 1-2 godziny, pełny grooming może potrwać 2-3 godziny. Zawsze pracuję bez pośpiechu, żeby pies czuł się komfortowo.",
      faq3Q: "Czy przyjmujecie agresywne psy?",
      faq3A: "Każdy pies zasługuje na pielęgnację! Specjalizuję się w pracy z psami o różnych temperamentach. Przed wizytą zawsze przeprowadzam konsultację, aby dostosować podejście do charakteru Twojego pupila.",
      faq4Q: "Czy można płacić kartą?",
      faq4A: "Tak! Akceptuję płatności gotówką, kartą i przelewem. Cenę zawsze ustalamy przed rozpoczęciem zabiegu, bez ukrytych kosztów.",
      faq5Q: "Jak umówić wizytę?",
      faq5A: "Najprościej zadzwonić lub napisać SMS/WhatsApp. Możesz też wysłać wiadomość przez formularz kontaktowy. Zwykle odpowiadam w ciągu kilku godzin i znajdziemy odpowiedni termin.",
      faq6Q: "Czy oferujecie wizyty domowe?",
      faq6A: "W szczególnych sytuacjach mogę przyjechać do klienta, szczególnie w przypadku starszych lub bardzo zestresowanych psów. Skontaktuj się ze mną, aby omówić szczegóły.",
      
      // Contact section
      contactTitle: "Kontakt",
      contactMe: "Skontaktuj się ze mną",
      phone: "Telefon:",
      email: "E-mail:",
      address: "Adres:",
      addressText: "Eichendorffstraße 2, Bad Friedrichshall, Niemcy",
      socialMedia: "Znajdź mnie w mediach społecznościowych:",
      writeToMe: "Napisz do mnie",
      nameLabel: "Imię i nazwisko:",
      emailLabel: "E-mail:",
      phoneLabel: "Telefon:",
      messageLabel: "Wiadomość:",
      messagePlaceholder: "Opisz swojego pupila i jaką usługę Cię interesuje...",
      sendMessage: "Wyślij wiadomość",
      findOnMap: "Znajdź mnie na mapie",
      directions: "🗺️ Dojazd",
      
      // Footer
      footerCopyright: "© 2024 Ania - Profesjonalny fryzjer dla psów. Wszelkie prawa zastrzeżone.",
      footerTagline: "Z miłością do każdego pupila",
      
      // Blog
      blogTitle: "Blog i Porady",
      blogSubtitle: "Przydatne informacje i porady dla właścicieli psów",
      readMore: "Czytaj więcej",
      
      // Form messages
      formSuccess: "Dziękuję za wiadomość! Odezwę się wkrótce.",
      
      // Blog content
      blogPost1Date: "15 stycznia 2024",
      blogPost1Title: "Jak pielęgnować sierść psa w domu?",
      blogPost1Content: "Regularna pielęgnacja sierści to podstawa zdrowia Twojego pupila. Oto kilka prostych kroków, które możesz wykonywać codziennie między wizytami u groomera...",
      blogPost1Tip1: "Codzienne szczotkowanie, aby uniknąć kołtunów",
      blogPost1Tip2: "Używaj specjalnych szamponów dla psów",
      blogPost1Tip3: "Regularnie sprawdzaj stan skóry pod sierścią",
      
      blogPost2Date: "8 stycznia 2024",
      blogPost2Title: "Dlaczego warto regularnie chodzić do groomera?",
      blogPost2Content: "Profesjonalna pielęgnacja to nie tylko kwestia estetyki. To przede wszystkim troska o zdrowie i komfort Twojego czworonożnego przyjaciela...",
      blogPost2Tip1: "Wczesne wykrywanie problemów skórnych",
      blogPost2Tip2: "Kontrola uszu i pazurów",
      blogPost2Tip3: "Zmniejszenie stresu związanego z pielęgnacją",
      
      blogPost3Date: "2 stycznia 2024",
      blogPost3Title: "Pielęgnacja psa zimą - praktyczne porady",
      blogPost3Content: "Miesiące zimowe wymagają szczególnej uwagi na sierść i łapki naszych pupili. Niskie temperatury i sól drogowa mogą stanowić wyzwanie...",
      blogPost3Tip1: "Chroń łapki przed solą i lodem",
      blogPost3Tip2: "Krótkowłose psy potrzebują ciepła",
      blogPost3Tip3: "Unikaj zbyt częstego kąpania zimą",
      
      blogPost4Date: "28 grudnia 2023",
      blogPost4Title: "Jak przygotować szczeniaka na pierwszą wizytę?",
      blogPost4Content: "Pierwsza wizyta u groomera to ważny moment w życiu szczeniaka. Odpowiednie przygotowanie pomoże mu poczuć się bezpiecznie i pewnie...",
      blogPost4Tip1: "Stopniowo przyzwyczajaj go do dotykania łapek",
      blogPost4Tip2: "Przyzwyczajaj go do dźwięku nożyczek",
      blogPost4Tip3: "Używaj pozytywnych skojarzeń i smakołyków",
    }
  }

  const t = (key) => translations[language][key] || key
  
  // Helper function to format prices based on language
  const formatPrice = (euroPrice) => {
    if (language === 'pl') {
      const zlPrice = euroPrice * 4
      return `${zlPrice}zł`
    }
    return `${euroPrice}€`
  }
  
  const formatPriceRange = (euroMin, euroMax) => {
    if (language === 'pl') {
      const zlMin = euroMin * 4
      const zlMax = euroMax * 4
      return `${zlMin}-${zlMax}zł`
    }
    return `${euroMin}-${euroMax}€`
  }

  // Update HTML lang attribute when language changes
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = language
    
    // Update title based on language
    const title = language === 'de' 
      ? 'Ania - Professioneller Hundefriseur | Hundepflege Deutschland'
      : 'Ania - Profesjonalny fryzjer dla psów | Pielęgnacja psów Niemcy'
    document.title = title
  }, [language])

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
    alert(t('formSuccess'))
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const GalleryPage = () => (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>{t('galleryTitle')}</h1>
          <p>{t('gallerySubtitle')}</p>
        </div>
      </div>
      
      <section className="gallery-full-page">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/img/przed-Po/Jack_russell_terrier_przed_po.jpg" alt="Jack Russell Terrier - Vorher und Nachher" />
              <div className="gallery-overlay">
                <span>{t('jackRussell')}</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/Yorkshire_Groomer_Warszawa_psi_fryzjer.jpg" alt="Yorkshire Terrier" />
              <div className="gallery-overlay">
                <span>{t('yorkshire')}</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/Psi_Fryzjer_Fiumi_Gdansk_Wrzeszcz.webp" alt="Professionelle Hundepflege" />
              <div className="gallery-overlay">
                <span>{t('professionalCare')}</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/fryzjer_03.jpg" alt="Stilvolle Frisur für Hunde" />
              <div className="gallery-overlay">
                <span>{t('stylishCut')}</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/unnamed (1).jpg" alt="Hund nach dem Grooming" />
              <div className="gallery-overlay">
                <span>{t('beautifulResult')}</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/img/przed-Po/unnamed.jpg" alt="Gepflegter Hund" />
              <div className="gallery-overlay">
                <span>{t('satisfiedCustomer')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const BlogPage = () => (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1>{t('blogTitle')}</h1>
          <p>{t('blogSubtitle')}</p>
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
                <span className="blog-date">{t('blogPost1Date')}</span>
                <h3>{t('blogPost1Title')}</h3>
                <p>
                  {t('blogPost1Content')}
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">✨</span>
                    <span>{t('blogPost1Tip1')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">💧</span>
                    <span>{t('blogPost1Tip2')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🔄</span>
                    <span>{t('blogPost1Tip3')}</span>
                  </div>
                </div>
                <button className="read-more-btn">{t('readMore')}</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">✂️</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{t('blogPost2Date')}</span>
                <h3>{t('blogPost2Title')}</h3>
                <p>
                  {t('blogPost2Content')}
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🏥</span>
                    <span>{t('blogPost2Tip1')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🦷</span>
                    <span>{t('blogPost2Tip2')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">😌</span>
                    <span>{t('blogPost2Tip3')}</span>
                  </div>
                </div>
                <button className="read-more-btn">{t('readMore')}</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">🌡️</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{t('blogPost3Date')}</span>
                <h3>{t('blogPost3Title')}</h3>
                <p>
                  {t('blogPost3Content')}
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🥾</span>
                    <span>{t('blogPost3Tip1')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🧥</span>
                    <span>{t('blogPost3Tip2')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">💨</span>
                    <span>{t('blogPost3Tip3')}</span>
                  </div>
                </div>
                <button className="read-more-btn">{t('readMore')}</button>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">🐕‍🦺</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{t('blogPost4Date')}</span>
                <h3>{t('blogPost4Title')}</h3>
                <p>
                  {t('blogPost4Content')}
                </p>
                <div className="blog-tips">
                  <div className="tip">
                    <span className="tip-icon">🎯</span>
                    <span>{t('blogPost4Tip1')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🔊</span>
                    <span>{t('blogPost4Tip2')}</span>
                  </div>
                  <div className="tip">
                    <span className="tip-icon">🍖</span>
                    <span>{t('blogPost4Tip3')}</span>
                  </div>
                </div>
                <button className="read-more-btn">{t('readMore')}</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )

  if (currentPage === 'gallery') {
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
              <li><button onClick={() => navigateToPage('home')} className="nav-link">{t('backToMain')}</button></li>
              <li>
                <button onClick={toggleLanguage} className="nav-link lang-toggle">
                  {language === 'de' ? '🇵🇱 PL' : '🇩🇪 DE'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <GalleryPage />
      </div>
    )
  }

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
              <li><button onClick={() => navigateToPage('home')} className="nav-link">{t('backToMain')}</button></li>
              <li>
                <button onClick={toggleLanguage} className="nav-link lang-toggle">
                  {language === 'de' ? '🇵🇱 PL' : '🇩🇪 DE'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <BlogPage />
      </div>
    )
  }

  if (currentPage === 'fullPricing') {
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
              <li><button onClick={() => navigateToPage('home')} className="nav-link">{t('backToMain')}</button></li>
              <li>
                <button onClick={toggleLanguage} className="nav-link lang-toggle">
                  {language === 'de' ? '🇵🇱 PL' : '🇩🇪 DE'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
        
        <section className="full-pricing-page">
          <div className="container">
            <h1>{t('fullPricingTitle')}</h1>
            <p className="full-pricing-subtitle">{t('fullPricingSubtitle')}</p>
            
            <div className="pricing-categories">
              {/* Small Dogs */}
              <div className="pricing-category">
                <h2>{t('smallDogs')}</h2>
                <p className="category-desc">{t('smallDogsDesc')}</p>
                <div className="pricing-services">
                  <div className="pricing-service-item">
                    <h3>{t('basicBath')}</h3>
                    <div className="price">{formatPriceRange(25, 35)}</div>
                    <ul>
                      {t('basicBathServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item featured">
                    <h3>{t('fullGrooming')}</h3>
                    <div className="price">{formatPriceRange(45, 60)}</div>
                    <ul>
                      {t('fullGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item">
                    <h3>{t('showGrooming')}</h3>
                    <div className="price">{formatPriceRange(70, 90)}</div>
                    <ul>
                      {t('showGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Medium Dogs */}
              <div className="pricing-category">
                <h2>{t('mediumDogs')}</h2>
                <p className="category-desc">{t('mediumDogsDesc')}</p>
                <div className="pricing-services">
                  <div className="pricing-service-item">
                    <h3>{t('basicBath')}</h3>
                    <div className="price">{formatPriceRange(35, 50)}</div>
                    <ul>
                      {t('basicBathServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item featured">
                    <h3>{t('fullGrooming')}</h3>
                    <div className="price">{formatPriceRange(60, 80)}</div>
                    <ul>
                      {t('fullGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item">
                    <h3>{t('showGrooming')}</h3>
                    <div className="price">{formatPriceRange(90, 120)}</div>
                    <ul>
                      {t('showGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Large Dogs */}
              <div className="pricing-category">
                <h2>{t('largeDogs')}</h2>
                <p className="category-desc">{t('largeDogsDesc')}</p>
                <div className="pricing-services">
                  <div className="pricing-service-item">
                    <h3>{t('basicBath')}</h3>
                    <div className="price">{formatPriceRange(50, 70)}</div>
                    <ul>
                      {t('basicBathServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item featured">
                    <h3>{t('fullGrooming')}</h3>
                    <div className="price">{formatPriceRange(80, 120)}</div>
                    <ul>
                      {t('fullGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-service-item">
                    <h3>{t('showGrooming')}</h3>
                    <div className="price">{formatPriceRange(120, 180)}</div>
                    <ul>
                      {t('showGroomingServices').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Extra Services */}
              <div className="pricing-category extra-services">
                <h2>{t('extraServices')}</h2>
                <div className="extra-services-grid">
                  <div className="extra-service">
                    <h3>{t('nailTrim')}</h3>
                    <div className="price">{formatPrice(10)}</div>
                  </div>
                  <div className="extra-service">
                    <h3>{t('earCleaning')}</h3>
                    <div className="price">{formatPrice(8)}</div>
                  </div>
                  <div className="extra-service">
                    <h3>{t('teethCleaning')}</h3>
                    <div className="price">{formatPrice(15)}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="full-pricing-note">
              <p><em>{t('pricingNote')}</em></p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (currentPage === 'training') {
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
              <li><button onClick={() => navigateToPage('home')} className="nav-link">{t('backToMain')}</button></li>
              <li>
                <button onClick={toggleLanguage} className="nav-link lang-toggle">
                  {language === 'de' ? '🇵🇱 PL' : '🇩🇪 DE'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
        
        <section className="training-page">
          <div className="container">
            <h1>{t('trainingTitle')}</h1>
            <p className="training-subtitle">{t('trainingSubtitle')}</p>
            
            <div className="training-courses">
              {/* Basic Grooming Course */}
              <div className="training-course">
                <div className="course-header">
                  <h2>{t('basicGrooming')}</h2>
                  <p className="course-description">{t('basicGroomingDesc')}</p>
                </div>
                
                <div className="course-content">
                  <div className="course-details">
                    <h3>Program kursu:</h3>
                    <ul className="course-features">
                      {t('basicGroomingFeatures').map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <div className="course-info">
                      <div className="course-duration">
                        <strong>{t('courseDuration')}:</strong> 3 {t('days')}
                      </div>
                      <div className="course-price">
                        <strong>{t('coursePrice')}:</strong> {formatPrice(450)}
                      </div>
                    </div>
                    
                    <button className="enroll-btn">
                      {t('enrollNow')}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Advanced Grooming Course */}
              <div className="training-course featured">
                <div className="course-header">
                  <h2>{t('advancedGrooming')}</h2>
                  <p className="course-description">{t('advancedGroomingDesc')}</p>
                </div>
                
                <div className="course-content">
                  <div className="course-details">
                    <h3>Program kursu:</h3>
                    <ul className="course-features">
                      {t('advancedGroomingFeatures').map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <div className="course-info">
                      <div className="course-duration">
                        <strong>{t('courseDuration')}:</strong> 5 {t('days')}
                      </div>
                      <div className="course-price">
                        <strong>{t('coursePrice')}:</strong> {formatPrice(750)}
                      </div>
                    </div>
                    
                    <button className="enroll-btn">
                      {t('enrollNow')}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Business Training Course */}
              <div className="training-course">
                <div className="course-header">
                  <h2>{t('businessTraining')}</h2>
                  <p className="course-description">{t('businessTrainingDesc')}</p>
                </div>
                
                <div className="course-content">
                  <div className="course-details">
                    <h3>Program kursu:</h3>
                    <ul className="course-features">
                      {t('businessTrainingFeatures').map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <div className="course-info">
                      <div className="course-duration">
                        <strong>{t('courseDuration')}:</strong> 2 {t('days')}
                      </div>
                      <div className="course-price">
                        <strong>{t('coursePrice')}:</strong> {formatPrice(350)}
                      </div>
                    </div>
                    
                    <button className="enroll-btn">
                      {t('enrollNow')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="training-contact">
              <p>{t('trainingContact')}</p>
            </div>
          </div>
        </section>
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
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">{t('start')}</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">{t('about')}</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav-link">{t('gallery')}</button></li>
            <li><button onClick={() => scrollToSection('reviews')} className="nav-link">{t('reviews')}</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="nav-link">{t('pricing')}</button></li>
            <li><button onClick={() => scrollToSection('process')} className="nav-link">{t('process')}</button></li>
            <li className="nav-dropdown">
              <button onClick={toggleBlog} className="nav-link dropdown-toggle">
                {t('more')} <span className={`dropdown-arrow ${showBlog ? 'open' : ''}`}>▼</span>
              </button>
              {showBlog && (
                <ul className="dropdown-menu">
                  <li><button onClick={() => navigateToPage('blog')} className="nav-link">{t('blog')}</button></li>
                  <li><button onClick={() => navigateToPage('training')} className="nav-link">{t('training')}</button></li>
                  <li><button onClick={() => scrollToSection('faq')} className="nav-link">{t('faq')}</button></li>
                </ul>
              )}
            </li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link nav-cta">{t('contact')}</button></li>
            <li>
              <button onClick={toggleLanguage} className="nav-link lang-toggle">
                {language === 'de' ? '🇵🇱 PL' : '🇩🇪 DE'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero overflow-hidden" style={{backgroundImage: "url('/img/PieskiGłówna.jpeg')"}}>
        <div className="hero-content max-w-full">
          <div className="hero-text">
            <h1>
              {t('heroTitle')}
            </h1>
            <p>{t('heroSubtitle')}</p>
            <button className="cta-button">
              {t('makeAppointment')}
            </button>
          </div>
        </div>
      </header>

      {/* Über mich Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>{t('aboutTitle')}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                {t('aboutText1')}
              </p>
              <p>
                {t('aboutText2')}
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">♥</span>
                  <span>{t('loveForDogs')}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>{t('professionalExperience')}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">★</span>
                  <span>{t('safetyFirst')}</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/img/ZdjęcieAni.png" alt="Ania - professioneller Hundefriseur" className="about-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>{t('galleryTitle')}</h2>
          <p className="gallery-subtitle">{t('gallerySubtitle')}</p>
          
          <div className="gallery-preview">
            <div className="gallery-item featured-item">
              <img src="/img/przed-Po/Jack_russell_terrier_przed_po.jpg" alt="Jack Russell Terrier - Vorher und Nachher" />
              <div className="gallery-overlay">
                <span>{t('jackRussell')}</span>
              </div>
            </div>
            <button 
              className="gallery-show-all-btn"
              onClick={() => navigateToPage('gallery')}
            >
              {t('seeAllTransformations')}
            </button>
          </div>
        </div>
      </section>

      {/* Bewertungen Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <h2>{t('reviewsTitle')}</h2>
          <div className="reviews-grid">
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>{t('review1')}</p>
                <div className="review-author">
                  <strong>{t('review1Author')}</strong>
                  <span>{t('review1Subtitle')}</span>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>{t('review2')}</p>
                <div className="review-author">
                  <strong>{t('review2Author')}</strong>
                  <span>{t('review2Subtitle')}</span>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>{t('review3')}</p>
                <div className="review-author">
                  <strong>{t('review3Author')}</strong>
                  <span>{t('review3Subtitle')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>{t('pricingTitle')}</h2>
          <div className="pricing-table">
            <div className="pricing-item">
              <h3>{t('bathingDrying')}</h3>
              <div className="price">{t('from')} {formatPrice(40)}</div>
              <ul>
                {t('bathingServices').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="pricing-item featured">
              <div className="popular-badge">{t('mostPopular')}</div>
              <h3>{t('fullCare')}</h3>
              <div className="price">{t('from')} {formatPrice(80)}</div>
              <ul>
                {t('fullCareServices').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="pricing-item">
              <h3>{t('specialCut')}</h3>
              <div className="price">{t('from')} {formatPrice(120)}</div>
              <ul>
                {t('specialServices').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="pricing-note">
            <em>{t('pricingNote')}</em>
          </p>
          <div className="pricing-full-offer">
            <button 
              className="full-offer-btn"
              onClick={() => setCurrentPage('fullPricing')}
            >
              {t('seeFullOffer')}
            </button>
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section id="process" className="process">
        <div className="container">
          <h2>{t('processTitle')}</h2>
          <p className="process-subtitle">{t('processSubtitle')}</p>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">☎</div>
              <h3>{t('step1Title')}</h3>
              <p>
                {t('step1Text')}
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">→</div>
              <h3>{t('step2Title')}</h3>
              <p>
                {t('step2Text')}
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">✂</div>
              <h3>{t('step3Title')}</h3>
              <p>
                {t('step3Text')}
              </p>
            </div>
            
            <div className="step-arrow">
              <span>→</span>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-icon">✓</div>
              <h3>{t('step4Title')}</h3>
              <p>
                {t('step4Text')}
              </p>
            </div>
          </div>
          
          <div className="process-cta">
            <div className="process-cta-content">
              <div className="process-cta-text">
                <p>{t('readyForVisit')}</p>
                <button className="process-btn">
                  {t('makeAppointmentToday')}
                </button>
              </div>
              <div className="process-cta-image">
                <img src="/img/sekcja-removebg-preview.png" alt="Professional dog grooming" className="process-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>{t('faqTitle')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                <span className="faq-icon">?</span>
                <span>{t('faq1Q')}</span>
                <span className={`faq-arrow ${openFaq === 0 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                <p>
                  {t('faq1A')}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                <span className="faq-icon">?</span>
                <span>{t('faq2Q')}</span>
                <span className={`faq-arrow ${openFaq === 1 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                <p>
                  {t('faq2A')}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                <span className="faq-icon">?</span>
                <span>{t('faq3Q')}</span>
                <span className={`faq-arrow ${openFaq === 2 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                <p>
                  {t('faq3A')}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                <span className="faq-icon">?</span>
                <span>{t('faq4Q')}</span>
                <span className={`faq-arrow ${openFaq === 3 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                <p>
                  {t('faq4A')}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                <span className="faq-icon">?</span>
                <span>{t('faq5Q')}</span>
                <span className={`faq-arrow ${openFaq === 4 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 4 ? 'open' : ''}`}>
                <p>
                  {t('faq5A')}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className={`faq-question ${openFaq === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
                <span className="faq-icon">?</span>
                <span>{t('faq6Q')}</span>
                <span className={`faq-arrow ${openFaq === 5 ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`faq-answer ${openFaq === 5 ? 'open' : ''}`}>
                <p>
                  {t('faq6A')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>{t('contactTitle')}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t('contactMe')}</h3>
              <div className="contact-item">
                <span className="contact-icon">☎</span>
                <div>
                  <strong>{t('phone')}</strong>
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">@</span>
                <div>
                  <strong>{t('email')}</strong>
                  <a href="mailto:ania@groomer.pl">ania@groomer.pl</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">★</span>
                <div>
                  <strong>{t('address')}</strong>
                  <span>{t('addressText')}</span>
                </div>
              </div>
              <div className="social-links">
                <h4>{t('socialMedia')}</h4>
                <div className="social-icons">
                  <a href="#" className="social-link facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link tiktok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>{t('writeToMe')}</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('nameLabel')}</label>
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
                  <label htmlFor="email">{t('emailLabel')}</label>
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
                  <label htmlFor="phone">{t('phoneLabel')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <span className="heart-icon">💌</span>
                  {t('sendMessage')}
                </button>
              </form>
            </div>
          </div>
          
          {/* Mapa Section */}
          <div className="map-section">
            <h3>{t('findOnMap')}</h3>
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
                    {t('directions')}
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
          <p>{t('footerCopyright')}</p>
          <p className="footer-tagline">
            <span className="paw-icon">🐾</span>
            {t('footerTagline')}
            <span className="paw-icon">🐾</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App