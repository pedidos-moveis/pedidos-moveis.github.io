(() => {
  const incoming = new URLSearchParams(window.location.search);
  const names = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'gclid', 'gbraid', 'wbraid'
  ];
  const campaign = names.filter((name) => incoming.get(name));
  if (!campaign.length) return;

  document.querySelectorAll('a[href]').forEach((link) => {
    const target = new URL(link.href, window.location.href);
    if (target.origin !== 'https://pedidosmoveis.com.br' || target.pathname !== '/parceiros') return;
    campaign.forEach((name) => target.searchParams.set(name, incoming.get(name)));
    link.href = target.href;
  });
})();
