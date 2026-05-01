import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, Heart, Brain, Users, Sparkles, Youtube, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import RegistrationModal from "@/components/RegistrationModal";
import Header from "@/components/Header";
import StickyBanner from "@/components/StickyBanner";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"masterclass" | "course">("masterclass");

  const handleOpenModal = (type: "masterclass" | "course") => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyBanner />
      <Header hideNav={true} />

      {/* Page Title Banner */}
      <div className="w-full text-center py-5 border-b border-[#C4963C]/30" style={{ background: "linear-gradient(135deg, #fdf8f0 0%, #fef3e2 100%)", marginTop: "0" }}>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif", color: "#1a0a2e", letterSpacing: "0.05em" }}>
          Mujer Superpoderosa
        </h1>
      </div>

      {/* Video Section — Grabación Masterclass */}
      <section className="py-8 md:py-10" style={{ background: "linear-gradient(180deg, #fef3e2 0%, #fdf8f0 100%)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#C4963C" }}>Grabación de la Masterclass</p>
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/mW1DUgT8mas"
                title="Grabación Masterclass Mujer Superpoderosa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #8b7d9e 0%, transparent 50%)",
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="text-left">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#1a0a2e" }}>Mujer Superpoderosa</p>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Descubre la Biología de tu Poder
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              Un programa de 4 semanas que une el poder de la neurociencia con la profundidad de la consciencia espiritual. Transforma tu intensidad emocional en tu mayor ventaja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>Toma tu luz, tu fuerza y tu poder</p>
                <Button 
                  size="lg" 
                  className="text-base h-12 px-8 font-semibold shadow-lg"
                  style={{ background: "linear-gradient(135deg, #C4963C 0%, #e8b84b 50%, #C4963C 100%)", color: "#1a0a2e" }}
                  onClick={() => { const el = document.getElementById('precio'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Unirme al Programa <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <p className="text-sm text-foreground/60">
              Más de 500 mujeres han transformado su relación con la empatía y la abundancia
            </p>
              </div>
              {/* Right: Iconic Image */}
              <div className="flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/7LVaTB946Ea3vuuyshqpV9/curso_imagen_iconica-J75xhCbEZuMnX3PvYtkvEv.webp"
                  alt="Mujer Superpoderosa"
                  className="w-full max-w-sm rounded-3xl shadow-2xl object-cover"
                  style={{ maxHeight: "520px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fechas del Programa */}
      <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 100%)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C4963C" }}>Próxima Edición</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#f0d8ff" }}>
              Programa Mayo 2026
            </h2>
            <p className="text-sm mb-10" style={{ color: "#c8a8d8" }}>
              Si no puedes asistir en vivo, tendrás acceso a las grabaciones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Sesión de Bienvenida */}
              <div className="rounded-2xl p-6 text-left" style={{ background: "rgba(196,150,60,0.12)", border: "1px solid rgba(196,150,60,0.35)" }}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "rgba(196,150,60,0.2)", color: "#C4963C" }}>Sesión de Bienvenida</span>
                <p className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#f0d8ff" }}>Miércoles 6</p>
                <p className="text-base font-semibold mb-3" style={{ color: "#C4963C" }}>de Mayo · 12:00 hrs CDMX</p>
                <p className="text-xs" style={{ color: "#c8a8d8" }}>Inicio oficial del programa. Conoce a tu comunidad y prepárate para la transformación.</p>
              </div>

              {/* Masterclasses en Vivo */}
              <div className="md:col-span-2 rounded-2xl p-6" style={{ background: "rgba(240,216,255,0.06)", border: "1px solid rgba(240,216,255,0.15)" }}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ background: "rgba(240,216,255,0.1)", color: "#f0d8ff" }}>4 Masterclasses en Vivo · Zoom</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { dia: "Sáb 9", mes: "Mayo" },
                    { dia: "Sáb 16", mes: "Mayo" },
                    { dia: "Sáb 23", mes: "Mayo" },
                    { dia: "Sáb 30", mes: "Mayo" },
                  ].map((fecha, i) => (
                    <div key={i} className="rounded-xl p-3 text-center" style={{ background: "rgba(196,150,60,0.08)", border: "1px solid rgba(196,150,60,0.2)" }}>
                      <p className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#f0d8ff" }}>{fecha.dia}</p>
                      <p className="text-xs font-semibold" style={{ color: "#C4963C" }}>{fecha.mes}</p>
                      <p className="text-xs mt-1" style={{ color: "#c8a8d8" }}>12:00 hrs</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4 text-center" style={{ color: "#c8a8d8" }}>Todos los sábados de Mayo · 12:00 hrs Ciudad de México</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm" style={{ color: "#c8a8d8" }}>
              <span className="flex items-center gap-2">🎥 <span>Grabaciones disponibles si no puedes asistir en vivo</span></span>
              <span className="hidden sm:block" style={{ color: "rgba(196,150,60,0.4)" }}>·</span>
              <span className="flex items-center gap-2">🔒 <span>Acceso por 6 meses al contenido</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_hero_section_c3c25275.png"
                alt="Mujer empoderada"
                className="w-full max-w-xs rounded-3xl shadow-xl object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              ¿Te sientes abrumada por tu propia empatía?
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Absorbes la energía emocional de otros sin saber cómo protegerte</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Tu sensibilidad te hace sentir "demasiado" en un mundo que valora la frialdad</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Luchas por establecer límites sin sentirte culpable</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>No sabes cómo usar tu intuición como una herramienta de poder real</span>
              </p>
            </div>

            <p className="mt-8 text-foreground/70 italic" style={{ fontFamily: "'Lora', serif" }}>
              No hay nada malo en ti. Simplemente tienes un sistema nervioso altamente calibrado que nadie te enseñó a usar.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Course */}
      <section id="curso" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Despierta la Mujer Superpoderosa en ti
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_neurobiologia_930b563d.png" alt="Neurobiología" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Brain className="w-7 h-7 mb-3" style={{ color: "#C4963C" }} />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Neurobiología Femenina</h3>
                <p className="text-foreground/70 text-sm">Comprende por qué tu cerebro procesa la información de manera única y cómo eso es una ventaja evolutiva.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_empoderamiento_064106fe.png" alt="Regulación Emocional" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Heart className="w-7 h-7 mb-3" style={{ color: "#C4963C" }} />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Regulación Emocional</h3>
                <p className="text-foreground/70 text-sm">Aprende técnicas de Meditación Ascendente para regularte sin suprimir tu intensidad emocional.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_intuicion_05b92881.png" alt="Poder de Influencia" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Zap className="w-7 h-7 mb-3" style={{ color: "#C4963C" }} />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Poder de Influencia</h3>
                <p className="text-foreground/70 text-sm">Transforma tu empatía en influencia estratégica y liderazgo coherente sin manipulación.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_latina_1_06ba1f6e.png" alt="Abundancia Integral" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Users className="w-7 h-7 mb-3" style={{ color: "#C4963C" }} />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Abundancia Integral</h3>
                <p className="text-foreground/70 text-sm">Crea abundancia en relaciones, salud, propósito y recursos materiales desde una perspectiva holística.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Female Brain Section */}
      <section className="py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 40%, #4a1a3a 70%, #2d0a2a 100%)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/cerebro_femenino_iconica_8727d536.webp"
                alt="El cerebro extraordinario de la mujer"
                className="w-full max-w-sm rounded-3xl shadow-2xl"
              />
            </div>
            {/* Text */}
            <div className="text-white">
              <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full mb-6 inline-block" style={{ backgroundColor: "rgba(200,150,220,0.2)", color: "#d4a8e8" }}>Neurociencia Femenina</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#f0d8ff" }}>
                Tu Cerebro es una Obra Maestra de la Naturaleza
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#c8a8d8" }}>
                El cerebro femenino no es inferior ni superior al masculino. Es <strong style={{ color: "#f0d8ff" }}>diferente, especializado y extraordinariamente hábil</strong> en dimensiones que la ciencia apenas comienza a comprender.
              </p>
              <div className="space-y-4">
                {[
                  { color: "#f4a0c0", label: "Intuición", desc: "Cuerpo calloso más desarrollado: mayor conexión entre hemisferios" },
                  { color: "#c4a0f4", label: "Empatía", desc: "Amígdala más activa: procesamiento emocional más profundo" },
                  { color: "#a0d4f4", label: "Memoria", desc: "Hipocampo más grande: memoria episódica y contextual superior" },
                  { color: "#f4d0a0", label: "Multitarea", desc: "Red neuronal por defecto más activa: pensamiento multidimensional" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <span className="font-semibold" style={{ color: item.color }}>{item.label}:</span>
                      <span className="ml-2" style={{ color: "#c8a8d8" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm italic" style={{ color: "#a888c8" }}>
                "No tienes un cerebro defectuoso. Tienes un cerebro diseñado para percibir, conectar y transformar lo que otros ni siquiera notan."
              </p>
              <p className="text-xs mt-1" style={{ color: "#8868a8" }}>— Claribel Puga, Instituto Ascendant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modulos" className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            4 Semanas con: 4 Módulos + Meditaciones Especiales + Poderosos Audios de Hipnosis + 4 Masterclasses en Vivo con Claribel Puga
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { num: "1", title: "Los Poderes del Cerebro Femenino", desc: "Descubre las capacidades neurobiológicas únicas del cerebro femenino y cómo activarlas conscientemente" },
              { num: "2", title: "Las Múltiples Abundancias de la Mujer", desc: "Explora las diferentes dimensiones de la abundancia femenina y cómo crearla desde tu autenticidad" },
              { num: "3", title: "El Poder De Mi Belleza", desc: "Reconecta con tu poder a través de la belleza como expresión de tu esencia y presencia" },
              { num: "4", title: "La Persuasión de la Mujer", desc: "Desarrolla tu capacidad de influir y persuadir desde la coherencia, la integridad y la consciencia" },
            ].map((module, i) => (
              <div key={i} className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition">
                <div className="text-sm font-semibold text-[#7a4a8a] mb-2">Módulos {module.num}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-foreground/70 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-background rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">Incluye:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-foreground/80">
              {[
                "Manuales PDF del curso",
                "Lecciones grabadas por módulos",
                "Meditaciones Isiacas",
                "Audios de Hipnosis para cada nivel",
                "4 Masterclasses en vivo con Claribel Puga vía zoom",
                "Acceso por 6 meses",
                "Acceso Preferencial a otras actividades con Claribel",
                "Acceso a la Comunidad exclusiva de Mujeres Superpoderosas",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#7a4a8a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lo que Aprenderás
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            {[
              "Comprender la neurobiología de tu intuición y empatía como ventajas reales",
              "Regular tu sistema nervioso sin suprimir tu intensidad emocional",
              "Establecer límites sanos desde la coherencia, no desde el miedo",
              "Transformar tu sensibilidad en poder de influencia y liderazgo",
              "Crear abundancia integral en todas las áreas de tu vida",
              "Construir relaciones de calidad basadas en la reciprocidad consciente",
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-lg hover:bg-card transition">
                <div className="w-6 h-6 rounded-full bg-[#7a4a8a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#7a4a8a]" />
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
            </div>
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_latina_2_c8577892.png" alt="Mujer transformada" className="w-full h-52 object-cover rounded-2xl shadow-md" />
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/woman_latina_3_49675dc0.png" alt="Mujer empoderada" className="w-full h-52 object-cover rounded-2xl shadow-md mt-8" />
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/masterclass_feature_2_fe1f202f.png" alt="Mujer abundante" className="w-full h-52 object-cover rounded-2xl shadow-md -mt-4" />
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/masterclass_feature_3_168c768b.png" alt="Mujer consciente" className="w-full h-52 object-cover rounded-2xl shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* About Claribel */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Claribel image */}
            <div className="flex justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/DYUZdiLucISZSSYB.png"
                alt="Claribel Puga"
                className="w-full max-w-xs rounded-3xl shadow-2xl object-cover"
                style={{ maxHeight: "460px" }}
              />
            </div>
            <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sobre Claribel Puga
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6" style={{ fontFamily: "'Lora', serif" }}>
              Claribel Puga es la fundadora del Instituto Ascendant. Es Maestra en Neurociencias experta en Neuroespiritualidad y mentora de procesos de consciencia profunda.
            </p>

            <p className="text-foreground/70 mb-8">
              Su enfoque integra la claridad científica con la profundidad espiritual, enseñando a las mujeres a reconocer y activar sus habilidades neurobiológicas innatas desde un lugar de consciencia y coherencia.
            </p>

            <div className="inline-block px-6 py-3 bg-background rounded-lg border border-border">
              <p className="text-sm text-foreground/60">
                Creadora del Método Ascendant, Meditación Isiaca y Meditación Ascendente
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section id="precio" className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 60%, #1a0a2e 100%)" }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C4963C" }}>Inversión</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#f0d8ff" }}>
              Transforma tu vida por menos de lo que imaginas
            </h2>

            <div className="rounded-3xl p-8 md:p-10 relative overflow-hidden" style={{ background: "rgba(240,216,255,0.05)", border: "1px solid rgba(196,150,60,0.4)" }}>
              {/* Badge de promoción */}
              <div className="absolute top-0 right-0">
                <div className="text-sm font-black px-5 py-3 rounded-bl-2xl rounded-tr-3xl" style={{ background: "linear-gradient(135deg, #e8b84b, #C4963C)", color: "#1a0a2e", letterSpacing: "0.05em" }}>
                  🔥 33% OFF · 24 HRS
                </div>
              </div>

              {/* Precio normal tachado */}
              <div className="flex items-center justify-center gap-3 mb-3 mt-4">
                <span className="text-2xl font-bold line-through" style={{ color: "rgba(255,255,255,0.85)" }}>$150 USD</span>
                <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(232,90,90,0.2)", color: "#ff8080", border: "1px solid rgba(232,90,90,0.4)" }}>Precio regular</span>
              </div>

              {/* Precio promocional */}
              <div className="flex items-end justify-center gap-2 mb-1">
                <span className="text-7xl md:text-8xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#C4963C" }}>$100</span>
                <span className="text-2xl mb-4 font-semibold" style={{ color: "#f0d8ff" }}>USD</span>
              </div>
              <div className="inline-block px-5 py-2 rounded-full mb-6 text-base font-bold" style={{ background: "rgba(196,150,60,0.15)", color: "#e8b84b", border: "1px solid rgba(196,150,60,0.4)" }}>
                ✨ Ahorras $50 USD — solo por 24 horas
              </div>
              <p className="text-sm mb-6" style={{ color: "#c8a8d8" }}>Precio especial durante las 24 horas posteriores a la Masterclass</p>

              {/* Lo que incluye */}
              <div className="text-left space-y-2 mb-8 px-2">
                {[
                  "4 Módulos en video + Manuales PDF",
                  "Meditaciones Isiacas y Audios de Hipnosis",
                  "4 Masterclasses en vivo por Zoom",
                  "Acceso a la Comunidad exclusiva",
                  "Acceso por 6 meses al contenido",
                  "Acceso Preferencial a actividades con Claribel",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-base" style={{ color: "#C4963C" }}>✓</span>
                    <span className="text-sm" style={{ color: "#f0d8ff" }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-4 rounded-xl text-base font-bold shadow-lg transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #C4963C 0%, #e8b84b 50%, #C4963C 100%)", color: "#1a0a2e" }}
                onClick={() => window.open('https://cursos.institutoascendant.com/offers/Ff9QtXhb', '_blank')}
              >
                Quiero unirme por $100 USD →
              </button>

              <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.75)" }}>Después de las 24 hrs el precio regresa a $150 USD</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer — idéntico al del sitio principal */}
      <footer className="bg-[#2D2D2D] text-white/70">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#C4963C] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif text-lg font-semibold text-white">Instituto Ascendant</span>
              </div>
              <p className="text-sm leading-relaxed mb-5">Instituto para el Crecimiento de la Consciencia Creadora. Desarrollo espiritual consciente, sanación energética y crecimiento personal.</p>
              <div className="flex gap-3">
                {([Youtube, Instagram, Facebook] as React.ElementType[]).map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4963C] hover:text-white transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Programas</h4>
              <ul className="space-y-2.5 text-sm">
                {["KS Healing Systems®", "Meditación Ascendente®", "Desarrollo de la Consciencia", "Certificaciones", "Talleres Gratuitos"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#C4963C] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Instituto */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Instituto</h4>
              <ul className="space-y-2.5 text-sm">
                {["Sobre Nosotros", "Fundadores", "Testimonios", "Blog", "Preguntas Frecuentes"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#C4963C] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#C4963C]" /> <a href="mailto:info@institutoascendant.com" className="hover:text-[#C4963C] transition-colors">info@institutoascendant.com</a></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C4963C]" /> +52 (311) 393-1660</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#C4963C] mt-0.5 shrink-0" /> <span>Av. Insurgentes 2177<br/>Tepic, Nay. Méx.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>&copy; 2026 Instituto Ascendant para el Crecimiento de la Consciencia Creadora. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="/privacidad" className="hover:text-white/60 transition-colors">Aviso de Privacidad</a>
              <a href="/terminos" className="hover:text-white/60 transition-colors">Términos y Condiciones</a>
              <a href="/cookies" className="hover:text-white/60 transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      <RegistrationModal 
        open={showModal} 
        onOpenChange={setShowModal}
        type={modalType}
      />
    </div>
  );
}
