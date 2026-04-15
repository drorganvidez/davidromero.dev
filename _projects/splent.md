---
title: SPLENT — Software Product Line Engineering Toolkit
summary: "Materializa modelos UVL en infraestructura software ejecutable."
stack: [Python, Flask, Docker, UVL, Flamapy, PyPI]
order: 2
---

**[SPLENT](https://docs.splent.io)** cierra el gap entre la especificación formal
de variabilidad (un modelo UVL) y el software real que debe ejecutarse. El modelo
UVL deja de ser un artefacto pasivo y pasa a gobernar la construcción del producto:
cada configuración se valida formalmente antes de compilar una sola línea de código.

## arquitectura

- **Framework** — runtime en Python que descubre, compone y orquesta features
  dentro de una app Flask. Lee el modelo UVL al arrancar, resuelve el orden
  topológico respetando cross-tree constraints, y registra blueprints, modelos y
  hooks.
- **CLI** — comandos organizados por dominio: `feature:*`, `product:*`, `uvl:*`,
  `spl:*`, `db:*`, `cache:*`, health checks (`doctor`, `check:*`), testing, etc.
- **Cache** — almacenamiento local de versiones de features, namespace-aware,
  con soporte offline y reproducibilidad.

## features como paquetes

Cada feature es un paquete Python independiente bajo el namespace `splent_io`,
distribuido vía PyPI o GitHub, con su propio ciclo de vida (absent → cached →
declared → installed → migrated → active/disabled), sus rutas, modelos,
migraciones Alembic, templates, assets frontend, tests y (opcionalmente)
servicios Docker Compose.

## integración con UVLHub

La relación es bidireccional: el modelo UVL publicado en UVLRepo recibe un DOI, y
`pyproject.toml` lo referencia. `splent uvl:fetch` descarga el modelo canónico, y
`product:derive` valida la configuración contra él con Flamapy antes de construir.
Cada producto desplegado es trazable hasta el DOI exacto que gobernó su derivación.
