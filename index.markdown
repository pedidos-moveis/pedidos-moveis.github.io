---
layout: guides
description: "Orientações práticas para vendas externas, gestão de pedidos e integração com ERP. Explore os artigos do blog Pedidos Móveis."
---

{% assign featured_posts = site.posts | where: 'featured', true %}{% assign lead = featured_posts | first %}
<div class="guide-intro">
<div>
<div class="eyebrow">Biblioteca prática</div>
<h1>Qual desafio você quer resolver hoje?</h1>
<p class="intro">Encontre leituras para o atendimento em campo, a gestão comercial e a conexão dos pedidos com o ERP.</p>
</div>
<aside class="spotlight" aria-label="Artigo em destaque">{% if lead.thumbnail %}<img src="{{ lead.thumbnail | relative_url }}" alt="" width="110" height="110">{% endif %}<div>
<div class="eyebrow">Em destaque</div>
<h2>
<a href="{{ lead.url | relative_url }}">{{ lead.title | escape }}</a>
</h2>
<div class="meta">{{ lead.date | date: '%d/%m/%Y' }}</div>
</div>
</aside>
</div>
<nav class="topic-nav" aria-label="Escolha um tema">
<a href="#campo">Vender em campo</a>
<a href="#gestao">Organizar a operação</a>
<a href="#integracao">Conectar ao ERP</a>
</nav>
<section class="guide-section" aria-labelledby="campo">
<h2 id="campo">Vender em campo</h2>
<p>Prepare sua equipe para as visitas e para as condições da rota.</p>
<div class="grid">{% for post in site.posts %}{% if post.slug == 'pedidos-venda-offline-dados-moveis' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'importancia-de-um-sistema-de-checkin' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'como-a-mobilidade-transforma-a-forca-de-vendas' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}</div>
</section>
<section class="guide-section" aria-labelledby="gestao">
<h2 id="gestao">Organizar a operação</h2>
<p>Confira condições comerciais e encontre formas de reduzir retrabalho.</p>
<div class="grid">{% for post in site.posts %}{% if post.slug == 'automacao-forca-vendas-reduzir-retrabalho-pedidos' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'importancia-tabela-vendas' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'aumentar-recorrencia-nas-vendas' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}</div>
</section>
<section class="guide-section" aria-labelledby="integracao">
<h2 id="integracao">Conectar ao ERP</h2>
<p>Entenda os fluxos de integração e as etapas de validação.</p>
<div class="grid">{% for post in site.posts %}{% if post.slug == 'integracao-pedidos-moveis-bling-homologacao' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'como-integrar-seu-erp-pode-transformar-a-forca-de-vendas-dos-seus-clientes' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}{% for post in site.posts %}{% if post.slug == 'por-que-integrar-seu-erp-a-um-app-de-forca-de-vendas' %}{% include blog-card.html post=post %}{% endif %}{% endfor %}</div>
</section>
<section aria-labelledby="arquivo">
<div class="section-head">
<h2 id="arquivo">Todos os artigos</h2>
<p>Explore o arquivo do blog</p>
</div>
<div class="archive">{% for post in site.posts %}<article class="archive-item">
<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%d/%m/%Y' }}</time>
<h3>
<a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
</h3>
</article>{% endfor %}</div>
</section>
