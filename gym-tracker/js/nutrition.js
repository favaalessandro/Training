/* ═══════════════════════════════════════
   NUTRITION PAGE
   ═══════════════════════════════════════ */

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
    </div>
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
}
