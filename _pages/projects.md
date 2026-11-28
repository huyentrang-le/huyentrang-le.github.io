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
<div class="project-grid balanced-grid{% if cat.per_row == 2 %} max-2{% endif %}">
{% for project in items %}
<article class="project-card tone-{{ cat.tone }}">
{% assign plate_url = project.image_link | default: project.website | default: project.repo | default: project.details | default: project.event | default: project.news | default: project.facebook %}
{% assign plate_style = project.image_style | default: "logo" %}
<a class="project-plate plate-{% if project.image %}{{ plate_style }}{% else %}empty{% endif %}"{% if plate_url %} href="{{ plate_url }}" target="_blank" rel="noopener"{% endif %} aria-label="{{ project.short | default: project.name | strip_html }}" tabindex="-1">
{% if project.image %}<img src="{{ project.image }}" alt="" loading="lazy"{% if project.image_position %} style="object-position: {{ project.image_position }}"{% endif %}>{% for extra in project.extra_images %}<img class="plate-extra" src="{{ extra }}" alt="" loading="lazy">{% endfor %}{% if plate_style == "logo" and project.brand %}<span class="plate-brand">{{ project.brand }}</span>{% endif %}
{% else %}<span class="plate-icon">{% include icon.html name=cat.icon %}</span><span class="plate-brand">{{ project.brand | default: project.short | default: project.name }}</span>{% endif %}
</a>
<div class="project-body">
<div class="project-kicker-row"><p class="project-kicker">{{ project.kicker | default: cat.title }}</p>{% if project.year %}<span class="project-year">{% include icon.html name="calendar" %} {{ project.year }}</span>{% endif %}</div>
<h3 class="project-title">{{ project.name }}</h3>
{% if project.role %}<p class="project-meta"><span>{% include icon.html name="user" %} {{ project.role }}</span></p>{% endif %}
{% if project.tags %}<div class="project-tags">{% for t in project.tags %}<span>{{ t }}</span>{% endfor %}</div>{% endif %}
<p class="project-desc">{{ project.description }}</p>
{% if project.authors %}<p class="project-authors">{{ project.authors }}</p>{% endif %}
{% if project.website or project.repo or project.docs or project.paper or project.program or project.details or project.slides or project.event or project.news or project.facebook %}
<div class="pub-actions">
{% if project.website %}{% include link-btn.html url=project.website label="Website" icon="globe" %}{% endif %}
{% if project.details %}{% include link-btn.html url=project.details label="Program details" icon="trophy" %}{% endif %}
{% if project.repo %}{% include link-btn.html url=project.repo label="Code" icon="github" %}{% endif %}
{% if project.docs %}{% include link-btn.html url=project.docs label="Docs" icon="book-open" %}{% endif %}
{% if project.paper %}{% include link-btn.html url=project.paper label="Paper" icon="cv" %}{% endif %}
{% if project.program %}{% include link-btn.html url=project.program label="Program" icon="calendar" %}{% endif %}
{% if project.slides %}{% include link-btn.html url=project.slides label="Slides" icon="presentation" %}{% endif %}
{% if project.event %}{% include link-btn.html url=project.event label="Event" icon="calendar" %}{% endif %}
{% if project.news %}{% include link-btn.html url=project.news label="News" icon="newspaper" %}{% endif %}
{% if project.facebook %}{% include link-btn.html url=project.facebook label="Facebook" icon="facebook" %}{% endif %}
</div>
{% endif %}
</div>
</article>
{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}
