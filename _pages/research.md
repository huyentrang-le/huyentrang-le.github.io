---
title: "Research"
layout: page
permalink: /research/
---

# Research

<nav class="page-tabs" aria-label="On this page" markdown="0">
<a href="#topics">{% include icon.html name="lightbulb" class="tone-teal" %} Topics</a>
<a href="#publications">{% include icon.html name="book-open" class="tone-blue" %} Publications</a>
</nav>

<h2 id="topics" class="sec-title"><span class="icon-badge tone-teal">{% include icon.html name="lightbulb" %}</span>Research topics</h2>

<div class="research-grid" markdown="0">
{% for topic in site.data.research_topics %}
<div class="research-card">
<div class="research-body">
<h3 class="research-title">{{ topic.title }}</h3>
{% if topic.keywords %}<div class="topic-keywords">{% for k in topic.keywords %}<span>{{ k }}</span>{% endfor %}</div>{% endif %}
<p class="research-desc">{{ topic.description }}</p>
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
