import React, { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function Privacidad() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Aviso de Privacidad | Instituto Ascendant',
      description: 'Política de privacidad y protección de datos del Instituto Ascendant.',
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumbs items={[{ label: 'Aviso de Privacidad' }]} />

        <h1 className="text-4xl font-bold text-gray-900 my-8 font-serif">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">
            Última actualización: Marzo 5, 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              1. Responsable del Tratamiento de Datos
            </h2>
            <p>
              Instituto Ascendant para el Crecimiento de la Consciencia Creadora (I3C) es responsable del tratamiento de tus datos personales. Nos comprometemos a proteger tu privacidad y a utilizar tus datos de forma responsable y transparente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              2. Datos que Recopilamos
            </h2>
            <p>Recopilamos los siguientes tipos de datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto: nombre, email, teléfono</li>
              <li>Información de inscripción: datos de cursos y programas</li>
              <li>Información de pago: datos necesarios para procesar transacciones</li>
              <li>Información de navegación: datos de uso del sitio web</li>
              <li>Información de comunicación: mensajes y consultas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              3. Propósito del Tratamiento
            </h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar tu inscripción en cursos y programas</li>
              <li>Procesar pagos y transacciones</li>
              <li>Enviar comunicaciones sobre programas y eventos</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Prevenir fraude y garantizar seguridad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              4. Base Legal
            </h2>
            <p>
              El tratamiento de tus datos se realiza con base en tu consentimiento, la ejecución de un contrato, o nuestros intereses legítimos en proporcionar servicios de calidad y seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              5. Compartición de Datos
            </h2>
            <p>
              Tus datos pueden ser compartidos con terceros únicamente cuando sea necesario para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesar pagos (proveedores de pago)</li>
              <li>Gestionar cursos (plataformas educativas como Kajabi)</li>
              <li>Cumplir obligaciones legales</li>
            </ul>
            <p>
              No vendemos ni compartimos tus datos con fines de marketing sin tu consentimiento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              6. Derechos del Usuario
            </h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Restringir el tratamiento de tus datos</li>
              <li>Oponerte al tratamiento</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacta a info@institutoascendant.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              7. Seguridad de Datos
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              8. Retención de Datos
            </h2>
            <p>
              Retenemos tus datos personales durante el tiempo necesario para cumplir los propósitos para los cuales fueron recopilados, o según lo requerido por la ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              9. Cambios en esta Política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">
              10. Contacto
            </h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contacta a:
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
