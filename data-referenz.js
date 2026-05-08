// ===== REFERENZMATERIALIEN PRO PRÜFUNG =====
// Detaillierte Nachschlagewerke zu komplexen Themen

const REFERENZ = {
  it: {
    intro: 'Hier findest du detaillierte Erklärungen zu allen wichtigen IT-Themen, besonders Verschlüsselungsverfahren, Netzwerkmodelle und Protokolle. Ideal zum Nachschlagen während der Vorbereitung.',
    chapters: [
      {
        icon: '🔐',
        title: 'Verschlüsselungsverfahren',
        sections: [
          {
            title: 'Caesar-Verschlüsselung (Cäsar-Chiffre)',
            type: 'symmetrisch',
            content: `Eines der ältesten Verschlüsselungsverfahren. Jeder Buchstabe wird im Alphabet um eine feste Zahl (Schlüssel) verschoben.

**So funktioniert es:**
Der Schlüssel ist eine Zahl zwischen 1 und 25. Beispiel mit Schlüssel = 3:
A → D, B → E, C → F, ..., X → A, Y → B, Z → C

**Beispiel:**
Klartext: HALLO
Schlüssel: 3
Geheimtext: KDOOR

**Entschlüsseln:** Schlüssel rückwärts anwenden (hier 3 zurück).

**Sicherheit:** Sehr unsicher! Nur 25 mögliche Schlüssel → durch reines Ausprobieren (Brute-Force) in Sekunden zu knacken. Auch die Häufigkeitsanalyse (im Deutschen ist E der häufigste Buchstabe) ermöglicht schnelles Knacken.

**Historisch:** Wurde von Julius Caesar zur Verschlüsselung militärischer Botschaften verwendet (mit Schlüssel = 3).

**Heute:** Nur noch als Lernbeispiel oder Spielerei (z.B. ROT13 = Caesar mit Schlüssel 13).`
          },
          {
            title: 'Vigenère-Verschlüsselung',
            type: 'symmetrisch',
            content: `Erweiterung der Cäsar-Chiffre. Statt eines festen Schlüssels wird ein Schlüsselwort verwendet, das sich wiederholt.

**So funktioniert es:**
Jeder Buchstabe des Schlüsselworts gibt die Verschiebung für den entsprechenden Klartext-Buchstaben an. A=0, B=1, ..., Z=25.

**Beispiel:**
Klartext:    HALLOWELT
Schlüssel:   KEYKEYKEY (wiederholt)
Geheimtext:  RECVSUOPR

Berechnung: H(7)+K(10)=R(17), A(0)+E(4)=E(4), L(11)+Y(24)=J → mod 26 → ...

**Sicherheit:** Deutlich sicherer als Caesar, da Häufigkeitsanalyse erschwert wird. Lange galt es als unknackbar ("Le Chiffre Indéchiffrable").

**Schwäche:** Wenn man die Schlüssellänge erkennt (Kasiski-Test), wird es zu mehreren Cäsar-Chiffren reduziert und ist knackbar.

**Verwendung heute:** Ebenfalls nur als Lernbeispiel.`
          },
          {
            title: 'XOR-Verschlüsselung',
            type: 'symmetrisch',
            content: `Bitweise Verschlüsselung mit dem XOR-Operator (⊕).

**XOR-Regel:**
0 ⊕ 0 = 0
0 ⊕ 1 = 1
1 ⊕ 0 = 1
1 ⊕ 1 = 0
(Gleich = 0, ungleich = 1)

**So funktioniert es:**
Klartext und Schlüssel werden bitweise XOR-verknüpft.

**Beispiel:**
Klartext:   1011 0010
Schlüssel:  1100 1010
Geheimtext: 0111 1000

**Entschlüsseln:** Geheimtext erneut mit gleichem Schlüssel XOR-verknüpfen → ergibt Klartext.

**Sicherheit:** Bei einmaliger Verwendung eines wirklich zufälligen Schlüssels in Klartextlänge (One-Time-Pad) ist es theoretisch UNKNACKBAR. Bei Wiederverwendung des Schlüssels wird es unsicher.

**Verwendung:** Grundbaustein in vielen modernen Verfahren (z.B. AES nutzt XOR intern).`
          },
          {
            title: 'AES (Advanced Encryption Standard)',
            type: 'symmetrisch',
            content: `Aktueller weltweiter Standard für symmetrische Verschlüsselung. Seit 2001 offizieller US-Standard, von der NSA für streng geheime Daten freigegeben.

**Eigenschaften:**
- Schlüssellängen: 128, 192 oder 256 Bit
- Blockgröße: 128 Bit (verschlüsselt 16 Bytes auf einmal)
- Symmetrisch: gleicher Schlüssel zum Ver- und Entschlüsseln
- Sehr schnell (auch in Hardware, viele CPUs haben AES-Befehle)

**Wie funktioniert es (vereinfacht):**
Daten werden in 128-Bit-Blöcke aufgeteilt. Jeder Block durchläuft mehrere Runden (10 bei 128 Bit, 14 bei 256 Bit) mit den Operationen:
1. SubBytes: Bytes durch Tabellenwerte ersetzen
2. ShiftRows: Zeilen verschieben
3. MixColumns: Spalten mathematisch mischen
4. AddRoundKey: Mit Rundenschlüssel XOR

**Sicherheit:** Mit 256 Bit gilt AES als auch gegen Quantencomputer (mit Anpassung) sicher.

**Anwendung:** HTTPS, WLAN (WPA2/WPA3), VPN, Festplattenverschlüsselung (BitLocker, FileVault), 7-Zip, ZIP, fast alles Sichere.`
          },
          {
            title: 'RSA (Rivest-Shamir-Adleman)',
            type: 'asymmetrisch',
            content: `Klassiker der asymmetrischen Verschlüsselung. Benannt nach den drei Erfindern (1977).

**Prinzip:**
Jede Person hat ein **Schlüsselpaar**:
- Öffentlicher Schlüssel (public key) → darf jeder kennen
- Privater Schlüssel (private key) → bleibt geheim

Was mit dem öffentlichen Schlüssel verschlüsselt wird, kann nur der Besitzer des privaten Schlüssels entschlüsseln.

**Mathematische Grundlage:**
Beruht auf der Schwierigkeit, sehr große Zahlen in Primzahlfaktoren zu zerlegen.
- Wähle zwei große Primzahlen p, q
- Berechne n = p × q (öffentlich)
- Berechne φ(n) = (p-1)(q-1)
- Wähle e mit ggT(e, φ(n)) = 1 (öffentlich)
- Berechne d mit e×d ≡ 1 mod φ(n) (privat)

Öffentlicher Schlüssel: (n, e)
Privater Schlüssel: (n, d)

Verschlüsselung: c = m^e mod n
Entschlüsselung: m = c^d mod n

**Schlüssellängen heute:** mind. 2048 Bit, besser 4096 Bit.

**Verwendung:** SSL/TLS-Zertifikate, digitale Signaturen, sicherer Schlüsselaustausch (z.B. um danach AES-Sitzungsschlüssel zu übertragen).

**Schwäche:** Quantencomputer (Shor-Algorithmus) können RSA brechen. Deshalb wird langfristig auf "Post-Quantum-Kryptographie" umgestellt.`
          },
          {
            title: 'Diffie-Hellman-Schlüsselaustausch',
            type: 'asymmetrisch',
            content: `Verfahren zum SICHEREN Austausch eines geheimen Schlüssels über einen unsicheren Kanal. Erfunden 1976 – Beginn der modernen Kryptographie.

**Wichtig:** Diffie-Hellman verschlüsselt KEINE Daten direkt! Es einigt sich nur auf einen gemeinsamen Schlüssel, der dann z.B. für AES verwendet wird.

**Prinzip (vereinfachtes Beispiel mit kleinen Zahlen):**

1. Alice und Bob einigen sich öffentlich auf:
   - Eine große Primzahl p (z.B. p=23)
   - Eine Basis g (z.B. g=5)

2. Alice wählt geheim a = 6
   Berechnet A = g^a mod p = 5^6 mod 23 = 8
   Sendet A=8 an Bob

3. Bob wählt geheim b = 15
   Berechnet B = g^b mod p = 5^15 mod 23 = 19
   Sendet B=19 an Alice

4. Alice berechnet: K = B^a mod p = 19^6 mod 23 = 2
   Bob berechnet: K = A^b mod p = 8^15 mod 23 = 2
   → Beide haben den gleichen Schlüssel K=2!

**Trick:** Ein Angreifer, der A, B, g und p sieht, kann K nicht berechnen, weil er a oder b nicht kennt (diskreter Logarithmus ist schwer zu berechnen).

**Verwendung:** TLS/HTTPS, VPN, IPsec, SSH, WPA2/WPA3.

**Schwäche:** Anfällig für Man-in-the-Middle, wenn keine Authentifizierung erfolgt → deshalb in der Praxis mit Zertifikaten kombiniert.`
          },
          {
            title: 'ECC (Elliptische Kurven-Kryptographie)',
            type: 'asymmetrisch',
            content: `Modernere Alternative zu RSA. Basiert auf mathematischen Eigenschaften elliptischer Kurven.

**Vorteile gegenüber RSA:**
- Deutlich kürzere Schlüssel bei gleicher Sicherheit
  → 256-Bit ECC ≈ 3072-Bit RSA
- Weniger Rechenleistung → ideal für mobile Geräte, IoT
- Schnellere Schlüssel-Generierung

**Verwendung:** Apple, Google, moderne TLS-Zertifikate, Bitcoin und andere Kryptowährungen.

**Verfahren:** ECDH (Diffie-Hellman auf elliptischen Kurven), ECDSA (Signaturen).`
          },
          {
            title: 'Hashing (Hash-Funktionen)',
            type: 'einweg',
            content: `Hashing ist KEINE Verschlüsselung im klassischen Sinne. Es ist eine **Einweg-Funktion**, die aus beliebigem Input einen festen "Fingerabdruck" erzeugt.

**Eigenschaften einer guten Hash-Funktion:**
1. **Deterministisch:** Gleicher Input → immer gleicher Output
2. **Schnell zu berechnen**
3. **Einweg:** Aus dem Hash lässt sich der Input nicht zurückrechnen
4. **Lawineneffekt:** Kleinste Änderung im Input → komplett anderer Output
5. **Kollisionsresistent:** Zwei verschiedene Inputs sollen nicht den gleichen Hash erzeugen

**Beispiel SHA-256:**
"Hallo"      → 753692ec36adb4c794c973945eb2a99c1649703ea6f76bf259abb4fb838e013e
"hallo"      → d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaee5dd3
"Hallo!"     → 0fd3e87c025b5cb...

**Wichtige Verfahren:**
- **MD5** (128 Bit) – UNSICHER, nur noch für Checksummen, nicht für Sicherheit
- **SHA-1** (160 Bit) – UNSICHER seit 2017
- **SHA-256 / SHA-512** – aktueller Standard
- **bcrypt, scrypt, Argon2** – speziell für Passwörter (langsam und mit Salz)

**Verwendung:**
- Passwörter speichern (Datenbank speichert Hash, nicht Klartext)
- Datei-Integrität prüfen (Checksumme)
- Digitale Signaturen
- Blockchain (Bitcoin etc.)

**Salt (Salz):** Zufälliger String, der vor dem Hashen ans Passwort angehängt wird → schützt vor Rainbow-Tables. JEDER Nutzer hat eigenes Salt.`
          },
          {
            title: 'Hybride Verschlüsselung (z.B. HTTPS)',
            type: 'kombiniert',
            content: `Moderne Systeme kombinieren symmetrische und asymmetrische Verschlüsselung, um die Vorteile beider zu nutzen.

**Problem reiner Verfahren:**
- Symmetrisch (AES): schnell, aber wie tauscht man sicher den Schlüssel aus?
- Asymmetrisch (RSA): sichere Schlüsselübertragung, aber langsam für große Datenmengen.

**Lösung – hybrider Ansatz (HTTPS-Verbindung):**

1. **Handshake (asymmetrisch):**
   - Browser holt Server-Zertifikat (öffentlicher Schlüssel)
   - Browser und Server einigen sich per Diffie-Hellman auf einen Sitzungsschlüssel (Session-Key)
   - Optional: Authentifizierung über Zertifikat (CA)

2. **Datentransfer (symmetrisch):**
   - Eigentliche Daten werden mit AES und dem Session-Key verschlüsselt
   - Schnell, sicher

3. **Integrität:** HMAC oder ähnliches zur Prüfung, dass Daten nicht verändert wurden.

**Vorteil:** Beste Sicherheit + Geschwindigkeit.

**Beispiele:** HTTPS, TLS, SSH, VPN.`
          },
        ]
      },
      {
        icon: '🌐',
        title: 'Netzwerk & Protokolle',
        sections: [
          {
            title: 'OSI-Modell (7 Schichten)',
            content: `Theoretisches Referenzmodell für Netzwerkkommunikation. Von der Anwendung zum Kabel.

**7. Anwendungsschicht (Application)**
HTTP, HTTPS, FTP, SMTP, DNS, IMAP, POP3
→ Was der Nutzer sieht (Browser, Mail-Programm)

**6. Darstellungsschicht (Presentation)**
Verschlüsselung, Komprimierung, Datenformate (z.B. JPEG, MP3, ASCII)

**5. Sitzungsschicht (Session)**
Auf-/Abbau und Verwaltung von Verbindungen

**4. Transportschicht (Transport)**
TCP (zuverlässig, mit Bestätigung), UDP (schnell, ohne Garantie)
Ports (z.B. 80=HTTP, 443=HTTPS, 25=SMTP)

**3. Vermittlungsschicht (Network)**
IP, Routing zwischen Netzwerken
IP-Adressen, Router

**2. Sicherungsschicht (Data Link)**
Ethernet, MAC-Adressen, Switch
Frame-Übertragung im lokalen Netz

**1. Bitübertragungsschicht (Physical)**
Kabel, Funk, Stecker, Spannung, Lichtimpulse

**Eselsbrücke (von oben nach unten):**
"Alle Programmierer Sehen Tatsächlich Nur Datenmüll Bits"
(Anwendung-Präsentation-Sitzung-Transport-Netzwerk-DataLink-Bit)`
          },
          {
            title: 'TCP/IP-Modell (4 Schichten)',
            content: `Praktisches Modell für das heutige Internet. Vereinfachung des OSI-Modells.

**4. Anwendungsschicht** (entspricht OSI 5-7)
HTTP, FTP, DNS, SMTP

**3. Transportschicht** (entspricht OSI 4)
TCP, UDP

**2. Internetschicht** (entspricht OSI 3)
IP, ICMP, Routing

**1. Netzzugangsschicht** (entspricht OSI 1-2)
Ethernet, WLAN

**TCP vs. UDP:**
TCP: zuverlässig, Verbindung wird aufgebaut, Pakete bestätigt, Reihenfolge garantiert. Verwendung: HTTP, E-Mail, Datenübertragung.
UDP: schnell, keine Garantie, kein Verbindungsaufbau. Verwendung: Streaming, Online-Spiele, DNS, Voice-Chat.`
          },
          {
            title: 'IP-Adressen',
            content: `**IPv4:**
- 32 Bit lang (4 Bytes)
- Schreibweise: 4 Zahlen 0-255 mit Punkten (z.B. 192.168.1.1)
- Insgesamt ca. 4,3 Milliarden Adressen

**Private IP-Bereiche (nur lokal):**
- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

**IPv6:**
- 128 Bit lang
- Schreibweise: 8 Hex-Blöcke mit Doppelpunkt (z.B. 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
- Praktisch unbegrenzt viele Adressen
- Eingebaute Sicherheit (IPsec)

**Subnet:** Aufteilung eines Netzes in kleinere Bereiche. Subnetzmaske: z.B. 255.255.255.0 → erstes 24 Bit Netz, letzte 8 Bit Hosts.

**MAC-Adresse:** Hardware-Adresse (48 Bit), eindeutig pro Netzwerkkarte. Z.B. AA:BB:CC:11:22:33.`
          },
          {
            title: 'DNS (Domain Name System)',
            content: `Übersetzt menschenlesbare Domain-Namen in IP-Adressen.

**Beispiel:**
google.com → 142.250.74.46

**Hierarchie:**
- Root-Server (.)
- TLD-Server (.com, .de, .org)
- Authoritative Server (für eine bestimmte Domain)

**Wichtige Record-Typen:**
- **A-Record:** IPv4-Adresse
- **AAAA-Record:** IPv6-Adresse
- **CNAME:** Alias auf andere Domain
- **MX:** Mailserver
- **TXT:** Textinformation (z.B. SPF für Mail-Sicherheit)
- **NS:** Nameserver

**Caching:** DNS-Antworten werden mit TTL (Time To Live) gespeichert, damit nicht jedes Mal der Root-Server gefragt werden muss.

**DNSSEC:** Erweiterung mit kryptographischer Signatur → schützt vor DNS-Spoofing.`
          },
          {
            title: 'Wichtige Ports',
            content: `Ports sind "Türen" auf einem Server, jeweils einem Dienst zugeordnet.

**Häufig geprüfte Ports:**
- **20/21** – FTP (Datentransfer)
- **22** – SSH (sichere Shell)
- **23** – Telnet (unverschlüsselt, veraltet)
- **25** – SMTP (Mail-Versand)
- **53** – DNS
- **80** – HTTP (unverschlüsselt)
- **110** – POP3 (Mail-Abruf)
- **143** – IMAP (Mail-Abruf modern)
- **443** – HTTPS (verschlüsselt)
- **587** – SMTP-Submission (Mail mit Auth)
- **993** – IMAPS (verschlüsselt)
- **995** – POP3S (verschlüsselt)
- **3306** – MySQL
- **3389** – RDP (Remote Desktop)
- **5432** – PostgreSQL
- **8080** – HTTP-Alternative

**Wichtig:** Ports 0-1023 sind "Well-known Ports", reserviert für Standarddienste.`
          },
        ]
      },
      {
        icon: '📜',
        title: 'Recht – Wichtige Artikel & Paragraphen',
        sections: [
          {
            title: 'DSGVO – Wichtige Artikel',
            content: `**Art. 5 – Grundsätze**
Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität, Vertraulichkeit, Rechenschaftspflicht.

**Art. 6 – Rechtsgrundlagen für Verarbeitung**
a) Einwilligung
b) Vertragserfüllung
c) Rechtliche Verpflichtung
d) Lebenswichtige Interessen
e) Öffentliche Aufgabe
f) Berechtigtes Interesse

**Art. 7 – Bedingungen für Einwilligung**
Nachweisbar, freiwillig, informiert, jederzeit widerrufbar.

**Art. 13/14 – Informationspflicht**
Bei Datenerhebung müssen Betroffene informiert werden (Zweck, Speicherdauer, Rechte etc.).

**Art. 15 – Auskunftsrecht**
Betroffene können erfragen, welche Daten gespeichert sind. Frist: 1 Monat.

**Art. 16 – Berichtigungsrecht**
Falsche Daten müssen korrigiert werden.

**Art. 17 – Recht auf Löschung ("Vergessen")**
Daten löschen, wenn nicht mehr nötig.

**Art. 20 – Datenübertragbarkeit**
Eigene Daten in maschinenlesbarem Format herausgeben.

**Art. 25 – Privacy by Design / Default**
Datenschutz von Anfang an einbauen, datenschutzfreundliche Voreinstellungen.

**Art. 28 – Auftragsverarbeitung (AV)**
Vertrag mit Dienstleistern zwingend.

**Art. 32 – Datensicherheit**
Technisch und organisatorisch angemessene Maßnahmen.

**Art. 33 – Meldepflicht bei Datenpanne**
Innerhalb 72 Stunden an Behörde melden.

**Art. 34 – Information Betroffener**
Bei hohem Risiko zusätzlich Betroffene informieren.

**Art. 83 – Bußgelder**
Bis 20 Mio. € oder 4 % weltweiten Jahresumsatzes (höherer Wert).`
          },
          {
            title: 'Urheberrechtsgesetz (UrhG)',
            content: `**§ 2 – Geschützte Werke**
Sprachwerke, Musik, Filme, Fotos, Software, Datenbanken etc. → wenn persönliche geistige Schöpfung (Schöpfungshöhe).

**§ 7 – Urheber**
Schöpfer eines Werks. Kann nicht übertragen werden, nur Nutzungsrechte.

**§ 11 – Schutz**
Urheber wird geschützt in seinen geistigen und persönlichen Beziehungen zum Werk.

**§ 31 – Nutzungsrechte**
Können einfach (mehreren) oder ausschließlich (nur einer) eingeräumt werden.

**§ 51 – Zitatrecht**
Zitate sind erlaubt, wenn Quelle genannt und mit Zitat belegt.

**§ 53 – Privatkopie**
Kopien für privaten Gebrauch erlaubt (kein Kopierschutz umgehen!).

**§ 59 – Panoramafreiheit**
Werke an öffentlichen Orten dürfen fotografiert/veröffentlicht werden (Außenraum).

**§ 64 – Schutzdauer**
70 Jahre nach Tod des Urhebers.

**§ 72 – Lichtbilder (einfache Fotos)**
50 Jahre Schutz nach Erscheinen.

**§ 87a-e – Datenbankhersteller**
Eigenständiger Schutz von Datenbanken (15 Jahre).

**Creative-Commons-Lizenzen (CC):**
- BY: Urheber nennen
- NC: nur nicht-kommerziell
- ND: nicht verändern
- SA: gleiche Bedingungen weitergeben
- CC0: Public Domain (komplett frei)`
          },
          {
            title: 'Impressumspflicht (DDG / TMG / MStV)',
            content: `**Wer braucht ein Impressum?**
Jeder, der eine Website (auch privat) "geschäftsmäßig" betreibt – das ist sehr weit gefasst!

**Pflichtangaben (DDG § 5):**
1. Vor- und Nachname (oder Firmenname)
2. Anschrift (kein Postfach)
3. Kontakt (Mail zwingend, Telefon empfohlen)
4. Bei Unternehmen: Vertretungsberechtigte
5. Bei eingetragenen Firmen: Handelsregister + Nummer
6. USt-ID (wenn vorhanden)
7. Aufsichtsbehörde (bei Berufen mit Aufsicht)

**Bei journalistischen Inhalten zusätzlich (§ 18 MStV):**
8. Verantwortliche/r für Inhalt mit Anschrift

**Wo platzieren?**
"Mit höchstens zwei Klicks erreichbar" (Footer-Link).

**Folgen bei Verstößen:**
- Bußgeld bis 50.000 €
- Abmahnungen durch Konkurrenten oder Wettbewerbsverbände
- Sehr häufiger Abmahn-Grund!`
          },
        ]
      },
      {
        icon: '🛡',
        title: 'IT-Sicherheit',
        sections: [
          {
            title: 'TOMs – Technische und Organisatorische Maßnahmen',
            content: `Pflicht nach DSGVO Art. 32. Schutz personenbezogener Daten.

**Technische Maßnahmen:**
- Verschlüsselung (Festplatte, E-Mail, Übertragung HTTPS)
- Firewall, Antivirus
- Backup-Strategie (3-2-1)
- Zugriffsbeschränkung (Berechtigungen, Rollen)
- 2-Faktor-Authentifizierung
- Software-Updates / Patch-Management
- Logging, Monitoring
- Sichere Passwörter erzwingen

**Organisatorische Maßnahmen:**
- Verschwiegenheitsverpflichtung
- Mitarbeiter-Schulungen
- Verfahrensverzeichnis (Art. 30)
- Datenschutzbeauftragter (ab 20 MA mit personenbezogenen Daten)
- Notfallpläne
- Zugangskontrolle (Schlüssel, Chipkarten)
- Clean-Desk-Policy
- Akten-Vernichtung (DIN 66399)`
          },
          {
            title: 'Backup-Strategien',
            content: `**3-2-1-Regel:**
- **3** Kopien der Daten (1 Original + 2 Backups)
- **2** verschiedene Speichermedien (z.B. NAS + Cloud)
- **1** Off-Site (räumlich getrennt, z.B. Cloud)

**Backup-Arten:**
- **Vollbackup:** Alle Daten, jedes Mal komplett. Sicher, aber speicherintensiv.
- **Inkrementell:** Nur Änderungen seit letztem Backup. Schnell, aber Wiederherstellung dauert.
- **Differenziell:** Alle Änderungen seit letztem Vollbackup. Mittelweg.

**Empfehlung:** Wöchentlich Vollbackup, täglich inkrementell.

**Wichtig:** Backup TESTEN! Ein nie geprüftes Backup ist kein Backup.

**Schutz vor Ransomware:** Mindestens 1 Backup OFFLINE (z.B. externe Festplatte, die nach Backup wieder abgesteckt wird) – sonst wird das Backup mitverschlüsselt.`
          },
          {
            title: 'Angriffsarten',
            content: `**Phishing:**
Gefälschte Mails/Webseiten, um Zugangsdaten zu stehlen. Schutz: Absender prüfen, 2FA, Schulung.

**Spear-Phishing:**
Gezielter Phishing-Angriff auf eine bestimmte Person mit personalisierten Infos.

**Brute-Force:**
Automatisiertes Durchprobieren aller Passwörter. Schutz: lange Passwörter, Account-Lockout, 2FA, CAPTCHA.

**SQL-Injection:**
Eingabe von SQL-Code in Formularen, um Datenbank zu manipulieren. Schutz: Prepared Statements, Input-Validierung.

**XSS (Cross-Site Scripting):**
Einschleusen von JavaScript in Webseiten. Schutz: Input-Encoding, Content-Security-Policy.

**DDoS (Distributed Denial of Service):**
Server mit Anfragen überlasten, bis Dienst zusammenbricht. Schutz: CDN, Cloudflare, Loadbalancer.

**Man-in-the-Middle:**
Angreifer schaltet sich zwischen zwei Kommunikationspartner. Schutz: HTTPS, Zertifikate, VPN.

**Ransomware:**
Verschlüsselt Daten und fordert Lösegeld. Schutz: Backups (offline!), Updates, Phishing-Schulung. NIEMALS zahlen!

**Social Engineering:**
Manipulation durch psychologische Tricks (z.B. fingierter Anruf vom "IT-Support"). Schutz: Aufklärung, klare Prozesse.`
          },
        ]
      },
      {
        icon: '💻',
        title: 'Hardware & Software',
        sections: [
          {
            title: 'Hardware-Komponenten',
            content: `**CPU (Central Processing Unit):** Prozessor, Hauptrechner. Taktfrequenz (GHz), Kerne, Cache.

**RAM (Random Access Memory):** Arbeitsspeicher, flüchtig. Beim Ausschalten weg.

**ROM/Festspeicher:**
- HDD (Hard Disk Drive): mechanisch, billig, langsam
- SSD (Solid State Drive): Flash, schnell
- NVMe: noch schneller, über PCIe

**GPU (Graphics Processing Unit):** Grafikkarte, parallele Berechnung.

**Mainboard:** Hauptplatine, verbindet alles.

**Netzteil (PSU):** Stromversorgung.

**I/O-Geräte:** Tastatur, Maus, Monitor, Drucker, Scanner.

**Pixel und Auflösung:**
- Pixel = kleinster Bildpunkt
- Auflösung = Pixel × Pixel (z.B. 1920×1080 = Full HD)
- DPI/PPI = Pixel/Punkte pro Zoll
  - Bildschirm: meist 72-96 PPI
  - Druck: mind. 300 DPI

**Farbtiefe:** Anzahl Bits pro Pixel
- 8 Bit = 256 Farben
- 24 Bit = 16,7 Mio. Farben (True Color)
- 32 Bit = TrueColor + Alpha (Transparenz)`
          },
          {
            title: 'Dateiformate',
            content: `**Bildformate:**
- **JPG/JPEG:** verlustbehaftet komprimiert. Gut für Fotos. Keine Transparenz.
- **PNG:** verlustfrei, mit Transparenz. Gut für Logos, Grafiken.
- **GIF:** 256 Farben, Animation, Transparenz. Veraltet für Fotos.
- **WebP:** modern, klein, mit Transparenz und Animation. Web-tauglich.
- **AVIF:** noch effizienter als WebP.
- **SVG:** Vektorgrafik, beliebig skalierbar. Für Logos, Icons im Web.
- **TIFF:** verlustfrei, riesig. Druck und Archiv.
- **RAW:** unbearbeitete Kameradaten. Für Profi-Bildbearbeitung.
- **PSD:** Photoshop-Arbeitsdatei mit Ebenen.
- **AI:** Illustrator-Arbeitsdatei.

**Dokumentformate:**
- **PDF:** plattformunabhängig, druckfertig.
- **DOCX:** Microsoft Word.
- **TXT:** reiner Text.
- **HTML:** Web-Seiten.

**Audio:**
- **MP3:** verlustbehaftet, klein.
- **WAV:** verlustfrei, groß.
- **FLAC:** verlustfrei komprimiert.
- **AAC:** modern, besser als MP3.

**Video:**
- **MP4 (H.264/H.265):** Standard.
- **MOV:** Apple Quicktime.
- **WebM:** Open-Source, web-tauglich.
- **AVI:** veraltet.`
          },
          {
            title: 'Software-Lizenzen',
            content: `**Proprietär (kommerziell):**
Quellcode geschlossen, Nutzungsrechte gekauft. Z.B. Microsoft Office, Photoshop.

**Open Source:**
Quellcode öffentlich, oft kostenlos. Beispiele: Linux, Firefox, Blender, GIMP.

**Wichtige Open-Source-Lizenzen:**
- **GPL:** "Copyleft" – Änderungen müssen ebenfalls als GPL veröffentlicht werden.
- **MIT:** sehr permissiv, erlaubt fast alles. Nur Lizenztext mitliefern.
- **Apache 2.0:** wie MIT, plus Patentschutz.
- **BSD:** ähnlich wie MIT.

**Freeware:** kostenlos, aber Quellcode geschlossen.

**Shareware:** kostenlose Testversion, dann zu zahlen.

**Trial:** zeitlich begrenzte Vollversion.

**SaaS (Software as a Service):** Mietsoftware, läuft in der Cloud (z.B. Microsoft 365).`
          },
        ]
      },
    ]
  },

  gg: {
    intro: 'Referenzmaterialien für die Gestaltungsprüfung – Farbsysteme, Typografie-Klassifikation, Druckspezifikationen und Bildtechnik.',
    chapters: [
      {
        icon: '🌈',
        title: 'Farbsysteme & Farbenlehre',
        sections: [
          {
            title: 'CMYK – Subtraktive Farbmischung (Druck)',
            content: `**CMYK** = Cyan, Magenta, Yellow, Key (Schwarz)

Funktioniert mit Lichtabsorption. Druckfarben absorbieren bestimmte Wellenlängen, der Rest wird reflektiert und vom Auge wahrgenommen.

**Mischung:**
- C + M = Blau
- C + Y = Grün
- M + Y = Rot
- C + M + Y = (theoretisch) Schwarz, in der Praxis ein matschiges Braun → deshalb K für tiefes Schwarz.

**Werte:** in % (0-100)
Reines Schwarz: C0 M0 Y0 K100
Tiefschwarz für Druck: z.B. C40 M30 Y30 K100

**Farbumfang (Gamut):** kleiner als RGB → leuchtende Farben am Bildschirm wirken im Druck oft matter.`
          },
          {
            title: 'RGB – Additive Farbmischung (Bildschirm)',
            content: `**RGB** = Rot, Grün, Blau

Funktioniert mit Lichtaussendung. Pixel auf Bildschirmen senden Licht in diesen drei Farben.

**Mischung:**
- R + G = Gelb
- R + B = Magenta
- G + B = Cyan
- R + G + B = Weiß
- Alle aus = Schwarz

**Werte:** 0-255 pro Kanal (z.B. R255 G0 B0 = reines Rot)
**Hex:** #RRGGBB (z.B. #FF0000 = Rot)

**Verwendung:** alles, was leuchtet (Bildschirme, Smartphones, Beamer).`
          },
          {
            title: 'HSB / HSL – Farbintuitiv',
            content: `**HSB / HSV:** Hue (Farbton), Saturation (Sättigung), Brightness/Value (Helligkeit)
**HSL:** Hue, Saturation, Lightness

**Hue (Farbton):** 0-360°
- 0° = Rot
- 60° = Gelb
- 120° = Grün
- 180° = Cyan
- 240° = Blau
- 300° = Magenta

**Saturation:** 0% (grau) bis 100% (volle Farbe)

**Brightness/Lightness:** 0% (schwarz) bis 100% (hell/weiß)

Sehr intuitiv für Designer – einfacher zu bedienen als RGB.`
          },
          {
            title: 'Pantone (PMS) – Sonderfarben',
            content: `Pantone Matching System: standardisierte Farbkatalog für Druck.

**Vorteil:** Farbe ist genormt – ein "Pantone 185 C" ist immer exakt das gleiche Rot, egal welche Druckerei.

**Verwendung:**
- Markenfarben (z.B. Coca-Cola Rot = Pantone 484)
- Tiefes Schwarz, Metallic-Farben, Neonfarben (nicht in CMYK abbildbar)
- Kleine Auflagen mit besonderen Anforderungen

**Pantone Color of the Year:** wird jährlich ausgerufen, Designer-Trend.`
          },
          {
            title: 'Farbkontraste (nach Itten)',
            content: `**7 Farbkontraste:**
1. **Farbe-an-sich-Kontrast:** reine, ungetrübte Farben nebeneinander (z.B. Rot/Gelb/Blau).
2. **Hell-Dunkel-Kontrast:** Schwarz/Weiß. Wichtig für Lesbarkeit.
3. **Kalt-Warm-Kontrast:** Blau/Türkis vs. Rot/Orange/Gelb.
4. **Komplementärkontrast:** Farben gegenüber im Farbkreis (Rot/Grün, Blau/Orange, Gelb/Violett).
5. **Simultankontrast:** Farbe scheint sich abhängig von Umgebung zu verändern.
6. **Qualitätskontrast:** Reine vs. getrübte Farben.
7. **Quantitätskontrast:** Verhältnis von Farbflächen.`
          },
        ]
      },
      {
        icon: '🔤',
        title: 'Typografie',
        sections: [
          {
            title: 'Schriftklassifikation (DIN 16518)',
            content: `**Antiqua-Schriften (mit Serifen):**
- **Venezianische Renaissance:** schräge Achse, weiche Übergänge (z.B. Centaur)
- **Französische Renaissance:** ausgeglichener (z.B. Garamond)
- **Barock:** stärkere Kontraste (z.B. Times)
- **Klassizistisch:** starke Strichkontraste, gerade Achse (z.B. Bodoni, Didot)
- **Serifenbetont (Slab Serif):** kräftige Serifen (z.B. Rockwell, Courier)

**Serifenlose Schriften (Sans-Serif):**
- **Grotesk:** klassische sans-serif (z.B. Helvetica, Arial)
- **Neo-Grotesk:** moderner (z.B. Roboto)
- **Geometrisch:** klare Geometrie (z.B. Futura)
- **Humanistisch:** menschlicher Charakter (z.B. Gill Sans)

**Schreibschriften:** kalligraphische Schriften (z.B. Brush Script).

**Display/Akzidenz:** Auffallende Schriften für Plakate, Logos.`
          },
          {
            title: 'Typografische Begriffe',
            content: `**Schriftgrad:** Größe in Punkt (pt). 1 pt = 1/72 Zoll = 0,353 mm.

**Versalhöhe:** Höhe der Großbuchstaben.

**x-Höhe:** Höhe der Kleinbuchstaben (z.B. x, n, o – ohne Ober-/Unterlängen).

**Oberlänge:** Strich nach oben (z.B. b, d, h, l).

**Unterlänge:** Strich nach unten (z.B. g, j, p, q, y).

**Kerning:** Abstand zwischen einzelnen Buchstabenpaaren (z.B. AV, To).

**Laufweite (Tracking):** gleichmäßiger Abstand aller Buchstaben.

**Zeilenabstand (Leading):** Abstand zwischen Zeilen.
- Faustregel: ca. 120-140% der Schriftgröße.

**Schriftschnitt:** Stil-Variante (Light, Regular, Bold, Italic, Black).

**Ligatur:** Verbundene Buchstaben (fi, fl, ff).`
          },
          {
            title: 'Lesbarkeit-Regeln',
            content: `**Schriftgröße:**
- Fließtext gedruckt: 9-12 pt
- Fließtext Web: mind. 16 px
- Plakat (aus 2-3m Entfernung): mind. 18-24 pt
- Plakat (Großformat): 80+ pt für Headlines

**Zeilenlänge:**
Optimal: 50-75 Zeichen pro Zeile (inkl. Leerzeichen).
Zu kurz: Augen springen ständig. Zu lang: Verlieren der Zeile.

**Kontrast:**
WCAG AA: 4.5:1 für Fließtext, 3:1 für große Schrift.

**Schriftauswahl:**
- Serif: gut für lange Print-Texte (Augen folgen den Serifen).
- Sans-Serif: gut für Web und kurze Texte.
- Mehr als 2-3 Schriften wirken chaotisch.`
          },
        ]
      },
      {
        icon: '🖨',
        title: 'Druckspezifikationen',
        sections: [
          {
            title: 'DIN-Formate',
            content: `**A-Reihe (Standard):**
- A0: 841 × 1189 mm (1 m²)
- A1: 594 × 841 mm
- A2: 420 × 594 mm
- A3: 297 × 420 mm
- A4: 210 × 297 mm (Standard-Brief)
- A5: 148 × 210 mm
- A6: 105 × 148 mm (Postkarte)
- A7: 74 × 105 mm

**B-Reihe:** zwischen A-Größen (z.B. B5: 176×250)

**C-Reihe:** für Briefumschläge zu A-Formaten (C4 für A4, C5 für A5).

**Sonderformate:** quadratisch, Lang-DL (z.B. 105×210 mm – DIN-Lang-Flyer).

**Faustregel:** Halbieren in der langen Seite halbiert das Format um eine Stufe (A4 halbiert = A5).`
          },
          {
            title: 'Auflösung & Dateimaße',
            content: `**Druck-Auflösung:**
- 300 DPI = Standard für Bilder im Druck (Scharfe Wiedergabe)
- 1200 DPI = Strichgrafiken/Linien
- 72-96 DPI = nur für Bildschirm

**Auflösung berechnen:**
Pixel-Anzahl = (cm × DPI) / 2,54
Beispiel: 10 cm × 300 DPI / 2,54 = 1181 Pixel

**Beschnittzugabe:**
- Standard: 3 mm an allen Seiten
- Großformat: 5 mm

**Sicherheitsabstand:** Wichtige Inhalte (Texte, Logos) mind. 5 mm vom Rand.

**Endformat + Beschnitt + Sicherheit = Setzlinien.**

**Dateiformate für Druck:**
- PDF/X-1a oder PDF/X-4 (Standard für Druckereien)
- TIFF für hochauflösende Bilder
- EPS für Vektoren (älter)`
          },
          {
            title: 'Falzarten',
            content: `**Einfachfalz:** 1 Falz, 4 Seiten (z.B. Klappkarte).

**Wickelfalz:** Seiten werden nach innen gewickelt. 6 oder 8 Seiten. Innere Seiten brauchen ca. 2 mm weniger Breite!

**Zickzackfalz / Leporello:** wie eine Ziehharmonika gefaltet.

**Kreuzbruchfalz:** zwei Falze quer zueinander.

**Altarfalz:** beide Seiten nach innen geklappt, treffen sich in der Mitte.

**Fensterfalz:** wie Altarfalz, mittlerer Bereich gestanzt (Fenster).

**Wichtig:**
- Falzrichtung markieren (z.B. Kreis am Falz im Datendokument)
- Reihenfolge planen!
- Beim Wickelfalz: innere Seiten 1-2 mm schmaler.`
          },
          {
            title: 'Druckveredelungen',
            content: `**Lacke:**
- **Glanzlack:** matt → glänzend
- **Mattlack:** glänzend → matt
- **UV-Lack:** sehr glänzend, kann lokal als Spot-Lack
- **Soft-Touch-Lack:** samtige Haptik

**Folierungen:**
- **Glanz-/Mattfolie:** schützt + verändert Optik
- **Soft-Touch-Folie:** samtig

**Prägungen:**
- **Heißfolienprägung:** Folie (Gold, Silber, Holographisch) wird mit Hitze auf Papier übertragen
- **Blindprägung:** geprägter Effekt ohne Farbe (relief)
- **Reliefprägung:** Kombination aus Druck + Prägung

**Stanzungen:**
- **Konturstanze:** Form ausstanzen (z.B. herzförmiger Flyer)
- **Lochstanze:** Loch zum Aufhängen
- **Perforationen:** Trennlinie zum Abreißen

**Kosten:** Veredelungen erhöhen Druckkosten erheblich → nur gezielt einsetzen, oft als Akzent.`
          },
        ]
      },
      {
        icon: '📷',
        title: 'Fotografie & Bildtechnik',
        sections: [
          {
            title: 'Belichtungsdreieck',
            content: `Drei Faktoren beeinflussen die Helligkeit:

**1. Blende (f-Wert):**
- f/1.4 = sehr offen → viel Licht, geringe Tiefenschärfe
- f/22 = sehr geschlossen → wenig Licht, hohe Tiefenschärfe

**2. Verschlusszeit:**
- 1/1000s = sehr kurz → einfriert Bewegung
- 1s = sehr lang → Bewegung verschwimmt (Wischer)
- Faustregel verwacklungsfrei: 1/Brennweite (z.B. 50mm → 1/60s)

**3. ISO:**
- ISO 100 = wenig empfindlich, kaum Rauschen, viel Licht nötig
- ISO 6400+ = sehr empfindlich, sichtbares Rauschen
- Faustregel: möglichst niedrigster ISO-Wert.

**Zusammenspiel:** Wenn ein Wert geändert wird, müssen die anderen ausgeglichen werden, damit Belichtung gleich bleibt.`
          },
          {
            title: 'Bildkomposition',
            content: `**Goldener Schnitt:** Verhältnis ca. 1:1.618. Das Hauptmotiv liegt nicht mittig, sondern am Schnittpunkt der goldenen Linien.

**Drittel-Regel:** Vereinfachung des goldenen Schnitts. Bild in 3×3 Raster, Hauptmotiv auf Schnittlinien oder Schnittpunkten.

**Diagonalmethode:** Diagonalen Linien führen den Blick.

**Symmetrie:** ruhige, formelle Wirkung.

**Asymmetrie:** dynamische, moderne Wirkung.

**Linien:** führen den Blick (Straßen, Zäune, Geländer).

**Rahmung (Framing):** natürliche Rahmen (Bogen, Fenster) lenken Fokus.

**Negative Space:** bewusst leerer Raum um Hauptmotiv → wirkt minimalistisch und edel.`
          },
          {
            title: 'Perspektiven',
            content: `**Augenhöhe:** neutral, "wie wir Menschen sehen".

**Froschperspektive:** von unten. Wirkung: Motiv wirkt mächtig, dominant, größer.

**Vogelperspektive:** von oben. Wirkung: Motiv wirkt klein, übersichtlich, kontrolliert.

**Über-Schulter:** zeigt Sicht aus Sicht einer Person.

**Detailperspektive:** sehr nah, einzelnes Detail.

**Total/Halbtotal/Nah/Detail:** filmische Einstellungsgrößen.`
          },
        ]
      },
    ]
  },

  km: {
    intro: 'Referenzmaterialien für die Mediendesign-/Konzept-Prüfung – Designsysteme, UI-Patterns, Webtechnik-Grundlagen.',
    chapters: [
      {
        icon: '🎨',
        title: 'Designsystem-Grundlagen',
        sections: [
          {
            title: 'Spacing-Skalen (4/8/16/24/32/48/64)',
            content: `Konsistenter Abstand schafft visuelle Ruhe. Die meisten Designsysteme nutzen Skalen mit 4 oder 8 als Grundeinheit.

**4er-Skala:** 4, 8, 12, 16, 24, 32, 48, 64, 96 (Material Design)

**8er-Skala:** 8, 16, 24, 32, 48, 64, 96, 128

**Regel:** alle Abstände, Paddings, Margins sollen aus dieser Skala stammen. Kein 13px oder 22px irgendwo!

**Verwendung:**
- Innen-Padding von Buttons: 8/16
- Card-Padding: 16/24
- Section-Abstand: 48/64
- Gap zwischen Items: 8/16/24`
          },
          {
            title: 'Typografische Skala',
            content: `Auch Schriftgrößen folgen einer Skala.

**Standard-Skala (1.25er-Verhältnis, "Major Third"):**
- 12 (Caption)
- 14 (Body small)
- 16 (Body)
- 20 (Lead)
- 24 (H4)
- 32 (H3)
- 40 (H2)
- 48-64 (H1 / Display)

**Web-Tipp:** Body-Text nicht unter 16px (Mobile-Lesbarkeit).

**Skala generieren:** type-scale.com (Online-Tool).`
          },
          {
            title: 'Farb-Tokens',
            content: `Farben werden nicht direkt verwendet, sondern über benannte Tokens.

**Beispiel:**
- primary: #2563eb
- primary-hover: #1d4ed8
- primary-light: #dbeafe
- text: #111827
- text-muted: #6b7280
- background: #ffffff
- background-alt: #f9fafb
- border: #e5e7eb
- success: #16a34a
- warning: #f59e0b
- error: #dc2626

**Vorteil:** ändert man später die Markenfarbe, ändert sich alles automatisch.

**Tonwert-Skala:** Pro Farbe oft 50, 100, 200, ..., 900 (z.B. Tailwind-Skala).`
          },
        ]
      },
      {
        icon: '🧩',
        title: 'UI-Patterns',
        sections: [
          {
            title: 'Navigations-Patterns',
            content: `**Top-Bar / Header:** klassisch, gut für Desktop. Logo links, Menü mittig/rechts, Aktionen ganz rechts.

**Hamburger-Menü:** ☰-Icon klappt Navigation aus. Auf Mobile sehr verbreitet, auf Desktop diskutiert (oft als versteckt empfunden).

**Bottom-Tab-Bar (Mobile):** 3-5 Hauptbereiche unten. Daumen-Reichweite optimal.

**Sidebar (Desktop):** vertikales Menü links. Gut für Apps mit vielen Bereichen (Slack, Discord).

**Mega-Menu:** großes Aufklappmenü mit Spalten/Bildern. Für E-Commerce mit vielen Kategorien.

**Breadcrumbs:** "Home › Kategorie › Produkt" – zeigt Position in Hierarchie.

**Tabs:** Wechsel zwischen Inhalts-Bereichen ohne Seitenwechsel.`
          },
          {
            title: 'Form-Patterns',
            content: `**Single-Column-Layout:** alle Felder untereinander. Höhere Conversion als mehrspaltig.

**Inline-Validierung:** Fehler direkt unter Feld anzeigen, sobald Nutzer fertig getippt hat.

**Smart Defaults:** vorausgefüllte sinnvolle Werte (z.B. heutiges Datum).

**Floating Labels:** Label springt nach oben, wenn Feld fokussiert/gefüllt.

**Progress-Indicator:** bei mehrstufigen Formularen Fortschritt zeigen.

**Required-Markierung:** Pflichtfelder mit * oder Hinweis. Optionale lieber als "(optional)" kennzeichnen.

**Autofill:** Browser-Autofill durch korrekte autocomplete-Attribute unterstützen.

**Touch-Targets:** mind. 44×44px auf Mobile.`
          },
          {
            title: 'Feedback-Patterns',
            content: `**Toast / Snackbar:** kurze nicht-blockierende Nachricht, verschwindet nach 3-5s.

**Modal / Dialog:** blockiert Interaktion. Für wichtige Entscheidungen oder kurze Eingaben.

**Drawer:** seitliches Panel. Für Filter, Settings, sekundäre Navigation.

**Tooltip:** kleine Erklärung beim Hover/Tap.

**Skeleton-Loader:** Platzhalter in Form des erwarteten Inhalts während Laden.

**Empty State:** Anzeige bei leeren Daten. Sollte motivieren (Icon + Text + Button).

**Confirmation-Dialog:** Sicherheitsabfrage bei destruktiven Aktionen ("Wirklich löschen?").`
          },
        ]
      },
      {
        icon: '📱',
        title: 'Responsive Design',
        sections: [
          {
            title: 'Breakpoints (Standard)',
            content: `**Mobile First** – am kleinsten anfangen.

**Übliche Breakpoints:**
- < 640px: Mobile (Smartphone Hochkant)
- 640-768px: große Smartphones / kleine Tablets
- 768-1024px: Tablet
- 1024-1280px: kleines Desktop / Laptop
- 1280-1536px: Desktop
- > 1536px: großes Desktop

**Tailwind-Standard:** sm:640 / md:768 / lg:1024 / xl:1280 / 2xl:1536

**CSS Media Query:**
\`@media (min-width: 768px) { ... }\`

**Wichtig:** nicht für jedes Gerät einzeln optimieren – auf Inhalt ausrichten ("Content-First").`
          },
          {
            title: 'Grid & Flexbox',
            content: `**Flexbox:** eindimensional (Zeile ODER Spalte).
\`display: flex;\` mit justify-content / align-items.

**Grid:** zweidimensional (Zeilen + Spalten).
\`display: grid; grid-template-columns: 1fr 2fr 1fr;\`

**Faustregel:**
- 1D-Layouts (Navigation, Button-Reihen): Flexbox
- 2D-Layouts (Karten-Raster, komplexes Page-Layout): Grid
- Beide kombinieren ist üblich.

**Container-Breite:** max. 1200-1400px für Desktops, dann zentrieren.`
          },
        ]
      },
      {
        icon: '🌐',
        title: 'Web-Grundlagen',
        sections: [
          {
            title: 'HTML-Semantik',
            content: `Wichtige semantische Elemente:

\`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, \`<aside>\`, \`<footer>\`

**Vorteile:**
- Bessere SEO
- Bessere Barrierefreiheit (Screenreader)
- Klarer Code

**Überschriften-Hierarchie:**
- 1× h1 pro Seite (Hauptthema)
- h2 für Hauptbereiche
- h3 für Unterbereiche
- KEINE Überschriften überspringen!

**Buttons vs. Links:**
- \`<button>\` für Aktionen (löschen, senden, öffnen)
- \`<a>\` für Navigation (zu anderer Seite/Anker)`
          },
          {
            title: 'CSS-Box-Model',
            content: `Jedes Element ist eine Box:

\`Content → Padding → Border → Margin\`

**Box-Sizing:**
- \`content-box\` (Standard): Width = Content, Padding/Border kommen dazu.
- \`border-box\`: Width = inkl. Padding+Border. Heute Standard wegen einfacherer Berechnung.

**Margin-Collapse:** vertikale Margins benachbarter Elemente werden zusammengelegt (nicht addiert).`
          },
          {
            title: 'Accessibility (WCAG)',
            content: `**4 Grundprinzipien:** Wahrnehmbar, Bedienbar, Verständlich, Robust (POUR).

**Wichtige Punkte:**
- **Kontrast:** 4.5:1 für Fließtext, 3:1 für große Schrift (WCAG AA)
- **Alt-Texte:** für alle Bilder mit Bedeutung
- **Tastatur-Navigation:** alles per Tab erreichbar
- **Fokus-Indikator:** sichtbar (kein outline:none ohne Ersatz!)
- **Semantisches HTML**
- **ARIA-Attribute:** wenn HTML allein nicht reicht
- **Schriftgröße:** skalierbar
- **Bewegung:** auf Wunsch reduzieren (\`prefers-reduced-motion\`)
- **Formular-Labels:** immer mit \`<label for="...">\``
          },
        ]
      },
    ]
  },
};
