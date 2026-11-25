# Dispensa di Studio e Approfondimento — Incontro 2 di 5 (4 ore)

## VALUTARE PER CRESCERE
### *VerifichIAmo con l'IA (Parte I): uso pratico di Google Gemini for Education (Thinking, Drive, Canvas e Gem) per progettare Verifiche UDL Multilivello secondo la Tassonomia di Anderson & Krathwohl e il Criterio KSM (con focus su Italiano, Grammatica, Storia e Inglese)*

> [!NOTE]
> **Come utilizzare questa dispensa**  
> Questo documento costituisce la **parte di studio approfondito e discorsivo** dell'**Incontro 2 (Giorno 2 di 5 · 4 ore)**, dedicato alla prima parte del modulo centrale *"VerifichIAmo con l'Intelligenza Artificiale"* (`4h` su `10/20` del corso). Senza ripetere i concetti base già affrontati nell'Incontro 1, il testo approfondisce l'**applicazione operativa di Google Gemini for Education alla progettazione delle verifiche**, declinando la matrice **Anderson & Krathwohl (`4 × 6`) × Criterio KSM** su esempi concreti di **Italiano (Narrativa e Grammatica), Storia e Inglese**. Ogni **termine tecnico** è dotato di un **collegamento esterno autorevole**, e tutti gli esempi rimandano direttamente al [Ricettario dei 30 Esempi](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md). In chiusura trovate il **Glossario Tecnico Linkato** (Capitolo 6) e la **Valutazione delle Fonti secondo il Criterio KSM** (Capitolo 7).

---

## Capitolo 1 — Dal Prompt di Studio al Prompt di Verifica: Correggere il "Bias Mnemonico" dell'IA

