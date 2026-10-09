# TLBMS · revisión de captación · octubre 2026

## Base y alcance

Base verificada: main `3363adb91348e91e5433420f12315c79a2fc9f01`; producción Vercel `dpl_9nzva2PkAZM9atvJK8tqFU5Re6aL`, READY. No reconstrucción ni cambios de diseño. No se modifica Skool, Atlantis, KS, campañas ni presupuestos. Publicación y merge requieren confirmación específica.

## Datos aprobados

Inicio viernes 23 de octubre de 2026, nueve semanas, viernes 16:00 America/Mexico_City. Inscripciones hasta el 22 de octubre, sin hora de cierre aprobada. Precio: 3,999 MXN o dos pagos de 2,000 MXN (4,000 total). No se asume periodicidad de los pagos. Los checkout de la cohorte anterior se retiran; no hay enlaces nuevos verificados.

Masterclass abierta: https://youtu.be/QTv8u1sucZ4. YouTube oEmbed confirmó título “Todo Lo Bueno Me Sucede | Masterclass con Claribel Puga” y disponibilidad de embed. El ID se centraliza para ambas páginas y el componente compartido de portada.

## Captura real y propuesta pendiente

Las rutas TLBMS no contienen formulario persistente. `RegistrationModal.tsx` pertenece a otro programa y simula éxito con setTimeout. `ContactForm.tsx` usa el identificador de ejemplo Formspree `xyzabc123`. No se reutilizan ni modifican esos formularios ajenos. El servidor actual sirve archivos; no hay un endpoint de leads para TLBMS.

Flujo preparado: portada/referencias → masterclass abierta → fechas, precios y consulta por el correo institucional existente. El enlace mailto abre el cliente de correo; no garantiza envío ni crea un registro en CRM. La página lo explica y no muestra éxito ficticio.

Para activar captura persistente se necesita un destino real aprobado (formulario Kajabi/CRM o endpoint), propietario de seguimiento y texto de consentimiento. Propuesta: nombre, correo, teléfono opcional, consentimiento explícito, origen (masterclass o Un Curso de Meditación), fecha y campaña cuando exista. Confirmar éxito solo después de guardar en servidor; verificar un registro de prueba en el destino, rechazo/error de red y duplicados antes de habilitarlo. Mantener el video abierto.

Un Curso de Meditación sigue siendo una entrada de prospectos para TLBMS. Destino suministrado: https://www.skool.com/comunidad-ascendant/classroom/3d6ee43c. Conservar Standard nivel 2 o Premium y no prometer acceso inmediato. La comprobación HTTP desde este entorno devolvió 403; no se cambian sus permisos ni se añade una promesa de acceso. El CTA suministrado https://wa.me/17542393446 respondió HTTP 200, pero esto no acredita entrega de mensajes. Propuesta para revisión: seguimiento del curso → invitación a la masterclass abierta → consulta TLBMS, etiquetando origen en el futuro CRM. No se enviaron mensajes ni se alteró Skool.

## Reembolso y puntos de revisión

Cotejo de solo lectura completado el 09/10/2026 en [ficha de cohorte](https://app.notion.com/p/3e4d43b5b86d817297d0f542ae3cc566) y [ficha de programa](https://app.notion.com/p/3c3d43b5b86d81a1ad21d04fc0da6239), editadas el 08/10. Ambas confirman la decisión de Erick.

Texto exacto de la ficha de cohorte: «Erick confirmó “rembolso sigue igual” a la consulta sobre siete días: se conservan siete días desde el inicio, conforme a la política específica anterior. No se concede ni niega un reembolso por esta ficha; las solicitudes se derivan a Dirección.»

Texto exacto de la preparación de próxima cohorte en la ficha de programa: «Reembolso: siete días desde inicio, conservado por Erick.»

Texto visible del PR, centralizado en `tlbmsCohort.refundLabel` y usado por la página y el modal de masterclass: «Reembolso: siete días desde el inicio del programa. Las solicitudes se derivan a Dirección.» No se agregan condiciones ni se concede o niega una solicitud.

`Terminos.tsx` permanece intacto con su texto general de 14 días desde compra / 30% consumido. No se reconcilian ambas políticas por inferencia ni se cambia su alcance.

El contenido actual enumera 10 sesiones y nueve semanas; se conserva el temario. Falta confirmar cómo se distribuye la sesión de bienvenida, sin inventar una fecha final.

## Activación pendiente

- Verificar las dos ofertas nuevas y sus importes, cohorte y cuotas; comprobar que reflejen la condición particular ratificada.
- Aprobar destino de captura y ejecutar prueba de persistencia cuando exista.
- Revisar vista previa y autorizar publicación explícitamente.

## Verificación técnica

- Build Vite y prerender de cinco rutas completados; advertencia existente por bundle >500 kB.
- Tres pruebas de agenda pasan, incluyendo cambio de día en CDMX. Se ajustó el filtro del test para no confundir el evento de graduación 2027 con TLBMS.
- Chrome de prueba independiente: 390 y 1440 px, sin desbordamiento horizontal ni errores JavaScript en ambas rutas. CTA a video, apertura/cierre del reproductor, modal y cierre con Escape funcionan. Fechas, correo y ausencia de checkout/formulario comprobados. No se enviaron correos.
- `npm run check` bloqueado por sintaxis preexistente en `client/src/components/SocialLinks.tsx`, idéntico byte a byte a main. No se modifica ese archivo ajeno.
- No se prueba persistencia porque no existe formulario real en las rutas TLBMS.
