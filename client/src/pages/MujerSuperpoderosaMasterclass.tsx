import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import TransformationChart from "@/components/TransformationChart";
import BuyButton from "@/components/BuyButton";

export default function Masterclass() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      toast.success(`¡Bienvenida ${name}! Revisa tu email para los detalles de la Masterclass`);
      setEmail("");
      setName("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fffaf5" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b" style={{ backgroundColor: "rgba(255, 250, 245, 0.95)", borderColor: "#f0e8f5" }}>
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-serif" style={{ color: "#5a4a6a" }}>
            Mujer Superpoderosa
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="transition" style={{ color: "#8a7a9a" }}>
              Inicio
            </a>
            <a href="#masterclass" className="transition" style={{ color: "#8a7a9a" }}>
              Masterclass
            </a>
            <a href="#testimonios" className="transition" style={{ color: "#8a7a9a" }}>
              Testimonios
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/manus-storage/woman_hero_section_909ae252.png')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 250, 245, 0.2)" }} />
        
        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight" style={{ color: "#5a4a6a" }}>
            Desata Tu Potencial
          </h1>
          <p className="text-xl mb-8 font-light" style={{ color: "#7a6a8a" }}>
            Una Masterclass exclusiva donde descubrirás cómo tu cerebro femenino es tu mayor superpoder
          </p>
          <p className="text-lg mb-12 font-serif italic" style={{ color: "#d4749f" }}>
            Crea. Inspira. Impacta.
          </p>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce mt-12">
            <ChevronDown size={32} style={{ color: "#d4749f" }} />
          </div>
        </div>
      </section>

      {/* About Masterclass */}
      <section className="py-20" style={{ backgroundColor: "#f5f0fa" }}>
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6" style={{ color: "#5a4a6a" }}>
                ¿Qué aprenderás?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#7a6a8a" }}>
                En esta Masterclass exclusiva, Claribel Puga te guiará a través de los descubrimientos neurobiológicos más recientes sobre el cerebro femenino.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: "#7a6a8a" }}>
                Descubrirás cómo tu hipocampo más desarrollado, tu amígdala más activa y tu cuerpo calloso más robusto no son debilidades, sino superpoderes estratégicos que puedes activar conscientemente.
              </p>
              <p className="leading-relaxed" style={{ color: "#7a6a8a" }}>
                Esta no es una sesión de motivación vacía. Es educación profunda basada en neurociencia, diseñada para transformar cómo te ves a ti misma.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-square rounded-2xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url('/manus-storage/woman_neurobiologia_4819bb7b.png')`,
                }}
              />
              <div
                className="aspect-square rounded-2xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url('/manus-storage/woman_empoderamiento_aea0eafe.png')`,
                }}
              />
              <div
                className="aspect-square rounded-2xl bg-cover bg-center shadow-lg col-span-2"
                style={{
                  backgroundImage: `url('/manus-storage/woman_intuicion_4e0c8e23.png')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section - Colorful */}
      <section className="py-20" style={{ backgroundColor: "#fffaf5" }}>
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-serif mb-12 text-center" style={{ color: "#5a4a6a" }}>
            Temas que cubriremos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neurobiología Femenina",
                description: "Comprende las diferencias neurobiológicas que te hacen única y poderosa",
                bgColor: "#ffe8f0",
                titleColor: "#d4749f",
                borderColor: "#ff9fc7",
                image: "/manus-storage/woman_latina_1_c04b6df7.png",
              },
              {
                title: "Poder Emocional",
                description: "Transforma tu intensidad emocional en tu mayor fortaleza estratégica",
                bgColor: "#f0e8ff",
                titleColor: "#a87fd4",
                borderColor: "#d4a5ff",
                image: "/manus-storage/woman_latina_2_83861724.png",
              },
              {
                title: "Intuición Estratégica",
                description: "Activa tu intuición como herramienta de toma de decisiones consciente",
                bgColor: "#e8f5ff",
                titleColor: "#7ab8d4",
                borderColor: "#a5d4ff",
                image: "/manus-storage/woman_latina_3_0a266a1f.png",
              },
              {
                title: "Abundancia Femenina",
                description: "Crea desde la plenitud, no desde la necesidad",
                bgColor: "#e8ffe8",
                titleColor: "#7ab87a",
                borderColor: "#a5ffa5",
                image: "/manus-storage/woman_latina_1_c04b6df7.png",
              },
              {
                title: "Influencia Consciente",
                description: "Domina el arte de influir sin manipular",
                bgColor: "#fff8e8",
                titleColor: "#d4b87a",
                borderColor: "#ffd9a5",
                image: "/manus-storage/woman_latina_2_83861724.png",
              },
              {
                title: "Relaciones Saludables",
                description: "Construye vínculos desde el respeto y la reciprocidad",
                bgColor: "#ffe8f5",
                titleColor: "#d474b8",
                borderColor: "#ff9fc7",
                image: "/manus-storage/woman_latina_3_0a266a1f.png",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-md transition-transform hover:scale-105 overflow-hidden"
                style={{
                  backgroundColor: topic.bgColor,
                  borderLeft: `4px solid ${topic.borderColor}`,
                }}
              >
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${topic.image}')`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-3" style={{ color: topic.titleColor }}>
                    {topic.title}
                  </h3>
                  <p style={{ color: "#7a6a8a" }}>
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="masterclass" className="py-20" style={{ backgroundColor: "#f5f0fa" }}>
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4" style={{ color: "#5a4a6a" }}>
              Regístrate Ahora
            </h2>
            <p style={{ color: "#7a6a8a" }}>
              Acceso exclusivo a la Masterclass gratuita. Cupos limitados.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base"
                style={{
                  borderColor: "#d4a5d4",
                  backgroundColor: "#fff",
                }}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
                style={{
                  borderColor: "#d4a5d4",
                  backgroundColor: "#fff",
                }}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base font-medium"
              style={{
                backgroundColor: "#d4749f",
                color: "#fff",
              }}
            >
              {isLoading ? "Registrando..." : "Acceder a la Masterclass"}
            </Button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: "#8a7a9a" }}>
            Recibirás un email con los detalles de acceso en los próximos 5 minutos
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <TransformationChart />
      <TestimonialsSection />

      {/* About Claribel */}
      <section className="py-20" style={{ backgroundColor: "#fffaf5" }}>
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url('/manus-storage/woman_claribel_5af3db72.png')`,
              }}
            />
            
            <div>
              <h2 className="text-4xl font-serif mb-6" style={{ color: "#5a4a6a" }}>
                Sobre Claribel Puga
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#7a6a8a" }}>
                Con más de 15 años de experiencia en desarrollo personal y neurociencia aplicada, Claribel ha acompañado a miles de mujeres a descubrir y activar sus superpoderes innatos.
              </p>
              <p className="leading-relaxed" style={{ color: "#7a6a8a" }}>
                Su enfoque único combina la precisión de la neurociencia con la profundidad de la espiritualidad, creando transformaciones sostenidas y auténticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#f5f0fa" }}>
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif mb-12 text-center" style={{ color: "#5a4a6a" }}>
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuándo es la Masterclass?",
                a: "La Masterclass será en vivo el próximo jueves a las 7 PM (hora de tu zona). También recibirás acceso a la grabación.",
              },
              {
                q: "¿Cuál es el costo?",
                a: "La Masterclass es completamente gratuita. Después, tendrás la opción de acceder al curso completo de 4 semanas.",
              },
              {
                q: "¿Necesito experiencia previa?",
                a: "No. Este programa está diseñado para mujeres de todos los niveles. Solo necesitas estar abierta a aprender.",
              },
              {
                q: "¿Qué recibiré después de registrarme?",
                a: "Recibirás un email con el enlace de acceso, materiales previos, y acceso a la comunidad privada de alumnas.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: i % 2 === 0 ? "#ffe8f0" : "#f0e8ff",
                  borderLeft: `4px solid ${i % 2 === 0 ? "#d4749f" : "#a87fd4"}`,
                }}
              >
                <h3 className="font-serif text-lg mb-3" style={{ color: "#5a4a6a" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "#7a6a8a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Course Section */}
      <section id="curso" className="py-20" style={{ background: "linear-gradient(135deg, #ffe8f0 0%, #f0e8ff 50%, #e8f5ff 100%)" }}>
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-serif mb-4" style={{ color: "#5a4a6a" }}>
            ¿Lista para el Programa Completo?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#7a6a8a" }}>
            4 semanas de transformación profunda con neurociencia, espiritualidad y prácticas concretas.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="text-5xl font-bold mb-2" style={{ color: "#5a4a6a" }}>$297 <span className="text-2xl font-normal" style={{ color: "#a89ab8" }}>USD</span></div>
            <p className="text-sm mb-6" style={{ color: "#a89ab8" }}>Pago único · Acceso por 6 meses</p>
            
            <ul className="text-left space-y-3 mb-8">
              {[
                "4 módulos de contenido pregrabado",
                "4 Masterclasses en vivo con Claribel Puga",
                "Diario de Metaconsciencia (30 días)",
                "Meditaciones y audios de hipnosis",
                "Materiales de apoyo descargables",
                "Acceso por 6 meses al material",
                "Comunidad privada de alumnas",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#7a6a8a" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ backgroundColor: "#ffe8f0", color: "#d4749f" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <BuyButton
              productType="course"
              label="Inscribirme al Curso Completo"
              className="w-full h-14 text-base font-semibold text-white"
            />
            
            <p className="text-xs mt-4" style={{ color: "#a89ab8" }}>
              Pago seguro con Stripe · Tarjeta de crédito o débito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: "#fffaf5", borderColor: "#f0e8f5" }}>
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-serif mb-4" style={{ color: "#5a4a6a" }}>
                Mujer Superpoderosa
              </h4>
              <p style={{ color: "#8a7a9a", fontSize: "0.875rem" }}>
                Descubre la biología de tu poder femenino
              </p>
            </div>
            <div>
              <h4 className="font-serif mb-4" style={{ color: "#5a4a6a" }}>
                Enlaces
              </h4>
              <ul className="space-y-2" style={{ color: "#8a7a9a", fontSize: "0.875rem" }}>
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#masterclass" className="hover:underline">Masterclass</a></li>
                <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif mb-4" style={{ color: "#5a4a6a" }}>
                Redes Sociales
              </h4>
              <ul className="space-y-2" style={{ color: "#8a7a9a", fontSize: "0.875rem" }}>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t" style={{ borderColor: "#f0e8f5", color: "#8a7a9a", fontSize: "0.875rem" }}>
            <p>&copy; 2026 Mujer Superpoderosa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
