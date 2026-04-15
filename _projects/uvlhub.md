---
title: UVLHub — Variability-centered Open Science Ecosystem
summary: "Infraestructura integrada para compartir, generar y gestionar modelos UVL como artefactos de investigación."
stack: [Python, Flask, UVL, Flamapy, Docker, Zenodo]
order: 1
---

**UVLHub** es el núcleo de mi tesis doctoral: un ecosistema integrado para el ciclo
de vida completo de modelos de variabilidad basados en UVL como artefactos de
investigación reproducibles.

## componentes

- **[UVLRepo](https://www.uvlhub.io)** — repositorio domain-specific con validación
  sintáctica, metadatos estructurados, DOIs vía Zenodo y REST API.
- **UVLGen** — generación de modelos UVL (random paramétrica y LLM-based synthesis).
- **UVLMng** — workflow de gestión en 4 etapas: parsing (UVL.js), análisis
  automático (Flamapy), visualización (FM Fact Label) y edición web-based
  (flamapy.ide).

## por qué importa

Antes de UVLHub, los modelos de variabilidad estaban dispersos en páginas personales,
repositorios de código y material suplementario de publicaciones. Las plataformas
genéricas como Zenodo dan almacenamiento pero no validación domain-specific,
búsqueda estructural ni integración con servicios de análisis. UVLHub llena ese
hueco con una infraestructura pensada específicamente para UVL.
