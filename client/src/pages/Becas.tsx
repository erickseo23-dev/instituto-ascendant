import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Image URLs ───────────────────────────────────────────────────────────────
const IMG_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/becas-hero-a2cJi8z5cmyBvK5b6hW2F6.webp";
const IMG_VISION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/becas-vision-5TAUhJ6F9qzvNiLSqZanuN.webp";
const IMG_IMPACTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/becas-impacto-7VnXnWey3ef4dXWHUoi3j8.webp";
const IMG_CTA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/becas-cta-YPUowKPnXojqinxg8avinS.webp";

// ─── Transparency counters ────────────────────────────────────────────────────
const STATS = [
  { label: "Becas activas", value: 47, suffix: "" },
  { label: "Alumnos beneficiados", value: 312, suffix: "+" },
  { label: "Valor educativo otorgado", value: 1, prefix: "$", suffix: "M USD" },
  { label: "Disponibilidad restante", value: 688, suffix: "k USD" },
];

// ─── Programs eligible for beca ───────────────────────────────────────────────
const PROGRAMS = [
  {
    name: "KS Healing Básico",
    subtitle: "Certificación de Practicante",
    duration: "3 semanas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/beca-ks-healing-basico-bw5oeZRvsYvnu7mt4KpB8g.webp",
    official: "$3,999 MXN",
    beca: "$2,000 MXN",
    student: "$1,999 MXN",
    badge: "Nivel Básico",
    isSpecial: false,
  },
  {
    name: "KS Healing Avanzado",
    subtitle: "Certificación Nivel Avanzado",
    duration: "8 semanas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/beca-ks-healing-avanzado-EJgXNndMpAT5ADmLS4pF6R.webp",
    official: "$7,500 MXN",
    beca: "$2,500 MXN",
    student: "$5,000 MXN",
    badge: "Nivel Avanzado",
    isSpecial: false,
  },
  {
    name: "DART",
    subtitle: "Deep Archetypal Renewal Therapy",
    duration: "8 semanas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/beca-dart-nSTMov3xWYLSPKe9J7q3xy.webp",
    official: "$7,500 MXN",
    beca: "$2,500 MXN",
    student: "$5,000 MXN",
    badge: "Especialización",
    isSpecial: false,
  },
  {
    name: "Master en KS Healing Systems",
    subtitle: "Programa de Maestría Avanzada",
    duration: "12 meses",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/beca-master-ks-healing-9pTdYKR6MFZ6YrPMGTn9kB.webp",
    official: null,
    beca: "$12,000 MXN",
    student: null,
    badge: "Programa Master",
    isSpecial: true,
  },
];

// ─── Principles ───────────────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    icon: "◈",
    title: "Responsabilidad",
    desc: "La beca representa una inversión educativa real que el Instituto realiza en cada alumno.",
  },
  {
    icon: "◇",
    title: "Compromiso",
    desc: "El alumno se compromete a mantener continuidad en su proceso formativo.",
  },
  {
    icon: "◉",
    title: "Aprovechamiento",
    desc: "Los apoyos están destinados a personas con genuino interés en completar su formación.",
  },
  {
    icon: "◈",
    title: "Equidad",
    desc: "Las becas se distribuyen de acuerdo con las convocatorias y disponibilidad existente.",
  },
];

// ─── Eligibility ──────────────────────────────────────────────────────────────
const ELIGIBLE = [
  "Nuevos alumnos que inician su ruta formativa",
  "Alumnos que continúan hacia el siguiente nivel",
  "Alumnos seleccionados en convocatorias especiales",
  "Egresados elegibles para programas de continuidad",
];

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString("es-MX")}</span>;
}

