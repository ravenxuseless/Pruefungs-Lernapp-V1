// ===== KOMPLETTE BEISPIELPRÜFUNGEN KM =====

const TESTS_KM = [
  {
    title: 'Beispielprüfung 1 – Webdesign Grundlagen',
    duration: 90,
    description: 'HTML, CSS, Zielgruppen, Informationsarchitektur',
    questions: [
      { type: 'mc', q: 'Was beschreibt HTML?', options: ['Das Aussehen einer Website', 'Die Struktur einer Website', 'Die Animation', 'Die Datenbank'], correct: 1, points: 5, explanation: 'HTML beschreibt die Struktur. CSS gestaltet das Aussehen.' },
      { type: 'checkbox', q: 'Welche Aspekte gehören zu einer guten Zielgruppenanalyse?', options: ['Alter', 'Interessen', 'Verwendete Geräte', 'Lieblingsfarbe des Designers', 'Technikaffinität'], correct: [0,1,2,4], points: 10, explanation: 'Zielgruppenanalyse: Alter, Interessen, Geräte, Erwartungen, Technikaffinität.' },
      { type: 'open', q: 'Erstelle eine Sitemap für eine Friseur-Website mit mindestens 5 Seiten und beschreibe die Navigation.', model: 'Sitemap: Startseite → Über uns → Leistungen → Preise → Termin buchen → Kontakt. Navigation: Hauptmenü oben, mobil als Hamburger-Menü, Termin-Button als CTA.', points: 15 },
      { type: 'draw', q: 'Skizziere ein Wireframe für die Startseite eines Online-Shops (Desktop). Markiere: Header, Hero, Produkte, Footer.', model: 'Header (Logo, Nav, Suche, Cart), Hero (großes Bild + CTA), Produktraster (3-4 Spalten), Kategorien-Bereich, Footer.', points: 20 },
      { type: 'mc', q: 'Was bedeutet "Responsive Design"?', options: ['Schnelle Ladezeit', 'Anpassung an Bildschirmgrößen', 'Animierte Elemente', 'Sprachausgabe'], correct: 1, points: 5, explanation: 'Layout passt sich automatisch an Smartphone, Tablet, Desktop an.' },
      { type: 'open', q: 'Was zeichnet eine gute Navigation aus? Nenne 4 Eigenschaften.', model: '1. Klare Bezeichnungen. 2. Logische Struktur. 3. Konsistent auf allen Seiten. 4. Sichtbar/erreichbar. 5. Nicht zu viele Punkte (max. 5-7).', points: 10 },
      { type: 'open', q: 'Welche Bildformate würdest du wann im Web verwenden?', model: 'JPG: Fotos. PNG: Grafiken/Logos mit Transparenz. SVG: Icons/Logos vektorbasiert. GIF: einfache Animationen. WebP/AVIF: moderne Formate.', points: 10 },
      { type: 'draw', q: 'Skizziere eine 12-Spalten-Grid-Struktur mit Header, Sidebar, Hauptinhalt, Footer. Markiere Margin und Gutter.', model: '12 Spalten, Header über volle Breite, Sidebar 3 Sp., Hauptinhalt 9 Sp., Footer 12. Margin und Gutter beschriftet.', points: 25 },
    ]
  },
  {
    title: 'Beispielprüfung 2 – UX/UI & Figma',
    duration: 90,
    description: 'Nutzerführung, Komponenten, Designsysteme',
    questions: [
      { type: 'mc', q: 'Was ist UX?', options: ['User Experience', 'User Extra', 'Ultra Extension', 'Unique Exchange'], correct: 0, points: 5, explanation: 'UX = User Experience. Nutzungserlebnis.' },
      { type: 'checkbox', q: 'Welche Punkte zeigen schlechte UX?', options: ['Lange Ladezeiten', 'Konsistente Buttons', 'Unklare Navigation', 'Zu viele Pop-ups', 'Klare Hierarchie'], correct: [0,2,3], points: 10, explanation: 'Schlechte UX: Ladezeit, unklare Nav, Pop-ups. Konsistenz/Hierarchie sind GUTE UX.' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen einer Komponente und einer Instanz in Figma.', model: 'Komponente = Hauptelement. Instanz = Kopie davon. Wenn Komponente geändert wird, aktualisieren sich alle Instanzen automatisch. Spart Zeit, sichert Konsistenz.', points: 15 },
      { type: 'draw', q: 'Skizziere ein Button-Design-System mit 4 Varianten: Primary, Secondary, Hover, Disabled.', model: 'Primary gefüllt, Secondary outline, Hover heller/Schatten, Disabled ausgegraut. Konsistente Größe.', points: 20 },
      { type: 'open', q: 'Was ist Auto Layout in Figma und wann setzt man es ein?', model: 'Intelligenter Container, Inhalte passen sich automatisch an. Einsatz: Buttons mit Text, Listen, responsive Komponenten. Spart Zeit.', points: 10 },
      { type: 'mc', q: 'Was bedeutet "Konsistenz" im UI-Design?', options: ['Buttons in allen Farben', 'Elemente verhalten sich überall gleich', 'Viele verschiedene Schriften', 'Wechselnde Layouts'], correct: 1, points: 5, explanation: 'Konsistenz: einheitliches Verhalten/Aussehen. Hilft Nutzern bei Orientierung.' },
      { type: 'open', q: 'Was sind Farbvariablen und Typostile in Figma?', model: 'Farbvariablen = zentral definierte Farben, überall referenziert. Typostile = vordefinierte Schriftstile (H1, H2, Body). Globale Änderungen wirken automatisch überall.', points: 15 },
      { type: 'draw', q: 'Entwirf ein Mobile-Wireframe für eine Login-Seite. Inhalt: Logo, Eingabefelder, Login-Button, "Passwort vergessen", Sign-up.', model: 'Logo oben zentriert, E-Mail-Feld, Passwort-Feld, großer Login-Button (CTA), "Passwort vergessen?" Link, "Registrieren" am Boden.', points: 20 },
    ]
  },
  {
    title: 'Beispielprüfung 3 – Layout & Responsive Design',
    duration: 90,
    description: 'Wireframes, Mockups, Prototyping, mobile Layouts',
    questions: [
      { type: 'mc', q: 'Was ist der Unterschied zwischen Wireframe und Mockup?', options: ['Kein Unterschied', 'Wireframe = Struktur, Mockup = visuelles Design', 'Wireframe = Animation', 'Wireframe = mobil'], correct: 1, points: 5, explanation: 'Wireframe: strukturelle Skizze. Mockup: realistisches visuelles Design.' },
      { type: 'checkbox', q: 'Was muss bei einem responsiven Layout beachtet werden?', options: ['Touchgrößen', 'Lesbare Schrift', 'Bildanpassung', 'Alles gleich groß lassen', 'Vereinfachte Mobile-Nav'], correct: [0,1,2,4], points: 10, explanation: 'Responsive: Touch, Schrift, Bilder, Mobile-Nav. Elemente müssen sich anpassen.' },
      { type: 'open', q: 'Beschreibe den Designprozess von Idee bis Prototyp in 5 Schritten.', model: '1. Recherche/Konzept. 2. Sitemap. 3. Wireframes. 4. Mockups. 5. Prototyp + Testing.', points: 15 },
      { type: 'draw', q: 'Skizziere drei Versionen einer Produktkarte: Desktop (3), Tablet (2), Mobile (1).', model: 'Desktop 3 Karten mit Details, Tablet 2 mit weniger Detail, Mobile 1 Karte mit großem Bild + kompaktem Text. Touch-friendly Mobile.', points: 25 },
      { type: 'mc', q: 'Was ist ein Prototyp im Designprozess?', options: ['Eine fertige Website', 'Klickbares Modell zur Simulation', 'Erster Rohentwurf', 'Datenbank-Vorlage'], correct: 1, points: 5, explanation: 'Prototyp: klickbares, interaktives Modell.' },
      { type: 'open', q: 'Warum sind Wireframes wichtig, bevor man mit dem visuellen Design beginnt?', model: 'Klären Struktur ohne Ablenkung. Probleme früh erkennen. Schnell anpassbar. Erleichtern Stakeholder-Abstimmung.', points: 10 },
      { type: 'open', q: 'Was bedeutet "Mobile First" und welche Vorteile hat dieser Ansatz?', model: 'Design zuerst für Smartphones. Vorteile: Fokus aufs Wesentliche, bessere Mobile-Performance, klarere Hierarchie, SEO-Vorteile.', points: 15 },
      { type: 'draw', q: 'Skizziere ein Mobile-Navigationskonzept (Hamburger-Menü ausgeklappt). 5 Menüpunkte, Login, Sprachwechsler.', model: 'Vollflächiges Menü, Schließen-Icon (X), 5 große Menüpunkte, Login-Button hervorgehoben, Sprachwechsler unten/oben.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 4 – SEO, CMS & Projektmanagement',
    duration: 90,
    description: 'CMS, Suchmaschinenoptimierung, Projekt-Planung',
    questions: [
      { type: 'mc', q: 'Was bedeutet SEO?', options: ['Style Edit Options', 'Search Engine Optimization', 'Site Edit Order', 'Server Engine Online'], correct: 1, points: 5, explanation: 'SEO = Search Engine Optimization.' },
      { type: 'checkbox', q: 'Welche Faktoren sind wichtig für gute SEO?', options: ['Schnelle Ladezeit', 'Mobile Optimierung', 'Viele bunte Farben', 'Sinnvolle Überschriften', 'Relevante Keywords'], correct: [0,1,3,4], points: 10, explanation: 'Performance, Mobile, Headings, Keywords. Farben sind nicht SEO-relevant.' },
      { type: 'open', q: 'Was ist ein CMS? Nenne 2 Vor- und 2 Nachteile von WordPress.', model: 'CMS = Content Management System. WP-Vorteile: einfach, viele Plugins. Nachteile: Sicherheitsrisiko, häufige Updates nötig.', points: 15 },
      { type: 'open', q: 'Erstelle einen groben Projektplan für ein Website-Redesign über 6 Wochen.', model: 'W1: Analyse. W2: Sitemap+Wireframes. W3-4: Mockups. W4-5: Prototyp+Tests. W5-6: Entwicklung+Übergabe. Parallel: Content.', points: 20 },
      { type: 'mc', q: 'Was zeigt ein Gantt-Diagramm?', options: ['Datenbank-Strukturen', 'Zeitliche Abläufe und Abhängigkeiten', 'Designsysteme', 'Farb-Hierarchien'], correct: 1, points: 5, explanation: 'Gantt: Balkendiagramm mit Zeitachse, zeigt Aufgaben und Abhängigkeiten.' },
      { type: 'open', q: 'Was sind Stakeholder eines Webprojekts? Nenne mindestens 4.', model: '1. Auftraggeber. 2. Endnutzer. 3. Marketing. 4. Entwickler. 5. Geschäftsführung. 6. Externe Partner.', points: 10 },
      { type: 'open', q: 'Welche Risiken können bei einem Webprojekt auftreten? Nenne 4 und wie man sie minimiert.', model: '1. Zeitverzug → klare Deadlines. 2. Technik-Probleme → Testing. 3. Scope Creep → schriftlicher Auftrag. 4. Budget → Puffer einplanen.', points: 15 },
      { type: 'draw', q: 'Mini-Gantt-Diagramm für 4-Wochen-Projekt mit 5 Phasen: Konzept, Wireframes, Design, Prototyp, Übergabe.', model: 'Horizontale Zeitachse Wochen 1-4, vertikal die 5 Phasen als Balken mit Überschneidungen, deutliche Reihenfolge.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 5 – Gesamt: Konzept zu Umsetzung',
    duration: 90,
    description: 'Komplettes Webprojekt von Konzept bis Designsystem',
    questions: [
      { type: 'open', q: 'Du planst eine Website für ein lokales Café. Beschreibe Zielgruppe, Sitemap und gestalterische Richtung.', model: 'Zielgruppe: 25-50, lokale Gäste, Lifestyle-orientiert. Sitemap: Start, Karte, Über uns, Events, Reservierung, Kontakt. Stil: warme Farben, große Bilder, einladend, gemütlich.', points: 20 },
      { type: 'checkbox', q: 'Welche Elemente gehören in ein Designsystem?', options: ['Farben', 'Typografie', 'Komponenten', 'Lieblingssongs', 'Spacing-Regeln'], correct: [0,1,2,4], points: 10, explanation: 'Designsystem: Farben, Typo, Komponenten, Spacing/Regeln.' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen einfachem und exklusivem Nutzungsrecht (im Web-Kontext).', model: 'Einfach: mehrere Kunden dürfen die Lizenz nutzen (z.B. Stock-Bilder). Exklusiv: nur ein Kunde, kein anderer kann es verwenden – teurer.', points: 10 },
      { type: 'mc', q: 'Was ist ein "User Flow"?', options: ['Eine Animation', 'Der Weg eines Nutzers durch die Website', 'Ein Stylesheet', 'Eine Datenbank'], correct: 1, points: 5, explanation: 'User Flow: Pfad/Schritte, die ein Nutzer durchläuft, um ein Ziel zu erreichen.' },
      { type: 'draw', q: 'Skizziere einen User Flow: Nutzer kauft Ticket auf Konzert-Website (Start → Bestätigung).', model: 'Schritte: Startseite → Konzertübersicht → Konzert wählen → Tickettyp wählen → Login/Gast → Zahlung → Bestätigung. Pfeile zwischen den Screens.', points: 25 },
      { type: 'open', q: 'Was bedeutet "Atomic Design"? Nenne die Ebenen.', model: 'Atomic Design: Designsystem nach Atomen aufgebaut. Ebenen: Atoms (Button, Input), Molecules (Suchfeld), Organisms (Header), Templates (Layout), Pages (konkrete Seiten).', points: 15 },
      { type: 'open', q: 'Welche Schritte gehören zur barrierefreien Webgestaltung (Accessibility)?', model: 'Ausreichend Kontrast, Tastaturnavigation, Alt-Texte für Bilder, semantisches HTML, klare Schriftgrößen, Screenreader-Tauglichkeit, Fokus-Indikatoren.', points: 15 },
    ]
  },
];
