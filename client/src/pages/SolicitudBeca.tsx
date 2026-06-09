// SolicitudBeca.tsx
// Estilo: mismo lenguaje visual que Becas.tsx — fondo oscuro #0f1520, dorado ámbar, serif elegante
// Estructura: Hero compacto → resumen del programa → embed de Kajabi → footer de compromiso

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const PROGRAMS = [
  { name: "KS Healing Básico",   beca: "$2,000 MXN", student: "$1,999 MXN" },
  { name: "KS Healing Avanzado", beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "DART",                beca: "$2,500 MXN", student: "$5,000 MXN" },
  { name: "Master KS Healing",   beca: "$12,000 MXN", student: "Distribuido en 12 meses" },
];

export default function SolicitudBeca() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f1520", color: "#f5f0e8" }}>
      <Header />

      {/* ── HERO COMPACTO ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        {/* Fondo sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #c9a227 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "#c9a227" }}
          >
            Programa Becas Ascendant®
          </p>
          <h1
            className="font-serif mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#f5f0e8",
            }}
          >
            Solicita tu Apoyo Educativo
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
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
                style={{
                  borderColor: "rgba(201,162,39,0.2)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  className="font-serif text-base mb-3"
                  style={{ color: "#f5f0e8" }}
                >
                  {p.name}
                </p>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "rgba(245,240,232,0.45)" }}>
                    Apoyo del Instituto
                  </span>
                  <span style={{ color: "#c9a227" }} className="font-semibold">
                    {p.beca}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span style={{ color: "rgba(245,240,232,0.45)" }}>
                    Tu inversión
                  </span>
                  <span style={{ color: "#f5f0e8" }}>{p.student}</span>
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-xs text-center mt-6"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            La disponibilidad es limitada. Las solicitudes se evalúan en orden
            de recepción.
          </p>
        </div>
      </section>

      {/* ── FORMULARIO KAJABI EMBED ───────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="border p-2"
            style={{ borderColor: "rgba(201,162,39,0.25)" }}
          >
            {/* ── REEMPLAZA ESTE BLOQUE CON EL CÓDIGO EMBED DE KAJABI ──────
                Ejemplo:
                <div dangerouslySetInnerHTML={{ __html: `<script src="..."></script><div id="kajabi-form-..."></div>` }} />
                ─────────────────────────────────────────────────────────── */}
            <div
              className="flex flex-col items-center justify-center py-24 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                minHeight: "480px",
              }}
            >
              <div
                className="w-12 h-px mb-8"
                style={{ background: "#c9a227" }}
              />
              <p
                className="font-serif text-2xl mb-3"
                style={{ color: "#f5f0e8" }}
              >
                Formulario en preparación
              </p>
              <p
                className="text-sm max-w-sm leading-relaxed"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                El formulario de solicitud estará disponible muy pronto.
                Mientras tanto, puedes escribirnos directamente por WhatsApp.
              </p>
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-80"
                style={{
                  background: "#c9a227",
                  color: "#0f1520",
                }}
              >
                Contactar por WhatsApp
              </a>
              <div
                className="w-12 h-px mt-8"
                style={{ background: "#c9a227" }}
              />
            </div>
          </div>
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
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(201,162,39,0.6)" }}
          >
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
