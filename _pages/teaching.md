---
title: "Teaching"
layout: page
permalink: /teaching/
---

# Teaching

{% if site.data.teaching and site.data.teaching.size > 0 %}
<div class="project-grid" markdown="0">
{% for c in site.data.teaching %}
<article class="project-card tone-green">
<h3 class="project-title">{{ c.course }}</h3>
<p class="project-meta">
{% if c.institution %}<span>{% include icon.html name="building" %} {{ c.institution }}</span>{% endif %}
{% if c.level %}<span>{% include icon.html name="graduation-cap" %} {{ c.level }}</span>{% endif %}
{% if c.role %}<span>{% include icon.html name="user" %} {{ c.role }}</span>{% endif %}
{% if c.term %}<span>{% include icon.html name="calendar" %} {{ c.term }}</span>{% endif %}
</p>
{% if c.description %}<p class="project-desc">{{ c.description }}</p>{% endif %}
{% if c.links %}
<div class="pub-actions">
{% for link in c.links %}<a href="{{ link.url }}" target="_blank" rel="noopener" class="btn-pill btn-link">{{ link.label }}</a>{% endfor %}
</div>
{% endif %}
</article>
{% endfor %}
</div>
{% else %}
<div class="callout callout-success" markdown="0">
<div class="callout-title">{% include icon.html name="graduation-cap" class="callout-icon" %} Network courses coming soon</div>
<p>I will be teaching computer networking courses during my PhD. Course descriptions and materials will be posted here.</p>
<p>In the meantime, my notes and past course materials are on the <a href="{{ '/learning/' | relative_url }}">Learning Materials</a> page.</p>
</div>
{% endif %}
