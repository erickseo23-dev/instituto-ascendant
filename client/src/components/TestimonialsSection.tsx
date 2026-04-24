import { useState } from "react";
import { Play, Pause, Quote, Star } from "lucide-react";

interface VideoTestimonial {
  id: number;
  name: string;
  title: string;
  videoUrl: string;
  quote: string;
  bgColor: string;
  accentColor: string;
}

interface WrittenTestimonial {
  id: number;
  name: string;
  location: string;
  profession: string;
  quote: string;
  result: string;
  stars: number;
  bgColor: string;
  accentColor: string;
  initial: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "María González",
    title: "Transformación Personal",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/7LVaTB946Ea3vuuyshqpV9/testimonial_1_transformacion.mp4",
    quote: "El curso cambió completamente mi perspectiva sobre mí misma. Ahora entiendo que mi sensibilidad es mi mayor fortaleza.",
    bgColor: "#ffe8f0",
    accentColor: "#d4749f",
  },
  {
    id: 2,
    name: "Laura Martínez",
    title: "Relaciones y Límites",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/7LVaTB946Ea3vuuyshqpV9/testimonial_2_relaciones.mp4",
    quote: "Aprendí a establecer límites saludables y a reconocer mi valor. Mi vida cambió radicalmente.",
    bgColor: "#f0e8ff",
    accentColor: "#a87fd4",
  },
  {
    id: 3,
    name: "Sofía Rodríguez",
    title: "Abundancia y Negocios",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/7LVaTB946Ea3vuuyshqpV9/testimonial_3_abundancia.mp4",
    quote: "Mi intuición se convirtió en mi brújula. Ahora tomo decisiones desde la plenitud, no desde la necesidad.",
    bgColor: "#e8f5ff",
    accentColor: "#7ab8d4",
  },
];

