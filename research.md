---
layout: default
title: investigación
permalink: /investigacion/
---

<section class="section" markdown="1">

<h1># investigación</h1>

<div class="prompt-line"><span class="prompt-user">david@dev</span>:<span class="prompt-path">~/investigacion</span>$ cat thesis.md</div>

## PhD Thesis

**UVLHub: A Variability-centered Open Science Software Ecosystem — Supporting Reproducible and Collaborative Research**

- **Universidad de Sevilla**, Escuela Técnica Superior de Ingeniería Informática
- Departamento de Lenguajes y Sistemas Informáticos
- Defensa: junio 2026 · **International Doctorate Mention**
- Directores: **Dr. David Benavides Cuevas** y **Dr. José Ángel Galindo Duarte**

## research lines

- **Software Product Line Engineering (SPL)** — ingeniería y evolución de familias de productos software.
- **Variability modeling con UVL** — Universal Variability Language como lingua franca de modelos de variabilidad.
- **Análisis automático de feature models** — SAT/#SAT/SMT/BDD sobre [Flamapy](https://flamapy.github.io/).
- **Open Science & FAIR principles** — publicación, descubrimiento y reutilización de artefactos de variabilidad.
- **Trazabilidad y feedback en forks** — análisis de desarrollos derivados de SPLs.
- **DevOps & CI/CD en contextos SPL** — pipelines adaptados a variabilidad, materialización de modelos en software ejecutable.
- **Reproducibilidad científica** en ecosistemas software.

## contributions

### UVLHub ecosystem
Infraestructura integrada para el ciclo de vida completo de modelos UVL como artefactos de investigación:

- **[UVLRepo](https://www.uvlhub.io)** — repositorio domain-specific con validación sintáctica en upload, metadatos estructurados, DOIs persistentes vía Zenodo, búsqueda por propiedades estructurales y REST API.
- **UVLGen** — mecanismos complementarios de generación de modelos UVL: random paramétrica (control estructural, alta reproducibilidad) y LLM-based synthesis (realismo semántico).
- **UVLMng** — workflow de gestión en 4 etapas integrando [UVL.js](https://www.npmjs.com/package/uvl-js), [Flamapy](https://flamapy.github.io/), [FM Fact Label](https://fmfactlabel.adabyron.uma.es/) y [flamapy.ide](https://flamapy.github.io/flamapy.ide/) — parsing, análisis automático, visualización y edición web-based con validación en tiempo real.

### SPLENT
**[SPLENT](https://docs.splent.io)** (Software Product Line Engineering Toolkit) — materializa modelos UVL en infraestructura software ejecutable. Framework + CLI + Cache sobre Python/Flask + Docker, con features como paquetes Python independientes bajo el namespace `splent_io`.

## stack

Python · Flask · SQLAlchemy · Flamapy · UVL · Docker · Redis · Elasticsearch · GitHub Actions · JavaScript · React · Next.js · Java · Spring Boot · iOS · Android · Linux · sistemas operativos · virtualización

</section>
