# Analisi Operativa delle Parti Pratiche (5 Incontri) e Proposta di Ristrutturazione Progressiva a Step

## Scopo del Documento
Analisi critica dei **5 Lavori Pratici** definiti in [02_Schede_Operative_5_Lavori_Pratici.md](Materiali_Trasversali/02_Schede_Operative_5_Lavori_Pratici.md) e nel [Syllabus Master](00_Progetto_Corso_Valutare_per_Crescere.md), pensata per docenti della Scuola Secondaria di I grado con competenze IA eterogenee (*da nulla a media*) in laboratorio informatico pomeridiano (`5 × 4h`).

Per ciascun incontro sono evidenziati:
1. i **colli di bottiglia operativi** in aula (tempi morti, sovraccarico cognitivo, salti tecnici troppo bruschi);
2. una **proposta di scomposizione in micro-step progressivi** (a difficoltà crescente, con checkpoint verificabili);
3. la **decisione richiesta** prima di applicare modifiche ai materiali ufficiali.

---

## Quadro Riepilogativo delle 10 Osservazioni

| ID | Incontro | Criticità Rilevata | Proposta di Miglioramento |
| :---: | :---: | :--- | :--- |
| **O1.1** | Incontro 1 (Fase 1A) | 30' troppo stretti per principianti assoluti; rischio perdita tempo nella ricerca del testo | Scomposizione in **3 micro-step (5' + 15' + 10')** con riscaldamento *"Prompt ingenuo vs R-C-N-A-F"* + cartella di **testi campione pronti** |
| **O1.2** | Incontro 1 (Fase 1B) | Tempi di attesa durante la generazione dell'*Audio Overview* su 20–25 PC simultanei | **Inversione dell'ordine degli step**: lanciare subito l'Audio Overview in background (Step 1), poi fare Mappa Mentale e chat mentre l'audio elabora |
| **O2.1** | Incontro 2 (Fase 2B) | Mega-prompt unico per 3 versioni × 6 quesiti + correttorio: alto rischio di output troncati e controllo difficile | **Prompt Chaining in 3 step**: Step 1 genera e valida solo Versione B → Step 2 genera A e C parallele + rifinitura Canvas → Step 3 crea la Skill |
| **O2.2** | Incontro 2 (Fase 2A) | Docenti sprovvisti in laboratorio di una vecchia verifica in PDF/foto | Predisporre una cartella Drive con **4 Verifiche Tradizionali Campione** (Lettere, STEM, Lingue, Tecnico-Artistiche) per partire al minuto zero |
| **O3.1** | Incontro 3 (Fase 3A) | La tabella esportata da Gemini in Google Fogli **non è importabile direttamente** nelle Griglie di Classroom senza il template ufficiale | **3 step**: Step 1 Rubrica KSM in Fogli → Step 2 Audit descrittori (zero avverbi vaghi) + copia opzionale nel **Template ufficiale Classroom** → Step 3 Autovalutazione |
| **O3.2** | Incontro 3 (Fase 3B) | Simulare 3 profili astratti + 3 micro-attività tutte insieme rischia output generici e poco spendibili | **3 step**: Step 1 test su **1 errore reale** della propria classe (calibrazione tono) → Step 2 estensione ai 3 profili K/S/M → Step 3 **1 sola micro-attività** ma curata e pronta da stampare |
| **O4.1** | Incontro 4 (Fase 4A) | Generare 10 quesiti senza fase esplicita di revisione dei distrattori può lasciare trabocchetti DSA/NAI | **3 step**: Step 1 genera 10 quesiti in Fogli (20') → Step 2 **Audit dei distrattori** in coppia (15') → Step 3 test importazione rapida su Wordwall/Quizizz (15') |
| **O4.2** | Incontro 4 (Fase 4B) | Inserire a mano 6 quesiti + feedback + immagini in Google Moduli richiede 35–40' di copia-incolla meccanico | **3 step**: Step 1 **Mini-Modulo Pilota da 4 quesiti** (20') → Step 2 **1 sola ramificazione condizionale** guidata (20') → Step 3 **Test incrociato "lato studente"** in coppia (15') |
| **O5.1** | Incontro 5 (Fase 5A) | Cercare un video YouTube con trascrizione attiva + gestire 3 piattaforme diverse in 50' disperde il tempo | **Mini-playlist di video già testati** (5') + **Step 1 unificato su NotebookLM** per generare le domande con minutaggio (20') + **Step 2 scelta strumento** Moduli (Base) o Edpuzzle/Lumi (Approfondimento) (25') |
| **O5.2** | Incontro 5 (Fase 5B) | La Fase 5B produce una "Scheda Regia" solo testuale, senza provare dal vivo l'assegnazione differenziata su Classroom | **3 step**: Step 1 Scheda Regia (10') → Step 2 **Simulazione pratica in una Classroom di prova** dell'assegnazione differenziata "invisibile" (15') → Step 3 Peer-Review con Checklist a 5 semafori (20') |

---

## Analisi Dettagliata Incontro per Incontro

### Incontro 1 — Lavoro Pratico 1 (*Pacchetto di Studio Accessibile*)
* **Attuale**: Fase 1A (`30'`) in blocco unico + Fase 1B (`45'`) sequenziale (Mappa → Audio → Chat).
* **Proposta progressiva**:
  * **Fase 1A (`30'`)**:
    * *Step 1A.1 (`5'` — Riscaldamento)*: prendi un testo tuo (o dalla cartella *Testi Campione* del formatore) e lancia un prompt generico di 1 riga per osservare i limiti dell'IA senza guida.
    * *Step 1A.2 (`15'` — Ingegneria del Prompt)*: copia il Profilo Funzionale Anonimizzato + Prompt Template 1 (`R-C-N-A-F`) su Gemini (Binario Approfondimento: da foto/PDF in Canvas).
    * *Step 1A.3 (`10'` — Validazione & Accessibilità)*: controllo *Human-in-the-Loop*, **Esporta in Documenti**, applica *Lexend 12 pt / interlinea 1,5 / sinistra* e salva in `01_Incontro1_Studio_Accessibile`.
  * **Fase 1B (`45'`) — Ordine anti-attesa**:
    * *Step 1B.1 (`5'`)*: carica la scheda/PDF (+ link YouTube) su **NotebookLM** e **avvia subito l'Audio Overview personalizzato** in background.
    * *Step 1B.2 (`15'`)*: mentre l'audio elabora, genera la **Mappa Mentale**, verifica i nodi, scarica il PNG e incollalo in cima al Documento Google.
    * *Step 1B.3 (`15'`)*: genera nella chat del taccuino la **Tabella comparativa** e verifica almeno 2 citazioni numerate cliccabili.
    * *Step 1B.4 (`10'`)*: ascolta i primi 60 secondi dell'Audio Overview ormai pronto e salvalo nella cartella Drive.

---

### Incontro 2 — Lavoro Pratico 2 (*Radiografia e Verifica UDL a 3 Livelli*)
* **Attuale**: Fase 2A (`30'`) + Fase 2B (`55'`) con un unico mega-prompt per 3 versioni + correttorio + Skill.
* **Proposta progressiva**:
  * **Fase 2A (`30'`)**:
    * *Step 2A.1 (`5'`)*: carica la tua verifica (o scegli 1 delle **4 Verifiche Campione** dalla cartella Drive del corso).
    * *Step 2A.2 (`15'`)*: lancia il Prompt di Radiografia Tassonomica su Gemini.
    * *Step 2A.3 (`10'`)*: confronta con il collega di banco la % LOTS vs HOTS e individua i 2 interventi prioritari.
  * **Fase 2B (`55'`) — Prompt Chaining (costruzione incrementale)**:
    * *Step 2B.1 (`20'` — Cuore della prova)*: attiva Gemini *Thinking* e genera **solo la Versione B (Standard)** (6 quesiti 40/40/20 con Q5 *Caccia all'errore*) + Correttorio `[A-D][1-6]`; esegui subito il controllo calcoli/contenuti.
    * *Step 2B.2 (`20'` — Differenziazione UDL)*: nella stessa chat chiedi *"Sulla base della Versione B validata, genera la Versione A (Facilitata/Equipollente con scaffolding) e la Versione C (Potenziamento)"*; rifinisci 1–2 quesiti in **Canvas** ed **Esporta in Documenti** (`02_Incontro2_Verifica_UDL_Multilivello`).
    * *Step 2B.3 (`15'` — Automazione / Approfondimento)*: salva le istruzioni nella tua **Skill disciplinare permanente**.

---

### Incontro 3 — Lavoro Pratico 3 (*Rubrica KSM, Autovalutazione e Feedback*)
* **Attuale**: Fase 3A (`40'`) genera rubrica + autovalutazione + esporta in Fogli (dichiarato pronto per Classroom); Fase 3B (`45'`) simula 3 profili + 3 feedback + 3 micro-attività.
* **Proposta progressiva**:
  * **Fase 3A (`40'`)**:
    * *Step 3A.1 (`15'`)*: genera la Rubrica KSM (K 35%, S 40%, M 25%) con Gemini ed **Esporta in Fogli**.
    * *Step 3A.2 (`15'`)*: **Audit dei descrittori** (elimina eventuali avverbi vaghi *"poco/abbastanza"*, verifica la tutela degli strumenti compensativi) + *opzionale*: copia i descrittori nel **Template Fogli ufficiale di Google Classroom** fornito dal formatore.
    * *Step 3A.3 (`10'`)*: genera la **Mini-Scheda di Autovalutazione Studente** in prima persona.
  * **Fase 3B (`45'`)**:
    * *Step 3B.1 (`10'` — Calibrazione reale)*: descrivi **1 errore reale frequente** della tua materia (anonimo) e genera il primo feedback *feed-forward*, regolando il tono per ragazzi di 11–14 anni.
    * *Step 3B.2 (`20'` — Kit 3 profili)*: estendi la generazione ai 3 profili tipici (Asse K, Asse S, Asse M).
    * *Step 3B.3 (`15'` — Recupero pronto all'uso)*: scegli il profilo più frequente nella tua classe e genera **1 sola Micro-Attività di Recupero da 10'** curata, impaginata in *Lexend* e salvata in `03_Incontro3_Rubrica_KSM_e_Feedback`.

---

### Incontro 4 — Lavoro Pratico 4 (*Banca Quesiti in Fogli e Quiz Digitale*)
* **Attuale**: Fase 4A (`50'`) genera 10 quesiti in Fogli; Fase 4B (`55'`) costruisce Google Modulo da 6 quesiti + feedback + 2 immagini + ramificazione + Wordwall/Quizizz.
* **Proposta progressiva**:
  * **Fase 4A (`50'`)**:
    * *Step 4A.1 (`20'`)*: genera con Gemini *Thinking* la banca di 10 quesiti (4 LOTS, 4 Ponte, 2 HOTS) ed **Esporta in Fogli**.
    * *Step 4A.2 (`15'` — Audit dei distrattori)*: in coppia, elimina ogni doppia negazione o distrattore visivamente confondente per DSA/NAI; assicurati che ogni distrattore corrisponda a un errore tipico reale.
    * *Step 4A.3 (`15'` — Gamification lampo)*: copia-incolla la tabella di Fogli in **Wordwall** o **Quizizz** (senza timer) per vedere la resa immediata.
  * **Fase 4B (`55'`)**:
    * *Step 4B.1 (`20'` — Mini-Modulo Pilota)*: crea un Google Modulo Quiz snello con **4 quesiti scelti** (1 LOTS, 2 Ponte, 1 HOTS), 1 immagine di supporto, suggerimenti e feedback formativi (evitando 40' di copia-incolla ripetitivo).
    * *Step 4B.2 (`20'` — Ramificazione guidata)*: costruisci **1 solo bivio condizionale** (*Sezione 1 Domanda Filtro → Sezione 2 Rinforzo guidato / Sezione 3 Sfida HOTS*).
    * *Step 4B.3 (`15'` — Collaudo in coppia)*: scambia il link del Modulo con il collega di banco; ciascuno compila il quiz dell'altro **sbagliando apposta** per testare il percorso di rinforzo e i feedback.

---

### Incontro 5 — Lavoro Pratico 5 (*Verifica su Video/Materiali e Kit Finale*)
* **Attuale**: Fase 5A (`50'`) scelta libera tra 3 strumenti + ricerca video; Fase 5B (`45'`) Scheda Regia testuale + Peer-Review.
* **Proposta progressiva**:
  * **Fase 5A (`50'`)**:
    * *Step 5A.1 (`5'` — Selezione video)*: usa un tuo link YouTube (3–5 min) oppure scegli dalla **Mini-Playlist di Video Testati** del corso (già verificati con trascrizione attiva).
    * *Step 5A.2 (`20'` — Generazione unificata su NotebookLM)*: carica video + dispensa in NotebookLM e genera le **5 domande progressive LOTS → HOTS ancorate al minutaggio**.
    * *Step 5A.3 (`25'` — Messa in opera interattiva)*: inserisci le domande in **Google Moduli + Video YouTube** (*Binario Base*, 100% Workspace) oppure in **Edpuzzle / Lumi H5P** (*Binario Approfondimento*).
  * **Fase 5B (`45'`)**:
    * *Step 5B.1 (`10'` — Scheda Regia)*: genera con Gemini la **Scheda Regia in 1 Pagina** (Prima / Durante / Dopo la verifica).
    * *Step 5B.2 (`15'` — Simulazione Classroom dal vivo)*: in una **Google Classroom di prova** (con 2 studenti fittizi), simula l'**assegnazione differenziata "invisibile"** caricando Versione A e Versione B a destinatari distinti.
    * *Step 5B.3 (`20'` — Peer-Review)*: revisione incrociata in coppia dell'intero Kit tramite la **Checklist Finale a 5 Semafori**.
