import React, { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function Cookies() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Política de Cookies | Instituto Ascendant',
      description: 'Información sobre el uso de cookies en el sitio web del Instituto Ascendant.',
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumbs items={[{ label: 'Política de Cookies' }]} />

        <h1 className="text-4xl font-bold text-gray-900 my-8 font-serif">
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">
            Última actualización: Marzo 5, 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              ¿Qué son las Cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar información sobre ti y mejorar tu experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Tipos de Cookies que Utilizamos
            </h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              1. Cookies Esenciales
            </h3>
            <p>
              Necesarias para el funcionamiento del sitio web. Incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Autenticación de usuario</li>
              <li>Preferencias de idioma</li>
              <li>Seguridad y prevención de fraude</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              2. Cookies de Análisis
            </h3>
            <p>
              Utilizadas para entender cómo los usuarios interactúan con el sitio. Incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics para medir tráfico y comportamiento</li>
              <li>Información sobre páginas visitadas</li>
              <li>Tiempo de permanencia en el sitio</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              3. Cookies de Funcionalidad
            </h3>
            <p>
              Mejoran la experiencia del usuario al recordar preferencias:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Preferencias de visualización</li>
              <li>Historial de navegación</li>
              <li>Información de carrito de compras</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              4. Cookies de Marketing
            </h3>
            <p>
              Utilizadas para mostrar anuncios relevantes y medir efectividad de campañas (solo con tu consentimiento).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Cookies de Terceros
            </h2>
            <p>
              Algunos servicios de terceros pueden establecer cookies en tu navegador, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (análisis de tráfico)</li>
              <li>Kajabi (gestión de cursos)</li>
              <li>Proveedores de pago (procesamiento seguro)</li>
            </ul>
            <p>
              Estos terceros tienen sus propias políticas de cookies que recomendamos revisar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Control de Cookies
            </h2>
            <p>
              Puedes controlar las cookies a través de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Configuración del navegador:</strong> Puedes bloquear o eliminar cookies en la configuración de tu navegador</li>
              <li><strong>Consentimiento:</strong> Al visitar el sitio, puedes aceptar o rechazar cookies no esenciales</li>
              <li><strong>Opt-out:</strong> Puedes optar por no participar en análisis específicos</li>
            </ul>
            <p className="mt-4">
              Nota: Bloquear cookies esenciales puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Duración de las Cookies
            </h2>
            <p>
              Las cookies pueden ser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>De sesión:</strong> Se eliminan cuando cierras el navegador</li>
              <li><strong>Persistentes:</strong> Se almacenan durante un período específico (días, meses o años)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Privacidad y Seguridad
            </h2>
            <p>
              Las cookies no contienen información personal identificable. Sin embargo, combinadas con otros datos, pueden identificarte. Consulta nuestra Política de Privacidad para más información sobre cómo protegemos tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Cambios en esta Política
            </h2>
            <p>
              Podemos actualizar esta política en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              Contacto
            </h2>
            <p>
              Si tienes preguntas sobre esta política de cookies, contacta a:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> info@institutoascendant.com<br />
              <strong>Dirección:</strong> Ciudad de México, México
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
