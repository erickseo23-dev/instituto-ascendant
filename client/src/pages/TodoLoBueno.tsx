// Landing Page: Todo Lo Bueno Me Sucede
// Programa de 9 semanas basado en el Método Ascendant® de Claribel Puga
// Estética: pastel cálido, nude, champagne gold, blush rose — magnético y elegante
// Fuente: Cormorant Garamond (display) + sistema sans-serif (cuerpo)

import { useEffect, useRef } from "react";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/CvcmnySNBpqPmrOD.png";
const CLARIBEL_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/pOGKluvZcxoKNLwn.png";
const MODULES_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/rZknqTvciqGNrHGk.png";

// Link de inscripción — actualizar cuando esté disponible en Kajabi
const INSCRIPCION_URL_UNICO = "https://cursos.institutoascendant.com/offers/rEFLokCs/checkout";
const INSCRIPCION_URL_2PAGOS = "https://cursos.institutoascendant.com/offers/Md6Ck2VK/checkout";

const logros = [
  "Mayor claridad mental",
  "Más confianza en ti mismo",
  "Mejor gestión emocional",
  "Mayor sensación de bienestar",
  "Reducción del estrés y la ansiedad",
  "Más presencia y consciencia en tu vida diaria",
  "Una relación más sana con tus pensamientos",
  "Nuevas perspectivas frente a los desafíos",
  "Herramientas prácticas para transformar hábitos internos",
  "Una forma más consciente de interactuar con tu realidad",
];

const incluye = [
  {
    icon: "🧘",
    titulo: "Meditación Ascendente®",
    desc: "Meditaciones guiadas por Claribel Puga para desarrollar presencia, claridad y expansión de consciencia.",
  },
  {
    icon: "✨",
    titulo: "Energía KS®",
    desc: "Prácticas energéticas diseñadas para favorecer estados de equilibrio, coherencia y bienestar interior.",
  },
  {
    icon: "🎓",
    titulo: "Lecciones Semanales",
    desc: "Contenido grabado diseñado para acompañar tu proceso de transformación durante las 9 semanas.",
  },
  {
    icon: "📖",
    titulo: "Manuales de Trabajo",
    desc: "Material descargable para profundizar e integrar cada tema.",
  },
  {
    icon: "🌿",
    titulo: "Ejercicios KS",
    desc: "Prácticas específicas para aplicar lo aprendido durante la semana.",
  },
  {
    icon: "🖨️",
    titulo: "Material Imprimible",
    desc: "Herramientas prácticas para tu proceso personal.",
  },
  {
    icon: "🎥",
    titulo: "10 Clases en Vivo",
    desc: "Sesiones en vivo para acompañamiento, integración y resolución de dudas.",
  },
  {
    icon: "💬",
    titulo: "Comunidad Privada",
    desc: "Grupo de WhatsApp para apoyo, seguimiento y crecimiento conjunto.",
  },
];

const calendario = [
  { fecha: "22 de junio, 2026", evento: "Inscripciones abiertas" },
  { fecha: "24 de junio, 2026", evento: "Acceso al grupo privado" },
  { fecha: "26 de junio, 2026", evento: "Liberación del Módulo 1" },
  { fecha: "27 de junio, 2026 · 12:00 hrs CDMX", evento: "Sesión de Apertura y Bienvenida con Claribel Puga" },
  { fecha: "Todos los sábados · 12:00 hrs CDMX", evento: "Sesiones de Acompañamiento" },
  { fecha: "29 de agosto, 2026", evento: "Cierre del Programa" },
];

const sesiones = [
  "Bienvenida y Apertura",
  "Recordar mi esencia",
  "Alinear Cuerpo, mente y alma",
  "Coherencia Divina",
  "Mi alma me guía",
  "El Consejo de la co-creación",
  "Define tus deseos",
  "De obstáculos a oportunidades",
  "Respaldo perpetuo",
  "Conectar con el gozo y la diversión",
];

