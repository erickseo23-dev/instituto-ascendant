// TodoLoBuenoMasterclass.tsx
// Landing page post-masterclass "Todo Lo Bueno Me Sucede"
// Estética: pastel cálido, nude, champagne gold, blush rose — magnético y elegante
// Flujo: Video grabado → CTA → Modal con 2 opciones de pago

import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, Play } from "lucide-react";

// ─── CONSTANTES ────────────────────────────────────────────────────────────────
// Actualizar con el ID del video de YouTube cuando esté disponible
const YOUTUBE_VIDEO_ID = "Dcr-yaEec5E";

const INSCRIPCION_URL_UNICO = "https://cursos.institutoascendant.com/offers/rEFLokCs/checkout";
const INSCRIPCION_URL_2PAGOS = "https://cursos.institutoascendant.com/offers/Md6Ck2VK/checkout";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/CvcmnySNBpqPmrOD.png";
const CLARIBEL_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/vFIHYKmzGDItaaRy.png";

const beneficios = [
  "Mayor claridad mental y emocional",
  "Herramientas prácticas del Método Ascendant",
  "Meditaciones guiadas con Energía KS®",
  "9 semanas de acompañamiento estructurado",
  "Material descargable e imprimible",
  "Acceso de por vida a las grabaciones",
];

