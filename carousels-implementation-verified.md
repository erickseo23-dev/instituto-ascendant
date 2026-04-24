# Verificación de Carruseles y Fotos de Fundadores

## Cambios Implementados

### 1. Fotos de Fundadores v2
✅ **Claribel Puga**: Foto completa con fondo crema/dorado, sin recortes en la cabeza
✅ **Dr. Erick Gurrola (YOHEV)**: Foto completa con fondo crema/dorado, sin recortes en la cabeza
- URLs actualizadas en IMAGES object
- Contenedor ajustado a h-96 en desktop con object-top positioning

### 2. Carrusel de Testimonios
✅ **Desktop (md+)**: Masonry grid con 2-3 columnas (hidden md:block)
✅ **Móvil**: Carrusel horizontal deslizable con scroll-snap nativo
- Ancho de tarjeta: calc(100vw - 32px - 32px) para peek effect
- Scroll suave con WebkitOverflowScrolling
- Snap points para mejor UX

### 3. Carrusel de Eventos
✅ **Desktop (md+)**: Grid layout con 3 eventos apilados verticalmente (hidden md:block)
✅ **Móvil**: Carrusel horizontal deslizable con scroll-snap nativo
- Mismo ancho de tarjeta para peek effect consistente
- Contenido flexible (flex-grow) para llenar espacio
- CTA centrado en móvil

## Resultado Visual
- Fotos de fundadores se ven completas sin recortes
- Carruseles funcionan suavemente en móvil
- Desktop mantiene layouts originales
- Peek effect visible en ambos carruseles

## Próximos Pasos
- Guardar checkpoint
- Desplegar versión actualizada
