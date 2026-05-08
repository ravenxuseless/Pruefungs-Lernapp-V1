// ===== KOMPLETTE BEISPIELPRÜFUNGEN GG =====
// Aufgabentypen: mc, checkbox, open, draw

const TESTS_GG = [
  {
    title: 'Beispielprüfung 1 – Logo & Markenauftritt',
    duration: 90,
    description: 'Schwerpunkt: Logoentwicklung, Farbe, Typografie',
    questions: [
      { type: 'mc', q: 'Welche Eigenschaft sollte ein gutes Logo NICHT haben?', options: ['Einfach und reduziert', 'Skalierbar', 'Sehr viele Details', 'Wiedererkennbar'], correct: 2, points: 5, explanation: 'Gute Logos sind reduziert. Zu viele Details machen sie unprofessionell und schlecht skalierbar.' },
      { type: 'checkbox', q: 'Welche Logo-Arten gibt es?', options: ['Wortmarke', 'Bildmarke', 'Farbmarke', 'Wort-Bild-Marke', 'Stilmarke'], correct: [0,1,3], points: 10, explanation: 'Wortmarke, Bildmarke, Wort-Bild-Marke. "Farbmarke" und "Stilmarke" sind keine Standardkategorien.' },
      { type: 'open', q: 'Erkläre den Begriff "Schöpfungshöhe" und gib ein Beispiel für ein Werk MIT und OHNE Schöpfungshöhe.', model: 'Schöpfungshöhe ist das Mindestmaß an Kreativität. MIT: ein komplexes, individuell gestaltetes Logo. OHNE: ein einfacher Kreis ohne kreative Eigenleistung.', points: 10 },
      { type: 'draw', q: 'Skizziere mindestens 3 verschiedene Logo-Ideen für eine Bio-Bäckerei "Korn & Hand".', model: '3 Skizzen: Wortmarke, Bildmarke (Korn/Ähre), Wort-Bild-Marke (Brot+Schrift). Bewertung: Vielfalt, Variation, Umsetzbarkeit.', points: 20 },
      { type: 'open', q: 'Du sollst ein Logo für ein Yoga-Studio entwickeln. Welche Farben würdest du wählen und warum?', model: 'Grün- und Erdtöne (Salbei, Beige) – Grün = Natur, Ruhe, Gesundheit; Erdtöne wirken erdend. Optional Lila/Violett für Spiritualität. Ruhige, harmonische Farben.', points: 10 },
      { type: 'mc', q: 'Welches Dateiformat ist am besten für Logos im Druck geeignet?', options: ['JPG', 'GIF', 'PDF (Vektor)', 'BMP'], correct: 2, points: 5, explanation: 'PDF mit Vektordaten ist verlustfrei skalierbar und ideal für Druck.' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen Wortmarke, Bildmarke und Wort-Bild-Marke. Nenne je ein bekanntes Beispiel.', model: 'Wortmarke = nur Schrift (Google). Bildmarke = nur Symbol (Apple). Wort-Bild-Marke = Kombination (Adidas).', points: 10 },
      { type: 'draw', q: 'Skizziere ein Layout-Konzept für eine Visitenkarte (Vorder- und Rückseite). Achte auf Hierarchie und Weißraum.', model: 'Vorderseite: Logo, Name groß, Position kleiner. Rückseite: Kontaktdaten klar gestaffelt. Viel Weißraum für eleganten Eindruck.', points: 20 },
    ]
  },
  {
    title: 'Beispielprüfung 2 – Print & Packaging',
    duration: 90,
    description: 'Plakate, Flyer, Verpackung, Druckvorbereitung',
    questions: [
      { type: 'mc', q: 'Welche Auflösung wird für hochwertigen Druck benötigt?', options: ['72 DPI', '150 DPI', '300 DPI', '900 DPI'], correct: 2, points: 5, explanation: '300 DPI ist Standard für Druck. 72 DPI nur für Bildschirme.' },
      { type: 'checkbox', q: 'Was gehört zur Druckvorbereitung?', options: ['CMYK-Farbraum', 'Beschnittzugabe', 'RGB-Farbraum', '300 DPI Auflösung', 'Schriften einbetten'], correct: [0,1,3,4], points: 10, explanation: 'Druck = CMYK, Beschnitt, 300 DPI, Schriften eingebettet. RGB ist für Bildschirm.' },
      { type: 'open', q: 'Was ist ein Wickelfalz? Beschreibe den Aufbau und worauf bei der Gestaltung geachtet werden muss.', model: 'Wickelfalz: mind. eine Seite wird nach innen gewickelt. Innerste Seite muss schmaler sein, sonst wölbt sich der Flyer. Reihenfolge der Seiten muss logisch geplant werden.', points: 15 },
      { type: 'draw', q: 'Entwirf ein Plakat-Layout für ein Open-Air-Konzert. Markiere: Titel, Datum, Bild, Sponsor-Logos.', model: 'Starker Titel oben/zentral, Bild als Eyecatcher, Datum/Ort prominent, Sponsoren klein unten. Klare Hierarchie und Blickführung.', points: 20 },
      { type: 'open', q: 'Du gestaltest eine Schokoladenverpackung. Welche Bereiche müssen gestaltet werden und welche Pflichtangaben gehören wohin?', model: 'Bereiche: Vorder-, Rück-, Seiten- und Unterseite. Pflicht: Zutaten, Nährwerte, Allergene, Gewicht, Hersteller, MHD, Barcode – meist auf Rück- oder Unterseite.', points: 15 },
      { type: 'mc', q: 'Was bedeutet CMYK?', options: ['Color Mix Yellow Key', 'Cyan, Magenta, Yellow, Key (Schwarz)', 'Color, Magenta, Yellow, Black', 'Cyan, Mint, Yellow, Karmin'], correct: 1, points: 5, explanation: 'CMYK = Cyan, Magenta, Yellow, Key (Schwarz).' },
      { type: 'open', q: 'Was ist Beschnittzugabe und warum braucht man sie?', model: 'Zusätzlicher Rand (typisch 3 mm) über das Endformat hinaus. Beim Schneiden entstehen Toleranzen – ohne Beschnitt würden weiße Kanten sichtbar werden.', points: 10 },
      { type: 'draw', q: 'Skizziere die 6 Seiten eines Wickelfalz-Flyers. Nummeriere die Seiten in der richtigen Lese-Reihenfolge.', model: '6 Felder skizziert, korrekt nummeriert. Außenseiten 1+6 (Cover/Rückseite), Innenseiten 2-5 in Lese-Reihenfolge. Innerste Seite minimal schmaler.', points: 20 },
    ]
  },
  {
    title: 'Beispielprüfung 3 – Farbe, Typografie, Wirkung',
    duration: 90,
    description: 'Farblehre, Schriftwirkung, fachliche Begründungen',
    questions: [
      { type: 'mc', q: 'Was sind Komplementärfarben?', options: ['Sehr ähnliche Farben', 'Farben, die sich im Farbkreis gegenüberliegen', 'Pastellfarben', 'Schwarz und Weiß'], correct: 1, points: 5, explanation: 'Komplementärfarben liegen im Farbkreis gegenüber (Rot/Grün, Blau/Orange).' },
      { type: 'checkbox', q: 'Welche Farben sind Primärfarben in der subtraktiven Farbmischung (Druck)?', options: ['Rot', 'Cyan', 'Gelb', 'Magenta', 'Grün', 'Blau'], correct: [1,2,3], points: 10, explanation: 'Subtraktiv (Druck): Cyan, Magenta, Yellow. RGB wäre additiv (Bildschirm).' },
      { type: 'open', q: 'Welche Wirkung haben Serifen- vs. Sans-Serif-Schriften? Wann setzt man welche ein?', model: 'Serifen: klassisch, traditionell, seriös – ideal für Bücher, Zeitungen. Sans-Serif: modern, klar – ideal für Webdesign, junge Marken. Im Print oft Serifen, am Bildschirm Sans-Serif.', points: 15 },
      { type: 'open', q: 'Eine Marke für Premium-Kosmetik möchte ein neues Erscheinungsbild. Welche Farben, Schrift und Bildsprache empfiehlst du?', model: 'Schwarz, Gold, Weiß oder gedeckte Naturtöne (Luxus, Eleganz). Schrift: hochwertige Serifen oder feine Sans-Serif. Bildsprache: hochwertige Produktfotos, viel Weißraum, minimalistisch.', points: 15 },
      { type: 'mc', q: 'Welche Wirkung hat die Farbe Blau hauptsächlich?', options: ['Energie und Aufregung', 'Vertrauen und Ruhe', 'Wärme und Sommer', 'Gefahr'], correct: 1, points: 5, explanation: 'Blau = Vertrauen, Ruhe, Sicherheit. Häufig bei Banken, Tech.' },
      { type: 'draw', q: 'Erstelle eine kleine Farbpalette (5 Farben) für eine Kinderbuch-Marke. Markiere Hauptfarbe, Akzent und neutrale Töne.', model: '5 Farbfelder, kindgerecht, freundlich. Z.B. Sonnengelb (Haupt), Korallrot (Akzent), Türkis, Creme, warmes Grau (neutral).', points: 15 },
      { type: 'open', q: 'Was bedeutet typografische Hierarchie? Erkläre an einem Beispiel mit mindestens 3 Hierarchiestufen.', model: 'Inhalte werden durch Schriftgröße/-gewicht nach Wichtigkeit geordnet. Beispiel Plakat: H1 "Sommerfest" 80pt fett, H2 "15. Juli" 32pt halbfett, Body 14pt regular.', points: 10 },
      { type: 'draw', q: 'Skizziere eine Schrift-Hierarchie für eine Magazin-Doppelseite (Titel, Untertitel, Lead, Fließtext, Bildunterschrift).', model: 'Deutliche Größenstaffelung. Titel sehr groß, Untertitel mittel, Lead leicht hervorgehoben, Fließtext klein, Bildunterschrift am kleinsten.', points: 25 },
    ]
  },
  {
    title: 'Beispielprüfung 4 – Konzept & Bildgestaltung',
    duration: 90,
    description: 'Moodboard, Storyboard, Fotografie, Bildkomposition',
    questions: [
      { type: 'open', q: 'Was ist ein Moodboard und wozu dient es? Welche Elemente gehören typischerweise hinein?', model: 'Visuelle Zusammenstellung aus Bildern, Farben, Texturen, Schriften. Dient zur Inspiration und Kundenpräsentation. Elemente: Referenzbilder, Farbpaletten, Schriftbeispiele, Texturen, Stichwörter.', points: 15 },
      { type: 'mc', q: 'Was ist der Goldene Schnitt in der Fotografie?', options: ['Motiv liegt mittig', 'Motiv liegt etwa auf 1/3 des Bildes', 'Motiv ist sehr klein', 'Motiv liegt am Bildrand'], correct: 1, points: 5, explanation: 'Goldener Schnitt: Motiv nicht mittig, sondern auf etwa einem Drittel.' },
      { type: 'checkbox', q: 'Welche Faktoren beeinflussen die Belichtung eines Fotos?', options: ['Blende', 'Verschlusszeit', 'ISO', 'Speicherkartengröße', 'Brennweite'], correct: [0,1,2], points: 10, explanation: 'Belichtungsdreieck: Blende, Verschlusszeit, ISO.' },
      { type: 'open', q: 'Erkläre die Wirkung von Frosch- und Vogelperspektive in der Fotografie.', model: 'Froschperspektive (von unten): mächtig, dominant. Vogelperspektive (von oben): klein, übersichtlich, manchmal verletzlich.', points: 10 },
      { type: 'draw', q: 'Skizziere ein Storyboard mit 4 Bildern für einen 30-Sekunden-Werbespot eines Smartphones.', model: '4 nummerierte Felder: 1. Problem/Ausgangssituation, 2. Produkt-Einführung, 3. Anwendung/Vorteil, 4. Markenlogo/CTA. Mit Stichworten.', points: 25 },
      { type: 'open', q: 'Was bedeutet "Bildsprache" einer Marke? Nenne ein Beispiel.', model: 'Einheitliche visuelle Erscheinung der Bilder einer Marke. Beispiel Apple: minimalistische Produktfotos, viel Weißraum, klare Inszenierung. Erkennbar an konsistenter Beleuchtung, Farbschema, Bildausschnitten.', points: 15 },
      { type: 'mc', q: 'Wofür braucht man Ebenen in der Bildbearbeitung?', options: ['Damit das Bild größer wird', 'Für zerstörungsfreies Arbeiten', 'Damit die Datei kleiner wird', 'Für mehr Farben'], correct: 1, points: 5, explanation: 'Ebenen ermöglichen zerstörungsfreies Arbeiten – Änderungen rückgängig machen oder anpassen.' },
      { type: 'draw', q: 'Skizziere eine Bildkomposition mit "Drittel-Regel" – Landschaft mit Person.', model: 'Bildrahmen mit 3×3 Raster. Horizont auf einer Drittellinie. Person auf einem der vier Schnittpunkte.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 5 – Gesamt & Fachliche Begründungen',
    duration: 90,
    description: 'Mischung aller Themen mit Fokus auf Begründungen',
    questions: [
      { type: 'open', q: 'Du gestaltest eine Verpackung für ein veganes Tiefkühlgericht. Wähle Farben, Schrift und Bildsprache und begründe.', model: 'Grün-Erdtöne (Natur, Bio), Weiß für Frische, Akzente in Orange/Gelb. Schrift: moderne Sans-Serif + handschriftlicher Akzent. Bildsprache: appetitliches Foto. Zielgruppe: gesundheits- und umweltbewusst.', points: 20 },
      { type: 'checkbox', q: 'Welche Gestaltungsprinzipien helfen, ein Layout strukturiert wirken zu lassen?', options: ['Kontrast', 'Hierarchie', 'Weißraum', 'Chaos', 'Ausrichtung an Raster'], correct: [0,1,2,4], points: 10, explanation: 'Strukturierte Layouts: Kontrast, Hierarchie, Weißraum, Raster. Chaos ist das Gegenteil.' },
      { type: 'open', q: 'Erkläre, warum Vektorgrafiken für Logos besser geeignet sind als Pixelgrafiken.', model: 'Vektor: mathematische Formen, verlustfrei skalierbar. Pixel: feste Punkte, beim Vergrößern unscharf. Logos müssen in vielen Größen einsetzbar sein – Vektor ist die einzige sinnvolle Wahl.', points: 10 },
      { type: 'mc', q: 'Was ist das Ziel von "Regalwirkung" im Packaging Design?', options: ['Geringer Platzbedarf', 'Im Regal auffallen und erkennbar sein', 'Stapelbarkeit', 'Recyclingfähigkeit'], correct: 1, points: 5, explanation: 'Regalwirkung: Produkt soll sich im Regal gegen Konkurrenz visuell durchsetzen.' },
      { type: 'draw', q: 'Entwickle ein vollständiges Logo-Konzept (Skizze + finale Reinzeichnung) für eine Surfschule "Wellenreiter Sylt".', model: '2-3 Skribbles + 1 ausgearbeitete Reinzeichnung. Mögliche Motive: Welle, Surfbrett, Möwe. Reduzierte Form, klare Linien. Wort-Bild-Marke wahrscheinlich.', points: 25 },
      { type: 'open', q: 'Welche Fragen würdest du einem Kunden stellen, bevor du mit dem Designprozess beginnst?', model: '1. Zielgruppe? 2. Botschaft/Markenversprechen? 3. Welche Wirkung? 4. Bestehende CI? 5. Mitbewerber? 6. Budget/Zeitrahmen? 7. Welche Medien? 8. Vorlieben/No-Gos?', points: 15 },
      { type: 'open', q: 'Erkläre den Unterschied zwischen Wireframe, Mockup und Prototyp.', model: 'Wireframe: Strukturskizze ohne Design. Mockup: realistische Vorschau mit finalem Design (statisch). Prototyp: klickbares, interaktives Modell.', points: 15 },
    ]
  },
];
