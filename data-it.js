const DATA_IT = {
  id: 'it',
  name: 'Informationstechnische Grundlagen',
  short: 'IT',
  day: 'Freitag',
  color: '--it',

  kannListe: [
    { group: '1. Medienrecht', items: [
      'Das Urheberrecht erklären',
      'Schöpfungshöhe erklären',
      'Nutzungsrechte unterscheiden (einfach vs. exklusiv)',
      'Schutzfristen erklären (70 Jahre nach Tod)',
      'Bildrechte erklären',
      'Das Recht am eigenen Bild erklären',
      'Panoramafreiheit erklären',
      'Creative-Commons-Lizenzen unterscheiden (BY, NC, ND, SA)',
      'Rechtliche Probleme analysieren',
    ]},
    { group: '2. Datenschutz', items: [
      'Personenbezogene Daten erklären',
      'DSGVO-Grundlagen erklären',
      'Datenschutzrechte aufzählen',
      'Auskunfts- und Löschrechte erklären',
      'Cookies und Tracking erklären',
      'TTDSG erklären',
      'Datenschutzprobleme erkennen',
    ]},
    { group: '3. Tracking & Sicherheit', items: [
      'Trackingmethoden erklären',
      'HTTPS erklären',
      'Verschlüsselung erklären',
      'Zwei-Faktor-Authentifizierung erklären',
      'TOMs erklären (Technische und Organisatorische Maßnahmen)',
      'Sicherheitsmaßnahmen bewerten',
    ]},
    { group: '4. Wirtschaft & Internet', items: [
      'Die Impressumspflicht erklären',
      'Pflichtangaben eines Impressums aufzählen',
      'SCHUFA erklären',
      'Bonitätsprüfungen erklären',
      'Berechtigtes Interesse erklären',
    ]},
    { group: '5. IT-Grundlagen', items: [
      'Hardware und Software unterscheiden',
      'Netzwerke erklären',
      'Internetgrundlagen erklären',
      'Unterschied RAM und Festplatte erklären',
      'Client-Server-Prinzip erklären',
      'Datenübertragung beschreiben',
    ]},
  ],

  lernzettel: {
    kompakt: [
      { title: 'Urheberrecht', content: 'Schützt kreative Werke automatisch (kein Anmelden nötig). Schöpfungshöhe = Werk muss kreativ genug sein. Schutzfrist = 70 Jahre nach Tod des Urhebers. Einfaches Nutzungsrecht = mehrere dürfen nutzen. Exklusives Nutzungsrecht = nur einer darf nutzen.' },
      { title: 'Recht am eigenen Bild & CC', content: 'Fotos von Personen nur mit Zustimmung veröffentlichen. Ausnahmen: große Veranstaltungen, Menschenmengen. Creative Commons: BY = Urheber nennen, NC = nicht kommerziell, ND = nicht verändern, SA = gleiche Bedingungen.' },
      { title: 'Datenschutz & DSGVO', content: 'DSGVO = EU-Datenschutz-Grundverordnung. Personenbezogene Daten = Name, Adresse, E-Mail, IP, Fotos. Grundprinzipien: Datensparsamkeit, Zweckbindung, Transparenz. Rechte: Auskunft, Löschung, Berichtigung, Widerspruch.' },
      { title: 'Cookies & TTDSG', content: 'Cookies speichern Infos im Browser (Login, Sprache, Warenkorb). Tracking = Nutzerverhalten analysieren. TTDSG regelt Tracking und Cookies. Cookie-Banner nötig: Nutzer muss zustimmen/ablehnen können. Vorangekreuzte Haken meist verboten.' },
      { title: 'IT-Sicherheit', content: 'HTTPS = verschlüsselte Datenübertragung. Verschlüsselung = Daten für Fremde unlesbar. 2FA = Zwei-Faktor-Authentifizierung (Passwort + Code). TOMs = Technische und Organisatorische Maßnahmen (Passwörter, Backups, Zugriffsbeschränkungen).' },
      { title: 'Hardware & Software', content: 'Hardware = physische Teile (Tastatur, Bildschirm, Prozessor, Festplatte). Software = Programme (Windows, Photoshop, Browser). Betriebssystem steuert den Computer (Windows, macOS, Linux). RAM = Kurzzeitspeicher. Festplatte/SSD = dauerhafter Speicher.' },
      { title: 'Impressum & SCHUFA', content: 'Impressum Pflichtangaben: Name, Adresse, Kontakt, E-Mail. Fehlendes Impressum = Abmahnrisiko. SCHUFA sammelt Infos über Kreditwürdigkeit und Zahlungsverhalten. Kritik: mangelnde Transparenz, Datensammlung.' },
    ],
    mittel: [
      { title: '1. Medienrecht & Urheberrecht', content: 'Das Urheberrecht schützt kreative Werke (Bilder, Musik, Filme, Logos, Designs, Texte). Der Ersteller ist automatisch Urheber – keine Anmeldung nötig. Schöpfungshöhe: Ein Werk muss kreativ genug sein (ein einfacher Kreis ist meist nicht geschützt). Schutzfrist: 70 Jahre nach Tod des Urhebers. Nutzungsrechte: Einfach (mehrere dürfen nutzen) oder Exklusiv (nur einer). Ohne Erlaubnis darf man keine fremden Werke kopieren, verwenden oder veröffentlichen.' },
      { title: '2. Recht am eigenen Bild & Creative Commons', content: 'Menschen entscheiden selbst, ob Fotos von ihnen veröffentlicht werden. Fotos dürfen meist nur mit Zustimmung der Person veröffentlicht werden. Ausnahmen: große Veranstaltungen, Menschenmengen, öffentliche Ereignisse. Creative Commons = spezielle Lizenzen für freie Nutzung unter Bedingungen: BY (Urheber nennen), NC (nicht kommerziell), ND (nicht verändern), SA (gleiche Bedingungen bei Weitergabe).' },
      { title: '3. Datenschutz & DSGVO', content: 'Datenschutz schützt personenbezogene Daten (Name, Telefon, E-Mail, Adresse, IP-Adresse, Fotos). DSGVO = Datenschutz-Grundverordnung der EU. Regelt wie Daten gesammelt und verarbeitet werden dürfen. Grundprinzipien: Datensparsamkeit (nur nötige Daten), Zweckbindung (nur für bestimmten Zweck), Transparenz (Nutzer informieren). Rechte der Nutzer: Auskunftsrecht, Löschungsrecht ("Recht auf Vergessenwerden"), Berichtigungsrecht, Widerspruchsrecht.' },
      { title: '4. Cookies, Tracking & TTDSG', content: 'Cookies speichern Informationen im Browser: Login, Sprache, Warenkorb. Tracking analysiert das Verhalten von Nutzern (welche Seiten, wie lange, worauf geklickt). Problem: Nutzer werden überwacht → Cookie-Banner nötig. TTDSG regelt, wie Tracking und Cookies eingesetzt werden dürfen. Nutzer muss zustimmen, ablehnen oder auswählen können. Vorangekreuzte Haken sind oft nicht erlaubt.' },
      { title: '5. IT-Sicherheit', content: 'HTTPS verschlüsselt Daten im Internet → schwerer abfangbar. Verschlüsselung macht Daten für Fremde unlesbar. Zwei-Faktor-Authentifizierung (2FA): Passwort + Code auf Smartphone = sicherere Konten. TOMs = Technische und organisatorische Maßnahmen zum Datenschutz: Passwörter, Verschlüsselung, Zugriffsbeschränkungen, Backups.' },
      { title: '6. Netzwerke & IT-Grundlagen', content: 'Netzwerk verbindet Geräte miteinander (Heim-, Schul-, Firmennetzwerk). Internet = weltweites Netzwerk. Server speichert Daten und Webseiten. Client = Gerät des Nutzers (PC, Smartphone, Tablet). Hardware = physische Teile (Tastatur, Bildschirm, Prozessor, Festplatte). Software = Programme (Windows, Photoshop, Browser). RAM = Kurzzeitspeicher (schnell, temporär). Festplatte/SSD = dauerhafter Speicher.' },
      { title: '7. Impressum, SCHUFA & Medienethik', content: 'Impressumspflicht: viele Websites brauchen ein Impressum. Pflichtangaben: Name, Adresse, Kontakt, E-Mail. Fehlendes Impressum kann zu Abmahnungen führen. SCHUFA sammelt Infos über Kreditwürdigkeit und Zahlungsverhalten. Kritik: mangelnde Transparenz, Datensammlung. Medienethik: Verantwortung im Umgang mit Medien (Fake News, Manipulation, Datenschutz, Wahrheit). Tatsache = objektiv überprüfbar. Meinung = subjektive Sichtweise.' },
    ],
    ausfuehrlich: [
      { title: '1. Medienrecht Überblick', content: 'Medienrecht regelt den Umgang mit Bildern, Videos, Musik, Webseiten, Designs und Texten. Das Ziel ist es, Urheber und Personen zu schützen.' },
      { title: '2. Urheberrecht', content: 'Das Urheberrecht schützt kreative Werke: Bilder, Musik, Filme, Logos, Designs, Webseiten, Texte. Der Ersteller eines Werkes ist automatisch Urheber – man muss ein Werk NICHT anmelden. Der Urheber soll geschützt werden, Kontrolle behalten und über die Nutzung entscheiden. Ohne Erlaubnis darf man nicht: Bilder kopieren, Musik verwenden, Logos übernehmen, Texte klauen, Videos veröffentlichen.' },
      { title: 'Nutzungsrechte & Schöpfungshöhe', content: 'Der Urheber kann anderen erlauben, sein Werk zu nutzen = Nutzungsrechte. Einfaches Nutzungsrecht: mehrere Personen dürfen das Werk nutzen. Exklusives Nutzungsrecht: nur eine Person darf das Werk nutzen. Schöpfungshöhe: Ein Werk muss kreativ genug sein, um geschützt zu werden. Ein einfacher Kreis ist meist nicht geschützt. Ein komplexes Design dagegen schon. Schutzfrist: Das Urheberrecht endet 70 Jahre nach dem Tod des Urhebers.' },
      { title: '3. Recht am eigenen Bild', content: 'Menschen dürfen selbst entscheiden, ob Fotos von ihnen veröffentlicht werden. Fotos dürfen meist nur veröffentlicht werden, wenn die Person zugestimmt hat. Man darf NICHT einfach: fremde Fotos posten, Personen filmen, Bilder hochladen. Ausnahmen: bei großen Veranstaltungen, Menschenmengen, öffentlichen Ereignissen.' },
      { title: '4. Creative Commons', content: 'Creative Commons sind spezielle Lizenzen, die die Nutzung von Werken unter bestimmten Bedingungen erlauben. Nicht jedes Werk braucht eine direkte Erlaubnis. Typische Bedingungen: BY = Name des Urhebers nennen. NC = Nicht kommerziell nutzen. ND = Nicht verändern. SA = Weitergabe unter gleichen Bedingungen. In der Prüfung: Lizenzen erkennen, Bedingungen erklären, Nutzungen bewerten.' },
      { title: '5. Datenschutz & DSGVO', content: 'Datenschutz schützt personenbezogene Daten. Personenbezogene Daten = Daten, mit denen Menschen erkannt werden können: Name, Telefonnummer, E-Mail, Adresse, IP-Adresse, Fotos. Die DSGVO ist die Datenschutz-Grundverordnung der EU. Sie regelt: wie Daten gesammelt und verarbeitet werden dürfen. Ziele: Schutz persönlicher Daten, Transparenz, Kontrolle für Nutzer. Grundprinzipien: Datensparsamkeit (nur nötige Daten sammeln), Zweckbindung (nur für einen bestimmten Zweck verwenden), Transparenz (Nutzer müssen informiert werden).' },
      { title: 'Datenschutzrechte der Nutzer', content: 'Auskunftsrecht: Nutzer dürfen fragen, welche Daten gespeichert werden. Löschungsrecht: Nutzer können verlangen, dass Daten gelöscht werden. Berichtigungsrecht: Falsche Daten korrigieren lassen. Widerspruchsrecht: Nutzer können die Verarbeitung ablehnen.' },
      { title: '6. Cookies und Tracking', content: 'Cookies speichern Informationen im Browser: Login speichern, Sprache speichern, Warenkorb speichern. Tracking analysiert das Verhalten von Nutzern: welche Seiten besucht werden, wie lange Nutzer bleiben, worauf geklickt wird. Problem beim Tracking: Nutzer werden überwacht → deshalb braucht man Cookie-Banner, Einwilligungen, Datenschutzerklärungen. TTDSG regelt: wie Tracking und Cookies eingesetzt werden dürfen. Cookie-Banner: Der Nutzer muss zustimmen, ablehnen oder auswählen können. Vorangekreuzte Haken sind oft nicht erlaubt.' },
      { title: '7. Sicherheit im Internet', content: 'HTTPS verschlüsselt Daten im Internet. Dadurch können Daten schwerer abgefangen und besser geschützt werden. Verschlüsselung macht Daten unlesbar für Fremde. Nur berechtigte Personen können sie entschlüsseln. Zwei-Faktor-Authentifizierung (2FA): Zusätzlicher Schutz beim Login. Beispiel: Passwort + Code auf dem Smartphone. Vorteil: Konten werden sicherer. TOMs = Technische und organisatorische Maßnahmen. Beispiele: Passwörter, Verschlüsselung, Zugriffsbeschränkungen, Backups.' },
      { title: '8. Netzwerke und Internet', content: 'Ein Netzwerk verbindet Geräte miteinander. Beispiele: Heimnetzwerk, Schulnetzwerk, Firmennetzwerk. Das Internet ist ein weltweites Netzwerk. Datenübertragung: Daten werden zwischen Geräten übertragen (Webseiten, Bilder, Nachrichten). Server = speichert Daten und Webseiten. Client = das Gerät des Nutzers (PC, Smartphone, Tablet).' },
      { title: '9. Hardware und Software', content: 'Hardware = alle physischen Teile eines Computers: Tastatur, Bildschirm, Prozessor, Festplatte. Software = Programme und Anwendungen: Windows, Photoshop, Browser. Betriebssystem steuert den Computer (Windows, macOS, Linux). Speicherarten: RAM = Kurzzeitspeicher (schnell, aber temporär). Festplatte/SSD = dauerhafter Speicher.' },
      { title: '10. Impressumspflicht', content: 'Viele Webseiten brauchen ein Impressum. Zweck: Nutzer sollen wissen, wer hinter der Website steckt. Typische Pflichtangaben: Name, Adresse, Kontakt, E-Mail. Fehlendes Impressum kann Abmahnungen verursachen.' },
      { title: '11. SCHUFA & Medienethik', content: 'SCHUFA sammelt Informationen über Kreditwürdigkeit, Zahlungsverhalten und Verträge. Ziel: Unternehmen wollen prüfen, ob Menschen zuverlässig zahlen. Kritik: mangelnde Transparenz, Datensammlung, Bewertungsmethoden. Medienethik beschäftigt sich mit Verantwortung im Umgang mit Medien. Wichtige Themen: Fake News, Manipulation, Datenschutz, Wahrheit. Tatsache = objektiv überprüfbar. Meinung = subjektive Sichtweise.' },
    ],
  },

  flashcards: [
    { q: 'Was schützt das Urheberrecht?', a: 'Kreative Werke: Bilder, Musik, Filme, Logos, Designs, Webseiten, Texte. Der Ersteller ist automatisch Urheber – keine Anmeldung nötig.' },
    { q: 'Was bedeutet Schöpfungshöhe?', a: 'Das Mindestmaß an Kreativität, das ein Werk haben muss, um urheberrechtlich geschützt zu sein.' },
    { q: 'Wie lange dauert die Schutzfrist beim Urheberrecht?', a: '70 Jahre nach dem Tod des Urhebers.' },
    { q: 'Was ist ein einfaches Nutzungsrecht?', a: 'Mehrere Personen dürfen ein Werk nutzen. Im Gegensatz dazu: exklusives Nutzungsrecht = nur eine Person.' },
    { q: 'Was bedeutet Creative Commons "BY"?', a: 'Der Name des Urhebers muss genannt werden.' },
    { q: 'Was bedeutet Creative Commons "NC"?', a: 'Das Werk darf nicht kommerziell genutzt werden (Non-Commercial).' },
    { q: 'Was sind personenbezogene Daten?', a: 'Daten, mit denen Menschen identifiziert werden können: Name, E-Mail, Adresse, IP-Adresse, Fotos.' },
    { q: 'Was ist die DSGVO?', a: 'Die Datenschutz-Grundverordnung der EU. Regelt, wie personenbezogene Daten gesammelt und verarbeitet werden dürfen.' },
    { q: 'Was bedeutet Datensparsamkeit?', a: 'Nur die Daten sammeln, die wirklich notwendig sind.' },
    { q: 'Was ist das Löschungsrecht (DSGVO)?', a: 'Nutzer können verlangen, dass ihre gespeicherten Daten gelöscht werden ("Recht auf Vergessenwerden").' },
    { q: 'Was regelt das TTDSG?', a: 'Wie Tracking und Cookies eingesetzt werden dürfen. Nutzer müssen Cookies aktiv zustimmen können.' },
    { q: 'Was ist HTTPS?', a: 'Ein verschlüsseltes Übertragungsprotokoll. Schützt Daten vor dem Abfangen im Internet.' },
    { q: 'Was ist Zwei-Faktor-Authentifizierung (2FA)?', a: 'Zusätzlicher Login-Schutz: Passwort + zweiter Faktor (z.B. Code auf dem Smartphone).' },
    { q: 'Was bedeutet TOM?', a: 'Technische und Organisatorische Maßnahmen – Sicherheitsmaßnahmen zum Datenschutz (Passwörter, Verschlüsselung, Backups).' },
    { q: 'Was ist der Unterschied zwischen Hardware und Software?', a: 'Hardware = physische Teile (Tastatur, Prozessor). Software = Programme (Windows, Photoshop).' },
    { q: 'Was ist ein Server?', a: 'Ein Computer, der Daten und Webseiten speichert und auf Anfragen von Clients antwortet.' },
    { q: 'Was ist RAM?', a: 'Arbeitsspeicher – Kurzzeitspeicher. Schnell, aber nicht dauerhaft. Inhalte gehen beim Ausschalten verloren.' },
    { q: 'Was muss ein Impressum enthalten?', a: 'Name, Adresse, Kontakt (Telefon/E-Mail). Pflicht für viele gewerbliche Websites. Fehlt es, drohen Abmahnungen.' },
    { q: 'Was ist Panoramafreiheit?', a: 'Gebäude und Kunstwerke, die dauerhaft im öffentlichen Raum stehen, dürfen fotografiert und veröffentlicht werden.' },
    { q: 'Was ist der Unterschied zwischen Tatsache und Meinung?', a: 'Tatsache = objektiv überprüfbar ("Es regnet"). Meinung = subjektive Sichtweise ("Das Wetter ist schlecht").' },
  ],

  quiz: [
    { type: 'mc', q: 'Wann entsteht das Urheberrecht?', options: ['Nach Anmeldung beim Patentamt', 'Automatisch beim Erstellen des Werkes', 'Erst nach Veröffentlichung', 'Nach 3 Jahren'], correct: 1, explanation: 'Das Urheberrecht entsteht automatisch mit der Schaffung des Werkes. Es muss nicht angemeldet werden.' },
    { type: 'mc', q: 'Wie lange gilt das Urheberrecht?', options: ['50 Jahre nach Veröffentlichung', '70 Jahre nach Tod des Urhebers', '100 Jahre nach Erstellung', 'Unbegrenzt'], correct: 1, explanation: 'Das Urheberrecht gilt 70 Jahre nach dem Tod des Urhebers.' },
    { type: 'mc', q: 'Was bedeutet CC-Lizenz "ND"?', options: ['Nicht downloaden', 'Nicht digital nutzen', 'Nicht verändern', 'Nicht drucken'], correct: 2, explanation: 'ND = NoDerivatives. Das Werk darf nicht verändert oder bearbeitet werden.' },
    { type: 'mc', q: 'Was regelt die DSGVO?', options: ['Wie Websites gestaltet werden müssen', 'Wie personenbezogene Daten gesammelt und verarbeitet werden dürfen', 'Wie Werbung gestaltet werden muss', 'Wie Server betrieben werden'], correct: 1, explanation: 'Die DSGVO (Datenschutz-Grundverordnung) regelt den Umgang mit personenbezogenen Daten in der EU.' },
    { type: 'mc', q: 'Was ist KEINE personenbezogene Datei?', options: ['E-Mail-Adresse', 'IP-Adresse', 'Postleitzahl einer Stadt', 'Foto einer Person'], correct: 2, explanation: 'Die Postleitzahl einer ganzen Stadt ist kein personenbezogenes Datum, da sie keiner einzelnen Person zugeordnet werden kann.' },
    { type: 'mc', q: 'Was schützt HTTPS?', options: ['Die Gestaltung der Website', 'Die Übertragung von Daten im Internet vor Abfangen', 'Den Server vor Hackerangriffen', 'Das Urheberrecht von Websites'], correct: 1, explanation: 'HTTPS verschlüsselt die Datenübertragung zwischen Browser und Server.' },
    { type: 'mc', q: 'Was sind TOMs?', options: ['Tracking Optimierung Methoden', 'Technische und Organisatorische Maßnahmen', 'Transfer Operations Module', 'Text Output Management'], correct: 1, explanation: 'TOMs = Technische und Organisatorische Maßnahmen. Sicherheitsmaßnahmen zum Schutz von Daten (Passwörter, Verschlüsselung, Backups).' },
    { type: 'mc', q: 'Was muss NICHT im Impressum stehen?', options: ['Name', 'Adresse', 'Geburtsdatum', 'E-Mail'], correct: 2, explanation: 'Das Geburtsdatum ist keine Pflichtangabe im Impressum. Pflicht: Name, Adresse, Kontaktmöglichkeit (E-Mail/Telefon).' },
    { type: 'open', q: 'Erkläre, was der Unterschied zwischen einem einfachen und einem exklusiven Nutzungsrecht ist. Wann würde ein Fotograf welches Recht vergeben?', model: 'Einfaches Nutzungsrecht: Mehrere Personen/Unternehmen dürfen das Werk gleichzeitig nutzen. Wird z.B. bei Stock-Fotos vergeben, die viele kaufen können. Exklusives Nutzungsrecht: Nur eine Person/ein Unternehmen darf das Werk nutzen. Wird z.B. für Werbekampagnen vergeben, bei denen der Kunde will, dass kein anderer dasselbe Foto nutzt. Exklusiv ist teurer, weil der Fotograf das Foto nicht mehr anderen verkaufen kann.' },
    { type: 'open', q: 'Eine Website setzt Cookies für Tracking ein, ohne den Nutzer zu fragen. Ist das legal? Begründe deine Antwort mit Bezug auf DSGVO und TTDSG.', model: 'Nein, das ist nicht legal. Nach TTDSG müssen Nutzer aktiv Tracking-Cookies zustimmen. Vorangekreuzte Haken oder automatisches Tracking ohne Zustimmung ist nicht erlaubt. Die DSGVO verlangt zusätzlich Transparenz (Nutzer müssen informiert werden) und Zweckbindung (Daten nur für den angegebenen Zweck). Verstoß kann zu Bußgeldern führen.' },
  ],

  aufgaben: [
    {
      title: 'Urheberrecht: Fallanalyse',
      points: '15 Punkte',
      question: 'Ein Grafikdesigner findet auf Google ein schönes Foto und verwendet es ohne Erlaubnis für das Logo eines Kunden.\n\n1. Liegt hier eine Urheberrechtsverletzung vor? Begründe.\n2. Was hätte der Designer stattdessen tun können?\n3. Was sind mögliche Konsequenzen?',
      model: '1. Ja, Urheberrechtsverletzung: Das Foto ist automatisch durch das Urheberrecht geschützt. Ohne Erlaubnis des Urhebers darf es nicht verwendet werden, auch nicht für kommerzielle Zwecke.\n2. Alternativen: Lizenz beim Fotografen kaufen, lizenzfreie Stock-Fotos nutzen (z.B. Unsplash), Creative Commons Fotos mit passender Lizenz nutzen, eigenes Foto erstellen.\n3. Konsequenzen: Abmahnung mit Unterlassungsforderung, Schadensersatzklage, Lizenzgebühren nachzahlen.'
    },
    {
      title: 'Creative Commons Lizenzen',
      points: '15 Punkte',
      question: 'Erkläre folgende Creative Commons Lizenzen und sage jeweils, ob die beschriebene Nutzung erlaubt ist:\n\nLizenz: CC BY-NC-ND\n\n1. Ein Student nutzt das Bild für seine Hausarbeit.\n2. Ein Unternehmen nutzt das Bild für eine Werbekampagne.\n3. Ein Blogger bearbeitet das Bild und veröffentlicht es auf seiner kostenlosen Website.\n4. Ein Blogger veröffentlicht das Bild unverändert auf seiner kostenlosen Website mit Quellenangabe.',
      model: 'CC BY-NC-ND = Urheber nennen + nicht kommerziell + nicht verändern.\n1. Student/Hausarbeit: Erlaubt (nicht kommerziell, unverändert, Urheber genannt).\n2. Unternehmen/Werbung: NICHT erlaubt (kommerziell = verstößt gegen NC).\n3. Blogger bearbeitet: NICHT erlaubt (Bearbeitung verstößt gegen ND).\n4. Blogger unverändert, kostenlos, mit Quelle: Erlaubt (nicht kommerziell, unverändert, Urheber genannt).'
    },
    {
      title: 'DSGVO: Datenschutzprüfung',
      points: '20 Punkte',
      question: 'Ein Online-Shop speichert:\n• Namen und Adressen aller Kunden\n• Kaufhistorie der letzten 10 Jahre\n• Geburtsdaten (auch von Gästen ohne Account)\n• IP-Adressen aller Besucher ohne Hinweis\n\n1. Welche dieser Daten sind personenbezogen?\n2. Welche DSGVO-Grundsätze werden möglicherweise verletzt?\n3. Was sollte der Shop ändern?',
      model: '1. Alle genannten Daten sind personenbezogen (Name, Adresse, Kaufhistorie, Geburtsdatum, IP-Adresse).\n2. Mögliche Verstöße: Datensparsamkeit (Geburtsdaten von Gästen unnötig?). Zweckbindung (10 Jahre Kaufhistorie nötig?). Transparenz (IP-Adressen ohne Hinweis).\n3. Änderungen: Nur nötige Daten sammeln. Speicherfristen festlegen. Datenschutzerklärung für IP-Tracking. Nutzer informieren.'
    },
    {
      title: 'IT-Sicherheit: Maßnahmen bewerten',
      points: '15 Punkte',
      question: 'Ein Unternehmen hat folgende Sicherheitsmaßnahmen:\n• Alle Mitarbeiter nutzen "1234" als Passwort\n• Keine 2FA\n• Daten werden unverschlüsselt übertragen\n• Keine regelmäßigen Backups\n\n1. Bewerte jede Maßnahme.\n2. Erkläre, was TOMs sind.\n3. Welche 4 konkreten Verbesserungen würdest du empfehlen?',
      model: '1. Bewertung: Passwort "1234" = extrem unsicher. Kein 2FA = Konten leicht hackbar. Keine Verschlüsselung = Daten können abgefangen werden. Keine Backups = Datenverlust-Risiko.\n2. TOMs = Technische und Organisatorische Maßnahmen. Sicherheitsmaßnahmen, die Unternehmen laut DSGVO zum Schutz von Daten umsetzen müssen.\n3. Verbesserungen: Starke Passwörter (mind. 12 Zeichen, Sonderzeichen). 2FA für alle Mitarbeiter einführen. HTTPS/Verschlüsselung für alle Datenübertragungen. Tägliche automatische Backups.'
    },
    {
      title: 'Impressum & Recht am eigenen Bild',
      points: '15 Punkte',
      question: 'Beantworte folgende Fragen:\n\n1. Wer braucht ein Impressum?\n2. Welche Angaben muss ein Impressum mindestens enthalten?\n3. Du fotografierst auf einem Stadtfest eine kleine Gruppe von 4 Personen, die du nicht kennst. Darfst du das Foto veröffentlichen?',
      model: '1. Impressumspflicht: Alle gewerblichen Websites, Blogs mit wirtschaftlichem Zweck, Unternehmen, Freiberufler. Private Websites ohne wirtschaftlichen Zweck oft ausgenommen.\n2. Pflichtangaben: Name (Vor- und Nachname oder Firmenname), Adresse (Straße, PLZ, Ort), E-Mail-Adresse, ggf. Telefon, bei Unternehmen: Handelsregisternummer.\n3. Stadtfest/Gruppe: Grundsätzlich braucht man Zustimmung. Bei größeren Veranstaltungen kann die Panoramafreiheit oder das Recht auf Berichterstattung greifen, wenn die Personen nicht im Vordergrund stehen. Bei einer klar erkennbaren kleinen Gruppe ohne Zustimmung ist Veröffentlichung heikel.'
    },
    {
      title: 'Hardware und Software unterscheiden',
      points: '10 Punkte',
      question: 'Ordne folgende Begriffe Hardware oder Software zu und erkläre kurz, was sie sind:\n\nProzessor · Windows 11 · RAM · Adobe Photoshop · Festplatte · WLAN-Router · Browser · Grafikkarte',
      model: 'Hardware: Prozessor (verarbeitet Daten), RAM (Arbeitsspeicher, kurzfristig), Festplatte (dauerhafter Speicher), WLAN-Router (Netzwerkgerät), Grafikkarte (Bildverarbeitung).\nSoftware: Windows 11 (Betriebssystem), Adobe Photoshop (Bildbearbeitungsprogramm), Browser (Programm zum Internetsurfen).'
    },
    {
      title: 'Tracking & Cookie-Banner',
      points: '15 Punkte',
      question: 'Eine Website hat einen Cookie-Banner mit folgendem Inhalt:\n• "Durch die Nutzung unserer Website stimmen Sie allen Cookies zu."\n• Kein "Ablehnen"-Button\n• Alle Checkboxen sind vorausgewählt\n\n1. Ist dieser Cookie-Banner rechtlich korrekt? Begründe.\n2. Wie muss ein rechtskonformer Cookie-Banner aussehen?\n3. Was regelt das TTDSG in diesem Zusammenhang?',
      model: '1. Nicht rechtlich korrekt: "Durch Nutzung zustimmen" ist keine aktive Einwilligung. Kein Ablehnen-Button verletzt das Wahlrecht. Vorausgewählte Checkboxen sind nach DSGVO und TTDSG nicht erlaubt.\n2. Rechtskonformer Banner: Klarer "Zustimmen"-Button. Gleichwertiger "Ablehnen"-Button. Möglichkeit zur individuellen Auswahl. Keine vorausgewählten Checkboxen. Datenschutzerklärung verlinkt.\n3. TTDSG regelt: Tracking-Cookies erfordern aktive Einwilligung des Nutzers. Die Einwilligung muss freiwillig, informiert und unmissverständlich sein.'
    },
  ],
};
