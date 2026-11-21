# Modulo Aggiuntivo Facoltativo B

## Gestione della Prova Orale Inclusiva con il Supporto di Google Gemini e NotebookLM
### *Dall'interrogazione programmata al Colloquio dell'Esame di Stato di 3ª Media (con Scalette "Mute", Domande LOTS → HOTS e Griglia di Valutazione KSM)*

> [!NOTE]
> **Perché questo Modulo Extra?**  
> Nella Scuola Secondaria di Primo Grado la **prova orale** è spesso prevista nei PDP (L. 170/2010) e nei PEI (L. 104/1992) come misura compensativa o integrativa delle prove scritte. Tuttavia, senza una progettazione strutturata, l'interrogazione orale può trasformarsi in una barriera altrettanto severa a causa dell'**ansia da prestazione**, della **fragilità nella memoria di lavoro** o della difficoltà di **recupero lessicale rapido (anomia)**. Questo modulo mostra come usare **Google Gemini** e **Google NotebookLM** per rendere l'orale realmente accessibile, equo e formativo.

---

## 1. Le Tre Barriere Nascoste dell'Interrogazione Orale nella Scuola Media

1. **Il "foglio bianco vocale" (domanda aperta troppo vasta)**: iniziare un'interrogazione chiedendo *"Parlami della Rivoluzione Industriale"* o *"Dimmi tutto quello che sai sul sistema solare"* manda in blocco gli studenti con DSA, ADHD o ansia, perché richiede simultaneamente di selezionare i contenuti, metterli in ordine logico e trovare il lessico specifico.
2. **La memoria di lavoro sotto pressione**: molti alunni conoscono il concetto (`B2 — Comprendere`), ma dimenticano il nome proprio, la data o il termine tecnico nel momento di tensione (`A1 — Ricordare`), bloccando l'intera esposizione se non hanno sott'occhio una mappa o una parola-chiave di innesco.
3. **La soggettività della valutazione orale ("a impressione")**: senza una griglia trasparente condivisa prima della prova, l'orale rischia di premiare solo la scioltezza verbale estemporanea, penalizzando chi parla più lentamente, chi ha Italiano L2 (NAI) o chi utilizza legittimamente gli schemi compensativi previsti dal PDP/PEI.

---

## 2. Progettare con Google Gemini "Mappe/Scalette Mute" e Interrogazioni Programmate (LOTS → HOTS)

Una delle strategie più efficaci per l'orale inclusivo è sostituire la mappa "piena di testo" (che porta l'alunno a leggere passivamente invece di esporre) con una **Scaletta Visiva "Semi-Muta" per Parole-Gancio** accompagnata da **Domande-Guida progressive (LOTS → HOTS)** consegnate in anticipo per l'interrogazione programmata.

### Prompt Template 1 — Generare la Scaletta "Semi-Muta" per l'Orale e le Domande-Guida (su Gemini)

```text
[R] Agisci come docente esperto nella Scuola Secondaria di Primo Grado e specialista in prove orali inclusive secondo la normativa su DSA/BES e l'UDL.
[C] Classe [1ª / 2ª / 3ª] media — Materia: [MATERIA] — Argomento dell'interrogazione orale: [ARGOMENTO].
[N] Progetta un "Kit per l'Interrogazione Orale Programmata" che accompagni lo studente lungo la scala cognitiva di Anderson & Krathwohl (LOTS -> HOTS) senza ridursi a una ripetizione a memoria.
[A] Per supportare studenti con fragilità nel recupero lessicale rapido, memoria di lavoro fragile o ansia da esposizione:
1. Costruisci una SCALETTA "SEMI-MUTA" PER L'ORALE (ammessa sul banco durante il colloquio come strumento compensativo):
   - divisa in 4 blocchi logici numerati (1. Punto di partenza/Definizione; 2. Come funziona/Sviluppo; 3. Cause ed Effetti; 4. Collegamento/Esempio);
   - ogni blocco deve contenere SOLO le 3 parole-chiave "gancio" in GRASSETTO e 1 freccia logica (niente frasi intere da leggere!), più un piccolo box con le 4 formule/date/termini difficili consentiti dal PDP.
2. Costruisci la TRACCIA DI 4 DOMANDE-GUIDA PROGRESSIVE (che lo studente può usare a casa per allenarsi e che il docente userà nel colloquio):
   - Domanda 1 (Rompighiaccio - LOTS 1/2 [A1, B2]): domanda chiusa o a scelta guidata per partire con sicurezza e rompere il ghiaccio;
   - Domanda 2 (Esposizione centrale - Ponte 2/3 [B2, C3]): spiegare il fenomeno seguendo i blocchi 2 e 3 della scaletta, con 2 connettivi suggeriti ("Prima di tutto...", "Di conseguenza...");
   - Domanda 3 (Confronto - HOTS 4 [B4]): mettere a confronto due aspetti usando la scaletta;
   - Domanda 4 (Riflessione critica - HOTS 5 [B5, D5]): "Secondo te, perché... / Quale errore farebbe chi pensasse che...".
[F] Impagina la Scaletta Semi-Muta su una singola pagina pulita pronta per "Esporta in Documenti", seguita dalla scheda delle 4 Domande-Guida.
```

