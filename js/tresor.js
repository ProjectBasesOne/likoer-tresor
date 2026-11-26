  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjXf2C__O1437EMJ7pt-QIdCzNnaolYBzLOGQ8Chk1mwnuda9y2DW-xWaqRHLNlFVwx9WlXEtZYcIo/pub?gid=1287595683&single=true&output=csv";

  // Trinksprüche und acht gekennzeichnete Easter Eggs in täglicher Rotation.
  const spruecheDesTages = [
    "„Alles ist vergänglich, nur der Durst bleibt lebenslänglich.“",
    "„Ich trinke auf eure Gesundheit. Um meine kümmere ich mich morgen.“",
    "„Wer zuletzt lacht, hat den Trinkspruch nicht verstanden.“",
    "„Auf die guten alten Zeiten. Die waren früher auch nicht besser.“",
    "„Auf die Vernunft. Möge sie uns morgen wiedererkennen.“",
    "🥚 Easter Egg · TH · Thailand: „In Thailand bestellt man mild. Nach dem ersten Bissen versteht man, warum das Chang eiskalt serviert wird.“",
    "„Ich bin für klare Verhältnisse. Trübe Getränke gehen aber auch.“",
    "„Zum Wohl! Das ist heute meine kürzeste Rede.“",
    "„Auf die Freundschaft: Die besseren Geschichten bleiben unter uns.“",
    "„Man soll die Feste feiern, wie sie fallen. Die Gläser allerdings nicht.“",
    "„Ein Hoch auf alle, die beim Anstoßen noch Augenkontakt schaffen.“",
    "„Auf die Gesundheit! Ohne sie wäre der ganze Aufwand umsonst.“",
    "„Das Leben ist ernst genug. Prost.“",
    "🥚 Easter Egg · PT · Portugal: „In Portugal heißt der Kirschlikör Ginjinha. Die Aussprache ist schwieriger als die Bestellung.“",
    "„Auf unsere guten Vorsätze. Schön, dass es sie gibt.“",
    "„Wer im Glashaus sitzt, sollte vorsichtig anstoßen.“",
    "„Auf die Menschen, bei denen man nicht erst fragen muss, ob man bleiben darf.“",
    "„Ich wollte einen tiefgründigen Trinkspruch halten. Aber das Glas ist nicht so tief.“",
    "„Auf die Zukunft! Die Vergangenheit kennt uns schon.“",
    "„Ein guter Abend braucht keine Tagesordnung.“",
    "„Prost! Mehr habe ich zu diesem Thema nicht beizutragen.“",
    "🥚 Easter Egg · ES · Mallorca: „Auf Mallorca heißt es Meerblick. Den Aufpreis sieht man dann auf der Rechnung.“",
    "„Auf die kleinen Freuden. Die großen sind meistens teuer.“",
    "„Wer nichts zu feiern hat, kann wenigstens auf die anderen anstoßen.“",
    "„Auf die Gäste, die auch beim Abwasch noch gute Freunde sind.“",
    "„Ich erhebe mein Glas. Für mehr Sport reicht die Motivation heute nicht.“",
    "„Auf den Feierabend. Eine der besseren Erfindungen der Menschheit.“",
    "„Ein guter Trinkspruch ist wie ein guter Witz: besser kurz als erklärt.“",
    "„Auf die Zeit, die wir miteinander verbringen, statt auf die Uhr zu schauen.“",
    "🥚 Easter Egg · TR · Türkei: „In der Türkei heißt es Çay oder Rakı. Egal was im Glas ist, aus fünf Minuten werden zwei Stunden.“",
    "„Ich habe eine Rede vorbereitet. Keine Sorge, sie endet mit Prost.“",
    "„Auf die Leute, die unsere Geschichten schon kennen und trotzdem lachen.“",
    "„Das Glas ist halb voll. Die Diskussion darüber ist ganz überflüssig.“",
    "„Auf die spontanen Abende, die besser werden als die geplanten.“",
    "„Wer gute Gesellschaft hat, braucht kein Unterhaltungsprogramm.“",
    "„Auf die wenigen Dinge im Leben, die man nicht optimieren muss.“",
    "„Wir sind nicht alt. Wir haben nur mehr Anlässe zum Anstoßen.“",
    "🥚 Easter Egg · IT · Italien: „In Italien gibt es nach dem Essen Limoncello. Wer danach Cappuccino bestellt, braucht diplomatisches Geschick.“",
    "„Auf die Menschen, die aus einem kurzen Besuch einen schönen Abend machen.“",
    "„Ein Prost auf alle, die den Witz schon vor der Pointe verstehen.“",
    "„Auf die Gastgeber. Ohne sie säßen wir jetzt alle daheim.“",
    "„Die besten Gespräche haben selten ein Protokoll.“",
    "„Auf die Gelassenheit. Irgendwer muss sie ja behalten.“",
    "„Ich mag kurze Reden und lange Freundschaften. Prost.“",
    "„Auf das Glück: Möge es öfter vorbeikommen als der Paketbote.“",
    "🥚 Easter Egg · AT · Österreich: „In Österreich gehört zum Kaiserschmarrn ein Marillenschnaps. Die Wanderung war natürlich der eigentliche Grund.“",
    "„Wer den Abend genießen kann, hat schon genug erreicht.“",
    "„Auf die guten Geschichten. Die schlechten erzählen wir nächstes Mal.“",
    "„Die Runde ist eröffnet. Weitere Formalitäten entfallen.“",
    "„Auf die Weisheit des Alters. Wir warten noch auf die Lieferung.“",
    "„Ein Prosit auf den Humor. Er hat uns schon durch ganz andere Abende gebracht.“",
    "„Auf die Leute, die auch ohne Anlass gute Laune mitbringen.“",
    "„Das Geheimnis eines guten Abends? Nicht ständig nach dem Geheimnis fragen.“",
    "🥚 Easter Egg · CH · Schweiz: „In der Schweiz gibt es Kirsch zum Fondue. Sogar beim Anstoßen bleibt man neutral.“",
    "„Auf die schönen Zufälle. Die geplanten klappen ohnehin selten.“",
    "„Ein Glas auf die Freundschaft, ein Lächeln für den Rest.“",
    "„Auf alle, die beim Wort Feierabend besonders aufmerksam werden.“",
    "„Ein Toast auf die ehrlichen Menschen. Vor allem auf die, die zugeben, dass sie keinen Trinkspruch kennen.“",
    "„Auf uns. Eine bessere Gesellschaft finden wir heute sowieso nicht.“",
    "„Ich wollte heute besonders vernünftig sein. Hat sich zeitlich nicht ergeben.“",
    "„Auf die schlechten Entscheidungen, die wenigstens gute Geschichten ergeben.“",
    "🥚 Easter Egg · 404: „Error 404: Likör nicht gefunden. Das Glas ist leer. Ein Neustart hat leider nichts gebracht.“",
    "„Ich bin nicht nachtragend. Ich merke mir nur, wer beim Anstoßen fehlt.“",
    "„Auf die Leute, bei denen aus fünf Minuten ein ganzer Abend wird.“",
    "„Das Leben ist kein Wunschkonzert. Zum Glück darf man trotzdem mitsingen.“",
    "„Auf den freien Sonntag. Möge der Montag seinen Termin vergessen.“",
    "„Mein Humor ist trocken. Mein Glas muss es nicht sein.“",
    "„Auf die Runde. Die nächste Rede hält bitte jemand anderes.“"
  ];

  // Besondere Sprüche erhalten eine goldene Titelzeile, normale Sprüche bleiben unverändert.
  const tagesSpruch = spruecheDesTages[Math.floor(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) / 86400000) % spruecheDesTages.length];
  const spruchAnzeige = document.getElementById("dailyQuote");
  const easterEgg = tagesSpruch.match(/^🥚 Easter Egg · ([A-Z]{2}|404)(?: · [^:]+)?: (.+)$/u);
  if (easterEgg) {
    const titel = document.createElement("span");
    titel.className = "data-label";
    titel.style.cssText = "display:block;font-style:normal;margin-bottom:5px;color:var(--accent-gold-light)";
    titel.textContent = easterEgg[1] + " · 🥚 EASTER EGG";
    spruchAnzeige.replaceChildren(titel, document.createTextNode(easterEgg[2]));
  } else {
    spruchAnzeige.textContent = tagesSpruch;
  }
  
  // Die Datenbank startet ab jetzt komplett leer (kein Backup mehr)
  let likoerDatenbank = [];
  // Die Auswahl bleibt auch bei einem erneuten Filtern des Sortiments erhalten.
  let ausgewaehlterCode = "";

  // Funktion, die gerufen wird, wenn die Verbindung fehlschlägt
  function zeigeVerbindungsFehler() {
    const offlineSprueche = [
      "„Gut Ding will Weile haben. Genau wie ein guter Tropfen.“",
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
        item.dataset.code = liq.code;
        item.setAttribute("aria-pressed", String(liq.code === ausgewaehlterCode));
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
    // Auf kleinen Bildschirmen direkt zur geöffneten Charge statt zum Seitenkopf springen.
    const karte = document.getElementById("resultCard");
    if (karte.style.display === "block") {
      const mobil = window.matchMedia("(max-width:859px)").matches;
      const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      karte.scrollIntoView({block: mobil ? "start" : "nearest", behavior: ruhig ? "auto" : "smooth"});
    }
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

  // Auswahlmarkierung aktualisieren, ohne die Liste neu zu rendern.
  function markiereCharge(code) {
    ausgewaehlterCode = code;
    document.querySelectorAll("#overviewList .liqueur-item").forEach(item => {
      item.setAttribute("aria-pressed", String(item.dataset.code === code));
    });
  }

  function aktualisiereSuchkreuze() {
    document.getElementById("clearCode").hidden = !document.getElementById("codeInput").value;
    document.getElementById("clearFilter").hidden = !document.getElementById("filterInput").value;
  }

  function sucheLikoer() {
    aktualisiereSuchkreuze();
    const eingabe = document.getElementById("codeInput").value.trim().toUpperCase();
    const resultCard = document.getElementById("resultCard");
    // Der dezente Platzhalter erscheint nur am Desktop, solange keine Charge angezeigt wird.
    const detailEmpty = document.getElementById("detailEmpty");
    const errorMsg = document.getElementById("errorMsg");

    if (likoerDatenbank.length === 0) {
      resultCard.style.display = "none";
      markiereCharge("");
      detailEmpty.hidden = false;
      errorMsg.innerText = "Das Likör-Register konnte noch nicht geladen werden. Bitte versuche es später.";
      errorMsg.style.display = "block";
      return;
    }

    const treffer = likoerDatenbank.find(l => l.code.toUpperCase() === eingabe);

    if (treffer) {
      markiereCharge(treffer.code);
      errorMsg.style.display = "none";
      document.getElementById("resCode").innerText = treffer.code;
      document.getElementById("resName").innerText = treffer.name;
      document.getElementById("resBasis").innerText = treffer.basis || "Nicht angegeben";
      zeigeZutaten(treffer.zutaten || "");
      document.getElementById("resDatum").innerText = treffer.datum || "Nicht angegeben";
      resultCard.style.display = "block";
      // Jede neue Auswahl öffnet die Details; der Nutzer kann sie danach wieder einklappen.
      resultCard.open = true;
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
      markiereCharge("");
      detailEmpty.hidden = false;
      errorMsg.innerText = "Dieser Code wurde im Tresor nicht gefunden. Bitte überprüfe die Schreibweise (z. B. WMI-001).";
      errorMsg.style.display = "block";
    }
  }

  // Ereignisse im lokalen Skript registrieren, damit die CSP Inline-JavaScript sperren kann.
  document.getElementById("searchBtn").addEventListener("click", sucheLikoer);
  document.getElementById("filterInput").addEventListener("input", () => {
    aktualisiereSuchkreuze();
    filtriereUebersicht();
  });
  document.getElementById("codeInput").addEventListener("input", aktualisiereSuchkreuze);
  // Das X am Chargensuchfeld schließt die Auswahl; das X am Filter setzt nur die Filter zurück.
  document.getElementById("clearCode").addEventListener("click", () => {
    const input = document.getElementById("codeInput");
    input.value = "";
    document.getElementById("resultCard").style.display = "none";
    document.getElementById("resultCard").open = false;
    document.getElementById("detailEmpty").hidden = false;
    document.getElementById("errorMsg").style.display = "none";
    markiereCharge("");
    aktualisiereSuchkreuze();
    input.focus();
  });
  document.getElementById("clearFilter").addEventListener("click", () => {
    const input = document.getElementById("filterInput");
    input.value = "";
    document.getElementById("sortenFilter").value = "";
    aktualisiereSuchkreuze();
    filtriereUebersicht();
    input.focus();
  });
  document.getElementById("sortenFilter").addEventListener("change", filtriereUebersicht);
  document.getElementById("codeInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sucheLikoer();
  });

