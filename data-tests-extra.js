// ===== ZUSÄTZLICHE PRÜFUNGEN (Prüfungen 6-8 pro Fach) =====

const TESTS_GG_EXTRA = [
  {
    title: 'Beispielprüfung 6 – Packaging Praxis (Print-Schwerpunkt)',
    duration: 120,
    description: 'Komplette Verpackungsgestaltung: Faltschachtel, Etikett, Mockup',
    questions: [
      { type: 'open', q: 'Du sollst eine Faltschachtel für ein Premium-Tee-Produkt entwerfen. Welche Maße / Bestandteile (Klebelaschen, Boden, Deckel, Seiten) muss das Stanzlayout enthalten? Beschreibe kompakt.', model: 'Stanzlayout: 4 Seitenflächen (Front, Rück, 2 Seiten), Deckel + Einsteckklappe, Boden mit Klebelaschen, seitliche Klebelaschen mind. 8-10 mm. Knicklinien gestrichelt, Schnittlinien durchgezogen markieren. Beschnittzugabe 3 mm an allen Außenkanten.', points: 15 },
      { type: 'draw', q: 'Skizziere das Stanzschema (Falt- und Schnittlinien) einer Faltschachtel inkl. Klebelaschen. Markiere Falz und Schnitt unterschiedlich.', model: 'Erwartet: aufgeklapptes Schema mit 4 Seitenflächen, Boden + Deckel, sichtbaren Klebelaschen. Falzlinien gestrichelt, Schnittlinien durchgezogen. Beschriftungen.', points: 25 },
      { type: 'mc', q: 'Was ist beim Druckdaten-Export für eine Faltschachtel zwingend?', options: ['RGB-Farbraum', 'CMYK + Beschnitt + 300 DPI + Stanzkontur als Schmuckfarbe', '72 DPI', 'PNG mit Transparenz'], correct: 1, points: 5, explanation: 'Druck erfordert CMYK, Beschnitt, 300 DPI. Die Stanzkontur wird als separate Schmuckfarbe (z.B. "Stanze") angelegt.' },
      { type: 'checkbox', q: 'Was gehört auf eine Lebensmittelverpackung als Pflichtangabe?', options: ['Zutatenliste', 'Allergene', 'Lieblingszutat des Designers', 'Mindesthaltbarkeitsdatum', 'Nährwerttabelle', 'Hersteller / Anschrift'], correct: [0,1,3,4,5], points: 10, explanation: 'Pflicht: Zutaten, Allergene (hervorgehoben), MHD, Nährwerte, Hersteller. Die Lieblingszutat des Designers ist irrelevant.' },
      { type: 'open', q: 'Welche Druck-Veredelungen kennst du und welche eignen sich für Premium-Verpackungen?', model: 'Heißfolienprägung (Gold/Silber → Luxus), Blindprägung (geprägter Effekt ohne Farbe), Soft-Touch-Lack (samtige Haptik), UV-Spotlack (selektiver Glanz), Reliefprägung. Premium: Heißfolie + Soft-Touch oder Spotlack.', points: 10 },
      { type: 'draw', q: 'Entwirf das fertige Etikett (Vorderseite) der Tee-Verpackung. Logo, Sortenname, Geschmackshinweis, Bild/Symbol, Pflichtangaben-Platz.', model: 'Klare Hierarchie: Markenlogo prominent oben, Sortenname groß und auffällig, kleiner Geschmackshinweis, dezentes Bild/Symbol, Platzhalter für Pflichtangaben unten/seitlich.', points: 25 },
      { type: 'open', q: 'Wie machst du ein realistisches Mockup deiner Faltschachtel? Nenne 2 Wege.', model: '1. Eigene Schachtel ausdrucken, ausschneiden, falten, kleben und fotografieren. 2. Digital: Mockup-Vorlage (PSD) mit Smart-Object nutzen, Design einfügen → realistische Vorschau.', points: 10 },
      { type: 'mc', q: 'Welches Material eignet sich für eine stabile Faltschachtel?', options: ['80g Kopierpapier', 'Karton ab 250-350g/m²', 'Transparente Folie', 'Aquarellpapier'], correct: 1, points: 5, explanation: 'Karton 250-350 g/m² ist Standard für Faltschachteln (stabil und faltbar).' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen Stanze, Falz und Beschnitt im Druckworkflow.', model: 'Stanze: Schnittkontur, nach der die Form ausgestanzt wird (separate Schmuckfarbe). Falz: gestrichelte Linie, an der gefaltet wird (auch oft als Schmuckfarbe). Beschnitt: zusätzlicher Rand (3 mm) über die Stanzkante hinaus, damit beim Schneiden keine weißen Kanten entstehen.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 7 – Designanalyse & Kritik',
    duration: 90,
    description: 'Bestehende Designs analysieren, kritisieren, verbessern',
    questions: [
      { type: 'open', q: 'Analysiere ein Plakat (gedanklich oder Beispiel deiner Wahl): Was ist die Hauptbotschaft? Welche gestalterischen Mittel werden eingesetzt? Funktioniert die Blickführung?', model: 'Beispielanalyse: Hauptbotschaft erkennen (z.B. "Konzert am 12.7."). Mittel: starke Typografie, kontrastreiche Farben, dominantes Bild. Blickführung: Auge wird vom großen Bild zur Schrift zur Datumsangabe geleitet. Bewertung: gelingt → klare Hierarchie; misslingt → zu viele konkurrierende Elemente.', points: 20 },
      { type: 'mc', q: 'Welcher Aspekt ist am wichtigsten bei der Plakatgestaltung für Fernwirkung?', options: ['Detailreiche Illustrationen', 'Großer Kontrast und reduzierte Information', 'Viele kleine Texte', 'Pastellfarben'], correct: 1, points: 5, explanation: 'Plakate werden aus der Ferne gesehen. Kontrast + Reduktion = lesbar.' },
      { type: 'checkbox', q: 'Welche Fehler sind typisch in Anfänger-Designs?', options: ['Zu viele Schriftarten', 'Reduzierte Farbpalette', 'Schlechte Lesbarkeit', 'Klare Hierarchie', 'Überladene Layouts', 'Fehlende Begründungen'], correct: [0,2,4,5], points: 10, explanation: 'Typische Fehler: viele Schriften, schlechte Lesbarkeit, überladen, ohne Begründung.' },
      { type: 'open', q: 'Vergleiche zwei Logos eines bekannten Unternehmens (alt vs. neu, z.B. Burger King 2021). Was wurde gestalterisch verändert und warum?', model: 'Beispiel BK: vom 3D-glanz-Design zurück zu flacher, retro-orientierter Bildmarke. Reduktion auf Wesentliches, klarere Lesbarkeit auf digitalen Geräten, zeitlosere Wirkung. Begründung: Markenrelaunch, Modernisierung durch Vereinfachung, bessere Skalierbarkeit (Apps, Social).', points: 15 },
      { type: 'draw', q: 'Skizziere ein bestehendes Design deiner Wahl in vereinfachter Form, dann eine verbesserte Version daneben. Markiere die Änderungen.', model: 'Erwartet: 2 Skizzen nebeneinander (Vorher / Nachher), erkennbare Verbesserungen (z.B. mehr Weißraum, klarere Hierarchie, weniger Schriftarten). Pfeile/Markierungen wo verbessert wurde.', points: 25 },
      { type: 'open', q: 'Welche 3 Fragen würdest du dir selbst stellen, um dein eigenes Design kritisch zu überprüfen?', model: '1. Erkennt die Zielgruppe sofort die Botschaft? 2. Stimmt die typografische Hierarchie? 3. Funktioniert das Design auch in S/W und in kleiner Größe? Zusatz: Sind alle gestalterischen Entscheidungen bewusst und begründbar?', points: 10 },
      { type: 'mc', q: 'Was bedeutet "form follows function"?', options: ['Form ist wichtiger als Funktion', 'Die Funktion bestimmt die Form', 'Beide sind gleich wichtig', 'Der Designer entscheidet allein'], correct: 1, points: 5, explanation: 'Designprinzip von Louis Sullivan: erst die Funktion klären, daraus folgt die Form/Gestaltung.' },
      { type: 'open', q: 'Begründe, warum dein Design für Zielgruppe X passt. Wähle eine Zielgruppe und beschreibe.', model: 'Beispiel Zielgruppe "Senioren 65+": große, gut lesbare serifenlose Schrift; hoher Kontrast; klare Strukturen; ruhige Farben; reduzierte Information; keine Modetrends. Begründung: Lesbarkeit, Vertrautheit, Vertrauen.', points: 10 },
    ]
  },
  {
    title: 'Beispielprüfung 8 – Konzept & Kreativprozess',
    duration: 90,
    description: 'Brainstorming, Moodboard, Stilrichtung, Storyboard',
    questions: [
      { type: 'open', q: 'Erkläre den kompletten Kreativprozess von Briefing bis Reinzeichnung in 6 Schritten.', model: '1. Briefing/Recherche (Ziel, Zielgruppe, Konkurrenz). 2. Brainstorming (Wortassoziationen, Mindmap). 3. Moodboard (Stimmung, Farben, Stil). 4. Skribbles (10+ Ideen). 5. Variantenauswahl & Ausarbeitung. 6. Reinzeichnung (final, sauber, druckfähig).', points: 15 },
      { type: 'mc', q: 'Was ist KEIN Bestandteil eines Moodboards?', options: ['Inspirations-Bilder', 'Farbpalette', 'Stichworte zur Stimmung', 'Detaillierte Stanzplanung'], correct: 3, points: 5, explanation: 'Moodboard zeigt Stimmung/Richtung. Stanzplanung gehört in die Reinzeichnung.' },
      { type: 'checkbox', q: 'Welche Stilrichtungen sind im Designkontext üblich?', options: ['Minimalistisch', 'Retro/Vintage', 'Futuristisch', 'Quadratisch (kein Stil)', 'Handgemacht / Hand-Lettering', 'Brutalismus (Web)'], correct: [0,1,2,4,5], points: 10, explanation: 'Etablierte Stile: minimalistisch, retro, futuristisch, handgemacht, brutalist. "Quadratisch" ist kein Stil.' },
      { type: 'draw', q: 'Erstelle ein Mini-Moodboard (4 Felder) für eine Marke deiner Wahl. Felder: Bilder/Stimmung · Farbpalette · Schrift · Stichworte.', model: '4 Felder erkennbar: Inspirationsbilder/Stimmung, 4-5 Farbfelder, Schriftbeispiele, 3-5 Stichworte zur Wirkung. Konsistente Stilrichtung.', points: 25 },
      { type: 'open', q: 'Was ist ein Storyboard und welche Inhalte gehören in eine Storyboard-Zelle?', model: 'Storyboard = Skizzen-Abfolge zur Planung von Filmen/Werbespots/Animationen. Pro Zelle: Bildausschnitt (Skizze), Beschreibung der Handlung/Szene, Kameraeinstellung (Totale, Halbtotal, Nahaufnahme), Übergang zur nächsten Szene, Ton/Sound-Hinweise.', points: 15 },
      { type: 'draw', q: 'Skizziere ein 6-Bilder-Storyboard für einen 60s-Werbespot deiner Wahl. Mit Kameraeinstellung pro Szene.', model: '6 nummerierte Felder mit Skizzen + Beschriftungen (Total, Nah, Halbtotal etc.). Klare Erzählstruktur: Aufmerksamkeit → Problem → Produkt → Lösung → Emotion → Logo/CTA.', points: 25 },
      { type: 'open', q: 'Wie würdest du ein Konzept einem Kunden präsentieren? Nenne 4 Punkte.', model: '1. Briefing kurz wiederholen (zeigt Verständnis). 2. Konzept-Idee in einem Satz erklären. 3. Moodboard und Skribbles zeigen (Prozess). 4. Finalen Entwurf mit fachlichen Begründungen vorstellen. Zusatz: Mockups für Realitätsbezug.', points: 10 },
    ]
  },
];

const TESTS_KM_EXTRA = [
  {
    title: 'Beispielprüfung 6 – Komplettes Webprojekt',
    duration: 120,
    description: 'Von Konzept über Wireframe bis fertiger Designsystem-Vorlage',
    questions: [
      { type: 'open', q: 'Erstelle ein Konzept für eine Website eines Tierheims. Beschreibe Zielgruppen, Hauptziele und nötige Funktionen.', model: 'Zielgruppen: Tieradoptanten, Spender, ehrenamtliche Helfer. Ziele: Tiere präsentieren, Vermittlung erleichtern, Spenden sammeln, Ehrenamt informieren. Funktionen: Tierprofile mit Fotos/Beschreibung, Adoptions-Anfrage-Formular, Spenden-Button, Newsletter, Über-uns, FAQ, Kontakt.', points: 20 },
      { type: 'draw', q: 'Skizziere die Sitemap der Tierheim-Website. Mind. 7 Seiten, mit Hierarchie (Haupt- und Unterpunkte).', model: 'Hauptebene: Start, Tiere (Hunde/Katzen/Kleintiere als Unterpunkte), Adoption, Spenden, Über uns, Helfer-werden, Kontakt. Klare Baumstruktur.', points: 20 },
      { type: 'checkbox', q: 'Welche Komponenten sollten in einem Designsystem für diese Site definiert sein?', options: ['Buttons', 'Farben', 'Typo-Skala', 'Lieblings-CSS-Trick', 'Form-Inputs', 'Tier-Karten-Komponente'], correct: [0,1,2,4,5], points: 10, explanation: 'Designsystem: Buttons, Farben, Typo, Inputs, projektspezifische Komponenten.' },
      { type: 'draw', q: 'Wireframe Mobile (375px): Startseite Tierheim mit Hero, Tier-Karussell, Spenden-CTA, Footer.', model: 'Mobiles Layout: Hero mit Bild + Headline + CTA, horizontales Karussell mit Tier-Karten, prominenter Spenden-Button, Footer mit Links. Touch-friendly.', points: 20 },
      { type: 'open', q: 'Wie würdest du sicherstellen, dass die Website barrierefrei ist? 4 konkrete Maßnahmen.', model: '1. Hoher Farbkontrast (WCAG AA: 4.5:1). 2. Alt-Texte für alle Tier-Fotos. 3. Tastaturnavigation komplett möglich. 4. Klare semantische HTML-Struktur (h1-h6). 5. Schriftgröße mindestens 16px, skalierbar.', points: 15 },
      { type: 'mc', q: 'Welcher Workflow ist sinnvoll?', options: ['Design → Konzept → Wireframe', 'Wireframe → Design → Konzept', 'Konzept → Wireframe → Design → Prototyp', 'Prototyp → Konzept → Design'], correct: 2, points: 5, explanation: 'Logische Reihenfolge: erst Konzept, dann Struktur (Wireframe), dann visuelles Design, dann interaktiver Prototyp.' },
      { type: 'open', q: 'Welche Inhalte gehören in eine Tier-Detailseite (Profil)?', model: 'Tierfoto(s), Name, Alter, Rasse/Art, Geschlecht, Größe, Charakter/Beschreibung, Verträglichkeit (Hunde/Katzen/Kinder), seit wann im Tierheim, Adoptions-Anfrage-Button, Hinweise zur Adoption. Optional: Video, weitere Bilder.', points: 10 },
    ]
  },
  {
    title: 'Beispielprüfung 7 – UI-Patterns & Microinteractions',
    duration: 90,
    description: 'Komponenten, States, Feedback, kleine UX-Details',
    questions: [
      { type: 'open', q: 'Erkläre, warum Hover-, Active-, Focus- und Disabled-States für Buttons wichtig sind.', model: 'States geben dem Nutzer Feedback. Hover: zeigt Klickbarkeit. Active: bestätigt Klick. Focus: wichtig für Tastaturnutzer (Barrierefreiheit). Disabled: signalisiert, dass Aktion gerade nicht möglich. Ohne States wirkt das Interface tot/unklar.', points: 15 },
      { type: 'checkbox', q: 'Welche dieser UI-Patterns sind sinnvoll?', options: ['Skeleton-Loader während Daten laden', 'Pop-up bei jedem Klick', 'Inline-Validierung in Formularen', 'Bestätigung vor destruktiven Aktionen', 'Nicht-schließbare Werbe-Banner'], correct: [0,2,3], points: 10, explanation: 'Sinnvoll: Skeleton-Loader, Inline-Validierung, Bestätigungs-Dialoge. Nicht: Popup-Spam, blockierende Werbung.' },
      { type: 'mc', q: 'Was ist eine Microinteraction?', options: ['Eine kleine API', 'Eine kleine animierte Reaktion auf Nutzeraktion', 'Ein Mini-Spiel', 'Ein winziger Bug'], correct: 1, points: 5, explanation: 'Microinteraction = kleine, oft animierte Rückmeldung auf eine Nutzeraktion (z.B. Like-Animation).' },
      { type: 'draw', q: 'Skizziere ein Formular mit Inline-Validierung (E-Mail, Passwort, Bestätigungs-Passwort) inkl. Fehler- und Erfolgs-States.', model: 'Drei Eingabefelder, jeweils mit Label. Fehler: rot mit Icon + Hilfetext darunter. Erfolg: grün mit Häkchen. Passwort-Stärke-Anzeige. Submit-Button am Ende.', points: 20 },
      { type: 'open', q: 'Erkläre den Unterschied zwischen Modal, Drawer und Toast – wann nutzt man welche?', model: 'Modal: blockierender Dialog für wichtige Entscheidungen / komplexe Eingaben. Drawer: seitlich einfahrendes Panel für Sekundär-Inhalte (Filter, Settings). Toast: kurze, nicht-blockierende Benachrichtigung (z.B. "Erfolgreich gespeichert"). Modal stoppt User, Toast informiert beiläufig.', points: 15 },
      { type: 'draw', q: 'Skizziere einen Filter-Drawer (von rechts einfahrend) für eine Produktsuche. Mit Filter-Optionen, Reset und Anwenden-Button.', model: 'Halbtransparenter Hintergrund, von rechts einfahrendes Panel. Header mit Titel + Schließen-Icon. Filter-Optionen (Kategorien, Preis-Slider, Checkboxen). Sticky Footer mit Reset und Anwenden-Button.', points: 20 },
      { type: 'open', q: 'Was ist Ladezustand-Design (Skeleton vs. Spinner) und wann nutzt man was?', model: 'Skeleton: Platzhalter in Form des erwarteten Layouts (graue Boxen) – wirkt schneller, weil Nutzer Struktur schon sieht. Eignet sich für Listen/Karten. Spinner: einfacher Lade-Kreisel – für kurze, ungewisse Wartezeiten oder kleine Aktionen (Button-Submit).', points: 10 },
      { type: 'mc', q: 'Welche Reaktionszeit gilt als "sofort" für UI-Feedback?', options: ['Unter 100ms', 'Unter 1 Sekunde', '2-5 Sekunden', 'Über 10 Sekunden'], correct: 0, points: 5, explanation: 'Unter 100ms wirkt eine Reaktion als sofort. Bis 1s noch akzeptabel, darüber sollte ein Lade-Indikator erscheinen.' },
    ]
  },
  {
    title: 'Beispielprüfung 8 – Mobile App-Konzept',
    duration: 90,
    description: 'App-Konzept entwickeln, Onboarding, Navigation',
    questions: [
      { type: 'open', q: 'Konzipiere eine Fitness-Tracking-App. Beschreibe Hauptfunktionen, Zielgruppe und Differenzierung zu bestehenden Apps.', model: 'Zielgruppe: 20-45, sportlich aktiv, smartphone-affin. Hauptfunktionen: Workout-Tracking (Lauf, Rad, Krafttraining), Statistiken, Ziele, Community/Freunde. Differenzierung: KI-gestützte Trainingspläne, soziale Challenges, Integration mit Wearables, datenschutzfreundlich (lokale Speicherung).', points: 20 },
      { type: 'draw', q: 'Skizziere die 3-Screen-Onboarding-Sequenz für die App. Pro Screen: Bild/Icon, Headline, kurzer Text, "Weiter"-Button.', model: '3 vertikale Mobile-Screens nebeneinander. Pro Screen: zentrales Icon/Bild, kurze Headline (3-5 Wörter), 1-2 Zeilen Erklärtext, Pagination-Dots, Weiter-Button. Letzter Screen: "Los gehts!"-Button.', points: 20 },
      { type: 'mc', q: 'Welche Mobile-Navigation eignet sich für eine App mit 5 Hauptbereichen?', options: ['Hamburger-Menü', 'Bottom-Tab-Bar', 'Karussell', 'Akkordeon'], correct: 1, points: 5, explanation: 'Bottom-Tab-Bar ist ideal für 3-5 Hauptbereiche – ständig erreichbar, klar sichtbar.' },
      { type: 'checkbox', q: 'Welche Aspekte sind beim mobilen UI-Design besonders wichtig?', options: ['Touch-Targets min. 44×44px', 'Daumenfreundliche Bereiche', 'Hover-Effekte', 'Klare Hierarchie auf kleinem Screen', 'Hochgeschwindigkeits-Animationen', 'Performance / Ladezeit'], correct: [0,1,3,5], points: 10, explanation: 'Mobile: Touch-Targets, Daumen-Reichweite, Hierarchie, Performance. Hover gibt es nicht auf Touch, schnelle Animationen sind Sekundär.' },
      { type: 'draw', q: 'Wireframe: Workout-Detailseite (Mobile). Karte mit Werten (Distanz, Zeit, Kalorien), Karte/Verlauf, Aktions-Buttons.', model: 'Header mit Zurück + Datum, Hero-Karte mit Hauptmetrik, Werte-Grid (Distanz, Zeit, Kalorien, Pace), Karten-Vorschau, Aktionen (Teilen, Bearbeiten, Löschen).', points: 20 },
      { type: 'open', q: 'Welche Daten-Visualisierungen eignen sich für Fitness-Statistiken? Nenne 3 Beispiele und Einsatzgebiete.', model: '1. Liniendiagramm: Verlauf über Zeit (Gewicht, Pace pro Woche). 2. Balkendiagramm: Vergleich (Workouts pro Tag der Woche). 3. Donut-Chart: Verteilung (Sportarten-Anteil). Optional Heatmap (Aktivität pro Wochentag).', points: 15 },
      { type: 'open', q: 'Was ist "Empty State" und warum ist gutes Empty-State-Design wichtig?', model: 'Empty State = Zustand ohne Daten (z.B. neuer Nutzer hat noch kein Workout aufgenommen). Wichtig, weil: erster Eindruck, Orientierung, motiviert zur Aktion. Gutes Empty-State: hilfreiches Bild/Icon, freundlicher Text, klarer CTA ("Erstes Workout starten").', points: 10 },
    ]
  },
];

const TESTS_IT_EXTRA = [
  {
    title: 'Beispielprüfung 6 – Praxis-Fälle Recht',
    duration: 90,
    description: 'Konkrete Praxis-Szenarien rechtlich bewerten',
    questions: [
      { type: 'open', q: 'Du betreibst einen kleinen Online-Shop. Eine Kundin verlangt Auskunft, welche Daten du über sie speicherst. Wie reagierst du? Welche Frist hast du?', model: 'Du bist nach DSGVO Art. 15 zur Auskunft verpflichtet. Frist: 1 Monat (verlängerbar auf 3 bei komplexen Anfragen). Auskunft kostenlos, schriftlich oder elektronisch. Inhalte: gespeicherte Daten, Zwecke, Empfänger, Speicherdauer, Rechte. Nichtbeantwortung kann Bußgeld nach sich ziehen.', points: 15 },
      { type: 'mc', q: 'Ein Mitarbeiter kopiert versehentlich eine Kundendatenbank an eine falsche E-Mail-Adresse. Was ist zu tun?', options: ['Ignorieren, war Versehen', 'Datenschutzpanne in 72h melden', 'Erst eigenen Anwalt fragen, dann nichts tun', 'Den Mitarbeiter fristlos kündigen'], correct: 1, points: 5, explanation: 'DSGVO Art. 33: Datenpannen müssen innerhalb von 72 Stunden an die Aufsichtsbehörde gemeldet werden, wenn Risiko für Betroffene besteht.' },
      { type: 'open', q: 'Ein Influencer postet ein Foto vor einem urheberrechtlich geschützten Wandgemälde. Welche rechtlichen Probleme könnten entstehen?', model: 'Mögliche Probleme: 1. Urheberrechtsverletzung am Wandgemälde (außer Panoramafreiheit greift bei dauerhaft öffentlich zugänglichen Werken). 2. Wenn Personen erkennbar im Bild: Recht am eigenen Bild. 3. Werbekennzeichnung wenn kommerziell. 4. Wenn Marke/Logo zu sehen: ggf. Markenrecht.', points: 15 },
      { type: 'checkbox', q: 'Welche Anforderungen muss ein gültiges Cookie-Banner erfüllen?', options: ['Aktive Einwilligung', 'Gleichwertige Ablehnen-Option', 'Vorausgewählte Checkboxen', 'Granulare Auswahl möglich', 'Verlinkte Datenschutzerklärung', 'Banner nicht schließbar'], correct: [0,1,3,4], points: 10, explanation: 'Erforderlich: aktive Einwilligung, Ablehnen gleichwertig, granulare Auswahl, Datenschutzlink. Vorausgewählt = unzulässig, nicht-schließbar = nicht zwingend, aber muss eine Wahl möglich sein.' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen "Auftragsverarbeitung" und "Gemeinsame Verantwortlichkeit" mit je einem Beispiel.', model: 'Auftragsverarbeitung (AV): Dienstleister verarbeitet Daten weisungsgebunden für den Verantwortlichen. Beispiel: Hosting-Provider, der Webseiten-Daten speichert. AV-Vertrag (Art. 28) nötig. Gemeinsame Verantwortlichkeit: zwei Verantwortliche entscheiden gemeinsam über Zwecke und Mittel. Beispiel: Facebook-Fanpage-Betreiber + Facebook (EuGH-Urteil).', points: 15 },
      { type: 'draw', q: 'Skizziere ein Datenschutz-Schema: wie fließen Kundendaten von Webshop → Hosting → Zahlungsdienstleister → Versanddienstleister. Markiere wo AV-Verträge nötig sind.', model: 'Pfeile zwischen den 4 Akteuren. Bei Hosting, Zahlungsdienstleister und Versanddienstleister: AV-Vertrag-Markierung (z.B. Vertragssymbol oder Beschriftung). Beim Versand kann es auch separate Verantwortlichkeit sein.', points: 20 },
      { type: 'open', q: 'Welche Rechtsgrundlagen für Datenverarbeitung kennt die DSGVO? Nenne mindestens 4.', model: '1. Einwilligung (Art. 6 Abs. 1 a). 2. Vertragserfüllung (b) – z.B. Bestellabwicklung. 3. Rechtliche Verpflichtung (c) – z.B. Steuerunterlagen. 4. Lebenswichtige Interessen (d). 5. Öffentliche Aufgabe (e). 6. Berechtigtes Interesse (f) – mit Abwägung.', points: 10 },
      { type: 'mc', q: 'Wie hoch können DSGVO-Bußgelder maximal sein?', options: ['1.000 €', '10.000 €', 'Bis zu 4% des weltweiten Jahresumsatzes oder 20 Mio. €', 'Maximal 5 Mio. €'], correct: 2, points: 5, explanation: 'DSGVO Art. 83: bis zu 20 Mio. € oder 4 % des weltweiten Jahresumsatzes des Vorjahres – der höhere Wert gilt.' },
    ]
  },
  {
    title: 'Beispielprüfung 7 – Sicherheit & Verschlüsselung tiefgehend',
    duration: 90,
    description: 'Verschlüsselungsmethoden, Angriffe, Schutzmaßnahmen',
    questions: [
      { type: 'open', q: 'Erkläre den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung. Welche Verfahren werden wofür kombiniert (HTTPS)?', model: 'Symmetrisch: ein Schlüssel zum Ver-/Entschlüsseln (z.B. AES). Schnell, aber Schlüssel muss sicher übertragen werden. Asymmetrisch: Schlüsselpaar aus öffentlich + privat (z.B. RSA). Langsamer, aber Schlüsseltausch möglich. HTTPS: kombiniert beide – asymmetrisch zum Austausch des symmetrischen Sitzungsschlüssels, dann symmetrische Verschlüsselung der Datenübertragung (Performance).', points: 20 },
      { type: 'mc', q: 'Was ist Phishing?', options: ['Ein Verschlüsselungsverfahren', 'Versuch, Zugangsdaten durch gefälschte Mails/Sites zu stehlen', 'Ein Backup-System', 'Eine Firewall'], correct: 1, points: 5, explanation: 'Phishing: Betrugsversuche, bei denen Nutzer per gefälschter E-Mail/Website zur Preisgabe von Zugangsdaten verleitet werden.' },
      { type: 'checkbox', q: 'Welche Maßnahmen schützen vor Phishing?', options: ['Absender-Adresse genau prüfen', 'Auf Links blind klicken', '2FA aktivieren', 'Mitarbeiter-Schulungen', 'Aktuelle Spamfilter', 'Persönliche Daten per Mail teilen'], correct: [0,2,3,4], points: 10, explanation: 'Schutz: Absender prüfen, 2FA, Schulungen, Spamfilter. Niemals blind klicken oder Daten unverschlüsselt mailen.' },
      { type: 'open', q: 'Was ist ein Brute-Force-Angriff und wie schützt man sich davor?', model: 'Brute-Force: automatisierter Angriff, bei dem alle möglichen Passwörter durchprobiert werden. Schutz: 1. Lange, komplexe Passwörter (mind. 12 Zeichen, Mix). 2. Account-Sperre nach X Fehlversuchen. 3. CAPTCHA bei Login. 4. Rate-Limiting. 5. 2FA – selbst bei geknacktem Passwort kein Zugriff.', points: 15 },
      { type: 'mc', q: 'Was bedeutet "Hashing"?', options: ['Reversible Verschlüsselung', 'Einweg-Funktion zur Erzeugung eines Fingerabdrucks', 'Datenkomprimierung', 'Datentransfer'], correct: 1, points: 5, explanation: 'Hashing: nicht-umkehrbare Funktion, erzeugt aus Daten einen Hash. Beispiel: Passwörter werden gehasht gespeichert (SHA-256, bcrypt).' },
      { type: 'open', q: 'Eine Firma erleidet einen Ransomware-Angriff. Welche 4 Sofortmaßnahmen sind zu treffen?', model: '1. Infizierte Systeme sofort vom Netzwerk trennen. 2. Datenpanne nach DSGVO an Behörde melden (72h). 3. NIE Lösegeld zahlen (keine Garantie + bestärkt Täter). 4. Polizei + IT-Forensik einschalten. 5. Backups prüfen + System sauber neu aufsetzen. 6. Mitarbeiter informieren.', points: 15 },
      { type: 'draw', q: 'Skizziere ein Schema einer 2FA-Anmeldung (User → Server) mit Token/SMS-Code.', model: 'User → Passwort an Server. Server prüft, sendet 2FA-Anfrage. User → 2FA-Code (aus App/SMS) an Server. Server validiert beide → Zugriff. Klare Pfeile + Beschriftungen.', points: 15 },
      { type: 'open', q: 'Was ist eine "Backup-Strategie 3-2-1"?', model: '3 Kopien der Daten (1 Original + 2 Backups), auf 2 verschiedenen Medien (z.B. NAS + Cloud), wovon 1 räumlich getrennt (Off-Site, Cloud oder anderer Ort). Schützt gegen Hardware-Ausfall, Diebstahl, Brand, Ransomware.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 8 – Internet, Netze & Cloud',
    duration: 90,
    description: 'IP, DNS, Cloud-Dienste, Datenstandort',
    questions: [
      { type: 'mc', q: 'Was macht ein DNS-Server?', options: ['Speichert Webseiten', 'Übersetzt Domain-Namen zu IP-Adressen', 'Verschlüsselt Daten', 'Verteilt E-Mails'], correct: 1, points: 5, explanation: 'DNS = Domain Name System. Übersetzt z.B. "google.com" in 142.250.74.46.' },
      { type: 'open', q: 'Erkläre, was passiert, wenn du in den Browser "www.beispiel.de" eingibst – Schritt für Schritt.', model: '1. Browser fragt DNS-Server nach IP von beispiel.de. 2. DNS antwortet mit IP. 3. Browser sendet HTTP(S)-Request an IP-Adresse. 4. Webserver verarbeitet Request, sendet HTML/CSS/JS zurück. 5. Browser rendert die Seite, fordert ggf. weitere Ressourcen (Bilder, Fonts) nach. 6. Seite ist sichtbar.', points: 15 },
      { type: 'checkbox', q: 'Welche dieser Dienste sind typische Cloud-Modelle?', options: ['IaaS (Infrastructure as a Service)', 'PaaS (Platform as a Service)', 'SaaS (Software as a Service)', 'XaaS (Xerox as a Service)', 'BaaS (Backend as a Service)'], correct: [0,1,2,4], points: 10, explanation: 'IaaS, PaaS, SaaS und BaaS sind etablierte Cloud-Modelle. "XaaS" ist erfunden.' },
      { type: 'open', q: 'Was ist der Unterschied zwischen IPv4 und IPv6? Warum war IPv6 nötig?', model: 'IPv4: 32-Bit, ca. 4,3 Mrd. Adressen, 4 Zahlenblöcke (z.B. 192.168.1.1). IPv6: 128-Bit, praktisch unendlich viele Adressen, hexadezimal. IPv6 nötig, weil IPv4-Adressen knapp wurden (durch IoT, weltweite Geräteexplosion). IPv6 hat zudem bessere Sicherheit (IPSec).', points: 15 },
      { type: 'mc', q: 'Wo liegen Daten in der Cloud datenschutzrechtlich kritisch?', options: ['Server in der EU', 'Server in den USA (CLOUD Act)', 'Server in Frankreich', 'Server in Deutschland'], correct: 1, points: 5, explanation: 'CLOUD Act erlaubt US-Behörden Zugriff auf Daten von US-Unternehmen, auch wenn Server in EU. Daher heikel für DSGVO-Konformität.' },
      { type: 'open', q: 'Welche Punkte solltest du prüfen, bevor du einen Cloud-Dienst datenschutzkonform einsetzt?', model: '1. Serverstandort (möglichst EU). 2. AV-Vertrag nach Art. 28 DSGVO abschließen. 3. Verschlüsselung in Transit + at Rest. 4. Datenexport möglich? (Exit-Strategie). 5. Zertifizierungen (ISO 27001, BSI C5). 6. Bei US-Anbieter: Standardvertragsklauseln + Schrems-II-Risiko prüfen.', points: 15 },
      { type: 'draw', q: 'Skizziere die Architektur eines klassischen Webauftritts: Client → Internet → Loadbalancer → Webserver-Cluster → Datenbank → Backup. Markiere wo HTTPS, wo VPN/intern.', model: 'Client mit HTTPS-Pfeil → Internet-Wolke → Loadbalancer (HTTPS-Endpunkt) → mehrere Webserver (intern HTTP/VPN) → Datenbank-Server → Backup-System. Sicherheits-Zonen markiert.', points: 20 },
      { type: 'open', q: 'Was bedeutet "Privacy by Design" und "Privacy by Default"?', model: 'Privacy by Design (Art. 25): Datenschutz wird von Anfang an in die Entwicklung mitgedacht (nicht später aufgesetzt). Privacy by Default: datenschutzfreundlichste Einstellung ist standardmäßig aktiv (z.B. Profil ist nicht öffentlich, Tracking ist aus). Beides ist gesetzliche Pflicht der DSGVO.', points: 10 },
    ]
  },
];
