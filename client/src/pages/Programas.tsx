import { useEffect } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { Zap, Heart, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';

export default function Programas() {
  useEffect(() => {
    setSEOMetadata({
      title: 'Programas | Instituto Ascendant',
      description: 'Explora todos nuestros programas de transformación personal: Meditación Ascendente, KS Healing, DART y Genética Sagrada.',
      keywords: ['programas', 'cursos', 'transformación', 'consciencia', 'meditación'],
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      id: 'meditacion-ascendente',
      title: 'Meditación Ascendente®',
      subtitle: 'Expansión de Consciencia',
      description: 'Método progresivo de expansión de consciencia en tres fases: intrínseca, extrínseca y holística. Desarrollado por Claribel Puga.',
      icon: Zap,
      color: 'amber',
      link: '/meditacion-ascendente',
      internal: true,
      benefits: ['Presencia expandida', 'Claridad mental', 'Regulación emocional'],
    },
    {
      id: 'ks-healing',
      title: 'KS Healing Systems®',
      subtitle: 'Sanación Energética Crística',
      description: 'Sistema de sanación energética basado en la consciencia crística. Creado por YOHEV para transformación profunda y reprogramación energética.',
      icon: Heart,
      color: 'rose',
      link: 'https://kshealing.com/ks-healing',
      internal: false,
      benefits: ['Sanación energética', 'Consciencia crística', 'Transformación profunda'],
    },
    {
      id: 'dart',
      title: 'DART',
      subtitle: 'Deep Archetypal Renewal Therapy',
      description: 'Método de transformación profunda de patrones y arquetipos. Trabaja a nivel de raíces para liberar patrones limitantes heredados.',
      icon: Lightbulb,
      color: 'purple',
      link: 'https://kshealing.com/dart',
      internal: false,
      benefits: ['Transformación de arquetipos', 'Liberación de patrones', 'Renovación profunda'],
    },
    {
      id: 'genetica-sagrada',
      title: 'Genética Sagrada',
      subtitle: 'Reprogramación Energética',
      description: 'Programa de reprogramación energética que trabaja con la información genética y hereditaria para transformar patrones a nivel celular.',
      icon: Sparkles,
      color: 'indigo',
      link: 'https://kshealing.com/genetica-sagrada',
      internal: false,
      benefits: ['Reprogramación genética', 'Transformación celular', 'Liberación hereditaria'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
        <Breadcrumbs items={[{ label: 'Programas' }]} />
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Nuestros Programas
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Un ecosistema integrado de programas de transformación personal y espiritual. Cada programa representa un paso en el camino hacia la expansión de consciencia.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="prose prose-lg max-w-4xl text-gray-700 space-y-6">
            <p>
              El Instituto Ascendant ofrece un conjunto coherente de programas diseñados para trabajar de forma progresiva. No son ofertas aisladas, sino pasos en un camino de transformación auténtica donde cada nivel prepara el siguiente.
            </p>

            <p>
              Nuestros programas se dividen en dos áreas principales:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-6 border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Meditación Ascendente</h3>
                <p className="text-gray-700">
                  Desarrollado por Claribel Puga. Método de expansión de consciencia en tres fases progresivas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-white rounded-lg p-6 border border-rose-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sistemas KS Healing</h3>
                <p className="text-gray-700">
                  Creados por YOHEV. Programas de sanación energética y transformación profunda basados en consciencia crística.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">
            Explora Todos los Programas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              const bgClass = {
                amber: 'from-amber-50 to-white border-amber-100',
                rose: 'from-rose-50 to-white border-rose-100',
                purple: 'from-purple-50 to-white border-purple-100',
                indigo: 'from-indigo-50 to-white border-indigo-100',
              }[program.color];

              const iconColorClass = {
                amber: 'text-amber-700',
                rose: 'text-rose-700',
                purple: 'text-purple-700',
                indigo: 'text-indigo-700',
              }[program.color];

              const buttonClass = {
                amber: 'bg-amber-700 hover:bg-amber-800',
                rose: 'bg-rose-700 hover:bg-rose-800',
                purple: 'bg-purple-700 hover:bg-purple-800',
                indigo: 'bg-indigo-700 hover:bg-indigo-800',
              }[program.color];

              return (
                <a
                  key={program.id}
                  href={program.link}
                  target={program.internal ? '_self' : '_blank'}
                  rel={program.internal ? '' : 'noopener noreferrer'}
                  className="bg-gradient-to-br rounded-lg p-8 border shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                >
                  <div className={`bg-gradient-to-br ${bgClass} rounded-lg p-8 h-full border`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Icon className={`w-10 h-10 ${iconColorClass} mb-4`} />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif">
                          {program.title}
                        </h3>
                        <p className={`text-sm font-semibold ${iconColorClass}`}>
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-gray-600 mb-3">Beneficios:</p>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`w-2 h-2 rounded-full ${iconColorClass} mt-2 flex-shrink-0`}></span>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${buttonClass} text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors`}>
                      {program.internal ? 'Explorar Programa' : 'Ver en KS Healing'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Niveles y Progresión */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">
            Niveles y Progresión
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 1: Fundamentos
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Meditación Ascendente Nivel 1</strong> - Introducción a la presencia consciente y observación de sí mismo. Ideal para principiantes que desean comenzar un camino de transformación.
              </p>
              <p className="text-gray-600 text-sm">
                Duración: 8 semanas | Facilitador: Claribel Puga
              </p>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-white rounded-lg p-8 border border-rose-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 2: Profundización
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Meditación Ascendente Nivel 2</strong> + <strong>Introducción a KS Healing</strong> - Expansión hacia la consciencia colectiva y primeros pasos en sanación energética.
              </p>
              <p className="text-gray-600 text-sm">
                Duración: 10 semanas | Facilitadores: Claribel Puga, YOHEV
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 3: Especialización
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Meditación Ascendente Nivel 3</strong> + <strong>KS Healing Avanzado, DART o Genética Sagrada</strong> - Integración holística y especialización en un área específica.
              </p>
              <p className="text-gray-600 text-sm">
                Duración: 12+ semanas | Facilitadores: Claribel Puga, YOHEV
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nivel 4: Maestría
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Certificación de Maestro Facilitador</strong> - Formación completa para facilitar programas y acompañar a otros en su transformación.
              </p>
              <p className="text-gray-600 text-sm">
                Duración: 6+ meses | Facilitadores: Claribel Puga, YOHEV
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Elegir */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
            ¿Cómo Elegir tu Programa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soy Principiante</h3>
              <p className="text-gray-700 mb-4">
                Si nunca has meditado o practicado transformación personal, comienza con <strong>Meditación Ascendente Nivel 1</strong>. Establece una base sólida de presencia y claridad.
              </p>
              <a href="/meditacion-ascendente" className="text-amber-700 font-semibold hover:text-amber-800">
                Explorar →
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tengo Experiencia</h3>
              <p className="text-gray-700 mb-4">
                Si ya practicas meditación o tienes experiencia en transformación personal, puedes comenzar con <strong>Nivel 2</strong> o explorar directamente los programas de <strong>KS Healing</strong>.
              </p>
              <a href="https://kshealing.com/ks-healing" className="text-rose-700 font-semibold hover:text-rose-800">
                Explorar KS Healing →
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Busco Especialización</h3>
              <p className="text-gray-700 mb-4">
                Si deseas profundizar en un área específica (DART, Genética Sagrada) o convertirte en facilitador, explora nuestros programas de <strong>Nivel 3 y 4</strong>.
              </p>
              <a href="https://kshealing.com/certificaciones" className="text-purple-700 font-semibold hover:text-purple-800">
                Ver Certificaciones →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Elige el programa que resuene con tu momento actual y comienza tu transformación.
          </p>
          <a
            href="/meditacion-ascendente"
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
