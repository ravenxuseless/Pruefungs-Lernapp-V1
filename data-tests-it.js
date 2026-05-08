// ===== KOMPLETTE BEISPIELPRÜFUNGEN IT =====

const TESTS_IT = [
  {
    title: 'Beispielprüfung 1 – Urheberrecht & Bildrechte',
    duration: 90,
    description: 'Schwerpunkt: Medienrecht, CC, Recht am eigenen Bild',
    questions: [
      { type: 'mc', q: 'Wann entsteht das Urheberrecht?', options: ['Nach Anmeldung', 'Automatisch beim Erstellen', 'Erst nach Veröffentlichung', 'Nach 3 Jahren'], correct: 1, points: 5, explanation: 'Automatisch mit der Schaffung. Keine Anmeldung nötig.' },
      { type: 'checkbox', q: 'Welche Werke sind urheberrechtlich geschützt?', options: ['Originelles Logo', 'Eigenes Foto', 'Einfacher Kreis ohne Gestaltung', 'Selbstkomponierte Musik', 'Persönlich verfasstes Buch'], correct: [0,1,3,4], points: 10, explanation: 'Geschützt sind kreative Werke mit Schöpfungshöhe. Ein einfacher Kreis erreicht diese nicht.' },
      { type: 'open', q: 'Wie lange gilt das Urheberrecht und was passiert danach?', model: '70 Jahre nach dem Tod des Urhebers. Danach geht das Werk in die Gemeinfreiheit über und darf frei verwendet werden.', points: 10 },
      { type: 'open', q: 'Erkläre die Lizenz CC BY-NC-SA. Welche Bedingungen müssen erfüllt sein?', model: 'BY = Urheber muss genannt werden. NC = nicht kommerziell. SA = Weitergabe unter gleichen Bedingungen (gleiche Lizenz). Alle drei Bedingungen gleichzeitig.', points: 15 },
      { type: 'mc', q: 'Was ist Panoramafreiheit?', options: ['Recht, alles im Panoramaformat zu fotografieren', 'Erlaubnis, dauerhaft im öffentlichen Raum stehende Werke zu fotografieren', 'Erlaubnis für Drohnenflüge', 'Recht auf Privatsphäre'], correct: 1, points: 5, explanation: 'Panoramafreiheit: Werke, die dauerhaft im öffentlichen Raum stehen, dürfen fotografiert und veröffentlicht werden.' },
      { type: 'open', q: 'Du fotografierst auf einem Stadtfest 4 erkennbare Personen. Darfst du das Foto auf Instagram veröffentlichen? Begründe.', model: 'Grundsätzlich nein – das Recht am eigenen Bild verlangt eine Zustimmung der abgebildeten Personen. Ausnahme: bei großen Veranstaltungen sind Übersichtsaufnahmen ohne Hervorhebung Einzelner zulässig. Bei einer kleinen erkennbaren Gruppe braucht man die Einwilligung.', points: 15 },
      { type: 'open', q: 'Was ist der Unterschied zwischen einfachem und exklusivem Nutzungsrecht? Wann setzt ein Fotograf welches ein?', model: 'Einfach: mehrere dürfen nutzen (Stock-Fotos). Exklusiv: nur einer darf nutzen (z.B. Werbekampagne). Exklusiv ist teurer, da der Fotograf das Foto nicht mehrfach verkaufen kann.', points: 10 },
      { type: 'draw', q: 'Skizziere ein Diagramm/Schema, wie man Bilder im Web rechtssicher verwendet (Entscheidungsbaum).', model: 'Start: Habe ich das Bild selbst gemacht? Ja → Personen drauf? → Einwilligung? → OK. Nein → Lizenz vorhanden? → CC oder gekauft → Bedingungen prüfen → OK.', points: 20 },
    ]
  },
  {
    title: 'Beispielprüfung 2 – DSGVO & Datenschutz',
    duration: 90,
    description: 'Personenbezogene Daten, Nutzerrechte, Datenschutz-Praxis',
    questions: [
      { type: 'mc', q: 'Was ist KEIN personenbezogenes Datum?', options: ['E-Mail-Adresse', 'IP-Adresse', 'Postleitzahl einer ganzen Stadt', 'Foto einer Person'], correct: 2, points: 5, explanation: 'Eine PLZ einer ganzen Stadt lässt keine Personen-Identifikation zu.' },
      { type: 'checkbox', q: 'Welche Rechte haben Nutzer laut DSGVO?', options: ['Auskunft', 'Löschung', 'Berichtigung', 'Werbungssteuern', 'Widerspruch'], correct: [0,1,2,4], points: 10, explanation: 'DSGVO-Rechte: Auskunft, Löschung, Berichtigung, Widerspruch (auch Datenübertragbarkeit).' },
      { type: 'open', q: 'Was bedeutet "Datensparsamkeit" und "Zweckbindung"? Erkläre kurz.', model: 'Datensparsamkeit: nur die Daten sammeln, die wirklich nötig sind. Zweckbindung: Daten nur für den festgelegten Zweck verwenden, nicht für andere Zwecke umfunktionieren.', points: 10 },
      { type: 'open', q: 'Ein Online-Shop speichert Kunden-Kaufhistorie 10 Jahre. Welche DSGVO-Probleme siehst du?', model: '1. Datensparsamkeit: 10 Jahre sind sehr lang – nur so lange speichern wie nötig. 2. Zweckbindung: nur für legitime Zwecke (z.B. gesetzliche Aufbewahrung von Rechnungen 10 Jahre OK, aber Verhalten nicht). 3. Transparenz: Nutzer muss informiert sein. 4. Löschungsrecht muss beachtet werden.', points: 15 },
      { type: 'mc', q: 'Was regelt das TTDSG?', options: ['Steuerrecht', 'Tracking und Cookies', 'Telefonkosten', 'Telekommunikationsgebühren'], correct: 1, points: 5, explanation: 'TTDSG = Telekommunikation-Telemedien-Datenschutzgesetz. Regelt Cookies und Tracking.' },
      { type: 'open', q: 'Wie muss ein rechtskonformer Cookie-Banner aussehen? Nenne mindestens 4 Anforderungen.', model: '1. Klarer Zustimmen-Button. 2. Gleichwertiger Ablehnen-Button (gleich groß/sichtbar). 3. Möglichkeit zur individuellen Auswahl. 4. Keine vorausgewählten Checkboxen. 5. Datenschutzerklärung verlinkt. 6. Aktive Einwilligung erforderlich.', points: 15 },
      { type: 'open', q: 'Was ist eine "Datenschutzerklärung" und welche Inhalte gehören rein?', model: 'Erklärung, wie eine Website mit personenbezogenen Daten umgeht. Inhalte: Verantwortlicher, Zweck der Verarbeitung, Rechtsgrundlage, Speicherdauer, Cookies, Drittanbieter, Nutzerrechte, Kontakt zum Datenschutzbeauftragten.', points: 15 },
      { type: 'draw', q: 'Skizziere ein Cookie-Banner-Design (rechtskonform). Markiere alle Pflicht-Elemente.', model: 'Banner unten/mittig: Titel ("Cookie-Einstellungen"), Erklärungstext, gleichwertige Buttons "Zustimmen" und "Ablehnen", "Anpassen" für Detail-Auswahl, Link zur Datenschutzerklärung.', points: 15 },
    ]
  },
  {
    title: 'Beispielprüfung 3 – IT-Sicherheit & Tracking',
    duration: 90,
    description: 'Verschlüsselung, 2FA, TOMs, sichere Datenübertragung',
    questions: [
      { type: 'mc', q: 'Was schützt HTTPS?', options: ['Die Gestaltung der Website', 'Datenübertragung im Internet', 'Den Server vor Stromausfall', 'Das Urheberrecht'], correct: 1, points: 5, explanation: 'HTTPS verschlüsselt die Datenübertragung zwischen Browser und Server.' },
      { type: 'checkbox', q: 'Was sind TOMs?', options: ['Technische Maßnahmen', 'Organisatorische Maßnahmen', 'Tracking Optionen', 'Schutzmaßnahmen für Datenschutz', 'Tarif-Optimierung'], correct: [0,1,3], points: 10, explanation: 'TOMs = Technische und Organisatorische Maßnahmen zum Datenschutz.' },
      { type: 'open', q: 'Was ist Zwei-Faktor-Authentifizierung (2FA) und warum ist sie sicherer als nur ein Passwort?', model: '2FA = Login mit Passwort + zweitem Faktor (z.B. Code per SMS/App). Sicherer, weil: ein gestohlenes Passwort allein reicht nicht aus. Selbst wenn Hacker das Passwort haben, fehlt ihnen der zweite Faktor.', points: 10 },
      { type: 'open', q: 'Erkläre, wie symmetrische Verschlüsselung funktioniert (mit Beispiel).', model: 'Beim symmetrischen Verfahren wird derselbe Schlüssel zum Ver- und Entschlüsseln verwendet. Beispiel: Sender und Empfänger haben beide Schlüssel "X" – Nachricht wird mit X verschlüsselt, Empfänger entschlüsselt mit X. Schnell, aber Schlüssel muss sicher übertragen werden.', points: 15 },
      { type: 'checkbox', q: 'Welche Maßnahmen erhöhen die IT-Sicherheit eines Unternehmens?', options: ['Starke Passwörter', '2FA', 'Backups', 'Software nicht aktualisieren', 'Mitarbeiter-Schulungen'], correct: [0,1,2,4], points: 10, explanation: 'Sicherheit: Passwörter, 2FA, Backups, Schulungen. Updates dürfen NICHT vernachlässigt werden.' },
      { type: 'open', q: 'Was bedeutet "Tracking"? Wie funktioniert es und welche Probleme bringt es?', model: 'Tracking = Analyse des Nutzerverhaltens (welche Seiten, wie lange, worauf geklickt). Funktioniert über Cookies, Pixel, Fingerprinting. Probleme: Eingriff in Privatsphäre, oft ohne Wissen der Nutzer, Profilbildung möglich.', points: 15 },
      { type: 'mc', q: 'Welcher Punkt ist kein Bestandteil von TOMs?', options: ['Verschlüsselung', 'Backup-Strategien', 'Mitarbeiterschulungen', 'Kostenlose Software-Verteilung'], correct: 3, points: 5, explanation: 'Verschlüsselung, Backups, Schulungen sind TOMs. Kostenlose Software ist kein TOM.' },
      { type: 'draw', q: 'Skizziere ein Schema, wie eine HTTPS-Verbindung aufgebaut wird (Browser ↔ Server).', model: 'Browser → "Hello" → Server. Server → Zertifikat → Browser. Browser prüft Zertifikat. Schlüsselaustausch (z.B. asymmetrisch). Verschlüsselte Verbindung steht. Daten werden verschlüsselt übertragen.', points: 20 },
    ]
  },
  {
    title: 'Beispielprüfung 4 – Hardware, Software & Netzwerke',
    duration: 90,
    description: 'IT-Grundlagen, Geräte, Internet, Speicher',
    questions: [
      { type: 'mc', q: 'Was ist KEINE Hardware?', options: ['Prozessor', 'Festplatte', 'Photoshop', 'Grafikkarte'], correct: 2, points: 5, explanation: 'Photoshop ist Software (ein Programm).' },
      { type: 'checkbox', q: 'Was zählt zur Software?', options: ['Betriebssystem', 'Browser', 'Maus', 'Office-Programme', 'RAM'], correct: [0,1,3], points: 10, explanation: 'Software: Programme. Maus und RAM sind Hardware.' },
      { type: 'open', q: 'Erkläre den Unterschied zwischen RAM und Festplatte/SSD.', model: 'RAM = Arbeitsspeicher, kurzzeitig, sehr schnell, flüchtig (verliert Daten beim Ausschalten). Festplatte/SSD = dauerhafter Speicher, langsamer, behält Daten. SSD ist deutlich schneller als HDD.', points: 10 },
      { type: 'mc', q: 'Was ist ein Server?', options: ['Ein schneller Browser', 'Ein Computer, der Dienste/Daten bereitstellt', 'Ein Programm zum Schreiben', 'Eine Festplatte'], correct: 1, points: 5, explanation: 'Server = Computer, der Daten/Dienste anderen Geräten (Clients) bereitstellt.' },
      { type: 'open', q: 'Erkläre das Client-Server-Prinzip an einem Beispiel.', model: 'Client (z.B. Smartphone) sendet Anfrage an Server (z.B. Web-Server). Server verarbeitet Anfrage und sendet Antwort zurück. Beispiel: Browser ruft Website auf → Anfrage an Server → Server liefert HTML/Bilder zurück.', points: 15 },
      { type: 'checkbox', q: 'Welche Bestandteile gehören zu einem typischen Heimnetzwerk?', options: ['Router', 'Switch', 'Lochkarte', 'WLAN-Access-Point', 'Endgeräte (PC, Smartphone)'], correct: [0,1,3,4], points: 10, explanation: 'Heimnetzwerk: Router, Switch, AP, Endgeräte. Lochkarten gehören dort nicht hin.' },
      { type: 'open', q: 'Was ist eine IP-Adresse und wozu dient sie?', model: 'Eindeutige Adresse jedes Geräts in einem Netzwerk. Dient dazu, Geräte zu identifizieren und Daten korrekt zuzustellen. Vergleichbar mit einer Postanschrift im Internet.', points: 10 },
      { type: 'draw', q: 'Skizziere ein Netzwerkdiagramm: Internet → Router → 3 Endgeräte (PC, Laptop, Smartphone). Markiere LAN/WLAN.', model: 'Internet-Wolke → Router (mit Modem). Vom Router: PC per LAN-Kabel, Laptop per WLAN, Smartphone per WLAN. LAN- und WLAN-Verbindungen unterschiedlich markiert.', points: 25 },
    ]
  },
  {
    title: 'Beispielprüfung 5 – Recht, Pflichten & Wirtschaft im Internet',
    duration: 90,
    description: 'Impressum, SCHUFA, Medienethik, gesamte Themen',
    questions: [
      { type: 'checkbox', q: 'Welche Angaben gehören zwingend ins Impressum?', options: ['Name', 'Adresse', 'Geburtsdatum', 'E-Mail', 'Lieblingsfilm'], correct: [0,1,3], points: 10, explanation: 'Impressum: Name, Adresse, Kontakt (E-Mail/Telefon). Geburtsdatum und Lieblingsfilm nicht.' },
      { type: 'mc', q: 'Wer braucht ein Impressum?', options: ['Niemand', 'Nur Konzerne', 'Alle gewerblichen Websites', 'Nur Webshops'], correct: 2, points: 5, explanation: 'Impressumspflicht für alle gewerblichen/geschäftsmäßigen Websites.' },
      { type: 'open', q: 'Was ist die SCHUFA und was kritisieren Datenschützer an ihr?', model: 'SCHUFA sammelt Informationen über Kreditwürdigkeit/Zahlungsverhalten. Kritik: mangelnde Transparenz (Score-Berechnung undurchsichtig), umfangreiche Datensammlung, falsche Einträge schwer korrigierbar, Diskriminierungsrisiko.', points: 15 },
      { type: 'open', q: 'Was ist der Unterschied zwischen Tatsache und Meinung? Gib je ein Beispiel.', model: 'Tatsache: objektiv überprüfbar ("Es regnet"). Meinung: subjektive Sichtweise ("Das Wetter ist schlecht"). Im Mediengesetz wichtig für Berichterstattung – Tatsachenbehauptungen müssen wahr sein, Meinungen sind Meinungsäußerung.', points: 10 },
      { type: 'checkbox', q: 'Welche Punkte gehören zur Medienethik?', options: ['Wahrheit', 'Fake News bewusst verbreiten', 'Schutz der Privatsphäre', 'Manipulation', 'Verantwortungsvoller Umgang'], correct: [0,2,4], points: 10, explanation: 'Medienethik: Wahrheit, Privatsphäre, Verantwortung. Fake News und Manipulation sind UNETHISCH.' },
      { type: 'open', q: 'Erkläre, was "berechtigtes Interesse" als Rechtsgrundlage in der DSGVO bedeutet.', model: 'Verarbeitung personenbezogener Daten ist auch ohne Einwilligung erlaubt, wenn das Unternehmen ein berechtigtes Interesse hat (z.B. Direktwerbung an Bestandskunden) UND die Interessen der Person nicht überwiegen. Abwägung notwendig.', points: 15 },
      { type: 'mc', q: 'Was ist eine Bonitätsprüfung?', options: ['Test der Festplattenleistung', 'Prüfung der Kreditwürdigkeit', 'Server-Geschwindigkeitstest', 'Sicherheitscheck'], correct: 1, points: 5, explanation: 'Bonitätsprüfung = Bewertung der Zahlungsfähigkeit/Kreditwürdigkeit (z.B. durch SCHUFA).' },
      { type: 'draw', q: 'Skizziere den Aufbau einer Webseite mit allen rechtlich relevanten Elementen (Header, Footer-Links etc.).', model: 'Header mit Logo + Nav. Hauptbereich. Footer mit Pflicht-Links: Impressum, Datenschutzerklärung, AGB, ggf. Cookie-Einstellungen. Cookie-Banner überlagernd.', points: 20 },
    ]
  },
];
