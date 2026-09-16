// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Listings filter chips
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('[data-category]');
if (chips.length && cards.length) {
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.dataset.filter;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// Contact form (mailto fallback + inline success state)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Preferred date: ${data.get('preferred_date')}`,
      `Interest: ${data.get('interest')}`,
      '',
      data.get('message')
    ].join('\n');
    const mailto = `mailto:saif@diwanhomes.ae?subject=${encodeURIComponent('Website enquiry — ' + (data.get('name') || 'New lead'))}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    const status = document.querySelector('.form-status');
    if (status) {
      status.textContent = 'Thank you — your email client is opening. We reply within one business hour.';
      status.classList.add('show');
    }
    form.reset();
  });
}

// Set active nav link based on current file name
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});
