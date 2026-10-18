
function showSection(id){
  document.querySelectorAll('.section').forEach(s => {
    s.classList.toggle('active', s.dataset.section === id);
  });
  document.querySelectorAll('.sidebar-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === id);
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
}

let filterA = { family: 'all', search: '' };
function filterTableA(search){ filterA.search = search.toLowerCase(); applyFilterA(); }
document.querySelectorAll('[data-filter="family"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="family"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterA.family = btn.dataset.value;
    applyFilterA();
  });
});
function applyFilterA(){
  const rows = document.querySelectorAll('#tbl-a tbody tr');
  let count = 0;
  rows.forEach(row => {
    if (row.classList.contains('family-head')) { row.style.display = ''; return; }
    const family = row.dataset.family || '';
    const text = row.textContent.toLowerCase();
    const familyMatch = filterA.family === 'all' || family === filterA.family;
    const searchMatch = !filterA.search || text.includes(filterA.search);
    const show = familyMatch && searchMatch;
    row.style.display = show ? '' : 'none';
    if (show) count++;
  });
  document.querySelectorAll('#tbl-a tbody tr.family-head').forEach(head => {
    let next = head.nextElementSibling;
    let hasVisible = false;
    while (next && !next.classList.contains('family-head')) {
      if (next.style.display !== 'none') hasVisible = true;
      next = next.nextElementSibling;
    }
    head.style.display = hasVisible ? '' : 'none';
  });
  document.getElementById('count-a').textContent = count + ' shown';
}

let filterB = { type: 'all', search: '' };
function filterTableB(search){ filterB.search = search.toLowerCase(); applyFilterB(); }
document.querySelectorAll('[data-filter="b"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="b"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterB.type = btn.dataset.value;
    applyFilterB();
  });
});
function applyFilterB(){
  const rows = document.querySelectorAll('#tbl-b tbody tr');
  let count = 0;
  rows.forEach(row => {
    const type = row.dataset.b || 'full';
    const text = row.textContent.toLowerCase();
    const typeMatch = filterB.type === 'all' || type === filterB.type;
    const searchMatch = !filterB.search || text.includes(filterB.search);
    const show = typeMatch && searchMatch;
    row.style.display = show ? '' : 'none';
    if (show) count++;
  });
  document.getElementById('count-b').textContent = count + ' shown';
}

let filterD = { type: 'all', search: '' };
function filterTableD(search){ filterD.search = search.toLowerCase(); applyFilterD(); }
document.querySelectorAll('[data-filter="d"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="d"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterD.type = btn.dataset.value;
    applyFilterD();
  });
});
function applyFilterD(){
  const rows = document.querySelectorAll('#tbl-d tbody tr');
  let count = 0;
  rows.forEach(row => {
    const type = row.dataset.d || 'ready';
    const text = row.textContent.toLowerCase();
    const typeMatch = filterD.type === 'all' || type === filterD.type;
    const searchMatch = !filterD.search || text.includes(filterD.search);
    const show = typeMatch && searchMatch;
    row.style.display = show ? '' : 'none';
    if (show) count++;
  });
  document.getElementById('count-d').textContent = count + ' shown';
}

let filterE = { type: 'all', search: '' };
function filterTableE(search){ filterE.search = search.toLowerCase(); applyFilterE(); }
document.querySelectorAll('[data-filter="e"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter="e"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterE.type = btn.dataset.value;
    applyFilterE();
  });
});
function applyFilterE(){
  const rows = document.querySelectorAll('#tbl-e tbody tr');
  let count = 0;
  rows.forEach(row => {
    const type = row.dataset.e || 'demonstrated';
    const text = row.textContent.toLowerCase();
    const typeMatch = filterE.type === 'all' || type === filterE.type;
    const searchMatch = !filterE.search || text.includes(filterE.search);
    const show = typeMatch && searchMatch;
    row.style.display = show ? '' : 'none';
    if (show) count++;
  });
  document.getElementById('count-e').textContent = count + ' shown';
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    const current = document.querySelector('.sidebar-link.active');
    const next = current && current.nextElementSibling && current.nextElementSibling.classList.contains('sidebar-link') ? current.nextElementSibling : null;
    if (next) next.click();
  } else if (e.key === 'ArrowLeft') {
    const current = document.querySelector('.sidebar-link.active');
    const prev = current && current.previousElementSibling && current.previousElementSibling.classList.contains('sidebar-link') ? current.previousElementSibling : null;
    if (prev) prev.click();
  }
});

// Accessibility: controls use event listeners, not inline onclick handlers.
document.querySelectorAll('.sidebar-link[data-section]').forEach(b => b.addEventListener('click', () => showSection(b.dataset.section)));
document.querySelectorAll('.print-btn').forEach(b => b.addEventListener('click', () => window.print()));
