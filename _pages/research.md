---
title: "Research"
layout: page
permalink: /research/
---

# Research

<nav class="page-tabs" aria-label="On this page" markdown="0">
<a href="#topics">{% include icon.html name="lightbulb" class="tone-teal" %} Topics</a>
<a href="#publications">{% include icon.html name="book-open" class="tone-blue" %} Publications</a>
<a href="#talks">{% include icon.html name="presentation" class="tone-rose" %} Talks &amp; posters</a>
</nav>

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
