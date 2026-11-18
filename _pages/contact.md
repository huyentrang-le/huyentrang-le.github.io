---
title: "Contact"
layout: page
permalink: /contact/
---

# Contact

<div class="contact-grid" markdown="0">

<div class="section-card contact-card">
<h2 class="sec-title"><span class="icon-badge tone-rose">{% include icon.html name="envelope" %}</span>Get in touch</h2>
<p>The best way to reach me is by email. I am happy to talk about TSN, network calculus, privacy-preserving systems and collaborations.</p>
<ul class="contact-links balanced-grid">
{% if site.email %}<li><a href="mailto:{{ site.email }}" class="brand-email">{% include icon.html name="envelope" %}<span>{{ site.email }}</span></a></li>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<li><a href="{{ site.links.google_scholar }}" target="_blank" rel="noopener" class="brand-scholar">{% include icon.html name="google-scholar" %}<span>Google Scholar</span></a></li>{% endif %}
{% if site.links.github and site.links.github != "" %}<li><a href="{{ site.links.github }}" target="_blank" rel="noopener" class="brand-github">{% include icon.html name="github" %}<span>GitHub</span></a></li>{% endif %}
{% if site.links.linkedin and site.links.linkedin != "" %}<li><a href="{{ site.links.linkedin }}" target="_blank" rel="noopener" class="brand-linkedin">{% include icon.html name="linkedin" %}<span>LinkedIn</span></a></li>{% endif %}
{% if site.links.orcid and site.links.orcid != "" %}<li><a href="{{ site.links.orcid }}" target="_blank" rel="noopener" class="brand-orcid">{% include icon.html name="orcid" %}<span>ORCID</span></a></li>{% endif %}
{% if site.links.twitter and site.links.twitter != "" %}<li><a href="{{ site.links.twitter }}" target="_blank" rel="noopener" class="brand-x">{% include icon.html name="x-twitter" %}<span>X / Twitter</span></a></li>{% endif %}
</ul>
</div>

{% for loc in site.data.locations %}
{% assign lat = loc.lat | plus: 0 %}{% assign lon = loc.lon | plus: 0 %}
<div class="section-card contact-card map-card tone-{{ loc.tone | default: 'blue' }}">
<h2 class="sec-title"><span class="icon-badge tone-{{ loc.tone | default: 'blue' }}">{% include icon.html name="map-pin" %}</span>{{ loc.name }}</h2>
<p class="map-address">{% if loc.lab %}<strong>{{ loc.lab }}</strong><br>{% endif %}{{ loc.address }}</p>
<div class="map-frame">
<iframe title="Map: {{ loc.name }}" loading="lazy" referrerpolicy="no-referrer"
  src="https://www.openstreetmap.org/export/embed.html?bbox={{ lon | minus: 0.006 }},{{ lat | minus: 0.003 }},{{ lon | plus: 0.006 }},{{ lat | plus: 0.003 }}&amp;layer=mapnik&amp;marker={{ lat }},{{ lon }}"></iframe>
</div>
<div class="pub-actions">
<a href="https://www.openstreetmap.org/?mlat={{ lat }}&amp;mlon={{ lon }}#map=17/{{ lat }}/{{ lon }}" target="_blank" rel="noopener" class="btn-pill btn-link">Larger map</a>
{% if loc.url %}<a href="{{ loc.url }}" target="_blank" rel="noopener" class="btn-pill btn-website">Website</a>{% endif %}
</div>
</div>
{% endfor %}

</div>