---

## 3. Allenarsi all'Orale con Google NotebookLM (Mappe Mentali e Audio Overview)

Per molti studenti di 11–14 anni la difficoltà maggiore non è il momento dell'interrogazione in classe, ma **non avere a casa qualcuno che li ascolti o li aiuti a impostare il discorso orale**.

Ecco il flusso in 3 passaggi che il docente può predisporre in 5 minuti con **Google NotebookLM** (`notebooklm.google`) e condividere su **Google Classroom**:

1. **La Mappa Mentale come "Bussola dell'Orale"**:
   * Il docente carica in NotebookLM i materiali dell'unità didattica e clicca su **"Mappa mentale"**.
   * Scarica l'immagine PNG della mappa e la allega su Classroom come **traccia visiva ufficiale** ammessa durante il colloquio orale: lo studente studia a casa guardando la stessa mappa che avrà sul banco durante l'interrogazione!
2. **L'Audio Overview come "Modello di Esposizione Orale"**:
   * Uno studente con dislessia o con Italiano L2 spesso non sa *come suona* un discorso ben articolato su un argomento di Storia, Scienze o Arte.
   * Il docente genera in NotebookLM l'**Audio Overview (Podcast a due voci in italiano)** cliccando prima su *"Personalizza"* con questa istruzione:
     > *"Simulate un dialogo chiaro di 5 minuti in cui un insegnante fa 4 domande progressive di un'interrogazione orale di [1ª/2ª/3ª] media su questo argomento e uno studente preparato risponde con frasi semplici, ben collegate e usando correttamente i termini chiave."*
   * Caricando il file audio su Classroom, l'alunno può ascoltarlo in cuffia mentre guarda la Mappa Mentale, acquisendo sicurezza nella pronuncia dei termini difficili e nell'organizzazione del discorso!

---

## 4. Preparare il Colloquio Pluridisciplinare dell'Esame di Stato di 3ª Media con Gemini

In 3ª media, la costruzione del percorso pluridisciplinare (o la preparazione a collegare uno **spunto/stimolo iniziale** — un'immagine, un breve testo, un grafico, un oggetto tecnico — a più discipline durante il colloquio d'esame) può essere fortemente agevolata con **Google Gemini**:

### Prompt Template 2 — Progettare Collegamenti Interdisciplinari Accessibili e Non Forzati per l'Esame di 3ª Media

```text
[R] Agisci come coordinatore di una classe 3ª della Scuola Secondaria di Primo Grado per la preparazione al Colloquio dell'Esame di Stato conclusivo del primo ciclo.
[C] Classe 3ª media (13-14 anni).
[N] A partire dallo spunto/nucleo tematico centrale "[INSERISCI TEMA O IMMAGINE/TESTO STIMOLO, es. L'Energia e il Progresso / La Libertà / Il Mare e il Viaggio]", proponi una mappa di collegamenti interdisciplinari autentici, logici e non forzati con i programmi di 3ª media per: Italiano, Storia, Geografia, Scienze/Matematica, Lingue Straniere (Inglese e 2ª Lingua), Tecnologia, Arte e Immagine, Musica, Educazione Fisica ed Educazione Civica.
[A] Per ogni disciplina fornisci un "Ponte Discorsivo per l'Orale" pensato per studenti che faticano a passare da una materia all'altra durante il colloquio:
- indica l'argomento specifico di 3ª media;
- scrivi la "Frase-Ponte" esatta e naturale che lo studente può pronunciare per introdurre il collegamento (es. "Questo stesso problema dell'energia lo ritroviamo in Tecnologia quando osserviamo...");
- indica 3 parole-chiave da inserire nel nodo della mappa concettuale per l'esame.
[F] Restituisci una tabella chiara (Disciplina | Argomento 3ª media | Frase-Ponte per il discorso orale | 3 Parole-chiave per la mappa) pronta per "Esporta in Documenti" o "Esporta in Fogli".
```

---

