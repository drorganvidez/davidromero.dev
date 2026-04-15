---
title: FESMA Platform
summary: "Plataforma integral de la Federación Española de Sociedades Mágicas: web pública, backoffice y áreas privadas por rol."
stack: [Python, Flask, SQLAlchemy, Docker, MariaDB, JavaScript]
order: 3
---

Rediseño arquitectónico completo de la plataforma de la **Federación Española
de Sociedades Mágicas** ([www.fesma.es](https://www.fesma.es)).
No solo UI: arquitectura, modelo de datos, producto, multi-rol y backoffice
federativo. Sociedades federadas, presidentes, vocales, socios y el público
general conviven en la misma plataforma.

## web pública

- **Directorio de sociedades** — mapa y listado de las sociedades federadas,
  buscador avanzado por nombre, provincia y tipo.
- **Congresos** — página de congresos con histórico y buscador avanzado.
- **Junta directiva** y organigrama público de la federación.
- **Noticias y boletines** — publicaciones, crónicas, newsletter con envío
  masivo a suscriptores.
- **Proyectos** — iniciativas de la federación.
- **Documentos oficiales** — estatutos, reglamentos, boletines descargables.
- **Solicitud de adhesión** a la federación y **formulario de contacto**.
- **Accesibilidad** — tamaño de texto, contraste, tipografía para dislexia,
  reducción de animaciones.

## área privada — presidentes de sociedad

- **Panel personalizado** por sociedad: socios federados, estado de cuotas.
- **Gestión de cuotas** con datos SEPA, concepto, confirmación de pago.
- **Actas de asamblea** — histórico descargable (asambleas ordinarias y
  extraordinarias desde 2014).
- **Gestión de socios** de la propia sociedad: altas, bajas, cargos.
- **Datos de la sociedad** — edición de información y visibilidad pública.
- **Documentos internos** — boletines, reglamentos reservados.
- **Mensajería bidireccional** con la federación.
- **Reporte de incidencias** (pagos, datos, acceso).

## backoffice (administración federación)

### Contenido
Congresos · Personas (magos, presidentes, jurado, ganadores) · Documentos ·
Categorías de documentos · Proyectos · Noticias · Páginas (CMS propio) ·
Newsletter (envíos masivos con plantillas) · Suscriptores · Contactos ·
Incidencias · Mensajería · Plantillas reutilizables.

### Federación
Solicitudes de adhesión · Socios federados · Buscador de federados ·
Sociedades · Organigrama (junta, vocalías) · **Pagos** (cuotas por sociedad) ·
Usuarios.

### Sistema
Timeline de actividad · Configuración global de la plataforma.

## highlights técnicos

- **Multi-tenant por sociedad** con aislamiento de datos y visibilidad por rol.
- **Sistema de roles** granular: público, socio, presidente, vocal, admin
  federación.
- **CMS propio** para páginas, noticias y plantillas de comunicación.
- **Motor de newsletter** con segmentación y envíos masivos.
- **Modelo económico** de cuotas por socio, conciliación y seguimiento.
- **Accesibilidad AA** integrada desde el diseño.
- **Enfoque producto modular** alineado con principios SPL (misma plataforma
  preparada para replicarse en otras federaciones nacionales).
