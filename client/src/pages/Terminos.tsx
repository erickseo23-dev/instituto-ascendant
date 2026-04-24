import { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function Terminos() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Términos y Condiciones | Instituto Ascendant',
      description: 'Términos y condiciones de uso del sitio web y servicios del Instituto Ascendant.',
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <Breadcrumbs items={[{ label: 'Términos y Condiciones' }]} />

        <h1 className="font-serif text-4xl font-semibold text-[#2D2D2D] my-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg max-w-none text-[#2D2D2D]">
          <h2>1. Aceptación de Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices el sitio.
          </p>

          <h2>2. Uso del Sitio</h2>
          <p>
            Te comprometes a utilizar este sitio solo para propósitos legales y de una manera que no infrinja los derechos de otros ni restrinja su uso y disfrute del sitio web.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido en este sitio web, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de Instituto Ascendant o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor.
          </p>

          <h2>4. Limitación de Responsabilidad</h2>
          <p>
            Instituto Ascendant no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes de tu uso o incapacidad de usar el sitio web o los servicios.
          </p>

          <h2>5. Descargo de Responsabilidad Médica</h2>
          <p>
            Los programas, meditaciones y enseñanzas ofrecidas por Instituto Ascendant no son un sustituto del consejo médico profesional. Siempre consulta con un profesional de la salud antes de comenzar cualquier nuevo programa de bienestar.
          </p>

          <h2>6. Política de Reembolsos</h2>
          <p>
            Los reembolsos están disponibles dentro de 14 días de la compra, siempre que no hayas accedido a más del 30% del contenido del curso. Después de este período, no se ofrecerán reembolsos.
          </p>

          <h2>7. Cambios en los Términos</h2>
          <p>
            Instituto Ascendant se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>

          <h2>8. Ley Aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por las leyes de México y te sometes a la jurisdicción exclusiva de los tribunales mexicanos.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos términos, por favor contacta a info@institutoascendant.com
          </p>
        </div>
      </div>
    </div>
  );
}