## 5. Griglia di Valutazione della Prova Orale Inclusiva (Anderson & Krathwohl × Criterio KSM)

La seguente griglia di valutazione della prova orale è strutturata rigorosamente secondo la **Tassonomia di Anderson e Krathwohl (2001)** integrata con il **Criterio KSM** (*Knowledge 35%, Skills 40%, Mindset/Metacognition & Mastery 25%*). È progettata per valutare con piena equità sia i colloqui standard sia le prove orali svolte con l'ausilio di **mappe/scalette compensative** (PDP/PEI), ed è pronta per essere importata nelle **Griglie di Google Classroom**.

| Asse KSM e Peso | Indicatore e Codice Tassonomico `[A-D][1-6]` | Livello 1: Iniziale *(LOTS parziale — Voto 4–5 / D)* | Livello 2: Base *(LOTS consolidato — Voto 6 / C)* | Livello 3: Intermedio *(Ponte LOTS → HOTS — Voto 7–8 / B)* | Livello 4: Avanzato *(HOTS + Mastery — Voto 9–10 / A)* |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **K — Knowledge** *(Conoscenze Fattuali `A` e Concettuali `B` — Peso 35%)* | **K1. Padronanza dei nuclei concettuali e comprensione delle relazioni** `[A1, B2 → B4]` | **[A1–B1 frammentario]** Rievoca solo informazioni isolate anche se guidato dalle domande-stimolo e dalla mappa; fatica a spiegare il significato dei concetti di base. | **[A1–B2]** Espone i fatti e i concetti essenziali dell'argomento rispondendo correttamente alle domande-guida (anche consultando le parole-chiave sulla mappa compensativa). | **[B2–B4]** Spiega in modo chiaro e completo i concetti e le relazioni di causa-effetto; confronta fenomeni o argomenti con buona proprietà terminologica. | **[B4–B6]** Padroneggia con sicurezza e rigore l'intero quadro concettuale; confronta criticamente i temi e propone collegamenti interdisciplinari pertinenti e originali. |
| **S — Skills** *(Abilità Procedurali ed Espositive `C` — Peso 40%)* | **S1. Organizzazione logica del discorso, applicazione di esempi e uso efficace dei supporti** `[C2, C3 → C5]` | **[C1–C2 guidato]** Espone in modo disorganico o si limita a leggere passivamente i nodi dello schema senza riuscire a costruire frasi compiute anche se supportato. | **[C3 esecutivo]** Segue l'ordine logico della scaletta/mappa per strutturare un discorso lineare e comprensibile, portando esempi semplici studiati in classe. | **[C3–C4]** Utilizza la mappa come traccia dinamica per argomentare con fluidità e coerenza; applica le regole o i concetti a esempi pratici e risponde con pertinenza alle domande. | **[C4–C6]** Articola un'esposizione brillante, strutturata ed efficace; seleziona esempi mirati, adatta il registro comunicativo e integra eventuali materiali visivi/multimediali con piena padronanza. |
| **M — Mindset, Metacognition & Mastery** *(Conoscenza Metacognitiva `D` — Peso 25%)* | **M1. Autonomia espositiva, spirito critico e autocorrezione in itinere** `[D2, D3 → D6]` | **[D1–D2 passivo]** Necessita di continui interventi del docente per proseguire; non riconosce eventuali contraddizioni nel proprio discorso anche quando vengono segnalate. | **[D2–D3 base]** Mantiene il filo del discorso nei passaggi principali con minimi spunti del docente; se guidato a notare un'imprecisione, riesce a rettificarla. | **[D4–D5]** Gestisce l'esposizione con autonomia e consapevolezza; si accorge di eventuali imprecisioni autocorreggendosi ed esprime una valutazione motivata sui temi trattati. | **[D5–D6]** Manifesta piena padronanza emotiva e metacognitiva; argomenta giudizi critici personali, riflette sul proprio percorso di studio e valorizza gli spunti del colloquio per rielaborazioni creative. |

---

### Mini-Scheda di Autovalutazione Rapida Post-Orale per lo Studente (*Valutare per crescere*)
*(Da compilare in 2 minuti al termine dell'interrogazione orale)*

1. **Cosa ha funzionato bene oggi nella mia esposizione orale?** *(Es. Ho spiegato bene l'esempio / Ho usato bene la mia mappa senza blocchi...)*
2. **La mappa o la scaletta che avevo preparato mi ha aiutato nei punti giusti, oppure la prossima volta voglio cambiarle qualcosa?**
3. **Un consiglio che mi do per la prossima interrogazione orale è:** `[____________________________________________________]`
