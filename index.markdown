---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
date_format: "%d/%m/%Y"
---

![tela do aplicativo](/assets/images/banner.png)
<h2>Destaques</h2>
<ul>
{% for post in site.posts %}
  {% if post.featured %}
    <li>
      <div>
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail }}" alt="{{ post.title }}" style="max-width: 100px;">
        {% endif %}
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.content | strip_html | truncate: 250 }}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>

<style>
  ul {
    list-style-type: none; /* Remove os marcadores */
    padding: 0; /* Remove o padding padrão */
    margin: 0; /* Remove a margem padrão */
  }
  ul li {
    margin-bottom: 10px; /* Dá um espaço entre os itens */
  }
</style>