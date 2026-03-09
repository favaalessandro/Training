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
            <p>Le proteine sono macronutrienti essenziali composti da aminoacidi. Svolgono un ruolo fondamentale nella costruzione muscolare, nella riparazione dei tessuti e nella produzione di enzimi e ormoni.</p>
            <h4>Fonti principali:</h4>
            <ul>
              <li>Carne (pollo, manzo, tacchino)</li>
              <li>Pesce (salmone, tonno, merluzzo)</li>
              <li>Uova</li>
              <li>Latticini (yogurt greco, ricotta)</li>
              <li>Legumi (lenticchie, ceci, fagioli)</li>
            </ul>
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
            <p>I grassi sono fondamentali per l'assorbimento delle vitamine liposolubili (A, D, E, K), la produzione ormonale e la protezione degli organi. Non tutti i grassi sono uguali: privilegia quelli insaturi.</p>
            <h4>Fonti principali:</h4>
            <ul>
              <li>Olio extravergine d'oliva</li>
              <li>Avocado</li>
              <li>Frutta secca (noci, mandorle, nocciole)</li>
              <li>Semi (chia, lino, girasole)</li>
              <li>Pesce grasso (salmone, sgombro)</li>
            </ul>
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
            <p>I carboidrati sono la principale fonte di energia per il corpo e il cervello. Si dividono in semplici (zuccheri) e complessi (amidi e fibre). Prediligi quelli complessi per un rilascio energetico costante.</p>
            <h4>Fonti principali:</h4>
            <ul>
              <li>Riso (integrale e basmati)</li>
              <li>Pasta (integrale)</li>
              <li>Patate e patate dolci</li>
              <li>Avena e cereali integrali</li>
              <li>Frutta (banana, mela, frutti di bosco)</li>
            </ul>
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
