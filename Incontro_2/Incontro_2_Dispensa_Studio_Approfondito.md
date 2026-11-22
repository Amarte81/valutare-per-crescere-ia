# Dispensa di Studio e Approfondimento — Incontro 2 di 5 (4 ore)

## VALUTARE PER CRESCERE
### *VerifichIAmo con l'IA (Parte I): governare Google Gemini (Modelli Thinking, Multimodalità, Canvas e Gem) con la scala LOTS → HOTS per progettare Verifiche UDL Multilivello*

> [!NOTE]
> **Come utilizzare questa dispensa**  
> Questo documento costituisce la **parte di studio approfondito e discorsivo** dell'**Incontro 2 (Giorno 2 di 5 · 4 ore)**, dedicato alla prima parte del modulo centrale *"VerifichIAmo con l'Intelligenza Artificiale"* (`4h` su `10/20` del corso). Ogni **termine tecnico** (tecnologico, docimologico e normativo) è spiegato nel testo e dotato di un **collegamento esterno autorevole** per approfondire. Tutti i richiami agli **esempi disciplinari dell'Incontro 2** sono linkati direttamente al [Ricettario dei 30 Esempi](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md). In chiusura trovate il **Glossario Tecnico Linkato** (Capitolo 6) e la **Valutazione delle Fonti secondo il Criterio KSM** (Capitolo 7).

---

## Capitolo 1 — Dal Prompt di Studio al Prompt di Verifica: Correggere il "Bias Mnemonico" dell'IA

