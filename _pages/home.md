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
More on the [research]({{ '/research/' | relative_url }}) and [projects]({{ '/projects/' | relative_url }}) pages.

<div class="callout callout-success" markdown="0">
<div class="callout-title">{% include icon.html name="notebook" class="callout-icon" %} Network calculus notes</div>
<p>A learning series on network calculus applied to TSN, from worst-case bounds to dynamic reconfiguration. Start with <a href="https://cnam-ece.github.io/learning-materials/blog/why-deterministic-guarantees" target="_blank" rel="noopener">Why deterministic guarantees?</a></p>
</div>

{% if site.data.awards %}
<h2 class="sec-title"><span class="icon-badge tone-amber">{% include icon.html name="trophy" %}</span>Awards &amp; scholarships</h2>

<ul class="award-list" markdown="0">
{% for award in site.data.awards limit:4 %}
<li>{% if award.url %}<a href="{{ award.url }}" target="_blank" rel="noopener">{{ award.name }}</a>{% else %}{{ award.name }}{% endif %}</li>
{% endfor %}
</ul>
{% if site.data.awards.size > 4 %}
<details class="more-list" markdown="0">
<summary>Show all {{ site.data.awards.size }}</summary>
<ul class="award-list">
{% for award in site.data.awards offset:4 %}
<li>{% if award.url %}<a href="{{ award.url }}" target="_blank" rel="noopener">{{ award.name }}</a>{% else %}{{ award.name }}{% endif %}</li>
{% endfor %}
</ul>
</details>
{% endif %}
{% endif %}
