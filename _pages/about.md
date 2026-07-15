---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

<div class="section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title }}, {{ site.institution }}</p>
<div class="pi-links">
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
{% if site.links.twitter and site.links.twitter != "" %}<a href="{{ site.links.twitter }}" class="icon-link" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>{% endif %}
{% if site.links.linkedin and site.links.linkedin != "" %}<a href="{{ site.links.linkedin }}" class="icon-link" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
</div>
<p style="margin-top: var(--space-4);">I am an undergraduate in Electrical Engineering and Computer Science at IISER Bhopal. My interests include Computer Vision, GenAI, Diffusion Models, Transformers, and Graphics Programming. I am currently exploring personalization in diffusion models and autoregressive world models.</p>
</div>
</div>
</div>

<div class="section-card">
<h3>Experience</h3>
<h4 style="margin-bottom: 0;">Research Intern — Vision and AI Lab, Indian Institute of Science</h4>
<p style="font-style: italic; color: var(--text-secondary); margin-top: var(--space-1);">December 2024 – Ongoing</p>
<ul>
<li>Working as part of the <a href="https://val.cds.iisc.ac.in/" target="_blank">Vision and AI Lab</a>, ranked the #1 computer vision research lab in India by <a href="https://csrankings.org/" target="_blank">CSRankings.org</a>.</li>
<li>Creating a dataset for object relighting using the BlenderProc API.</li>
<li>Conducted a literature survey of CVPR 2025 papers on video diffusion models.</li>
<li>Fine-tuned a 1.3B parameter video model on a custom dataset.</li>
<li>Analyzed state-of-the-art video diffusion models: Hunyuan, Mochi-1, and CogVideoX.</li>
<li>Compiled findings into a comprehensive internship report.</li>
</ul>
<div class="pub-actions">
<a href="{{ site.url }}{{ site.baseurl }}/papers/Internship_Report.pdf" target="_blank" class="btn-pill btn-website">Internship Report</a>
</div>
</div>

<div class="section-card">
<h3>Technical Skills</h3>
<ul>
<li><strong>Languages:</strong> Python, C++, C, Java, GLSL, MATLAB</li>
<li><strong>Developer Tools:</strong> Visual Studio, Git, GitHub, Linux</li>
<li><strong>Libraries &amp; APIs:</strong> Hugging Face Diffusers, Blender API, PyTorch, OpenGL, Dear ImGui, NumPy, Matplotlib</li>
</ul>
</div>
