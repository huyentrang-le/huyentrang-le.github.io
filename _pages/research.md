---
title: "Research"
layout: page
permalink: /research/
---

# Research

<nav class="page-tabs" aria-label="On this page" markdown="0">
<a href="#thesis">{% include icon.html name="flask" class="tone-violet" %} PhD thesis</a>
<a href="#topics">{% include icon.html name="lightbulb" class="tone-teal" %} Topics</a>
<a href="#publications">{% include icon.html name="book-open" class="tone-blue" %} Publications</a>
<a href="#talks">{% include icon.html name="presentation" class="tone-rose" %} Talks &amp; posters</a>
</nav>

{% assign phd = site.data.pi[0].phd %}
{% if phd %}
<section id="thesis" class="section-card" markdown="0">
<h2 class="sec-title"><span class="icon-badge tone-violet">{% include icon.html name="flask" %}</span>PhD thesis</h2>
<p><strong>{{ phd.title }}</strong>{% if phd.title_fr %}<br><em>{{ phd.title_fr }}</em>{% endif %}</p>
{% if phd.summary %}<p>{{ phd.summary }}</p>{% endif %}
<ul>
{% if phd.institutions %}<li><strong>Institutions:</strong> {{ phd.institutions }}</li>{% endif %}
{% if phd.labs %}<li><strong>Laboratories:</strong> {{ phd.labs }}</li>{% endif %}
{% if phd.doctoral_school %}<li><strong>Doctoral school:</strong> {{ phd.doctoral_school }}</li>{% endif %}
{% if phd.supervisors and phd.supervisors.size > 0 %}<li><strong>Supervisors:</strong> {{ phd.supervisors | join: ", " }}</li>{% endif %}
{% if phd.start %}<li><strong>Period:</strong> {{ phd.start }}{% if phd.end %} – {{ phd.end }}{% endif %}</li>{% endif %}
</ul>
{% if phd.notes or phd.code %}
<div class="pub-actions">
{% if phd.notes %}<a href="{{ phd.notes }}" target="_blank" rel="noopener" class="btn-pill btn-link">Learning notes</a>{% endif %}
{% if phd.code %}<a href="{{ phd.code }}" target="_blank" rel="noopener" class="btn-pill btn-git">GitHub</a>{% endif %}
</div>
{% endif %}
</section>
{% endif %}

<h2 id="topics" class="sec-title"><span class="icon-badge tone-teal">{% include icon.html name="lightbulb" %}</span>Research topics</h2>

<div class="research-grid" markdown="0">
{% for topic in site.data.research_topics %}
<div class="research-card">
<div class="research-body">
<h3 class="research-title">{{ topic.title }}</h3>
<p class="research-desc">{{ topic.description }}</p>
{% if topic.links %}
<div class="pub-actions">
{% for link in topic.links %}<a href="{{ link.url }}" target="_blank" rel="noopener" class="btn-pill btn-{{ link.style | default: 'link' }}">{{ link.label }}</a>{% endfor %}
</div>
{% endif %}
</div>
</div>
{% endfor %}
</div>

<section id="publications" class="section-card">
<h2 class="sec-title"><span class="icon-badge tone-blue">{% include icon.html name="book-open" %}</span>Publications</h2>

<p class="text-muted">Also on <a href="{{ site.links.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a>.</p>

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div id="pubList">
<h3>In preparation</h3>

{% bibliography --query @unpublished %}

<h3>Conference, workshop and poster papers</h3>

{% bibliography --query @inproceedings %}
</div>
</section>

{% if site.data.talks.size > 0 %}
<section id="talks" class="section-card" markdown="0">
<h2 class="sec-title"><span class="icon-badge tone-rose">{% include icon.html name="presentation" %}</span>Talks &amp; posters</h2>
{% for talk in site.data.talks %}{% include talk.html talk=talk %}{% endfor %}
</section>
{% endif %}
