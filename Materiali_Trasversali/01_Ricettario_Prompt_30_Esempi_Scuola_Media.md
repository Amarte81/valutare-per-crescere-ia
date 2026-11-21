# Ricettario dei Prompt Inclusivi — I 30 Esempi Proporzionali per la Scuola Media

## VALUTARE PER CRESCERE
### *30 Prompt pronti all'uso per Google Gemini e Google NotebookLM (strutturati secondo il Framework R-C-N-A-F, la scala LOTS → HOTS e il Criterio KSM)*

> [!NOTE]
> **Perché 30 esempi così distribuiti?**  
> I 30 prompt di questo ricettario rispecchiano **in modo esattamente proporzionale le 30 ore settimanali** del quadro orario della Scuola Secondaria di Primo Grado (DPR 89/2009):
> * **Italiano**: **6 esempi** (`#01 – #06` · 20%)
> * **Matematica**: **4 esempi** (`#07 – #10` · 13,3%)
> * **Inglese**: **3 esempi** (`#11 – #13` · 10%)
> * **Storia**: **2 esempi** (`#14 – #15` · 6,7%)
> * **Geografia**: **2 esempi** (`#16 – #17` · 6,7%)
> * **Scienze**: **2 esempi** (`#18 – #19` · 6,7%)
> * **Seconda Lingua Comunitaria (Francese / Spagnolo)**: **2 esempi** (`#20 – #21` · 6,7%)
> * **Tecnologia**: **2 esempi** (`#22 – #23` · 6,7%)
> * **Arte e Immagine**: **2 esempi** (`#24 – #25` · 6,7%)
> * **Musica**: **2 esempi** (`#26 – #27` · 6,7%)
> * **Educazione Fisica**: **2 esempi** (`#28 – #29` · 6,7%)
> * **IRC / Alternativa ed Educazione Civica**: **1 esempio** (`#30` · 3,3%)
>
> *Il **Sostegno** è trasversale a tutti i 30 esempi grazie all'uso sistematico del **Profilo Funzionale Anonimizzato** (DSA, L. 104/92, NAI/Italiano L2, ADHD/funzioni esecutive, Alto Potenziale).*

---

## Indice Rapido per Incontro del Corso

* **Usati nell'Incontro 1 (Studio accessibile, Gemini Multimodale, NotebookLM, Primi Prompt)**: `#01`, `#02`, `#07`, `#11`, `#16`, `#18`, `#20` *(7 esempi)*
* **Usati nell'Incontro 2 (Verifiche UDL a 3 livelli, Gemini Thinking/Canvas, LOTS → HOTS)**: `#03`, `#04`, `#08`, `#14`, `#22`, `#24`, `#30` *(7 esempi)*
* **Usati nell'Incontro 3 (Rubriche KSM, Feedback formativo, Area 1 Banche Quesiti in Fogli)**: `#05`, `#09`, `#12`, `#21`, `#23`, `#26`, `#28` *(7 esempi)*
* **Usati nell'Incontro 4 (Area 2 Google Moduli ramificati/Quiz digitali + Area 3 NotebookLM/Video)**: `#06`, `#10`, `#13`, `#15`, `#17`, `#19`, `#25`, `#27`, `#29` *(9 esempi)*

---

## 📘 AREA LETTERE — ITALIANO (6 Esempi · 20% del monte ore)

