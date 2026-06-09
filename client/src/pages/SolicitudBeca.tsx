// SolicitudBeca.tsx
// Estilo: mismo lenguaje visual que Becas.tsx — fondo oscuro #0f1520, dorado ámbar, serif elegante
// Formulario nativo React que hace POST directo al endpoint de Kajabi
// Los campos y sus nombres (form_submission[...]) se extraen del script embed oficial

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const PROGRAMS = [
  { name: "KS Healing Básico",   beca: "$2,000 MXN", student: "$1,999 MXN" },
  { name: "KS Healing Avanzado", beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "DART",                beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "Master KS Healing",   beca: "$12,000 MXN", student: "Distribuido en 12 meses" },
];

// Shared input/select/textarea styles
const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(201,162,39,0.25)",
  color: "#f5f0e8",
  borderRadius: "2px",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(245,240,232,0.55)",
  marginBottom: "0.4rem",
};

const requiredMark = <span style={{ color: "#c9a227" }}>*</span>;

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
    <div className="min-h-screen flex flex-col" style={{ background: "#0f1520", color: "#f5f0e8" }}>
      <Header />

      {/* ── HERO COMPACTO ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #c9a227 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#c9a227" }}>
            Programa Becas Ascendant®
          </p>
          <h1
            className="font-serif mb-6 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#f5f0e8" }}
          >
            Solicita tu Apoyo Educativo
          </h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
            Completa el formulario con honestidad y precisión. Nuestro equipo
            revisará tu solicitud y te contactará en un plazo de{" "}
            <strong style={{ color: "#c9a227" }}>3 a 5 días hábiles</strong>.
          </p>
        </div>
      </section>

      {/* ── RESUMEN DE APOYOS ─────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.2em] uppercase text-center mb-8"
            style={{ color: "rgba(201,162,39,0.6)" }}
          >
            Apoyos disponibles por programa
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="border p-6"
                style={{ borderColor: "rgba(201,162,39,0.2)", background: "rgba(255,255,255,0.03)" }}
              >
                <p className="font-serif text-base mb-3" style={{ color: "#f5f0e8" }}>{p.name}</p>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "rgba(245,240,232,0.45)" }}>Apoyo del Instituto</span>
                  <span style={{ color: "#c9a227" }} className="font-semibold">{p.beca}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span style={{ color: "rgba(245,240,232,0.45)" }}>Tu inversión</span>
                  <span style={{ color: "#f5f0e8" }}>{p.student}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6" style={{ color: "rgba(245,240,232,0.35)" }}>
            La disponibilidad es limitada. Las solicitudes se evalúan en orden de recepción.
          </p>
        </div>
      </section>

      {/* ── LEYENDAS CONTEXTUALES ─────────────────────────────────────────── */}
      <section className="pb-10 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <div
            className="flex gap-4 p-5 border-l-2"
            style={{ borderColor: "#c9a227", background: "rgba(201,162,39,0.06)" }}
          >
            <span className="text-lg mt-0.5" style={{ color: "#c9a227" }}>🔒</span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              <strong style={{ color: "#f5f0e8" }}>Confidencialidad:</strong> La información que
              compartes en este formulario es estrictamente confidencial y se utiliza únicamente
              para evaluar la elegibilidad del apoyo educativo. No afecta tu calificación
              académica ni tu acceso al programa.
            </p>
          </div>
          <div
            className="flex gap-4 p-5 border-l-2"
            style={{ borderColor: "rgba(201,162,39,0.4)", background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-lg mt-0.5" style={{ color: "#c9a227" }}>✦</span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              <strong style={{ color: "#f5f0e8" }}>Sobre las preguntas de motivación:</strong> Las
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
              style={{ borderColor: "rgba(201,162,39,0.25)", background: "rgba(201,162,39,0.05)" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.4)" }}>
                <span style={{ color: "#c9a227", fontSize: "1.5rem" }}>✦</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: "#f5f0e8" }}>
                Tu solicitud fue enviada
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.65)" }}>
                Gracias por tomarte el tiempo de compartir tu historia con nosotros.
                Nuestro equipo revisará tu solicitud y te contactará en un plazo de{" "}
                <strong style={{ color: "#c9a227" }}>3 a 5 días hábiles</strong>.
              </p>
              <Link
                href="/becas"
                className="inline-block text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                ← Volver a la página de Becas
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              style={{ borderColor: "rgba(201,162,39,0.15)" }}
            >
              {/* Sección 1: Datos personales */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "rgba(201,162,39,0.2)", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>
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
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
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
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>País de residencia</label>
                    <input
                      type="text"
                      name="form_submission[custom_102]"
                      placeholder="México"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Ciudad</label>
                    <input
                      type="text"
                      name="form_submission[address_city]"
                      placeholder="Ciudad de México"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                    />
                  </div>
                </div>
              </div>

              {/* Sección 2: Programa */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "rgba(201,162,39,0.2)", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>
                  02 — Programa de interés
                </p>

                <div>
                  <label style={labelStyle}>¿A qué programa deseas aplicar la beca? {requiredMark}</label>
                  <select
                    name="form_submission[custom_109]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  >
                    <option value="" style={{ background: "#0f1520" }}>Selecciona un programa</option>
                    <option value="KS Healing Básico" style={{ background: "#0f1520" }}>KS Healing Básico</option>
                    <option value="KS Healing Avanzado" style={{ background: "#0f1520" }}>KS Healing Avanzado</option>
                    <option value="DART" style={{ background: "#0f1520" }}>DART</option>
                    <option value="Master KS Healing" style={{ background: "#0f1520" }}>Master KS Healing</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Has tomado algún programa con el Instituto Ascendant anteriormente? {requiredMark}</label>
                  <select
                    name="form_submission[custom_110]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  >
                    <option value="" style={{ background: "#0f1520" }}>Selecciona una opción</option>
                    <option value="Sí, soy alumno activo" style={{ background: "#0f1520" }}>Sí, soy alumno activo</option>
                    <option value="Sí, soy egresado" style={{ background: "#0f1520" }}>Sí, soy egresado</option>
                    <option value="No, sería mi primer programa" style={{ background: "#0f1520" }}>No, sería mi primer programa</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Qué programa(s) has cursado en el Instituto?</label>
                  <input
                    type="text"
                    name="form_submission[custom_111]"
                    placeholder="Escribe los programas que has tomado (si aplica)"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  />
                </div>
              </div>

              {/* Sección 3: Situación económica y motivación */}
              <div
                className="border p-8 space-y-6"
                style={{ borderColor: "rgba(201,162,39,0.2)", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>
                  03 — Contexto y motivación
                </p>

                <div>
                  <label style={labelStyle}>¿Cuál es tu situación económica actual? {requiredMark}</label>
                  <select
                    name="form_submission[custom_117]"
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  >
                    <option value="" style={{ background: "#0f1520" }}>Selecciona una opción</option>
                    <option value="Estable con capacidad de inversión completa" style={{ background: "#0f1520" }}>Estable con capacidad de inversión completa</option>
                    <option value="Estable con capacidad parcial" style={{ background: "#0f1520" }}>Estable con capacidad parcial</option>
                    <option value="En transición o dificultad temporal" style={{ background: "#0f1520" }}>En transición o dificultad temporal</option>
                    <option value="Situación de vulnerabilidad económica" style={{ background: "#0f1520" }}>Situación de vulnerabilidad económica</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Por qué deseas tomar este programa en este momento de tu vida? {requiredMark}</label>
                  <p className="text-xs mb-2" style={{ color: "rgba(245,240,232,0.4)" }}>
                    Esta es la parte más importante de tu solicitud. Tómate el tiempo necesario.
                  </p>
                  <textarea
                    name="form_submission[custom_118]"
                    required
                    rows={6}
                    placeholder="Comparte con honestidad tu situación, motivación y para qué quieres este apoyo..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,162,39,0.25)")}
                  />
                </div>
              </div>

              {/* Sección 4: Compromisos */}
              <div
                className="border p-8 space-y-5"
                style={{ borderColor: "rgba(201,162,39,0.2)", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>
                  04 — Compromisos
                </p>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
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
                        border: `1px solid ${checks[key] ? "#c9a227" : "rgba(201,162,39,0.35)"}`,
                        background: checks[key] ? "rgba(201,162,39,0.15)" : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      {checks[key] && (
                        <span style={{ color: "#c9a227", fontSize: "0.7rem", lineHeight: 1 }}>✓</span>
                      )}
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: checks[key] ? "rgba(245,240,232,0.85)" : "rgba(245,240,232,0.55)" }}
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
                  style={{ background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.3)", color: "#f5a0a0" }}
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
                    background: Object.values(checks).every(Boolean) ? "#c9a227" : "rgba(201,162,39,0.3)",
                    color: Object.values(checks).every(Boolean) ? "#0f1520" : "rgba(245,240,232,0.3)",
                    cursor: Object.values(checks).every(Boolean) ? "pointer" : "not-allowed",
                    border: "none",
                  }}
                >
                  {status === "submitting" ? "Enviando..." : "Enviar mi Solicitud de Beca"}
                </button>
                <p className="text-xs mt-4" style={{ color: "rgba(245,240,232,0.3)" }}>
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
        style={{ borderColor: "rgba(201,162,39,0.12)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-serif italic text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "rgba(245,240,232,0.6)" }}
          >
            "El Programa Becas Ascendant® representa nuestro compromiso con una
            visión de abundancia, servicio y expansión de la consciencia."
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,162,39,0.6)" }}>
            Claribel Puga · YOHEV — Instituto Ascendant
          </p>
          <div className="mt-8">
            <Link
              href="/becas"
              className="text-xs tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "rgba(245,240,232,0.4)" }}
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