const writtenTestimonials: WrittenTestimonial[] = [
  {
    id: 1,
    name: "Valeria Herrera",
    location: "Ciudad de México, México",
    profession: "Emprendedora",
    quote: "Antes pensaba que ser tan sensible era un defecto. Claribel me ayudó a entender la neurobiología detrás de lo que siento. Hoy uso esa sensibilidad para leer a mis clientes, tomar mejores decisiones y liderar con autenticidad. Mi negocio creció un 40% en tres meses.",
    result: "Crecimiento del 40% en su negocio",
    stars: 5,
    bgColor: "#fff0f5",
    accentColor: "#e8739f",
    initial: "V",
  },
  {
    id: 2,
    name: "Daniela Fuentes",
    location: "Bogotá, Colombia",
    profession: "Psicóloga",
    quote: "Como psicóloga, pensé que ya lo sabía todo sobre las emociones. Pero este curso me dio un marco completamente nuevo. El módulo sobre el súper olfato y la detección genética me dejó sin palabras. Ahora ayudo a mis pacientes desde un nivel mucho más profundo.",
    result: "Nueva perspectiva profesional y personal",
    stars: 5,
    bgColor: "#f5f0ff",
    accentColor: "#9b7fd4",
    initial: "D",
  },
  {
    id: 3,
    name: "Camila Torres",
    location: "Buenos Aires, Argentina",
    profession: "Madre y Diseñadora",
    quote: "Llevaba años sintiéndome agotada de absorber las emociones de todos en casa. El módulo de regulación emocional me dio herramientas concretas. Ahora sé cuándo estoy absorbiendo energía ajena y cómo protegerme sin cerrarme. Mi familia lo nota.",
    result: "Recuperó su energía vital y paz familiar",
    stars: 5,
    bgColor: "#f0fff5",
    accentColor: "#5db88a",
    initial: "C",
  },
  {
    id: 4,
    name: "Andrea Vásquez",
    location: "Santiago, Chile",
    profession: "Ejecutiva de Ventas",
    quote: "El módulo de persuasión femenina transformó mi carrera. Entendí que no necesito imitar el estilo masculino para ser efectiva. Mis neuronas espejo y mi capacidad de leer microexpresiones son ventajas reales. Cerré el mejor trimestre de mi vida.",
    result: "Mejor trimestre de ventas en su carrera",
    stars: 5,
    bgColor: "#fffbf0",
    accentColor: "#d4a84b",
    initial: "A",
  },
  {
    id: 5,
    name: "Isabella Moreno",
    location: "Lima, Perú",
    profession: "Médica",
    quote: "Llegué al curso en un momento de burnout total. La sección sobre la bioquímica del cortisol y cómo las emociones afectan la belleza y la salud me hizo entender por qué me veía y me sentía tan agotada. Hoy tengo rituales de autocuidado que funcionan de verdad.",
    result: "Superó el burnout y recuperó su vitalidad",
    stars: 5,
    bgColor: "#f0f8ff",
    accentColor: "#6baed4",
    initial: "I",
  },
  {
    id: 6,
    name: "Natalia Jiménez",
    location: "Medellín, Colombia",
    profession: "Coach y Mentora",
    quote: "Lo que más me impactó fue el módulo sobre las relaciones con otras mujeres. Tenía patrones de relacionarme que me drenaban sin darme cuenta. Claribel lo explica con tanta claridad y sin juicio. Hoy elijo mis vínculos desde el valor propio, no desde la necesidad.",
    result: "Transformó sus relaciones y círculo social",
    stars: 5,
    bgColor: "#fdf0ff",
    accentColor: "#c47fd4",
    initial: "N",
  },
  {
    id: 7,
    name: "Paola Mendoza",
    location: "Guadalajara, México",
    profession: "Maestra",
    quote: "Nunca imaginé que la neurociencia pudiera explicar por qué siempre supe cosas que luego se confirmaban. Mi intuición no es magia, es biología. Ese cambio de perspectiva me liberó de años de dudar de mí misma. Ahora confío en lo que percibo.",
    result: "Dejó de dudar de su intuición para siempre",
    stars: 5,
    bgColor: "#fff5f0",
    accentColor: "#d4876b",
    initial: "P",
  },
  {
    id: 8,
    name: "Gabriela Reyes",
    location: "Caracas, Venezuela",
    profession: "Artista y Emprendedora",
    quote: "El concepto de abundancia integral me cambió la vida. Yo creía que abundancia era solo dinero. Ahora entiendo que mis relaciones, mi salud, mi creatividad y mi propósito son formas de abundancia que ya tenía y no valoraba. Desde ahí, el dinero también llegó.",
    result: "Redefinió la abundancia y atrajo prosperidad",
    stars: 5,
    bgColor: "#f0fff8",
    accentColor: "#5db8a0",
    initial: "G",
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"videos" | "escritos">("escritos");

  const currentTestimonial = videoTestimonials.find(
    (t) => t.id === selectedTestimonial
  );

  return (
    <section id="testimonios" className="py-20" style={{ backgroundColor: "#fffaf5" }}>
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4" style={{ color: "#5a4a6a" }}>
            Historias de Transformación Real
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7a6a8a" }}>
            Más de 500 mujeres han descubierto el poder de su neurobiología. Estas son algunas de sus historias.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("escritos")}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeTab === "escritos" ? "#c4a0d4" : "#f0e8f5",
                color: activeTab === "escritos" ? "white" : "#7a6a8a",
              }}
            >
              Testimonios Escritos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeTab === "videos" ? "#c4a0d4" : "#f0e8f5",
                color: activeTab === "videos" ? "white" : "#7a6a8a",
              }}
            >
              Testimonios en Video
            </button>
          </div>
        </div>

        {/* Written Testimonials Grid */}
        {activeTab === "escritos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: t.bgColor, border: `1px solid ${t.accentColor}30` }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill={t.accentColor} color={t.accentColor} />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote size={20} className="absolute -top-1 -left-1 opacity-30" style={{ color: t.accentColor }} />
                  <p className="text-sm leading-relaxed pl-5 italic" style={{ color: "#5a4a6a" }}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Result badge */}
                <div
                  className="text-xs font-medium px-3 py-1 rounded-full self-start"
                  style={{ backgroundColor: t.accentColor + "20", color: t.accentColor }}
                >
                  ✓ {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: t.accentColor + "30" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif text-lg flex-shrink-0"
                    style={{ backgroundColor: t.accentColor }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-serif font-medium text-sm" style={{ color: "#5a4a6a" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#8a7a9a" }}>
                      {t.profession} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Testimonials */}
        {activeTab === "videos" && currentTestimonial && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Video */}
            <div className="md:col-span-2">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: currentTestimonial.bgColor }}
              >
                <div className="aspect-video bg-gray-200">
                  <video
                    key={currentTestimonial.id}
                    src={currentTestimonial.videoUrl}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    controls
                    style={{ backgroundColor: currentTestimonial.bgColor }}
                  />
                </div>
                <div className="p-8 text-white" style={{ backgroundColor: currentTestimonial.accentColor }}>
                  <h3 className="text-2xl font-serif mb-2">{currentTestimonial.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{currentTestimonial.title}</p>
                  <p className="text-base leading-relaxed italic">"{currentTestimonial.quote}"</p>
                </div>
              </div>
            </div>

            {/* Video List */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif mb-6" style={{ color: "#5a4a6a" }}>
                Selecciona un Testimonio
              </h3>
              {videoTestimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                  className="w-full p-4 rounded-2xl text-left transition-all"
                  style={{
                    backgroundColor: selectedTestimonial === testimonial.id ? testimonial.bgColor : "#f9f5f0",
                    border: `${selectedTestimonial === testimonial.id ? "2px" : "1px"} solid ${testimonial.accentColor}`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white"
                      style={{ backgroundColor: testimonial.accentColor }}
                    >
                      {selectedTestimonial === testimonial.id ? <Pause size={18} /> : <Play size={18} />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-serif font-medium text-sm" style={{ color: "#5a4a6a" }}>
                        {testimonial.name}
                      </p>
                      <p className="text-xs" style={{ color: "#8a7a9a" }}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Social Proof Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t"
          style={{ borderColor: "#f0e8f5" }}
        >
          {[
            { number: "500+", label: "Mujeres Transformadas" },
            { number: "8", label: "Países de Latinoamérica" },
            { number: "95%", label: "Tasa de Satisfacción" },
            { number: "4.9★", label: "Calificación Promedio" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-serif mb-2" style={{ color: "#d4a5d4" }}>
                {stat.number}
              </p>
              <p className="text-sm" style={{ color: "#7a6a8a" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
