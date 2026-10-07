// 渲染论文列表
function renderPublications() {
  const list = document.getElementById('pub-list');
  if (!list) return;
  list.innerHTML = PUBLICATIONS.map(p => {
    const tags = p.tags.map(t => `<span class="pub-tag">${t}</span>`).join('');
    const authors = p.authors
      .split(', ')
      .map(a => a.startsWith('Bingxu Zhao') || a.startsWith('Zhao Bingxu')
        ? `<span class="me">${a}</span>` : a)
      .join(', ');
    return `
      <li>
        <div class="pub-authors">${authors}</div>
        <div class="pub-journal">
          <span class="pub-title">"${p.title}"</span> — ${p.journal}, ${p.year}. ${tags}
          <a class="pub-link" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi}</a>
        </div>
      </li>`;
  }).join('');
}

// 渲染经历
function renderExperiences() {
  const edu = document.getElementById('edu-list');
  const work = document.getElementById('work-list');
  if (edu) {
    edu.innerHTML = EDUCATION.map(e => `
      <li>
        <div class="exp-date">${e.date}</div>
        <div class="exp-org">${e.org}</div>
        <div class="exp-role">${e.role}</div>
      </li>`).join('');
  }
  if (work) {
    work.innerHTML = WORK.map(w => `
      <li>
        <div class="exp-date">${w.date}</div>
        <div class="exp-org">${w.org}</div>
        <div class="exp-role">${w.role}</div>
      </li>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPublications();
  renderExperiences();
});
