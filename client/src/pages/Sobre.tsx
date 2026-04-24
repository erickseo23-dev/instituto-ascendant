import { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { Heart, Lightbulb, Compass, Users } from 'lucide-react';

export default function Sobre() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Sobre Instituto Ascendant | Nuestra Misión y Visión',
      description: 'Conoce la historia, misión y visión del Instituto Ascendant. Fundado por YOHEV y Claribel Puga para el crecimiento de la consciencia.',
      keywords: ['instituto ascendant', 'YOHEV', 'Claribel Puga', 'consciencia creadora'],
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
        <Breadcrumbs items={[{ label: 'Sobre Nosotros' }]} />
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Instituto Ascendant
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Un espacio dedicado al crecimiento de la consciencia creadora, donde la espiritualidad se integra con claridad, rigor y responsabilidad hacia la transformación personal y colectiva.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Nuestra Historia</h2>
          
          <div className="prose prose-lg max-w-4xl text-gray-700 space-y-6">
            <p>
              El Instituto Ascendant para el Crecimiento de la Consciencia Creadora (I3C) nace de la visión de integrar el conocimiento científico, la claridad pedagógica y la profundidad espiritual en un ecosistema educativo coherente. Fundado por Claribel Puga y YOHEV (Erick Gurrola), el Instituto representa una respuesta a la necesidad contemporánea de métodos de transformación personal que respeten tanto la inteligencia como la sensibilidad del ser humano.
            </p>

            <p>
              Claribel Puga, maestra en neurociencias aplicadas a la espiritualidad, desarrolló durante años las técnicas de Meditación Isiaca y Meditación Ascendente, métodos progresivos que conducen al practicante hacia estados crecientes de consciencia lúcida y presencia auténtica. Su enfoque integrador combina el rigor mental con la comprensión emocional y la apertura espiritual.
            </p>

            <p>
              YOHEV (Erick Gurrola), facilitador de transformación y maestro de KS Healing Systems, aporta profundidad en la sanación energética y la activación de la consciencia crística. Su trabajo se centra en la liberación de patrones limitantes y la activación del potencial transformador inherente en cada ser humano.
            </p>

            <p>
              Juntos, han creado un ecosistema educativo que ofrece un camino coherente desde la presencia básica hasta la integración holística, respaldado por pedagogía clara, estructuras de aprendizaje progresivo y acompañamiento responsable.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-8 h-8 text-amber-700" />
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Acompañar procesos auténticos de transformación personal mediante métodos claros, estructurados y responsables que integren ciencia, pedagogía y profundidad espiritual.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-amber-700" />
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un mundo donde la consciencia creadora es cultivada como práctica cotidiana, donde cada persona vive desde su autenticidad y contribuye al crecimiento colectivo.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-amber-700" />
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Valores</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Autenticidad y transparencia</li>
                <li>• Responsabilidad pedagógica</li>
                <li>• Rigor y profundidad</li>
                <li>• Inclusión y accesibilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad Global */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Nuestra Comunidad Global
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Más de 3,000 estudiantes en 15+ países participan activamente en nuestros programas, creando una red global de transformación consciente.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">3,053+</p>
              <p className="text-gray-700">Estudiantes Activos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">33+</p>
              <p className="text-gray-700">Cursos y Programas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">33</p>
              <p className="text-gray-700">Maestros Facilitadores</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">15+</p>
              <p className="text-gray-700">Países Alcanzados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