export default function TodoLoBueno() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans" style={{ background: "#fdfaf7", color: "#2d2420" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fef3ec 0%, #fde8e0 40%, #f8e4d8 100%)",
        }}
      >
        {/* Imagen hero derecha */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Overlay gradiente para legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(254,243,236,0.95) 0%, rgba(254,243,236,0.75) 55%, rgba(254,243,236,0.2) 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 py-24 max-w-6xl">
          <div className="max-w-xl">
            {/* Badge */}
            <div
              className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(201,155,100,0.15)",
                color: "#a0622a",
                border: "1px solid rgba(201,155,100,0.35)",
              }}
            >
              Método Ascendant® · 9 Semanas
            </div>

            {/* Título */}
            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 700,
                color: "#2d2420",
                lineHeight: 1.1,
              }}
            >
              Todo Lo Bueno<br />
              <span style={{ color: "#b5713a" }}>Me Sucede</span>
            </h1>

            {/* Subtítulo */}
            <p
              className="mb-4 text-lg leading-relaxed"
              style={{ color: "#5a3e35", maxWidth: "480px" }}
            >
              Transforma tu interior.<br />
              <strong>Transforma tu realidad.</strong>
            </p>
            <p className="mb-10 leading-relaxed" style={{ color: "#7a5a4e", maxWidth: "460px" }}>
              Un programa de 9 semanas basado en el Método Ascendant® de Claribel Puga, diseñado para ayudarte a cambiar la forma en que interactúas con tu realidad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#inversion"
                className="px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #c9874a, #a0622a)",
                  letterSpacing: "0.05em",
                }}
              >
                QUIERO INSCRIBIRME
              </a>
              <a
                href="#incluye"
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(201,155,100,0.12)",
                  color: "#a0622a",
                  border: "1.5px solid rgba(201,155,100,0.5)",
                }}
              >
                VER TODO LO QUE INCLUYE
              </a>
            </div>
          </div>
        </div>

        {/* Imagen hero visible en desktop */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
          <img
            src={HERO_IMG}
            alt="Todo Lo Bueno Me Sucede"
            className="h-full w-full object-cover object-center"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 30%)" }}
          />
        </div>
      </section>

      {/* ── ¿QUÉ ES? ─────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#fff9f5" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(201,155,100,0.12)", color: "#a0622a" }}
          >
            El Programa
          </div>
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#2d2420",
            }}
          >
            ¿Qué es Todo Lo Bueno Me Sucede?
          </h2>
          <div className="space-y-5 text-left max-w-3xl mx-auto" style={{ color: "#5a3e35", lineHeight: 1.85 }}>
            <p>
              La forma en que experimentas tu vida no depende únicamente de las circunstancias externas. Depende también de cómo interpretas, procesas y respondes a cada experiencia.
            </p>
            <p>
              Muchas personas viven atrapadas en patrones inconscientes de estrés, autosabotaje, preocupación, miedo, carencia o desconexión emocional. Con el tiempo, esos patrones terminan convirtiéndose en la realidad que experimentan todos los días.
            </p>
            <p>
              <strong style={{ color: "#2d2420" }}>Todo Lo Bueno Me Sucede</strong> es un proceso guiado de transformación interior diseñado para ayudarte a desarrollar una nueva forma de relacionarte contigo mismo, con tus emociones y con tu realidad.
            </p>
            <p>
              A través de herramientas prácticas y experiencias guiadas, comenzarás a construir una base interna más sólida desde la cual tomar mejores decisiones y vivir de manera más alineada con tu bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOGROS ───────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{
          backgroundImage: `url(${MODULES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.7)", color: "#a0622a" }}
            >
              Resultados del Proceso
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              ¿Qué podrás desarrollar?
            </h2>
            <p className="mt-4" style={{ color: "#5a3e35" }}>
              Durante estas 9 semanas de proceso guiado podrás desarrollar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {logros.map((logro, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,155,100,0.2)",
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ background: "linear-gradient(135deg, #c9874a, #a0622a)" }}
                >
                  ✓
                </span>
                <span style={{ color: "#3d2820", fontWeight: 500 }}>{logro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────────────── */}
      <section id="incluye" className="py-24" style={{ background: "#fff9f5" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(201,155,100,0.12)", color: "#a0622a" }}
            >
              Contenido
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              ¿Qué incluye el programa?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {incluye.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,155,100,0.18)",
                  boxShadow: "0 2px 16px rgba(160,98,42,0.06)",
                }}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.15rem",
                    color: "#2d2420",
                  }}
                >
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5a4e" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDARIO ───────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#fef3ec" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(201,155,100,0.15)", color: "#a0622a" }}
            >
              Fechas Importantes
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              Calendario del Programa
            </h2>
          </div>

          <div className="relative">
            {/* Línea vertical */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #c9874a, rgba(201,135,74,0.1))" }}
            />

            <div className="space-y-6 pl-16">
              {calendario.map((item, i) => (
                <div key={i} className="relative">
                  {/* Punto */}
                  <div
                    className="absolute -left-10 top-1.5 w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: "#c9874a", boxShadow: "0 0 0 3px rgba(201,135,74,0.2)" }}
                  />
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(201,155,100,0.2)",
                      boxShadow: "0 2px 12px rgba(160,98,42,0.06)",
                    }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: "#a0622a", letterSpacing: "0.05em" }}>
                      {item.fecha}
                    </p>
                    <p className="font-medium" style={{ color: "#2d2420" }}>{item.evento}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 SESIONES EN VIVO ───────────────────────────────── */}
      <section className="py-24" style={{ background: "#fff9f5" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(201,155,100,0.12)", color: "#a0622a" }}
            >
              Sesiones en Vivo
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              Las 10 Sesiones en Vivo
            </h2>
            <p className="mt-4" style={{ color: "#7a5a4e" }}>
              Todos los sábados a las 12:00 hrs CDMX · Guiadas por Claribel Puga
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sesiones.map((sesion, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:shadow-md"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,155,100,0.18)",
                }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #c9874a, #a0622a)" }}
                >
                  {i + 1}
                </span>
                <span style={{ color: "#3d2820", fontWeight: 500 }}>{sesion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLARIBEL PUGA ────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${CLARIBEL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(254,243,236,0.82)" }} />
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto placeholder */}
            <div className="flex-shrink-0">
              <div
                className="w-56 h-56 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #f8dcc8, #f0c4a0)",
                  border: "4px solid rgba(201,155,100,0.4)",
                  boxShadow: "0 8px 40px rgba(160,98,42,0.2)",
                }}
              >
                <span style={{ fontSize: "5rem" }}>👩‍🏫</span>
              </div>
              <p className="text-center mt-3 text-xs" style={{ color: "#a0622a", fontStyle: "italic" }}>
                Fotografía profesional de Claribel
              </p>
            </div>

            {/* Texto */}
            <div>
              <div
                className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: "rgba(201,155,100,0.15)", color: "#a0622a" }}
              >
                Tu Guía
              </div>
              <h2
                className="mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#2d2420",
                }}
              >
                Claribel Puga
              </h2>
              <p
                className="mb-6 font-semibold"
                style={{ color: "#a0622a", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
              >
                Creadora del Método Ascendant® · Maestra en Neurociencias Aplicadas a la Espiritualidad
              </p>
              <div className="space-y-4 leading-relaxed" style={{ color: "#5a3e35" }}>
                <p>
                  Durante años ha acompañado a miles de personas en procesos de desarrollo humano, expansión de consciencia y transformación personal.
                </p>
                <p>
                  Su enfoque integra herramientas de desarrollo interior, neurociencia, meditación y trabajo energético para ayudar a las personas a construir una vida más consciente, equilibrada y alineada con su bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#fef3ec" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(201,155,100,0.15)", color: "#a0622a" }}
          >
            Testimonios
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#2d2420",
            }}
          >
            Miles de personas han transformado su vida con las enseñanzas de Claribel Puga
          </h2>
          <div
            className="p-10 rounded-3xl"
            style={{
              background: "#fff",
              border: "1px solid rgba(201,155,100,0.2)",
              color: "#a0622a",
              fontStyle: "italic",
            }}
          >
            <p className="text-lg" style={{ color: "#7a5a4e" }}>
              Los testimonios en video y escritos se agregarán próximamente.
            </p>
          </div>
        </div>
      </section>

      {/* ── INVERSIÓN ────────────────────────────────────────── */}
      <section id="inversion" className="py-24" style={{ background: "#fff9f5" }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <div
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(201,155,100,0.12)", color: "#a0622a" }}
            >
              Inversión
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              Tu Inversión
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tarjeta 1 — Pago único */}
            <div
              className="p-10 rounded-3xl text-center flex flex-col"
              style={{
                background: "linear-gradient(135deg, #fff, #fef3ec)",
                border: "2px solid rgba(201,155,100,0.3)",
                boxShadow: "0 8px 40px rgba(160,98,42,0.1)",
              }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#a0622a" }}>
                Pago Único
              </p>
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "#2d2420",
                  lineHeight: 1,
                }}
              >
                $3,999 <span style={{ fontSize: "1.5rem", color: "#7a5a4e" }}>MXN</span>
              </p>
              <p className="mb-8 text-sm" style={{ color: "#7a5a4e" }}>
                Acceso completo al programa
              </p>

              <div className="text-left space-y-3 mb-8 flex-1">
                {[
                  "Programa completo de 9 semanas",
                  "Lecciones grabadas",
                  "Manuales descargables",
                  "Ejercicios KS",
                  "Material imprimible",
                  "10 sesiones en vivo",
                  "Acceso al grupo privado",
                  "Acompañamiento durante todo el proceso",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                      style={{ background: "#c9874a" }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "#3d2820" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={INSCRIPCION_URL_UNICO}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-full font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #c9874a, #a0622a)",
                  letterSpacing: "0.05em",
                }}
              >
                QUIERO INSCRIBIRME
              </a>
            </div>

            {/* Tarjeta 2 — 2 pagos */}
            <div
              className="p-10 rounded-3xl text-center flex flex-col"
              style={{
                background: "linear-gradient(135deg, #fff8f3, #fdeee0)",
                border: "2px solid rgba(201,135,74,0.5)",
                boxShadow: "0 8px 40px rgba(160,98,42,0.15)",
              }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#a0622a" }}>
                2 Pagos
              </p>
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "#2d2420",
                  lineHeight: 1,
                }}
              >
                $2,000 <span style={{ fontSize: "1.5rem", color: "#7a5a4e" }}>MXN</span>
              </p>
              <p className="mb-2 text-sm font-semibold" style={{ color: "#a0622a" }}>
                × 2 pagos = $4,000 MXN total
              </p>
              <p className="mb-8 text-sm" style={{ color: "#7a5a4e" }}>
                Primer pago al inscribirte, segundo pago a las 4 semanas
              </p>

              <div className="text-left space-y-3 mb-8 flex-1">
                {[
                  "Programa completo de 9 semanas",
                  "Lecciones grabadas",
                  "Manuales descargables",
                  "Ejercicios KS",
                  "Material imprimible",
                  "10 sesiones en vivo",
                  "Acceso al grupo privado",
                  "Acompañamiento durante todo el proceso",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                      style={{ background: "#c9874a" }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "#3d2820" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={INSCRIPCION_URL_2PAGOS}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-full font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #c9874a, #a0622a)",
                  letterSpacing: "0.05em",
                }}
              >
                QUIERO INSCRIBIRME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCASEZ ──────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#fef3ec" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div
            className="p-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(201,135,74,0.1), rgba(201,135,74,0.05))",
              border: "1.5px solid rgba(201,155,100,0.35)",
            }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#2d2420",
              }}
            >
              Cupo Limitado
            </h3>
            <p className="leading-relaxed" style={{ color: "#5a3e35" }}>
              Para garantizar una experiencia de acompañamiento cercana y personalizada, los espacios disponibles son limitados. Las inscripciones permanecerán abiertas únicamente hasta completar el grupo.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2d2420 0%, #3d2c22 50%, #4a3228 100%)",
        }}
      >
        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#f8e4d8",
              lineHeight: 1.2,
            }}
          >
            Todo Lo Bueno Me Sucede
          </h2>
          <p className="mb-4 text-lg" style={{ color: "#d4a882" }}>
            La realidad comienza a cambiar cuando cambia la forma en que interactúas con ella.
          </p>
          <p className="mb-12 leading-relaxed" style={{ color: "#c4907a", maxWidth: "520px", margin: "0 auto 3rem" }}>
            Únete a esta experiencia de 9 semanas y comienza a construir una nueva relación contigo mismo, con tu energía y con tu vida.
          </p>
          <a
            href={INSCRIPCION_URL_UNICO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #c9874a, #a0622a)",
              fontSize: "1.05rem",
              letterSpacing: "0.08em",
              boxShadow: "0 8px 32px rgba(201,135,74,0.4)",
            }}
          >
            QUIERO INSCRIBIRME AHORA
          </a>
        </div>
      </section>

    </div>
  );
}