// ─── MODAL DE PRECIOS ──────────────────────────────────────────────────────────
function PricingModal({ onClose }: { onClose: () => void }) {
  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(45,30,20,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "linear-gradient(145deg, #fff9f4, #fdf0e8)" }}
      >
        {/* Cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-black/10"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-[#8B6A50]" />
        </button>

        {/* Encabezado */}
        <div className="px-8 pt-8 pb-6 text-center border-b border-[#e8d5c4]">
          <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Elige tu opción
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Todo Lo Bueno Me Sucede
          </h2>
          <p className="text-[#8B6A50] text-sm">
            Programa de 9 semanas · Método Ascendant® · Con Claribel Puga
          </p>
        </div>

        {/* Tarjetas de precio */}
        <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-5">
          {/* Opción 1: Pago único */}
          <div
            className="rounded-xl p-6 flex flex-col gap-4 border-2 transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #fffaf5, #fff4ea)",
              borderColor: "#C4963C",
            }}
          >
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3"
                style={{ background: "#C4963C20", color: "#C4963C" }}
              >
                Mejor valor
              </span>
              <h3
                className="text-lg font-semibold text-[#3D2B1F] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Pago Único
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-[#3D2B1F]">$3,999</span>
                <span className="text-[#8B6A50] text-sm">MXN</span>
              </div>
              <p className="text-[#8B6A50] text-xs">Un solo pago · Acceso inmediato</p>
            </div>
            <ul className="space-y-1.5">
              {beneficios.slice(0, 4).map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs text-[#5A3E2B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C4963C] flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={INSCRIPCION_URL_UNICO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:shadow-md"
              style={{ background: "linear-gradient(135deg, #C4963C, #B08530)" }}
            >
              Inscribirme ahora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Opción 2: 2 pagos */}
          <div
            className="rounded-xl p-6 flex flex-col gap-4 border-2 transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #fdf8f5, #f9f0ea)",
              borderColor: "#d4b896",
            }}
          >
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3"
                style={{ background: "#d4b89620", color: "#8B6A50" }}
              >
                Facilidad de pago
              </span>
              <h3
                className="text-lg font-semibold text-[#3D2B1F] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                2 Pagos
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-[#3D2B1F]">$2,000</span>
                <span className="text-[#8B6A50] text-sm">MXN × 2</span>
              </div>
              <p className="text-[#8B6A50] text-xs">Dos pagos mensuales · Acceso inmediato</p>
            </div>
            <ul className="space-y-1.5">
              {beneficios.slice(0, 4).map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs text-[#5A3E2B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#8B6A50] flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={INSCRIPCION_URL_2PAGOS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md"
              style={{
                background: "transparent",
                border: "2px solid #C4963C",
                color: "#C4963C",
              }}
            >
              Elegir 2 pagos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Nota al pie */}
        <p className="text-center text-[#8B6A50] text-xs pb-6 px-8">
          Todos los precios en pesos mexicanos (MXN) · Pago seguro a través de Kajabi
        </p>
      </div>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ──────────────────────────────────────────────────────────
export default function TodoLoBuenoMasterclass() {
  const [showModal, setShowModal] = useState(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #fff9f4 0%, #fdf4ec 50%, #faf0e8 100%)" }}
    >
      {/* ── HEADER MÍNIMO ── */}
      <header className="py-5 px-6 flex items-center justify-center border-b border-[#e8d5c4]">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/logo-ascendant-icon-transparent-EqKRuPxMVFPNhgKJqbFkQE.png"
            alt="Instituto Ascendant"
            className="h-8 w-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <span
            className="text-[#3D2B1F] font-semibold text-sm tracking-wide group-hover:text-[#C4963C] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Instituto Ascendant
          </span>
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Masterclass Grabada
        </p>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3D2B1F] leading-tight mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Todo Lo Bueno Me Sucede
        </h1>
        <p className="text-[#8B6A50] text-base sm:text-lg leading-relaxed mb-2">
          Mira la masterclass completa con Claribel Puga y YOHEV, y descubre cómo el Método Ascendant® puede transformar los patrones que bloquean lo bueno en tu vida.
        </p>
          <p className="text-[#C4963C] text-sm font-medium">
            Con Claribel Puga y YOHEV · Instituto Ascendant
          </p>
      </section>

      {/* ── VIDEO ── */}
      <section className="px-4 pb-12 max-w-4xl mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{
            aspectRatio: "16/9",
            background: "linear-gradient(135deg, #f5e6d3, #ede0d4)",
            border: "1px solid #e0cbb8",
          }}
        >
          {YOUTUBE_VIDEO_ID ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Masterclass Todo Lo Bueno Me Sucede"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            /* Placeholder mientras el video no está disponible */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #C4963C, #B08530)" }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="text-center px-6">
                <p
                  className="text-[#3D2B1F] text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Video en preparación
                </p>
                <p className="text-[#8B6A50] text-sm">
                  La grabación de la masterclass estará disponible muy pronto.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA PRINCIPAL ── */}
      <section className="px-4 pb-16 text-center max-w-2xl mx-auto">
        <div
          className="rounded-2xl px-8 py-10 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #fff4ea, #fdeee0)",
            border: "1px solid #e8d5c4",
          }}
        >
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            ¿Lista para continuar tu transformación?
          </h2>
          <p className="text-[#8B6A50] text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Si lo que viste en la masterclass resonó contigo, el programa completo de 9 semanas te da las herramientas, la estructura y el acompañamiento para que lo bueno deje de ser una excepción y se convierta en tu realidad.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-lg"
            style={{ background: "linear-gradient(135deg, #C4963C, #B08530)" }}
          >
            Quiero inscribirme <ArrowRight className="w-5 h-5" />
          </button>

          {/* Fecha de inicio */}
          <div
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "#C4963C18", color: "#C4963C", border: "1px solid #C4963C40" }}
          >
            <span>📅</span>
            Inicia Sábado 25 de Julio · 1:00 pm CDMX
          </div>

          {/* Resumen del programa */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-left">
            {[
              "9 semanas de transformación con el Método Ascendant®",
              "Meditaciones guiadas con Energía Isiáca + Energía KS®",
              "10 Sesiones en vivo",
              "Ejercicios con Energía KS®",
              "Lecciones semanales grabadas + material descargable",
              "Acceso al grupo de WhatsApp exclusivo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#C4963C] mt-0.5 flex-shrink-0" style={{ fontSize: "10px" }}>✦</span>
                <span className="text-[#5A3E2B] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[#8B6A50] text-xs font-medium">Con Claribel Puga y YOHEV</p>

          <p className="mt-6 text-[#8B6A50] text-xs">
            ¿Tienes preguntas?{" "}
            <a
              href="/todo-lo-bueno-me-sucede"
              className="underline underline-offset-2 hover:text-[#C4963C] transition-colors"
            >
              Ver todos los detalles del programa
            </a>
          </p>
        </div>
      </section>

      {/* ── CLARIBEL MINI BIO ── */}
      <section
        className="px-4 py-12 max-w-3xl mx-auto"
        style={{ borderTop: "1px solid #e8d5c4" }}
      >
        <p
          className="text-center text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-8"
        >
          Tus facilitadores
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-8">
          {/* Claribel */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left flex-1">
            <div
              className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md mx-auto sm:mx-0"
              style={{ border: "3px solid #e8d5c4" }}
            >
              <img
                src={CLARIBEL_IMG}
                alt="Claribel Puga"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p
                className="text-lg font-semibold text-[#3D2B1F] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Claribel Puga
              </p>
              <p className="text-[#C4963C] text-xs font-semibold tracking-wider uppercase mb-2">
                Co-fundadora · Instituto Ascendant
              </p>
              <p className="text-[#8B6A50] text-sm leading-relaxed">
                Facilitadora del Método Ascendant® y co-creadora del ecosistema de transformación del Instituto Ascendant. Acompaña a personas en procesos de sanación, expansión de consciencia y reprogramación de patrones internos.
              </p>
            </div>
          </div>

          {/* Divisor vertical en desktop */}
          <div className="hidden sm:block w-px self-stretch" style={{ background: "#e8d5c4" }} />

          {/* YOHEV */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left flex-1">
            <div
              className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md mx-auto sm:mx-0"
              style={{ border: "3px solid #e8d5c4" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/yohev_v3_74292756.png"
                alt="YOHEV"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p
                className="text-lg font-semibold text-[#3D2B1F] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                YOHEV
              </p>
              <p className="text-[#C4963C] text-xs font-semibold tracking-wider uppercase mb-2">
                Co-fundador · Instituto Ascendant
              </p>
              <p className="text-[#8B6A50] text-sm leading-relaxed">
                Creador de la Energía KS® y co-fundador del Instituto Ascendant. Acompaña procesos de transformación profunda integrando consciencia, energía y herramientas del Método Ascendant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER MÍNIMO ── */}
      <footer className="py-6 text-center border-t border-[#e8d5c4]">
        <p className="text-[#8B6A50] text-xs">
          © {new Date().getFullYear()} Instituto Ascendant · Todos los derechos reservados
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="/privacidad" className="text-[#8B6A50] text-xs hover:text-[#C4963C] transition-colors">
            Privacidad
          </a>
          <span className="text-[#e8d5c4]">·</span>
          <a href="/terminos" className="text-[#8B6A50] text-xs hover:text-[#C4963C] transition-colors">
            Términos
          </a>
          <span className="text-[#e8d5c4]">·</span>
          <a href="/contacto" className="text-[#8B6A50] text-xs hover:text-[#C4963C] transition-colors">
            Contacto
          </a>
        </div>
      </footer>

      {/* ── MODAL DE PRECIOS ── */}
      {showModal && <PricingModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
