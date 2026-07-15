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
<p style="margin-top: var(--space-4);">I am an undergraduate in Electrical Engineering and Computer Science at IISER Bhopal. My interests include Computer Vision, GenAI, Diffusion Models, Transformers, Graphics Programming, and Simulation. My recent work centers on video diffusion models and world models.</p>
</div>
</div>
</div>

<div class="section-card">
<h3>Education</h3>
<h4 style="margin-bottom: 0;">B.S., Electrical Engineering and Computer Science</h4>
<p style="font-style: italic; color: var(--text-secondary); margin-top: var(--space-1);">Indian Institute of Science Education and Research (IISER) Bhopal &middot; September 2023 – May 2027</p>
</div>

<div class="section-card">
<h3>Experience</h3>

<h4 style="margin-bottom: 0;">Member of Technical Staff, Pretraining Team — Wayfarer Labs</h4>
<p style="font-style: italic; color: var(--text-secondary); margin-top: var(--space-1);">October 2025 – Present</p>
<ul>
<li>Training foundational interactive video models.</li>
<li>Scaling up and optimizing data and inference pipelines for custom and pre-trained open-source video diffusion models.</li>
</ul>

<h4 style="margin-bottom: 0; margin-top: var(--space-6);">Research Intern — Vision and AI Lab, Indian Institute of Science</h4>
<p style="font-style: italic; color: var(--text-secondary); margin-top: var(--space-1);">December 2024 – August 2025</p>
<ul>
<li>Worked at the <a href="https://val.cds.iisc.ac.in/" target="_blank">Vision and AI Lab</a>, ranked the #1 computer vision research lab in India by <a href="https://csrankings.org/" target="_blank">CSRankings.org</a>.</li>
<li>Created a dataset for object relighting using the BlenderProc API with procedural camera poses and environment lighting maps.</li>
<li>Conducted literature surveys of ICCV 2026 and CVPR 2025 papers on video relighting and video diffusion models.</li>
<li>Performed efficient LoRA fine-tuning of the WanVideo 1.3B model on a custom dataset using Diffusion-Pipe, with inference via Hugging Face Diffusers.</li>
<li>Ran and compared state-of-the-art video diffusion models (Hunyuan, Mochi-1, CogVideoX) on server-grade hardware using Hugging Face Diffusers, ComfyUI, and xDiT for multi-GPU inference.</li>
</ul>
<div class="pub-actions">
<a href="{{ site.url }}{{ site.baseurl }}/papers/Internship_Report.pdf" target="_blank" class="btn-pill btn-website">Internship Report</a>
</div>
</div>

<div class="section-card">
<h3>Technical Skills</h3>
<ul>
<li><strong>Languages:</strong> C++, C, Java, GLSL, Python, MATLAB</li>
<li><strong>Developer Tools:</strong> Visual Studio, Git, GitHub, Linux</li>
<li><strong>Libraries &amp; APIs:</strong> Hugging Face Diffusers, PyTorch, OpenGL, Dear ImGui, NumPy, Matplotlib</li>
</ul>
</div>
