---
layout: default
title: investigación
permalink: /investigacion/
---

<section class="section" markdown="1">

<h1># investigación</h1>

<div class="prompt-line"><span class="prompt-user">david@dev</span>:<span class="prompt-path">~/investigacion</span>$ cat thesis.md</div>

## PhD Thesis

**UVLHub: An Open Science Ecosystem for the Universal Variability Language**

- **Universidad de Sevilla**, Escuela Técnica Superior de Ingeniería Informática — Programa de Doctorado en Ingeniería Informática
- Departamento de Lenguajes y Sistemas Informáticos · Diverso Lab
- Defendida el **14 de julio de 2026** · **Sobresaliente cum laude** · **International Doctorate Mention**
- Directores: **Dr. David Benavides Cuevas** y **Dr. José Ángel Galindo Duarte**
- Revisoras internacionales: **Dra. Sandra Greiner** (University of Southern Denmark) y **Dra. Fabricia Roos-Frantz** (UNIJUÍ, Brasil)
- Licencia CC BY 4.0 · edición impresa con ISBN 979-8-18113636-6

La tesis presenta UVLHub, el primer ecosistema Open Science integrado para modelos de
variabilidad: une compartir, generar y gestionar modelos UVL alrededor de un repositorio
domain-specific, alineado con los principios FAIR.

## research lines

- **Software Product Line Engineering (SPL)** — ingeniería y evolución de familias de productos software.
- **Variability modeling con UVL** — Universal Variability Language como lingua franca de modelos de variabilidad.
- **Análisis automático de feature models** — SAT/#SAT/SMT/BDD sobre [Flamapy](https://www.flamapy.org/).
- **Open Science & FAIR principles** — publicación, descubrimiento y reutilización de artefactos de variabilidad.
- **Variability thinking y educación** — la variabilidad como dimensión del pensamiento computacional y cómo medirla.
- **LLMs en SPL** — generación de modelos UVL y clasificación de bugs de configuración.
- **Trazabilidad y feedback en forks** — análisis de desarrollos derivados de SPLs.
- **DevOps & CI/CD en contextos SPL** — pipelines adaptados a variabilidad, materialización de modelos en software ejecutable.

## contributions

