  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjXf2C__O1437EMJ7pt-QIdCzNnaolYBzLOGQ8Chk1mwnuda9y2DW-xWaqRHLNlFVwx9WlXEtZYcIo/pub?gid=1287595683&single=true&output=csv";

  const spruecheDesTages = [
    "„Eigentlich wollte ich heute nichts trinken aber dann fiel mir ein dass ich nicht eigentlich bin.“",
    "„Mein Arzt meinte ich soll meine Leberwerte im Auge behalten jetzt trinke ich vor dem Spiegel.“",
    "„Ich trinke nur an Tagen die auf G enden und mittwochs.“",
    "„Realität ist etwas für Menschen die mit Likör nicht umgehen können.“",
    "„Zwischen gutem Vorsatz und Kontrollverlust passt immer noch ein Likörchen.“",
    "„Es heißt ja man soll auf seinen Körper hören meiner schreit gerade nach Likör.“",
    "„Ich bin nicht stur ich habe nur einfach recht und mein Likör sieht das genauso.“",
    "„Sport ist Mord und Likör ist der Komplize der dich dabei gut aussehen lässt.“",
    "„Ich habe heute wieder das Schlimmste verhindert ich war gar nicht erst nüchtern.“",
    "„Mein Lieblingsgemüse ist und bleibt der Kartoffelschnaps.“",
    "„Wer Liebe sucht findet oft nur Likör aber das ist unterm Strich auch in Ordnung.“",
    "„Manche Probleme lassen sich am besten mit einem Korkenzieher lösen.“",
    "„Ich habe heute extrem viele Kalorien verbrannt die Flasche stand nämlich ziemlich weit weg.“",
    "„Nüchternheit ist eine Phase die man mit genug Likör erfolgreich überwinden kann.“",
    "„Wenn mir das Leben Zitronen gibt frage ich sofort wo der Wodka bleibt.“",
    "„Ich atme Sauerstoff und atme Sarkasmus aus und zwischendurch trinke ich Likör.“",
    "„Mein Schienbein hilft mir im Dunkeln die Möbel zu finden der Likör hilft den Schmerz zu ignorieren.“",
    "„Ab einem gewissen Pegel macht alles plötzlich erstaunlich viel Sinn.“",
    "„Ich habe gelesen dass Alkohol Gehirnzellen tötet aber anscheinend nur die Traurigen.“",
    "„Ein weiser Mensch sagte einmal gar nichts und trank stattdessen einfach seinen Likör.“",
    "„Morgens bin ich müde abends bin ich wach und dazwischen bin ich furchtbar durstig.“",
    "„Wer behauptet man könne Glück nicht kaufen war einfach noch nie an meinem Tresor.“",
    "„Das ist kein Alkohol das ist flüssiges Seelenheil mit starkem Fruchtgeschmack.“",
    "„Ich bin heute emotional sehr nah am Wasser gebaut also am Feuerwasser.“",
    "„Natürlich mache ich Sport ich hebe schließlich regelmäßig Gläser in Richtung Mund.“",
    "„Man muss das Leben tanzen und wenn man nicht tanzen kann muss man wenigstens trinken.“",
    "„Ich bin nicht betrunken ich habe nur meine innere Stimme auf lautlos gestellt.“",
    "„Der frühe Vogel kann mich mal der späte Trinker hat eh viel mehr Spaß.“",
    "„Wenn man die Augen fest zumacht schmeckt der Montagmorgen fast wie ein Freitagabend mit Likör.“",
    "„Ich habe keine Lösung aber ich bewundere das Problem bei einem großen Glas Likör.“",
    "„Mein Blutdruck ist völlig in Ordnung mein Alkoholpegel ist allerdings noch extrem ausbaufähig.“",
    "„Arbeit ist der Fluch der trinkenden Klasse.“",
    "„Ich wollte heute eigentlich die Welt retten aber es hat geregnet also habe ich Likör getrunken.“",
    "„Ich vertraue absolut niemandem der seinen Likör heimlich mit Wasser verdünnt.“",
    "„Ein Tag ohne Likör ist wie ein Tag ohne Sonne theoretisch möglich aber völlig sinnlos.“",
    "„Alkohol ist selten eine Antwort aber beim Trinken vergisst man wenigstens die blöde Frage.“",
    "„Mein Kopf sagt Fitnessstudio aber mein Herz ruft ganz laut Hausbrennerei.“",
    "„Schlaf wird total überbewertet Likör hingegen wird meistens gnadenlos unterschätzt.“",
    "„Ich trinke um andere Menschen erträglicher zu machen und es funktioniert hervorragend.“",
    "„Heute bin ich wieder sehr nah an der Perfektion gescheitert aber der Likör tröstet mich.“"
  ];

  document.getElementById("dailyQuote").innerText = spruecheDesTages[Math.floor(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) / 86400000) % spruecheDesTages.length];
  
  // Die Datenbank startet ab jetzt komplett leer (kein Backup mehr)
  let likoerDatenbank = [];

  // Funktion, die gerufen wird, wenn die Verbindung fehlschlägt
  function zeigeVerbindungsFehler() {
    const offlineSprueche = [
      "„Gut Ding will Weile haben – genau wie ein guter Tropfen.“",
      "„Der Tresor ist gerade im Reifeprozess. Gleich wieder da!“",
      "„Manchmal braucht die Technik so lange wie eine gute Gärung.“"
    ];
    const spruch = offlineSprueche[Math.floor(Math.random() * offlineSprueche.length)];
    
    document.getElementById("overviewList").innerHTML = `
      <div style="text-align:center; padding: 20px; border: 1px dashed var(--border-gold); border-radius: 8px; background: rgba(248, 113, 113, 0.05); margin-top: 10px;">
        <p style="color: #f87171; font-weight: bold; margin-bottom: 8px;">⚠️ Keine Verbindung zum Tresor</p>
        <p style="color: var(--text); font-size: 0.9rem; margin-bottom: 16px;">Wir können die aktuellen Likör-Daten gerade nicht abrufen. Bitte probiere es später noch einmal.</p>
        <p style="font-style: italic; color: var(--accent-gold-light); font-size: 0.95rem;">${spruch}</p>
      </div>
    `;
  }

  const urlCode = new URLSearchParams(window.location.search).get("code");

  // CSV: Kommas, doppelte Anführungszeichen und Zeilenumbrüche in Feldern
  function parseCSV(text) {
    const rows = [];
    let row = [], field = "", quoted = false;
    text = text.replace(/^\uFEFF/, "");
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        if (quoted && text[i + 1] === '"') { field += '"'; i++; }
        else if (quoted || field === "") quoted = !quoted;
        else field += c;
      } else if (!quoted && c === ',') {
        row.push(field); field = "";
      } else if (!quoted && (c === '\n' || c === '\r')) {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field);
        if (row.some(v => v.trim())) rows.push(row);
        row = []; field = "";
      } else field += c;
    }
    if (quoted) throw new Error("Ungültiges CSV: nicht geschlossenes Feld");
    row.push(field);
    if (row.some(v => v.trim())) rows.push(row);
    return rows;
  }

  // Chargenzahl aus allen gültigen, eindeutigen Datensätzen berechnen (unabhängig vom Suchfilter).
  function aktualisiereStatistik() {
    document.getElementById("statChargen").textContent = likoerDatenbank.length;
    // Sortenfilter aus den vorhandenen Namen erzeugen; keine manuelle Liste nötig.
    const select = document.getElementById("sortenFilter");
    [...new Set(likoerDatenbank.map(l => l.name))].sort((a,b) => a.localeCompare(b,"de")).forEach(name => {
      const option = document.createElement("option");
      option.value = name; option.textContent = name; select.appendChild(option);
    });
  }

  // Live-Abruf der Daten
  if (CSV_URL.startsWith("http")) {
    // Bei jedem Seitenaufruf die veröffentlichte Tabelle neu abrufen, statt den Browser-Cache zu verwenden.
    // Google kann die Veröffentlichung selbst verzögert aktualisieren.
    fetch(CSV_URL, { cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer" })
      .then(res => {
        if (!res.ok) throw new Error("Netzwerkfehler");
        return res.text();
      })
      .then(csvText => {
        const zeilen = parseCSV(csvText);
        // Doppelte Codes nur einmal zählen; leere Zeilen und Einträge ohne Namen ignorieren.
        const codes = new Set();
        likoerDatenbank = zeilen.slice(1).flatMap(spalten => {
          const clean = i => (spalten[i] || "").trim();
          const code = clean(0).toUpperCase(), name = clean(1);
          if (!code || !name) return [];
          if (codes.has(code)) { console.warn("Doppelter Chargencode:", code); return []; }
          codes.add(code);
          // Öffentliche CSV-Spalten: Code, Name, Alkoholbasis, Zutaten, Ansatzdatum.
          // Zusätzliche alte Spalten werden ignoriert; Flaschensprüche sind nicht mehr erforderlich.
          return [{code, name, basis: clean(2), zutaten: clean(3), datum: clean(4)}];
        });
        // Auch eine leere Datenbank soll die tatsächliche Anzahl 0 anzeigen.
        aktualisiereStatistik();
        if (!likoerDatenbank.length) {
          document.getElementById("overviewList").textContent = "Noch keine Liköre eingetragen.";
          return;
        }
        filtriereUebersicht();
        // Direktlink erst nach dem erfolgreichen Datenimport auswerten.
        if (urlCode) {
          document.getElementById("codeInput").value = urlCode;
          sucheLikoer();
        }
      })
      .catch(err => {
        console.error("Fehler beim Laden der Likördaten:", err);
        zeigeVerbindungsFehler();
      });
  }

  // XSS-sichere Render-Funktion
  function renderUebersicht(daten) {
    const container = document.getElementById("overviewList");
    
    if(daten.length === 0) {
      container.innerHTML = `<p style="text-align:center; color: var(--muted); padding: 10px;">Keine passenden Liköre gefunden.</p>`;
      return;
    }
    
    daten.sort((a, b) => a.code.localeCompare(b.code));
    let gruppen = {};
    daten.forEach(item => {
      let buchstabe = item.code.charAt(0).toUpperCase() || "?";
      if (!gruppen[buchstabe]) gruppen[buchstabe] = [];
      gruppen[buchstabe].push(item);
    });

    container.innerHTML = ""; // Container sicher leeren
    
    Object.keys(gruppen).sort().forEach(buchstabe => {
      const header = document.createElement("div");
      header.className = "group-header";
      header.textContent = `KATEGORIE ${buchstabe}`;
      container.appendChild(header);

      gruppen[buchstabe].forEach(liq => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "liqueur-item";
        item.addEventListener("click", () => waehleLikoor(liq.code));

        const codeSpan = document.createElement("span");
        codeSpan.className = "liq-code";
        codeSpan.textContent = liq.code;

        const nameSpan = document.createElement("span");
        nameSpan.className = "liq-name";
        nameSpan.textContent = liq.name;

        item.appendChild(codeSpan);
        item.appendChild(nameSpan);
        container.appendChild(item);
      });
    });
  }

  function filtriereUebersicht() {
    const query = document.getElementById("filterInput").value.toLowerCase();
    const gefiltert = likoerDatenbank.filter(l => 
      (l.code.toLowerCase().includes(query) || l.name.toLowerCase().includes(query)) && (!document.getElementById("sortenFilter").value || l.name === document.getElementById("sortenFilter").value)
    );
    renderUebersicht(gefiltert);
  }

  function waehleLikoor(code) {
    document.getElementById("codeInput").value = code;
    sucheLikoer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Zutaten aus der bestehenden CSV-Zelle als einzelne Elemente darstellen.
  // Dezimalkommas und Kommas in Klammern bleiben erhalten.
  function zeigeZutaten(text) {
    const ziel = document.getElementById("resZutaten");
    ziel.replaceChildren();
    if (!text.trim()) { ziel.textContent = "Noch keine Zutaten hinterlegt."; return; }
    const teile = [];
    let feld = "", tiefe = 0;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === "(") tiefe++;
      if (c === ")") tiefe = Math.max(0, tiefe - 1);
      const dezimal = c === "," && /\d/.test(text[i-1] || "") && /\d/.test(text[i+1] || "");
      if (!tiefe && !dezimal && /[,;\r\n]/.test(c)) {
        if (feld.trim()) teile.push(feld.trim());
        feld = "";
      } else feld += c;
    }
    if (feld.trim()) teile.push(feld.trim());
    if (!teile.length) { ziel.textContent = text; return; }
    const liste = document.createElement("ul");
    liste.className = "ingredient-list";
    teile.forEach(zutat => {
      const li = document.createElement("li");
      li.textContent = zutat;
      liste.appendChild(li);
    });
    ziel.appendChild(liste);
  }

  // Ein gemeinsamer Link-Aufbau für Teilen und QR-Codes; keine Excel-Zusatzspalten.
  function tresorLink(code) {
    const url = new URL(location.href);
    url.search = ""; url.hash = "";
    if (code) url.searchParams.set("code", code);
    return url.href;
  }

  // QR lokal erzeugen und mit weißem Rand als druckfähiges PNG speichern.
  // Bei nicht verfügbarer Bibliothek bleibt der Direktlink als Alternative sichtbar.
  function verbindeQR(prefix, link, dateiname) {
    const details = document.getElementById(prefix);
    const bild = document.getElementById(prefix + "Image");
    const status = document.getElementById(prefix + "Status");
    const download = document.getElementById(prefix + "Download");
    details.open = false;
    bild.replaceChildren(); bild.hidden = true; download.disabled = true;
    status.textContent = link;
    download.onclick = null;
    details.ontoggle = () => {
      if (!details.open || bild.querySelector("canvas")) return;
      if (typeof QRCode !== "function") {
        status.textContent = "QR-Code momentan nicht verfügbar. Direktlink: " + link;
        return;
      }
      try {
        bild.replaceChildren();
        new QRCode(bild, {text:link, width:256, height:256, colorDark:"#000000", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M});
        const canvas = bild.querySelector("canvas");
        if (!canvas) throw new Error("PNG-Ausgabe nicht verfügbar");
        bild.hidden = false;
        status.textContent = link;
        download.disabled = false;
        download.onclick = () => {
          const png = document.createElement("canvas");
          png.width = png.height = 320;
          const ctx = png.getContext("2d");
          ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,320,320);
          ctx.drawImage(canvas,32,32);
          const a = document.createElement("a");
          a.href = png.toDataURL("image/png");
          a.download = dateiname + ".png";
          a.click();
        };
      } catch (err) {
        bild.replaceChildren(); bild.hidden = true; download.disabled = true;
        status.textContent = "QR-Code konnte nicht erzeugt werden. Direktlink: " + link;
        console.warn("QR-Code:", err);
      }
    };
  }

  verbindeQR("siteQR", tresorLink(), "Likoer-Tresor");

  function sucheLikoer() {
    const eingabe = document.getElementById("codeInput").value.trim().toUpperCase();
    const resultCard = document.getElementById("resultCard");
    // Der dezente Platzhalter erscheint nur am Desktop, solange keine Charge angezeigt wird.
    const detailEmpty = document.getElementById("detailEmpty");
    const errorMsg = document.getElementById("errorMsg");

    if (likoerDatenbank.length === 0) {
      resultCard.style.display = "none";
      detailEmpty.hidden = false;
      errorMsg.innerText = "Das Likör-Register konnte noch nicht geladen werden. Bitte versuche es später.";
      errorMsg.style.display = "block";
      return;
    }

    const treffer = likoerDatenbank.find(l => l.code.toUpperCase() === eingabe);

    if (treffer) {
      errorMsg.style.display = "none";
      document.getElementById("resCode").innerText = treffer.code;
      document.getElementById("resName").innerText = treffer.name;
      document.getElementById("resBasis").innerText = treffer.basis || "—";
      zeigeZutaten(treffer.zutaten || "");
      document.getElementById("resDatum").innerText = treffer.datum || "—";
      resultCard.style.display = "block";
      detailEmpty.hidden = true;
      verbindeQR("batchQR", tresorLink(treffer.code), "Likoer-" + treffer.code.replace(/[^A-Z0-9_-]/g, "_"));
      document.getElementById("shareStatus").textContent = "";
      document.getElementById("shareBtn").onclick = async () => {
        const link = new URL(tresorLink(treffer.code));
        try { await navigator.clipboard.writeText(link.href); document.getElementById("shareStatus").textContent = "Link kopiert."; }
        catch { document.getElementById("shareStatus").textContent = link.href; }
      };
    } else {
      resultCard.style.display = "none";
      detailEmpty.hidden = false;
      errorMsg.innerText = "Dieser Code wurde im Tresor nicht gefunden. Bitte überprüfe die Schreibweise (z. B. WMI-001).";
      errorMsg.style.display = "block";
    }
  }

  // Ereignisse im lokalen Skript registrieren, damit die CSP Inline-JavaScript sperren kann.
  document.getElementById("searchBtn").addEventListener("click", sucheLikoer);
  document.getElementById("filterInput").addEventListener("input", filtriereUebersicht);
  document.getElementById("sortenFilter").addEventListener("change", filtriereUebersicht);
  document.getElementById("codeInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sucheLikoer();
  });

