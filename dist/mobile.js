(() => {
  const nav = document.querySelector('.mobile-nav');
  const basket = document.querySelector('#mobile-basket');
  if (!nav || !basket) return;

  let page = 'home';
  const mobile = window.matchMedia('(max-width: 640px)');

  function activate(view) {
    nav.querySelectorAll('[data-mobile-view]').forEach(button => {
      const active = button.dataset.mobileView === view;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }

  function updateBasket() {
    const { count, subtotal } = totals();
    basket.hidden = count === 0;
    document.body.classList.toggle('has-mobile-basket', count > 0);
    document.querySelector('#mobile-basket-count').textContent = `${count} ${count === 1 ? 'item' : 'items'} in your basket`;
    document.querySelector('#mobile-basket-total').textContent = `${money(subtotal)} + delivery, if applicable`;
    basket.setAttribute('aria-label', `View basket, ${count} ${count === 1 ? 'item' : 'items'}, ${money(subtotal)} before delivery`);
  }

  function browseCategories() {
    close();
    page = 'categories';
    activate(page);
    document.querySelector('#categories').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  nav.addEventListener('click', event => {
    const button = event.target.closest('[data-mobile-view]');
    if (!button) return;
    const view = button.dataset.mobileView;
    if (view === 'categories') return browseCategories();
    if (view === 'home') {
      close();
      page = 'home';
      actions.home();
      activate(page);
      return;
    }
    activate(view);
    ({ lists: showList, recurring: showRecurring, account: showAccount })[view]?.();
  });

  document.addEventListener('kiranakottu:cart-change', updateBasket);
  document.querySelector('#modal').addEventListener('close', () => {
    if (!document.querySelector('#modal').open) activate(page);
  });
  document.addEventListener('click', event => {
    if (event.target.closest('[data-category]')) {
      page = 'categories';
      activate(page);
    }
    if (event.target.closest('[data-action="browse"]')) {
      page = 'categories';
      activate(page);
    }
    if (event.target.closest('[data-action="home"]')) {
      page = 'home';
      activate(page);
    }
  });
  document.querySelector('#search').addEventListener('keydown', event => {
    if (event.key === 'Enter' && mobile.matches) event.target.blur();
  });
  document.querySelector('#search').setAttribute('enterkeyhint', 'search');
  document.querySelector('#search').setAttribute('inputmode', 'search');
  if (mobile.matches) document.querySelector('#search').placeholder = 'Search milk, bread, and more';
  mobile.addEventListener('change', event => {
    document.querySelector('#search').placeholder = event.matches
      ? 'Search milk, bread, and more'
      : 'Search for milk, bread, and everything else';
  });
  updateBasket();
})();
