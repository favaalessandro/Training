/* ═══════════════════════════════════════
   NUTRITION PAGE
   ═══════════════════════════════════════ */

export function renderNutrition() {
  const view = document.getElementById('view-nutrition');
  view.classList.add('active');

  view.innerHTML = `
    <div class="page-header">
      <h1>Nutrition</h1>
    </div>
    <div class="card" style="text-align:center; padding: 3rem 1.5rem;">
      <i data-lucide="apple" style="width:48px;height:48px;color:var(--gold-primary);margin-bottom:1rem;"></i>
      <h2 style="margin-bottom:0.5rem;">Coming Soon</h2>
      <p style="color:var(--text-secondary);">La sezione Nutrition è in fase di sviluppo.</p>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}
