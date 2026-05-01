import { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { Award, BookOpen, Users } from 'lucide-react';

export default function Fundadores() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Fundadores | YOHEV y Claribel Puga',
      description: 'Conoce a los fundadores del Instituto Ascendant: YOHEV (Erick Gurrola) y Claribel Puga. Sus historias de transformación y enseñanzas.',
      keywords: ['YOHEV', 'Claribel Puga', 'Erick Gurrola', 'maestros', 'facilitadores'],
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
        <Breadcrumbs items={[{ label: 'Fundadores' }]} />
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Los Fundadores
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dos maestros, una visión: integrar la claridad pedagógica, la honestidad intelectual y la profundidad espiritual en un ecosistema de transformación auténtica.
          </p>
        </div>
      </section>

      {/* Claribel Puga */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-amber-700 opacity-30" />
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                Claribel Puga
              </h2>
              <p className="text-amber-700 font-semibold text-lg mb-6">
                Fundadora y Directora Pedagógica del Instituto Ascendant
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Claribel Puga es maestra en Neurociencias aplicadas a la espiritualidad, con una profunda dedicación a integrar el conocimiento científico con la comprensión de la consciencia humana. Desde su infancia, desarrolló dones de clarividencia y clariaudiencia que, lejos de ser utilizados de forma mística vacía, los canalizó hacia la creación de métodos pedagógicos rigurosos y transformadores.
                </p>

                <p>
                  En 2010, creó la técnica de Meditación Isiaca, basada en la canalización de la Energía Isiaca (energía de la Divinidad Femenina). Esta técnica representa la integración entre la presencia maternal, la claridad mental y la profundidad espiritual. Posteriormente, en 2012, desarrolló la Meditación Ascendente, un método progresivo que conduce al practicante a través de tres fases de expansión de consciencia: intrínseca, extrínseca y holística.
                </p>

                <p>
                  Lo que distingue el trabajo de Claribel es su compromiso con la claridad. No promete milagros ni experiencias espectaculares. En su lugar, ofrece un camino riguroso, comprensible y aplicable a la vida cotidiana. Su pedagogía respeta la inteligencia del estudiante y evita tanto la infantilización como la intelectualización fría. Claribel es la mentora principal del Instituto Ascendant, la mente estructuradora de los métodos y la voz que guía los procesos formativos fundamentales.
                </p>

                <p>
                  Hoy, miles de estudiantes en todo el mundo practican sus técnicas y experimentan transformaciones sostenidas en sus vidas. Claribel continúa desarrollando nuevos programas, facilitando meditaciones guiadas y formando a maestros facilitadores que replican su enfoque integrador en diferentes contextos y culturas.
                </p>
              </div>

              {/* Credenciales */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maestra en Neurociencias aplicadas a la Espiritualidad</span>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Creadora de Meditación Isiaca y Meditación Ascendente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>
      </section>

      {/* YOHEV */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-amber-700 opacity-30" />
              </div>
            </div>

            {/* Contenido */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                YOHEV (Erick Gurrola)
              </h2>
              <p className="text-amber-700 font-semibold text-lg mb-6">
                Fundador y Director de Enseñanzas del Instituto Ascendant
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  YOHEV (Erick Gurrola), médico cirujano y maestro de consciencia crística, es el creador del sistema KS Healing Systems®. Su formación médica le otorga una base sólida para su trabajo en sanación, integrando la comprensión del cuerpo humano con la dimensión espiritual y energética de la transformación. Su trabajo se enfoca en la dimensión simbólica, arquetípica y espiritual de la transformación humana. Donde Claribel proporciona la estructura pedagógica y la claridad conceptual, YOHEV aporta la profundidad simbólica y la expansión de consciencia hacia dimensiones de integración holística.
                </p>

                <p>
                  KS Healing Systems® es un sistema de sanación energética basado en la consciencia crística, que integra técnicas de transformación profunda, reprogramación energética y activación de potenciales dormidos. El método de YOHEV no busca escapar de la realidad, sino integrar la espiritualidad en la vida cotidiana de forma práctica, responsable y coherente.
                </p>

                <p>
                  Lo que caracteriza el trabajo de YOHEV es su capacidad de traducir conceptos espirituales complejos en marcos comprensibles sin perder profundidad. Sus enseñanzas honran tanto el intelecto como la intuición, tanto la ciencia como la espiritualidad. Es un maestro que no promete salvación externa, sino que invita a cada persona a descubrir su propia divinidad y potencial creador.
                </p>

                <p>
                  YOHEV es también autor, facilitador de retiros sagrados, y mentor de procesos de consciencia avanzada. Su presencia en el Instituto Ascendant representa el complemento necesario a la pedagogía de Claribel: mientras ella construye la base estructural, él expande los horizontes hacia dimensiones de consciencia más amplias y simbólicamente ricas.
                </p>

                <p>
                  Juntos, Claribel y YOHEV han creado un ecosistema educativo único donde la transformación personal se entiende como un proceso coherente, progresivo y aplicable a la vida real. Su colaboración es un modelo de cómo dos maestros con enfoques complementarios pueden crear algo mayor que la suma de sus partes.
                </p>
              </div>

              {/* Credenciales */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Médico Cirujano</span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Creador de KS Healing Systems®</span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maestro de Consciencia Crística</span>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Autor y Facilitador de Retiros Sagrados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif text-center">
            Una Sinergia Única
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Claribel: Estructura y Claridad
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Pedagogía rigurosa y comprensible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Integración neuro-espiritual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Métodos progresivos y sostenibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Mentoría de procesos base</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                YOHEV: Expansión y Profundidad
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Dimensión simbólica y arquetípica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Consciencia crística y espiritual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Expansión hacia dimensiones holísticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>Facilitación de procesos avanzados</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-white rounded-lg p-8 border border-amber-100">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              La colaboración entre Claribel y YOHEV no es una yuxtaposición de dos enfoques, sino una integración orgánica donde cada uno complementa y potencia el trabajo del otro. Claribel proporciona la base estructural, pedagógica y neuro-integrativa; YOHEV expande esa base hacia dimensiones de consciencia más amplias y simbólicamente ricas. El resultado es un ecosistema educativo coherente, responsable y transformador.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 py-16 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Aprende directamente de nuestros maestros
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Explora los programas y retiros facilitados por Claribel y YOHEV.
          </p>
          <a
            href="/eventos"
            className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Ver Próximos Eventos
          </a>
        </div>
      </section>
    </div>
  );
}