### Esempio #01 — Italiano (1ª Media · Incontro 1)
* **Tema**: Adattamento *Easy-to-Read* di un brano narrativo/mitologico da foto della pagina dell'antologia.
* **Strumento**: **Google Gemini Multimodale + Gemini Canvas** → *Esporta in Documenti*.
* **Profilo Funzionale**: Dislessia / affaticamento nella decodifica testuale.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3]` (Asse **K**).

```text
[R] Agisci come docente di Italiano nella Scuola Secondaria di I grado ed esperto di accessibilità testuale UDL.
[C] Classe 1ª media (11 anni).
[N] Analizza la foto/testo allegato del brano antologico su "Ulisse e Polifemo". Conserva intatti i nuclei narrativi (l'inganno del vino, lo stratagemma del nome "Nessuno", la fuga sotto i montoni) e accompagna lo studente dal ricordare i fatti [A1] al comprendere le motivazioni del protagonista [B2].
[A] Riscrivi il brano secondo le regole Easy-to-Read per studenti con affaticamento nella decodifica della lettura:
- dividi il racconto in 3 scene brevi con un titolo-guida;
- usa frasi attive di massimo 15 parole e dialoghi chiari;
- evidenzia in GRASSETTO le 6 parole più difficili o arcaiche e spiegale subito tra parentesi.
[F] Restituisci in Gemini Canvas: 1) Il testo adattato in 3 scene; 2) Una tabella Glossario (Parola | Significato semplice | Frase d'esempio oggi); 3) 3 domande di comprensione con suggerimento "[Guarda la Scena...]" e incipit della risposta già avviato.
```
* **🔵 Estensione Approfondimento**: seleziona in *Gemini Canvas* la Scena 2 e chiedi di trasformarla in un breve copione teatrale a 2 voci per la lettura espressiva in coppia.

---

### Esempio #02 — Italiano (2ª Media · Incontro 1)
* **Tema**: Scheda di studio e glossario visivo-contestuale per alunni NAI su un testo espositivo-storico/letterario.
* **Strumento**: **Google Gemini (*Flash*)** + **Google NotebookLM (Audio Overview)**.
* **Profilo Funzionale**: Alunni NAI / Italiano L2 (livello A2).
* **Scala Cognitiva**: `LOTS [A1, A2] → Ponte [B2]` (Asse **K**).

```text
[R] Agisci come docente di Italiano e facilitatore linguistico di Italiano L2 nella Scuola Secondaria di I grado.
[C] Classe 2ª media (12 anni).
[N] Partendo dal testo allegato su "San Francesco e la nascita della letteratura in volgare", mantieni i concetti chiave (differenza tra latino e volgare, Cantico delle Creature) facilitando il passaggio dalla comprensione letterale [A2] al confronto tra ieri e oggi [B2].
[A] Adatta per studenti con buona maturità cognitiva ma Italiano L2 a livello A2: usa esclusivamente verbi al presente o passato prossimo, evita subordinate implicite e metafore non spiegate, usa lessico ad alta frequenza.
[F] Produci: 1) Una mappa testuale in 5 punti numerati; 2) Un glossario di 6 parole-chiave della lingua dello studio (es. "volgare", "lauda", "manoscritto") spiegate con parole semplicissime e un paragone concreto; 3) 3 esercizi "Vero o Falso? Correggi la frase falsa scegliendo tra 2 opzioni".
```
* **🔵 Estensione Approfondimento**: carica la scheda in **NotebookLM** e genera un **Audio Overview** chiedendo in *Personalizza*: *"Parlate lentamente, scandendo bene le parole chiave 'latino' e 'volgare' per studenti che stanno imparando l'italiano"*.

---

### Esempio #03 — Italiano (3ª Media · Incontro 2)
* **Tema**: Verifica UDL a 3 livelli di comprensione e analisi del testo narrativo (Novecento / Primo Levi o Verga).
* **Strumento**: **Google Gemini (Modello di Ragionamento *Thinking* + Canvas)**.
* **Profilo Funzionale**: Classe eterogenea (Versione A: DSA/BES; Versione B: Standard; Versione C: Potenziamento).
* **Scala Cognitiva**: `LOTS [A1, B2] (40%) → Ponte [C3, B4] (40%) → HOTS [B5, D5] (20%)` (Assi **K, S, M**).

```text
[R] Agisci come docente di Italiano di 3ª media ed esperto di progettazione di prove UDL secondo Anderson & Krathwohl e il Criterio KSM.
[C] Classe 3ª media (13-14 anni), anche in preparazione alla prova scritta d'esame.
[N] Sulla base del brano allegato, progetta una verifica di comprensione e analisi di 6 quesiti così bilanciati:
- Q1-Q2 [A1, B2 - Asse K]: informazioni esplicite e messaggio centrale del testo;
- Q3-Q4 [C3, B4 - Asse S]: figure retoriche/scelte lessicali dell'autore e divisione in sequenze;
- Q5 [B5 - Asse M]: "Caccia all'errore interpretativo" (presenta un'interpretazione errata del testo scritta da un lettore frettoloso: lo studente deve trovare l'errore citando una frase del brano);
- Q6 [D5/B6 - Asse M]: riflessione argomentata personale di 5-6 righe collegata al presente.
[A] Genera 3 versioni parallele:
- Versione A (Facilitata per DSA/BES): righe del brano numerate, nei quesiti indica tra parentesi "(Cerca tra riga 4 e riga 8)", per Q3-Q4 tabella semicompilata, per Q5-Q6 fornisci 2 sentence starters ("Non sono d'accordo con questa lettura perché alla riga...", "Questo episodio mi fa pensare a...").
- Versione B (Standard): righe numerate e consegne ad alta leggibilità.
- Versione C (Potenziamento): nel Q6 chiedi un confronto intertestuale con un altro autore studiato.
[F] Restituisci le 3 versioni pronte per "Esporta in Documenti" + il correttorio con codici [A-D][1-6].
```

---

### Esempio #04 — Italiano / Grammatica (2ª Media · Incontro 2)
* **Tema**: Verifica accessibile di Analisi Logica (Soggetto, Predicato, Complemento Oggetto, Complementi Indiretti) con *"Caccia all'errore"*.
* **Strumento**: **Google Gemini (Modello di Ragionamento *Thinking*)**.
* **Profilo Funzionale**: DSA (dislessia/disortografia) e fragilità nella memoria procedurale.
* **Scala Cognitiva**: `LOTS [B1] → Ponte [C3, C4] → HOTS [C5, D4]` (Assi **K, S, M**).

```text
[R] Agisci come docente di Italiano di 2ª media specializzato in didattica della grammatica valenziale e inclusiva.
[C] Classe 2ª media (12 anni).
[N] Progetta una verifica di analisi logica su Soggetto, Predicato (verbale/nominale), Complemento Oggetto, Termine, Luogo e Tempo che non richieda di imparare etichette a memoria [A1], ma valuti il ragionamento sulla funzione dei sintagmi nella frase [C3, C4, C5].
[A] Per aggirare le barriere della dislessia e della memoria di lavoro:
- inserisci in testa alla verifica un "Box Bussola" con le 4 domande-guida per riconoscere i complementi;
- spezza già le frasi in sintagmi separati da barrette (es. "Al mattino / il cane di Sara / rincorre / una palla / in giardino");
- evita frasi con soggetti sottintesi ambigui o inversioni poetiche;
- inserisci l'esercizio HOTS "Il Detective Grammaticale" (3 frasi già analizzate da uno studente immaginario con 1 errore ciascuna da scovare e correggere).
[F] Produci Versione Facilitata (con opzioni a scelta per ogni sintagma) e Versione Standard, pronte per Google Documenti.
```

---

### Esempio #05 — Italiano (3ª Media · Incontro 3)
* **Tema**: Rubrica di valutazione KSM per la produzione di un testo argomentativo + scheda di autovalutazione e feedback formativo.
* **Strumento**: **Google Gemini (*Thinking*)** → *Esporta in Fogli / Griglie di Google Classroom*.
* **Profilo Funzionale**: Equità valutativa per l'intera classe (inclusi alunni con disortografia che usano videoscrittura con correttore).
* **Scala Cognitiva**: Matrice completa `Anderson & Krathwohl × KSM` (`K 35%`, `S 40%`, `M 25%`).

```text
[R] Agisci come esperto di valutazione delle competenze linguistiche nella Scuola Secondaria di I grado.
[C] Classe 3ª media — Prova di produzione di un testo argomentativo.
[N] Costruisci una Rubrica di valutazione rigorosamente fondata sulla Tassonomia di Anderson & Krathwohl e sul Criterio KSM:
- Asse K (Knowledge — 35%): pertinenza alla traccia, solidità delle informazioni e ricchezza dei concetti [A3, B2 -> B4];
- Asse S (Skills — 40%): struttura argomentativa (tesi, argomenti, antitesi, conclusione), coesione con connettivi e correttezza morfosintattica [C3 -> C5];
- Asse M (Mindset & Metacognition — 25%): originalità del punto di vista, revisione critica dell'elaborato e consapevolezza comunicativa [D3 -> D6].
[A] Nei descrittori dell'Asse S specifica che per gli studenti con PDP (disortografia) la valutazione privilegia l'efficacia comunicativa e l'organizzazione logica dei paragrafi rispetto al refuso ortografico residuo. Usa verbi osservabili in progressione LOTS -> HOTS su 4 livelli (Iniziale, Base, Intermedio, Avanzato).
[F] Restituisci: 1) Tabella Rubrica pronta per "Esporta in Fogli"; 2) Checklist di revisione e autovalutazione in 5 punti per lo studente prima della consegna.
```

---

### Esempio #06 — Italiano (1ª Media · Incontro 4 — Area 2)
* **Tema**: Banca quesiti per Google Modulo ramificato su Lessico, Sinonimi, Omonimi e Linguaggio Figurato.
* **Strumento**: **Google Gemini** → *Esporta in Fogli* → **Google Moduli**.
* **Profilo Funzionale**: DSA e NAI (feedback immediato + percorso di rinforzo).
* **Scala Cognitiva**: `LOTS [A2, B2] → Ponte [C3] → HOTS [B4, C5]`.

```text
[R] Agisci come docente di Italiano di 1ª media esperto in quiz digitali formativi.
[C] Classe 1ª media (11 anni).
[N] Genera una banca di 10 quesiti a scelta multipla sul Lessico (sinonimi, contrari, parole polisemiche, significato letterale vs figurato): 4 quesiti LOTS [A2, B2], 4 quesiti Ponte su frasi in contesto [C3, B4] e 2 quesiti HOTS "Quale frase usa la parola in modo improprio e perché?" [C5].
[A] Ogni quesito deve avere 3 opzioni brevi (A, B, C), zero doppie negazioni, un suggerimento contestuale e un feedback formativo incoraggiante che spieghi il significato della parola in caso di errore (molto utile per studenti NAI e DSA).
[F] Restituisci esclusivamente una tabella con colonne: N. | Livello e Codice [A-D][1-6] | Domanda | Opzione A | Opzione B | Opzione C | Risposta Corretta | Suggerimento | Feedback Formativo.
```

---

## 📐 AREA STEM — MATEMATICA (4 Esempi · 13,3% del monte ore)

### Esempio #07 — Matematica (1ª Media · Incontro 1)
* **Tema**: Scheda procedurale *step-by-step* sulle Frazioni e sui problemi con le frazioni (a partire da foto degli esercizi del libro).
* **Strumento**: **Google Gemini Multimodale + Canvas** → *Esporta in Documenti*.
* **Profilo Funzionale**: Discalculia / fragilità nella memoria procedurale e di lavoro.
* **Scala Cognitiva**: `LOTS [B2] → Ponte [C2, C3]` (Assi **K, S**).

```text
[R] Agisci come docente di Matematica di 1ª media specializzato in didattica inclusiva della matematica e riduzione dell'ansia da calcolo.
[C] Classe 1ª media (11 anni).
[N] Partendo dalla foto della pagina di esercizi sulle frazioni ("Calcolare la frazione di un numero", es. i 3/5 di 20), crea una scheda di studio e lavoro autonomo che spieghi il significato concettuale [B2] e la procedura esecutiva [C3].
[A] Per supportare studenti con discalculia o memoria di lavoro fragile:
- rappresenta il concetto con una metafora visiva immediata (es. una tavoletta di cioccolato divisa in 5 parti uguali);
- scomponi la regola in una "Ricetta in 2 Passi fissi": Passo 1 (DIVIDI per il denominatore: quante parti?), Passo 2 (MOLTIPLICA per il numeratore: quante ne prendi?);
- inserisci 1 esercizio interamente svolto e commentato come modello visivo, seguito da 3 esercizi con "binari guidati" da completare (es. "Passo 1: ___ : ___ = ___").
[F] Impagina in modo arioso pronto per "Esporta in Documenti".
```

---

### Esempio #08 — Matematica (2ª Media · Incontro 2)
* **Tema**: Verifica UDL a 3 livelli sul Teorema di Pitagora con problemi *step-by-step* e *"Caccia all'errore"*.
* **Strumento**: **Google Gemini (Modello di Ragionamento *Thinking*)**.
* **Profilo Funzionale**: Versione A con formulario, figure già disegnate e numeri pitagorici interi (terne pitagoriche).
* **Scala Cognitiva**: `LOTS [B1, B2] → Ponte [C3, C4] → HOTS [C5, D4]` (Assi **K, S, M**).

```text
[R] Agisci come docente di Matematica di 2ª media. ATTIVA IL CONTROLLO RIGOROSO DEI CALCOLI.
[C] Classe 2ª media (12 anni) — Verifica sul Teorema di Pitagora applicato al triangolo rettangolo e al rettangolo.
[N] Progetta una verifica di 5 quesiti bilanciati sulla scala LOTS -> HOTS:
- Q1 [B2 - Asse K]: riconoscere cateti e ipotenusa anche quando il triangolo rettangolo è ruotato;
- Q2-Q3 [C3 - Asse S]: calcolo dell'ipotenusa e di un cateto in problemi geometrici concreti (es. una scala appoggiata a un muro);
- Q4 [C4/C5 - Asse M]: "Caccia all'errore matematico" (mostra lo svolgimento di uno studente immaginario che per trovare un cateto ha SOMMATO i quadrati invece di sottrarli: l'alunno deve individuare il passaggio errato, spiegare perché non ha senso geometricamente e correggerlo);
- Q5 [C6/D5 - Asse M]: problema inverso o verifica se una terna di misure forma un angolo retto.
[A] Genera 3 versioni (A Facilitata, B Standard, C Potenziamento):
- Nella Versione A (per DSA/discalculia): inserisci in alto il Box Formulario con le 2 formule dirette, usa esclusivamente terne pitagoriche che diano radici quadrate esatte intere (es. 3-4-5, 6-8-10, 5-12-13) per valutare il procedimento geometrico senza bloccare l'alunno sui decimali, e dividi Q2 e Q3 in "Dati / Passo 1 / Passo 2".
[F] Restituisci le 3 versioni complete di soluzioni verificate e codici [A-D][1-6].
```

---

### Esempio #09 — Matematica (3ª Media · Incontro 3 — Area 1)
* **Tema**: Banca di 10 quesiti inclusivi sulle Equazioni di Primo Grado e problemi algebrici per Google Fogli.
* **Strumento**: **Google Gemini (*Thinking*)** → *Esporta in Fogli*.
* **Profilo Funzionale**: Distrattori basati sui reali errori di segno/trasporto (non casuali) + feedback esplicativo.
* **Scala Cognitiva**: `LOTS [B2, C1] → Ponte [C3] → HOTS [C4, C5]`.

```text
[R] Agisci come docente di Matematica di 3ª media. Controlla l'esattezza algebrica di ogni opzione.
[C] Classe 3ª media (13-14 anni) — Argomento: Equazioni lineari di primo grado e traduzione di problemi in equazione.
[N] Genera una tabella di 10 quesiti a scelta multipla (3 opzioni A, B, C):
- 3 quesiti LOTS [B2, C1]: tradurre una frase in espressione algebrica (es. "Il doppio di un numero aumentato di 5 è uguale a 19");
- 4 quesiti Ponte [C3]: risoluzione di equazioni a coefficienti interi semplici;
- 3 quesiti HOTS [C4, C5]: "In quale passaggio della seguente equazione è stato commesso un errore nella regola del trasporto o del cambio di segno?".
[A] I 2 distrattori devono corrispondere agli errori tipici degli studenti (es. dimenticare di cambiare segno spostando un termine), così che il "Feedback Formativo" spieghi esattamente come rimediare a quell'errore specifico.
[F] Tabella pronta per "Esporta in Fogli": N. | Livello e Codice | Domanda | Opzione A | Opzione B | Opzione C | Risposta Corretta | Suggerimento | Feedback Formativo Dettagliato.
```

---

### Esempio #10 — Matematica (2ª Media · Incontro 4 — Area 2)
* **Tema**: Progettazione di un Google Modulo condizionale ramificato su Proporzioni e Percentuali (Sconti).
* **Strumento**: **Google Gemini** → **Google Moduli (Sezioni condizionali)**.
* **Profilo Funzionale**: Percorso adattivo con *scaffolding* immediato in caso di errore.
* **Scala Cognitiva**: `LOTS [B2] → Ponte [C3] → HOTS [C5, D5]`.

```text
[R] Agisci come progettista di quiz digitali adattivi in Google Moduli per la Matematica nella Secondaria di I grado.
[C] Classe 2ª media — Argomento: Percentuali e calcolo dello sconto nella vita reale.
[N] Progetta la struttura testuale completa di un Google Modulo ramificato in 4 Sezioni:
- SEZIONE 1 (Domanda filtro - Ponte [C3]): "Uno zaino costa 60 euro ed è scontato del 20%. Quanto paghi alla cassa?" con 3 opzioni: A) 48 euro (corretta); B) 12 euro (errore tipico: ha calcolato lo sconto ma non lo ha tolto dal prezzo); C) 40 euro (errore: ha sottratto 20 euro invece del 20%).
- SEZIONE 2A (Scaffolding per chi ha scelto B): spiega con un disegno testuale che 12 euro è lo sconto risparmiato e poni una domanda guidata più semplice per arrivare al prezzo finale.
- SEZIONE 2B (Scaffolding per chi ha scelto C): spiega con una barra a 10 quadretti cosa significa 20% su 60 euro e proponi un quesito guidato di verifica.
- SEZIONE 3 (Sfida HOTS [C5] per tutti): confrontare due promozioni diverse su una paio di scarpe e valutare quale conviene di più.
[A] Linguaggio chiaro, incoraggiante e concreto.
[F] Restituisci i testi pronti da copiare nelle 4 Sezioni di Google Moduli con le indicazioni esatte di ramificazione ("Se risponde A -> vai a Sezione 3...").
```

---

## 🇬🇧 AREA LINGUE — INGLESE (3 Esempi · 10% del monte ore)

### Esempio #11 — Inglese (1ª Media · Incontro 1)
* **Tema**: Reading graduata su 2 livelli (A1 facilitato e A1+/A2) su *Daily Routine* con glossario fonetico-visivo.
* **Strumento**: **Google Gemini (*Flash* + Canvas)** → *Esporta in Documenti*.
* **Profilo Funzionale**: Dislessia (lingua opaca!) → supporto fonetico intuitivo e layout ad alta leggibilità.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3]`.