export default function Becas() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${IMG_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-amber-400/60 text-amber-300 text-xs tracking-[0.2em] uppercase px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            Instituto Ascendant · I3C
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
          </div>

          <h1 className="text-white font-serif mb-4" style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.05 }}>
            Programa Becas
          </h1>
          <h2 className="text-amber-400 font-serif mb-6" style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)", lineHeight: 1.05 }}>
            Ascendant®
          </h2>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Formación para la Expansión de la Consciencia
          </p>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Creemos que el desarrollo de la consciencia y la formación espiritual de calidad deben ser accesibles para un mayor número de personas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#solicitar"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold tracking-wider uppercase text-sm px-10 py-4 transition-all duration-300"
            >
              Solicitar mi Beca
            </a>
            <a
              href="#programas"
              className="inline-block border border-white/40 hover:border-white/80 text-white font-medium text-sm px-10 py-4 transition-all duration-300"
            >
              Ver Programas Elegibles
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── COMMITMENT BANNER ────────────────────────────────────────────── */}
      <section className="bg-[#0f1520] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400/70 text-xs tracking-[0.25em] uppercase mb-4">Compromiso Institucional</p>
          <p className="text-white/60 text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Instituto Ascendant ha destinado más de
          </p>
          <div className="text-white mb-4" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", lineHeight: 1, fontFamily: "'EB Garamond', Georgia, serif", fontWeight: 700 }}>
            <span className="text-amber-400">$1,000,000</span>
          </div>
          <p className="text-white/50 text-sm md:text-base mb-2">USD en valor educativo potencial</p>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            para facilitar el acceso a sus programas de formación mediante apoyos educativos distribuidos a lo largo de los próximos años.
          </p>
        </div>
      </section>

      {/* ── TRANSPARENCY STATS ───────────────────────────────────────────── */}
      <section className="bg-[#0a0f1a] py-14 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-white/40 text-xs tracking-[0.2em] uppercase mb-10">Transparencia del Programa</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-amber-400 font-bold mb-1" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontFamily: "'EB Garamond', Georgia, serif" }}>
                  {stat.prefix || ""}
                  <AnimatedNumber target={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-white/40 text-xs tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 text-xs tracking-[0.2em] uppercase mb-4">Nuestra Visión</p>
            <h2 className="font-serif text-[#1a1a2e] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.15 }}>
              La transformación personal genera transformación social.
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6">
              Cada persona que desarrolla una mayor consciencia tiene la capacidad de impactar positivamente a su familia, comunidad y entorno. Por ello, nuestro objetivo no es únicamente impartir formación.
            </p>
            <p className="text-stone-700 font-medium text-base md:text-lg leading-relaxed border-l-2 border-amber-400 pl-5">
              Nuestro objetivo es contribuir activamente a la expansión de la consciencia humana.
            </p>
          </div>
          <div className="relative">
            <img
              src={IMG_VISION}
              alt="Visión Becas Ascendant"
              className="w-full h-80 md:h-[420px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-400/20 -z-10" />
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────────────────── */}
      <section id="programas" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xs tracking-[0.2em] uppercase mb-3">Apoyos Educativos</p>
            <h2 className="font-serif text-[#1a1a2e] mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Programas Elegibles para Beca
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
              Un alumno elegible podrá recibir hasta <strong className="text-stone-700">$19,000 MXN</strong> en apoyos educativos acumulados durante su ruta formativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.name}
                className="overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.6) 0%, transparent 55%)" }} />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.18em] uppercase bg-white/90 text-stone-700 px-3 py-1 font-semibold">
                    {prog.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-amber-600 mb-1">{prog.subtitle}</p>
                  <h3 className="font-serif text-[#1a1a2e] text-xl md:text-2xl mb-1">{prog.name}</h3>
                  <p className="text-xs text-stone-400 mb-5">⏱ Duración: <span className="font-medium text-stone-500">{prog.duration}</span></p>

                  {prog.isSpecial ? (
                    /* Master: no price shown, contact CTA */
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between items-center py-2 border-b border-stone-100">
                        <span className="text-stone-600 text-sm font-medium">Apoyo del Instituto</span>
                        <span className="text-amber-600 font-semibold">{prog.beca}</span>
                      </div>
                      <div className="py-3">
                        <p className="text-xs text-stone-400 italic">
                          El apoyo se distribuye progresivamente durante los 12 meses del programa.
                        </p>
                      </div>
                      <div
                        className="mt-2 p-3 text-center text-xs leading-relaxed"
                        style={{ background: "#fdf8f0", border: "1px solid #e5d8c0", color: "#6b5a3e" }}
                      >
                        Exclusivo para alumnos de nivel Avanzado.
                        <br />
                        <strong>Contáctanos para más información.</strong>
                      </div>
                    </div>
                  ) : (
                    /* Regular programs: full price breakdown */
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between items-center py-2 border-b border-stone-100">
                        <span className="text-stone-400 text-sm">Precio regular</span>
                        <span className="text-stone-400 text-sm line-through">{prog.official}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-stone-100">
                        <span className="text-stone-600 text-sm font-medium">Apoyo del Instituto</span>
                        <span className="text-amber-600 font-semibold">−{prog.beca}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-[#1a1a2e] font-bold">Tu inversión</span>
                        <span className="text-[#1a1a2e] font-extrabold text-xl">{prog.student}</span>
                      </div>
                    </div>
                  )}

                  {prog.isSpecial ? (
                    <a
                      href="/contacto"
                      className="block text-center text-sm font-semibold tracking-widest uppercase py-3 px-6 transition-all duration-200"
                      style={{ background: "#1a1a2e", color: "#f5e6c8" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#2d2d4e"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a2e"; }}
                    >
                      Contactar al Equipo →
                    </a>
                  ) : (
                    <a
                      href="/becas/solicitud"
                      className="block text-center text-sm font-semibold tracking-widest uppercase py-3 px-6 transition-all duration-200"
                      style={{ background: "#b8860b", color: "#ffffff" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#9a7009"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8860b"; }}
                    >
                      Solicitar Beca →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={IMG_IMPACTO}
              alt="Impacto educativo"
              className="w-full h-72 md:h-[400px] object-cover"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400/20 -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-amber-600 text-xs tracking-[0.2em] uppercase mb-4">Elegibilidad</p>
            <h2 className="font-serif text-[#1a1a2e] mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
              ¿Quién puede solicitar una Beca Ascendant?
            </h2>
            <ul className="space-y-4 mb-8">
              {ELIGIBLE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1 text-lg leading-none">◆</span>
                  <span className="text-stone-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-stone-500 text-sm leading-relaxed border-l-2 border-stone-300 pl-4">
              La aprobación estará sujeta a disponibilidad y cumplimiento de los requisitos vigentes al momento de la solicitud.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0f1520]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400/70 text-xs tracking-[0.2em] uppercase mb-3">Fundamentos</p>
            <h2 className="font-serif text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Principios del Programa
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border border-white/10 p-8 hover:border-amber-400/30 transition-colors duration-300">
                <div className="text-amber-400 text-2xl mb-4">{p.icon}</div>
                <h3 className="text-white font-serif text-lg mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTINUITY ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-amber-50 border-y border-amber-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-700 text-xs tracking-[0.2em] uppercase mb-4">Continuidad de la Beca</p>
          <h2 className="font-serif text-[#1a1a2e] mb-6" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Las becas acompañan trayectorias continuas
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            La continuidad de los beneficios educativos depende de la permanencia activa en el programa, el cumplimiento de los pagos acordados y el cumplimiento de los requisitos académicos y administrativos aplicables.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            La interrupción prolongada del proceso podrá implicar la pérdida de elegibilidad para futuros apoyos asociados a la misma convocatoria.
          </p>
        </div>
      </section>

      {/* ── CTA / SOLICITAR ──────────────────────────────────────────────── */}
      <section id="solicitar" className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IMG_CTA})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1520]/90 via-[#0f1520]/70 to-[#0f1520]/50" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-amber-400/80 text-xs tracking-[0.2em] uppercase mb-4">Siguiente Paso</p>
          <h2 className="font-serif text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
            Solicita tu Beca Ascendant®
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
            Completa el formulario de solicitud. Nuestro equipo revisará tu caso y te contactará para guiarte en los siguientes pasos de tu ruta formativa.
          </p>
          <Link
            href="/becas/solicitud"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold tracking-wider uppercase text-sm px-12 py-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Solicitar Beca Ahora
          </Link>
          <p className="mt-6 text-white/40 text-xs">
            La disponibilidad es limitada. Las solicitudes se evalúan en orden de recepción.
          </p>
        </div>
      </section>

      {/* ── DECLARATION ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
          <blockquote className="font-serif text-[#1a1a2e] italic leading-relaxed mb-8" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
            "El Programa Becas Ascendant representa nuestro compromiso con una visión de abundancia, servicio y expansión de la consciencia. Creemos que el conocimiento transforma vidas. Y creemos que, cuando una persona crece, toda su realidad tiene la posibilidad de crecer junto con ella."
          </blockquote>
          <p className="text-stone-500 text-sm tracking-widest uppercase">Claribel Puga · YOHEV</p>
          <p className="text-stone-400 text-xs mt-1">Instituto Ascendant</p>
          <div className="w-12 h-px bg-amber-400 mx-auto mt-8" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
