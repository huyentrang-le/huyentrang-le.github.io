---
title: "Projects"
layout: page
permalink: /projects/
---

# Projects

{% assign cats = site.data.project_categories %}

<nav class="page-tabs" aria-label="Categories" markdown="0">
{% for cat in cats %}{% assign n = site.data.projects | where: "category", cat.id | size %}{% if n > 0 %}
<a href="#{{ cat.id }}" class="tone-{{ cat.tone }}">{% include icon.html name=cat.icon %} {{ cat.title }} <span class="tab-count">{{ n }}</span></a>
{% endif %}{% endfor %}
</nav>

{% for cat in cats %}
{% assign items = site.data.projects | where: "category", cat.id %}
{% if items.size > 0 %}
<section id="{{ cat.id }}" class="project-section" markdown="0">
<h2 class="sec-title"><span class="icon-badge tone-{{ cat.tone }}">{% include icon.html name=cat.icon %}</span>{{ cat.title }}</h2>
<div class="project-grid">
{% for project in items %}
<article class="project-card tone-{{ cat.tone }}">
<h3 class="project-title">{{ project.name }}</h3>
{% if project.year or project.role %}<p class="project-meta">{% if project.year %}<span>{% include icon.html name="calendar" %} {{ project.year }}</span>{% endif %}{% if project.role %}<span>{% include icon.html name="user" %} {{ project.role }}</span>{% endif %}</p>{% endif %}
<p class="project-desc">{{ project.description }}</p>
{% if project.authors %}<p class="project-authors">{{ project.authors }}</p>{% endif %}
{% if project.website or project.repo or project.docs or project.paper or project.program or project.slides or project.event %}
<div class="pub-actions">
{% if project.website %}<a href="{{ project.website }}" target="_blank" rel="noopener" class="btn-pill btn-website">Website</a>{% endif %}
{% if project.repo %}<a href="{{ project.repo }}" target="_blank" rel="noopener" class="btn-pill btn-git">Code</a>{% endif %}
{% if project.docs %}<a href="{{ project.docs }}" target="_blank" rel="noopener" class="btn-pill btn-link">Docs</a>{% endif %}
{% if project.paper %}<a href="{{ project.paper }}" target="_blank" rel="noopener" class="btn-pill btn-link">Paper</a>{% endif %}
{% if project.program %}<a href="{{ project.program }}" target="_blank" rel="noopener" class="btn-pill btn-link">Program</a>{% endif %}
{% if project.slides %}<a href="{{ project.slides }}" target="_blank" rel="noopener" class="btn-pill btn-slides">Slides</a>{% endif %}
{% if project.event %}<a href="{{ project.event }}" target="_blank" rel="noopener" class="btn-pill btn-link">Event</a>{% endif %}
</div>
{% endif %}
</article>
{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}
