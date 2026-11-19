---
title: "Home"
layout: homelay
permalink: /
---

<h1 class="home-hero">{{ site.name }}</h1>
<p class="home-hero-sub">{{ site.title }}, {{ site.institution }}</p>

<div class="chip-container" markdown="0">
{% for area in site.data.research_areas %}<a href="#area-{{ area.id }}" class="chip" title="{{ area.name }}">{{ area.chip }}</a>
{% endfor %}</div>

My research is on **trustworthy networked systems**: networks whose timing can be proven, and data infrastructures whose privacy can be proven.
On the networking side, I use deterministic network calculus to certify worst-case latency in Time-Sensitive Networks.
On the data side, I build blockchain platforms with zero-knowledge proofs and decentralised storage so that health data records of different specifications, from clinical EHRs to genomic data, can be shared, audited and analysed without exposing patients.

I am a PhD candidate at [Cnam](https://www.cnam.fr/) and [ECE Engineering School](https://www.ece.fr/) in Paris (2026–2029), in the [LyRIDS](https://www.ece.fr/en/research-focuses-and-structuring) and [CEDRIC](https://cedric.cnam.fr/) laboratories.
My thesis uses deterministic [network calculus](https://en.wikipedia.org/wiki/Network_calculus) to keep worst-case latency guarantees certified while [Time-Sensitive Networks](https://1.ieee802.org/tsn/) are reconfigured at runtime.

Before my PhD, I completed an M2 in Computer Networks at [Université d'Évry Paris-Saclay](https://www.univ-evry.fr/) and an engineering degree in Computer Science at [HUST](https://hust.edu.vn/), Hanoi.
I have worked on blockchain and zero-knowledge proofs for health and genomic data at [IBISC](https://www.ibisc.univ-evry.fr/), differential privacy for location data at the [Universidade do Porto](https://www.up.pt/feup/en/) (M1 internship), and deep reinforcement learning for edge-cloud systems at the [BKCS lab](https://bkcs.hust.edu.vn/).

<div class="section-card home-card" markdown="0">
{% include card-head.html title="Research areas" icon="flask" tone="teal" url="/research/#topics" %}
<ul class="area-list">
{% for area in site.data.research_areas %}
<li id="area-{{ area.id }}" class="tone-{{ area.tone | default: 'teal' }}">
<h3 class="area-name">{% include icon.html name=area.icon class="home-list-icon" %}{{ area.name }}</h3>
{% if area.keywords %}<div class="topic-keywords">{% for k in area.keywords %}<span>{{ k }}</span>{% endfor %}</div>{% endif %}
<p class="area-method">{{ area.method }}</p>
{% if area.tech %}<p class="area-tech"><strong>Technologies:</strong> {{ area.tech | join: ", " }}</p>{% endif %}
</li>
{% endfor %}
</ul>
</div>

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
<li>{% if award.url %}<a href="{{ award.url }}" target="_blank" rel="noopener">{{ award.name }}</a>{% include link-icon.html url=award.url %}{% else %}{{ award.name }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}
