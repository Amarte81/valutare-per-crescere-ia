# Dispensa di Studio e Approfondimento — Incontro 1 di 5 (4 ore)

## VALUTARE PER CRESCERE
### *I nuovi modelli di Google Gemini e NotebookLM per l'accessibilità, l'autonomia nello studio degli studenti (4/20 del corso) e le basi dell'Ingegneria del Prompt*

> [!NOTE]
> **Come utilizzare questa dispensa**  
> Questo documento costituisce la **parte di studio approfondito e discorsivo** dell'**Incontro 1 (Giorno 1 di 5 · 4 ore)**, interamente dedicato al modulo *"Accessibilità, autonomia e studio degli studenti"* (`4/20` del corso). È pensato per essere letto con calma dal docente (prima o dopo il laboratorio pomeridiano) per consolidare le basi teoriche, tecnologiche e normative. Ogni **termine tecnico** è corredato da una spiegazione nel testo e da un **collegamento esterno autorevole** per chi desidera esplorare il lessico specialistico dell'Intelligenza Artificiale, della normativa sull'inclusione e della didattica digitale. In fondo al documento sono presenti il **Glossario Tecnico Completo con link esterni** (Capitolo 6) e la **Valutazione delle Fonti secondo il Criterio KSM** (Capitolo 7).

---

## Capitolo 1 — I Nuovi Modelli di Intelligenza Artificiale nell'Ecosistema Google per la Scuola

