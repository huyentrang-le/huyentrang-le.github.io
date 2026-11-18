---
title: "Learning Materials"
layout: page
permalink: /learning/
---

# Learning Materials

<nav class="page-tabs" aria-label="Categories" markdown="0">
{% for cat in site.data.learning %}
<a href="#{{ cat.id }}" class="tone-{{ cat.tone }}">{% include icon.html name=cat.icon %} {{ cat.title }}</a>
{% endfor %}
</nav>

{% for cat in site.data.learning %}
<section id="{{ cat.id }}" class="project-section" markdown="0">
<h2 class="sec-title"><span class="icon-badge tone-{{ cat.tone }}">{% include icon.html name=cat.icon %}</span>{{ cat.title }}</h2>
{% for group in cat.groups %}
<div class="section-card learn-group tone-{{ cat.tone }}">
<h3 class="learn-group-title">{{ group.title }}</h3>
{% if group.place or group.term %}<p class="project-meta">{% if group.place %}<span>{% include icon.html name="building" %} {{ group.place }}</span>{% endif %}{% if group.term %}<span>{% include icon.html name="calendar" %} {{ group.term }}</span>{% endif %}</p>{% endif %}
<ul class="teaching-list">
{% for item in group.items %}
<li>
{% if item.course %}<strong>{{ item.course }}</strong>{% if item.title %}: {% endif %}{% endif %}{{ item.title }}{% if item.term %} <span class="text-muted">({{ item.term }})</span>{% endif %}
{% if item.description %}<br><span class="text-muted">{{ item.description }}</span>{% endif %}
{% if item.links %}
<div class="pub-actions" style="margin-top: var(--space-2);">
{% for link in item.links %}<a href="{{ link.url }}" target="_blank" rel="noopener" class="btn-pill btn-link">{{ link.label }}</a>{% endfor %}
</div>
{% endif %}
</li>
{% endfor %}
</ul>
</div>
{% endfor %}
</section>
{% endfor %}
