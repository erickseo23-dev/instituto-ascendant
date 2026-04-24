import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import StickyBanner from "@/components/StickyBanner";
import ContactForm from "@/components/ContactForm";
import AppDownloadSection from "@/components/AppDownloadSection";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Clock,
  Youtube,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Heart,
  Sparkles,
  GraduationCap,
  Globe,
  Quote,
  Play,
  ChevronRight,
  Zap,
  Compass,
  Shield,
} from "lucide-react";

/* ============================================================
   DESIGN v2: "Luminosidad Narrativa" — Instituto Ascendant
   RESTRUCTURED: Action-first layout — courses up top, context below
   Palette: Crema #FAF8F5 | Carbón #2D2D2D | Dorado #C4963C | Verde #5A7A5A | Violeta #7B6B8A
   Fonts: Cormorant Garamond (títulos) + DM Sans (cuerpo)
   ============================================================ */

// CDN Image URLs
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/hero-sunrise-c6KkMBDSVVA9ymvrAmBYPA.webp",
  naturePath: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/nature-path-RJZfU3Umb5HdB4BLGsPJpk.webp",
  meditation: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/meditation-light-WyKSnxpRGEQ4xpkxZUAYWW.webp",
  abstractWarmth: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/abstract-warmth-5yipqRFz6GqttDTZJUGgWH.webp",
  // Unsplash images for course cards & sections
  ksHealing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/ks-healing-energy-TE6wGscHTrZUdsz64eNFPv.webp",
  meditacion: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/meditation-serene-FELtjRjaPc4bRfa7oVdbH6.webp",
  consciencia: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/consciousness-expansion-TfNgYcwhQyUbi4T2Bwmhdr.webp",
  certificacion: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  tallerGratuito: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  dart: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/dart-transformation-TF27VyAxEhnWSiaDP7NJGD.webp",
  retreatYohev: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/sacred-retreat-yohev-m2UcDLktMF8ENyk65NX68A.webp",
  communityCircle: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  mujerSuperpoderosa: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  // Founder photos
  claribel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/claribel_v3_cf0792df.png",
  yohev: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/yohev_v3_74292756.png",
};

/* ─── ANIMATION HELPERS ─── */
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
}

function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-full object-cover scale-110" />
    </div>
  );
}

