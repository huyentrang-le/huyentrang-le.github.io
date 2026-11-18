---
title: "Home"
layout: homelay
permalink: /
---

<h1 class="home-hero">{{ site.name }}</h1>
<p class="home-hero-sub">{{ site.title }}, {{ site.institution }}</p>

<div class="chip-container" markdown="0">
<a href="{{ '/research/' | relative_url }}" class="chip">Time-Sensitive Networking</a>
<a href="{{ '/research/' | relative_url }}" class="chip">Network Calculus</a>
<a href="{{ '/research/' | relative_url }}" class="chip">Blockchain &amp; ZKP</a>
<a href="{{ '/research/' | relative_url }}" class="chip">Privacy-Preserving Systems</a>
<a href="{{ '/research/' | relative_url }}" class="chip">IoT &amp; SDN</a>
</div>

I am a PhD candidate at [Cnam](https://www.cnam.fr/) and [ECE Engineering School](https://www.ece.fr/) in Paris (2026–2029), in the [LyRIDS](https://www.ece.fr/en/research-focuses-and-structuring) and [CEDRIC](https://cedric.cnam.fr/) laboratories.
My thesis uses deterministic [network calculus](https://en.wikipedia.org/wiki/Network_calculus) to keep worst-case latency guarantees certified while [Time-Sensitive Networks](https://1.ieee802.org/tsn/) are reconfigured at runtime.

Before my PhD, I completed an M2 in Computer Networks at [Université d'Évry Paris-Saclay](https://www.univ-evry.fr/) and an engineering degree in Computer Science at [HUST](https://hust.edu.vn/), Hanoi.
I have worked on blockchain and zero-knowledge proofs for health and genomic data at [IBISC](https://www.ibisc.univ-evry.fr/), location privacy at the [Universidade do Porto](https://www.up.pt/feup/en/), and deep reinforcement learning for edge-cloud systems at the [BKCS lab](https://bkcs.hust.edu.vn/).

{% capture selected %}{% bibliography --query @*[selected=true] --template bibcompact %}{% endcapture %}
{% if selected contains "pub-compact" %}
<div class="section-card home-card" markdown="0">
{% include card-head.html title="Selected publications" icon="book-open" tone="blue" url="/research/#publications" %}
<div class="pub-compact-list">
{{ selected }}
</div>
</div>
{% endif %}

<div class="section-card home-card" markdown="0">
{% include card-head.html title="Research" icon="lightbulb" tone="teal" url="/research/#topics" %}
<ul class="home-list">
{% for topic in site.data.research_topics limit:3 %}
<li><a href="{{ '/research/#topics' | relative_url }}" class="home-list-title">{{ topic.title }}</a><span class="home-list-meta">{{ topic.summary }}</span></li>
{% endfor %}
</ul>
</div>

{% assign featured = site.data.projects | where: "featured", true %}
<div class="section-card home-card" markdown="0">
{% include card-head.html title="Projects" icon="code" tone="violet" url="/projects/" %}
<ul class="home-list">
{% for project in featured %}
{% assign cat = site.data.project_categories | where: "id", project.category | first %}
<li class="tone-{{ cat.tone }}"><a href="{{ '/projects/#' | append: project.category | relative_url }}" class="home-list-title">{% include icon.html name=cat.icon class="home-list-icon" %}{{ project.short | default: project.name }}</a><span class="home-list-meta">{{ project.summary }}</span></li>
{% endfor %}
</ul>
</div>

{% if site.data.awards %}
<div class="section-card home-card" markdown="0">
{% include card-head.html title="Awards &amp; scholarships" icon="trophy" tone="amber" url="/about/" %}
<ul class="award-list">
{% for award in site.data.awards limit:4 %}
<li>{% if award.url %}<a href="{{ award.url }}" target="_blank" rel="noopener">{{ award.name }}</a>{% else %}{{ award.name }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.learning %}
<div class="section-card home-card" markdown="0">
{% include card-head.html title="Learning materials" icon="notebook" tone="teal" url="/learning/" %}
<ul class="home-list">
{% for cat in site.data.learning %}
{% assign n = 0 %}{% for g in cat.groups %}{% assign n = n | plus: g.items.size %}{% endfor %}
<li class="tone-{{ cat.tone }}"><a href="{{ '/learning/#' | append: cat.id | relative_url }}" class="home-list-title">{% include icon.html name=cat.icon class="home-list-icon" %}{{ cat.title }}</a><span class="home-list-meta">{{ n }} items in {{ cat.groups.size }} group{% if cat.groups.size != 1 %}s{% endif %}</span></li>
{% endfor %}
</ul>
</div>
{% endif %}
