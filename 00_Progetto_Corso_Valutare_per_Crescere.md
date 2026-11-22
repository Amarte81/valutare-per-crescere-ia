# Documento Master di Progettazione (Syllabus del Corso)

## VALUTARE PER CRESCERE
### *Valutare con l'IA: verifiche accessibili e personalizzate nella Secondaria*

---

## 1. Carta d'Identità del Corso

| Campo | Specifica |
| :--- | :--- |
| **Titolo** | **VALUTARE PER CRESCERE** — *Valutare con l'IA: verifiche accessibili e personalizzate nella Secondaria* |
| **Target** | Docenti di scuola secondaria, con focus prevalente sulla **Scuola Secondaria di Primo Grado** (studenti 11–14 anni) |
| **Durata complessiva** | **20 ore** articolate in **5 incontri (5 giornate) da 4 ore ciascuno** |
| **Modalità e logistica** | **In presenza**, in **fascia pomeridiana**, all'interno di un **laboratorio di informatica** |
| **Competenze d'ingresso** | Conoscenza di **Google Workspace for Education**; dimestichezza con l'IA generativa **eterogenea** (da nulla a media) |
| **Focus tecnologico** | **Google Gemini** (nuovi modelli multimodali, di ragionamento *Thinking*, Canvas/Gem ed esportazione diretta in Workspace), **Google NotebookLM** (incluse Mappe Mentali e Audio Overview) e gli strumenti gratuiti dell'ecosistema **Google Workspace for Education**, affiancati da soluzioni gratuite per quiz/video e per la privacy sul PC personale |
| **Attestazione e attivazione** | Nessun attestato/esame finale obbligatorio; attivazione continua tramite **5 Lavori Pratici progressivi in aula (1 per ciascuna giornata)** che compongono un **Kit Valutativo Inclusivo** spendibile subito in classe |
| **Moduli extra opzionali** | **2 Moduli Aggiuntivi Facoltativi** (messi a disposizione in Drive/Classroom per i soli docenti interessati) |

---

## 2. Quadro Metodologico: Pedagogia Tradotta in Ingegneria del Prompt su Gemini

Per mantenere il focus costantemente sull'**uso dell'Intelligenza Artificiale**, i concetti pedagogici non vengono trattati come lezioni teoriche frontali, ma come **tecniche operative di controllo e guida dei nuovi modelli di Google Gemini** (confrontando sempre a schermo cosa genera Gemini con un prompt generico rispetto a un prompt ingegnerizzato dal docente):

1. **Sfruttare le nuove capacità dei modelli di Google Gemini**:
   * **Multimodalità nativa (Vision / Documenti)**: caricare direttamente in Gemini la **foto di una pagina del libro di testo cartaceo**, una vecchia verifica scannerizzata, una mappa storica o un grafico scientifico per farli analizzare, adattare e trasformare in prove accessibili senza ricopiare nulla.
   * **Modelli di Ragionamento (*Thinking / Ragionamento*) vs modelli rapidi (*Flash*)**: capire quando usare il modello veloce (adattamento linguistico, glossari, brainstorming) e quando attivare il modello di **ragionamento** per progettare quesiti **HOTS**, problemi di Matematica/Scienze privi di errori logici, attività di *"Caccia all'errore"* e verifiche multilivello coerenti.
   * **Interfaccia interattiva (Gemini Canvas, Gem ed Esportazione diretta in Workspace)**: lavorare in affiancamento sul testo generato per semplificare o calibrare singole domande in tempo reale, salvare istruzioni ricorrenti per la propria materia (**Gem**) ed esportare con un clic direttamente in **Google Documenti** o **Google Fogli**.
2. **UDL (*Universal Design for Learning*) e Valutazione Formativa come istruzioni per l'IA**:
   * Istruire Gemini per generare fin dall'origine prove accessibili e multilivello per classi con **BES, DSA (L. 170/2010), disabilità (L. 104/1992), NAI/svantaggio linguistico, ADHD e alto potenziale**, integrando feedback formativi (*feed-forward*) e autovalutazione (*Valutare per crescere*).
