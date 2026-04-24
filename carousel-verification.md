# Verificación - Carrusel Táctil en Móvil

## Cambios Implementados

### 1. Estructura Responsiva
- **Desktop (lg breakpoint y superior)**: Grid asimétrico fijo (1 tarjeta grande + 2 apiladas)
- **Móvil (menor a lg)**: Carrusel horizontal deslizable con scroll-snap

### 2. Características del Carrusel Móvil
- Scroll horizontal nativo (sin librerías externas)
- CSS `scroll-snap-type: x mandatory` para alineación suave
- Cada tarjeta ocupa aproximadamente el ancho del viewport
- `-webkit-overflow-scrolling: touch` para scroll suave en iOS
- Gap de 5 unidades entre tarjetas para separación visual

### 3. Comportamiento
- En móvil: Usuario puede deslizar horizontalmente para ver las 3 tarjetas de programas
- Las tarjetas se alinean automáticamente al final del scroll (scroll-snap-align: start)
- En desktop: Se mantiene el grid asimétrico original con todas las tarjetas visibles

## Estado
✅ Carrusel táctil implementado y funcionando correctamente en móvil
✅ Grid fijo mantenido en desktop
✅ Transición suave entre breakpoints