/* ─── HEADER / NAV ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const programas = [
    { label: "Mujer Superpoderosa", href: "/mujer-superpoderosa" },
    { label: "Meditación Ascendente®", href: "/meditacion-ascendente" },
    { label: "KS Healing Systems®", href: "https://kshealing.com" },
    { label: "DART", href: "https://kshealing.com/dart" },
    { label: "Genética Sagrada", href: "https://kshealing.com/genetica-sagrada" },
  ];

  const tienda = [
    { label: "Todos", href: "/tienda" },
    { label: "Cursos", href: "/tienda?categoria=cursos" },
    { label: "Libros", href: "/tienda?categoria=libros" },
    { label: "Meditaciones", href: "/tienda?categoria=meditaciones" },
    { label: "Retiros", href: "/tienda?categoria=retiros" },
    { label: "Sesiones Personalizadas", href: "/tienda?categoria=sesiones" },
  ];

  const navLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Recursos Gratuitos", href: "/recursos-gratuitos" },
    { label: "Videos", href: "/videos" },
    { label: "Sobre Nosotros", href: "/sobre" },
  ];

  return (
    <header
      className={`fixed top-[72px] md:top-[88px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_1px_0_#C4963C20]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#C4963C] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-[#2D2D2D]" : "text-white"}`}>
                Instituto Ascendant
              </span>
              <span className={`text-[9px] lg:text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 ${scrolled ? "text-[#C4963C]" : "text-white/70"}`}>
                Crecimiento de la Consciencia
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Programas Dropdown */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md flex items-center gap-1 ${
                  scrolled ? "text-[#2D2D2D]" : "text-white/90"
                } hover:bg-[#C4963C10]`}
              >
                Programas
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {programas.map((prog) => (
                  <a
                    key={prog.href}
                    href={prog.href}
                    target={prog.href.startsWith("http") ? "_blank" : undefined}
                    className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] transition-colors"
                  >
                    {prog.label}
                  </a>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md hover:bg-[#C4963C10] ${
                  scrolled ? "text-[#2D2D2D]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Tienda Dropdown */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md flex items-center gap-1 ${
                  scrolled ? "text-[#2D2D2D]" : "text-white/90"
                } hover:bg-[#C4963C10]`}
              >
                Tienda
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {tienda.map((item) => (
                  <a key={item.href} href={item.href} className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#eventos"
              className="ml-4 px-5 py-2.5 bg-[#C4963C] text-white text-[13px] font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Inscribirme
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-[#2D2D2D]" : "text-white"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#FAF8F5] border-t border-[#C4963C20] shadow-lg"
        >
          <nav className="px-4 py-4 space-y-1">
            {/* Mobile Programas */}
            <button
              onClick={() => setOpenDropdown(openDropdown === "programas" ? null : "programas")}
              className="w-full text-left px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors flex items-center justify-between"
            >
              Programas
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "programas" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "programas" && (
              <div className="pl-4 space-y-1">
                {programas.map((prog) => (
                  <a
                    key={prog.href}
                    href={prog.href}
                    onClick={() => setMobileOpen(false)}
                    target={prog.href.startsWith("http") ? "_blank" : undefined}
                    className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] rounded-md"
                  >
                    {prog.label}
                  </a>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors">
                {link.label}
              </a>
            ))}

            {/* Mobile Tienda */}
            <button
              onClick={() => setOpenDropdown(openDropdown === "tienda" ? null : "tienda")}
              className="w-full text-left px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors flex items-center justify-between"
            >
              Tienda
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "tienda" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "tienda" && (
              <div className="pl-4 space-y-1">
                {tienda.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] rounded-md"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            <a href="#eventos" onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-[#C4963C] text-white text-center font-semibold rounded-md">
              Inscribirme
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

/* ─── SECTION 1: HERO — More compact, more impactful ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative pt-[72px] md:pt-[88px] h-[85vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={IMAGES.hero} alt="Amanecer dorado sobre montañas" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <p className="text-[#FFD700] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Instituto Ascendant
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] mb-5 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
            Despierta Tu Consciencia,{" "}
            <em className="text-[#FFD700] not-italic drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">Transforma</em> Tu Vida
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Desarrollo espiritual consciente, sanación energética y crecimiento personal con más de una década de experiencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#programas"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C4963C] text-white font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Explorar Programas <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/recursos-gratuitos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-medium rounded-md border border-white/30 hover:bg-white/25 transition-all duration-300 text-sm sm:text-base">
              Recursos Gratuitos
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </motion.div>
    </section>
  );
}

/* ─── SECTION 2: CREDIBILITY BAR ─── */
function CredibilityBar() {
  const stats = [
    { number: "3,053", label: "Alumnos formados", icon: Users },
    { number: "33", label: "Cursos y programas", icon: BookOpen },
    { number: "33", label: "Maestros facilitadores", icon: GraduationCap },
    { number: "15+", label: "Países alcanzados", icon: Globe },
  ];

  return (
    <section className="relative z-10 bg-[#2D2D2D]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} className="py-5 lg:py-6 px-4 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-[#C4963C]" />
                <span className="font-serif text-2xl lg:text-3xl font-bold text-white">{stat.number}</span>
              </div>
              <p className="text-white/60 text-xs lg:text-sm">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: FEATURED PROGRAMS — Immediately actionable ─── */
function FeaturedPrograms() {
  const featuredCourses = [
    {
      tag: "Empoderamiento Femenino",
      tagColor: "bg-[#7B6B8A]",
      title: "Mujer Superpoderosa",
      subtitle: "Descubre la biología de tu poder — neurociencia + consciencia espiritual",
      date: "Próximamente",
      format: "Online · 4 semanas",
      image: IMAGES.mujerSuperpoderosa,
      cta: "Más información",
      ctaStyle: "bg-[#7B6B8A] hover:bg-[#6B5B7A]",
    },
    {
      tag: "Taller Gratuito",
      tagColor: "bg-[#5A7A5A]",
      title: "Taller KS Healing y La Consciencia Crística",
      subtitle: "Descubre los fundamentos de la sanación energética KS",
      date: "15 de marzo, 2026",
      format: "Online via Zoom",
      image: IMAGES.tallerGratuito,
      cta: "Reservar lugar gratuito",
      ctaStyle: "bg-[#5A7A5A] hover:bg-[#4A6A4A]",
    },
    {
      tag: "Certificación",
      tagColor: "bg-[#C4963C]",
      title: "KS Healing Systems®",
      subtitle: "Formación completa para convertirte en practicante o facilitador certificado",
      date: "22 de marzo, 2026",
      format: "Online + Presencial · 12 semanas",
      image: IMAGES.ksHealing,
      cta: "Más información",
      ctaStyle: "bg-[#C4963C] hover:bg-[#B08530]",
    },
    {
      tag: "Curso Insignia",
      tagColor: "bg-[#7B6B8A]",
      title: "Meditación Ascendente® Nivel 1",
      subtitle: "Método progresivo de expansión de consciencia y regulación emocional",
      date: "Próximamente",
      format: "Online · 8 semanas",
      image: IMAGES.meditacion,
      cta: "Lista de espera",
      ctaStyle: "bg-[#7B6B8A] hover:bg-[#6B5B7A]",
    },
    {
      tag: "Terapia Profunda",
      tagColor: "bg-[#C4963C]",
      title: "DART — Renovación Arquetípica",
      subtitle: "Transformación profunda de patrones internos y heridas emocionales",
      date: "Próximamente",
      format: "Online · 6 semanas",
      image: IMAGES.dart,
      cta: "Más información",
      ctaStyle: "bg-[#C4963C] hover:bg-[#B08530]",
    },
    {
      tag: "Desarrollo Personal",
      tagColor: "bg-[#5A7A5A]",
      title: "Desarrollo de la Consciencia",
      subtitle: "Cursos para expandir la percepción y sanar el alma",
      date: "Próximamente",
      format: "Online · 4-8 semanas",
      image: IMAGES.consciencia,
      cta: "Explorar cursos",
      ctaStyle: "bg-[#5A7A5A] hover:bg-[#4A6A4A]",
    },
    {
      tag: "Retiro Sagrado",
      tagColor: "bg-[#7B6B8A]",
      title: "Retiro Sagrado con YOHEV",
      subtitle: "Talleres inmersivos online que transforman tu vida — abierto a todas las personas",
      date: "5 de abril, 2026",
      format: "Online · 4 horas",
      image: IMAGES.retreatYohev,
      cta: "Reservar lugar",
      ctaStyle: "bg-[#7B6B8A] hover:bg-[#6B5B7A]",
    },
  ];

  return (
    <section id="programas" className="py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header — left-aligned, editorial */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Comienza Ahora</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight">
              Programas Destacados
            </h2>
          </div>
          <a href="#categorias" className="inline-flex items-center gap-1.5 text-[#C4963C] font-medium text-sm hover:underline underline-offset-4 transition-all group">
            Ver todas las categorías <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>

        {/* Mobile: Horizontal carousel with scroll-snap and peek effect */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scroll-smooth" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-5 w-max">
            {featuredCourses.map((course, i) => (
              <div key={course.title} className="flex-shrink-0 w-[75vw] sm:w-[80vw]" style={{ scrollSnapAlign: 'start' }}>
                <div className="group relative h-full min-h-[300px] rounded-xl overflow-hidden cursor-pointer">
                  <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className={`inline-block w-fit px-2.5 py-0.5 ${course.tagColor} text-white text-[10px] font-semibold rounded-full mb-3 uppercase tracking-wider`}>
                      {course.tag}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-white mb-1.5 leading-tight">{course.title}</h3>
                    <p className="text-white/70 text-xs mb-3 line-clamp-2">{course.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {course.date}</span>
                      <a href={course.title === "Taller KS Healing y La Consciencia Crística" ? "https://kshealing.com/taller-ks-healing" : course.title === "Meditación Ascendente® Nivel 1" ? "/meditacion-ascendente" : course.title === "Mujer Superpoderosa" ? "/mujer-superpoderosa" : "#"} className={`inline-flex items-center gap-1.5 px-4 py-2 ${course.ctaStyle} text-white font-semibold rounded-md text-xs transition-all duration-300`}>
                        {course.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 6-column grid for all courses */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 lg:gap-6">
          {featuredCourses.map((course, i) => (
            <AnimatedSection key={course.title} delay={i * 0.1} className="flex-1">
              <div className="group relative h-full min-h-[300px] rounded-xl overflow-hidden cursor-pointer">
                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                  <span className={`inline-block w-fit px-2.5 py-0.5 ${course.tagColor} text-white text-[10px] font-semibold rounded-full mb-3 uppercase tracking-wider`}>
                    {course.tag}
                  </span>
                  <h3 className="font-serif text-lg lg:text-xl font-semibold text-white mb-1.5 leading-tight">{course.title}</h3>
                  <p className="text-white/70 text-xs lg:text-sm mb-3 line-clamp-2">{course.subtitle}</p>
                  <div className="flex flex-col gap-2 text-white/50 text-xs mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {course.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.format}</span>
                  </div>
                  <a href={course.title === "Taller KS Healing y La Consciencia Crística" ? "https://kshealing.com/taller-ks-healing" : course.title === "Meditación Ascendente® Nivel 1" ? "/meditacion-ascendente" : course.title === "Mujer Superpoderosa" ? "/mujer-superpoderosa" : "#"} className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 ${course.ctaStyle} text-white font-semibold rounded-md text-xs transition-all duration-300`}>
                    {course.cta} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  );
}

/* ─── SECTION 4: CATEGORIES — Asymmetric editorial layout ─── */
function CategoriesSection() {
  const categories = [
    {
      title: "KS Healing Systems®",
      by: "por YOHEV",
      description: "Sistema de sanación energética que integra intención, presencia y estructura guiada para acompañar procesos internos, emocionales y de consciencia.",
      image: IMAGES.ksHealing,
      accent: "#C4963C",
      courses: "8 programas disponibles",
    },
    {
      title: "Meditación Ascendente®",
      by: "por Claribel + YOHEV",
      description: "Método progresivo de expansión de consciencia que trabaja por capas, guiando hacia estados de presencia, claridad interna y regulación emocional.",
      image: IMAGES.meditacion,
      accent: "#5A7A5A",
      courses: "6 niveles progresivos",
    },
    {
      title: "Desarrollo de la Consciencia",
      by: "Cursos varios",
      description: "Programas de crecimiento personal que integran neurociencias aplicadas, trabajo emocional y marcos de comprensión para la vida cotidiana.",
      image: IMAGES.consciencia,
      accent: "#7B6B8A",
      courses: "12 cursos disponibles",
    },
    {
      title: "Certificaciones Internacionales",
      by: "Formación de facilitadores",
      description: "Programas de certificación que preparan para acompañar a otros en su proceso de crecimiento, con estructura, supervisión y responsabilidad.",
      image: IMAGES.certificacion,
      accent: "#C4963C",
      courses: "4 certificaciones",
    },
  ];

  return (
    <section id="categorias" className="py-16 lg:py-24 bg-[#F3EFE9]">
      {/* Diagonal top divider */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="mb-12 lg:mb-16">
          <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Áreas de Formación</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight max-w-2xl">
            Explora nuestras áreas de conocimiento
          </h2>
        </AnimatedSection>

        {/* Alternating layout — image left/right */}
        <div className="space-y-8 lg:space-y-0">
          {categories.map((cat, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={cat.title} delay={i * 0.1} className="lg:mb-6">
                <div className={`group grid lg:grid-cols-12 gap-0 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500 ${isEven ? "" : ""}`}>
                  {/* Image side */}
                  <div className={`lg:col-span-5 relative h-56 lg:h-auto lg:min-h-[300px] overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                    <img src={cat.image} alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    {/* Accent stripe */}
                    <div className={`absolute ${isEven ? "right-0" : "left-0"} top-0 bottom-0 w-1`} style={{ backgroundColor: cat.accent }} />
                  </div>
                  {/* Content side */}
                  <div className={`lg:col-span-7 p-6 lg:p-10 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }} />
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: cat.accent }}>{cat.by}</span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#2D2D2D] mb-3 leading-tight">{cat.title}</h3>
                    <p className="text-[#2D2D2D]/70 text-sm lg:text-base leading-relaxed mb-5 max-w-lg">{cat.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a href={cat.title === "Meditación Ascendente®" ? "/meditacion-ascendente" : "/programas"} className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                        style={{ backgroundColor: cat.accent }}>
                        Explorar programas <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-[#2D2D2D]/50 text-xs flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> {cat.courses}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: ABOUT THE INSTITUTE — Brief, visual ─── */
function InstitutoSection() {
  return (
    <section id="instituto" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background: abstract warmth image with overlay */}
      <div className="absolute inset-0">
        <img src={IMAGES.abstractWarmth} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#FAF8F5]/92" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image collage side */}
          <AnimatedSection className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/science-spirituality-bLoWVPGGSz7wV237B49rhZ.webp" alt="Comunidad de aprendizaje: ciencia y espiritualidad" className="w-full h-[350px] lg:h-[450px] object-cover" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-lg shadow-lg p-5 max-w-[220px] border-l-4 border-[#C4963C]">
                <p className="font-serif text-lg font-semibold text-[#2D2D2D] mb-1">+10 años</p>
                <p className="text-[#2D2D2D]/60 text-xs leading-relaxed">de experiencia integrando ciencia y espiritualidad consciente</p>
              </div>
              {/* Decorative dot pattern */}
              <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20" style={{
                backgroundImage: "radial-gradient(#C4963C 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px"
              }} />
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={0.15} className="lg:col-span-7">
            <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Sobre el Instituto</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#2D2D2D] leading-tight mb-6">
              Donde la ciencia y la espiritualidad{" "}
              <em className="text-[#5A7A5A] not-italic">se encuentran</em>
            </h2>
            <p className="text-[#2D2D2D]/75 text-base lg:text-lg leading-relaxed mb-5">
              El Instituto Ascendant integra neurociencias aplicadas, sanación energética y desarrollo de la consciencia en un método progresivo y estructurado. No ofrecemos promesas extraordinarias — acompañamos procesos reales de transformación personal con claridad, profundidad y responsabilidad.
            </p>
            <p className="text-[#2D2D2D]/65 text-sm leading-relaxed mb-8">
              Cada programa está diseñado como parte de un recorrido progresivo — desde la regulación emocional básica hasta la exploración de marcos avanzados de consciencia — siempre con acompañamiento y estructura.
            </p>

            {/* Three pillars */}
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: Heart, title: "Claridad", desc: "Sin misterio ni dependencia" },
                { icon: Compass, title: "Profundidad", desc: "Procesos reales y sostenidos" },
                { icon: Shield, title: "Responsabilidad", desc: "Acompañamiento con estructura" },
              ].map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C4963C10] flex items-center justify-center shrink-0">
                    <p.icon className="w-4 h-4 text-[#C4963C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D2D2D] text-sm mb-0.5">{p.title}</p>
                    <p className="text-[#2D2D2D]/55 text-xs">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: FOUNDERS ─── */
function FoundersSection() {
  const founders = [
    {
      name: "Claribel Puga",
      role: "Fundadora del Instituto Ascendant",
      bio: "Maestra en neurociencias aplicadas a la espiritualidad, creadora del Método Ascendant y de la Meditación Ascendente®. Su enfoque integra rigor mental, comprensión emocional y espiritualidad consciente. Con más de 218,000 suscriptores en YouTube, Claribel es la voz principal del ecosistema Ascendant.",
      accent: "#C4963C",
      tags: ["Método Ascendant", "Meditación Ascendente®", "Neurociencias"],
      photo: IMAGES.claribel,
    },
    {
      name: "Dr. Erick Gurrola (YOHEV)",
      role: "Director de KS Healing Systems®",
      bio: "Médico cirujano y maestro de marcos espirituales avanzados. Creador de KS Healing Systems® y del método DART de renovación arquetípica. Su enseñanza aporta profundidad simbólica, estructura energética y visión de consciencia expandida al ecosistema Ascendant.",
      accent: "#5A7A5A",
      tags: ["KS Healing Systems®", "DART", "Consciencia Expandida"],
      photo: IMAGES.yohev,
    },
  ];

  return (
    <section id="fundadores" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Quiénes Somos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight">Los fundadores</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder, i) => (
            <AnimatedSection key={founder.name} delay={i * 0.15}>
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#E8E4DF]">
                {/* Founder photo */}
                <div className="relative h-56 lg:h-72 bg-gradient-to-br from-[#F3EFE9] to-[#E8E4DF] overflow-hidden">
                  <img src={founder.photo} alt={founder.name} className="w-full h-full object-contain object-center" />
                  {/* Accent bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: founder.accent }} />
                </div>
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-[#2D2D2D] mb-1">{founder.name}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: founder.accent }}>{founder.role}</p>
                  <p className="text-[#2D2D2D]/70 text-sm leading-relaxed mb-5">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-[#F3EFE9] text-[#2D2D2D]/70">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: TESTIMONIALS — Masonry-style ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      text: "El Método Ascendant me dio herramientas reales para entender mis emociones y transformar patrones que llevaba años repitiendo. No es magia — es trabajo consciente con guía clara.",
      name: "María Elena R.",
      location: "Ciudad de México",
      program: "Meditación Ascendente®",
    },
    {
      text: "La certificación en KS Healing cambió mi forma de entender la sanación. La estructura del programa y el acompañamiento de YOHEV me dieron la confianza para facilitar procesos con responsabilidad.",
      name: "Carlos A. Mendoza",
      location: "Bogotá, Colombia",
      program: "Certificación KS Healing",
    },
    {
      text: "Lo que más valoro es la honestidad. No te prometen iluminación instantánea — te acompañan en un proceso real, profundo y a tu ritmo.",
      name: "Ana Lucía Torres",
      location: "Buenos Aires, Argentina",
      program: "Desarrollo de la Consciencia",
    },
    {
      text: "Después de probar muchos enfoques espirituales, encontré algo diferente: claridad sin perder profundidad. El equilibrio entre ciencia y espiritualidad es exactamente lo que necesitaba.",
      name: "Roberto Sánchez P.",
      location: "Madrid, España",
      program: "Meditación Ascendente®",
    },
    {
      text: "El programa de DART me ayudó a identificar patrones arquetípicos que no sabía que tenía. El proceso fue intenso pero siempre me sentí acompañada y segura.",
      name: "Valentina Herrera",
      location: "Santiago, Chile",
      program: "DART",
    },
    {
      text: "La comunidad del Instituto es increíble. Personas de muchos países, todas comprometidas con su crecimiento. Los talleres gratuitos ya tienen un valor enorme.",
      name: "Diego Morales",
      location: "Lima, Perú",
      program: "Talleres Introductorios",
    },
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-[#F3EFE9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Voces de Nuestra Comunidad</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight">
              Lo que dicen nuestros alumnos
            </h2>
          </div>
          <p className="text-[#2D2D2D]/60 text-sm max-w-sm">Experiencias reales de personas que han recorrido este camino de consciencia.</p>
        </AnimatedSection>

        {/* Desktop: Masonry grid */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="break-inside-avoid bg-white rounded-xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8E4DF]">
                <Quote className="w-8 h-8 text-[#C4963C]/20 mb-3" />
                <p className="text-[#2D2D2D]/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C4963C15] flex items-center justify-center">
                    <span className="font-serif text-sm font-semibold text-[#C4963C]">{t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D2D2D] text-sm">{t.name}</p>
                    <p className="text-[#2D2D2D]/50 text-xs">{t.location}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#E8E4DF]">
                  <span className="text-[#5A7A5A] text-xs font-medium">{t.program}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: Horizontal carousel with peek effect */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4" style={{ width: 'fit-content' }}>
            {testimonials.map((t) => (
              <div key={t.name} className="flex-shrink-0 snap-start" style={{ width: 'calc(100vw - 32px - 32px)' }}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DF] h-full">
                  <Quote className="w-8 h-8 text-[#C4963C]/20 mb-3" />
                  <p className="text-[#2D2D2D]/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C4963C15] flex items-center justify-center">
                      <span className="font-serif text-sm font-semibold text-[#C4963C]">{t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] text-sm">{t.name}</p>
                      <p className="text-[#2D2D2D]/50 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#E8E4DF]">
                    <span className="text-[#5A7A5A] text-xs font-medium">{t.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: UPCOMING EVENTS ─── */
function EventsSection() {
  const events = [
    {
      day: "19",
      month: "ABR",
      year: "2026",
      tag: "Taller Gratuito",
      tagColor: "bg-[#C4963C]",
      title: "Taller Online Gratuito: KS Healing y la Consciencia Crística - Latinoamérica",
      desc: "Una experiencia vivencial de 3 horas para conectar con la Energía KS, despertar tu sensibilidad energética y preparar tu campo para la transformación. Impartido por YOHEV.",
      meta: ["Online en vivo", "Impartido por YOHEV"],
      cta: "Más Información",
      accent: "#C4963C",
      link: "https://kshealing.com",
    },
    {
      day: "19",
      month: "ABR",
      year: "2026",
      tag: "Taller Gratuito",
      tagColor: "bg-[#C4963C]",
      title: "Taller Online Gratuito: KS Healing y la Consciencia Crística - Europa",
      desc: "Una experiencia vivencial de 3 horas para conectar con la Energía KS, despertar tu sensibilidad energética y preparar tu campo para la transformación. Impartido por YOHEV.",
      meta: ["Online en vivo", "Impartido por YOHEV"],
      cta: "Más Información",
      accent: "#C4963C",
      link: "https://kshealing.com",
    },
    {
      day: "26",
      month: "ABR",
      year: "2026",
      tag: "Certificación",
      tagColor: "bg-[#5A7A5A]",
      title: "Certificación Internacional en KS Healing Nivel Básico",
      desc: "Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos (26 Abr - 10 May).",
      meta: ["Online en vivo", "3 módulos intensivos"],
      cta: "Más Información",
      accent: "#5A7A5A",
      link: "https://kshealing.com",
    },
    {
      day: "15",
      month: "MAY",
      year: "2026",
      tag: "Retiro Sagrado",
      tagColor: "bg-[#7B6B8A]",
      title: "Retiro Sagrado: Transformación Profunda con YOHEV",
      desc: "Una experiencia inmersiva de transformación profunda. Retiro presencial donde experimentarás transmisiones intensivas de Energía KS en comunidad.",
      meta: ["Presencial", "Múltiples días"],
      cta: "Más Información",
      accent: "#7B6B8A",
      link: "https://kshealing.com",
    },
  ];

  return (
    <section id="eventos" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Agenda</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight">Próximos eventos</h2>
          </div>
          <p className="text-[#2D2D2D]/60 text-sm max-w-sm">Talleres, certificaciones y retiros diseñados para cada etapa de tu recorrido.</p>
        </AnimatedSection>

        {/* Desktop: Grid layout */}
        <div className="hidden md:block space-y-5">
          {events.map((event, i) => (
            <AnimatedSection key={event.title} delay={i * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-5 lg:gap-8 items-center bg-white rounded-xl p-5 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-500 border border-[#E8E4DF] hover:border-transparent"
                style={{ borderLeftWidth: "4px", borderLeftColor: event.accent }}>
                {/* Date block */}
                <div className="flex lg:flex-col items-center lg:items-center gap-3 lg:gap-0 lg:w-20 lg:text-center">
                  <span className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: event.accent }}>{event.day}</span>
                  <div className="flex lg:flex-col items-center gap-1">
                    <span className="text-[#2D2D2D]/70 text-xs font-semibold uppercase">{event.month}</span>
                    <span className="text-[#2D2D2D]/40 text-xs">{event.year}</span>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <span className={`inline-block px-2.5 py-0.5 ${event.tagColor} text-white text-[10px] font-semibold rounded-full mb-2 uppercase tracking-wider`}>
                    {event.tag}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#2D2D2D] mb-2 leading-tight">{event.title}</h3>
                  <p className="text-[#2D2D2D]/65 text-sm leading-relaxed mb-3 max-w-2xl">{event.desc}</p>
                  <div className="flex flex-wrap gap-3 text-[#2D2D2D]/50 text-xs">
                    {event.meta.map((m) => (
                      <span key={m} className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {m}</span>
                    ))}
                  </div>
                </div>
                {/* CTA */}
                <div className="lg:self-center">
                  <a href={event.link || "#"} className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md text-sm transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                    style={{ backgroundColor: event.accent }}>
                    {event.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: Horizontal carousel with peek effect */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4" style={{ width: 'fit-content' }}>
            {events.map((event) => (
              <div key={event.title} className="flex-shrink-0 snap-start" style={{ width: 'calc(100vw - 32px - 32px)' }}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DF] h-full flex flex-col" style={{ borderLeftWidth: "4px", borderLeftColor: event.accent }}>
                  {/* Date block */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif text-2xl font-bold" style={{ color: event.accent }}>{event.day}</span>
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-[#2D2D2D]/70 text-xs font-semibold uppercase">{event.month}</span>
                      <span className="text-[#2D2D2D]/40 text-xs">{event.year}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <span className={`inline-block px-2.5 py-0.5 ${event.tagColor} text-white text-[10px] font-semibold rounded-full mb-2 uppercase tracking-wider w-fit`}>
                    {event.tag}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#2D2D2D] mb-2 leading-tight">{event.title}</h3>
                  <p className="text-[#2D2D2D]/65 text-sm leading-relaxed mb-3 flex-grow">{event.desc}</p>
                  <div className="flex flex-col gap-2 text-[#2D2D2D]/50 text-xs mb-4">
                    {event.meta.map((m) => (
                      <span key={m} className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {m}</span>
                    ))}
                  </div>
                  {/* CTA */}
                  <a href={event.link || "#"} className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md text-sm transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap w-full justify-center" style={{ backgroundColor: event.accent }}>
                    {event.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: CTA + NEWSLETTER ─── */
function CTASection() {
  return (
    <section id="contacto" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.naturePath} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2D2D2D]/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <AnimatedSection>
          <div className="w-12 h-12 rounded-full bg-[#C4963C] flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
            Tu camino de consciencia{" "}
            <em className="text-[#C4963C] not-italic">comienza hoy</em>
          </h2>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Únete a nuestra comunidad y recibe meditaciones guiadas, contenido exclusivo y acceso anticipado a nuestros próximos eventos y programas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-5 py-3.5 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C4963C] focus:ring-1 focus:ring-[#C4963C] transition-all text-sm"
            />
            <button className="px-7 py-3.5 bg-[#C4963C] text-white font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-lg text-sm whitespace-nowrap">
              Unirme Ahora
            </button>
          </div>
          <p className="text-white/40 text-xs">Sin spam. Solo contenido de valor. Puedes cancelar en cualquier momento.</p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {[
              { icon: Youtube, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-[#C4963C] hover:bg-white/20 transition-all duration-300">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
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
              {[Youtube, Instagram, Facebook].map((Icon, i) => (
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
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C4963C]" /> +52 (55) 1234-5678</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C4963C]" /> Ciudad de México, México</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2026 Instituto Ascendant para el Crecimiento de la Consciencia Creadora. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white/60 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white/60 transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <StickyBanner />
      <Header />
      <HeroSection />
      <CredibilityBar />
      <FeaturedPrograms />
      <CategoriesSection />
      <InstitutoSection />
      <FoundersSection />
      <TestimonialsSection />
      <EventsSection />
      <AppDownloadSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