### 1.1 Perché i prompt generici producono verifiche inique
Quando un docente chiede a un [Modello Linguistico di Grandi Dimensioni (LLM)](https://it.wikipedia.org/wiki/Modello_linguistico_di_grandi_dimensioni) un prompt generico del tipo *"Creami una verifica sul Teorema di Pitagora o sul Feudalesimo per la scuola media, e fai una versione semplificata per DSA"*, emergono quasi sempre **tre difetti strutturali**:

1. **Sbilanciamento verso la memoria pura (`LOTS 1 — Ricordare`)**: l'IA tende a generare dal 70% all'80% di domande nozionistiche (*"In che anno...", "Definisci...", "Elenca..."*). In termini di [docimologia](https://it.wikipedia.org/wiki/Docimologia), questo misura soprattutto la capacità di ritenzione meccanica a breve termine e penalizza proprio gli studenti con [DSA (Legge 170/2010)](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170) o fragilità nella [memoria di lavoro (*working memory*)](https://it.wikipedia.org/wiki/Memoria_di_lavoro).
2. **Semplificazione cognitiva al ribasso per i BES**: senza istruzioni precise, l'IA "facilita" la verifica per alunni con BES eliminando i problemi di ragionamento e lasciando solo micro-quesiti ripetitivi. Ciò viola il principio fondante dell'[Universal Design for Learning (UDL)](https://udlguidelines.cast.org/): **l'accessibilità deve rimuovere le barriere strumentali (grafiche, lessicali, procedurali), non privare lo studente del diritto di ragionare**.
3. **Consegne ambigue e sovraccarico linguistico**: frasi con più subordinate, [doppie negazioni](https://it.wikipedia.org/wiki/Doppia_negazione) (*"Quale tra le seguenti affermazioni NON è estranea a..."*) o richieste multiple accorpate in un unico punto (*"Spiega la causa, fai due esempi e confronta con il secolo precedente"*), che confondono alunni con [ADHD](https://www.issalute.it/index.php/la-salute-dalla-a-alla-z-menu/a/adhd-disturbo-da-deficit-di-attenzione-e-iperattivita) o [Italiano L2 (NAI)](https://www.mim.gov.it/studenti-con-cittadinanza-non-italiana).

### 1.2 Il Framework `R-C-N-A-F` applicato alla progettazione delle verifiche
Per governare [Google Gemini](https://gemini.google.com/) in modo rigoroso, nell'Incontro 2 estendiamo il framework di [Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it) in 5 punti (`R-C-N-A-F`) introducendo nella sezione **[N] Nuclei e Scala Cognitiva** vincoli espliciti di bilanciamento **LOTS → HOTS** e nella sezione **[A] Accessibilità** il parallelismo su **3 livelli UDL** (*Versione A Facilitata/Equipollente*, *Versione B Standard*, *Versione C Potenziamento*).

---

## Capitolo 2 — Governare i Modelli di Ragionamento (*Thinking*) con la Scala LOTS → HOTS e il Criterio KSM

### 2.1 Che cos'è un Modello di Ragionamento (*Thinking / Reasoning Model*) in Gemini
Una delle novità più significative dei moderni modelli di Gemini è la modalità **[Thinking (Ragionamento)](https://ai.google.dev/gemini-api/docs/thinking?hl=it)**. Mentre un modello rapido (*Flash*) genera la risposta di getto token dopo token, un modello di ragionamento dedica una fase preliminare a costruire una **[catena di pensiero (*Chain-of-Thought*)](https://it.wikipedia.org/wiki/Prompt_engineering)** interna in cui:
* verifica che i calcoli aritmetici, algebrici o geometrici di un problema di Matematica siano esatti (es. controllo che le terne pitagoriche producano radici intere esatte, come nell'[Esempio #08 — Matematica](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-08));
* controlla la coerenza incrociata tra più vincoli contemporanei (es. 6 quesiti distribuiti esattamente al 40% LOTS, 40% Ponte, 20% HOTS replicati in 3 versioni parallele);
* progetta errori simulati davvero plausibili dal punto di vista didattico per le attività di *"Caccia all'errore"*.

### 2.2 La Tassonomia di Anderson & Krathwohl (2001) e il Criterio KSM nella verifica
La **[Tassonomia di Anderson e Krathwohl (2001)](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy#Revised_taxonomy_(2001))** — revisione bidimensionale della classica [Tassonomia di Bloom](https://it.wikipedia.org/wiki/Tassonomia_di_Bloom) — incrocia **4 Dimensioni della Conoscenza** (`A` Fattuale, `B` Concettuale, `C` Procedurale, `D` Metacognitiva) con **6 Processi Cognitivi** ordinati lungo la progressione **[LOTS (*Lower Order Thinking Skills*)](https://it.wikipedia.org/wiki/Tassonomia_di_Bloom) → [HOTS (*Higher Order Thinking Skills*)](https://en.wikipedia.org/wiki/Higher-order_thinking)**.

Integrandola con il **Criterio KSM** (*Knowledge, Skills, Mindset/Metacognition & Mastery*), possiamo dettare a Gemini una **ricetta di bilanciamento ideale** per una verifica di 45–50 minuti nella Scuola Secondaria di Primo Grado:

| Quota della Verifica | Livelli Anderson & Krathwohl | Asse KSM prevalente | Funzione pedagogica nella verifica inclusiva |
| :---: | :--- | :--- | :--- |
| **~40%** *(es. 2 quesiti su 5/6)* | **LOTS**: `1. Ricordare` · `2. Comprendere` (`[A1, B1, B2]`) | **K — Knowledge** *(Il Sapere)* | Garantisce una **rampa di accesso** rassicurante all'inizio della prova: rompe l'ansia e verifica la comprensione dei nuclei essenziali (con banca parole/mappe nella versione facilitata). |
| **~40%** *(es. 2 quesiti su 5/6)* | **Ponte**: `3. Applicare` · `4. Analizzare` (`[C3, B4, C4]`) | **S — Skills** *(Il Saper Fare)* | Verifica se lo studente sa usare procedure, applicare regole a casi concreti o confrontare dati in tabella (*step-by-step* e tabelle semicompilate nella versione facilitata). |
| **~20%** *(es. 1–2 quesiti su 5/6)* | **HOTS**: `5. Valutare` · `6. Creare` (`[B5, C5, D4, D5, B6]`) | **M — Mindset & Metacognition** *(Il Saper Essere e Divenire)* | Attiva il pensiero critico e la [metacognizione](https://it.wikipedia.org/wiki/Metacognizione) di **tutti** gli alunni, rendendo accessibile il livello `5. Valutare` tramite la **"Caccia all'errore"**. |

### 2.3 Il superpotere inclusivo dell'Error Analysis ("Caccia all'errore") e dei Sentence Starters
Tra tutte le tipologie di quesiti **HOTS**, l'**[Analisi dell'Errore (*Error Analysis*)](https://en.wikipedia.org/wiki/Error_analysis_(mathematics))** — proposta in classe come *"Caccia all'errore"*, *"Il Detective Grammaticale"* ([Esempio #04](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-04)) o *"Lo Storico Cerca l'Anacronismo"* ([Esempio #14](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-14)) — è una delle strategie più inclusive ed efficaci nella fascia 11–14 anni:
* **Abbatte il blocco del foglio bianco**: lo studente non deve produrre da zero un lungo ragionamento scritto, ma osservare lo svolgimento di un personaggio immaginario e **individuare dove e perché si trova l'errore**.
* **Riduce lo stigma dell'errore**: analizzare l'errore di uno "studente immaginario" allena la capacità di autocorrezione (`[D4, C5]`) in modo giocoso e non giudicante.
* **Si combina perfettamente con i *Sentence Starters* (frasi-avvio guidate)**: fornire nella Versione Facilitata un incipit di risposta (*"L'errore si trova nel passaggio ___ perché..."*, *"Secondo me questo dettaglio storico è impossibile perché..."*) è una forma di [scaffolding didattico](https://it.wikipedia.org/wiki/Scaffolding) che sostiene chi ha disortografia o Italiano L2 senza suggerire la soluzione.

---

## Capitolo 3 — "Radiografia" Multimodale e Quadro Normativo: Prove Equipollenti vs Differenziate

### 3.1 Fare la "Radiografia" di una verifica esistente con Gemini Multimodale
Grazie alla [multimodalità nativa](https://cloud.google.com/use-cases/multimodal-ai?hl=it) di Gemini, il docente non deve mai ripartire da zero: può fotografare o caricare il [PDF](https://it.wikipedia.org/wiki/Portable_Document_Format) di una verifica degli anni precedenti e chiedere a Gemini una **tabella diagnostica** che evidenzi:
1. la mappatura `[A-D][1-6]` di ciascun quesito esistente;
2. la quota reale di domande `LOTS` rispetto a `HOTS`;
3. le barriere nascoste (frasi con più di 20 parole, doppie negazioni, consegne multiple non numerate, calcoli con decimali inutili che distolgono dall'obiettivo geometrico).

### 3.2 Prove Equipollenti vs Prove Differenziate (Normativa Italiana nella Secondaria di I Grado)
Quando si chiede a Gemini di generare una verifica multilivello, il docente deve conoscere con precisione la distinzione normativa prevista dal **[D.Lgs. 62/2017](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-04-13;62)** (valutazione nel primo ciclo), dalla **[Legge 170/2010 (DSA)](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170)** e dal **[Nuovo PEI (D.Lgs. 66/2017 e DI 182/2020)](https://www.mim.gov.it/inclusione-e-nuovo-pei)**:

| Tipologia di Prova | A chi si rivolge nella Secondaria di I grado | Caratteristiche progettuali da indicare nel Prompt a Gemini |
| :--- | :--- | :--- |
| **Prova Equipollente (Facilitata / Compensata)** | Alunni con **DSA (PDP)**, altri **BES / NAI** e alunni con **L. 104/92** che seguono una programmazione curricolare o per obiettivi minimi riconducibili alle Indicazioni Nazionali. | **Gli obiettivi di apprendimento e la dignità cognitiva restano gli stessi della classe**, ma cambiano i canali, i tempi o i supporti: riduzione quantitativa degli esercizi ripetitivi, consegne *step-by-step*, banca parole, formulari, mappe, tabelle semicompilate, numeri interi semplici, *sentence starters*. |
| **Prova Differenziata (Personalizzata sul PEI)** | Alunni con disabilità certificata (**L. 104/92**) il cui **PEI** prevede obiettivi didattici personalizzati e semplificati rispetto alla programmazione della classe. | Gli obiettivi sono tarati sul profilo specifico del PEI: nuclei essenziali concreti, sintassi lineare Soggetto-Verbo-Complemento, forte ancoraggio visivo, scelta guidata a 2–3 opzioni nettamente distinte e mediazione diretta dell'esempio svolto. |

---

## Capitolo 4 — Co-Progettare in Gemini Canvas, Creare il Proprio "Gem" e i 6 Esempi dell'Incontro 2

### 4.1 Lavorare in affiancamento con Gemini Canvas
**[Gemini Canvas](https://support.google.com/gemini/answer/16047329?hl=it)** trasforma la progettazione della verifica da un processo "tutto o niente" a un vero tavolo di lavoro editoriale:
* una volta generate le 3 versioni della verifica (`Versione A`, `Versione B`, `Versione C`), il docente può selezionare con il mouse **un singolo quesito** che risulta ancora troppo verboso o troppo semplice e chiedere direttamente sul riquadro contestuale: *"Elimina la doppia negazione in questa domanda"*, *"Aggiungi un esempio svolto prima del Punto 3"* oppure *"Sostituisci i numeri decimali con una terna pitagorica intera"*;
* al termine, il pulsante **"Esporta in Documenti"** trasferisce l'impaginazione pulita in [Google Documenti](https://support.google.com/docs/?hl=it), pronta per essere formattata in [Lexend](https://fonts.google.com/specimen/Lexend) (`12 pt`, interlinea `1,5`) e assegnata in modo differenziato e "invisibile" ai singoli studenti tramite [Google Classroom](https://edu.google.com/intl/ALL_it/workspace-for-education/products/classroom/).

### 4.2 Creare un "Gem" Disciplinare Permanente
I **[Gem di Google Gemini](https://support.google.com/gemini/answer/15235603?hl=it)** permettono di salvare un set permanente di **[istruzioni di sistema (*System Instructions*)](https://ai.google.dev/gemini-api/docs/system-instructions?hl=it)**. Un insegnante di Lettere, Matematica, Tecnologia o Arte può creare in 3 minuti il proprio Gem `"Progettista Verifiche UDL — [Mia Materia]"` incollando una sola volta la struttura `R-C-N-A-F`, la distribuzione LOTS → HOTS (40% / 40% / 20%), le regole *Easy-to-Read* e la richiesta dei codici `[A-D][1-6]`. Per tutto l'anno scolastico basterà aprire quel Gem e scrivere solo: *"Argomento: le leve (2ª media), 3 nuclei: fulcro, potenza, resistenza"* (o caricare la foto della pagina del libro) per ottenere subito la verifica a 3 livelli!

### 4.3 I 6 Esempi Disciplinari dell'Incontro 2 (con Collegamenti Diretti al Ricettario)
Per il laboratorio dell'Incontro 2 sono pronti **6 esempi completi** nel [Ricettario dei 30 Esempi](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md) (clicca su ciascun titolo per aprire il prompt pronto da copiare):

1. **[Esempio #03 — Italiano (3ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-03)**: Verifica UDL a 3 livelli di comprensione e analisi del testo narrativo (con righe numerate, *Caccia all'errore interpretativo* e *sentence starters*).
2. **[Esempio #04 — Italiano / Grammatica (2ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-04)**: Verifica inclusiva di Analisi Logica con *Box Bussola*, frasi già segmentate in sintagmi e l'esercizio HOTS *"Il Detective Grammaticale"*.
3. **[Esempio #08 — Matematica (2ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-08)**: Verifica UDL a 3 livelli sul Teorema di Pitagora con modello **Gemini *Thinking***, terne pitagoriche intere per la Versione A e *"Caccia all'errore matematico"*.
4. **[Esempio #14 — Storia (1ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-14)**: Verifica UDL sul Feudalesimo bilanciata LOTS → HOTS con linea del tempo compensativa e *"Lo Storico Cerca l'Errore (Anacronismi)"*.
5. **[Esempio #22 — Tecnologia (3ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-22)**: **Gemini Multimodale** su schema di centrale elettrica → verifica a 3 livelli con *"Caccia al guasto/errore tecnico"*.
6. **[Esempio #24 — Arte e Immagine (2ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-24)**: **Gemini Vision** per la lettura guidata di un'opera rinascimentale dalla descrizione (`LOTS`) al confronto critico e rielaborazione UDL (`HOTS`).

---

## Capitolo 5 — Validazione Critica (*Human-in-the-Loop*): Controllare l'Output Prima della Classe

Prima di stampare o pubblicare su Google Classroom una verifica generata con l'IA, il docente applica la **Checklist di Validazione Critica in 4 Punti** ([Human-in-the-Loop](https://en.wikipedia.org/wiki/Human-in-the-loop)):

1. **Verifica fattuale e matematica (Anti-[Allucinazioni](https://it.wikipedia.org/wiki/Allucinazione_(intelligenza_artificiale)))**: rileggere sempre il correttorio generato da Gemini, ricalcolare manualmente i risultati numerici e verificare che i riferimenti storici/letterari corrispondano esattamente al programma svolto in classe.
2. **Controllo della taratura evolutiva (11–14 anni)**: gli LLM tendono talvolta a usare un registro universitario o eccessivamente infantile; verificare che il lessico sia coerente con l'età media degli alunni.
3. **Controllo di accessibilità pragmatica e linguistica**: assicurarsi che Gemini non abbia inserito [ambiguità pragmatiche](https://it.wikipedia.org/wiki/Pragmatica), doppie negazioni o quesiti con due risposte plausibili contemporaneamente.
4. **Verifica di equità e assenza di [Bias](https://it.wikipedia.org/wiki/Bias_algoritmico)**: controllare che gli esempi quotidiani o i micro-scenari non contengano stereotipi di genere, culturali o socio-economici.

---

## Capitolo 6 — Glossario Ragionato dei Termini Tecnici dell'Incontro 2 (con Collegamenti Esterni)

| Termine Tecnico | Spiegazione sintetica per il docente | Collegamento esterno di approfondimento |
| :--- | :--- | :--- |
| **Ambiguità pragmatica / lessicale** | Difetto di formulazione di una domanda che ammette più interpretazioni o sottintesi culturali impliciti, penalizzando studenti NAI, DSA o nello spettro autistico. | [Wikipedia IT — Pragmatica linguistica](https://it.wikipedia.org/wiki/Pragmatica) |
| **D.Lgs. 62/2017** | Decreto legislativo italiano che disciplina la valutazione, la certificazione delle competenze e gli esami di Stato nel primo ciclo (inclusa la tutela di alunni con disabilità e DSA). | [Normattiva — Testo del D.Lgs. 13 aprile 2017, n. 62](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-04-13;62) |
| **Docimologia** | Scienza che studia i sistemi, i criteri e gli strumenti di valutazione scolastica per garantirne validità, affidabilità, trasparenza ed equità. | [Wikipedia IT — Docimologia](https://it.wikipedia.org/wiki/Docimologia) |
| **Doppia negazione** | Struttura sintattica (*"Quale non è scorretto..."*) che moltiplica il carico sulla memoria di lavoro e induce in errore anche chi conosce perfettamente l'argomento. | [Wikipedia IT — Doppia negazione](https://it.wikipedia.org/wiki/Doppia_negazione) |
| **Error Analysis ("Caccia all'errore")** | Strategia didattica e valutativa di livello HOTS (`5. Valutare`) in cui lo studente analizza una soluzione o un testo contenente un errore mirato per individuarlo, motivarlo e correggerlo. | [Wikipedia EN — Error analysis in education](https://en.wikipedia.org/wiki/Error_analysis_(mathematics)) |
| **Gem (Google Gemini)** | Assistente IA personalizzato che memorizza stabilmente le istruzioni di sistema del docente (materia, classe, regole UDL e LOTS→HOTS) per riutilizzarle tutto l'anno. | [Guida di Google Gemini — Creare e gestire i Gem](https://support.google.com/gemini/answer/15235603?hl=it) |
| **Gemini Canvas** | Interfaccia interattiva affiancata alla chat di Gemini che consente di selezionare e modificare singole frasi o quesiti senza rigenerare l'intera verifica. | [Guida di Google Gemini — Usare Canvas](https://support.google.com/gemini/answer/16047329?hl=it) |
| **Metacognizione** | Consapevolezza e capacità di riflettere sui propri processi di apprendimento, sugli errori commessi e sulle strategie più efficaci per migliorarsi (Dimensione `D` di Anderson & Krathwohl e Asse `M` del Criterio KSM). | [Wikipedia IT — Metacognizione](https://it.wikipedia.org/wiki/Metacognizione) |
| **Modelli di Ragionamento (*Thinking Models*)** | Modelli IA di nuova generazione (come Gemini *Thinking*) che eseguono una catena di pensiero passo-passo interna prima di generare l'output, riducendo gli errori logici e matematici. | [Google AI for Developers — Gemini Thinking](https://ai.google.dev/gemini-api/docs/thinking?hl=it) |
| **Prove Equipollenti vs Differenziate** | Le prove *equipollenti* mantengono gli stessi obiettivi curricolari variando canali/tempi/supporti (PDP/PEI curricolare); le prove *differenziate* sono tarate sugli obiettivi personalizzati del PEI (L. 104/92). | [Ministero dell'Istruzione e del Merito — Inclusione e Nuovo PEI](https://www.mim.gov.it/inclusione-e-nuovo-pei) |
| **System Instructions (Istruzioni di sistema)** | Regole permanenti di comportamento, ruolo, tono e formato fornite a monte al modello IA (ad esempio dentro un *Gem*) che guidano tutte le risposte successive. | [Google AI for Developers — System Instructions](https://ai.google.dev/gemini-api/docs/system-instructions?hl=it) |

---

## Capitolo 7 — Valutazione delle Fonti secondo il Criterio KSM (Anderson & Krathwohl + KSM)

In applicazione del protocollo metodologico del corso, tutte le fonti esterne di riferimento citate in questa dispensa sono valutate lungo i tre assi del **Criterio KSM** (**K `35%` `[A5, B5]`**, **S `40%` `[C4, C5]`**, **M `25%` `[B4, D5]`**):

| Fonte / Riferimento Esterno | Criterio K — Knowledge `[A5, B5]` (35%) | Criterio S — Skills & Metodo `[C4, C5]` (40%) | Criterio M — Mindset & Triangolazione `[B4, D5]` (25%) | Livello KSM |
| :--- | :--- | :--- | :--- | :---: |
| **Normattiva & Ministero dell'Istruzione e del Merito (MIM)** (*D.Lgs. 62/2017, L. 170/2010, Nuovo PEI D.Lgs. 66/2017*) | **[A5/B5]** Fonti normative primarie vigenti dello Stato Italiano in materia di valutazione e inclusione scolastica. | **[C5]** Procedure e distinzioni vincolanti su prove equipollenti, differenziate, PDP e PEI. | **[D5]** Massima ufficialità istituzionale; riferimento normativo imprescindibile. | **Livello A** *(Primaria / Gold Standard)* |
| **CAST — Universal Design for Learning Guidelines** (`udlguidelines.cast.org`) | **[B5/B6]** Framework psicopedagogico primario internazionale per la progettazione accessibile e lo *scaffolding*. | **[C5/C6]** Linee guida operative verificate empiricamente su rappresentazione, espressione e coinvolgimento. | **[D5/D6]** Standard scientifico aperto, privo di bias commerciali, validato a livello internazionale. | **Livello A** *(Primaria / Gold Standard)* |
| **Documentazione Ufficiale Google AI & Supporto Gemini** (*Gemini Thinking, System Instructions, Gemini Canvas, Gem, Workspace for Education*) | **[A5/B4]** Documentazione tecnica primaria sulle architetture di ragionamento e sulle interfacce di lavoro di Gemini. | **[C4/C5]** Procedure tecniche dirette, riproducibili e aggiornate per l'uso in aula. | **[B4/D5]** Fonte ufficiale del produttore, triangolata con i principi indipendenti di docimologia e UDL per mantenerne un uso critico. | **Livello B** *(Qualificata / Ufficiale)* |
| **Voci Enciclopediche Tecniche e Psicopedagogiche (Wikipedia IT/EN, ISSalute)** (*Docimologia, Anderson & Krathwohl, Error Analysis, Metacognizione, Pragmatica, Doppia negazione*) | **[A2/B4]** Sintesi terminologiche chiare e ben referenziate per il ripasso rapido da parte dei docenti. | **[C3/C4]** Definizioni coerenti con la letteratura primaria citata in bibliografia. | **[B4/D3]** Scopo puramente informativo; utilizzate come supporto lessicale verificato sulle fonti primarie. | **Livello B / C** *(Qualificata / Divulgativa verificata)* |
