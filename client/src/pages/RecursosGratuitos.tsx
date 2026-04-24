import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Play, BookOpen, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const freeResources = [
  {
    id: 1,
    title: "Taller KS Healing y La Consciencia Crística",
    description: "Introducción completa a la Energía Crística y sus aplicaciones prácticas",
    type: "Taller",
    duration: "2 horas",
    value: "$49",
    icon: Zap,
    link: "https://kshealing.com/taller-ks-healing"
  },
  {
    id: 2,
    title: "Meditación Presencia Consciente",
    description: "Meditación guiada de 20 minutos para conectar con tu presencia",
    type: "Meditación",
    duration: "20 min",
    value: "$19",
    icon: Play,
    link: "#"
  },
  {
    id: 3,
    title: "Guía Meditación Ascendente",
    description: "Ebook completo con técnicas y prácticas de Meditación Ascendente",
    type: "Guía",
    duration: "50 páginas",
    value: "$29",
    icon: BookOpen,
    link: "#"
  },
  {
    id: 4,
    title: "Webinar Consciencia Creadora",
    description: "Sesión en vivo sobre cómo tu consciencia crea tu realidad",
    type: "Webinar",
    duration: "90 min",
    value: "$39",
    icon: Play,
    link: "#"
  }
];

const categories = ["Todos", "Talleres", "Meditaciones", "Guías", "Webinars"];

export default function RecursosGratuitos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredResources = selectedCategory === "Todos" 
    ? freeResources 
    : freeResources.filter(r => r.type === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Header />
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2D2D2D] to-[#2D2D2D]/95 mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#C4963C]/20 rounded-full mb-6">
              <span className="text-[#C4963C] font-semibold text-sm">100% Gratuito</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Recursos Gratuitos
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Accede a talleres, meditaciones, guías y webinars completamente gratis. Tu primer paso hacia la transformación comienza aquí.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Free Resources */}
      <section className="py-16 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-[#2D2D2D] mb-6">
              ¿Por Qué Ofrecemos Recursos Gratuitos?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Acceso Democrático", desc: "Creemos que la transformación debe ser accesible para todos, sin importar su situación económica." },
              { title: "Embudo de Valor", desc: "Queremos que experimentes la calidad de nuestro trabajo antes de invertir en programas más profundos." },
              { title: "Comunidad Global", desc: "Cada persona que se transforma ayuda a elevar la consciencia colectiva del planeta." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <h3 className="font-semibold text-[#2D2D2D] mb-3">{item.title}</h3>
                  <p className="text-[#2D2D2D]/60">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#C4963C] text-white shadow-md"
                    : "bg-white text-[#2D2D2D] border border-[#E8E4DF] hover:border-[#C4963C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <AnimatedSection key={resource.id} delay={idx * 0.1}>
                  <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8E4DF] hover:border-[#C4963C]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#C4963C]" />
                      </div>
                      <span className="px-3 py-1 bg-[#C4963C]/10 text-[#C4963C] text-xs font-semibold rounded-full">
                        {resource.type}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg text-[#2D2D2D] mb-2 group-hover:text-[#C4963C] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-[#2D2D2D]/60 text-sm mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[#2D2D2D]/50 mb-6">
                      <span>{resource.duration}</span>
                      <span className="line-through">{resource.value}</span>
                    </div>

                    <a
                      href={resource.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 group-hover:gap-3"
                    >
                      <Download className="w-4 h-4" />
                      Acceder Gratis
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl font-semibold text-[#2D2D2D] mb-6">
              Tu Camino de Transformación
            </h2>
            <p className="text-[#2D2D2D]/70 max-w-2xl mx-auto">
              Cada recurso gratuito es el primer paso hacia programas más profundos y transformadores.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Explora", desc: "Accede a recursos gratuitos" },
              { step: "2", title: "Experimenta", desc: "Practica las técnicas" },
              { step: "3", title: "Profundiza", desc: "Accede a programas completos" },
              { step: "4", title: "Transforma", desc: "Vive la transformación" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C4963C] text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">{item.title}</h3>
                  <p className="text-[#2D2D2D]/60 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C4963C]/10 to-[#C4963C]/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-semibold text-[#2D2D2D] mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-[#2D2D2D]/70 mb-8 max-w-2xl mx-auto">
              Descarga la app Ascendente para acceder a todos nuestros recursos gratuitos y más.
            </p>
            <a
              href="/#app-download"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Descargar App Ascendente <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
