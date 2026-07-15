---
title: "Software"
layout: gridlay
sitemap: false
permalink: /software/
---

## Projects

<div class="section-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/Relighting_grid.gif" alt="Dynamic 3D relighting in video diffusion models" style="width: 100%; border-radius: var(--radius); margin-bottom: var(--space-4);" loading="lazy">
<h4>Dynamic 3D Relighting in Video Diffusion Models (ChromaCraft)</h4>
<div class="pub-actions" style="margin-bottom: var(--space-3);">
<a href="https://github.com/anm-ol/ChromaCraft" target="_blank" class="btn-pill btn-git">GitHub</a>
</div>
<p>A technique to separate an object's 3D shape from its lighting in video using specialized LoRA models — disentangling pure geometry (LoRA-G) from lighting effects (LoRA-L). This enables precise, dynamic, temporally consistent control over video lighting, such as moving a spotlight or changing the time of day. It will be released open source with a "Lighting Palette" of pre-trained styles and tools to train custom models.</p>
</div>

<div class="section-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/sim3d_demo.gif" alt="Sim3D realtime cloth simulation" style="width: 100%; border-radius: var(--radius); margin-bottom: var(--space-4);" loading="lazy">
<h4>Sim3D — Realtime Cloth Simulation and Physics Engine</h4>
<div class="pub-actions" style="margin-bottom: var(--space-3);">
<a href="{{ site.url }}{{ site.baseurl }}/sim3d/sim3d.html" target="_blank" class="btn-pill btn-website">Devlog</a>
<a href="https://github.com/anm-ol/sim3d" target="_blank" class="btn-pill btn-git">GitHub</a>
</div>
<p>A 3D physics engine built from scratch in C++ and OpenGL. It features a mass-spring system for textured cloth simulation, Phong shading, efficient batch rendering, a particle system with uniform-grid collision detection, and an interactive ImGui scene editor. Built with object-oriented principles for modularity and extensibility.</p>
</div>

<div class="section-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/mario.png" alt="DreamLab text-to-video generation" style="width: 100%; border-radius: var(--radius); margin-bottom: var(--space-4);" loading="lazy">
<h4>DreamLab — Latent Diffusion Transformer for Text2Video Generation</h4>
<div class="pub-actions" style="margin-bottom: var(--space-3);">
<a href="https://github.com/anm-ol/DreamLab" target="_blank" class="btn-pill btn-git">GitHub</a>
</div>
<p>A smaller-scale text-to-video model inspired by OpenAI's Sora. I designed and experimented with autoencoder architectures to minimize quality loss via a combination of perceptual and reconstruction losses, and implemented the denoising process with a Diffusion Transformer (DiT) architecture. In progress: spatio-temporal attention and CLIP-based text conditioning.</p>
</div>
