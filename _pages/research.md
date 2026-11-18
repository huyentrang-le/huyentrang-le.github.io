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

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Certified Dynamic Reconfiguration of TSN Networks (PhD)</h2>
<p class="research-desc"><a href="https://1.ieee802.org/tsn/" target="_blank" rel="noopener">Time-Sensitive Networking (TSN)</a> promises bounded latency, but measurements only show a lower bound on the worst-case delay. My PhD uses deterministic <a href="https://en.wikipedia.org/wiki/Network_calculus" target="_blank" rel="noopener">network calculus</a> to prove worst-case latency bounds and to keep them certified when the network is reconfigured at runtime. <a href="https://www.ece.fr/en/research-focuses-and-structuring" target="_blank" rel="noopener">LyRIDS</a> (ECE) and <a href="https://cedric.cnam.fr/" target="_blank" rel="noopener">CEDRIC</a> (Cnam).</p>
<div class="pub-actions">
<a href="https://cnam-ece.github.io/learning-materials/blog/why-deterministic-guarantees" target="_blank" rel="noopener" class="btn-pill btn-link">Notes</a>
<a href="https://github.com/CNAM-ECE" target="_blank" rel="noopener" class="btn-pill btn-git">GitHub</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Secure Genomic Data Sharing with Zero-Knowledge Proofs</h2>
<p class="research-desc">Blockchain-based platforms for sharing genomic data among multiple parties while protecting participants' identities. This work analyzes <a href="https://en.wikipedia.org/wiki/Zero-knowledge_proof" target="_blank" rel="noopener">zero-knowledge proof</a> (ZKP) based approaches to multi-party genomic data sharing and builds trust-based sharing and privacy-preserving aggregated biomedical analysis on top of them. COSMO team, <a href="https://www.ibisc.univ-evry.fr/" target="_blank" rel="noopener">IBISC</a>, with Prof. Nazim Agoulmine and Dr. Adnan Imeri. Published at ADVANCE 2026 and presented as a poster at <a href="https://womencourage.acm.org/2026/" target="_blank" rel="noopener">ACM womENcourage 2026</a>.</p>
<div class="pub-actions">
<a href="https://univ-evry.hal.science/hal-05645365/" target="_blank" rel="noopener" class="btn-pill btn-link">Article</a>
<a href="https://univ-evry.hal.science/hal-05645365/document" target="_blank" rel="noopener" class="btn-pill btn-pdf">PDF</a>
<a href="https://womencourage.acm.org/2026/index.php/poster-session/" target="_blank" rel="noopener" class="btn-pill btn-poster">Poster</a>
<a href="https://github.com/TTGenProject" target="_blank" rel="noopener" class="btn-pill btn-git">GitHub</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Selective Disclosure of Electronic Health Records</h2>
<p class="research-desc">Secure, traceable transmission of <a href="https://en.wikipedia.org/wiki/Electronic_health_record" target="_blank" rel="noopener">electronic health records</a> on the <a href="https://sui.io/" target="_blank" rel="noopener">Sui</a> blockchain, with contextual access control and privacy protection through zero-knowledge smart contracts (ZKContract). The resulting prototype guarantees confidentiality, integrity and traceability of medical data and won the <a href="https://genopole.agorize.com/web/en/challenges/618/teams/2643/participation" target="_blank" rel="noopener">Shaker Genopole Challenge</a>.</p>
<div class="pub-actions">
<a href="https://genopole.agorize.com/web/en/challenges/618/teams/2643/participation" target="_blank" rel="noopener" class="btn-pill btn-link">Shaker Genopole</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">SDN-based Medical IoT Infrastructure</h2>
<p class="research-desc">A secure infrastructure for collecting EHR data from medical IoT devices, with intelligent orchestration for autonomous, adaptive and user-centred <a href="https://en.wikipedia.org/wiki/Software-defined_networking" target="_blank" rel="noopener">Software-Defined Networks (SDN)</a>. It is evaluated in <a href="https://mininet-wifi.github.io/" target="_blank" rel="noopener">Mininet-WiFi</a> over <a href="https://en.wikipedia.org/wiki/OpenFlow" target="_blank" rel="noopener">OpenFlow</a> (<a href="https://genopole.agorize.com/en/challenges/d4gen-hackathon-2026" target="_blank" rel="noopener">D4Gen Hackathon 2026</a> project at <a href="https://www.ibisc.univ-evry.fr/" target="_blank" rel="noopener">IBISC</a>), where language agents orchestrate the devices through MCP interfaces.</p>
<div class="pub-actions">
<a href="https://llm-intent-orchestration.vercel.app" target="_blank" rel="noopener" class="btn-pill btn-website">Demo</a>
<a href="https://github.com/D4GenHackathon/llm-intent-orchestration" target="_blank" rel="noopener" class="btn-pill btn-code">Code</a>
<a href="https://docs.google.com/presentation/d/17n0wptI4n4wjyPATJ44HPGJ8dE6MdHPh/edit?usp=sharing" target="_blank" rel="noopener" class="btn-pill btn-slides">Slides</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Language Agents for IoT Orchestration</h2>
<p class="research-desc"><a href="https://llmthings.github.io/demo/" target="_blank" rel="noopener">LLMThings</a> is an experimentation platform for orchestrating IoT systems with language agents, built with Anaïs Sadoudi and Dr. Massinissa Hamidi. It received the <a href="https://www.ibisc.univ-evry.fr/anais-sadoudi-et-huyen-trang-le-recoivent-le-best-presentation-award-a-la-jdse-2026-english-version-below/" target="_blank" rel="noopener">Best Presentation Award</a> at <a href="https://jdse2026.github.io/program/" target="_blank" rel="noopener">JDSE 2026</a>.</p>
<div class="pub-actions">
<a href="https://llmthings.github.io/demo/" target="_blank" rel="noopener" class="btn-pill btn-website">Demo</a>
<a href="https://jdse2026.github.io/slides/Oral_pres/13_SADOUDI_LLMThings.pdf" target="_blank" rel="noopener" class="btn-pill btn-slides">Slides</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Location Privacy in Multimodal Transportation</h2>
<p class="research-desc">An adaptive privacy-preserving system for multimodal mobility trajectories that adjusts the level of protection to the user's context and mode of transport. Carried out during a 3-month research internship at <a href="https://www.up.pt/feup/en/" target="_blank" rel="noopener">FEUP, Universidade do Porto</a>, funded by <a href="https://erasmus-plus.ec.europa.eu/" target="_blank" rel="noopener">Erasmus+</a> and the <a href="https://www.universite-paris-saclay.fr/admission/bourses-et-aides-financieres/bourses-de-stage-linternational-idex" target="_blank" rel="noopener">IDEX Paris-Saclay</a> international internship scholarship, with Prof. Mariana Cunha and Prof. João P. Vilela. Presented as a poster at <a href="https://kdradjat.github.io/jdse-2025/" target="_blank" rel="noopener">JDSE 2025</a>.</p>
<div class="pub-actions">
<a href="https://kdradjat.github.io/jdse-2025/posters/3_Context-Aware_Location_Privacy-Preserving.pdf" target="_blank" rel="noopener" class="btn-pill btn-poster">Poster</a>
</div>
</div>
</div>

<div class="research-card">
<div class="research-body">
<h2 class="research-title">Deep Reinforcement Learning for Edge-Cloud Systems</h2>
<p class="research-desc">A multi-objective <a href="https://en.wikipedia.org/wiki/Deep_reinforcement_learning" target="_blank" rel="noopener">deep reinforcement learning</a> algorithm for selecting edge-cloud servers. It improves network routing performance by more than 60% over traditional algorithms. Engineering thesis (graded 4/4) at the BKCS lab, HUST, with Prof. Tran Hai-Anh; published at IEEE Cloud Summit 2024.</p>
<div class="pub-actions">
<a href="https://ieeexplore.ieee.org/abstract/document/10630895/" target="_blank" rel="noopener" class="btn-pill btn-link">Article</a>
<a href="https://github.com/TranLabScholars/mec_multi-objective_drl" target="_blank" rel="noopener" class="btn-pill btn-code">Code</a>
<a href="https://github.com/huyentrang-le/BKCS" target="_blank" rel="noopener" class="btn-pill btn-git">Learning materials</a>
</div>
</div>
</div>

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
