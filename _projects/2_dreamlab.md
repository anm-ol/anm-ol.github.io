---
layout: page
title: DreamLab
description: Latent Diffusion Transformer for Text2Video generation
img: assets/img/mario.png
importance: 2
category: research
---

**DreamLab** is a smaller-scale text-to-video model inspired by OpenAI's Sora. I experimented with multiple autoencoder architectures, training one that combines perceptual and reconstruction losses to minimize quality loss, drawing on DDPM, LDM, VAE/VQ-VAE, Vision Transformer, and Diffusion Transformer (DiT) research. I implemented DiT-based denoising for images without text conditioning, and am now building a DiT model with spatio-temporal attention and CLIP-based text conditioning, trained on a custom Minecraft gameplay dataset as a proof of concept.

<img src="{{ '/assets/img/mario.png' | relative_url }}" alt="DreamLab sample" class="img-fluid rounded z-depth-1" loading="lazy">

<div class="mt-3">
<a href="https://github.com/anm-ol/DreamLab" target="_blank" rel="noopener">GitHub →</a>
</div>
