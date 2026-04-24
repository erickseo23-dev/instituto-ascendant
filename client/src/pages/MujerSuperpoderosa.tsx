import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, Heart, Brain, Users } from "lucide-react";
import { useState } from "react";
import RegistrationModal from "@/components/RegistrationModal";

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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
              alt="Mujer Superpoderosa"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#7a4a8a" }}>Claribel Puga</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#curso" className="text-foreground/70 hover:text-foreground transition">Sobre el Curso</a>
            <a href="#modulos" className="text-foreground/70 hover:text-foreground transition">Módulos</a>
            <a href="#beneficios" className="text-foreground/70 hover:text-foreground transition">Beneficios</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #8b7d9e 0%, transparent 50%)",
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="text-left">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Descubre la Biología de tu Poder
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              Un programa de 8 semanas que une el poder de la neurociencia con la profundidad de la consciencia espiritual. Transforma tu intensidad emocional en tu mayor ventaja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-8"
                onClick={() => handleOpenModal("masterclass")}
              >
                Masterclass Gratuita <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base h-12 px-8 border-primary text-primary hover:bg-primary/5"
                onClick={() => handleOpenModal("course")}
              >
                Inscribirse al Curso
              </Button>
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

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
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
              La Solución: Mujer Superpoderosa
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Neurobiología" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Brain className="w-7 h-7 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Neurobiología Femenina</h3>
                <p className="text-foreground/70 text-sm">Comprende por qué tu cerebro procesa la información de manera única y cómo eso es una ventaja evolutiva.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Regulación Emocional" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Heart className="w-7 h-7 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Regulación Emocional</h3>
                <p className="text-foreground/70 text-sm">Aprende técnicas de Meditación Ascendente para regularte sin suprimir tu intensidad emocional.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Poder de Influencia" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Zap className="w-7 h-7 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Poder de Influencia</h3>
                <p className="text-foreground/70 text-sm">Transforma tu empatía en influencia estratégica y liderazgo coherente sin manipulación.</p>
              </Card>

              <Card className="p-6 border-border/50 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Abundancia Integral" className="w-full h-40 object-cover rounded-xl mb-4" />
                <Users className="w-7 h-7 text-accent mb-3" />
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/7LVaTB946Ea3vuuyshqpV9/cerebro_femenino_iconica-eWv2fqdc6cQPCiqFSrAytu.webp"
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
            8 Módulos + 4 Masterclasses en Vivo
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { num: "1-2", title: "La Biología de tu Poder", desc: "Diferencias neurobiológicas y el súper olfato femenino" },
              { num: "3-4", title: "Regulación y Metaconsciencia", desc: "Gestiona la alta sensibilidad sin agotamiento" },
              { num: "5-6", title: "Arquitectura de la Abundancia", desc: "Redefinición del éxito desde la perspectiva femenina" },
              { num: "7-8", title: "Liderazgo y Relaciones", desc: "Influencia positiva y coherencia en tus vínculos" },
            ].map((module, i) => (
              <div key={i} className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition">
                <div className="text-sm font-semibold text-accent mb-2">Módulos {module.num}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-foreground/70 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-background rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">Incluye:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-foreground/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                Diario de Metaconsciencia (30 días)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                Meditaciones Ascendentes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                Auditoría de Abundancia Integral
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                Acceso de por vida
              </li>
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
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
            </div>
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" alt="Mujer transformada" className="w-full h-52 object-cover rounded-2xl shadow-md" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" alt="Mujer empoderada" className="w-full h-52 object-cover rounded-2xl shadow-md mt-8" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Mujer abundante" className="w-full h-52 object-cover rounded-2xl shadow-md -mt-4" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" alt="Mujer consciente" className="w-full h-52 object-cover rounded-2xl shadow-md mt-4" />
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
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80"
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
              Su enfoque integra el rigor científico con la profundidad espiritual, enseñando a las mujeres a reconocer y activar sus habilidades neurobiológicas innatas desde un lugar de consciencia y coherencia.
            </p>

            <div className="inline-block px-6 py-3 bg-background rounded-lg border border-border">
              <p className="text-sm text-foreground/60">
                Creadora del Método Ascendant y la Meditación Ascendente
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              ¿Estás lista para integrar tu poder?
            </h2>

            <p className="text-lg text-foreground/70 mb-12" style={{ fontFamily: "'Lora', serif" }}>
              Comienza con la Masterclass gratuita y descubre la neurobiología de tu intuición. Luego, únete al programa completo de 8 semanas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-8"
                onClick={() => handleOpenModal("masterclass")}
              >
                Acceder a Masterclass Gratuita
              </Button>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-base h-12 px-8"
                onClick={() => handleOpenModal("course")}
              >
                Inscribirse al Curso Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Instituto Ascendant</h3>
                <p className="text-sm text-foreground/60">Crecimiento de la Consciencia Creadora</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#curso" className="hover:text-foreground transition">Sobre el Curso</a></li>
                  <li><a href="#modulos" className="hover:text-foreground transition">Módulos</a></li>
                  <li><a href="#beneficios" className="hover:text-foreground transition">Beneficios</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
                <p className="text-sm text-foreground/60">www.clarimental.com</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
              <p>© 2026 Claribel Puga. Instituto Ascendant. Todos los derechos reservados.</p>
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
