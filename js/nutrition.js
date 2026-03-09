/* ═══════════════════════════════════════
   NUTRITION PAGE
   ═══════════════════════════════════════ */

import { DIETS } from './diets.js';
import { renderWeeklyMenuSection, initWeeklyMenuTabs } from './weekly-menu.js';

function renderDietsSection() {
  const tabs = DIETS.map((d, i) =>
    `<button class="diet-tab ${i === 0 ? 'active' : ''}" data-diet="${d.id}">
      <i data-lucide="${d.icon}"></i>
      <span>${d.name}</span>
    </button>`
  ).join('');

  const panels = DIETS.map((d, i) =>
    `<div class="diet-panel ${i === 0 ? 'active' : ''}" id="diet-${d.id}">
      <div class="diet-header">
        <p class="diet-description">${d.description}</p>
        <span class="diet-kcal"><i data-lucide="flame"></i> ${d.kcal}</span>
      </div>
      <div class="diet-meals">
        ${d.meals.map(meal =>
          `<div class="diet-meal">
            <div class="diet-meal-header">
              <h4>${meal.name}</h4>
              <span class="diet-meal-time">${meal.time}</span>
            </div>
            <ul>
              ${meal.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>`
        ).join('')}
      </div>
    </div>`
  ).join('');

  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Diete per Atleti</h2>
      <div class="diet-tabs">${tabs}</div>
      <div class="diet-panels">${panels}</div>
    </div>
  `;
}

function initDietTabs(view) {
  view.querySelectorAll('.diet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const dietId = tab.getAttribute('data-diet');

      // Update tabs
      view.querySelectorAll('.diet-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      view.querySelectorAll('.diet-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('diet-' + dietId);
      if (panel) panel.classList.add('active');
    });
  });
}

export function renderNutrition() {
  const view = document.getElementById('view-nutrition');
  view.classList.add('active');

  view.innerHTML = `
    <!-- HEADER: Concetti Base PFC -->
    <div class="nutrition-hero">
      <h1 class="nutrition-hero-title">Concetti Base dei PFC</h1>
      <p class="nutrition-hero-desc">
        PFC sta per le tre principali fonti di energia per il nostro corpo:
        <strong>P</strong> per proteine, <strong>F</strong> per grassi (fats) e <strong>C</strong> per carboidrati.
      </p>
    </div>

    <!-- Corollario: Aumentare massa muscolare -->
    <div class="nutrition-muscle-section">
      <h2 class="nutrition-muscle-title">Per aumentare la massa muscolare</h2>
      <p class="nutrition-muscle-desc">Il rapporto tra proteine, grassi e carboidrati deve rispettare le seguenti proporzioni:</p>

      <h3 class="nutrition-muscle-label">Per gli uomini</h3>

      <div class="pfc-ratio-grid">
        <div class="pfc-ratio-item">
          <h4>Proteine</h4>
          <span class="pfc-ratio-value">20%-30%</span>
        </div>
        <div class="pfc-ratio-item">
          <h4>Grassi</h4>
          <span class="pfc-ratio-value">10%-20%</span>
        </div>
        <div class="pfc-ratio-item">
          <h4>Carboidrati</h4>
          <span class="pfc-ratio-value">50%-60%</span>
        </div>
      </div>

      <div class="nutrition-muscle-note">
        <p>In parole semplici, l'apporto giornaliero raccomandato di grassi è di almeno <strong>0,8 grammi per chilogrammo di peso corporeo</strong>, mentre l'apporto giornaliero raccomandato di proteine è di <strong>2 grammi per chilogrammo di peso corporeo</strong>. Per i carboidrati, si consiglia di consumare il doppio dei grammi di carboidrati rispetto alle proteine.</p>
      </div>
    </div>

    <!-- Card gialla con le 3 categorie -->
    <div class="pfc-card">
      <div class="pfc-item">
        <h3>Proteine</h3>
        <p>sono essenziali per costruire e riparare i tessuti e per le reazioni metaboliche</p>
      </div>
      <div class="pfc-divider"></div>
      <div class="pfc-item">
        <h3>Grassi</h3>
        <p>aiutano ad assorbire alcune vitamine e a produrre ormoni</p>
      </div>
      <div class="pfc-divider"></div>
      <div class="pfc-item">
        <h3>Carboidrati</h3>
        <p>forniscono energia e forza</p>
      </div>
      <div class="pfc-divider"></div>
      <div class="pfc-item">
        <h3>Collagene</h3>
        <p>mantiene la pelle sana e aiuta la guarigione di ferite e cicatrici</p>
      </div>
    </div>

    <!-- Sezione fabbisogno giornaliero -->
    <div class="nutrition-section">
      <p class="nutrition-section-subtitle">
        È importante assicurarsi di assumere la giusta quantità di ogni elemento ogni giorno
      </p>
      <div class="pfc-daily">
        <div class="pfc-daily-item">
          <h4>Proteine</h4>
          <div class="pfc-daily-line"></div>
          <p>1g di proteine per 1kg di peso corporeo</p>
        </div>
        <div class="pfc-daily-item">
          <h4>Grassi</h4>
          <div class="pfc-daily-line"></div>
          <p>1g di grassi per 1kg di peso corporeo</p>
        </div>
        <div class="pfc-daily-item">
          <h4>Carboidrati</h4>
          <div class="pfc-daily-line"></div>
          <p>peso corporeo moltiplicato per 4g</p>
        </div>
      </div>
    </div>

    <!-- Sezione calorie -->
    <div class="nutrition-calories-section">
      <div class="nutrition-calories-grid">
        <div class="nutrition-calories-left">
          <h3>Un altro concetto fondamentale per mantenere una dieta sana sono le calorie.</h3>
        </div>
        <div class="nutrition-calories-right">
          <p>Molti credono erroneamente che il valore energetico di un alimento ne determini l'utilità, ma non è così.</p>
          <p>Per calcolare le calorie giornaliere minime, usa la formula. Tieni presente che questo valore non tiene conto dell'attività fisica durante la giornata:</p>
          <p class="nutrition-formula"><strong>per gli uomini</strong>, minimo = peso x 24,2 kcal</p>
        </div>
      </div>
    </div>

    <!-- Menu a tendina per categoria -->
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Approfondimenti per Categoria</h2>

      <!-- Accordion Proteine -->
      <div class="nutrition-accordion">
        <div class="nutrition-accordion-header" data-target="acc-proteine">
          <div class="nutrition-accordion-label">
            <i data-lucide="beef"></i>
            <span>Proteine</span>
          </div>
          <i data-lucide="chevron-down" class="nutrition-accordion-icon"></i>
        </div>
        <div class="nutrition-accordion-body" id="acc-proteine">
          <div class="nutrition-accordion-content">
            <p>Le proteine possono provenire da fonti vegetali o animali.</p>
            <p>Le proteine sono composte da 22 tipi di aminoacidi, di cui 9 sono aminoacidi essenziali che dobbiamo assumere attraverso il cibo.</p>
            <p>La differenza principale tra proteine vegetali e animali è la composizione dei diversi aminoacidi.</p>

            <div class="nutrition-sub-section">
              <h4>Proteine Animali</h4>
              <ul>
                <li>Pesce</li>
                <li>Uova</li>
                <li>Latticini</li>
                <li>Carne rossa</li>
                <li>Pollame</li>
              </ul>
              <p class="nutrition-note">Sono fonti complete di proteine perché contengono tutti i 9 aminoacidi essenziali.</p>
            </div>

            <div class="nutrition-sub-section">
              <h4>Vegetali (quelli con più proteine)</h4>
              <ul>
                <li>Cereali integrali</li>
                <li>Lenticchie</li>
                <li>Frutta secca</li>
                <li>Fagioli</li>
                <li>Legumi</li>
                <li>Alcuni frutti, come l'avocado</li>
                <li>Soia</li>
                <li>Semi di canapa</li>
                <li>Riso</li>
                <li>Piselli</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion Grassi -->
      <div class="nutrition-accordion">
        <div class="nutrition-accordion-header" data-target="acc-grassi">
          <div class="nutrition-accordion-label">
            <i data-lucide="droplets"></i>
            <span>Grassi</span>
          </div>
          <i data-lucide="chevron-down" class="nutrition-accordion-icon"></i>
        </div>
        <div class="nutrition-accordion-body" id="acc-grassi">
          <div class="nutrition-accordion-content">
            <p>Anche i grassi si presentano in diverse varietà.</p>

            <div class="nutrition-sub-section">
              <h4>Acidi grassi saturi</h4>
              <p>Si trovano in quantità variabili in:</p>
              <ul>
                <li>Strutto</li>
                <li>Carne grassa</li>
                <li>Pesce</li>
                <li>Uova</li>
                <li>Latticini</li>
              </ul>
            </div>

            <div class="nutrition-sub-section">
              <h4>Acidi grassi insaturi</h4>
              <p>Si trovano principalmente negli alimenti vegetali e nel pesce. Non sono molto resistenti al calore, quindi è meglio consumarli crudi.</p>
              <p>Gli acidi grassi insaturi si dividono in 2 gruppi:</p>
              <p>Monoinsaturi e polinsaturi, prodotti che li contengono:</p>
              <ul>
                <li>Olio di pesce</li>
                <li>Avocado</li>
                <li>Arachidi</li>
                <li>Olive</li>
                <li>Anacardi</li>
                <li>Olio d'oliva, di sesamo e di colza</li>
                <li>Noci</li>
                <li>Pesce</li>
                <li>Mandorle</li>
                <li>Semi di lino</li>
                <li>Olio di soia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion Carboidrati -->
      <div class="nutrition-accordion">
        <div class="nutrition-accordion-header" data-target="acc-carboidrati">
          <div class="nutrition-accordion-label">
            <i data-lucide="wheat"></i>
            <span>Carboidrati</span>
          </div>
          <i data-lucide="chevron-down" class="nutrition-accordion-icon"></i>
        </div>
        <div class="nutrition-accordion-body" id="acc-carboidrati">
          <div class="nutrition-accordion-content">
            <p>I carboidrati semplici (veloci) e lo zucchero sono carboidrati facilmente digeribili con un alto indice glicemico.</p>
            <p>L'indice glicemico è un indicatore molto importante nella scelta dei carboidrati. L'IG misura la velocità con cui il glucosio entra nel flusso sanguigno. Più alto è l'indice, più velocemente il glucosio entra nel sangue e più brusco sarà il picco del suo livello, con conseguente rilascio di insulina.</p>

            <div class="nutrition-sub-section">
              <h4>Carboidrati semplici (veloci)</h4>
              <p>I carboidrati semplici e lo zucchero sono carboidrati facilmente digeribili con un alto indice glicemico.</p>
              <p>Il danno dei carboidrati veloci per il corpo è che aumentano bruscamente i livelli di zucchero nel sangue — questo altera i meccanismi di produzione dell'insulina. Anche il fatto che le calorie prodotte dai carboidrati veloci tendano a depositarsi nel grasso sottocutaneo gioca un ruolo.</p>
              <p>I carboidrati veloci includono alimenti come:</p>
              <ul>
                <li>Zucchero bianco</li>
                <li>Marmellate</li>
                <li>Miele</li>
                <li>Prodotti a base di farina</li>
                <li>Frutta zuccherina</li>
                <li>Succhi di frutta</li>
                <li>Verdure amidacee</li>
              </ul>
              <p class="nutrition-note">Nonostante nella maggior parte dei casi i carboidrati veloci siano dannosi per il normale funzionamento del corpo, possono essere utili. Consumare 20-30 g di carboidrati veloci prima dell'allenamento (circa mezz'ora prima) aumenta la performance complessiva, la resistenza e l'efficienza dell'allenamento.</p>
            </div>

            <div class="nutrition-sub-section">
              <h4>Carboidrati complessi</h4>
              <p>La lista degli alimenti con carboidrati complessi comprende la maggior parte dei cereali e dei derivati dei cereali. Contengono sia amido che fibre, mentre la presenza di zucchero è minima. Hanno un indice glicemico medio e vengono assorbiti gradualmente.</p>
              <ul>
                <li>Verdure e alcuni frutti</li>
                <li>Fagioli, lenticchie</li>
                <li>Frutta secca e semi</li>
                <li>Cereali, farina integrale</li>
                <li>Crusca</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion Collagene -->
      <div class="nutrition-accordion">
        <div class="nutrition-accordion-header" data-target="acc-collagene">
          <div class="nutrition-accordion-label">
            <i data-lucide="shield"></i>
            <span>Collagene</span>
          </div>
          <i data-lucide="chevron-down" class="nutrition-accordion-icon"></i>
        </div>
        <div class="nutrition-accordion-body" id="acc-collagene">
          <div class="nutrition-accordion-content">
            <p>Uno dei principi fondamentali della nutrizione che consiglio di seguire è la dieta del collagene.</p>
            <p>Il collagene è un termine generico per le principali proteine strutturali presenti nella pelle e nei tessuti connettivi di esseri umani e animali e costituisce circa il 30% delle proteine nel corpo umano. La funzione principale del collagene è mantenere la pelle sana e aiutare la guarigione di ferite e cicatrici. Viene scomposto nel corpo in aminoacidi, che vengono poi utilizzati per la costruzione e la rigenerazione cellulare.</p>
            <p>Il collagene è composto da 19 aminoacidi (ad esempio, glicina, prolina, idrossiprolina, lisina e arginina). Esistono almeno 29 tipi di collagene. Gli esseri umani hanno principalmente i Tipi I-III:</p>
            <ul>
              <li>Il Tipo I si trova principalmente nella pelle, nei tendini, nella vascolarizzazione, negli organi e nelle ossa</li>
              <li>Il Tipo II si trova nella cartilagine</li>
              <li>Il Tipo III si trova nelle fibre reticolari (sottili fibre ramificate nel tessuto connettivo)</li>
            </ul>

            <div class="nutrition-sub-section">
              <h4>Cos'è il collagene e perché è importante?</h4>
              <p>Il collagene è la proteina strutturale più abbondante nel corpo umano. Fornisce:</p>
              <ul>
                <li>Fermezza ed elasticità alla pelle</li>
                <li>Forza e flessibilità alle articolazioni e ai legamenti</li>
                <li>Integrità a ossa, vasi sanguigni e parete intestinale</li>
              </ul>
              <p class="nutrition-note">A partire dai 25 anni, la sintesi naturale di collagene inizia a diminuire. Questo porta a cambiamenti visibili e interni: riduzione della densità cutanea, rigidità articolare, recupero più lento e aumento del rischio di lesioni o infiammazioni.</p>
            </div>

            <div class="nutrition-sub-section">
              <h4>Quali sono le fonti alimentari di collagene?</h4>
              <ul>
                <li>Pesce</li>
                <li>Pollo</li>
                <li>Albume d'uovo</li>
                <li>Agrumi</li>
                <li>Frutti di bosco</li>
                <li>Verdure rosse e gialle</li>
                <li>Aglio</li>
                <li>Tè bianco</li>
                <li>Verdure a foglia verde</li>
                <li>Anacardi</li>
                <li>Pomodori</li>
                <li>Peperoni</li>
                <li>Fagioli</li>
                <li>Avocado</li>
                <li>Soia</li>
                <li>Erbe ricche di collagene (poligono cinese, equiseto, gynostemma)</li>
                <li>Erbe che aiutano a produrre collagene (gotukola, bala, ashwagandha)</li>
              </ul>
            </div>

            <div class="nutrition-sub-section">
              <h4>Principi nutrizionali chiave</h4>
              <ul>
                <li>Enfasi sugli aminoacidi che formano il collagene: glicina, prolina, lisina</li>
                <li>Assunzione giornaliera di vitamina C, zinco e rame, che agiscono come cofattori nella sintesi del collagene</li>
                <li>Riduzione di zucchero e alcol, che distruggono il collagene tramite glicazione</li>
                <li>Apporto proteico giornaliero sufficiente (almeno 1,5 g per kg di peso corporeo)</li>
                <li>Uso di peptidi di collagene idrolizzato in forma di integratore per la massima biodisponibilità</li>
              </ul>
            </div>

            <div class="nutrition-sub-section">
              <h4>Integratori consigliati</h4>
              <p>Per potenziare l'effetto della dieta del collagene, si raccomanda un'integrazione mirata:</p>
              <ul>
                <li>Peptidi di collagene idrolizzato — da 5 a 10 grammi al giorno</li>
                <li>Vitamina C — da 500 a 1000 mg al giorno per supportare assorbimento e sintesi</li>
                <li>Glicina — 3 grammi prima di dormire per migliorare la riparazione dei tessuti, il rivestimento intestinale e la qualità del sonno</li>
                <li>Zinco e rame — come parte di un complesso minerale per l'attivazione degli enzimi del collagene</li>
                <li>Collagene di tipo II non denaturato (UC-II) — per la salute articolare e la riduzione dell'infiammazione</li>
              </ul>
            </div>

            <div class="nutrition-sub-section">
              <h4>7 possibili benefici per la salute della dieta del collagene</h4>
              <p>Il collagene svolge un ruolo importante in molte funzioni del corpo, e seguire una dieta a base di collagene può avere i seguenti benefici:</p>
              <p><strong>1. Migliora la salute della pelle</strong><br>Il collagene migliora l'elasticità e l'idratazione della pelle. Con l'avanzare dell'età, il corpo smette di produrre tanto collagene, il che può portare a pelle secca e rughe.</p>
              <p><strong>2. Previene la perdita di densità ossea</strong><br>Il collagene è una componente importante della massa ossea. Poiché il corpo produce meno collagene con l'età, è importante consumare alimenti che promuovono la produzione di collagene.</p>
              <p><strong>3. Allevia i dolori articolari</strong><br>L'avanzare dell'età aumenta il rischio di osteoporosi (ossa deboli), che può avere un impatto anche sulle articolazioni. Il collagene mantiene l'equilibrio della cartilagine nel corpo, svolgendo un ruolo cruciale nel mantenimento della salute articolare e nella protezione delle ossa dai danni.</p>
              <p><strong>4. Promuove la salute del cuore</strong><br>Senza abbastanza collagene, le arterie possono indebolirsi, restringersi e trasportare il sangue in modo meno efficace. La mancanza di collagene può portare all'aterosclerosi, una condizione in cui la placca si accumula nelle arterie causando indurimento o restringimento.</p>
              <p><strong>5. Promuove la crescita di capelli e unghie</strong><br>Il collagene ti aiuta a mantenere capelli e unghie sani, favorendo lucentezza e forza.</p>
              <p><strong>6. Promuove la salute intestinale</strong><br>Il collagene è benefico per la salute intestinale, aiutando la digestione, riparando il rivestimento dell'intestino e promuovendo la crescita di batteri intestinali sani.</p>
              <p><strong>7. Stimola il metabolismo</strong><br>Il collagene può stimolare il metabolismo, migliorando la capacità di bruciare grassi e gestire il peso.</p>
              <p class="nutrition-note">Sebbene molte di queste affermazioni non siano state scientificamente provate, le raccomandazioni dietetiche complessive della dieta del collagene (esclusi gli integratori) contengono spesso molti alimenti consigliati per una dieta sana.</p>
            </div>

            <div class="nutrition-sub-section">
              <h4>Chi dovrebbe seguire la dieta del collagene?</h4>
              <ul>
                <li>Persone oltre i 25 anni per la prevenzione dell'invecchiamento cutaneo e della degradazione dei tessuti</li>
                <li>Atleti e persone fisicamente attive</li>
                <li>Persone in recupero da interventi chirurgici, infortuni o dolori articolari</li>
                <li>Chi presenta segni di diminuzione della fermezza cutanea, problemi digestivi o rigidità articolare</li>
              </ul>
            </div>

            <div class="nutrition-sub-section">
              <h4>Quando aspettarsi i risultati</h4>
              <p><strong>Miglioramenti visibili e tangibili appaiono generalmente entro 4-6 settimane di aderenza costante. Questi includono:</strong></p>
              <ul>
                <li>Aumento della fermezza e luminosità della pelle</li>
                <li>Miglioramento del comfort e della mobilità articolare</li>
                <li>Recupero più rapido dopo lo sforzo fisico</li>
                <li>Miglioramento del sonno e della funzione intestinale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderDietsSection()}

    ${renderWeeklyMenuSection()}
  `;

  // Init icons
  if (window.lucide) lucide.createIcons();

  // Accordion toggle logic
  view.querySelectorAll('.nutrition-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-target');
      const body = document.getElementById(targetId);
      const icon = header.querySelector('.nutrition-accordion-icon');
      const isOpen = body.classList.contains('open');

      // Close all
      view.querySelectorAll('.nutrition-accordion-body').forEach(b => b.classList.remove('open'));
      view.querySelectorAll('.nutrition-accordion-header').forEach(h => h.classList.remove('active'));
      view.querySelectorAll('.nutrition-accordion-icon').forEach(i => i.classList.remove('rotated'));

      // Open clicked if it was closed
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('active');
        icon.classList.add('rotated');
      }
    });
  });

  // Diet tabs logic
  initDietTabs(view);

  // Weekly menu tabs logic
  initWeeklyMenuTabs(view);
}
