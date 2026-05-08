// ===== TIPPS & HILFSMITTEL PRO PRÜFUNG =====

const TIPPS = {
  gg: {
    intro: 'In der Gestaltungsprüfung darfst du an der Techniker Schule Weilburg in der Regel das Internet und kostenlose KIs nutzen. Hier findest du eine zusammengestellte Übersicht mit Tools, Bildquellen und Tipps für die Prüfung.',
    sections: [
      {
        icon: '🤖',
        title: 'Erlaubte kostenlose KIs',
        intro: 'Diese KIs sind kostenfrei nutzbar (Stand: 2025). Logge dich vorher zu Hause ein, damit es in der Prüfung nicht hängt!',
        items: [
          { name: 'ChatGPT (Free)', url: 'https://chatgpt.com', desc: 'Texte, Konzepte, Briefings, Slogans, Beschreibungen. Kostenfreies Modell GPT-4o mini.' },
          { name: 'Claude (Free)', url: 'https://claude.ai', desc: 'Längere Konzepte, Briefings, Argumentationen. Sehr gut für Begründungen.' },
          { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', desc: 'Kostenlos, integrierter Bildgenerator (DALL-E 3) – nutzbar für Moodboards.' },
          { name: 'Google Gemini', url: 'https://gemini.google.com', desc: 'Kostenfreies Sprachmodell mit Bildgenerator – Konzepte und Inspirationsbilder.' },
          { name: 'Adobe Firefly (Free)', url: 'https://firefly.adobe.com', desc: 'Bildgenerator von Adobe, kostenlose Credits monatlich. Kommerziell sicherere Bildquelle als andere KIs.' },
          { name: 'Leonardo.AI (Free)', url: 'https://leonardo.ai', desc: 'KI-Bildgenerator mit täglichen Free-Credits. Gut für Stilrichtungen und Moodboards.' },
          { name: 'Bing Image Creator', url: 'https://www.bing.com/images/create', desc: 'Kostenfreier DALL-E-3-Zugang von Microsoft. Schnelle Bildideen.' },
          { name: 'Ideogram', url: 'https://ideogram.ai', desc: 'Sehr gut für Text-in-Bild (Logos mit Schrift, Plakate). Free-Plan verfügbar.' },
        ]
      },
      {
        icon: '🖼',
        title: 'Bildquellen (kostenlos & lizenzfrei)',
        intro: 'Diese Plattformen bieten kostenfreie Bilder für kommerzielle Nutzung. Lizenzbedingungen jeweils prüfen!',
        items: [
          { name: 'Unsplash', url: 'https://unsplash.com', desc: 'Riesige Auswahl an Fotos in hoher Qualität. Kostenfrei, auch kommerziell.' },
          { name: 'Pexels', url: 'https://pexels.com', desc: 'Fotos und Videos. Kostenlos und ohne Anmeldung downloadbar.' },
          { name: 'Pixabay', url: 'https://pixabay.com', desc: 'Fotos, Vektoren, Illustrationen, Videos. Pixabay-Lizenz: kostenfrei für fast alles.' },
          { name: 'Freepik', url: 'https://freepik.com', desc: 'Vektoren, Mockups, Templates, Illustrationen. Mit Quellenangabe kostenlos.' },
          { name: 'Flaticon', url: 'https://flaticon.com', desc: 'Über 10 Mio. Icons. Mit Attribution kostenlos.' },
          { name: 'The Noun Project', url: 'https://thenounproject.com', desc: 'Hochwertige Icons und Piktogramme. CC-BY-Lizenz.' },
          { name: 'Mockup World', url: 'https://mockupworld.co', desc: 'Kostenlose Mockup-PSDs für Verpackungen, Plakate, Devices.' },
          { name: 'Google Fonts', url: 'https://fonts.google.com', desc: 'Über 1500 freie Schriften. Komplett kommerziell nutzbar.' },
        ]
      },
      {
        icon: '📦',
        title: 'Packaging Design – Praxis-Tipps',
        intro: 'Packaging kommt in Print-Prüfungen sehr häufig dran. Du musst eine Verpackung gestalten, ausdrucken, ausschneiden und zusammenkleben können!',
        items: [
          { name: 'Stanzlayout vorbereiten', desc: 'Erstelle das Stanzlayout in Illustrator/InDesign. Falzlinien gestrichelt, Schnittlinien durchgezogen markieren.' },
          { name: 'Klebelaschen nicht vergessen', desc: 'Mindestens 8-10mm breite Laschen. Innen unsichtbar, am besten gleichfarbig wie Schachtel-Innen.' },
          { name: 'Beschnittzugabe 3 mm', desc: 'Hintergrundfarbe/Bild über die Stanzkante hinaus ziehen. Sonst entstehen weiße Kanten.' },
          { name: 'Karton-Stärke beachten', desc: '250-350 g/m² ist Standard für Faltschachteln. Dicker = stabiler, aber schwerer zu falten.' },
          { name: 'Druck testen', desc: 'Vor finalem Druck einen Test auf günstigem Papier machen. Stanzschema prüfen, Falzungen markieren.' },
          { name: 'Falzhilfen', desc: 'Vor dem Falten Falzkanten mit stumpfem Lineal/Falzbein vorritzen → saubere Kanten ohne Risse.' },
          { name: 'Klebstoff', desc: 'Doppelseitiges Klebeband oder Alleskleber/UHU. Heißkleber für stabile Bodenverklebung.' },
          { name: 'Mockup als Foto', desc: 'Gestaltete + zusammengebaute Schachtel auf neutralem Untergrund fotografieren – wirkt professionell in der Präsentation.' },
        ]
      },
      {
        icon: '🎯',
        title: 'Prüfungsstrategie GG',
        items: [
          { name: 'Zeit einteilen', desc: 'Bei 5-stündiger Prüfung: 30 Min Konzept/Skribbles, 60% Hauptaufgabe, 20% Reinzeichnung, Rest Begründungen.' },
          { name: 'Skribbles zählen', desc: 'Skribbles werden bewertet! Schnell viele Varianten zeigen ist wichtig – nicht zu perfektionistisch werden.' },
          { name: 'Begründungen schreiben', desc: 'IMMER fachlich begründen: "Ich habe Blau gewählt, weil es Vertrauen vermittelt und zur Zielgruppe Bank passt."' },
          { name: 'In Schwarzweiß checken', desc: 'Funktioniert dein Logo auch ohne Farbe? Wenn nicht: Hierarchie/Kontrast überarbeiten.' },
          { name: 'Klein-Test', desc: 'Logo auf Visitenkarten-Größe verkleinern. Erkennbar? Wenn nein: weiter abstrahieren.' },
          { name: 'Reduktion vor Detail', desc: 'Im Zweifel Elemente weglassen. Weniger ist mehr.' },
          { name: 'Datei-Aufräumen', desc: 'Ebenen ordentlich benennen, unbenötigte Ebenen löschen, Dokument korrekt benennen.' },
          { name: 'Schriftarten in Pfade', desc: 'Vor dem Export Schriften in Pfade/Outlines konvertieren – sonst Schriftfehler beim Druck.' },
        ]
      },
      {
        icon: '⚠',
        title: 'Häufige Fehler vermeiden',
        items: [
          { name: 'Zu viele Schriftarten', desc: 'Maximal 2-3 Schriftarten in einem Design. Sonst chaotisch.' },
          { name: 'Zu viele Farben', desc: 'Reduzierte Palette: 2-4 Farben + neutrale Töne. Mehr wirkt unruhig.' },
          { name: 'Keine Hierarchie', desc: 'Wichtige Inhalte müssen größer/auffälliger sein als unwichtige.' },
          { name: 'Überladene Layouts', desc: 'Weißraum nutzen! Nicht jede Fläche füllen wollen.' },
          { name: 'Komplexe Logos', desc: 'Zu viele Details = unprofessionell. Vereinfachen!' },
          { name: 'Fehlende Begründung', desc: 'Ohne Begründung gibt es deutlich weniger Punkte – auch bei schönem Design.' },
          { name: 'Falsche Auflösung', desc: '300 DPI für Druck nicht vergessen, sonst alles unscharf.' },
          { name: 'Falsches Farbformat', desc: 'CMYK für Druck, RGB für Bildschirm. Nicht verwechseln.' },
        ]
      },
      {
        icon: '✅',
        title: 'Checkliste vor Abgabe',
        items: [
          { name: 'Briefing erfüllt', desc: 'Alle Anforderungen aus der Aufgabenstellung umgesetzt?' },
          { name: 'Begründungen geschrieben', desc: 'Farb-, Schrift-, Layout-Entscheidungen erklärt?' },
          { name: 'CMYK + 300 DPI', desc: 'Druckdaten korrekt eingestellt?' },
          { name: 'Beschnitt 3 mm', desc: 'Beschnittzugabe gesetzt?' },
          { name: 'Schriften in Pfade', desc: 'Beim PDF-Export.' },
          { name: 'Rechtschreibung', desc: 'Alles auf Tippfehler geprüft?' },
          { name: 'Dateinamen', desc: 'Sinnvoll benannt (z.B. Nachname_Plakat_v3.pdf)?' },
          { name: 'Alle Dateien gespeichert', desc: 'Original + Export-PDF + ggf. Bildmaterial.' },
        ]
      },
    ]
  },

  km: {
    intro: 'Die KM-Prüfung am Mittwoch fokussiert auf Konzeption, Webdesign und Designsysteme – meist mit Figma. Hier sind die Tools und Tipps, die dir helfen.',
    sections: [
      {
        icon: '🛠',
        title: 'Tools für die Prüfung',
        items: [
          { name: 'Figma (kostenlos)', url: 'https://figma.com', desc: 'Standard-Tool für Webdesign, Wireframes, Mockups, Prototypen. Free-Plan reicht für Prüfungen.' },
          { name: 'FigJam', url: 'https://figma.com/figjam', desc: 'Whiteboard-Tool von Figma für Sitemaps, User Flows, Brainstorming.' },
          { name: 'Penpot', url: 'https://penpot.app', desc: 'Open-Source-Alternative zu Figma. Kostenlos, browserbasiert.' },
          { name: 'Adobe XD', url: 'https://adobe.com/products/xd.html', desc: 'Wenn du Adobe-Lizenz hast – Alternative zu Figma. Wird aber zunehmend abgelöst.' },
          { name: 'Canva', url: 'https://canva.com', desc: 'Schnelle Mockups, Präsentationen, Social-Media-Designs. Free-Plan ausreichend.' },
        ]
      },
      {
        icon: '🤖',
        title: 'Erlaubte KIs für KM',
        intro: 'Die gleichen kostenlosen KIs wie bei GG. Besonders nützlich für Konzepte, Texte, User-Personas.',
        items: [
          { name: 'ChatGPT', url: 'https://chatgpt.com', desc: 'User-Personas, Sitemaps generieren lassen, Lorem-Ipsum durch sinnvolle Texte ersetzen.' },
          { name: 'Claude', url: 'https://claude.ai', desc: 'Sehr gut für ausführliche Konzept-Texte und User-Stories.' },
          { name: 'Uizard', url: 'https://uizard.io', desc: 'KI-gestützte Wireframe-Erstellung. Free-Tier vorhanden.' },
          { name: 'Galileo AI', url: 'https://usegalileo.ai', desc: 'KI generiert UI-Designs aus Text-Prompts. Eingeschränkt kostenlos.' },
        ]
      },
      {
        icon: '📚',
        title: 'Inspirationsquellen',
        items: [
          { name: 'Dribbble', url: 'https://dribbble.com', desc: 'Designer-Community, viele UI/UX-Beispiele. Kostenlos browsen.' },
          { name: 'Behance', url: 'https://behance.net', desc: 'Adobe-Plattform für komplette Projekte (auch Print + Web).' },
          { name: 'Awwwards', url: 'https://awwwards.com', desc: 'Preisgekrönte Websites – top für Inspiration und Trends.' },
          { name: 'Mobbin', url: 'https://mobbin.com', desc: 'Datenbank mit echten App-Screenshots. Sehr nützlich für Mobile-Patterns.' },
          { name: 'Land-book', url: 'https://land-book.com', desc: 'Kuratierte Sammlung guter Landingpages.' },
          { name: 'UI Garage', url: 'https://uigarage.net', desc: 'UI-Patterns sortiert nach Komponenten/Aktionen.' },
        ]
      },
      {
        icon: '🎯',
        title: 'Prüfungsstrategie KM',
        items: [
          { name: 'Konzept zuerst', desc: 'Bevor du in Figma startest: Zielgruppe, Nutzerziele, Sitemap kurz schriftlich. Spart später Zeit.' },
          { name: 'Wireframe vor Design', desc: 'Erst graue Boxen mit Struktur, dann Farben/Bilder. Spart Stunden!' },
          { name: 'Komponenten nutzen', desc: 'Buttons, Karten, Header als Komponente anlegen → Konsistenz + schnelle Änderungen.' },
          { name: 'Designsystem dokumentieren', desc: 'Farb-Variablen, Typo-Stile, Spacing-Skala (4/8/16/24/32) festlegen.' },
          { name: 'Mobile First', desc: 'Erst die Mobile-Version, dann nach oben skalieren. Lehrer lieben das.' },
          { name: 'Prototyp testen', desc: 'Klick-Pfade durchspielen. Funktionieren alle Verlinkungen?' },
          { name: 'Begründen!', desc: 'Wie bei GG: jede Designentscheidung erklären (Farbe, Schrift, Layout, Hierarchie).' },
          { name: 'Accessibility', desc: 'Kontrast prüfen (Stark.app, Figma-Plugin). WCAG AA = 4.5:1 für Fließtext.' },
        ]
      },
      {
        icon: '✅',
        title: 'Checkliste KM-Abgabe',
        items: [
          { name: 'Sitemap', desc: 'Alle Seiten mit Hierarchie dokumentiert?' },
          { name: 'Wireframes', desc: 'Mindestens für die Schlüsselseiten erstellt?' },
          { name: 'Designsystem', desc: 'Farben, Typo, Buttons, Spacing dokumentiert?' },
          { name: 'Responsive', desc: 'Mobile, Tablet, Desktop angedacht?' },
          { name: 'Prototyp', desc: 'Wichtigste User-Flows klickbar?' },
          { name: 'Konzept-Doku', desc: 'Zielgruppe, Ziele, Begründungen schriftlich?' },
          { name: 'Saubere Struktur', desc: 'Frames sinnvoll benannt, Pages nach Bereichen sortiert?' },
        ]
      },
    ]
  },

  it: {
    intro: 'Die IT-Prüfung am Freitag besteht oft aus theoretischen Fragen zu Recht, Datenschutz, Sicherheit und IT-Grundlagen. Hier sind die wichtigsten Hilfen.',
    sections: [
      {
        icon: '📚',
        title: 'Wichtige Gesetze und Quellen',
        items: [
          { name: 'DSGVO Volltext', url: 'https://dsgvo-gesetz.de', desc: 'Komplette DSGVO mit allen Artikeln. Wichtig: Art. 6 (Rechtsgrundlagen), Art. 15-22 (Betroffenenrechte), Art. 32 (TOMs), Art. 33 (Meldepflicht).' },
          { name: 'TTDSG', url: 'https://www.gesetze-im-internet.de/ttdsg/', desc: 'Deutsches Telekommunikation-Telemedien-Datenschutzgesetz. Wichtig für Cookies/Tracking.' },
          { name: 'UrhG (Urheberrechtsgesetz)', url: 'https://www.gesetze-im-internet.de/urhg/', desc: 'Urheberrecht in Deutschland. Wichtig: §2 (geschützte Werke), §51 (Zitatrecht), §59 (Panoramafreiheit).' },
          { name: 'Creative Commons Erklärung', url: 'https://creativecommons.org/licenses/?lang=de', desc: 'Übersicht aller CC-Lizenzen mit deutschen Erklärungen.' },
        ]
      },
      {
        icon: '🤖',
        title: 'KIs als Lernhilfe (für die Prüfungsvorbereitung!)',
        intro: 'Diese KIs darfst du zur Vorbereitung nutzen – ob in der Prüfung erlaubt, fragst du am besten deinen Dozenten.',
        items: [
          { name: 'ChatGPT', url: 'https://chatgpt.com', desc: 'Erkläre dir komplexe Themen wie Verschlüsselung, DSGVO-Artikel, OSI-Modell.' },
          { name: 'Claude', url: 'https://claude.ai', desc: 'Sehr gut für ausführliche juristische Erklärungen und Fallbeispiele.' },
          { name: 'Perplexity', url: 'https://perplexity.ai', desc: 'KI mit Quellenangaben – ideal für Recherche zu rechtlichen Themen.' },
        ]
      },
      {
        icon: '🔑',
        title: 'Wichtige Begriffe & Abkürzungen',
        intro: 'Diese musst du im Schlaf erklären können:',
        items: [
          { name: 'DSGVO', desc: 'Datenschutz-Grundverordnung der EU (2018). Regelt Verarbeitung personenbezogener Daten.' },
          { name: 'TTDSG', desc: 'Telekommunikation-Telemedien-Datenschutz-Gesetz (Deutschland). Regelt u.a. Cookies.' },
          { name: 'TOMs', desc: 'Technische und Organisatorische Maßnahmen (z.B. Verschlüsselung, Backups, Schulungen).' },
          { name: 'AV-Vertrag', desc: 'Auftragsverarbeitungs-Vertrag. Pflicht zwischen Verantwortlichem und Dienstleister (Art. 28 DSGVO).' },
          { name: '2FA', desc: 'Zwei-Faktor-Authentifizierung. Passwort + zweiter Faktor (Code, Token).' },
          { name: 'HTTPS', desc: 'Verschlüsseltes HTTP. Kombiniert symmetrische + asymmetrische Verschlüsselung.' },
          { name: 'CC-Lizenzen', desc: 'BY (Urheber nennen), NC (nicht kommerziell), ND (nicht verändern), SA (gleiche Bedingungen).' },
          { name: 'Schöpfungshöhe', desc: 'Mindestmaß an Kreativität, damit Urheberrecht greift.' },
          { name: 'Panoramafreiheit', desc: 'Werke im öffentlichen Raum dürfen fotografiert/veröffentlicht werden (§59 UrhG).' },
          { name: 'Berechtigtes Interesse', desc: 'Rechtsgrundlage nach Art. 6 Abs. 1 lit. f DSGVO – mit Interessen-Abwägung.' },
        ]
      },
      {
        icon: '📋',
        title: 'Pflichtangaben Impressum (auswendig!)',
        items: [
          { name: 'Name', desc: 'Voller Vor- und Nachname (bei natürlichen Personen) bzw. Firmenname.' },
          { name: 'Anschrift', desc: 'Straße, Hausnummer, PLZ, Ort. Kein Postfach!' },
          { name: 'Kontakt', desc: 'E-Mail-Adresse zwingend, Telefon meist auch erforderlich.' },
          { name: 'Vertretungsberechtigte', desc: 'Bei juristischen Personen (GmbH, UG): Geschäftsführer.' },
          { name: 'Handelsregister', desc: 'Bei eingetragenen Unternehmen: Register, Nummer.' },
          { name: 'USt-ID', desc: 'Wenn vorhanden, gemäß §27a UStG.' },
          { name: 'Aufsichtsbehörde', desc: 'Bei genehmigungspflichtigen Berufen.' },
          { name: 'Verantwortlich für Inhalt', desc: 'Bei journalistischen Angeboten nach §18 MStV.' },
        ]
      },
      {
        icon: '🎯',
        title: 'Prüfungsstrategie IT',
        items: [
          { name: 'Fachbegriffe nutzen', desc: 'Statt "Datenschutz-Sache" → "DSGVO Art. X verlangt..."' },
          { name: 'Mit Beispiel begründen', desc: 'Theorie + konkretes Beispiel = volle Punkte.' },
          { name: 'Auf Stichworte achten', desc: '"Begründe", "Erkläre", "Vergleiche" – immer genau lesen, was gefragt ist.' },
          { name: 'Strukturiert antworten', desc: 'Definition → Erklärung → Beispiel → ggf. Bewertung.' },
          { name: 'Aktuelle Bezüge', desc: 'Erwähne aktuelle Themen (KI-Verordnung, Schrems II, Tracking-Verbote) wenn passend.' },
          { name: 'Zahlen merken', desc: 'DSGVO-Bußgelder bis 20 Mio. €/4% Umsatz, 72h Meldefrist, 1 Monat Auskunftsfrist, 70 Jahre Urheberrecht-Schutz.' },
          { name: 'Cookie-Banner-Anforderungen', desc: 'Aktive Einwilligung, gleichwertiges Ablehnen, granular, keine Voreinstellung – alle 4 Punkte!' },
          { name: 'Schreibe leserlich', desc: 'Bei mehreren Korrekturen: gut lesbare Handschrift = mehr Punkte.' },
        ]
      },
      {
        icon: '⚠',
        title: 'Häufige Fehler in IT-Prüfungen',
        items: [
          { name: 'Datenschutz und Datensicherheit verwechseln', desc: 'Datenschutz = rechtlich (DSGVO). Datensicherheit = technisch (Verschlüsselung etc.).' },
          { name: 'CC-Lizenzen verwechseln', desc: 'BY-NC-SA ≠ BY-ND. Bedingungen genau lernen!' },
          { name: 'IP-Adresse als nicht-personenbezogen einstufen', desc: 'IP IST personenbezogen (BGH-Urteil) – auch dynamische.' },
          { name: 'Panoramafreiheit überdehnen', desc: 'Gilt nur für dauerhaft öffentlich zugängliche Werke. Nicht für Innenräume.' },
          { name: 'Symmetrisch/asymmetrisch vermischen', desc: 'Sym = ein Schlüssel. Asym = Schlüsselpaar (öffentlich + privat).' },
          { name: 'Stillschweigende Einwilligung annehmen', desc: 'DSGVO verlangt AKTIVE Einwilligung. Schweigen = keine Zustimmung.' },
          { name: 'Cookie-Banner-Mindestanforderungen vergessen', desc: 'Immer 4 Punkte aufzählen, nicht nur "Zustimmen-Button".' },
        ]
      },
    ]
  },
};