### 1.1 Come ragiona (e come non ragiona) un modello linguistico di nuova generazione
Quando un insegnante apre [Google Gemini](https://gemini.google.com/), interagisce con una famiglia di modelli di Intelligenza Artificiale basati sull'architettura [Transformer](https://it.wikipedia.org/wiki/Transformer_(apprendimento_automatico)) e classificati come [Modelli Linguistici di Grandi Dimensioni (*Large Language Models* — LLM)](https://it.wikipedia.org/wiki/Modello_linguistico_di_grandi_dimensioni). Comprendere il principio di funzionamento di questi modelli non è un vezzo informatico, ma la condizione essenziale per governarli didatticamente ed evitare gli errori più comuni nella preparazione di materiali di studio e verifiche.

Un LLM non possiede una "coscienza" del significato come un essere umano, né consulta un database fisso di risposte preconfezionate: è un sistema probabilistico addestrato su miliardi di testi per prevedere e generare la sequenza più coerente di [token](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview?hl=it) (unità minime di testo che corrispondono a parole intere, radici o sillabe: in italiano 100 token equivalgono a circa 65–75 parole) a partire dalle istruzioni ricevute, dette [prompt](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it).

Questo meccanismo ha una conseguenza didattica immediata:
* **Se il prompt del docente è vago** (es. *"Fai un riassunto e cinque domande sul feudalesimo per la prima media"*), il modello calcola la risposta statisticamente "più media e generica" presente nei suoi dati di addestramento. Il risultato sarà quasi inevitabilmente piatto, lessicalmente disomogeneo e sbilanciato su domande puramente nozionistiche.
* **Se il prompt restringe lo spazio probabilistico** attraverso coordinate pedagogiche precise (la classe, il testo di partenza, i nuclei fondanti, il livello di leggibilità, il profilo funzionale degli alunni e la scala cognitiva richiesta), il modello viene guidato verso un output altamente personalizzato e didatticamente valido.

Un secondo parametro tecnico che ogni docente deve conoscere è la [finestra di contesto (*context window*)](https://ai.google.dev/gemini-api/docs/long-context?hl=it): essa rappresenta la quantità massima di informazioni (testi, documenti, immagini, cronologia della conversazione) che il modello riesce a "tenere a mente" contemporaneamente in una singola sessione di lavoro. I modelli di nuova generazione dell'ecosistema Google hanno ampliato enormemente questa finestra, consentendo al docente di caricare interi capitoli in [PDF](https://it.wikipedia.org/wiki/Portable_Document_Format), dispense pluripagina o più documenti contemporaneamente senza che il modello "dimentichi" l'inizio del testo.

---

### 1.2 La svolta della Multimodalità Nativa: partire dai materiali reali del docente
Fino a poco tempo fa, per adattare una pagina del libro di testo cartaceo o una vecchia verifica stampata, l'insegnante doveva ricopiare il testo a mano oppure passare attraverso programmi separati di [OCR (*Optical Character Recognition* — Riconoscimento ottico dei caratteri)](https://it.wikipedia.org/wiki/Riconoscimento_ottico_dei_caratteri), che spesso perdevano la struttura di tabelle, box laterali, formule matematiche o didascalie delle immagini.

I modelli attuali di [Google Gemini](https://gemini.google.com/) sono invece **nativamente multimodali**: la [multimodalità nell'IA](https://cloud.google.com/use-cases/multimodal-ai?hl=it) indica la capacità di un unico modello di elaborare, comprendere e mettere in relazione simultaneamente **testo, immagini, fotografie, schemi grafici, audio e documenti strutturati**.

Per un docente di Scuola Secondaria di Primo Grado questo significa poter:
1. **Fotografare con lo smartphone o caricare lo screenshot** di una pagina dell'antologia, del manuale di storia, di un esercizio di geometria o di una tavola di tecnologia direttamente nella chat di Gemini.
2. **Chiedere al modello non solo di estrarre il testo**, ma di **interpretare la relazione tra testo e immagini** (ad esempio: *"Analizza questa foto della pagina del libro di scienze sulla cellula, incluso lo schema illustrato in basso; trasforma il testo in una scheda ad alta leggibilità e descrivi lo schema passo-passo per uno studente che fatica a leggere tabelle dense"*).
3. **Recuperare il proprio archivio storico di verifiche cartacee o in PDF**, caricarle come immagine o documento e chiederne la immediata rimodulazione su più livelli di accessibilità.

---

### 1.3 Modelli Rapidi (*Flash*) vs Modelli di Ragionamento (*Thinking / Reasoning*)
Una delle evoluzioni più importanti dei modelli attuali di Gemini è la possibilità di scegliere (o lasciare che il sistema attivi) modalità diverse di elaborazione:

* **Modelli Rapidi (es. architettura *Gemini Flash*)**: sono ottimizzati per la velocità e la fluidità linguistica. Rispondono in pochi secondi e sono ideali per compiti di trasformazione testuale diretta: semplificare un paragrafo, costruire un glossario bilingue per un alunno [NAI](https://www.mim.gov.it/studenti-con-cittadinanza-non-italiana), generare una lista di esempi concreti o riformulare una consegna in frasi brevi.
* **Modelli di Ragionamento (*Thinking / Reasoning models*)**: prima di scrivere la risposta definitiva per l'utente, questi modelli eseguono una fase visibile di **ragionamento interno passo-passo**, tecnicamente basata sulla [catena di pensiero (*Chain-of-Thought*)](https://it.wikipedia.org/wiki/Prompt_engineering). Il modello scompone il problema, verifica i vincoli richiesti dal docente, controlla eventuali contraddizioni logiche o matematiche e solo alla fine produce l'elaborato.

| Compito didattico del docente | Modello Gemini consigliato | Motivazione tecnica e pedagogica |
| :--- | :--- | :--- |
| Riscrivere un brano in formato ad alta leggibilità (*Easy-to-Read*) o creare un glossario | **Modello Rapido (*Flash*)** | Compito di trasformazione linguistica diretta su testo già fornito; alta velocità di iterazione. |
| Progettare un problema di Matematica/Scienze con passaggi guidati o una *"Caccia all'errore"* | **Modello di Ragionamento (*Thinking*)** | Garantisce l'esattezza dei calcoli, la coerenza dei passaggi intermedi e la plausibilità pedagogica dell'errore simulato. |
| Costruire una verifica UDL su 3 livelli bilanciata lungo la scala **LOTS → HOTS** | **Modello di Ragionamento (*Thinking*)** | Il modello deve rispettare contemporaneamente più vincoli (quote percentuali di domande LOTS/HOTS, assenza di doppie negazioni, parallelismo tra i 3 livelli). |
| Generare una Rubrica di valutazione secondo il **Criterio KSM** | **Modello di Ragionamento (*Thinking*)** | Richiede un allineamento rigoroso tra indicatori, pesi percentuali e progressione qualitativa dei descrittori su 4 livelli. |

---

### 1.4 Gemini Canvas, Gem e l'Esportazione Diretta in Google Workspace
Tre funzioni dell'interfaccia di Gemini riducono drasticamente il tempo tecnico di lavoro in laboratorio:
1. **[Gemini Canvas](https://support.google.com/gemini/answer/16047329?hl=it)**: è uno spazio di lavoro interattivo affiancato alla chat. Quando il docente genera una scheda di studio o una verifica in Canvas, non è costretto a rigenerare tutto il documento se una sola domanda o un solo capoverso non funziona: può **selezionare con il mouse solo tre righe**, cliccare sugli strumenti contestuali e chiedere *"Rendi questo paragrafo più semplice"*, *"Accorcia le frasi"* o *"Sostituisci questa domanda con un esercizio a completamento"*.
2. **[Gem (Assistenti personalizzati di Gemini)](https://support.google.com/gemini/answer/15235603?hl=it)**: permette al docente di salvare delle istruzioni di sistema permanenti (ad esempio: *"Sei un assistente didattico per la Scuola Secondaria di I grado specializzato in Scienze; ogni volta che ti carico un testo, produci sempre una versione ad alta leggibilità, un glossario di 5 termini e 3 domande graduate da LOTS a HOTS"*). In questo modo l'insegnante non deve riscrivere il prompt lungo ogni settimana.
3. **Esportazione nativa in 1 clic verso [Google Documenti](https://support.google.com/docs/?hl=it) e [Google Fogli](https://support.google.com/docs/topic/9054603?hl=it)**: al termine della generazione, il pulsante *"Esporta in Documenti"* (o *"Esporta in Fogli"* per qualsiasi tabella prodotta da Gemini) crea istantaneamente il file formattato dentro il [Google Drive](https://support.google.com/drive/?hl=it) del docente, pronto per essere condiviso su [Google Classroom](https://edu.google.com/intl/ALL_it/workspace-for-education/products/classroom/).

---

### 1.5 Il problema delle Allucinazioni e la soluzione del *Grounding* con Google NotebookLM
Poiché gli LLM generano testo su base probabilistica, possono incorrere nelle cosiddette [allucinazioni (*hallucinations*)](https://it.wikipedia.org/wiki/Allucinazione_(intelligenza_artificiale)): il modello inventa date, formule, citazioni o dettagli fattuali inesistenti presentandoli con un tono perfettamente autorevole e fluente. A ciò si aggiunge il rischio di [bias algoritmici](https://it.wikipedia.org/wiki/Bias_algoritmico) (stereotipi culturali, linguistici o di genere presenti nei dati di addestramento).

Come si protegge la qualità disciplinare a scuola?
1. **Con il principio dello [Human-in-the-Loop (HITL — Supervisione umana nel ciclo)](https://en.wikipedia.org/wiki/Human-in-the-loop)**: l'IA è un co-pilota che abbatte l'80% del tempo di bozza, ma il docente resta l'unico validatore scientifico e pedagogico prima che il materiale arrivi in classe.
2. **Con la tecnica del *Grounding* (Ancoraggio alle fonti) e della [RAG (*Retrieval-Augmented Generation*)](https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=it)**: invece di chiedere all'IA di attingere alla sua "memoria generale", la si obbliga a rispondere **esclusivamente sulla base dei documenti forniti dall'insegnante**.

Lo strumento gratuito di Google progettato esattamente su questa architettura è **[Google NotebookLM](https://notebooklm.google/)**. A differenza di una chat generica, in NotebookLM il docente crea un "Taccuino" e vi carica le proprie fonti certificate (i PDF delle proprie dispense, file di Google Documenti, slide di Google Presentazioni, pagine web selezionate o link a video didattici di [YouTube](https://www.youtube.com/)). NotebookLM lavora **solo dentro il perimetro chiuso di quelle fonti**, accompagnando ogni risposta con **citazioni numerate cliccabili** che rimandano al capoverso esatto del documento originale del docente. In questo modo il rischio di allucinazioni scende vicino allo zero e il materiale prodotto utilizza esattamente lo stesso taglio e lo stesso lessico adottati dall'insegnante in classe.

---

## Capitolo 2 — Accessibilità, Autonomia e Studio nella Secondaria di Primo Grado (11–14 anni)

### 2.1 Le barriere invisibili nello studio alla Scuola Media
Il passaggio dalla Scuola Primaria alla Scuola Secondaria di Primo Grado rappresenta uno dei salti cognitivi più delicati dell'intero percorso scolastico. Tra gli 11 e i 14 anni gli studenti affrontano contemporaneamente:
* un rapido aumento della **densità lessicale e astratta** dei testi disciplinari (terminologia specifica in Storia, Geografia, Scienze, Tecnologia, Grammatica);
* una maggiore lunghezza dei capitoli da studiare a casa in autonomia;
* strutture sintattiche complesse (subordinate causali, concessive, forme passive, nominalizzazioni).

In una classe ordinaria di scuola media convivono profili di apprendimento fortemente diversificati, tutelati dalla normativa italiana sull'inclusione scolastica:
* Alunni con **[DSA (Disturbi Specifici dell'Apprendimento — Legge 170/2010)](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170)** (dislessia, disortografia, disgrafia, discalculia), per i quali il Consiglio di Classe redige il **[PDP (Piano Didattico Personalizzato)](https://www.mim.gov.it/disturbi-specifici-dell-apprendimento)** prevedendo strumenti compensativi e misure dispensative;
* Alunni con disabilità certificata ai sensi della **[Legge 104/1992](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1992-02-05;104)**, seguiti con il **[PEI (Piano Educativo Individualizzato — D.Lgs. 66/2017 e DI 182/2020)](https://www.mim.gov.it/inclusione-e-nuovo-pei)**;
* Alunni con altri **[BES (Bisogni Educativi Speciali — Direttiva Ministeriale 27/12/2012)](https://www.mim.gov.it/bisogni-educativi-speciali)**, tra cui studenti con **[ADHD (Disturbo da Deficit di Attenzione e Iperattività)](https://www.issalute.it/index.php/la-salute-dalla-a-alla-z-menu/a/adhd-disturbo-da-deficit-di-attenzione-e-iperattivita)**, funzionamento intellettivo limite (FIL) o fragilità nelle **[funzioni esecutive](https://it.wikipedia.org/wiki/Funzioni_esecutive)** (pianificazione del tempo, inibizione delle distrazioni, organizzazione del materiale);
* Alunni **[NAI (Neo-Arrivati in Italia) o con Italiano L2](https://www.mim.gov.it/studenti-con-cittadinanza-non-italiana)**, che possiedono spesso adeguate capacità cognitive ma sono bloccati dalla barriera della lingua dello studio (*CALP — Cognitive Academic Language Proficiency*);
* Alunni con ritmi di apprendimento rapidi o **[alto potenziale cognitivo / plusdotazione](https://www.mim.gov.it/alto-potenziale-intellettivo)**, che necessitano di sfide stimolanti per non scivolare nella demotivazione.

---

### 2.2 UDL, Carico Cognitivo e il falso mito della "semplificazione al ribasso"
La cornice metodologica internazionale più solida per rispondere a questa complessità è l'**[Universal Design for Learning (UDL — Progettazione Universale per l'Apprendimento)](https://udlguidelines.cast.org/)**, elaborata dal centro di ricerca CAST. L'UDL propone di progettare materiali e verifiche fin dall'inizio flessibili lungo tre direttrici:
1. **Molteplici mezzi di rappresentazione** (il *cosa* dell'apprendimento: offrire lo stesso contenuto tramite testo ad alta leggibilità, schema visivo/mappa, audio o video);
2. **Molteplici mezzi di azione ed espressione** (il *come* dell'apprendimento: permettere allo studente di dimostrare ciò che sa attraverso canali diversi e con supporti graduati);
3. **Molteplici mezzi di coinvolgimento** (il *perché* dell'apprendimento: graduare la sfida, ridurre l'ansia prestazionale e fornire feedback costruttivi che alimentino il senso di autoefficacia).

Questa visione si salda con la **[Teoria del Carico Cognitivo (*Cognitive Load Theory*) di John Sweller](https://en.wikipedia.org/wiki/Cognitive_load)**. La nostra **[memoria di lavoro (*working memory*)](https://it.wikipedia.org/wiki/Memoria_di_lavoro)** ha una capacità limitata:
* Se uno studente con dislessia o con Italiano L2 consuma il 90% della propria memoria di lavoro per decodificare un font illeggibile, una frase di quattro righe con tre subordinate o una parola non spiegata (**carico cognitivo estraneo**), non gli resterà energia mentale per comprendere il concetto storico o scientifico (**carico cognitivo pertinente**).
* **Usare Gemini e NotebookLM per l'accessibilità** significa azzerare il *carico cognitivo estraneo* tramite un'intelligente opera di **[scaffolding (impalcatura di supporto)](https://it.wikipedia.org/wiki/Scaffolding)**, così da liberare tutte le risorse dello studente per il ragionamento vero e proprio.

> [!IMPORTANT]
> **Perché studiare solo per "Ricordare" (`LOTS 1`) danneggia proprio gli studenti più fragili**  
> Nella **[Tassonomia di Anderson e Krathwohl (2001)](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy#Revised_taxonomy_(2001))**, il primo livello dei processi cognitivi (**LOTS — *Lower Order Thinking Skills***) è `1. Ricordare` (recuperare a memoria date, nomi, definizioni isolate). Paradossalmente, la memoria di lavoro verbale a breve termine e il recupero lessicale rapido sono proprio i punti di maggiore vulnerabilità per molti ragazzi con DSA o BES. Quando chiediamo a Gemini di trasformare un capitolo in una scheda di studio, non dobbiamo quindi limitarci a un elenco di fatti da imparare a memoria, ma dobbiamo chiedere all'IA di costruire un percorso che accompagni l'alunno verso **`2. Comprendere`** (spiegare cause e relazioni con parole semplici ed esempi vicini alla sua esperienza), **`3. Applicare`** (usare una procedura guidata passo-passo) e **`4. Analizzare`** (confrontare due elementi dentro una tabella già predisposta).

---

### 2.3 Criteri di Alta Leggibilità (*Easy-to-Read*) da inserire nei Prompt di Gemini
Quando chiediamo a Gemini di adattare un testo per l'autonomia nello studio, possiamo istruirlo affinché applichi automaticamente le regole europee **[Easy-to-Read (Facile da leggere — Inclusion Europe)](https://www.inclusion-europe.eu/easy-to-read/)** e i criteri tipografici inclusivi, che poi rifiniremo in [Google Documenti](https://support.google.com/docs/?hl=it):

1. **Sintassi lineare e attiva**: frasi brevi (massimo 15–20 parole), preferenza per la forma attiva rispetto a quella passiva, eliminazione delle doppie negazioni (*"Non è improbabile che..."* → *"È probabile che..."*), una sola informazione principale per frase.
2. **Organizzazione visiva (*chunking*)**: testo suddiviso in brevi paragrafi titolati, uso di elenchi puntati o numerati, **parole chiave in grassetto** (mai usare il *corsivo* lungo o il *SOTTOLINEATO TUTTO MAIUSCOLO*, che riducono la riconoscibilità della forma delle parole per chi ha dislessia), allineamento a sinistra ("a bandiera", **mai giustificato**, perché il testo giustificato crea spazi bianchi irregolari tra le parole).
3. **Lessico disciplinare protetto, non cancellato**: un buon adattamento inclusivo **non elimina i termini tecnici fondamentali della disciplina** (es. *fotosintesi, feudo, ipotenusa, condensazione*), perché lo studente deve conoscerli per la verifica e per la crescita culturale; li mantiene evidenziati in grassetto e affianca subito tra parentesi o in un **box glossario** una spiegazione trasparente ed esempi concreti.
4. **Accessibilità tipografica e multimodale in Google Documenti**:
   * utilizzo di font *sans-serif* progettati scientificamente per la fluidità di lettura come **[Lexend](https://fonts.google.com/specimen/Lexend)** o **[Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible)** (entrambi già integrati gratuitamente nei font di Google Documenti), corpo `12–14 pt`, interlinea `1,5`;
   * uso della **[Digitazione vocale (*Speech-to-Text*)](https://support.google.com/docs/answer/4492226?hl=it)** integrata in Google Documenti (`Strumenti → Digitazione vocale`) e della **[Sintesi vocale (*Text-to-Speech* — TTS)](https://it.wikipedia.org/wiki/Sintesi_vocale)** tramite le funzioni di lettura ad alta voce del browser Chrome per consentire lo studio tramite canale uditivo.

---

## Capitolo 3 — Privacy, GDPR, Etica e il Protocollo del Profilo Funzionale Anonimizzato

### 3.1 Il quadro normativo: GDPR, AI Act e Linee Guida MIM
L'utilizzo dell'Intelligenza Artificiale a scuola deve rispettare in modo rigoroso la normativa europea e nazionale sulla protezione dei dati personali, in particolare quando riguarda **minori (11–14 anni)** e situazioni di fragilità:
* Il **[Regolamento UE 2016/679 (GDPR)](https://www.garanteprivacy.it/regolamentoue)** classifica all'**Articolo 9** i dati relativi alla salute (incluse tutte le certificazioni cliniche ex L. 104/1992, le diagnosi di DSA ex L. 170/2010 e le relazioni neuropsichiatriche o psicologiche) come **[categorie particolari di dati personali](https://www.garanteprivacy.it/regolamentoue/guida-all-applicazione-del-regolamento-europeo-in-materia-di-protezione-dei-dati-personali)**, soggette al livello massimo di tutela.
* Il **[Regolamento Europeo sull'Intelligenza Artificiale (AI Act — Regolamento UE 2024/1689)](https://digital-strategy.ec.europa.eu/it/policies/regulatory-framework-ai)** inserisce i sistemi di IA utilizzati nell'istruzione per determinare l'accesso o valutare i risultati degli studenti senza supervisione umana tra gli ambiti che richiedono trasparenza, sorveglianza umana (*Human-in-the-Loop*) e prevenzione di discriminazioni.
* Le indicazioni del **[Garante per la protezione dei dati personali sulla scuola](https://www.garanteprivacy.it/temi/scuola)** e del **[Ministero dell'Istruzione e del Merito (MIM)](https://www.mim.gov.it/)** vietano in modo assoluto di caricare su piattaforme di IA generativa documenti contenenti nomi, cognomi, codici fiscali, date di nascita, codici diagnostici (ICD-10) o scansioni integrali di PEI e PDP riconducibili a uno specifico alunno.

---

### 3.2 Anonimizzazione vs Pseudonimizzazione e il "Profilo Funzionale Anonimizzato"
Sul piano giuridico e tecnico occorre distinguere due concetti spesso confusi:
* **[Pseudonimizzazione](https://it.wikipedia.org/wiki/Pseudonimizzazione)**: sostituire il nome con una sigla o un codice (es. *"Alunno M. R. della classe 2ª B dell'IC Verdi di Milano, nato il..."*), lasciando però nel testo dettagli contestuali o clinici tali per cui chiunque conosca la scuola possa risalire all'identità del minore. **La pseudonimizzazione rimane un dato personale soggetto al GDPR.**
* **[Anonimizzazione](https://it.wikipedia.org/wiki/Anonimizzazione)**: rimuovere in modo irreversibile ogni elemento identificativo diretto e indiretto, cosicché l'informazione non sia più associabile in alcun modo a una persona fisica identificabile.

Ma c'è di più: **a Gemini non serve affatto conoscere la diagnosi medica o il codice ICD-10 per adattare bene una scheda o una verifica!** Un modello di IA lavora molto meglio se, al posto dell'etichetta clinica, riceve una descrizione dei **bisogni funzionali di apprendimento** e delle **strategie didattiche richieste**.

Per questo nel nostro corso adottiamo il **Protocollo del Profilo Funzionale Anonimizzato**:

| ❌ Cosa NON inserire MAI nel prompt | ✅ Come trasformarlo in Profilo Funzionale Anonimizzato per Gemini |
| :--- | :--- |
| *"Adatta questo testo per Marco Bianchi della 2ª C che ha dislessia severa F81.0 e ADHD, come scritto nel PDP allegato..."* | *"Adatta questo testo per una classe seconda della scuola secondaria di I grado (12 anni), includendo accorgimenti per studenti che presentano affaticamento nella decodifica di testi lunghi e necessità di tempi brevi di concentrazione: usa paragrafi di massimo 4 righe, parole chiave in grassetto e un glossario iniziale."* |
| *"Ecco il PEI di Giulia (L. 104 art. 3 comma 3 con disabilità intellettiva lieve), falle una verifica di storia..."* | *"Progetta una versione facilitata per obiettivi minimi di questa verifica di storia per la 1ª media: riduci il carico linguistico a frasi semplici soggetto-verbo-complemento, usa domande a scelta guidata con 3 opzioni chiare e inserisci un esempio già svolto all'inizio di ogni esercizio."* |
| *"Prepara una scheda per Ahmed, arrivato dal Marocco due mesi fa che non parla italiano..."* | *"Adatta questa scheda di geografia per studenti di 1ª media con Italiano L2 a livello iniziale (A1/A2 del QCER): usa lessico ad alta frequenza, frasi brevi al presente e un glossario dei 6 termini disciplinari spiegati con parole semplicissime."* |

---

### 3.3 Strumenti Locali Gratuiti per la Privacy sul PC Personale del Docente
Quando un insegnante lavora sul proprio PC personale a casa e ha necessità di manipolare file PDF prima di usarli, oppure desidera sperimentare l'IA o creare attività interattive **100% offline (senza che un solo byte esca dal proprio computer)**, esistono quattro soluzioni gratuite di altissimo valore:

1. **[PDF24 Creator](https://tools.pdf24.org/it/creator)** *(Windows, 100% gratuito e locale)*: a differenza dei siti web di modifica PDF (che caricano il documento su server esterni!), la versione desktop di PDF24 lavora interamente offline sul computer. Include la funzione **"Oscura / Redigi PDF"** che elimina fisicamente (e non solo coprendoli con un rettangolo nero rimovibile!) nomi, intestazioni o dati personali da una vecchia verifica o da un documento prima di estrarne le pagine didattiche.
2. **[LM Studio](https://lmstudio.ai/)** e **[GPT4All](https://www.nomic.ai/gpt4all)** (basati su motori di inferenza locale come **[Ollama](https://ollama.com/)**) *(Windows/Mac/Linux, gratuiti)*: permettono di scaricare ed eseguire direttamente sulla memoria del proprio PC personale piccoli modelli linguistici aperti (es. *Gemma*, *Qwen*, *Llama*) con un'interfaccia grafica identica a una chat, ma funzionante anche **con il Wi-Fi spento**. Richiedono un computer moderno (almeno 8–16 GB di RAM) e garantiscono riservatezza assoluta per rielaborare bozze delicate.
3. **[Lumi Education (H5P Desktop)](https://app.lumi.education/)** *(Windows/Mac/Linux, open-source e gratuito)*: applicazione desktop che consente di costruire offline oltre 40 tipologie di contenuti e verifiche interattive basate sullo standard aperto **[H5P](https://h5p.org/)** (video interattivi, testi con parole mancanti, flashcard, immagini con hotspot) ed esportarle in un singolo file `.html` funzionante in qualsiasi browser e caricabile su Google Classroom senza richiedere account esterni agli studenti.
4. **[LibreOffice](https://it.libreoffice.org/)** *(Windows/Mac/Linux, open-source e gratuito)*: suite da ufficio locale utile per l'editing offline, la pulizia dei metadati dei file e l'esportazione in PDF accessibili ([PDF/UA](https://it.wikipedia.org/wiki/PDF/UA)).

---

## Capitolo 4 — Google NotebookLM e Gemini Multimodale per lo Studio Inclusivo

### 4.1 Come funziona un Taccuino Multimodale in Google NotebookLM
**[Google NotebookLM](https://notebooklm.google/)** è oggi uno degli strumenti più potenti e sicuri per l'inclusione scolastica perché unisce la potenza dei modelli Gemini al vincolo rigoroso delle fonti del docente (*Grounding*).

In un singolo taccuino di NotebookLM l'insegnante può caricare contemporaneamente:
* file **PDF** o testi copiati (es. la propria dispensa o le pagine del capitolo);
* file direttamente dal proprio Drive (**Google Documenti** e **Google Presentazioni**);
* **URL di pagine web** istituzionali o divulgative affidabili;
* **Link a video di [YouTube](https://www.youtube.com/)** dotati di sottotitoli/trascrizione.

Una volta caricate le fonti, il pannello **Studio** di NotebookLM mette a disposizione tre funzioni ad altissimo impatto inclusivo:

1. **Mappe Mentali Interattive Automatiche**: con un clic NotebookLM analizza tutte le fonti caricate ed estrae la gerarchia concettuale sotto forma di **[mappa mentale](https://it.wikipedia.org/wiki/Mappa_mentale)** navigabile ed espandibile per rami, scaricabile anche come immagine da inserire nella scheda di studio dell'alunno (affiancando così alle classiche **[mappe concettuali](https://it.wikipedia.org/wiki/Mappa_concettuale)** uno strumento immediato di orientamento visivo).
2. **Audio Overview (Podcast a due voci in italiano)**: NotebookLM genera una conversazione audio naturale tra due voci sintetiche che discutono, riassumono e spiegano con esempi chiari i punti chiave dei documenti caricati dal docente (il docente può anche cliccare su *"Personalizza"* prima di generare l'audio per dare un'istruzione specifica, ad esempio: *"Rivolgetevi a studenti di seconda media, usate un tono incoraggiante, spiegate bene i tre termini scientifici principali e fate un esempio quotidiano"*). Il file audio `.mp3`/`.wav` può essere scaricato e caricato su Google Classroom: per un alunno con dislessia severa, difficoltà visiva o stanchezza serale nello studio a casa, poter **ascoltare una spiegazione dialogata di 6–8 minuti basata esattamente sugli appunti del proprio professore** rappresenta un supporto straordinario.
3. **Guide allo Studio, Glossari e Domande di Comprensione**: nella chat del taccuino il docente può chiedere a NotebookLM di estrarre un glossario dei termini presenti *solo* nei materiali caricati o di formulare domande graduando la difficoltà dalla comprensione letterale all'inferenza.

> [!TIP]
> **Strategia operativa "Anti-Attesa" in laboratorio (Fase 1B)**  
> Poiché la generazione dell'**Audio Overview** richiede generalmente 3–5 minuti di elaborazione, nella pratica d'aula conviene seguire un **flusso parallelo a 2 corsie**: (1) caricare subito il documento e **avviare l'Audio Overview in background**; (2) generare nel frattempo la **Mappa Mentale PNG** e verificare le citazioni nella chat del taccuino; (3) ascoltare e scaricare l'audio ormai pronto al termine dei 30 minuti.

---

## Capitolo 5 — Governare Gemini per lo Studio Accessibile (e Ponte verso l'Incontro 2): l'Ingegneria del Prompt in 5 Punti (`R-C-N-A-F`)

### 5.1 Dal Prompt Ingenuo al Prompt Ingegnerizzato
L'**[Ingegneria del Prompt (*Prompt Engineering*)](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it)** applicata alla didattica non consiste nell'imparare "formule magiche", ma nel comunicare all'IA tutte le variabili progettuali che un buon insegnante ha già nella propria testa.

Nella letteratura tecnica si distinguono in particolare:
* **[Zero-shot prompting](https://en.wikipedia.org/wiki/Prompt_engineering)**: dare un'istruzione diretta senza fornire esempi del risultato atteso;
* **[Few-shot prompting](https://en.wikipedia.org/wiki/Prompt_engineering)**: inserire dentro il prompt 1 o 2 esempi concreti della struttura desiderata (tecnica formidabile quando si vuole che Gemini rispetti un formato preciso di domanda o di scheda);
* **Assegnazione del ruolo (*Persona pattern*)** e **vincoli negativi espliciti** (dire chiaramente al modello cosa *non* deve fare, es. *"Non usare frasi con più di 18 parole e non inserire doppie negazioni"*).

### 5.2 Il Framework in 5 Punti del Corso "Valutare per Crescere"
In tutti i laboratori del corso utilizzeremo una struttura costante in **5 blocchi (R-C-N-A-F)**, facile da ricordare e da adattare a qualsiasi materia:

1. **[R] RUOLO**: chi deve impersonare Gemini (*"Agisci come un docente esperto di [Materia] nella Scuola Secondaria di Primo Grado e specialista in didattica inclusiva UDL"*).
2. **[C] CONTESTO E CLASSE TARGET**: a quale classe è destinato il materiale (*"Lavoriamo per una classe [1ª/2ª/3ª] media, studenti di [11/12/13] anni"*).
3. **[N] NUCLEI DISCIPLINARI E LIVELLO COGNITIVO (LOTS → HOTS)**: su quale testo/argomento lavorare, quali concetti non devono andare persi e quali processi cognitivi attivare (*"Partendo dal testo/immagine allegata su [Argomento], mantieni intatti i seguenti nuclei fondanti: [...]. Accompagna lo studente dal livello Ricordare/Comprendere (LOTS) fino ad Applicare/Analizzare"*).
4. **[A] ACCESSIBILITÀ E PROFILO FUNZIONALE ANONIMIZZATO**: quali barriere rimuovere e quali *scaffolding* inserire (*"Rendi il materiale accessibile per studenti con fatica nella decodifica testuale e memoria di lavoro fragile [oppure Italiano L2 livello A2]: frasi di max 15-18 parole, forma attiva, parole chiave in grassetto, zero doppie negazioni, glossario con esempi concreti"*).
5. **[F] FORMATO DI OUTPUT**: come deve essere impaginato il risultato per poterlo esportare subito in Google Documenti o Google Fogli (*"Restituisci l'output diviso in 3 sezioni chiare: 1) Testo ad alta leggibilità diviso in 3 paragrafi titolati; 2) Tabella Glossario con Termine, Spiegazione semplice ed Esempio; 3) 4 domande progressive di autoverifica con suggerimento di aiuto tra parentesi"*).

### 5.3 Confronto reale: cosa cambia nell'output di Gemini

| Dimensione | Output da Prompt Ingenuo (*"Riassumi questo testo sui vulcani per un ragazzo DSA di 1ª media e fai 3 domande"*) | Output da Prompt Ingegnerizzato in 5 Punti (*Framework R-C-N-A-F*) |
| :--- | :--- | :--- |
| **Lessico disciplinare** | Spesso cancella i termini scientifici (*magma, lava, cratere, camino vulcanico*) impoverendo il contenuto, oppure lascia frasi complesse non spiegate. | Mantiene i **termini scientifici fondamentali in grassetto** e li spiega subito in modo trasparente nel testo e nella tabella glossario. |
| **Struttura sintattica** | Un unico blocco di testo continuo, con subordinate lunghe e passivi (*"Viene definita eruzione effusiva quella in cui..."*). | Paragrafi brevi titolati con domande-guida (*"1. Che cos'è un vulcano?", "2. Perché il magma sale?"*), frasi attive sotto le 18 parole. |
| **Domande di studio** | 3 domande tutte sul livello `1. Ricordare` (*"Cos'è il magma? Quali sono le parti del vulcano?"*) senza alcun supporto. | 4 domande graduate lungo la scala **LOTS → HOTS** (`Ricordare` con banca parole → `Comprendere` differenza magma/lava → `Applicare/Analizzare` confronto tra due tipi di eruzione in tabella guidata), ciascuna con un *suggerimento di avvio*. |

*(Per esercitarsi subito sul confronto tra prompt ingenuo e prompt `R-C-N-A-F` anche senza avere un testo proprio a portata di mano, è disponibile il [Kit Materiali Campione Pronti per l'Aula](../Materiali_Trasversali/04_Kit_Materiali_Campione_Pronti_Aula.md)).*

---

## Capitolo 6 — Glossario Ragionato dei Termini Tecnici (con Collegamenti Esterni)

La tabella seguente raccoglie tutti i termini tecnici incontrati nell'Incontro 1. Ogni voce include un **collegamento esterno diretto** per approfondire il significato tecnologico, normativo o pedagogico.

| Termine Tecnico | Spiegazione sintetica per il docente | Collegamento esterno di approfondimento |
| :--- | :--- | :--- |
| **AI Act (Regolamento UE 2024/1689)** | Primo regolamento europeo sull'Intelligenza Artificiale; classifica i sistemi IA per livello di rischio e impone trasparenza e supervisione umana in ambito educativo. | [Commissione Europea — Quadro normativo sull'IA](https://digital-strategy.ec.europa.eu/it/policies/regulatory-framework-ai) |
| **Allucinazione (*Hallucination*)** | Fenomeno per cui un modello IA genera informazioni fattualmente false, date errate o citazioni inventate presentandole come vere. | [Wikipedia IT — Allucinazione (intelligenza artificiale)](https://it.wikipedia.org/wiki/Allucinazione_(intelligenza_artificiale)) |
| **Anonimizzazione** | Processo irreversibile che rimuove da un testo o documento ogni dato identificativo diretto o indiretto, rendendo impossibile risalire alla persona. | [Wikipedia IT — Anonimizzazione](https://it.wikipedia.org/wiki/Anonimizzazione) |
| **BES (Bisogni Educativi Speciali)** | Macro-categoria pedagogica (DM 27/12/2012) che comprende disabilità (L. 104/92), disturbi evolutivi specifici (DSA, ADHD, FIL) e svantaggio socio-economico, linguistico o culturale (NAI). | [Ministero dell'Istruzione e del Merito — BES](https://www.mim.gov.it/bisogni-educativi-speciali) |
| **Bias algoritmico** | Distorsione sistematica o pregiudizio (culturale, linguistico, di genere) presente nelle risposte dell'IA a causa di squilibri nei dati di addestramento. | [Wikipedia IT — Bias algoritmico](https://it.wikipedia.org/wiki/Bias_algoritmico) |
| **Carico Cognitivo (*Cognitive Load*)** | Quantità di risorse mentali richieste alla memoria di lavoro durante un compito; la didattica inclusiva riduce il carico *estraneo* (ostacoli grafici/linguistici) a favore di quello *pertinente*. | [Wikipedia EN — Cognitive load theory](https://en.wikipedia.org/wiki/Cognitive_load) |
| **Catena di pensiero (*Chain-of-Thought*)** | Tecnica (e modalità nativa dei modelli *Thinking*) in cui l'IA scompone un problema complesso in passaggi logici intermedi prima di dare la risposta finale. | [Wikipedia IT — Prompt engineering e Chain-of-Thought](https://it.wikipedia.org/wiki/Prompt_engineering) |
| **Criterio KSM** | Modello tripartito per progettare prove e griglie di valutazione bilanciando **K** (*Knowledge* — Conoscenze `A, B`), **S** (*Skills* — Abilità procedurali `C`) e **M** (*Mindset, Metacognition & Mastery* — Metacognizione `D`). | [Wikipedia EN — Anderson & Krathwohl Revised Taxonomy](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy#Revised_taxonomy_(2001)) · [Wikipedia IT — Metacognizione](https://it.wikipedia.org/wiki/Metacognizione) |
| **DSA (Legge 170/2010)** | Disturbi Specifici dell'Apprendimento (dislessia, disortografia, disgrafia, discalculia) che interessano specifici domini di abilità lasciando intatto il funzionamento intellettivo generale. | [Normattiva — Testo della Legge 8 ottobre 2010, n. 170](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-10-08;170) |
| **Easy-to-Read (Facile da leggere)** | Standard europeo di redazione di testi ad alta accessibilità cognitiva e linguistica (frasi brevi, forma attiva, parole difficili spiegate, layout arioso). | [Inclusion Europe — Linee guida Easy-to-Read](https://www.inclusion-europe.eu/easy-to-read/) |
| **Finestra di contesto (*Context Window*)** | Quantità massima di testo/immagini (misurata in token) che un modello IA può elaborare e ricordare all'interno di una singola conversazione. | [Google AI for Developers — Long Context in Gemini](https://ai.google.dev/gemini-api/docs/long-context?hl=it) |
| **Funzioni esecutive** | Processi cognitivi superiori (memoria di lavoro, flessibilità cognitiva, autocontrollo, pianificazione) fondamentali per l'autonomia nello studio e spesso fragili in ADHD e DSA. | [Wikipedia IT — Funzioni esecutive](https://it.wikipedia.org/wiki/Funzioni_esecutive) |
| **GDPR (Regolamento UE 2016/679)** | Regolamento generale europeo sulla protezione dei dati personali; tutela con particolare rigore i dati dei minori e i dati relativi alla salute (Art. 9). | [Garante Privacy — Guida al Regolamento UE (GDPR)](https://www.garanteprivacy.it/regolamentoue) |
| **Gem (in Google Gemini)** | Assistente personalizzato all'interno di Google Gemini in cui il docente può salvare istruzioni permanenti (es. materia, classe, regole di accessibilità). | [Guida di Google Gemini — Utilizzare e creare Gem](https://support.google.com/gemini/answer/15235603?hl=it) |
| **Gemini Canvas** | Ambiente di lavoro interattivo affiancato alla chat di Gemini che permette di modificare, semplificare o espandere singole porzioni di documento in tempo reale. | [Guida di Google Gemini — Collaborare con Gemini Canvas](https://support.google.com/gemini/answer/16047329?hl=it) |
| **Grounding / RAG (*Retrieval-Augmented Generation*)** | Architettura che vincola l'IA a generare risposte basandosi solo su un insieme specifico di documenti forniti dall'utente (come avviene in NotebookLM), riducendo le allucinazioni. | [Google Cloud — Che cos'è la RAG (Retrieval-Augmented Generation)](https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=it) |
| **H5P (e Lumi Education)** | Standard open-source basato su HTML5 per creare contenuti e verifiche interattive (video con quiz, cloze, flashcard); utilizzabile offline sul PC con l'app gratuita Lumi. | [H5P.org — Documentazione ufficiale](https://h5p.org/) · [Lumi Education](https://app.lumi.education/) |
| **HOTS (*Higher Order Thinking Skills*)** | Processi cognitivi di ordine superiore nella tassonomia di Anderson & Krathwohl: `4. Analizzare`, `5. Valutare`, `6. Creare`. | [Wikipedia EN — Higher-order thinking](https://en.wikipedia.org/wiki/Higher-order_thinking) |
| **Human-in-the-Loop (HITL)** | Principio metodologico ed etico secondo cui l'essere umano (il docente) mantiene sempre il controllo decisionale, la supervisione e la validazione finale sull'output dell'IA. | [Wikipedia EN — Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) |
| **LLM (*Large Language Model*)** | Modello linguistico di grandi dimensioni addestrato su vasti corpora testuali per comprendere, riassumere, tradurre e generare testi in linguaggio naturale. | [Wikipedia IT — Modello linguistico di grandi dimensioni](https://it.wikipedia.org/wiki/Modello_linguistico_di_grandi_dimensioni) |
| **LOTS (*Lower Order Thinking Skills*)** | Processi cognitivi di base nella tassonomia di Anderson & Krathwohl: `1. Ricordare`, `2. Comprendere`, `3. Applicare`. | [Wikipedia IT — Tassonomia di Bloom e revisione](https://it.wikipedia.org/wiki/Tassonomia_di_Bloom) |
| **Multimodalità (IA Multimodale)** | Capacità di un modello IA (come Gemini) di ricevere in input ed elaborare congiuntamente tipi diversi di informazione: testo, immagini/foto, audio, video e PDF. | [Google Cloud — Che cos'è l'IA multimodale](https://cloud.google.com/use-cases/multimodal-ai?hl=it) |
| **NotebookLM (Google)** | Strumento gratuito di Google basato su Gemini che lavora esclusivamente sulle fonti caricate dall'utente, generando guide allo studio, Mappe Mentali e Audio Overview (podcast). | [Google NotebookLM — Pagina ufficiale](https://notebooklm.google/) |
| **OCR (*Optical Character Recognition*)** | Tecnologia che riconosce ed estrae testo modificabile da immagini o scansioni di pagine cartacee; oggi integrata direttamente nella visione multimodale di Gemini. | [Wikipedia IT — Riconoscimento ottico dei caratteri](https://it.wikipedia.org/wiki/Riconoscimento_ottico_dei_caratteri) |
| **Prompt / Prompt Engineering** | Istruzione fornita a un sistema di IA; il *Prompt Engineering* è l'arte di strutturare tale istruzione (ruolo, contesto, vincoli, formato) per ottenere output accurati. | [Google Cloud — Che cos'è il Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering?hl=it) |
| **Pseudonimizzazione** | Tecnica che sostituisce i dati identificativi diretti (es. nome e cognome) con un codice o sigla, ma che non equivale all'anonimizzazione se il contesto consente ancora la re-identificazione. | [Wikipedia IT — Pseudonimizzazione](https://it.wikipedia.org/wiki/Pseudonimizzazione) |
| **Scaffolding** | Insieme di supporti, guide, esempi svolti, schemi semicompilati e domande-stimolo che permettono a uno studente di affrontare un compito cognitivo complesso che da solo non riuscirebbe ancora a svolgere. | [Wikipedia IT — Scaffolding](https://it.wikipedia.org/wiki/Scaffolding) |
| **Sintesi Vocale (TTS — *Text-to-Speech*)** | Tecnologia assistiva e compensativa che converte automaticamente un testo scritto in voce parlata, fondamentale per l'autonomia nello studio e nelle verifiche degli alunni con dislessia. | [Wikipedia IT — Sintesi vocale](https://it.wikipedia.org/wiki/Sintesi_vocale) |
| **Tassonomia di Anderson e Krathwohl (2001)** | Revisione bidimensionale della tassonomia di Bloom che incrocia 4 tipi di Conoscenza (`A` Fattuale, `B` Concettuale, `C` Procedurale, `D` Metacognitiva) con 6 Processi Cognitivi (`1. Ricordare → 6. Creare`). | [Wikipedia EN — Anderson & Krathwohl Revised Taxonomy](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy#Revised_taxonomy_(2001)) |
| **Token** | Unità elementare di testo (parola, parte di parola o segno di punteggiatura) in cui un modello LLM scompone il testo in entrata e in uscita per elaborarlo. | [Google Cloud Vertex AI — Concetti base: Token e modelli](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview?hl=it) |
| **UDL (*Universal Design for Learning*)** | Approccio psicopedagogico che progetta curricoli, materiali e valutazioni accessibili fin dall'origine a tutti gli studenti tramite molteplici canali di rappresentazione, espressione e coinvolgimento. | [CAST — The UDL Guidelines](https://udlguidelines.cast.org/) |

---

## Capitolo 7 — Valutazione delle Fonti secondo il Criterio KSM (Anderson & Krathwohl + KSM)

In conformità al protocollo metodologico del corso, tutte le fonti esterne istituzionali, scientifiche e tecniche selezionate per questa dispensa sono state vagliate attraverso i tre assi del **Criterio KSM** integrato con i processi superiori (**HOTS `4. Analizzare` e `5. Valutare`**) della **Tassonomia di Anderson & Krathwohl**:
* **K — Knowledge (`[A5, B5]` — 35%)**: autorevolezza dell'ente/autore, natura primaria o ufficiale della fonte, esattezza fattuale e rigore concettuale;
* **S — Skills & Methodology (`[C4, C5]` — 40%)**: trasparenza metodologica, tracciabilità normativa o tecnica e riproducibilità delle procedure;
* **M — Mindset, Motivation & Metacognition (`[B4, D5]` — 25%)**: neutralità informativa, assenza di bias promozionali ingannevoli e validazione tramite triangolazione incrociata.

*(Sono state escluse tutte le fonti di Livello D — Inattendibili).*

| Fonte / Riferimento Esterno | Criterio K — Knowledge `[A5, B5]` (35%) | Criterio S — Skills & Metodo `[C4, C5]` (40%) | Criterio M — Mindset & Triangolazione `[B4, D5]` (25%) | Livello KSM |
| :--- | :--- | :--- | :--- | :---: |
| **Normattiva & Ministero dell'Istruzione e del Merito (MIM)** (*L. 104/1992, L. 170/2010, DM BES 2012, Nuovo PEI*) | **[A5/B5]** Fonti normative primarie della Repubblica Italiana; testo vigente ufficiale. | **[C5]** Riferimenti giuridici e linee guida procedurali vincolanti per le istituzioni scolastiche. | **[D5]** Piena ufficialità istituzionale; pilastro normativo obbligatorio. | **Livello A** *(Primaria / Gold Standard)* |
| **Garante per la Protezione dei Dati Personali & Commissione Europea** (*GDPR UE 2016/679, AI Act UE 2024/1689, Dossier Scuola*) | **[A5/B5]** Autorità indipendente di vigilanza e legislatore europeo; massima accuratezza giuridica. | **[C5]** Linee guida operative verificabili su trattamento dati di minori, dati sanitari (Art. 9) e IA. | **[D5]** Neutralità regolatoria e tutela dei diritti fondamentali. | **Livello A** *(Primaria / Gold Standard)* |
| **CAST — Universal Design for Learning Guidelines** (`udlguidelines.cast.org`) | **[B5/B6]** Fonte primaria internazionale del framework UDL, basata su meta-analisi delle scienze cognitive. | **[C5/C6]** Matrice metodologica strutturata in principi, linee guida e *checkpoint* osservabili in classe. | **[D5/D6]** Standard scientifico aperto e validato a livello internazionale (UNESCO/OCSE). | **Livello A** *(Primaria / Gold Standard)* |
| **Documentazione Ufficiale Google (Google AI for Developers, Google Cloud, Guida Gemini, NotebookLM, Google Fonts)** | **[A5/B4]** Documentazione tecnica primaria del produttore sulle architetture Gemini, token, *long context*, RAG, Canvas, Gem e font *Lexend/Atkinson*. | **[C4/C5]** Specifiche tecniche riproducibili e guide passo-passo aggiornate alle ultime versioni dell'ecosistema. | **[B4/D5]** Documentazione tecnica ufficiale; triangolata con la letteratura indipendente sugli LLM per separare le specifiche tecniche dal posizionamento commerciale. | **Livello B** *(Qualificata / Ufficiale)* |
| **Inclusion Europe — Standard Easy-to-Read** (`inclusion-europe.eu`) | **[B5]** Standard europeo di riferimento per la redazione di testi ad alta accessibilità cognitiva e linguistica. | **[C5]** Regole redazionali operative, testate empiricamente con lettori con disabilità intellettiva e difficoltà linguistiche. | **[D5]** Assenza di fini commerciali; consenso europeo consolidato sull'accessibilità. | **Livello A** *(Primaria / Gold Standard)* |
| **Voci Enciclopediche Tecniche e Psicopedagogiche (Wikipedia IT/EN, ISSalute)** (*LLM, Allucinazioni, Bias, Tassonomia Anderson & Krathwohl, Carico Cognitivo, ADHD, TTS/OCR*) | **[A2/B4]** Sintesi divulgativo-accademiche ben referenziate per il chiarimento rapido del lessico tecnico da parte dei docenti. | **[C3/C4]** Esposizione chiara dei concetti con bibliografia primaria in calce (Sweller, Anderson & Krathwohl, Vaswani et al.). | **[B4/D3]** Scopo informativo aperto e revisione comunitaria; utilizzate come porta d'accesso terminologica verificata rispetto alle fonti primarie. | **Livello B / C** *(Qualificata / Divulgativa verificata)* |
