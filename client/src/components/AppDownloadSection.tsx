import React from 'react';
import { Sparkles, Heart, BookOpen, Users, Zap } from 'lucide-react';

export const AppDownloadSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-[#C4963C] flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight mb-5">
            Lleva tu transformación{' '}
            <em className="text-[#C4963C] not-italic">en tu bolsillo</em>
          </h2>
          <p className="text-[#2D2D2D]/70 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Descarga la app oficial Ascendente y accede a meditaciones exclusivas, terapias guiadas, cursos y una comunidad global de transformación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: App Features */}
          <div>
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#C4963C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Meditaciones Exclusivas</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">Acceso a meditaciones guiadas por Claribel Puga y YOHEV, diseñadas para tu transformación diaria.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#C4963C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Terapias Guiadas</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">Sesiones de sanación energética, DART y técnicas de transformación personal en formato de audio.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#C4963C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Cursos Completos</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">Acceso a todos nuestros programas: Meditación Ascendente, KS Healing, Genética Sagrada y más.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#C4963C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Comunidad Global</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">Conecta con miles de personas en tu camino de transformación y crecimiento de consciencia.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#C4963C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Notificaciones Personalizadas</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">Recibe recordatorios, nuevos contenidos y ofertas exclusivas directamente en tu dispositivo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: App Download Card */}
          <div>
            <div className="bg-gradient-to-br from-[#C4963C]/5 to-[#C4963C]/10 rounded-2xl p-8 lg:p-10 border border-[#C4963C]/20">
              {/* App Icon */}
              <div className="mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#C4963C] to-[#B08530] flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2D2D2D] text-center mb-2">Ascendente</h3>
                <p className="text-[#2D2D2D]/60 text-center text-sm">La app oficial del Instituto Ascendant</p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3 mb-8">
                {/* App Store */}
                <a
                  href="https://apps.apple.com/app/ascendente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#2D2D2D] text-white rounded-lg hover:bg-[#1A1A1A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 13.5c-.91 0-1.64.46-2.09 1.35h.03c.42-.88 1.04-1.35 2.06-1.35 1.31 0 2.16 1.16 2.16 3.02 0 1.89-.84 3.02-2.16 3.02-1.02 0-1.64-.47-2.06-1.35h-.03v1.2h-1.48V8.01h1.48v5.26c.45.89 1.18 1.35 2.09 1.35 1.35 0 2.26-1.13 2.26-3.02 0-1.89-.91-3.09-2.26-3.09zm.25 5.27c.84 0 1.48-.73 1.48-2.25s-.64-2.25-1.48-2.25c-.87 0-1.48.75-1.48 2.25s.61 2.25 1.48 2.25zM8.54 12.84c1.37 0 2.26 1.13 2.26 3.02 0 1.89-.89 3.02-2.26 3.02-1.37 0-2.26-1.13-2.26-3.02 0-1.89.89-3.02 2.26-3.02zm0 5.27c.87 0 1.48-.73 1.48-2.25s-.61-2.25-1.48-2.25c-.84 0-1.48.73-1.48 2.25s.64 2.25 1.48 2.25zM4.99 12.84c.45 0 .87.1 1.2.29l-.38 1.15c-.25-.12-.56-.18-.82-.18-.87 0-1.48.73-1.48 2.25s.61 2.25 1.48 2.25c.26 0 .57-.06.82-.18l.38 1.15c-.33.19-.75.29-1.2.29-1.37 0-2.26-1.13-2.26-3.02 0-1.89.89-3.02 2.26-3.02z" />
                  </svg>
                  <div>
                    <div className="text-xs text-white/70">Descargar en</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.institutoascendant.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#2D2D2D] text-white rounded-lg hover:bg-[#1A1A1A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a1.5 1.5 0 0 1-2.683-1.06V2.874c0-1.185 1.454-1.894 2.683-1.06zm16.331 9.186L7.098 2.221v19.558l12.842-8.779z" />
                  </svg>
                  <div>
                    <div className="text-xs text-white/70">Descargar en</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Free Trial Banner */}
              <div className="bg-white/50 rounded-lg p-4 text-center">
                <p className="text-[#2D2D2D]/70 text-sm">
                  <strong>Primeros 7 días gratis</strong>
                  <br />
                  Acceso completo a todo el contenido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
