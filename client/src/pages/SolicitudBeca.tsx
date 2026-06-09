// SolicitudBeca.tsx
// Estilo: diseño claro institucional — fondo blanco, texto oscuro, acentos dorado Ascendant
// Formulario nativo React que hace POST directo al endpoint de Kajabi
// Los campos y sus nombres (form_submission[...]) se extraen del script embed oficial

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const COUNTRIES: [string, string][] = [
  ["US", "Estados Unidos"], ["CA", "Canadá"], ["GB", "Reino Unido"], ["AU", "Australia"],
  ["DE", "Alemania"], ["AF", "Afganistán"], ["AL", "Albania"], ["DZ", "Algeria"],
  ["AD", "Andorra"], ["AO", "Angola"], ["AI", "Anguila"], ["AQ", "Antártida"],
  ["AG", "Antigua y Barbuda"], ["SA", "Arabia Saudí"], ["AR", "Argentina"],
  ["AM", "Armenia"], ["AW", "Aruba"], ["AT", "Austria"], ["AZ", "Azerbaiyán"],
  ["BS", "Bahamas"], ["BD", "Bangladés"], ["BB", "Barbados"], ["BH", "Baréin"],
  ["BY", "Bielorrusia"], ["BZ", "Belice"], ["BE", "Bélgica"], ["BJ", "Benín"],
  ["BT", "Bután"], ["BO", "Bolivia"], ["BA", "Bosnia y Herzegovina"],
  ["BW", "Botsuana"], ["BR", "Brasil"], ["BN", "Brunéi"], ["BG", "Bulgaria"],
  ["BF", "Burkina Faso"], ["BI", "Burundi"], ["CV", "Cabo Verde"],
  ["KH", "Camboya"], ["CM", "Camerún"], ["QA", "Catar"], ["TD", "Chad"],
  ["CL", "Chile"], ["CN", "China"], ["CY", "Chipre"], ["CO", "Colombia"],
  ["KM", "Comores, Islas"], ["CG", "Congo"], ["CD", "Congo, República Democrática del"],
  ["CR", "Costa Rica"], ["CI", "Costa de Marfíl"], ["HR", "Croacia"], ["CU", "Cuba"],
  ["CW", "Curazao"], ["DK", "Dinamarca"], ["DM", "Dominica"], ["EC", "Ecuador"],
  ["EG", "Egipto"], ["SV", "El Salvador"], ["AE", "Emiratos Árabes Unidos"],
  ["ER", "Eritrea"], ["SK", "Eslovaquia"], ["SI", "Eslovenia"], ["ES", "España"],
  ["EE", "Estonia"], ["SZ", "Esuatini"], ["ET", "Etiopía"], ["RU", "Federación Rusa"],
  ["PH", "Filipinas"], ["FI", "Finlandia"], ["FJ", "Fiyi"], ["FR", "Francia"],
  ["GA", "Gabón"], ["GM", "Gambia"], ["GE", "Georgia"], ["GH", "Ghana"],
  ["GI", "Gibraltar"], ["GD", "Granada"], ["GR", "Grecia"], ["GL", "Groenlandia"],
  ["GT", "Guatemala"], ["GN", "Guinea"], ["GQ", "Guinea Ecuatorial"],
  ["GW", "Guinea-Bisáu"], ["GY", "Guyana"], ["HT", "Haití"], ["HN", "Honduras"],
  ["HK", "Hong Kong"], ["HU", "Hungría"], ["IN", "India"], ["ID", "Indonesia"],
  ["IQ", "Irak"], ["IR", "Irán"], ["IE", "Irlanda"], ["IS", "Islandia"],
  ["IL", "Israel"], ["IT", "Italia"], ["JM", "Jamaica"], ["JP", "Japón"],
  ["JO", "Jordania"], ["KZ", "Kazajistán"], ["KE", "Kenia"], ["KG", "Kirguistán"],
  ["KI", "Kiribati"], ["KW", "Kuwait"], ["LS", "Lesoto"], ["LV", "Letonia"],
  ["LB", "Líbano"], ["LR", "Liberia"], ["LY", "Libia"], ["LI", "Liechtenstein"],
  ["LT", "Lituania"], ["LU", "Luxemburgo"], ["MK", "Macedonia del Norte"],
  ["MG", "Madagascar"], ["MY", "Malasia"], ["MW", "Malaui"], ["ML", "Malí"],
  ["MT", "Malta"], ["MA", "Marruecos"], ["MU", "Mauricio"], ["MR", "Mauritania"],
  ["MX", "México"], ["FM", "Micronesia"], ["MD", "Moldavia"], ["MC", "Mónaco"],
  ["MN", "Mongolia"], ["ME", "Montenegro"], ["MZ", "Mozambique"], ["NA", "Namibia"],
  ["NR", "Nauru"], ["NP", "Nepal"], ["NI", "Nicaragua"], ["NE", "Níger"],
  ["NG", "Nigeria"], ["NO", "Noruega"], ["NZ", "Nueva Zelanda"], ["OM", "Omán"],
  ["NL", "Países Bajos"], ["PK", "Pakistán"], ["PA", "Panamá"],
  ["PG", "Papúa Nueva Guinea"], ["PY", "Paraguay"], ["PE", "Perú"],
  ["PL", "Polonia"], ["PT", "Portugal"], ["PR", "Puerto Rico"],
  ["CF", "República Centroafricana"], ["DO", "República Dominicana"],
  ["RW", "Ruanda"], ["RO", "Rumanía"], ["WS", "Samoa"], ["SM", "San Marino"],
  ["VC", "San Vicente y las Granadinas"], ["LC", "Santa Lucía"],
  ["ST", "Santo Tomé y Príncipe"], ["SN", "Senegal"], ["RS", "Serbia"],
  ["SC", "Seychelles"], ["SL", "Sierra Leona"], ["SG", "Singapur"],
  ["SO", "Somalia"], ["LK", "Sri Lanka"], ["ZA", "Sudáfrica"], ["SD", "Sudán"],
  ["SS", "Sudán del Sur"], ["SE", "Suecia"], ["CH", "Suiza"], ["SR", "Surinam"],
  ["TH", "Tailandia"], ["TW", "Taiwán"], ["TZ", "Tanzania"], ["TJ", "Tayikistán"],
  ["TL", "Timor Oriental"], ["TG", "Togo"], ["TO", "Tonga"],
  ["TT", "Trinidad y Tobago"], ["TN", "Túnez"], ["TM", "Turkmenistán"],
  ["TR", "Turquía"], ["TV", "Tuvalu"], ["UA", "Ucrania"], ["UG", "Uganda"],
  ["UY", "Uruguay"], ["UZ", "Uzbekistán"], ["VU", "Vanuatu"],
  ["VE", "Venezuela"], ["VN", "Vietnam"], ["YE", "Yemen"], ["ZM", "Zambia"],
  ["ZW", "Zimbabue"],
];