```text
[R] Agisci come docente di Inglese nella Scuola Secondaria di I grado specializzato nell'insegnamento delle lingue straniere ad alunni con DSA (glottodidattica accessibile).
[C] Classe 1ª media (11 anni, livello QCER A1).
[N] Scrivi un breve testo di Reading (circa 100 parole) sulla "Daily Routine" di uno studente londinese di 11 anni (Present Simple, avverbi di frequenza, orari).
[A] Poiché l'inglese è una lingua ortograficamente opaca che affatica gli studenti con dislessia:
- genera 2 versioni del testo: Versione Facilitata (frasi corte in elenco cronologico con orario all'inizio di ogni riga e verbi del Present Simple in GRASSETTO) e Versione Standard;
- crea una tabella "Word Bank" di 8 verbi/espressioni con: Parola inglese | Pronuncia semplificata per italofoni (es. "get up -> ghet ap") | Traduzione in italiano;
- evita domande aperte che richiedano spelling complesso: usa 4 quesiti di comprensione (2 True/False e 2 di riordino cronologico delle azioni).
[F] Impagina in modo pulito per "Esporta in Documenti".
```

---

### Esempio #12 — Inglese (2ª Media · Incontro 3 — Area 1)
* **Tema**: Banca quesiti su *Past Simple (Regular & Irregular Verbs)* con *Error Spotting* ed esportazione in Google Fogli.
* **Strumento**: **Google Gemini** → *Esporta in Fogli* → **Wordwall / Quizizz / Google Moduli**.
* **Profilo Funzionale**: DSA (non penalizzare il semplice refuso di *spelling*, ma valutare la regola morfosintattica).
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3] → HOTS [C4, C5]`.

```text
[R] Agisci come docente di Inglese di 2ª media esperto in valutazione linguistica inclusiva.
[C] Classe 2ª media (12 anni, livello A1+/A2) — Argomento: Past Simple (affermativa, negativa con didn't + forma base, interrogativa).
[N] Genera una banca di 10 quesiti a scelta multipla (3 opzioni A, B, C):
- 4 quesiti LOTS/Ponte [B2, C3]: completare frasi in contesto con la forma corretta del Past Simple;
- 3 quesiti Ponte [C3]: scegliere la domanda corretta per una risposta data;
- 3 quesiti HOTS "Grammar Detective" [C4, C5]: individuare e correggere l'errore tipico (es. *"Yesterday I didn't went to school"*).
[A] IMPORTANTE per gli alunni con dislessia/disortografia: i distrattori NON devono mai essere parole scritte con lettere invertite o errori ortografici visivamente confondenti (es. NON mettere "went / wnet / wetn"), ma devono testare la regola grammaticale (es. "didn't go / didn't went / not went"). Inserisci il feedback formativo in italiano semplice.
[F] Tabella pronta per "Esporta in Fogli": N. | Livello e Codice | Sentence/Question | Option A | Option B | Option C | Correct Answer | Hint (in italiano) | Formative Feedback (in italiano).
```

---

### Esempio #13 — Inglese (3ª Media · Incontro 4 — Area 3)
* **Tema**: Verifica multimodale di *Listening & Comprehension* integrata a un video YouTube con **NotebookLM / Edpuzzle**.
* **Strumento**: **Google NotebookLM** (o **Gemini** su trascrizione YouTube) + **Google Moduli / Edpuzzle**.
* **Profilo Funzionale**: Supporto bimodale (video + sottotitoli in inglese + domande pre-orientate con minutaggio).
* **Scala Cognitiva**: `LOTS [A2, B2] → Ponte [B3] → HOTS [B5, D5]`.

```text
[R] Agisci come docente di Inglese di 3ª media.
[C] Classe 3ª media (13-14 anni, livello A2) — Verifica di comprensione audiovisiva su un breve video YouTube (3-4 minuti) su un tema di cultura/attualità (es. "Environment & Recycling" o "London Landmarks").
[N] A partire dalla trascrizione/fonte del video caricata nel taccuino, progetta una scheda di video-comprensione in 3 fasi:
- Fase 1 (Before watching - Attivazione [A1]): 5 parole chiave che sentiranno nel video con traduzione e minuto in cui compaiono;
- Fase 2 (While watching - LOTS/Ponte [A2, B2]): 4 domande a scelta multipla (3 opzioni) ordinate cronologicamente con indicazione esatta del minutaggio "[Watch from 0:45 to 1:20]";
- Fase 3 (After watching - HOTS [B5, D5]): 1 domanda di opinione personale in inglese guidata da 3 sentence starters ("In my opinion...", "I think the most important tip is... because...").
[A] Domande brevi in inglese chiaro, consegne tradotte anche in italiano tra parentesi per garantire che tutti comprendano cosa è richiesto.
[F] Scheda pronta per Google Moduli + Video YouTube o Edpuzzle.
```

---

## 🏛️ AREA LETTERE — STORIA (2 Esempi · 6,7% del monte ore)

### Esempio #14 — Storia (1ª Media · Incontro 2)
* **Tema**: Verifica UDL a 3 livelli sulla Società Feudale bilanciata sulla scala **LOTS → HOTS** (superare le sole date a memoria!).
* **Strumento**: **Google Gemini (Modello di Ragionamento *Thinking* + Canvas)**.
* **Profilo Funzionale**: DSA/BES (linea del tempo già fornita come strumento compensativo dentro la verifica!).
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3, B4] → HOTS [B5, D4]`.

```text
[R] Agisci come docente di Storia di 1ª media esperto in didattica per quadri di civiltà e valutazione inclusiva UDL.
[C] Classe 1ª media (11 anni) — Argomento: Il Feudalesimo e la società medievale.
[N] Progetta una verifica su 3 livelli (A Facilitata, B Standard, C Potenziamento) che NON chieda date isolate a memoria, ma valuti i processi cognitivi lungo la scala LOTS -> HOTS:
- Q1 [A1/B1 - Ricordare con supporto]: collocare nella piramide feudale Signore, Vassallo, Valvassore e Servi della gleba;
- Q2 [B2 - Comprendere]: spiegare lo scambio reciproco della cerimonia dell'investitura (omaggio/fedeltà in cambio del beneficio/feudo);
- Q3 [B3 - Applicare a un caso]: leggere la breve giornata di "Guglielmo" (4 righe) e dedurre a quale ordine della società medievale appartiene motivando la risposta;
- Q4 [B4 - Analizzare]: confrontare in una tabella 2 differenze tra curtes (pars dominica vs pars massaricia);
- Q5 [B5 - Valutare / HOTS]: "Lo Storico Cerca l'Errore": in un breve racconto sul castello medievale sono stati nascosti 2 anacronismi/errori storici (es. i contadini che mangiano patate e pomodori nel Anno Mille!): l'alunno deve scovarli e spiegare perché sono impossibili.
[A] Nella Versione A inserisci in testa una mini-linea del tempo di riferimento, una banca parole per Q1-Q2, la tabella di Q4 già impostata con la prima riga compilata come esempio e un suggerimento per i 2 anacronismi di Q5.
[F] Restituisci le 3 versioni pronte per "Esporta in Documenti" + griglia rapida di correzione con codici [A-D][1-6].
```

---

### Esempio #15 — Storia (3ª Media · Incontro 4 — Area 3)
* **Tema**: Percorso multimodale su **Google NotebookLM** (Dispensa PDF + Video documentario YouTube sul Novecento) con Mappa Mentale, Audio Overview e verifica sulle fonti.
* **Strumento**: **Google NotebookLM** (`notebooklm.google`).
* **Profilo Funzionale**: Apprendimento multisensoriale (visivo + uditivo + testuale) e preparazione al colloquio d'esame.
* **Scala Cognitiva**: `LOTS [B2] → Ponte [B4] → HOTS [A5, B5]`.

```text
[Prompt da inserire nella chat di Google NotebookLM dopo aver caricato la dispensa PDF del docente e un video documentario YouTube]

Basandoti ESCLUSIVAMENTE sulla dispensa e sul video caricati in questo taccuino (indicando sempre le citazioni delle fonti):
1. Costruisci una Tabella Causa -> Evento -> Conseguenza con i 4 passaggi fondamentali spiegati con frasi brevi ad alta leggibilità (max 15 parole per cella);
2. Genera 5 domande di verifica progressiva (LOTS -> HOTS):
   - 2 domande di comprensione dei fatti principali [B2];
   - 2 domande di confronto tra ciò che mostra il video e ciò che approfondisce la dispensa [B4];
   - 1 domanda HOTS di valutazione di una fonte storica citata nei materiali [A5, B5], fornendo 2 incipit guidati ("Questa fonte ci permette di capire che...", "Il punto di vista dell'autore è...") per supportare gli studenti nell'argomentazione.
```

---

## 🌍 AREA LETTERE — GEOGRAFIA (2 Esempi · 6,7% del monte ore)

### Esempio #16 — Geografia (1ª Media · Incontro 1)
* **Tema**: Lettura guidata di una carta fisica/climatica o di un grafico demografico tramite **Gemini Multimodale** + glossario per NAI/DSA.
* **Strumento**: **Google Gemini Multimodale (Vision)**.
* **Profilo Funzionale**: Studenti NAI e studenti con difficoltà visuospaziali nella lettura di carte e grafici densi.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3, B4]`.

```text
[R] Agisci come docente di Geografia nella Scuola Secondaria di I grado ed esperto di accessibilità visiva e linguistica.
[C] Classe 1ª media (11 anni) — Argomento: Lettura della carta fisica e dei climi d'Italia / d'Europa (a partire dall'immagine allegata).
[N] Analizza l'immagine della carta/grafico allegata e crea una scheda di studio guidata che insegni allo studente COME si legge la carta passo dopo passo [C2, C3], fino a mettere in relazione altitudine/latitudine e clima [B2, B4].
[A] Per supportare studenti con difficoltà di orientamento visuospaziale e studenti con Italiano L2:
- crea una "Guida in 3 Mosse per leggere l'immagine" (1. Guarda il titolo e i colori della legenda; 2. Trova sull'immagine...; 3. Collega...);
- costruisci un Glossario Geografico Essenziale di 6 termini (es. "escursione termica", "latitudine", "catena montuosa", "densità") spiegati con parole semplicissime e un esempio;
- proponi 3 domande progressive di lettura della carta con indicazione visiva ("Osserva la zona colorata in verde al Nord...").
[F] Scheda pronta per "Esporta in Documenti".
```

---

### Esempio #17 — Geografia (2ª Media · Incontro 4 — Area 2)
* **Tema**: Quiz digitale visivo in **Google Moduli** su Stati, Ambienti ed Economia dell'Unione Europea con feedback formativo.
* **Strumento**: **Google Gemini** → *Esporta in Fogli* → **Google Moduli (con carte/immagini)**.
* **Profilo Funzionale**: Evitare il nozionismo mnemonico delle sole capitali; lavorare su relazioni territorio-economia con supporto di carte mute/tematiche.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3, B4] → HOTS [B5]`.

```text
[R] Agisci come docente di Geografia di 2ª media.
[C] Classe 2ª media (12 anni) — Argomento: Ambienti, popolazione e settori economici in Europa.
[N] Genera una tabella di 10 quesiti a scelta multipla (3 opzioni A, B, C) pensati per essere accompagnati in Google Moduli da una carta tematica o da una fotografia:
- 3 quesiti LOTS [A1, B2]: riconoscere ambienti europei e caratteristiche climatiche da una descrizione visiva;
- 4 quesiti Ponte [B3, B4]: collegare le caratteristiche fisiche di una regione europea alle sue attività economiche (es. pianure alluvionali, porti del Mare del Nord, energia geotermica/eolica);
- 3 quesiti HOTS [B5]: analizzare i dati di una mini-tabella su due Paesi europei e individuare l'affermazione corretta (o trovare l'errore in una conclusione geografica sbagliata).
[A] Frasi brevi, zero doppie negazioni, indicazione per il docente di "[Quale immagine/carta inserire in Google Moduli per questa domanda]" e feedback formativo per lo studente.
[F] Tabella pronta per "Esporta in Fogli": N. | Livello e Codice | Immagine consigliata per il Modulo | Domanda | Opzione A | Opzione B | Opzione C | Risposta Corretta | Suggerimento | Feedback Formativo.
```

---

## 🔬 AREA STEM — SCIENZE (2 Esempi · 6,7% del monte ore)

### Esempio #18 — Scienze (1ª Media · Incontro 1)
* **Tema**: Studio multisensoriale su *La Cellula Animale e Vegetale* con **Google NotebookLM** (Mappa Mentale + Audio Overview + metafora della città/fabbrica).
* **Strumento**: **Google NotebookLM** + **Google Gemini**.
* **Profilo Funzionale**: DSA e BES (forte carico terminologico: *mitocondri, ribosomi, cloroplasti, membrana*).
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3, B4]`.

```text
[Prompt da usare in Google NotebookLM o Google Gemini sul capitolo de "La Cellula"]

[R] Agisci come docente di Scienze di 1ª media esperto in divulgazione scientifica accessibile.
[C] Classe 1ª media (11 anni).
[N] A partire dal testo caricato sulla cellula animale e vegetale, aiuta gli studenti a superare l'ostacolo dei nomi difficili degli organuli [A1] collegando ciascuno alla sua funzione vitale [B2] e confrontando i due tipi di cellula [B4].
[A] Per facilitare la memorizzazione e la comprensione a studenti con DSA:
- usa la metafora concreta della "Cellula come una Fabbrica Ecologica" (es. Nucleo = Direzione centrale con i progetti; Membrana = Cancello di sicurezza; Mitocondri = Centrale elettrica; Cloroplasti = Pannelli solari verdi presenti solo nelle piante);
- costruisci una Tabella Comparativa immediata (Organulo | Che lavoro fa nella fabbrica? | C'è nella cellula animale? | C'è nella cellula vegetale?);
- aggiungi 3 domande graduali di autoverifica (1 Ricordare con banca parole, 1 Comprendere, 1 Analizzare: "Cosa succederebbe alla cellula se smettessero di funzionare i mitocondri?").
[F] Scheda strutturata pronta per Google Documenti.
```

---

### Esempio #19 — Scienze (3ª Media · Incontro 4 — Area 3)
* **Tema**: Verifica integrata a un video di esperimento scientifico (Leggi della genetica di Mendel o Elettricità/Circuiti) basata sul metodo sperimentale (`Osservare → Ipotizzare → Verificare`).
* **Strumento**: **Google Gemini (*Thinking*)** + **Google Moduli con Video YouTube** (o **Edpuzzle**).
* **Profilo Funzionale**: Apprendimento esperienziale e visivo.
* **Scala Cognitiva**: `LOTS [A2, B2] → Ponte [C3, B4] → HOTS [C5, B6]`.

```text
[R] Agisci come docente di Scienze di 3ª media.
[C] Classe 3ª media (13-14 anni) — Verifica multimodale basata su un breve video di un esperimento scientifico di laboratorio (es. circuito elettrico in serie e in parallelo, oppure incroci di Mendel).
[N] Progetta 5 domande in crescendo cognitivo lungo le fasi del metodo scientifico (LOTS -> HOTS) da inserire sotto il video in Google Moduli o lungo la timeline di Edpuzzle:
- Q1 (Minuto iniziale - Osservazione [A2]): quali materiali/variabili sono presenti all'inizio dell'esperimento?
- Q2 (Prima della prova - Ipotesi [B3]): "Metti in pausa il video prima dell'esperimento: secondo la legge studiata, cosa accadrà se svitiamo la prima lampadina nel circuito in serie?" (3 opzioni);
- Q3 (Dopo l'esperimento - Comprensione [B2]): spiegazione del fenomeno osservato nel video;
- Q4 (Analisi [B4]): confronto tra i due casi mostrati nel video;
- Q5 (HOTS - Valutazione/Caccia all'errore sperimentale [C5]): "Uno studente sostiene che... Spiega perché l'esperimento del video dimostra il contrario" (con frase-avvio guidata).
[A] Frasi brevi, lessico scientifico evidenziato in grassetto e feedback formativo per ogni quesito.
[F] Testo completo pronto per Google Moduli o Edpuzzle.
```

---

## 🇫🇷🇪🇸 AREA LINGUE — SECONDA LINGUA COMUNITARIA: FRANCESE / SPAGNOLO (2 Esempi · 6,7% del monte ore)

### Esempio #20 — Francese / Spagnolo (1ª Media · Incontro 1)
* **Tema**: Scheda di studio e dialogo guidato (*Se présenter / Presentarse* o *La famille / La familia*) con tabella colori e supporto fonetico.
* **Strumento**: **Google Gemini (*Flash*)** → *Esporta in Documenti*.
* **Profilo Funzionale**: Alunni con DSA (particolarmente efficace per il Francese, lingua opaca con lettere finali mute, o per i falsi amici in Spagnolo).
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3]`.

```text
[R] Agisci come docente di [Francese / Spagnolo] nella Scuola Secondaria di I grado, specializzato in glottodidattica inclusiva per alunni con DSA.
[C] Classe 1ª media (11 anni, principianti assoluti livello A1).
[N] Costruisci una scheda di studio autonoma su "Presentarsi e parlare della propria famiglia / degli hobby" che permetta allo studente di comprendere un breve dialogo [B2] e riutilizzare le strutture per parlare di sé [C3].
[A] Applica questi accorgimenti compensativi:
- presenta un dialogo modello di 6 battute brevi con traduzione affiancata in una tabella a 2 colonne;
- aggiungi un box "Trucchi di Pronuncia e Ortografia" (es. in Francese: quali lettere finali NON si pronunciano ma si scrivono; in Spagnolo: attenzione ai falsi amici);
- proponi un esercizio di produzione personale guidata ("Tocca a te!") con frasi-modello a buchi da completare scegliendo le parole da un riquadro illustrato/categorizzato, così lo studente non deve scrivere da un foglio bianco.
[F] Impaginazione tabellare pulita per "Esporta in Documenti".
```

---

### Esempio #21 — Francese / Spagnolo (2ª Media · Incontro 3 — Area 1)
* **Tema**: Banca di 10 quesiti comunicativi e situazionali (*Au restaurant / En el restaurante* o *En ville / Por la ciudad*) per Google Fogli e Wordwall.
* **Strumento**: **Google Gemini** → *Esporta in Fogli* → **Wordwall / Google Moduli**.
* **Profilo Funzionale**: Approccio comunicativo-funzionale (evitare la pura traduzione grammaticale decontestualizzata).
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3] → HOTS [C4, B5]`.

```text
[R] Agisci come docente di [Francese / Spagnolo] di 2ª media.
[C] Classe 2ª media (12 anni, livello A1+) — Argomento: Funzioni comunicative "Ordinare al ristorante / Chiedere e dare indicazioni stradali in città".
[N] Genera una tabella di 10 quesiti a scelta multipla (3 opzioni A, B, C):
- 4 quesiti LOTS [A1, B2]: associare un'espressione chiave alla situazione corretta;
- 4 quesiti Ponte [C3]: completare una mini-conversazione situazionale scegliendo la battuta coerente;
- 2 quesiti HOTS [C4, B5]: "Trova l'intruso o l'errore comunicativo": in un breve dialogo un turista commette un errore grammaticale o di registro: individua qual è e scegli la correzione.
[A] Non usare distrattori basati su micro-errori di accento grafico o doppie lettere che penalizzano gli alunni con disortografia; testa sempre la comprensione e la funzione comunicativa. Feedback formativo in italiano.
[F] Tabella pronta per "Esporta in Fogli": N. | Livello e Codice | Dialogo/Domanda | Opzione A | Opzione B | Opzione C | Risposta Corretta | Suggerimento | Feedback Formativo.
```

---

## ⚙️ AREA TECNICO-ARTISTICA E MOTORIA — TECNOLOGIA (2 Esempi · 6,7% del monte ore)

### Esempio #22 — Tecnologia (3ª Media · Incontro 2)
* **Tema**: Verifica UDL a 3 livelli sulle Fonti Energetiche Rinnovabili e Non Rinnovabili (a partire dallo schema di una centrale elettrica caricato come immagine).
* **Strumento**: **Google Gemini Multimodale + Ragionamento (*Thinking*)**.
* **Profilo Funzionale**: Versione A con schema a blocchi numerati da completare e tabella pro/contro guidata.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3, B4] → HOTS [B5, C6]`.

```text
[R] Agisci come docente di Tecnologia nella Scuola Secondaria di I grado.
[C] Classe 3ª media (13-14 anni) — Argomento: Fonti di energia rinnovabili/non rinnovabili e trasformazioni energetiche in una centrale elettrica (a partire dallo schema allegato).
[N] Progetta una verifica su 3 livelli (A Facilitata, B Standard, C Potenziamento) articolata in 5 quesiti lungo la scala LOTS -> HOTS:
- Q1 [A1, B1 - Ricordare/Classificare]: classificare 6 fonti energetiche in rinnovabili ed esauribili;
- Q2 [B2, C2 - Comprendere un processo tecnico]: ricostruire i 4 passaggi di trasformazione dell'energia nella centrale (es. da energia meccanica dell'acqua -> turbina -> alternatore -> energia elettrica);
- Q3 [B4 - Analizzare]: confrontare in tabella vantaggi e limiti di 2 fonti rinnovabili (es. solare vs idroelettrico);
- Q4 [C5 - Valutare / HOTS "Caccia al guasto/errore tecnico"]: in uno schema di impianto energetico domestico c'è una scelta tecnica sbagliata (es. pannelli fotovoltaici installati su una parete esposta a Nord in ombra o confusione tra solare termico e fotovoltaico): lo studente deve individuare l'errore e correggerlo;
- Q5 [B6 - Creare / HOTS]: scegliere il mix energetico più adatto per un'isola del Mediterraneo motivando la scelta.
[A] Nella Versione A (BES/DSA): per Q2 fornisci i 4 blocchi del processo già scritti da collegare con frecce numerate 1->2->3->4; per Q4 e Q5 inserisci un suggerimento tecnico e l'avvio della frase di risposta.
[F] Restituisci le 3 versioni + correttorio con codici [A-D][1-6].
```

---

### Esempio #23 — Tecnologia / Disegno Tecnico (1ª o 2ª Media · Incontro 3)
* **Tema**: Rubrica di valutazione KSM per una tavola di Disegno Geometrico / Proiezioni Ortogonali + procedura guidata di autoverifica.
* **Strumento**: **Google Gemini (*Thinking*)** → *Esporta in Fogli*.
* **Profilo Funzionale**: Valutazione equa per alunni con **disgrafia / disprassia** o difficoltà nella motricità fine (distinguere la comprensione geometrico-spaziale del disegno dalla pulizia manuale del tratto!).
* **Scala Cognitiva**: Matrice `Anderson & Krathwohl × KSM` (`K 35%`, `S 40%`, `M 25%`).

```text
[R] Agisci come docente di Tecnologia esperto in valutazione inclusiva delle prove grafiche e progettuali nella Scuola Secondaria di I grado.
[C] Classe 1ª/2ª media — Prova grafica di Disegno Tecnico (costruzioni geometriche o proiezioni ortogonali di un solido).
[N] Costruisci una Rubrica di valutazione basata sulla Tassonomia di Anderson & Krathwohl e sul Criterio KSM:
- Asse K (Knowledge — 35%): comprensione delle regole geometriche e della disposizione delle viste sui piani di proiezione PO, PV, PL [B2 -> B4];
- Asse S (Skills — 40%): applicazione della procedura di costruzione, rispetto delle misure/proporzioni e uso degli strumenti (o del software CAD/GeoGebra per chi ha PDP) [C3 -> C5];
- Asse M (Mindset & Metacognition — 25%): organizzazione dello spazio del foglio, controllo autonomo della corrispondenza tra le viste (linee di proiezione) e correzione degli errori [D3 -> D5].
[A] VINCOLO INCLUSIVO FONDAMENTALE: nei descrittori specifica chiaramente che per gli alunni con disgrafia o difficoltà grafo-motorie (PDP/PEI) NON viene penalizzata l'uniformità estetica del tratto a matita, ma si valuta la correttezza concettuale e procedurale della costruzione geometrica (anche realizzata con strumenti compensativi o digitali).
[F] Tabella Rubrica a 4 livelli (Iniziale, Base, Intermedio, Avanzato) con codici [A-D][1-6] pronta per "Esporta in Fogli" + Checklist in 4 passi per lo studente ("Prima di consegnare la tavola controlla che...").
```

---

## 🎨 AREA TECNICO-ARTISTICA E MOTORIA — ARTE E IMMAGINE (2 Esempi · 6,7% del monte ore)

### Esempio #24 — Arte e Immagine (2ª Media · Incontro 2)
* **Tema**: Lettura guidata di un'opera d'arte con **Gemini Multimodale (Vision)** dalla descrizione oggettiva (`LOTS`) all'analisi simbolica e al confronto (`HOTS`).
* **Strumento**: **Google Gemini Multimodale + Canvas** → *Esporta in Documenti*.
* **Profilo Funzionale**: Scheda di lettura visiva strutturata per alunni BES/DSA/NAI.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3, B4] → HOTS [B5, B6]`.

```text
[R] Agisci come docente di Arte e Immagine nella Scuola Secondaria di I grado.
[C] Classe 2ª media (12 anni) — Argomento: Lettura guidata di un'opera del Rinascimento (es. "La Primavera" di Botticelli o "L'Ultima Cena" di Leonardo, a partire dall'immagine caricata).
[N] Progetta una scheda di verifica/lettura dell'opera articolata in 4 tappe lungo la scala LOTS -> HOTS:
- Tappa 1 (Osservare e Ricordare - LOTS [A1]): carta d'identità dell'opera e riconoscimento dei personaggi/elementi principali;
- Tappa 2 (Comprendere e Applicare il linguaggio visivo - Ponte [B2, C3]): analisi guidata di linee di forza, prospettiva, luce e colori caldi/freddi;
- Tappa 3 (Analizzare e Valutare - HOTS [B4, B5]): "L'Occhio del Critico d'Arte": confrontare un dettaglio dell'opera con un'opera medievale precedente per spiegare cosa è cambiato nella rappresentazione dello spazio e delle emozioni;
- Tappa 4 (Rielaborare - HOTS [B6]): scegliere tra 2 modalità espressive UDL (scrivere una breve didascalia per un museo per ragazzi OPPURE progettare uno schizzo che riprenda la composizione dell'opera in chiave moderna).
[A] Genera una Versione Facilitata (con scelte guidate a crocette per le Tappe 1-2 e frasi-avvio per la Tappa 3) e una Versione Standard.
[F] Documento pronto per "Esporta in Documenti".
```

---

### Esempio #25 — Arte e Immagine (3ª Media · Incontro 4 — Area 2)
* **Tema**: Quiz digitale visivo in **Google Moduli** sulle Avanguardie del Novecento (Impressionismo, Espressionismo, Cubismo, Futurismo) con feedback formativo.
* **Strumento**: **Google Gemini** → *Esporta in Fogli* → **Google Moduli**.
* **Profilo Funzionale**: Apprendimento basato sul riconoscimento visivo dello stile anziché sul solo studio mnemonico di date.
* **Scala Cognitiva**: `LOTS [B1, B2] → Ponte [B3, B4] → HOTS [B5]`.

```text
[R] Agisci come docente di Arte e Immagine di 3ª media.
[C] Classe 3ª media (13-14 anni) — Argomento: Riconoscere e comprendere il linguaggio visivo di Impressionismo, Espressionismo, Cubismo e Futurismo.
[N] Genera una tabella di 8 quesiti a scelta multipla (3 opzioni A, B, C) pensati per Google Moduli, in cui ogni domanda è abbinata all'immagine di un dipinto celebre:
- 3 quesiti LOTS [B1, B2]: osservando il dipinto indicato, individuare a quale movimento appartiene in base a pennellata, colore o scomposizione delle forme;
- 3 quesiti Ponte [B3, B4]: collegare la scelta stilistica dell'artista (es. scomposizione da più punti di vista in Picasso o linee di velocità in Boccioni) al messaggio che voleva trasmettere;
- 2 quesiti HOTS [B5]: "Caccia all'errore nella guida del museo": leggere una breve scheda descrittiva del quadro che contiene 1 errore stilistico/storico e individuarlo.
[A] Indica per ogni domanda quale opera d'arte di pubblico dominio inserire in Google Moduli, usa frasi brevi e fornisci un feedback formativo che aiuti lo studente a "vedere" l'elemento visivo chiave.
[F] Tabella pronta per "Esporta in Fogli": N. | Livello e Codice | Opera da inserire nel Modulo | Domanda | Opzione A | Opzione B | Opzione C | Risposta Corretta | Suggerimento Visivo | Feedback Formativo.
```

---

## 🎵 AREA TECNICO-ARTISTICA E MOTORIA — MUSICA (2 Esempi · 6,7% del monte ore)

### Esempio #26 — Musica (1ª o 2ª Media · Incontro 3)
* **Tema**: Rubrica di valutazione KSM per una prova pratica di Esecuzione Strumentale/Vocale o di Ascolto Musicale.
* **Strumento**: **Google Gemini (*Thinking*)** → *Esporta in Fogli / Griglie di Classroom*.
* **Profilo Funzionale**: Valorizzazione dell'impegno, dell'uso di spartiti facilitati (con colori/nomi delle note per DSA) e dell'ascolto reciproco nella musica d'insieme.
* **Scala Cognitiva**: Matrice `Anderson & Krathwohl × KSM` (`K 30%`, `S 45%`, `M 25%`).

```text
[R] Agisci come docente di Musica nella Scuola Secondaria di I grado esperto in valutazione formativa e inclusiva.
[C] Classe 1ª/2ª media — Prova pratica di esecuzione musicale (individuale o in musica d'insieme).
[N] Costruisci una Rubrica di valutazione secondo la Tassonomia di Anderson & Krathwohl e il Criterio KSM:
- Asse K (Knowledge — 30%): lettura/comprensione della struttura del brano, della pulsazione ritmica e dei segni espressivi (anche tramite spartito facilitato con notazione colorata o tablatura) [A1, B2 -> B4];
- Asse S (Skills — 45%): precisione ritmica e melodica nell'esecuzione, coordinazione tecnica e sincronia con la base o con il gruppo classe [C3 -> C5];
- Asse M (Mindset & Metacognition — 25%): ascolto attivo dei compagni, capacità di riprendere l'esecuzione in caso di piccolo errore senza fermarsi e autovalutazione del proprio studio [D3 -> D6].
[A] Specifica che l'utilizzo dello spartito compensativo (note con nome/colore o parte ritmica/melodica semplificata in musica d'insieme) consente il pieno raggiungimento anche del Livello Avanzato.
[F] Tabella a 4 livelli con codici [A-D][1-6] pronta per "Esporta in Fogli" + 3 domande di autovalutazione post-esecuzione per lo studente.
```

---

### Esempio #27 — Musica (2ª o 3ª Media · Incontro 4 — Area 3)
* **Tema**: Verifica multimodale di **Ascolto Guidato** integrata a un video/audio musicale su YouTube (es. *La Primavera* di Vivaldi, *Quinta Sinfonia* di Beethoven o un brano Jazz/Colonna sonora).
* **Strumento**: **Google Gemini** + **Google Moduli con Video YouTube** (o **Edpuzzle**).
* **Profilo Funzionale**: Canale uditivo primario; domande ancorate a minutaggi precisi del brano.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [B3, B4] → HOTS [B5, B6]`.

```text
[R] Agisci come docente di Musica nella Scuola Secondaria di I grado.
[C] Classe 2ª/3ª media — Verifica di ascolto guidato integrata al video/audio di un brano celebre (es. "La Primavera" di A. Vivaldi, 1° movimento, oppure "In the Hall of the Mountain King" di E. Grieg).
[N] Progetta una scheda di ascolto digitale di 5 quesiti lungo la scala LOTS -> HOTS riferiti a momenti precisi dell'ascolto:
- Q1 (Timbro e Organico - LOTS [A1]): quali strumenti solisti o famiglie orchestrali emergono nella prima sezione?
- Q2 (Dinamica e Agogica - LOTS/Ponte [B2]): come cambiano intensità (piano/forte/crescendo) e velocità (tempo) nel passaggio centrale?
- Q3 (Struttura e Forma - Ponte [B3, B4]): riconoscere il ritorno del tema principale (ritornello) rispetto agli episodi descrittivi;
- Q4 (Analisi espressiva - HOTS [B4, B5]): quale immagine o scena il compositore dipinge con i suoni in questo episodio e con quale mezzo musicale la ottiene (es. trilli degli archi = canto degli uccelli)?
- Q5 (Valutazione/Creazione - HOTS [B6]): se dovessi usare questo brano come colonna sonora di una scena cinematografica di oggi, quale scena sceglieresti e perché? (con 2 sentence starters di supporto).
[A] Domande chiare, lessico musicale spiegato tra parentesi (es. "timbro = la voce dello strumento") e feedback formativo per i quesiti a scelta multipla.
[F] Testo pronto per Google Moduli + Video YouTube o Edpuzzle.
```

---

## 🏃 AREA TECNICO-ARTISTICA E MOTORIA — EDUCAZIONE FISICA (2 Esempi · 6,7% del monte ore)

### Esempio #28 — Educazione Fisica (2ª Media · Incontro 3)
* **Tema**: Banca quesiti su Regole di gioco, Fair Play, Salute e Alimentazione + Scheda di Autovalutazione Metacognitiva motoria (Asse `M`).
* **Strumento**: **Google Gemini** → *Esporta in Fogli / Documenti*.
* **Profilo Funzionale**: Valorizzazione dell'autoregolazione, della collaborazione e della consapevolezza corporea per tutti gli alunni.
* **Scala Cognitiva**: `LOTS [A1, B2] → Ponte [C3] → HOTS [C5, D5]`.

```text
[R] Agisci come docente di Educazione Fisica nella Scuola Secondaria di I grado.
[C] Classe 2ª media (12 anni) — Argomento: Regole fondamentali e Fair Play negli sport di squadra (es. Pallavolo / Pallacanestro) e principi di riscaldamento e sicurezza.
[N] Produci due strumenti integrati:
1. Una tabella di 8 quesiti a scelta multipla (3 opzioni A, B, C) basati su situazioni reali di gioco in palestra:
   - 3 quesiti LOTS [A1, B2] sulle regole base;
   - 3 quesiti Ponte [C3] ("Sei in campo e succede questa azione: quale decisione prende l'arbitro / qual è il movimento corretto per prevenire infortuni?");
   - 2 quesiti HOTS [C5, D4] ("Analizza questo comportamento durante una partita di classe: perché viola il Fair Play o l'efficacia tattica di squadra e quale scelta alternativa faresti?").
2. Una breve Scheda di Autovalutazione Metacognitiva (Asse M - Mindset & Metacognition [D3, D5]) in 4 indicatori a livelli (Impegno e partecipazione, Rispetto delle regole e dei compagni, Gestione dell'errore durante il gioco, Ruolo collaborativo anche come arbitro/osservatore).
[A] Linguaggio diretto, esempi concreti vissuti in palestra e feedback formativo.
[F] Tabella quesiti pronta per "Esporta in Fogli" + Scheda autovalutazione per "Esporta in Documenti".
```

---

### Esempio #29 — Educazione Fisica (3ª Media · Incontro 4 — Area 3)
* **Tema**: Verifica multimodale su video di un gesto tecnico-motorio o di Primo Soccorso / Sicurezza (es. *fondamentale del palleggio/bagher* oppure *catena del soccorso e posizione laterale di sicurezza*).
* **Strumento**: **Google Gemini** + **Google Moduli con Video YouTube** (o **Edpuzzle**).
* **Profilo Funzionale**: Osservazione visiva del movimento scomposto in fasi (*analisi biomeccanica/procedurale accessibile*).
* **Scala Cognitiva**: `LOTS [C1, B2] → Ponte [C3, C4] → HOTS [C5]`.

```text
[R] Agisci come docente di Educazione Fisica di 3ª media.
[C] Classe 3ª media (13-14 anni) — Verifica multimodale associata a un breve video dimostrativo (2-3 minuti) su [es. "Il fondamentale del bagher nella pallavolo" oppure "Cosa fare e cosa NON fare nel Primo Soccorso a scuola"].
[N] Progetta 5 quesiti lungo la scala LOTS -> HOTS che guidino lo studente nell'osservazione attiva del video:
- Q1 [C1 - Ricordare la sequenza]: rimettere nel giusto ordine le 3 fasi della procedura mostrata nel video;
- Q2 [C2 - Comprendere il perché]: perché nel video viene spiegato di tenere [es. le gambe piegate / oppure di verificare prima la sicurezza della scena]?
- Q3 [C3 - Applicare]: in una situazione simulata in palestra, quale azione immediata compi?
- Q4-Q5 [C4, C5 - HOTS "Occhio all'Errore Motorio/Procedurale"]: osservando l'esecuzione sbagliata mostrata nella seconda parte del video (o descritta nel quesito), individua qual è l'errore di postura/procedura, quale conseguenza provoca e come va corretto.
[A] Consegne brevi, 3 opzioni chiare e feedback formativo immediato.
[F] Testo pronto per Google Moduli + Video YouTube o Edpuzzle.
```

---

## 🤝 IRC / ATTIVITÀ ALTERNATIVA ED EDUCAZIONE CIVICA (1 Esempio · 3,3% del monte ore)

### Esempio #30 — IRC / Attività Alternativa & Educazione Civica (2ª o 3ª Media · Incontro 2–3)
* **Tema**: Micro-scenario etico e di Cittadinanza Digitale (*Rispetto dell'altro, dialogo interculturale o responsabilità nelle chat di classe*) per valutare i processi superiori **HOTS (`4. Analizzare`, `5. Valutare`)** e l'asse **M (Mindset)**.
* **Strumento**: **Google Gemini (Modello di Ragionamento *Thinking* + Canvas)**.
* **Profilo Funzionale**: Dilemma realistico vicino ai ragazzi di 12–14 anni, con *scaffolding* argomentativo e rubrica KSM.
* **Scala Cognitiva**: `LOTS [B2] → Ponte [B4] → HOTS [B5, D5, D6]`.

```text
[R] Agisci come docente di IRC / Attività Alternativa e coordinatore di Educazione Civica nella Scuola Secondaria di I grado.
[C] Classe 2ª/3ª media (12-14 anni).
[N] Progetta una prova autentica basata su un "Micro-Scenario di Realtà" sul tema della Cittadinanza Digitale, del rispetto della dignità altrui e della responsabilità personale (es. nella chat del gruppo classe viene diffusa un'immagine imbarazzante o un commento esclusivo verso un compagno: tre ragazzi reagiscono in tre modi diversi — chi condivide, chi tace per paura, chi interviene in modo costruttivo).
Articola la prova in 4 quesiti lungo la scala LOTS -> HOTS:
- Q1 [B2 - Comprendere]: individuare il problema centrale e i diritti/valori messi in gioco nella vicenda;
- Q2 [B4 - Analizzare i punti di vista]: analizzare in una tabella a 3 righe le motivazioni e le conseguenze del comportamento di ciascuno dei 3 personaggi dello scenario;
- Q3 [B5 - Valutare criticamente]: valutare quale principio (costituzionale/etico/religioso studiato) viene violato o promosso e perché il "restare spettatori passivi" ha comunque un impatto;
- Q4 [D5, D6 - Creare e Riflettere metacognitivamente]: scrivere una proposta concreta in 3 punti per risolvere la situazione e prevenire che riaccada nella propria classe.
[A] Genera una Versione Facilitata (con la tabella di Q2 già impostata e frasi-avvio argomentative per Q3 e Q4: "Secondo me il silenzio in questo caso provoca...", "Una regola che proporrei alla mia classe è...") e una Versione Standard, accompagnate da una mini-griglia KSM (K 30%, S 40%, M 30%).
[F] Documento completo pronto per "Esporta in Documenti".
```
