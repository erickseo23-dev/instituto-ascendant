import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Users, Clock } from "lucide-react";
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

const videos = [
  {
    id: 1,
    title: "Introducción a la Meditación Ascendente",
    description: "Claribel Puga te introduce a los fundamentos de la Meditación Ascendente",
    views: "12.5K",
    duration: "18:45",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "KS Healing: Sanación Energética Práctica",
    description: "YOHEV demuestra técnicas prácticas de KS Healing para tu transformación",
    views: "8.3K",
    duration: "25:30",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Consciencia Creadora: Manifestando tu Realidad",
    description: "Descubre cómo tu consciencia crea tu realidad y cómo manifestar lo que deseas",
    views: "15.2K",
    duration: "22:15",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Meditación Guiada: Presencia Consciente",
    description: "Una meditación guiada de 20 minutos para conectar con tu presencia",
    views: "9.8K",
    duration: "20:00",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Genética Sagrada: Tu Herencia Divina",
    description: "Explora tu herencia genética sagrada y cómo activarla",
    views: "6.5K",
    duration: "19:45",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "DART: Transformación Arquetipal Profunda",
    description: "Introducción a la terapia DART para transformación profunda",
    views: "7.2K",
    duration: "23:30",
    youtubeId: "dQw4w9WgXcQ"
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Header />
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2D2D2D] to-[#2D2D2D]/95 mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Biblioteca de Videos
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Accede a meditaciones guiadas, enseñanzas y demostraciones prácticas de nuestros maestros.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <AnimatedSection key={video.id} delay={idx * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative h-40 bg-[#2D2D2D] overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#C4963C] flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-[#2D2D2D] mb-2 line-clamp-2 group-hover:text-[#C4963C] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-[#2D2D2D]/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center text-xs text-[#2D2D2D]/50">
                      <Users className="w-3.5 h-3.5 mr-1" />
                      {video.views} visualizaciones
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 text-sm"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Ver en YouTube
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#C4963C]/10 to-[#C4963C]/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-semibold text-[#2D2D2D] mb-4">
              Más contenido en nuestra app
            </h2>
            <p className="text-[#2D2D2D]/70 mb-8 max-w-2xl mx-auto">
              Descarga la app Ascendente para acceder a meditaciones exclusivas, cursos completos y una comunidad de transformación.
            </p>
            <a
              href="/recursos-gratuitos"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Descargar App Ascendente
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
