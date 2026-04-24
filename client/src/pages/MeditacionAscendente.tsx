import React, { useEffect } from 'react';
import { setSEOMetadata, generateStructuredData } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { Zap, Heart, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function MeditacionAscendente() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Meditación Ascendente® | Expansión de Consciencia',
      description: 'Descubre la Meditación Ascendente: técnica de expansión acelerada de consciencia. Energía Isiaca, tres fases de ascensión y transformación.',
      keywords: ['meditación ascendente', 'energía isiaca', 'expansión consciencia', 'meditación guiada', 'claribel puga'],
      type: 'product',
    });

    generateStructuredData('Course', {
      name: 'Meditación Ascendente®',
      description: 'Método progresivo de expansión de consciencia en tres fases',
      provider: {
        '@type': 'Organization',
        name: 'Instituto Ascendant',
      },
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
        <Breadcrumbs items={[{ label: 'Programas', href: '/programas' }, { label: 'Meditación Ascendente' }]} />
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-amber-700" />
              <span className="text-amber-700 font-semibold">Método Ascendant</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
              Meditación Ascendente®
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Un método progresivo de expansión de consciencia que te guía desde la presencia ordinaria hacia estados crecientes de claridad, integración emocional y consciencia lúcida.
            </p>
            <p className="text-gray-600 mb-8">
              Creado por Claribel Puga, la Meditación Ascendente integra neurociencia, claridad pedagógica y profundidad espiritual en un camino de transformación sostenida y aplicable a la vida cotidiana.
            </p>
            <a
              href="https://kajabi.com"
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="h-96 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
            <Zap className="w-32 h-32 text-amber-700 opacity-20" />
          </div>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
            ¿Qué es la Meditación Ascendente?
          </h2>

          <div className="prose prose-lg max-w-4xl text-gray-700 space-y-6">
            <p>
              La Meditación Ascendente es un método de expansión de consciencia que trabaja de forma progresiva y estructurada. No es una técnica de relajación pasiva ni una evasión de la realidad, sino un camino de presencia activa, claridad interna y integración emocional profunda.
            </p>

            <p>
              El método utiliza la Energía Isiaca (energía de la Divinidad Femenina) como vehículo de transformación. Esta energía, canalizada y estructurada pedagógicamente, conduce al practicante a través de tres fases de ascensión: la fase intrínseca (conocimiento de sí), la fase extrínseca (expansión hacia lo colectivo) y la fase holística (integración total).
            </p>

            <p>
              Lo que distingue la Meditación Ascendente es su énfasis en la claridad y la aplicabilidad. No promete experiencias espectaculares ni visiones forzadas. En su lugar, ofrece un proceso que produce transformación sostenida: mayor presencia, mejor regulación emocional, claridad mental y conexión auténtica con tu propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Las Tres Fases */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif text-center">
            Las Tres Fases de Ascensión
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fase Intrínseca */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  Fase Intrínseca
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Conocimiento de Sí</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                La primera fase te introduce a la observación consciente de ti mismo. Aprendes a reconocer tus patrones mentales, emocionales y energéticos sin juzgarlos. Esta fase establece la base para toda transformación posterior.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Presencia consciente</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Observación sin juicio</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regulación emocional</span>
                </div>
              </div>
            </div>

            {/* Fase Extrínseca */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  Fase Extrínseca
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Expansión Colectiva</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                Una vez estableces presencia interna, expandes tu consciencia hacia lo colectivo. Aprendes a conectar con la energía de otros seres, a sentir la interconexión y a contribuir desde un lugar de mayor claridad y compasión.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conexión energética</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Empatía expandida</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contribución consciente</span>
                </div>
              </div>
            </div>

            {/* Fase Holística */}
            <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-lg">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  Fase Holística
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Integración Total</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                La fase final integra todo lo aprendido en una visión coherente y unificada. Experimentas la consciencia como un todo integrado donde lo personal y lo colectivo, lo mental y lo emocional, lo material y lo espiritual convergen.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visión holística</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Coherencia interna</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sabiduría integrada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">
            Beneficios de la Práctica
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Presencia Expandida</h3>
                <p className="text-gray-700">
                  Desarrollas la capacidad de estar presente en el momento actual sin ser arrastrado por patrones automáticos o rumiaciones mentales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Lightbulb className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Claridad Mental</h3>
                <p className="text-gray-700">
                  Tu mente se vuelve más clara, enfocada y capaz de tomar decisiones desde un lugar de mayor sabiduría.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regulación Emocional</h3>
                <p className="text-gray-700">
                  Aprendes a observar y regular tus emociones, transformando patrones reactivos en respuestas conscientes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conexión Auténtica</h3>
                <p className="text-gray-700">
                  Tus relaciones se profundizan porque te conectas desde un lugar de mayor autenticidad y presencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bienestar Integral</h3>
                <p className="text-gray-700">
                  Experimentas mayor paz interna, vitalidad y sentido de propósito en tu vida cotidiana.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Lightbulb className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creatividad Expandida</h3>
                <p className="text-gray-700">
                  Tu capacidad creativa se potencia al acceder a estados de consciencia más amplios y menos limitados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
            Cómo Funciona
          </h2>

          <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-8 border border-amber-100">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Introducción y Preparación</h3>
                  <p className="text-gray-700">
                    Aprendes los fundamentos de la Meditación Ascendente, cómo funciona la energía Isiaca y cómo preparar tu cuerpo y mente para la práctica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Práctica Guiada Progresiva</h3>
                  <p className="text-gray-700">
                    Claribel te guía a través de meditaciones progresivas que trabajan cada fase de ascensión. Las sesiones aumentan gradualmente en profundidad y duración.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integración en la Vida Cotidiana</h3>
                  <p className="text-gray-700">
                    Aprendes técnicas para mantener la presencia y claridad que desarrollas en meditación durante tu día a día.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Acompañamiento Continuo</h3>
                  <p className="text-gray-700">
                    Tienes acceso a comunidad, recursos adicionales y sesiones de preguntas para profundizar tu práctica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Disponibles */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">
            Programas Disponibles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 1: Fundamentos
              </h3>
              <p className="text-gray-700 mb-6">
                Introducción a la Meditación Ascendente y la Fase Intrínseca. Ideal para principiantes.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">8 semanas de práctica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Meditaciones guiadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Materiales educativos</span>
                </li>
              </ul>
              <a
                href="https://kajabi.com"
                className="block text-center bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Explorar
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 2: Expansión
              </h3>
              <p className="text-gray-700 mb-6">
                Profundización en la Fase Extrínseca y conexión colectiva. Requiere Nivel 1.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">10 semanas de práctica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Meditaciones avanzadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Círculos de práctica</span>
                </li>
              </ul>
              <a
                href="https://kajabi.com"
                className="block text-center bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Explorar
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 3: Integración
              </h3>
              <p className="text-gray-700 mb-6">
                Fase Holística y maestría en la práctica. Requiere Nivel 2.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">12 semanas de práctica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mentoría personalizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certificación disponible</span>
                </li>
              </ul>
              <a
                href="https://kajabi.com"
                className="block text-center bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Explorar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Comienza tu Camino de Expansión
          </h2>
          <p className="text-amber-100 mb-8 text-lg max-w-2xl mx-auto">
            La Meditación Ascendente es un viaje de transformación progresiva. Cada paso te acerca a mayor claridad, presencia y consciencia.
          </p>
          <a
            href="https://kajabi.com"
            className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Explorar Programas
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
