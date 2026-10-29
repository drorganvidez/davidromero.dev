---
title: UVLHub — An Open Science Ecosystem for UVL
summary: "Infraestructura integrada para compartir, generar y gestionar modelos UVL como artefactos de investigación."
stack: [Python, Flask, UVL, Flamapy, Docker, Zenodo]
order: 1
---

**UVLHub** es el núcleo de mi tesis doctoral, *UVLHub: An Open Science Ecosystem
for the Universal Variability Language* (Universidad de Sevilla, julio 2026): un
ecosistema integrado para el ciclo de vida completo de modelos de variabilidad
basados en UVL como artefactos de investigación reproducibles.

## en números

- **1.614 modelos UVL** en una treintena de datasets citables con DOI.
- **3.800 usuarios activos de 78 países** en once meses de producción en
  [uvlhub.io](https://www.uvlhub.io), con actividad en los cinco continentes.
- Software libre, abierto a contribuciones externas, y alineado con los
  principios FAIR.

## componentes

- **[UVLRepo](https://www.uvlhub.io)** — repositorio domain-specific con validación
  sintáctica, metadatos estructurados, DOIs vía Zenodo y REST API.
- **UVLGen** — generación de modelos UVL (random paramétrica y con LLMs), con
  un paso de validación común que solo admite modelos conformes a la gramática.
- **UVLMng** — workflow de gestión que se lanza solo sobre cada modelo del
  repositorio: parsing (UVL.js), análisis automático (Flamapy), visualización
  (FM Fact Label) y edición web-based (flamapy.ide).

## por qué importa

Antes de UVLHub, los modelos de variabilidad estaban dispersos en páginas personales,
repositorios de código y material suplementario de publicaciones. Las plataformas
genéricas como Zenodo dan almacenamiento pero no validación domain-specific,
búsqueda estructural ni integración con servicios de análisis. UVLHub llena ese
hueco con una infraestructura pensada específicamente para UVL.