3. **Progressione LOTS → HOTS e Criterio KSM (Anderson & Krathwohl, 2001) per governare l'output di Gemini**:
   * **Perché serve nell'IA**: un prompt generico su qualsiasi modello IA produce al 70–80% domande puramente mnemoniche (`A1 — Ricordare`), che penalizzano proprio gli alunni con DSA/BES (fragilità nella memoria di lavoro) e annoiano gli altri.
   * **Regola d'oro del corso**: *Accessibilità ≠ Semplificazione cognitiva al ribasso*. Usiamo i prompt per chiedere a Gemini di **abbassare le barriere strumentali** (lessico, sintassi, carico visivo) **mantenendo alta la qualità cognitiva** lungo la matrice `4 × 6` (**Conoscenze `A` Fattuale, `B` Concettuale, `C` Procedurale, `D` Metacognitiva** × **Processi `1–3` LOTS → `4–6` HOTS**) e i tre assi del **Criterio KSM**:
     * **K — Knowledge** (*Conoscenze fattuali `A` e concettuali `B`* — peso orientativo 30–35%);
     * **S — Skills** (*Abilità procedurali `C`, applicazione e analisi* — peso orientativo 40–45%);
     * **M — Mindset, Metacognition & Mastery** (*Conoscenza metacognitiva `D`, autonomia, spirito critico, correzione dell'errore e creatività* — peso orientativo 20–25%).
4. **Etica, Privacy (GDPR) e *Human-in-the-Loop***: il docente valida sempre gli output dell'IA. Regola inderogabile: **mai inserire nomi, dati anagrafici, diagnosi cliniche, PEI o PDP reali** nei servizi cloud; applicare il **Protocollo del Profilo Funzionale Anonimizzato** e conoscere strumenti **locali/offline gratuiti** per il PC personale.

### La Scala Operativa LOTS → HOTS Inclusiva (per guidare i prompt su Gemini)

| Fascia | Processo (Anderson & Krathwohl) | Verbi operativi per i prompt su Gemini | Scaffolding inclusivo da richiedere nel prompt (BES / DSA / NAI) |
| :--- | :--- | :--- | :--- |
| **LOTS** | **1. Ricordare** | Riconoscere, individuare, nominare | Banche di parole, immagini etichettate, abbinamenti (evitare memoria "a vuoto"). |
| **LOTS** | **2. Comprendere** | Spiegare, classificare, esemplificare, riassumere | Frasi brevi, parafrasi chiare, mappe semicompilate, vignette/schemi. |
| **Ponte** | **3. Applicare** | Risolvere, eseguire, utilizzare una regola | Procedura spezzettata *step-by-step*, esempio svolto come modello, formulari/supporti. |
| **HOTS** | **4. Analizzare** | Confrontare, distinguere cause/effetti, scomporre | Tabelle comparative guidate, schemi causa→effetto preimpostati, dati chiave evidenziati. |
| **HOTS** | **5. Valutare** | Trovare errori (*error analysis*), argomentare, verificare | Attività *"Caccia all'errore"* + frasi-avvio guidate (*sentence starters*). |
| **HOTS** | **6. Creare** | Progettare, formulare ipotesi, rielaborare | Scelta del canale espressivo (UDL): breve testo, schema, fumetto, audio, mini-presentazione. |

---

## 3. Ergonomia dei 5 Incontri da 4 Ore e Gestione dell'Aula

Il passaggio a **5 giornate da 4 ore (240 minuti per incontro)** offre una sostenibilità ergonomica superiore per docenti che arrivano in laboratorio dopo la mattinata a scuola, e permette di dividere ogni pomeriggio in **2 Blocchi simmetrici da 2 ore nominali (110 minuti netti ciascuno)** separati da **una pausa centrale di 20 minuti**:

* **Scansione fissa dei 240 minuti (4 ore) di ogni giornata**:
  * `00:00 – 01:50` **Blocco 1** *(110 min netti = 2h nominali)*
  * `01:50 – 02:10` **Pausa Centrale** *(20 min — decompressione, caffè e movimento)*
  * `02:10 – 04:00` **Blocco 2** *(110 min netti = 2h nominali)*
  * *Totale per incontro*: **3h40 nette (220') di attività attiva + 20 min di pausa = 4 ore** (*Totale corso su 5 giorni: 1100' netti [18h20] + 100' pause [1h40] = 20 ore*).
* **Micro-ritmo interno a ogni blocco da 110 min (regola 20–30–45–15)**:
  * ~20' di inquadramento operativo (sempre mostrato tramite confronto di prompt/output su Gemini);
  * ~30' di demo live guidata su Gemini / NotebookLM / strumenti Google;
  * ~45' di laboratorio pratico (*hands-on*) al PC con micro-stacco visivo di 3–5 minuti all'avvio del lavoro;
  * ~15' di confronto, validazione *Human-in-the-Loop* e salvataggio su Drive.
* **Gestione della classe eterogenea (IA da livello nullo a medio)**:
  * **Binario Base ("Pronti via")**: prompt-template a riempimento pronti da copiare in Gemini.
  * **Binario Intermedio ("Approfondimento")**: uso avanzato di Gemini (input multimodali, modelli di ragionamento *Thinking*, affinamento in *Canvas*, creazione di **Gem** disciplinari riutilizzabili e uso combinato con *NotebookLM*).
  * **Coppie o isole disciplinari** (Lettere, Matematica/Scienze, Lingue, Tecnico-Artistico-Motorio/Sostegno) per favorire il supporto tra pari.
* **Logistica del laboratorio informatico**:
  * All'avvio dell'Incontro 1 ogni docente crea sul proprio Google Drive la cartella `Corso_Valutare_Per_Crescere` (con 5 sottocartelle, una per giornata) per salvare i lavori e ricorda di fare logout a fine pomeriggio sui PC condivisi.

---

## 4. Ripartizione del Monte Ore su 5 Giorni × 4 Ore (Corrispondenza Esatta al 100%)

Con **5 incontri da 4 ore** (ossia **10 blocchi da 2 ore nominali / 110' netti ciascuno**), ogni singolo modulo del corso occupa un **numero intero di blocchi da 2 ore**, eliminando qualsiasi spezzettamento tra un giorno e l'altro e rispettando al decimale le quote attese (`4/20`, `10/20`, `2/20`, `2/20`, `2/20`):

| Area / Modulo del Corso | Quota attesa | Ore nominali | Blocchi da 2h | Minuti netti (su 1100') | % Effettiva | Collocazione nei 5 Giorni |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Accessibilità, autonomia e studio degli studenti** | **4/20** | **4h** | 2 blocchi | 220' | **20,0%** | **Incontro 1** (Intera giornata: Blocco 1 + Blocco 2) |
| **VerifichIAmo con l'Intelligenza Artificiale** *(cuore del corso)* | **10/20** | **10h** | 5 blocchi | 550' | **50,0%** | **Incontro 2** (4h) + **Incontro 3** (4h) + **Incontro 5, Blocco 2** (2h sintesi e integrazione finale) |
| **Area 1 — Progettare domande e quiz con il supporto dell'IA** | **2/20** | **2h** | 1 blocco | 110' | **10,0%** | **Incontro 4, Blocco 1** (2h) |
| **Area 2 — Quiz digitali per la valutazione** | **2/20** | **2h** | 1 blocco | 110' | **10,0%** | **Incontro 4, Blocco 2** (2h) |
| **Area 3 — Verifiche integrate a contenuti video e materiali** | **2/20** | **2h** | 1 blocco | 110' | **10,0%** | **Incontro 5, Blocco 1** (2h) |
| **TOTALE** | **20/20** | **20h** | **10 blocchi** | **1100' (+100' pause)** | **100,0%** | **5 incontri × 4 ore** |

---

## 5. Ecosistema degli Strumenti Selezionati (Focus Ecosistema Google Gratuito)

### A. Intelligenza Artificiale nell'Ecosistema Google (Cuore Tecnologico del Corso)
* **Google Gemini**:
  * **Input Multimodale**: caricamento di immagini/foto di libri cartacei, schemi, grafici e documenti PDF/Google Docs.
  * **Modelli veloci (*Flash*) vs Modelli di Ragionamento (*Thinking*)**: scelta del modello in base alla complessità cognitiva del compito (LOTS vs HOTS, problemi STEM, *error analysis*).
  * **Gemini Canvas & Gem**: modifica mirata di singole parti del testo o della verifica senza riscrivere l'intero prompt, creazione di assistenti disciplinari personalizzati (**Gem**) ed **esportazione con 1 clic in Google Documenti e Google Fogli**.
* **Google NotebookLM** *(100% gratuito con account Google)*:
  * IA ancorata *esclusivamente* alle fonti caricate dal docente (**PDF, Google Documenti, Google Presentazioni, link a video YouTube**) → azzera o quasi le allucinazioni.
  * **Funzioni chiave per l'inclusione e la valutazione**:
    1. **Mappe Mentali interattive automatiche** per visualizzare la struttura concettuale di un capitolo o di più fonti;
    2. **Audio Overview (Podcast a due voci in italiano)** per offrire agli studenti (specialmente DSA/BES o con difficoltà di lettura) un ripasso audio discorsivo sui materiali del docente;
    3. **Generazione di Guide allo studio, Glossari, FAQ e Verifiche** basate fedelmente sui materiali di classe.

### B. Strumenti Google Workspace for Education e Piattaforme Quiz/Video Gratuite
* **Google Workspace for Education**: **Google Drive**, **Google Documenti** (font inclusivi *Lexend/Atkinson*, digitazione vocale), **Google Fogli** (esportazione tabellare diretta delle banche quesiti e delle rubriche da Gemini), **Google Moduli** (quiz digitali con feedback formativo e percorsi ramificati LOTS → HOTS), **Google Classroom** (assegnazione differenziata "invisibile" a singoli alunni e **Griglie di valutazione** native), **YouTube**.
* **Piattaforme gratuite complementari (Area 2 e Area 3)**: **Wordwall** (piano free), **Quizizz** (piano free, senza timer + sintesi vocale), **Edpuzzle** (piano free, integrato a Classroom e YouTube).

### C. Soluzioni Locali Gratuite (per Privacy/Anonimizzazione e uso sul PC personale)
* **PDF24 Creator** *(Windows, 100% gratuito e offline)*: oscuramento/redazione permanente di nomi e dati sensibili nei PDF ed estrazione pagine senza upload su siti esterni.
* **Lumi Education (H5P Desktop)** *(Windows/Mac/Linux, open-source e gratuito)*: creazione offline di video interattivi e verifiche multimodali H5P esportabili in un **unico file `.html` auto-contenuto** per Classroom.
* **LM Studio / GPT4All** *(gratuiti, interfaccia grafica semplice)*: esecuzione di modelli IA **100% offline sul PC personale** per elaborare bozze sensibili senza cloud.
* **LibreOffice** *(gratuito e offline)*: pulizia metadati ed esportazione in PDF accessibili (`PDF/UA`).

---

## 6. Programma Dettagliato dei 5 Incontri da 4 Ore (Syllabus)

### Incontro 1 (Giorno 1 · 4h) — *Accessibilità, autonomia e studio degli studenti con Gemini e NotebookLM*
* **Modulo coperto**: **Accessibilità, autonomia e studio degli studenti (`4h = 4/20`)**.
* **Obiettivo operativo**: padroneggiare la multimodalità di **Gemini** (*Canvas*, *Easy-to-Read*, *Framework R-C-N-A-F per lo studio*) e le nuove funzioni di **Google NotebookLM** (*Mappe Mentali* e *Audio Overview*) per trasformare i materiali scolastici in risorse di studio accessibili nel pieno rispetto del GDPR.

| Fascia | Blocco | Contenuti e Attività |
| :--- | :--- | :--- |
| `00:00 – 01:50` | **Blocco 1** *(110' · 2h nom.)* | • **Accoglienza e Setup (10')**: patto d'aula, creazione cartella `Corso_Valutare_Per_Crescere` su Google Drive (con le 5 sottocartelle `01_Incontro1_...` – `05_Incontro5_...`) e apertura di Gemini e NotebookLM.<br>• **I nuovi modelli di Google Gemini per la scuola (20')**: multimodalità nativa (partire da foto/PDF del libro), differenza tra modello rapido (*Flash*) e modello di ragionamento (*Thinking*), modifica in tempo reale con **Gemini Canvas**, assistenti **Gem** ed esportazione in 1 clic su Google Documenti/Fogli.<br>• **Superare le barriere allo studio (11–14 anni) e strutturare il Prompt di Studio (20')**: UDL, carico cognitivo, perché studiare solo a memoria (`LOTS 1`) penalizza BES/DSA/NAI e come guidare Gemini con il **Prompt in 5 punti (`R-C-N-A-F`)** e le 5 regole *Easy-to-Read* per accompagnare lo studente da `Ricordare` a `Comprendere/Applicare`.<br>• **Privacy, GDPR e Strumenti Locali per il PC personale (20')**: divieto di caricare PEI/PDP/nomi, il **Protocollo del Profilo Funzionale Anonimizzato** + demo live sul PC del formatore di **PDF24 Creator** (*Oscura PDF*), **LM Studio/GPT4All** (IA offline), **Lumi H5P** e **LibreOffice** (*+ segnalazione del Modulo Extra A sull'uso etico dell'IA a casa*).<br>• **Demo Live 1 su Gemini Multimodale + Canvas (10')**: dalla foto di una pagina del libro di testo alla scheda *Easy-to-Read* esportata in Google Documenti (font *Lexend*, interlinea `1,5`, Digitazione Vocale).<br>• **🛠️ LAVORO PRATICO 1 — Fase 1A (30')**: ogni docente sceglie un argomento reale della propria disciplina e produce con Gemini la propria **Scheda di Studio *Easy-to-Read*** con glossario e domande-guida (a doppio binario *Base / Approfondimento*), esportandola in Google Documenti nella cartella `01_Incontro1_Studio_Accessibile`. |
| `01:50 – 02:10` | **Pausa** *(20')* | *Pausa centrale di decompressione, caffè e movimento* |
| `02:10 – 04:00` | **Blocco 2** *(110' · 2h nom.)* | • **Google NotebookLM per lo studio inclusivo a "Zero Allucinazioni" (35')**: architettura di *Grounding* sulle sole fonti del docente (PDF, Google Docs, Slide, video YouTube) con citazioni cliccabili; demo live della generazione automatica di **Mappe Mentali interattive** (scaricabili in PNG) e dell'**Audio Overview (Podcast a due voci in italiano)** personalizzato per ragazzi di 11–14 anni.<br>• **🛠️ LAVORO PRATICO 1 — Fase 1B (45')**: ogni docente carica la scheda/dispensa della Fase 1A (+ un video YouTube) su **NotebookLM**, genera la **Mappa Mentale PNG** (da inserire in cima al Documento Google) e l'**Audio Overview personalizzato**, completando il **Pacchetto di Studio Accessibile** in `01_Incontro1_Studio_Accessibile`.<br>• **Galleria tra pari, Debriefing e Chiusura Giorno 1 (30')**: condivisione lampo di 3 pacchetti di discipline diverse, riflessione sugli interventi *Human-in-the-Loop*, checklist finale e logout. |

---

### Incontro 2 (Giorno 2 · 4h) — *VerifichIAmo con l'IA (Parte I): LOTS → HOTS e Verifiche UDL Multilivello con Gemini*
* **Modulo coperto**: **VerifichIAmo con l'Intelligenza Artificiale — Parte I (`4h su 10h`)**.
* **Obiettivo operativo**: usare il modello di **Ragionamento (*Thinking*)** di Gemini, l'input multimodale e *Gemini Canvas/Gem* per progettare verifiche accessibili su 3 livelli (Facilitata/Equipollente, Standard, Potenziamento) bilanciate lungo la scala **LOTS → HOTS**.

| Fascia | Blocco | Contenuti e Attività |
| :--- | :--- | :--- |
| `00:00 – 01:50` | **Blocco 1** *(110' · 2h nom.)* | • **Dal Prompt di Studio al Prompt di Verifica (`R-C-N-A-F`) (25')**: perché un prompt generico produce verifiche all'80% mnemoniche (`LOTS 1`) o taglia i quesiti di ragionamento nelle prove per BES/DSA.<br>• **Governare Gemini con la scala LOTS → HOTS, il Criterio KSM e le Prove Equipollenti vs Differenziate (55')**: la matrice di Anderson & Krathwohl (`1. Ricordare → 6. Creare`); quando attivare il modello di **Ragionamento (*Thinking*)** di Gemini per problemi STEM passo-passo e per progettare quesiti inclusivi di livello **HOTS (`5. Valutare — "Caccia all'errore"`)** con *scaffolding* e *sentence starters*; distinzione normativa (D.Lgs. 62/2017, L. 170/2010, Nuovo PEI) tra **prove equipollenti** e **prove differenziate**.<br>• **🛠️ LAVORO PRATICO 2 — Fase 2A: "Radiografia" Multimodale di una Verifica Reale (30')**: caricare la foto o il PDF di una verifica tradizionale di scuola media e far generare a Gemini la tabella diagnostica LOTS/HOTS e barriere linguistiche/grafiche. |
| `01:50 – 02:10` | **Pausa** *(20')* | *Pausa centrale di decompressione, caffè e movimento* |
| `02:10 – 04:00` | **Blocco 2** *(110' · 2h nom.)* | • **Co-progettare in Gemini Canvas la Verifica UDL su 3 Livelli + Creazione Gem (30')**: generare in parallelo **Versione A (Facilitata/Equipollente)**, **Versione B (Standard)** e **Versione C (Potenziamento)** sullo stesso nucleo tematico; salvare le istruzioni in un **Gem disciplinare permanente**.<br>• **🛠️ LAVORO PRATICO 2 — Fase 2B (55')**: ogni docente progetta con Gemini (*Thinking* + *Canvas*) la propria **Verifica UDL Multilivello** sull'argomento scelto al Giorno 1 (bilanciamento: ~40% LOTS, ~40% Ponte Applicare/Analizzare, ~20% HOTS con *"Caccia all'errore"* guidata), completa di correttorio ed esportata in Google Documenti nella cartella `02_Incontro2_Verifica_UDL_Multilivello`.<br>• **Controllo Critico (*Human-in-the-Loop*) e Confronto per Dipartimenti (25')**: verifica dell'assenza di allucinazioni, doppie negazioni o calcoli errati e restituzione in aula. |

---

### Incontro 3 (Giorno 3 · 4h) — *VerifichIAmo con l'IA (Parte II): Rubriche KSM, Autovalutazione e Feedback Formativo*
* **Modulo coperto**: **VerifichIAmo con l'Intelligenza Artificiale — Parte II (`4h su 10h`)**.
* **Obiettivo operativo**: istruire **Gemini** per costruire Griglie e Rubriche di valutazione secondo **Anderson & Krathwohl × Criterio KSM** (esportabili in Google Fogli e Classroom), schede di autovalutazione in linguaggio studente e feedback formativi (*feed-forward*) personalizzati.

| Fascia | Blocco | Contenuti e Attività |
| :--- | :--- | :--- |
| `00:00 – 01:50` | **Blocco 1** *(110' · 2h nom.)* | • **Progettare Griglie e Rubriche di Valutazione con Gemini (Anderson & Krathwohl × KSM) (45')**: strutturare gli indicatori sui tre assi **K (Knowledge 30–35%)**, **S (Skills 40–45%)** e **M (Mindset, Metacognition & Mastery 20–25%)** con codici `[A-D][1-6]` e descrittori su 4 livelli che progrediscono da **LOTS a HOTS** con verbi osservabili (eliminando gli avverbi vaghi *"poco/abbastanza/molto"* e tutelando l'uso degli strumenti compensativi).<br>• **Dalla Rubrica Docente all'Autovalutazione Studente e Google Classroom (25')**: far riscrivere a Gemini la griglia in prima persona per ragazzi di 11–14 anni (*Valutare per crescere*) ed esportare la tabella con 1 clic in **Google Fogli** per le **Griglie di Google Classroom**.<br>• **🛠️ LAVORO PRATICO 3 — Fase 3A (40')**: generare con Gemini la **Rubrica KSM** + la **Scheda di Autovalutazione Studente** per la verifica del Lavoro 2 ed esportarle in `03_Incontro3_Rubrica_KSM_e_Feedback`. |
| `01:50 – 02:10` | **Pausa** *(20')* | *Pausa centrale di decompressione, caffè e movimento* |
| `02:10 – 04:00` | **Blocco 2** *(110' · 2h nom.)* | • **Gemini come Assistente per il Feedback Formativo e il Recupero Mirato (40')**: come analizzare con Gemini errori tipici o risposte parziali (rigorosamente anonimizzate!) per generare commenti costruttivi in stile *Punto di forza + Dove migliorare + Prossimo passo concreto (feed-forward)* e micro-schede di recupero personalizzate per gruppi di livello.<br>• **🛠️ LAVORO PRATICO 3 — Fase 3B (45')**: simulare sulla propria verifica 3 profili di errore frequenti nella propria disciplina e far generare a Gemini un **set di Feedback Formativi pronti all'uso** + **1 micro-attività di recupero mirato**.<br>• **Debriefing e Validazione Deontologica del Feedback (25')**: controllo del tono educativo e della precisione disciplinare; salvataggio su Drive. |

---

### Incontro 4 (Giorno 4 · 4h) — *Dalla Progettazione di Domande con l'IA (Area 1) ai Quiz Digitali Inclusivi (Area 2)*
* **Moduli coperti**: **Area 1 — Progettare domande e quiz con il supporto dell'IA (`2h = 2/20`)** + **Area 2 — Quiz digitali per la valutazione (`2h = 2/20`)**.
* **Obiettivo operativo**: progettare nel Blocco 1 una banca di quesiti strutturati inclusivi (LOTS → HOTS) con Gemini ed esportarla in **Google Fogli**, e trasformarla immediatamente nel Blocco 2 in un **Quiz Digitale accessibile** su **Google Moduli** (con feedback e percorsi ramificati) e **Wordwall / Quizizz**.

| Fascia | Blocco | Contenuti e Attività |
| :--- | :--- | :--- |
| `00:00 – 01:50` | **Blocco 1 · AREA 1** *(110' · 2h nom.)* | • **[Area 1 — Progettare domande e quiz con il supporto dell'IA]**:<br>  – **Anatomia dei quesiti inclusivi (30')**: scelta multipla a 3 opzioni con distrattori plausibili basati su misconcezioni reali (mai trabocchetti lessicali o visivi per DSA/NAI), zero doppie negazioni, vero/falso con motivazione, cloze e abbinamenti.<br>  – **Quiz a scelta multipla di livello HOTS e varianti equivalenti (30')**: usare il modello *Thinking* di Gemini per creare item su micro-scenari e *"Individua l'errore nel ragionamento"*, generando in automatico varianti fila A/B, suggerimenti (*scaffolding*) e feedback formativi per ogni opzione.<br>  – **🛠️ LAVORO PRATICO 4 — Fase 4A (50')**: generare con Gemini una **Banca di 10–12 quesiti inclusivi** (bilanciati LOTS → HOTS) sul proprio argomento ed esportarla con 1 clic tramite **"Esporta in Fogli"** nella cartella `04_Incontro4_Banca_Quesiti_e_Quiz_Digitale`. |
| `01:50 – 02:10` | **Pausa** *(20')* | *Pausa centrale di decompressione, caffè e movimento* |
| `02:10 – 04:00` | **Blocco 2 · AREA 2** *(110' · 2h nom.)* | • **[Area 2 — Quiz digitali per la valutazione]**:<br>  – **Google Moduli in chiave inclusiva e formativa (35')**: modalità Quiz, supporto visivo con immagini/schemi, inserimento dei feedback formativi per risposte corrette/errate e costruzione di un **percorso condizionale ramificato LOTS → HOTS** (*Sezione di rinforzo guidato* se lo studente sbaglia; *Sfida HOTS* se risponde correttamente), assegnazione differenziata su Classroom e lettura delle statistiche d'errore.<br>  – **Ambienti gamificati inclusivi gratuiti (20')**: importare la tabella di Google Fogli in **Wordwall** (cambio istantaneo di template per BES/DSA/NAI) o **Quizizz** (lettura vocale e modalità senza timer ansiogeno).<br>  – **🛠️ LAVORO PRATICO 4 — Fase 4B (55')**: realizzare il proprio **Google Modulo accessibile con feedback formativo** (e ramificazione per il binario approfondimento) a partire dalla banca quesiti del Blocco 1. |

---

### Incontro 5 (Giorno 5 · 4h) — *Verifiche Integrate a Video e Materiali (Area 3) e Sintesi Finale "VerifichIAmo con l'IA"*
* **Moduli coperti**: **Area 3 — Verifiche integrate a contenuti video e materiali (`2h = 2/20`)** + **VerifichIAmo con l'Intelligenza Artificiale — Parte III: Sintesi e Integrazione del Kit (`2h su 10h`)**.
* **Obiettivo operativo**: realizzare nel Blocco 1 una verifica multimodale integrata a video e materiali del docente (**NotebookLM**, **Google Moduli + YouTube**, **Edpuzzle**), e completare nel Blocco 2 l'assemblaggio, la revisione incrociata e la condivisione dell'intero **Kit Valutativo Inclusivo**.

| Fascia | Blocco | Contenuti e Attività |
| :--- | :--- | :--- |
| `00:00 – 01:50` | **Blocco 1 · AREA 3** *(110' · 2h nom.)* | • **[Area 3 — Verifiche integrate a contenuti video e materiali]**:<br>  – **La valutazione multimodale come leva inclusiva (15')**: integrare video, audio, immagini e documenti per valorizzare stili cognitivi diversi.<br>  – **Tre percorsi pratici online con domande in crescendo LOTS → HOTS (35')**:<br>    1. **Google NotebookLM Multimodale**: incrociare nello stesso taccuino **PDF/dispensa + Slide + link a video YouTube** per generare micro-verifiche ancorate al minutaggio del video e ai testi del docente, insieme a *Mappe Mentali* e *Audio Overview*;<br>    2. **Google Moduli + Video YouTube integrato** (100% interno a Workspace, zero account esterni);<br>    3. **Edpuzzle** (domande temporizzate e note vocali lungo il video, collegato a Google Classroom).<br>  – **Demo lampo (10')** della soluzione locale gratuita **Lumi Education (H5P Desktop)** per esportare video interattivi in un singolo file `.html`.<br>  – **🛠️ LAVORO PRATICO 5 — Fase 5A (50')**: realizzare **1 micro-verifica integrata a un video e/o materiale proprio** salvandola in `05_Incontro5_Verifica_Multimodale_e_Kit_Finale`. |
| `01:50 – 02:10` | **Pausa** *(20')* | *Pausa centrale di decompressione, caffè e movimento* |
| `02:10 – 04:00` | **Blocco 2 · VERIFICHIAMO III** *(110' · 2h nom.)* | • **[VerifichIAmo con l'IA — Parte III: Dal Materiale alla Verifica Completa (2h)]**:<br>  – **Coerenza dell'ecosistema valutativo e simulazione in Google Classroom (25')**: come orchestrare in Classroom l'intero flusso (assegnazione differenziata "invisibile" del materiale di studio e della verifica UDL/Modulo, associazione della Rubrica KSM e restituzione del feedback formativo) + presentazione del **Modulo Extra B (Prova orale inclusiva con Gemini e NotebookLM)**.<br>  – **🛠️ LAVORO PRATICO 5 — Fase 5B: Assemblaggio e Peer-Review del Kit Valutativo Inclusivo (45')**: ogni docente completa e verifica la coerenza dei 5 elementi prodotti nei 5 giorni (*1. Studio accessibile; 2. Verifica UDL a 3 livelli; 3. Rubrica KSM e feedback; 4. Banca quesiti e Quiz digitale; 5. Verifica multimodale su video/materiali*) e lo sottopone a una revisione incrociata (*peer review*) con un collega di dipartimento tramite la **Checklist di Qualità Inclusiva**.<br>  – **Showcase Finale tra Dipartimenti e Piano d'Azione (40')**: presentazione in plenaria di 4–5 Kit completi rappresentativi delle diverse discipline e definizione dell'impegno operativo per la classe. |

---

## 7. Matrice di Distribuzione Proporzionale degli Esempi sui 5 Incontri (Quadro Orario DPR 89/2009)

I **30 esempi di prompt e output IA** (su Gemini e NotebookLM) rispecchiano esattamente il monte ore settimanale della Scuola Secondaria di I grado (**30 ore/settimana**) e sono distribuiti in modo uniforme in **6 esempi per ciascuno dei 5 incontri (`5 × 6 = 30`)**:

| Disciplina | Ore sett. (su 30) | Quota % | Esempi IA (su 30) | Distribuzione nei 5 Incontri da 4 Ore (6 esempi per incontro — clicca per aprire il prompt) |
| :--- | :---: | :---: | :---: | :--- |
| **Italiano** *(incl. approfondimento)* | ~6h | 20,0% | **6** | **Inc. 1** ([#01](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-01) *Easy-to-Read*, [#02](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-02) Glossario NAI) · **Inc. 2** ([#03](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-03) Verifica narrativa UDL, [#04](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-04) Analisi logica con *Detective Grammaticale*) · **Inc. 3** ([#05](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-05) Rubrica KSM scrittura) · **Inc. 4** ([#06](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-06) Banca quiz lessico per Moduli) |
| **Matematica** | ~4h | 13,3% | **4** | **Inc. 1** ([#07](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-07) Frazioni *step-by-step*) · **Inc. 2** ([#08](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-08) Verifica Pitagora con *Thinking* e *Caccia all'errore*) · **Inc. 4** ([#09](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-09) Banca quesiti Equazioni in Fogli, [#10](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-10) Google Modulo ramificato Percentuali) |
| **Inglese** | 3h | 10,0% | **3** | **Inc. 1** ([#11](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-11) Reading graduata A1/A2 con Word Bank fonetica) · **Inc. 4** ([#12](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-12) Banca quesiti Past Simple per Fogli/Wordwall) · **Inc. 5** ([#13](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-13) Video-verifica Listening su YouTube/NotebookLM) |
| **Storia** | ~2h | 6,7% | **2** | **Inc. 2** ([#14](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-14) Verifica UDL Feudalesimo LOTS→HOTS con caccia all'anacronismo) · **Inc. 5** ([#15](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-15) Taccuino multimodale NotebookLM PDF + Video storico) |
| **Geografia** | ~2h | 6,7% | **2** | **Inc. 1** ([#16](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-16) Gemini Multimodale su carta/grafico + glossario NAI) · **Inc. 4** ([#17](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-17) Quiz digitale visivo in Google Moduli sull'Europa) |
| **Scienze** | ~2h | 6,7% | **2** | **Inc. 1** ([#18](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-18) NotebookLM Mappa Mentale + Audio Overview sulla Cellula) · **Inc. 5** ([#19](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-19) Verifica integrata a video di esperimento scientifico) |
| **Seconda Lingua** *(Fr/Sp/Ted)* | 2h | 6,7% | **2** | **Inc. 3** ([#20](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-20) Dialogo guidato e feedback formativo per DSA) · **Inc. 4** ([#21](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-21) Banca quesiti comunicativi in Fogli/Wordwall) |
| **Tecnologia** | 2h | 6,7% | **2** | **Inc. 2** ([#22](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-22) Gemini Multimodale su schema centrale energetica → verifica 3 livelli) · **Inc. 3** ([#23](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-23) Rubrica KSM disegno tecnico inclusiva per disgrafia) |
| **Arte e Immagine** | 2h | 6,7% | **2** | **Inc. 2** ([#24](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-24) Gemini Vision per lettura opera d'arte LOTS→HOTS) · **Inc. 5** ([#25](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-25) Verifica visiva e multimodale sulle Avanguardie) |
| **Musica** | 2h | 6,7% | **2** | **Inc. 3** ([#26](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-26) Rubrica KSM esecuzione con spartito compensativo) · **Inc. 5** ([#27](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-27) Verifica multimodale di ascolto guidato su video/audio) |
| **Educazione Fisica** | 2h | 6,7% | **2** | **Inc. 3** ([#28](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-28) Scheda autovalutazione metacognitiva M + feedback Fair Play) · **Inc. 5** ([#29](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-29) Video-verifica su gesto motorio / Primo Soccorso) |
| **IRC / Alternativa** *(+ Ed. Civica)* | 1h | 3,3% | **1** | **Inc. 3** ([#30](Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-30) Micro-scenario etico/cittadinanza digitale con rubrica KSM per HOTS `Analizzare/Valutare` e asse `M`) |
| **TOTALE** | **30h** | **100%** | **30** | **6 esempi per ciascuno dei 5 incontri** (*Sostegno trasversale a tutti i 30 esempi*) |

---

## 8. Moduli Aggiuntivi Facoltativi (per i soli docenti interessati)

1. **Modulo Extra A — *Uso etico e consapevole dell'IA da parte degli alunni a casa*** *(segnalato nell'Incontro 1)*: limiti degli *AI detector*, progettazione di compiti a casa *AI-resilient* con Gemini, *Patto di classe sull'IA* e *Scheda informativa per le famiglie*.
2. **Modulo Extra B — *Gestione della prova orale inclusiva con il supporto di Gemini e NotebookLM*** *(segnalato nell'Incontro 5)*: scalette "semi-mute", domande progressive **LOTS → HOTS**, allenamento all'orale con *Mappe Mentali* e *Audio Overview* di NotebookLM, preparazione al colloquio d'esame di 3ª media e **Griglia di valutazione della prova orale (Anderson & Krathwohl × KSM)**.

---

## 9. Mappa dei Materiali del Progetto

1. **Incontro 1 (4h — Accessibilità, autonomia e studio)**:
   * `Incontro_1/Incontro_1_Presentazione_Aula.html` (Slide deck interattivo per la lezione in laboratorio);
   * `Incontro_1/Incontro_1_Slide_Visualizzazione_Aula.md` (Traccia visuale e note di regia su 4 ore);
   * `Incontro_1/Incontro_1_Dispensa_Studio_Approfondito.md` (Manuale discorsivo di approfondimento con link esterni su tutti i termini tecnici, Glossario e Valutazione KSM delle fonti).
2. **Incontro 2 (4h — VerifichIAmo con l'IA Parte I: LOTS → HOTS e Verifiche UDL Multilivello)**:
   * `Incontro_2/Incontro_2_Presentazione_Aula.html` (Slide deck interattivo per la lezione in laboratorio);
   * `Incontro_2/Incontro_2_Slide_Visualizzazione_Aula.md` (Traccia visuale e note di regia su 4 ore);
   * `Incontro_2/Incontro_2_Dispensa_Studio_Approfondito.md` (Manuale discorsivo di approfondimento con link esterni, Glossario e Valutazione KSM delle fonti).
3. **Incontri 3, 4 e 5 (4h ciascuno)** *(da produrre con la medesima doppia struttura: Presentazione d'aula + Dispensa di approfondimento con link tecnici)*.
4. **Asset Condivisi per le Presentazioni d'Aula**:
   * `assets/presentazione.css` (Foglio di stile condiviso per tutti gli incontri);
   * `assets/presentazione.js` (Script condiviso di navigazione, schermo intero e copia prompt).
5. **Materiali Trasversali**:
   * `Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md` (30 esempi mappati sui 5 incontri);
   * `Materiali_Trasversali/02_Schede_Operative_5_Lavori_Pratici.md` (Schede operative dei **5 Lavori Pratici dei 5 incontri**, ciascuno articolato in **Fase A nel Blocco 1** e **Fase B nel Blocco 2**);
   * `Materiali_Trasversali/03_Kit_Privacy_GDPR_e_Strumenti_Locali.md`.
6. **Moduli Aggiuntivi Facoltativi**:
   * `Moduli_Extra/Modulo_Extra_A_Uso_Etico_IA_Alunni_Casa.md`;
   * `Moduli_Extra/Modulo_Extra_B_Prova_Orale_Inclusiva.md`.