const PROGRAMS = [
  { name: "KS Healing Básico",   beca: "$2,000 MXN", student: "$1,999 MXN" },
  { name: "KS Healing Avanzado", beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "DART",                beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "Master KS Healing",   beca: "$12,000 MXN", student: "Distribuido en 12 meses" },
];

// Shared input/select/textarea styles
const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #d1d5db",
  color: "#1a1a2e",
  borderRadius: "4px",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6b7280",
  marginBottom: "0.4rem",
  fontWeight: 600,
};

const requiredMark = <span style={{ color: "#b8860b" }}>*</span>;

type Status = "idle" | "submitting" | "success" | "error";

export default function SolicitudBeca() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Checkboxes state
  const [checks, setChecks] = useState({
    custom_112: false,
    custom_113: false,
    custom_114: false,
    custom_115: false,
    custom_116: false,
  });

  const toggleCheck = (key: keyof typeof checks) =>
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Kajabi expects checkbox fields as "0" or "1"
    // FormData already handles hidden inputs for unchecked boxes
    // but we need to ensure checked ones override the hidden "0"
    Object.entries(checks).forEach(([key, checked]) => {
      if (checked) {
        data.set(`form_submission[${key}]`, "1");
      }
    });

    try {
      const res = await fetch(
        "https://cursos.institutoascendant.com/forms/2149608136/form_submissions",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
          mode: "no-cors", // Kajabi doesn't send CORS headers for form submissions
        }
      );
      // With no-cors we can't read the response status, but if no error thrown = success
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f8f7f4", color: "#1a1a2e" }}>
      <Header />

      {/* ── HERO COMPACTO ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12 px-6 text-center" style={{ borderBottom: "1px solid #e5e0d8", background: "#ffffff" }}>
        <div
          className="hidden"
          style={{
            backgroundImage:
              "none",
          }}
        />
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#b8860b" }}>
            Programa Becas Ascendant®
          </p>
          <h1
            className="font-serif mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", color: "#1a1a2e" }}
          >
            Solicita tu Apoyo Educativo
          </h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(26,26,46,0.65)" }}>
            Completa el formulario con honestidad y precisión. Nuestro equipo
            revisará tu solicitud y te contactará en un plazo de{" "}
            <strong style={{ color: "#b8860b" }}>3 a 5 días hábiles</strong>.
          </p>
        </div>
      </section>

      {/* ── RESUMEN DE APOYOS ─────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.2em] uppercase text-center mb-8"
            style={{ color: "#b8860b" }}
          >
            Apoyos disponibles por programa
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="border p-6"
                style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
              >
                <p className="font-serif text-base mb-3" style={{ color: "#1a1a2e" }}>{p.name}</p>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#6b7280" }}>Apoyo del Instituto</span>
                  <span style={{ color: "#b8860b" }} className="font-semibold">{p.beca}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span style={{ color: "#6b7280" }}>Tu inversión</span>
                  <span style={{ color: "#1a1a2e" }}>{p.student}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6" style={{ color: "rgba(26,26,46,0.35)" }}>
            La disponibilidad es limitada. Las solicitudes se evalúan en orden de recepción.
          </p>
        </div>
      </section>

      {/* ── LEYENDAS CONTEXTUALES ─────────────────────────────────────────── */}
      <section className="pb-10 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <div
            className="flex gap-4 p-5 border-l-2"
            style={{ borderColor: "#b8860b", background: "#fffbf0" }}
          >
            <span className="text-lg mt-0.5" style={{ color: "#b8860b" }}>🔒</span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,46,0.7)" }}>
              <strong style={{ color: "#1a1a2e" }}>Confidencialidad:</strong> La información que
              compartes en este formulario es estrictamente confidencial y se utiliza únicamente
              para evaluar la elegibilidad del apoyo educativo. No afecta tu calificación
              académica ni tu acceso al programa.
            </p>
          </div>
          <div
            className="flex gap-4 p-5 border-l-2"
            style={{ borderColor: "#d1c4a0", background: "#fafaf8" }}
          >
            <span className="text-lg mt-0.5" style={{ color: "#b8860b" }}>✦</span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,46,0.7)" }}>
              <strong style={{ color: "#1a1a2e" }}>Sobre las preguntas de motivación:</strong> Las
              becas están destinadas a personas con genuino interés en completar su formación.
              Tómate el tiempo necesario para responder con profundidad y honestidad — tus
              respuestas son la parte más importante de la solicitud.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ────────────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {status === "success" ? (
            /* ── PANTALLA DE ÉXITO ── */
            <div
              className="text-center py-20 px-8 border"
              style={{ borderColor: "#e5e0d8", background: "#fffbf0" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#fef9ec", border: "1px solid #d1c4a0" }}>
                <span style={{ color: "#b8860b", fontSize: "1.5rem" }}>✦</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: "#1a1a2e" }}>
                Tu solicitud fue enviada
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(26,26,46,0.65)" }}>
                Gracias por tomarte el tiempo de compartir tu historia con nosotros.
                Nuestro equipo revisará tu solicitud y te contactará en un plazo de{" "}
                <strong style={{ color: "#b8860b" }}>3 a 5 días hábiles</strong>.
              </p>
              <Link
                href="/becas"
                className="inline-block text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: "#6b7280" }}
              >
                ← Volver a la página de Becas
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              style={{ borderColor: "#e5e0d8" }}
            >
              {/* Sección 1: Datos personales */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#b8860b" }}>
                  01 — Datos personales
                </p>

                <div>
                  <label style={labelStyle}>Nombre completo {requiredMark}</label>
                  <input
                    type="text"
                    name="form_submission[name]"
                    required
                    placeholder="Tu nombre completo"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Correo electrónico {requiredMark}</label>
                  <input
                    type="email"
                    name="form_submission[email]"
                    required
                    placeholder="tu@correo.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>País de residencia</label>
                    <select
                      name="form_submission[custom_102]"
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                    >
                      <option value="" style={{ background: "#ffffff" }}>Selecciona tu país</option>
                      {COUNTRIES.map(([code, name]) => (
                        <option key={code} value={name} style={{ background: "#ffffff" }}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Ciudad</label>
                    <input
                      type="text"
                      name="form_submission[address_city]"
                      placeholder="Tu ciudad"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                    />
                  </div>
                </div>
              </div>

              {/* Sección 2: Programa */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#b8860b" }}>
                  02 — Programa de interés
                </p>

                <div>
                  <label style={labelStyle}>¿A qué programa deseas aplicar la beca? {requiredMark}</label>
                  <select
                    name="form_submission[custom_109]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  >
                    <option value="" style={{ background: "#ffffff" }}>Selecciona un programa</option>
                    <option value="KS Healing Básico" style={{ background: "#ffffff" }}>KS Healing Básico</option>
                    <option value="KS Healing Avanzado" style={{ background: "#ffffff" }}>KS Healing Avanzado</option>
                    <option value="DART" style={{ background: "#ffffff" }}>DART</option>
                    <option value="Master KS Healing" style={{ background: "#ffffff" }}>Master KS Healing</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Has tomado algún programa con el Instituto Ascendant anteriormente? {requiredMark}</label>
                  <select
                    name="form_submission[custom_110]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  >
                    <option value="" style={{ background: "#ffffff" }}>Selecciona una opción</option>
                    <option value="Sí, soy alumno activo" style={{ background: "#ffffff" }}>Sí, soy alumno activo</option>
                    <option value="Sí, soy egresado" style={{ background: "#ffffff" }}>Sí, soy egresado</option>
                    <option value="No, sería mi primer programa" style={{ background: "#ffffff" }}>No, sería mi primer programa</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Qué programa(s) has cursado en el Instituto?</label>
                  <input
                    type="text"
                    name="form_submission[custom_111]"
                    placeholder="Escribe los programas que has tomado (si aplica)"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  />
                </div>
              </div>

              {/* Sección 3: Situación económica y motivación */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#b8860b" }}>
                  03 — Contexto y motivación
                </p>

                <div>
                  <label style={labelStyle}>¿Cuál es tu situación económica actual? {requiredMark}</label>
                  <select
                    name="form_submission[custom_117]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  >
                    <option value="" style={{ background: "#ffffff" }}>Selecciona una opción</option>
                    <option value="Estable con capacidad de inversión completa" style={{ background: "#ffffff" }}>Estable con capacidad de inversión completa</option>
                    <option value="Estable con capacidad parcial" style={{ background: "#ffffff" }}>Estable con capacidad parcial</option>
                    <option value="En transición o dificultad temporal" style={{ background: "#ffffff" }}>En transición o dificultad temporal</option>
                    <option value="Situación de vulnerabilidad económica" style={{ background: "#ffffff" }}>Situación de vulnerabilidad económica</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Por qué deseas tomar este programa en este momento de tu vida? {requiredMark}</label>
                  <p className="text-xs mb-2" style={{ color: "rgba(26,26,46,0.4)" }}>
                    Esta es la parte más importante de tu solicitud. Tómate el tiempo necesario.
                  </p>
                  <textarea
                    name="form_submission[custom_118]"
                    required
                    rows={6}
                    placeholder="Comparte con honestidad tu situación, motivación y para qué quieres este apoyo..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
                    onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,134,11,0.25)")}
                  />
                </div>
              </div>

              {/* Sección 4: Compromisos */}
              <div
                className="border p-8 space-y-5"
                style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#b8860b" }}>
                  04 — Compromisos
                </p>
                <p className="text-sm" style={{ color: "rgba(26,26,46,0.5)" }}>
                  Todos los campos son obligatorios.
                </p>

                {[
                  {
                    key: "custom_112" as const,
                    text: "Entiendo que la beca representa una inversión educativa real que el Instituto realiza en mí, y me comprometo a aprovecharla con responsabilidad.",
                  },
                  {
                    key: "custom_113" as const,
                    text: "Me comprometo a mantener continuidad en mi proceso formativo y a cumplir con los pagos acordados según las condiciones de la beca.",
                  },
                  {
                    key: "custom_114" as const,
                    text: "Entiendo que la disponibilidad de becas es limitada y que la asignación no está garantizada.",
                  },
                  {
                    key: "custom_115" as const,
                    text: "Confirmo que la información proporcionada en este formulario es verídica y completa.",
                  },
                  {
                    key: "custom_116" as const,
                    text: "Acepto que el equipo del Instituto Ascendant me contacte vía WhatsApp o correo electrónico para dar seguimiento a mi solicitud.",
                  },
                ].map(({ key, text }) => (
                  <label
                    key={key}
                    className="flex gap-3 cursor-pointer group"
                    style={{ alignItems: "flex-start" }}
                  >
                    {/* Hidden "0" value for unchecked state (Kajabi expects this) */}
                    <input type="hidden" name={`form_submission[${key}]`} value="0" />
                    <div
                      onClick={() => toggleCheck(key)}
                      className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center transition-all duration-200"
                      style={{
                        border: `1px solid ${checks[key] ? "#b8860b" : "#d1d5db"}`,
                        background: checks[key] ? "#fffbf0" : "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      {checks[key] && (
                        <span style={{ color: "#b8860b", fontSize: "0.7rem", lineHeight: 1 }}>✓</span>
                      )}
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: checks[key] ? "#1a1a2e" : "#6b7280" }}
                      onClick={() => toggleCheck(key)}
                    >
                      {text}
                    </span>
                  </label>
                ))}
              </div>

              {/* Error message */}
              {status === "error" && (
                <div
                  className="p-4 text-sm"
                  style={{ background: "#fef2f2", border: "1px solid #fca5a5", color: "#dc2626" }}
                >
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting" || !Object.values(checks).every(Boolean)}
                  className="inline-block px-14 py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: Object.values(checks).every(Boolean) ? "#b8860b" : "#e5e0d8",
                    color: Object.values(checks).every(Boolean) ? "#ffffff" : "#9ca3af",
                    cursor: Object.values(checks).every(Boolean) ? "pointer" : "not-allowed",
                    border: "none",
                  }}
                >
                  {status === "submitting" ? "Enviando..." : "Enviar mi Solicitud de Beca"}
                </button>
                <p className="text-xs mt-4" style={{ color: "rgba(26,26,46,0.3)" }}>
                  Debes aceptar todos los compromisos para enviar tu solicitud.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── NOTA DE COMPROMISO ────────────────────────────────────────────── */}
      <section
        className="py-16 px-6 border-t"
        style={{ borderColor: "#e5e0d8", background: "#ffffff" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-serif italic text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "#4b5563" }}
          >
            "El Programa Becas Ascendant® representa nuestro compromiso con una
            visión de abundancia, servicio y expansión de la consciencia."
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(184,134,11,0.6)" }}>
            Claribel Puga · YOHEV — Instituto Ascendant
          </p>
          <div className="mt-8">
            <Link
              href="/becas"
              className="text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "#6b7280" }}
            >
              ← Volver a la página de Becas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
