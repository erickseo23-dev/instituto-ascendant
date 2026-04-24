import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Link, useRoute } from "wouter";

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

const blogArticles: Record<string, any> = {
  "meditacion-ascendente-transformacion": {
    title: "Meditación Ascendente: El Camino hacia la Transformación Interior",
    author: "Claribel Puga",
    date: "15 de Marzo, 2026",
    category: "Meditación",
    readTime: "8 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/meditation-serene-FELtjRjaPc4bRfa7oVdbH6.webp",
    content: `
      <h2>¿Qué es la Meditación Ascendente?</h2>
      <p>La Meditación Ascendente es una práctica revolucionaria desarrollada por Claribel Puga que combina técnicas ancestrales de meditación con la comprensión moderna de la consciencia. A diferencia de otras prácticas meditativas, la Meditación Ascendente no busca vaciar la mente, sino elevar la vibración de tu consciencia.</p>

      <h2>Las Tres Fases de la Ascensión</h2>
      <p>La práctica se divide en tres fases fundamentales:</p>
      <ul>
        <li><strong>Fase Intrínseca:</strong> Conocimiento profundo de ti mismo a través de la introspección guiada.</li>
        <li><strong>Fase Extrínseca:</strong> Expansión de tu consciencia hacia la conexión con otros y el universo.</li>
        <li><strong>Fase Holística:</strong> Integración total de tu ser en armonía con la realidad universal.</li>
      </ul>

      <h2>Beneficios Transformadores</h2>
      <p>Los practicantes de Meditación Ascendente reportan:</p>
      <ul>
        <li>Mayor claridad mental y enfoque</li>
        <li>Reducción del estrés y la ansiedad</li>
        <li>Conexión más profunda con su propósito de vida</li>
        <li>Mejora en relaciones personales</li>
        <li>Acceso a estados de consciencia elevados</li>
        <li>Sanación emocional y energética</li>
      </ul>

      <h2>Cómo Comenzar tu Práctica</h2>
      <p>No necesitas experiencia previa en meditación. La Meditación Ascendente está diseñada para ser accesible a todos, independientemente de tu nivel. Lo importante es la intención y la consistencia.</p>
      <p>Comienza con sesiones cortas de 10-15 minutos diarias y ve aumentando gradualmente. La app Ascendente incluye meditaciones guiadas para todos los niveles.</p>
    `
  },
  "ks-healing-sanacion-energetica": {
    title: "KS Healing: La Energía Crística para tu Sanación",
    author: "YOHEV",
    date: "12 de Marzo, 2026",
    category: "Sanación",
    readTime: "10 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/ks-healing-energy-TE6wGscHTrZUdsz64eNFPv.webp",
    content: `
      <h2>¿Qué es KS Healing Systems?</h2>
      <p>KS Healing Systems es un sistema revolucionario de sanación energética que utiliza la Energía Crística para transformar la vida de las personas. Desarrollado por YOHEV, este sistema combina conocimiento ancestral con comprensión moderna de la energía y la consciencia.</p>

      <h2>La Energía Crística: Definición y Propósito</h2>
      <p>La Energía Crística es la energía universal de amor, compasión y transformación. No es religiosa, sino espiritual y universal. Esta energía tiene el poder de sanar, transformar y elevar la vibración de cualquier ser viviente.</p>

      <h2>Cómo Funciona KS Healing</h2>
      <p>El sistema trabaja en tres niveles:</p>
      <ul>
        <li><strong>Nivel Físico:</strong> Sanación de dolencias corporales y desequilibrios energéticos.</li>
        <li><strong>Nivel Emocional:</strong> Liberación de traumas, miedos y patrones limitantes.</li>
        <li><strong>Nivel Espiritual:</strong> Reconexión con tu verdadera naturaleza y propósito divino.</li>
      </ul>

      <h2>Aplicaciones Prácticas</h2>
      <p>KS Healing puede ser utilizado para:</p>
      <ul>
        <li>Sanar relaciones rotas</li>
        <li>Superar traumas del pasado</li>
        <li>Aumentar tu energía vital</li>
        <li>Mejorar tu salud física</li>
        <li>Encontrar paz interior</li>
        <li>Conectar con tu propósito de vida</li>
      </ul>

      <h2>Certificación en KS Healing</h2>
      <p>Si deseas aprender a trabajar con esta energía y ayudar a otros, ofrecemos certificaciones internacionales en diferentes niveles. Cada nivel profundiza tu comprensión y capacidad de sanar.</p>
    `
  },
  "consciencia-creadora-poder-pensamiento": {
    title: "Consciencia Creadora: El Poder de tu Pensamiento",
    author: "Instituto Ascendant",
    date: "8 de Marzo, 2026",
    category: "Consciencia",
    readTime: "7 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/consciousness-expansion-TfNgYcwhQyUbi4T2Bwmhdr.webp",
    content: `
      <h2>El Principio Fundamental: Tu Consciencia Crea tu Realidad</h2>
      <p>Uno de los descubrimientos más importantes de la ciencia moderna es que la consciencia del observador afecta la realidad observada. Esto significa que tu pensamiento, tus creencias y tu nivel de consciencia literalmente crean tu experiencia de la vida.</p>

      <h2>¿Cómo Funciona la Manifestación?</h2>
      <p>La manifestación no es magia. Es un proceso natural que ocurre cuando alineas tu consciencia con lo que deseas. El proceso tiene tres pasos:</p>
      <ol>
        <li><strong>Intención Clara:</strong> Saber exactamente qué deseas.</li>
        <li><strong>Creencia Profunda:</strong> Creer que es posible y que lo mereces.</li>
        <li><strong>Acción Alineada:</strong> Tomar acciones que reflejen tu intención.</li>
      </ol>

      <h2>Elevando tu Nivel de Consciencia</h2>
      <p>Tu nivel de consciencia determina qué es posible para ti. A mayor consciencia, mayores posibilidades. Puedes elevar tu consciencia a través de:</p>
      <ul>
        <li>Meditación regular</li>
        <li>Educación continua</li>
        <li>Práctica de la presencia</li>
        <li>Sanación de traumas</li>
        <li>Conexión espiritual</li>
      </ul>

      <h2>Transformando tu Vida Hoy</h2>
      <p>No necesitas esperar a mañana para comenzar. Hoy mismo puedes:</p>
      <ul>
        <li>Observar tus patrones de pensamiento</li>
        <li>Cambiar creencias limitantes</li>
        <li>Establecer intenciones claras</li>
        <li>Tomar acciones alineadas</li>
      </ul>
      <p>Tu vida es el resultado de tu consciencia. Cambia tu consciencia, cambia tu vida.</p>
    `
  }
};

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug as string;
  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-semibold text-[#2D2D2D] mb-4">Artículo no encontrado</h1>
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-[#C4963C] font-semibold hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Volver al Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-[#C4963C] font-semibold mb-6 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> Volver al Blog
              </a>
            </Link>
            <span className="inline-block px-3 py-1 bg-[#C4963C] text-white text-xs font-semibold rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2D2D2D] mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#2D2D2D]/60 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} de lectura
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div
              className="prose prose-lg max-w-none text-[#2D2D2D]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimatedSection>

          {/* Share */}
          <AnimatedSection className="mt-12 pt-8 border-t border-[#E8E4DF]" delay={0.2}>
            <div className="flex items-center justify-between">
              <p className="text-[#2D2D2D]/70">¿Te gustó este artículo?</p>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-lg bg-[#C4963C]/10 text-[#C4963C] hover:bg-[#C4963C]/20 transition-colors">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-12 p-8 bg-gradient-to-r from-[#C4963C]/10 to-[#C4963C]/5 rounded-xl" delay={0.3}>
            <h3 className="font-serif text-2xl font-semibold text-[#2D2D2D] mb-3">
              Profundiza tu Transformación
            </h3>
            <p className="text-[#2D2D2D]/70 mb-5">
              Accede a meditaciones guiadas, cursos completos y una comunidad de transformación en la app Ascendente.
            </p>
            <a
              href="/recursos-gratuitos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all"
            >
              Explorar Recursos Gratuitos
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
