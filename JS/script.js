document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".modules__tabs .tab");
  const contents = document.querySelectorAll(".modules__cards-wrapper .tab-content");

  // Helper function to show a tab's content
  function activateTab(target) {
    // Remove active state from all tabs and contents
    tabs.forEach(t => t.classList.remove("is-active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activate clicked tab
    const activeTab = document.querySelector(`.modules__tabs .tab[data-tab="${target}"]`);
    if (activeTab) activeTab.classList.add("is-active");

    // Activate corresponding content
    const activeContent = document.querySelector(`.modules__cards-wrapper .tab-content[data-tab="${target}"]`);
    if (activeContent) activeContent.classList.add("active");
  }

  // Attach click event listeners to all tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      activateTab(target);
    });
  });

  // Set initial active tab on page load
  const initial = document.querySelector(".modules__tabs .tab.is-active");
  if (initial) activateTab(initial.dataset.tab);
});

document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.pricing .pill');
  const prices = document.querySelectorAll('.pricing .price');

  function setPeriod(period){
    // activate pill
    pills.forEach(p => p.classList.toggle('is-active', p.dataset.period === period));
    // swap price texts
    prices.forEach(el => {
      const value = el.getAttribute(`data-${period}`);
      if (value) el.textContent = `\u20A6${value}`
    });
  }

  pills.forEach(p => p.addEventListener('click', () => setPeriod(p.dataset.period)));
  // default
  setPeriod('monthly');
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const btn = item.querySelector('.faq__q');
    btn.addEventListener('click', () => {
      // close others
      items.forEach(i => {
        if (i !== item) {
          i.classList.remove('is-open');
          i.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        }
      });
      // toggle this one
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
});