### UVLHub ecosystem
Infraestructura integrada para el ciclo de vida completo de modelos UVL como artefactos de investigación. En producción en [uvlhub.io](https://www.uvlhub.io): 1.614 modelos UVL en una treintena de datasets con DOI, y 3.800 usuarios activos de 78 países en once meses.

- **[UVLRepo](https://www.uvlhub.io)** — repositorio domain-specific con validación sintáctica en upload, metadatos estructurados, DOIs persistentes vía Zenodo, búsqueda por propiedades estructurales y REST API.
- **UVLGen** — generación de modelos UVL: random paramétrica (determinista dados parámetros y semilla) y generación con LLMs, con un paso de validación común que solo admite modelos conformes a la gramática.
- **UVLMng** — workflow de gestión que se lanza automáticamente sobre cada modelo del repositorio, integrando [UVL.js](https://www.npmjs.com/package/uvl-js), [Flamapy](https://www.flamapy.org/), [FM Fact Label](https://fmfactlabel.adabyron.uma.es/) y [flamapy.ide](https://ide.flamapy.org) — parsing, análisis automático, visualización y edición web-based.

### SPLENT
**[SPLENT](https://splent.io)** (Software Product Line Engineering Toolkit) — materializa modelos UVL en infraestructura software ejecutable. Framework + CLI + Cache sobre Python/Flask + Docker, con features como paquetes Python independientes bajo el namespace `splent_io`. Docs en [docs.splent.io](https://docs.splent.io), código en [git.splent.io](https://git.splent.io) y catálogo de features en [marketplace.splent.io](https://marketplace.splent.io).

### Variability thinking
Una línea con Jesús Moreno-León y Gregorio Robles: la variabilidad como nueva dimensión del pensamiento computacional (**Best Paper Award, SPLC 2025**) y el **Test of Variability Thinking (TVT)**, un instrumento visual basado en Playmobil para medirla, presentado en VARIABILITY 2026.

### uvl-ecosystem.org
**[uvl-ecosystem.org](https://uvl-ecosystem.org)** — la web de la comunidad UVL: el lenguaje de un vistazo, las herramientas que lo hablan, su estado actual y la gente detrás.

### Transformo
**[Transformo](https://github.com/diverso-lab/transformo)** — framework para migrar entre bases de datos relacionales usando líneas de producto software, generando scripts SQL a medida y compatibles entre sí. Es la base de mi línea de variabilidad en migración de datos (SPLC 2022, VaMoS 2024).

## proyectos de investigación

- **COPERNICA** — Colaboración en procesos de negocio para el buen gobierno de servicios y datos compartidos (P20_01224). Junta de Andalucía. IP: María Teresa Gómez López.
- **OPHELIA** — Optimización de Servicios Basados en Conocimiento Usando Aplicaciones Basadas en Servicios (RTI2018-101204-B-C22). Ministerio de Ciencia, Innovación y Universidades. IPs: Manuel Resinas Arias de Reyna y David Benavides.

## estancias

- **University of Glasgow** (Reino Unido) — tres meses con el Dr. Yutian Tang, sobre feedback en desarrollos derivados (forks) de SPLs.
- **Universidade da Coruña** — Laboratorio de Bases de Datos, con el Prof. Miguel Ángel Rodríguez Luaces (febrero 2025), sobre UVL en el ecosistema JavaScript.

## publications

### journal articles

- Romero-Organvídez, Galindo, Sundermann, Horcas, Benavides. **UVLHub: A feature model data repository using UVL and Open Science principles.** *Journal of Systems and Software* 216, 112150 (2024). JCR Q1. [doi:10.1016/j.jss.2024.112150](https://doi.org/10.1016/j.jss.2024.112150)
- Romero-Organvídez, Horcas, Galindo, Benavides. **Data visualization guidance using a software product line approach.** *Journal of Systems and Software* 213, 112029 (2024). JCR Q1. [doi:10.1016/j.jss.2024.112029](https://doi.org/10.1016/j.jss.2024.112029)

### conferences & workshops

- Romero-Organvídez, Moreno-León, Galindo, Benavides. **An Instrument for Measuring Variability Thinking.** VARIABILITY 2026, Springer LNCS.
- Moreno-León, Romero-Organvídez, Robles, Benavides. **Software Variability as a New Dimension of Computational Thinking: an Exploration.** SPLC 2025. **Best Paper Award.** [doi:10.1145/3744915.3748459](https://doi.org/10.1145/3744915.3748459)
- Romero-Organvídez, Díaz, Tang, Benavides. **Feedback Analysis in Software Product Line Forked Developments.** SPLC 2025. [doi:10.1145/3744915.3748465](https://doi.org/10.1145/3744915.3748465)
- Lopez-Duran, Romero-Organvídez, Cruz, Benavides. **Configuration Bugs Classification using LLMs and Encoders.** SPLC 2025. [doi:10.1145/3744915.3748477](https://doi.org/10.1145/3744915.3748477)
- Romero-Organvídez, Moreno-León, Robles, Chacón-Luna, Benavides. **From Playmobil to Product Lines: towards a visual instrument for variability thinking measurement.** SPLC 2025 (Vol. B). [doi:10.1145/3748269.3749380](https://doi.org/10.1145/3748269.3749380)
- Benitez, Galindo, Romero-Organvídez, Benavides. **UVL web-based editing and analysis with flamapy.ide.** VaMoS 2025. [doi:10.1145/3715340.3715436](https://doi.org/10.1145/3715340.3715436)
- Lamas, Limaylla-Lunarejo, Luaces, Romero-Organvídez, Galindo, Benavides. **UVL.js: Experiences on using UVL in the JavaScript Ecosystem.** VaMoS 2025. [doi:10.1145/3715340.3715437](https://doi.org/10.1145/3715340.3715437)
- Galindo, Romero-Organvídez, Bhushan, Horcas, Benavides. **Open Science principles in software product lines: The case of the UVL ecosystem.** SPLC 2024. [doi:10.1145/3646548.3674550](https://doi.org/10.1145/3646548.3674550)
- Romero-Organvídez, Neira Ayuso, Galindo, Benavides. **Kconfig metamodel: a first approach.** SPLC 2024 (Vol. B). [doi:10.1145/3646548.3676548](https://doi.org/10.1145/3646548.3676548)
- Romero-Organvídez, Galindo, Benavides. **UVL Sentinel: A tool for parsing and syntactic correction of UVL datasets.** MODEVAR 2024. [doi:10.48550/arXiv.2403.18482](https://doi.org/10.48550/arXiv.2403.18482)
- Romero-Organvídez, Benavides, Horcas, Gómez-López. **Variability in data transformation: towards data migration product lines.** VaMoS 2024. [doi:10.1145/3634713.3634724](https://doi.org/10.1145/3634713.3634724)
- Romero-Organvídez, Galindo, Horcas, Benavides. **Variability-aware data migration tool.** SPLC 2022 (Vol. B). [doi:10.1145/3503229.3547062](https://doi.org/10.1145/3503229.3547062)
- Zamudio, Romero-Organvídez, Galindo, Benavides. **Prototipo para la generación, prueba y despliegue automático de sitios web con WordPress usando líneas de producto software (WebSPL).** JISBD 2022. Handle 11705/JISBD/2022/2185.
- Romero-Organvídez, Benavides, Horcas. **Aplicar técnicas de variabilidad para la migración de datos, un enfoque transformacional.** JIPII 2022 (Universidad de Cádiz).
- Romero-Organvídez, Galindo, Horcas, Benavides. **A first prototype of a new repository for feature model exchange and knowledge sharing.** SPLC 2021 (Vol. B). [doi:10.1145/3461002.3473949](https://doi.org/10.1145/3461002.3473949)

### docencia universitaria

- Romero, Benavides. **Evidentia: gestión de evidencias en trabajos colaborativos usando software libre.** JENUI 2022, pp. 159–166. [PDF](https://aenui.org/actas/pdf/JENUI_2022_021.pdf)

## stack

Python · Flask · SQLAlchemy · Flamapy · UVL · Docker · Redis · Elasticsearch · GitHub Actions · Forgejo · JavaScript · React · Next.js · Java · Spring Boot · iOS · Android · Linux · sistemas operativos · virtualización

</section>