### 1.1 Perché i prompt generici producono verifiche inique in Italiano, Storia e Inglese
Quando un docente chiede a un [Modello Linguistico di Grandi Dimensioni (LLM)](https://it.wikipedia.org/wiki/Modello_linguistico_di_grandi_dimensioni) un prompt generico del tipo *"Creami una verifica sui Promessi Sposi / sul Feudalesimo / sul Past Simple per la scuola media, e fai una versione semplificata per DSA"*, emergono sistematicamente **tre difetti docimologici**:

1. **Sbilanciamento verso la memoria pura (`LOTS 1 — Ricordare`)**: l'IA genera dal 70% all'80% di domande puramente nozionistiche (*"In che anno...", "Dai la definizione di complemento di termine...", "Traduci questi 10 verbi irregolari isolati..."*). In termini di [docimologia](https://it.wikipedia.org/wiki/Docimologia), questo misura solo il recupero mnemonico a breve termine e penalizza proprio gli studenti con [DSA (Legge 170/2010)](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170) o fragilità nella [memoria di lavoro (*working memory*)](https://it.wikipedia.org/wiki/Memoria_di_lavoro).
2. **Semplificazione cognitiva al ribasso per i BES**: senza istruzioni precise, l'IA "facilita" la verifica per alunni con BES eliminando i quesiti di comprensione profonda, di inferenza o di analisi storica/linguistica, lasciando solo esercizi meccanici. Ciò tradisce il principio fondante dell'[Universal Design for Learning (UDL)](https://udlguidelines.cast.org/): **l'accessibilità deve rimuovere le barriere strumentali (grafiche, lessicali, procedurali), non privare lo studente del diritto di ragionare**.
3. **Consegne ambigue e sovraccarico linguistico**: frasi con più subordinate, [doppie negazioni](https://it.wikipedia.org/wiki/Doppia_negazione) (*"Quale tra le seguenti affermazioni NON è estranea alle cause..."*) o richieste multiple accorpate in un unico punto (*"Individua il complemento, spiega perché e riscrivi la frase al passivo"*), che mandano in confusione alunni con [ADHD](https://www.issalute.it/index.php/la-salute-dalla-a-alla-z-menu/a/adhd-disturbo-da-deficit-di-attenzione-e-iperattivita) o [Italiano L2 (NAI)](https://www.mim.gov.it/studenti-con-cittadinanza-non-italiana).

### 1.2 Il Framework `R-C-N-A-F` specializzato per le Verifiche
Nell'Incontro 2 specializziamo la struttura di [Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it) `R-C-N-A-F` per le prove di valutazione:
* nel blocco **[N] Nuclei e Scala Cognitiva** imponiamo la distribuzione **40% LOTS (`Asse K`) · 40% Ponte (`Asse S`) · 20% HOTS (`Asse M`)** con la mappatura dei codici `[A-D][1-6]`;
* nel blocco **[A] Accessibilità** chiediamo la generazione su **3 livelli UDL paralleli** (*Versione A Facilitata/Equipollente*, *Versione B Standard*, *Versione C Potenziamento*).

---

## Capitolo 2 — La Matrice Operativa Anderson & Krathwohl (`4 × 6`) × Criterio KSM Declinata per Italiano, Grammatica, Storia e Inglese

### 2.1 Come leggere e usare i codici `[A-D][1-6]` e i 3 Assi `K - S - M` nelle discipline umanistiche e linguistiche
La **[Tassonomia di Anderson e Krathwohl (2001)](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy#Revised_taxonomy_%282001%29)** — revisione bidimensionale della [Tassonomia di Bloom](https://it.wikipedia.org/wiki/Tassonomia_di_Bloom) — incrocia **4 Dimensioni della Conoscenza** (`A` Fattuale, `B` Concettuale, `C` Procedurale, `D` Metacognitiva) con **6 Processi Cognitivi** ordinati lungo la progressione **[LOTS (*Lower Order Thinking Skills*)](https://it.wikipedia.org/wiki/Tassonomia_di_Bloom) → [HOTS (*Higher Order Thinking Skills*)](https://en.wikipedia.org/wiki/Higher-order_thinking)** (`1. Ricordare, 2. Comprendere, 3. Applicare, 4. Analizzare, 5. Valutare, 6. Creare`).

Per permettere ai docenti di **Italiano, Grammatica, Storia e Inglese** di controllare immediatamente i codici generati da [Google Gemini](https://gemini.google.com/), la tabella seguente traduce ciascuna intersezione della matrice in **compiti reali di scuola media**:

| Asse KSM e Quota Verifica | Dimensione della Conoscenza (`A–D`) | Processi Cognitivi (`1–6`) | Esempio in **Italiano (Narrativa) & Storia** | Esempio in **Italiano (Grammatica)** | Esempio in **Inglese (L2 · Livello A1/A2)** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **K — Knowledge** *(Il Sapere · **~40%** della prova)* | **A. Fattuale** *(termini, dati, lessico, eventi)*<br>**B. Concettuale** *(relazioni, cause-effetti, strutture)* | **LOTS 1–2**:<br>`[A1]` Ricordare dati/lessico<br>`[B2]` Comprendere relazioni e significato globale | • `[A1]` Individuare personaggi, tempi o parole-chiave nella piramide feudale (con banca parole).<br>• `[B2]` Spiegare perché il protagonista compie una scelta o lo scambio tra signore e vassallo. | • `[B1/B2]` Riconoscere la funzione logica del predicato e distinguere un'azione da una qualità del soggetto (con *Box Bussola*). | • `[A1]` Associare vocaboli della *Daily Routine* alle azioni corrispondenti (con *Word Bank*).<br>• `[B2]` Comprendere il senso globale di un breve *Reading* graduato. |
| **S — Skills** *(Il Saper Fare · **~40%** della prova)* | **C. Procedurale** *(regole in contesto, metodi di analisi, procedure)* | **Ponte 3–4**:<br>`[C3]` Applicare regole/procedure<br>`[B4/C4]` Analizzare e confrontare strutture | • `[C3]` Dedurre a quale ceto medievale appartiene un personaggio leggendo una fonte breve.<br>• `[B4]` Confrontare in una tabella guidata due sequenze del racconto o *pars dominica* vs *pars massaricia*. | • `[C3/C4]` Analizzare i sintagmi di una frase già segmentata con barrette (`/`) individuando Soggetto, Oggetto, Termine, Luogo e Tempo. | • `[C3]` Completare un dialogo autentico coniugando i verbi al *Past Simple* (affermativa/negativa con *didn't*).<br>• `[C4]` Riordinare gli elementi di una domanda in inglese (*Wh- + did + subj + verb*). |
| **M — Mindset, Metacognition & Mastery** *(Il Saper Essere e Divenire · **~20%** della prova)* | **D. Metacognitiva** *(autocorrezione, valutazione critica, scelte strategiche)* | **HOTS 5–6**:<br>`[B5/C5/D4]` Valutare e trovare errori (*Error Analysis*)<br>`[B6/D6]` Creare e rielaborare | • `[B5/D4]` **Caccia all'errore interpretativo o storico**: scovare un'interpretazione infondata del brano (citando la riga che la smentisce) o 2 anacronismi in un racconto medievale.<br>• `[B6]` Rielaborare un finale o argomentare una scelta personale. | • `[C5/D4]` **"Il Detective Grammaticale"**: trovare e correggere l'errore di analisi logica commesso da uno studente immaginario (es. confondere soggetto e complemento oggetto). | • `[C5/D4]` **"Grammar Detective"**: individuare e correggere un errore morfosintattico tipico (*"Yesterday I didn't went to school"*) spiegando la regola in italiano.<br>• `[B6]` Scrivere 3 frasi personali con *sentence starters*. |

---

### 2.2 Il Superpotere Inclusivo della "Caccia all'Errore" (`HOTS 5 — Asse M`) nelle Materie Umanistiche e Linguistiche
Perché l'**[Analisi dell'Errore (*Error Analysis*)](https://en.wikipedia.org/wiki/Error_analysis_%28mathematics%29)** — inserita come **Quesito 5 (`HOTS 5 — Valutare`)** anche nella Versione A Facilitata — funziona in modo straordinario in **Italiano, Grammatica, Storia e Inglese**?

1. **Supera il blocco del foglio bianco e l'affaticamento grafo-motorio**: uno studente con [disortografia](https://it.wikipedia.org/wiki/Disortografia) o [dislessia](https://it.wikipedia.org/wiki/Dislessia) fatica enormemente a scrivere da zero un commento critico di 10 righe, ma riesce benissimo a **ragionare ad alto livello (`[B5, C5, D4]`)** se gli mostriamo un breve testo o 3 frasi già analizzate da uno "studente immaginario" in cui si annida un errore concettuale o grammaticale da scovare!
2. **Si appoggia ai *Sentence Starters* (frasi-avvio guidate)**: nella Versione Facilitata forniamo sempre lo [scaffolding](https://it.wikipedia.org/wiki/Scaffolding) dell'incipit (*"Non sono d'accordo con questa frase perché alla riga ___ il testo dice che..."*, *"L'errore si trova nel sintagma ___ perché risponde alla domanda..."*).

#### Quattro Modelli Pronti di "Caccia all'Errore" per Italiano, Grammatica, Storia e Inglese

| Disciplina | Nome dell'Attività nella Verifica | Esempio concreto dell'errore da far generare a Gemini (*Thinking*) | Vincolo inclusivo fondamentale da mettere nel Prompt |
| :--- | :--- | :--- | :--- |
| **Italiano — Narrativa** ([Esempio #03](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-03)) | *"Caccia all'Errore Interpretativo"* | Uno studente frettoloso scrive: *"Il protagonista aiuta il compagno solo per ottenere una ricompensa in denaro"*. L'alunno deve smentirlo citando una frase del brano. | Numerare le righe del brano e aggiungere nella Versione A: *"(Aiuto: rileggi tra riga 8 e riga 12)"* + frase-avvio. |
| **Italiano — Grammatica** ([Esempio #04](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-04)) | *"Il Detective Grammaticale"* | Nella frase *"Al mattino / a Luca / piace / il latte caldo"*, uno studente ha analizzato *"a Luca = soggetto"* e *"il latte caldo = compl. oggetto"*. | Spezzare già la frase in sintagmi con le barrette `/` e fornire il *Box Bussola* con le domande-guida. |
| **Storia** ([Esempio #14](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-14)) | *"Lo Storico Cerca l'Anacronismo"* | Breve diario di un servo della gleba nell'Anno Mille che racconta di aver coltivato **patate e pomodori** per il signore feudale. | Nella Versione A segnalare in grassetto 3 possibili dettagli sospetti tra cui individuare gli anacronismi. |
| **Inglese (L2)** ([Esempio #12](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-12)) | *"Grammar & False Friends Detective"* | *"Yesterday afternoon Sara didn't went to the cinema because she was tired."* → trovare l'errore (`didn't went` → `didn't go`). | **REGOLA D'ORO DSA IN INGLESE**: vietare a Gemini di creare errori di *spelling* con lettere invertite (es. *went/wnet*), che colpiscono la dislessia; usare **solo errori di regola grammaticale o comunicativa**! |

---

## Capitolo 3 — "Radiografia" di una Verifica Reale e Quadro Normativo (Prove Equipollenti vs Differenziate)

### 3.1 Fare la "Radiografia" di una vecchia verifica di Italiano, Storia o Inglese con Gemini Multimodale
Grazie alla [multimodalità nativa](https://cloud.google.com/use-cases/multimodal-ai?hl=it) di Gemini, il docente può caricare direttamente la **fotografia**, lo screenshot o il file **[PDF](https://it.wikipedia.org/wiki/Portable_Document_Format) / Google Docs** di una propria verifica degli anni scorsi (oppure utilizzare una delle 4 prove pronte nel [Kit Materiali Campione Pronti per l'Aula](../Materiali_Trasversali/04_Kit_Materiali_Campione_Pronti_Aula.md#parte-2)) e chiedere a Gemini una **Tabella Diagnostica** esportabile in 1 clic su **[Google Fogli](https://support.google.com/docs/topic/9054603?hl=it)**:
1. **Codice `[A-D][1-6]` e Asse KSM** di ogni esercizio presente nella vecchia verifica;
2. **Percentuale reale `LOTS` vs `HOTS`** (scoprendo spesso che le vecchie verifiche di grammatica o storia erano per l'80% su `LOTS 1–2`);
3. **Barriere specifiche**: periodi con più di 20 parole, doppie negazioni, brani privi di numerazione delle righe, frasi grammaticali con inversioni poetiche o test d'inglese con richiesta di *spelling* libero senza *Word Bank*.

### 3.2 Prove Equipollenti vs Prove Differenziate (Normativa Italiana nella Secondaria di I Grado)
Nel formulare il punto **[A] Accessibilità** del prompt, il docente distingue in modo rigoroso quanto previsto dal **[D.Lgs. 62/2017](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-04-13;62)**, dalla **[Legge 170/2010 (DSA)](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170)** e dal **[Nuovo PEI (D.Lgs. 66/2017 e DI 182/2020)](https://www.mim.gov.it/inclusione-e-nuovo-pei)**:

| Tipologia di Prova | A chi si rivolge nella Secondaria di I grado | Istruzioni specifiche per Gemini in Italiano, Storia e Inglese |
| :--- | :--- | :--- |
| **Prova Equipollente (Versione A — Facilitata / Compensata)** | Alunni con **DSA (PDP)**, altri **BES / NAI** e alunni con **L. 104/92** che seguono una programmazione curricolare o per obiettivi minimi riconducibili alle Indicazioni Nazionali. | **Stessi obiettivi cognitivi e stesso voto massimo (10/10)** della classe, azzerando gli ostacoli strumentali: righe del brano numerate con rimando `(Cerca tra riga 4 e 8)`, frasi di analisi logica già divise in sintagmi (`/`), linea del tempo o *Box Bussola* in testa alla pagina, in Inglese *Word Bank* e scelta tra 3 opzioni grammaticali anziché produzione ortografica da zero, *sentence starters* per i quesiti HOTS. |
| **Prova Differenziata (Personalizzata sul PEI)** | Alunni con disabilità certificata (**L. 104/92**) il cui **PEI** prevede obiettivi didattici personalizzati rispetto alla programmazione di classe. | Obiettivi tarati sui **3 nuclei essenziali concreti** del PEI: sintassi lineare Soggetto-Verbo-Complemento, abbinamenti immagine-parola, comprensione per scene brevi titolate e primo esercizio interamente svolto come esempio-modello. |

---

## Capitolo 4 — Uso Pratico degli Strumenti di Google Gemini for Education: Drive, Thinking, Canvas, Prompt Chaining e Gem

### 4.1 Guida Pratica Passo-Passo all'Interfaccia di Google Gemini for Education
Per lavorare in modo rapido ed efficace durante il laboratorio (e a casa), ecco la sequenza esatta dei **5 strumenti pratici** dentro l'ambiente **[Google Gemini](https://gemini.google.com/)** integrato con **[Google Workspace for Education](https://edu.google.com/intl/ALL_it/workspace-for-education/)**:

| Passo Operativo | Dove cliccare nell'interfaccia di Gemini | Cosa fa concretamente per il docente di Italiano, Storia e Inglese |
| :--- | :--- | :--- |
| **1. Importare il materiale dal proprio Drive o da foto (`+`)** | Pulsante **`+`** a sinistra nella barra di inserimento del prompt → **Carica file** oppure **Google Drive** | Permette di allegare direttamente il Documento Google o il PDF del brano antologico, della dispensa di storia o della *Reading* d'inglese già salvati su Drive, senza fare copia-incolla. |
| **2. Attivare il Modello di Ragionamento (*Thinking*)** | Selettore del modello in alto a sinistra (o nel box del prompt) → **[Ragionamento / Thinking](https://ai.google.dev/gemini-api/docs/thinking?hl=it)** | Obbliga Gemini a verificare prima la coerenza tra brano e domande, il bilanciamento `40% LOTS / 40% Ponte / 20% HOTS` e la correttezza grammaticale dell'errore simulato nel *Detective Grammaticale*. |
| **3. Usare il *Prompt Chaining* in 2 Mosse (`2B.1 → 2B.2`)** | Stessa conversazione di chat in 2 invii consecutivi | **Mossa 1**: genera e valida *solo* la **Versione B (Standard)** + il Correttorio `[A-D][1-6]`.<br>**Mossa 2**: validata la B, chiede a Gemini di generare in parallelo la **Versione A (Facilitata)** e la **Versione C (Potenziamento)** sugli stessi identici obiettivi (evitando tagli o disallineamenti!). |
| **4. Rifinire chirurgicamente in [Gemini Canvas](https://support.google.com/gemini/answer/16047329?hl=it)** | Pulsante **Canvas** nella barra del prompt → **Seleziona col mouse una singola domanda** nel pannello destro | Compare la barra flottante (*Chiedi a Gemini* / icone di modifica rapida): puoi evidenziare **una sola consegna** o **un solo paragrafo in inglese** e scrivere *"Riduci a livello A1 QCER"*, *"Aggiungi 2 sentence starters"* o *"Dividi la frase in sintagmi con le barrette /"*, lasciando intatto il resto della verifica! |
| **5. Salvare il [Gem](https://support.google.com/gemini/answer/15235603?hl=it) ed Esportare in 1 clic** | Menu laterale → **Gestore dei Gem → Nuovo Gem**;<br>In fondo alla risposta → **Condividi ed esporta → Esporta in Documenti / Fogli** | • Il pulsante **"Esporta in Fogli"** (sotto la tabella della *Radiografia*) crea subito il Foglio Google diagnostico.<br>• Il pulsante **"Esporta in Documenti"** crea il file della verifica pronto per il font **[Lexend](https://fonts.google.com/specimen/Lexend)** (`12 pt`, interlinea `1,5`).<br>• Il **Gem** memorizza per tutto l'anno le tue regole disciplinari! |

---

### 4.2 Configurare i "Gem" Permanenti per Italiano/Storia e per Inglese
Creando un **[Gem personalizzato](https://support.google.com/gemini/answer/15235603?hl=it)** con **[istruzioni di sistema (*System Instructions*)](https://ai.google.dev/gemini-api/docs/system-instructions?hl=it)** stabili, l'insegnante non deve più riscrivere i vincoli tassonomici e inclusivi ogni settimana:
* **Gem `"Progettista Verifiche UDL — Italiano & Storia"`**: pre-istruito per numerare sempre le righe dei brani, segmentare le frasi di grammatica in sintagmi con `/`, inserire il *Box Bussola* o la *Linea del Tempo* in Versione A e proporre nel Quesito 5 il *Detective Grammaticale* o la *Caccia all'Anacronismo*.
* **Gem `"Progettista Verifiche UDL — English L2 (A1/A2)"`**: pre-istruito per graduare i testi sul livello [QCER (*CEFR*)](https://it.wikipedia.org/wiki/Quadro_comune_europeo_di_riferimento_per_la_conoscenza_delle_lingue) A1/A2, inserire le consegne bilingui (Inglese + traduzione italiana tra parentesi), aggiungere la *Word Bank* e progettare il *Grammar Detective* **senza mai usare distrattori basati su refusi ortografici o lettere invertite**.

---

### 4.3 Gli Esempi Pronti nel Ricettario per il Laboratorio dell'Incontro 2 (con Collegamenti Diretti)
Tutti gli esempi seguenti sono già pronti da copiare nel [Ricettario dei 30 Esempi](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md) (clicca sul titolo per aprire direttamente il prompt):

1. 📘 **[Esempio #03 — Italiano Narrativa (3ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-03)**: Verifica UDL a 3 livelli di comprensione e analisi di un brano narrativo con righe numerate, indicazioni `(Cerca tra riga 4 e 8)`, *Caccia all'errore interpretativo* (`[B5]`) e *sentence starters*.
2. 📘 **[Esempio #04 — Italiano Grammatica (2ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-04)**: Verifica inclusiva di Analisi Logica (Soggetto, Predicato, Oggetto, Complementi indiretti) con *Box Bussola*, frasi già segmentate in sintagmi (`/`) e l'attività HOTS *"Il Detective Grammaticale"* (`[C5, D4]`).
3. 🏛️ **[Esempio #14 — Storia (1ª Media)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-14)**: Verifica UDL a 3 livelli sulla Società Feudale bilanciata LOTS → HOTS (zero date isolate a memoria!) con linea del tempo compensativa, tabella sulla *curtis* e *"Lo Storico Cerca l'Errore / Anacronismi"* (`[B5]`).
4. 🇬🇧 **[Esempio #11 — Inglese Reading Comprehension (1ª Media · A1)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-11)**: Prova graduata su 2/3 livelli sulla *Daily Routine* (Present Simple) con verbi in grassetto, *Word Bank* fonetico-visiva e quesiti senza richiesta di *spelling* complesso per dislessia.
5. 🇬🇧 **[Esempio #12 — Inglese Grammar in Context (2ª Media · A1+/A2)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-12)**: Verifica e banca quesiti sul *Past Simple* (forme affermativa, negativa con *didn't* e interrogativa) con l'attività HOTS *"Grammar Detective"* (`[C4, C5]`) e vincolo di zero distrattori ortografici visivamente confondenti.
6. 📐🎨 **[Altri Esempi Disciplinari dell'Incontro 2 nel Ricettario](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md)**: [Esempio #08 — Matematica (Pitagora)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-08), [Esempio #22 — Tecnologia (Energia)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-22) ed [Esempio #24 — Arte e Immagine (Lettura d'opera)](../Materiali_Trasversali/01_Ricettario_Prompt_30_Esempi_Scuola_Media.md#esempio-24).

---

## Capitolo 5 — Validazione Critica (*Human-in-the-Loop*) per Prove di Italiano, Storia e Inglese

Prima di stampare o assegnare su Google Classroom la verifica generata da Gemini, il docente esegue i **4 controlli rapidi di [Human-in-the-Loop](https://en.wikipedia.org/wiki/Human-in-the-loop)**:
1. **Fedeltà testuale e controllo delle [Allucinazioni](https://it.wikipedia.org/wiki/Allucinazione_%28intelligenza_artificiale%29)**: verificare che nelle domande di narrativa o storia Gemini non chieda dettagli assenti nel brano allegato e che nell'analisi logica il correttorio non contenga errori di classificazione dei complementi.
2. **Calibrazione linguistica (11–14 anni e livello [QCER](https://it.wikipedia.org/wiki/Quadro_comune_europeo_di_riferimento_per_la_conoscenza_delle_lingue) A1/A2 in Inglese)**: verificare che in Inglese il testo non introduca tempi verbali non ancora studiati (es. *Present Perfect* in 1ª media!) e che in Italiano le consegne siano prive di [ambiguità pragmatiche](https://it.wikipedia.org/wiki/Pragmatica).
3. **Un solo verbo d'azione per consegna e zero doppie negazioni**: ogni punto della verifica deve chiedere una sola azione chiara (*"Sottolinea...", "Completa...", "Trova l'errore..."*).
4. **Verifica della dignità cognitiva nella Versione A**: controllare che anche la Versione Facilitata includa il Quesito 5 di livello **HOTS (`5. Valutare — Caccia all'errore`)** supportato da *scaffolding* e *sentence starters*.

---

## Capitolo 6 — Glossario Ragionato dei Termini Tecnici dell'Incontro 2 (con Collegamenti Esterni)

| Termine Tecnico | Spiegazione sintetica per il docente | Collegamento esterno di approfondimento |
| :--- | :--- | :--- |
| **Ambiguità pragmatica / lessicale** | Difetto di formulazione di una domanda che ammette più interpretazioni o sottintesi impliciti, penalizzando studenti NAI, DSA o nello spettro autistico. | [Wikipedia IT — Pragmatica linguistica](https://it.wikipedia.org/wiki/Pragmatica) |
| **D.Lgs. 62/2017** | Decreto legislativo che disciplina la valutazione, la certificazione delle competenze e gli esami di Stato nel primo ciclo d'istruzione (inclusa la tutela di alunni con disabilità e DSA). | [Normattiva — Testo del D.Lgs. 13 aprile 2017, n. 62](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-04-13;62) |
| **Docimologia** | Scienza che studia i criteri e gli strumenti di valutazione scolastica per garantirne validità, attendibilità, trasparenza ed equità. | [Wikipedia IT — Docimologia](https://it.wikipedia.org/wiki/Docimologia) |
| **Doppia negazione** | Struttura sintattica (*"Quale non è scorretto..."*) che moltiplica il carico sulla memoria di lavoro e induce in errore anche chi padroneggia l'argomento. | [Wikipedia IT — Doppia negazione](https://it.wikipedia.org/wiki/Doppia_negazione) |
| **Error Analysis ("Caccia all'errore")** | Strategia didattica e valutativa di livello HOTS (`5. Valutare`) in cui lo studente analizza una frase, una traduzione o un testo contenente un errore mirato per individuarlo e correggerlo. | [Wikipedia EN — Error analysis in education](https://en.wikipedia.org/wiki/Error_analysis_%28mathematics%29) |
| **Gem (Google Gemini)** | Assistente IA personalizzato che memorizza stabilmente le istruzioni di sistema del docente (materia, classe, regole UDL e LOTS→HOTS) per riutilizzarle tutto l'anno. | [Guida di Google Gemini — Creare e gestire i Gem](https://support.google.com/gemini/answer/15235603?hl=it) |
| **Gemini Canvas** | Ambiente di editing interattivo affiancato alla chat di Gemini che consente di selezionare col mouse e modificare singole frasi o quesiti senza rigenerare l'intera verifica. | [Guida di Google Gemini — Usare Canvas](https://support.google.com/gemini/answer/16047329?hl=it) |
| **Metacognizione** | Consapevolezza e capacità di riflettere sui propri processi di apprendimento, sugli errori commessi e sulle strategie per migliorarsi (Dimensione `D` di Anderson & Krathwohl e Asse `M` del Criterio KSM). | [Wikipedia IT — Metacognizione](https://it.wikipedia.org/wiki/Metacognizione) |
| **Modelli di Ragionamento (*Thinking Models*)** | Modelli IA (come Gemini *Thinking*) che eseguono una catena di pensiero interna prima di rispondere, verificando il rispetto simultaneo dei vincoli tassonomici e linguistici. | [Google AI for Developers — Gemini Thinking](https://ai.google.dev/gemini-api/docs/thinking?hl=it) |
| **Prompt Chaining (Concatenazione di Prompt)** | Tecnica di *Prompt Engineering* che scompone un compito complesso in 2 mosse sequenziali (Mossa 1: Versione B validata → Mossa 2: Versioni A e C parallele), migliorando precisione e controllo. | [Google Cloud — Che cos'è il Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it) |
| **Prove Equipollenti vs Differenziate** | Le prove *equipollenti* mantengono gli stessi obiettivi curricolari variando canali/tempi/supporti (PDP/PEI curricolare); le prove *differenziate* sono tarate sugli obiettivi personalizzati del PEI (L. 104/92). | [Ministero dell'Istruzione e del Merito — Inclusione e Nuovo PEI](https://www.mim.gov.it/inclusione-e-nuovo-pei) |
| **QCER / CEFR (Quadro Comune Europeo)** | Standard europeo che descrive i livelli di competenza nelle lingue straniere (nella scuola media: verso il livello `A2` per Inglese e `A1` per la seconda lingua comunitaria). | [Wikipedia IT — Quadro comune europeo di riferimento per le lingue](https://it.wikipedia.org/wiki/Quadro_comune_europeo_di_riferimento_per_la_conoscenza_delle_lingue) |
| **System Instructions (Istruzioni di sistema)** | Regole permanenti di comportamento, ruolo, tono e formato fornite a monte al modello IA (ad esempio dentro un *Gem*) che guidano tutte le risposte successive. | [Google AI for Developers — System Instructions](https://ai.google.dev/gemini-api/docs/system-instructions?hl=it) |

---

## Capitolo 7 — Valutazione delle Fonti secondo il Criterio KSM (Anderson & Krathwohl + KSM)

Tutte le fonti esterne di riferimento citate in questa dispensa sono valutate lungo i tre assi del **Criterio KSM** (**K `35%` `[A5, B5]`**, **S `40%` `[C4, C5]`**, **M `25%` `[B4, D5]`**):

| Fonte / Riferimento Esterno | Criterio K — Knowledge `[A5, B5]` (35%) | Criterio S — Skills & Metodo `[C4, C5]` (40%) | Criterio M — Mindset & Triangolazione `[B4, D5]` (25%) | Livello KSM |
| :--- | :--- | :--- | :--- | :---: |
| **Normattiva & Ministero dell'Istruzione e del Merito (MIM)** (*D.Lgs. 62/2017, L. 170/2010, Nuovo PEI D.Lgs. 66/2017*) | **[A5/B5]** Fonti normative primarie vigenti dello Stato Italiano in materia di valutazione e inclusione scolastica. | **[C5]** Procedure e distinzioni vincolanti su prove equipollenti, differenziate, PDP e PEI. | **[D5]** Massima ufficialità istituzionale; riferimento normativo imprescindibile. | **Livello A** *(Primaria / Gold Standard)* |
| **CAST — Universal Design for Learning Guidelines** (`udlguidelines.cast.org`) | **[B5/B6]** Framework psicopedagogico primario internazionale per la progettazione accessibile e lo *scaffolding*. | **[C5/C6]** Linee guida operative verificate empiricamente su rappresentazione, espressione e coinvolgimento. | **[D5/D6]** Standard scientifico aperto, privo di bias commerciali, validato a livello internazionale. | **Livello A** *(Primaria / Gold Standard)* |
| **Documentazione Ufficiale Google AI & Supporto Gemini** (*Gemini Thinking, System Instructions, Gemini Canvas, Gem, Workspace for Education*) | **[A5/B4]** Documentazione tecnica primaria sulle architetture di ragionamento e sulle interfacce di lavoro di Gemini. | **[C4/C5]** Procedure tecniche dirette, riproducibili e aggiornate per l'uso in aula. | **[B4/D5]** Fonte ufficiale del produttore, triangolata con i principi indipendenti di docimologia e UDL per mantenerne un uso critico. | **Livello B** *(Qualificata / Ufficiale)* |
| **Voci Enciclopediche Tecniche, Linguistiche e Psicopedagogiche (Wikipedia IT/EN, ISSalute)** (*Docimologia, Anderson & Krathwohl, QCER/CEFR, Error Analysis, Metacognizione, Pragmatica*) | **[A2/B4]** Sintesi terminologiche chiare e ben referenziate per il ripasso rapido da parte dei docenti. | **[C3/C4]** Definizioni coerenti con la letteratura primaria citata in bibliografia. | **[B4/D3]** Scopo puramente informativo; utilizzate come supporto lessicale verificato sulle fonti primarie. | **Livello B / C** *(Qualificata / Divulgativa verificata)* |
