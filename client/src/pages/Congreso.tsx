import { useEffect, useState } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// WhatsApp
const WHATSAPP_URL = "https://wa.me/5215515944964?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%205to%20congreso%20Ascendant";

// CDN URLs — imágenes reales del PDF (congresos anteriores)
const IMG_PORTADA    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-portada_0c278206.jpg";
const IMG_ACTIVIDADES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-actividades_63de6650.jpg";
const IMG_CONVIVENCIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-convivencia_a7cfa9ed.jpg";

// CDN URLs — Cirque du Soleil JOYÀ
const JOYA_LOGO    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/joya-logo_47674760.jpg";
const JOYA_VENUE   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/joya-venue_bde65075.jpg";
const JOYA_DINNER  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/joya-dinner_2b503dbf.jpg";
const JOYA_VIDEO   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/WhatsAppVideo2026-06-04at06.11.14_b1b3e14a.mp4";

// CDN URLs — imágenes reales del hotel Dreams Sapphire
const HOTEL_IMGS = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-aerial-view_616c529c.jpg",   alt: "Vista aérea del resort y la playa" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-infinity-pool_6643dba7.jpg", alt: "Alberca infinity con vista al mar Caribe" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-main-pool_f0d01e0d.jpg",     alt: "Alberca principal con gazebo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-pool-palapas_a825e8e5.jpg", alt: "Alberca con palapas tropicales" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-aerial-ocean_2b56e43a.jpg",           alt: "Vista aérea del resort frente al océano" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-aerial-full_12417a7f.jpg",  alt: "Vista panorámica completa del resort" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-waterslides_86603f0a.jpg",  alt: "Toboganes acuáticos del parque acuático" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-slides-pool_e79fce76.jpg",  alt: "Área de toboganes y alberca" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/hotel-pool-loungers_d42da9ad.jpg",alt: "Camastros flotantes en la alberca" },
];

// WhatsApp SVG icon
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Lightbox component
function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light z-10 w-10 h-10 flex items-center justify-center"
        onClick={onClose}
        aria-label="Cerrar"
      >✕</button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-['Montserrat',sans-serif] tracking-widest">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-2 sm:left-6 text-white/60 hover:text-white text-4xl font-light z-10 w-12 h-12 flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >‹</button>

      {/* Image */}
      <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[80vh] object-contain mx-auto"
        />
        <p className="text-center text-white/50 text-sm mt-3 font-['Montserrat',sans-serif]">{images[index].alt}</p>
      </div>

      {/* Next */}
      <button
        className="absolute right-2 sm:right-6 text-white/60 hover:text-white text-4xl font-light z-10 w-12 h-12 flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
      >›</button>
    </div>
  );
}

// Clickable image component
function ClickableImg({ src, alt, className, style, onClick }: {
  src: string; alt: string; className?: string; style?: React.CSSProperties;
  onClick: () => void;
}) {
  return (
    <div
      className="relative overflow-hidden cursor-zoom-in group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver imagen: ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-500 group-hover:scale-105`}
        style={style}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Congreso() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // All lightbox-able images: hotel gallery + activity images
  const allLightboxImages = [...HOTEL_IMGS,
    { src: IMG_ACTIVIDADES, alt: "Actividades de congresos anteriores" },
    { src: IMG_CONVIVENCIA, alt: "Evento de convivencia sorpresa" },
  ];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex(i => i !== null ? (i - 1 + allLightboxImages.length) % allLightboxImages.length : 0);
  const nextImg = () => setLightboxIndex(i => i !== null ? (i + 1) % allLightboxImages.length : 0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white font-['Cormorant_Garamond',serif]">

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allLightboxImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <Link href="/" className="text-white font-bold text-base sm:text-xl tracking-widest uppercase font-['Montserrat',sans-serif] shrink-0">
            Instituto Ascendant
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#c9a84c] text-[#0a0a12] px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors whitespace-nowrap"
          >
            <WaIcon size={15} />
            <span className="hidden xs:inline">Quiero Información</span>
            <span className="xs:hidden">Info</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IMG_PORTADA})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/70 via-[#0a0a12]/50 to-[#0a0a12]" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c]/60 px-4 sm:px-5 py-2 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] font-['Montserrat',sans-serif]">
              Instituto Ascendant · I3C
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          </div>

          <p className="text-[#c9a84c] text-sm sm:text-lg md:text-xl uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 font-['Montserrat',sans-serif] font-light">
            5to Congreso Internacional
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-3 sm:mb-4 tracking-tight">
            TIEMPO
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 sm:mb-8 tracking-tight text-[#c9a84c]">
            DE FE
          </h1>
          <p className="text-white/70 text-xs sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12 font-['Montserrat',sans-serif]">
            Para el Crecimiento de la Consciencia Creadora
          </p>

          {/* Fecha y lugar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <div className="text-center">
              <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Fecha</p>
              <p className="text-white text-base sm:text-lg font-semibold font-['Montserrat',sans-serif]">28 Nov – 2 Dic, 2026</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Sede</p>
              <p className="text-white text-base sm:text-lg font-semibold font-['Montserrat',sans-serif]">Dreams Sapphire Resort & Spa</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Destino</p>
              <p className="text-white text-base sm:text-lg font-semibold font-['Montserrat',sans-serif]">Cancún, México</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a0a12] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
          >
            <WaIcon size={18} />
            Quiero Información
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c9a84c]" />
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 sm:mb-6 font-['Montserrat',sans-serif]">Bienvenida</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 leading-tight">
            Cinco años reuniendo consciencias extraordinarias
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed font-['Cormorant_Garamond',serif] italic">
            "Nos complace darles la bienvenida a la quinta edición de nuestro Congreso Internacional Ascendant, un evento diseñado para crear nuevas experiencias, integrar nuevo aprendizaje y aportar más herramientas para nuestra transformación y evolución, donde se reúnen personas extraordinarias de diferentes países en un entorno excepcional."
          </p>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <div className="h-px w-10 sm:w-16 bg-[#c9a84c]/40" />
            <p className="text-[#c9a84c] text-xs sm:text-sm font-['Montserrat',sans-serif] uppercase tracking-widest text-center">Dra. Claribel Puga & Dr. Erick Gurrola (YOHEV)</p>
            <div className="h-px w-10 sm:w-16 bg-[#c9a84c]/40" />
          </div>
        </div>
      </section>

      {/* PONENTES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Ponentes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">Quiénes te guiarán</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c9a84c]/40 transition-colors">
              <div className="w-12 h-1 bg-[#c9a84c] mb-5 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Dra. Claribel Puga</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-3 sm:mb-4 font-['Montserrat',sans-serif]">Fundadora del Instituto Ascendant</p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Maestra en neurociencias aplicadas a la espiritualidad y creadora del Método Ascendant y la Meditación Ascendente®. Su trabajo integra rigor pedagógico, comprensión emocional profunda y una visión clara del desarrollo de la consciencia.
              </p>
            </div>
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c9a84c]/40 transition-colors">
              <div className="w-12 h-1 bg-[#c9a84c] mb-5 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Dr. Erick Gurrola — YOHEV</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-3 sm:mb-4 font-['Montserrat',sans-serif]">Creador del Sistema KS Healing</p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Creador y director del Sistema KS Healing Systems. Aporta profundidad espiritual, marcos simbólicos avanzados y enseñanzas de consciencia expandida que complementan la estructura pedagógica del instituto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINO Y SEDE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 font-['Montserrat',sans-serif]">El Destino</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Cancún, México<br />
                <span className="text-white/50 text-2xl sm:text-3xl">2026</span>
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {[
                  { icon: "✈", title: "Conectividad Global", desc: "Aeropuerto internacional con vuelos directos desde más de 80 ciudades del mundo, a solo 20 minutos del resort." },
                  { icon: "🌊", title: "Paraíso Natural", desc: "Playas de arena blanca, aguas turquesas del Caribe y clima perfecto durante toda la estancia." },
                  { icon: "★", title: "Infraestructura de Clase Mundial", desc: "Resort de lujo con tecnología de punta, salones de conferencias y todas las amenidades para una experiencia completa." },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#c9a84c] text-xs">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm sm:text-base">{item.title}</p>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ClickableImg
                src={HOTEL_IMGS[0].src}
                alt={HOTEL_IMGS[0].alt}
                className="w-full object-cover"
                style={{ maxHeight: "480px" }}
                onClick={() => openLightbox(0)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a12] to-transparent h-24 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <p className="text-white font-bold text-base sm:text-lg">Dreams Sapphire Resort & Spa</p>
                <p className="text-[#c9a84c] text-xs font-['Montserrat',sans-serif] uppercase tracking-widest">La Sede Oficial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DEL HOTEL */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Dreams Sapphire Resort & Spa</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Un oasis de lujo</h2>
          <p className="text-white/60 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Elegancia contemporánea con la belleza natural del Caribe. Haz clic en las imágenes para verlas en detalle.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {[
              { num: "500+", label: "Habitaciones de Lujo", desc: "Suites con vista al mar" },
              { num: "3", label: "Salones Principales", desc: "Hasta 800 personas" },
              { num: "15K m²", label: "de Instalaciones", desc: "Espacios versátiles" },
              { num: "7", label: "Restaurantes Gourmet", desc: "Cocina de autor incluida" },
            ].map(item => (
              <div key={item.num} className="border border-white/10 p-4 sm:p-6 text-center hover:border-[#c9a84c]/40 transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-[#c9a84c] mb-1 sm:mb-2">{item.num}</p>
                <p className="font-semibold mb-1 text-xs sm:text-sm uppercase tracking-wide font-['Montserrat',sans-serif]">{item.label}</p>
                <p className="text-white/50 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Photo gallery — masonry-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {/* Large image top-left */}
            <div className="col-span-2 sm:col-span-2 row-span-2">
              <ClickableImg
                src={HOTEL_IMGS[2].src}
                alt={HOTEL_IMGS[2].alt}
                className="w-full h-48 sm:h-72 object-cover"
                onClick={() => openLightbox(2)}
              />
            </div>
            {/* Small images right */}
            <ClickableImg
              src={HOTEL_IMGS[1].src}
              alt={HOTEL_IMGS[1].alt}
              className="w-full h-24 sm:h-[138px] object-cover"
              onClick={() => openLightbox(1)}
            />
            <ClickableImg
              src={HOTEL_IMGS[3].src}
              alt={HOTEL_IMGS[3].alt}
              className="w-full h-24 sm:h-[138px] object-cover"
              onClick={() => openLightbox(3)}
            />
            {/* Bottom row */}
            <ClickableImg
              src={HOTEL_IMGS[4].src}
              alt={HOTEL_IMGS[4].alt}
              className="w-full h-32 sm:h-44 object-cover"
              onClick={() => openLightbox(4)}
            />
            <ClickableImg
              src={HOTEL_IMGS[6].src}
              alt={HOTEL_IMGS[6].alt}
              className="w-full h-32 sm:h-44 object-cover"
              onClick={() => openLightbox(6)}
            />
            <ClickableImg
              src={HOTEL_IMGS[8].src}
              alt={HOTEL_IMGS[8].alt}
              className="w-full h-32 sm:h-44 object-cover"
              onClick={() => openLightbox(8)}
            />
          </div>

          {/* Amenities */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6 sm:mt-8">
            {[
              { icon: "🏊", title: "Piscinas Espectaculares", desc: "Múltiples albercas infinity con vistas al mar Caribe y áreas lounge exclusivas" },
              { icon: "🌿", title: "Spa & Wellness Center", desc: "Tratamientos de relajación y áreas de bienestar completas con descuentos especiales" },
              { icon: "🚗", title: "Traslados Incluidos", desc: "Traslados aeropuerto-hotel-aeropuerto incluidos en tu inversión" },
            ].map(item => (
              <div key={item.title} className="bg-white/5 p-5 sm:p-6 hover:bg-white/10 transition-colors">
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">{item.icon}</span>
                <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Agenda</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">Cronograma de Actividades</h2>
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[#c9a84c]/20 hidden sm:block" />
            <div className="space-y-6 sm:space-y-8">
              {[
                { num: "1", fecha: "28 de Noviembre — Sábado", titulo: "Cóctel de Bienvenida", desc: "Recepción exclusiva frente al mar. El primer encuentro de la comunidad en un ambiente íntimo y festivo." },
                { num: "2", fecha: "29 y 30 de Noviembre — Domingo y Lunes", titulo: "Conferencias de Alto Nivel", desc: "Dos días intensivos con la Dra. Claribel Puga y el Dr. Erick Gurrola (YOHEV). Aprendizaje profundo, integración de herramientas y expansión de consciencia." },
                { num: "3", fecha: "1 de Diciembre — Martes", titulo: "Noche Cirque du Soleil JOYÀ", desc: "Una noche de magia, acrobacia y gastronomía de autor. Viviremos juntos la experiencia Show & Dinner del Cirque du Soleil JOYÀ en VidantaWorld Riviera Maya: pre-show musical en vivo, cena gourmet de tres tiempos con champagne, y la función completa desde butacas exclusivas." },
                { num: "4", fecha: "2 de Diciembre — Miércoles", titulo: "Desayuno Grupal de Clausura", desc: "Convivencia de agradecimiento y cierre del congreso. Un espacio para integrar lo vivido y celebrar el camino recorrido." },
              ].map(item => (
                <div key={item.num} className="flex gap-4 sm:gap-8 items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border border-[#c9a84c] flex items-center justify-center flex-shrink-0 bg-[#0a0a12] relative z-10">
                    <span className="text-[#c9a84c] text-xl sm:text-2xl font-bold">{item.num}</span>
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8 border-b border-white/10">
                    <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 sm:mb-2 font-['Montserrat',sans-serif]">{item.fecha}</p>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{item.titulo}</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN JOYÀ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f1a] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 font-['Montserrat',sans-serif]">
              Experiencia Exclusiva · 1 de Diciembre
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Noche Cirque du Soleil
            </h2>
            {/* JOYÀ logo image */}
            <div className="flex justify-center my-6 sm:my-8">
              <img
                src={JOYA_LOGO}
                alt="Cirque du Soleil JOYÀ — Show · Dinner · Experience"
                className="w-56 sm:w-72 md:w-80 object-contain"
              />
            </div>
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Una noche que va más allá del espectáculo. Arte, acrobacia, gastronomía y magia reunidos en un solo lugar, solo en VidantaWorld Riviera Maya.
            </p>
          </div>

          {/* Video + descripción */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Video */}
            <div className="relative aspect-video bg-black rounded-none overflow-hidden border border-white/10">
              <video
                src={JOYA_VIDEO}
                controls
                playsInline
                poster={JOYA_VENUE}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Descripción */}
            <div className="space-y-5 sm:space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                JOYÀ es la única experiencia permanente del Cirque du Soleil en México. Combina acrobacias de clase mundial, una puesta en escena íntima y una cena gourmet de autor en un teatro diseñado especialmente para esta producción.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Como parte del 5to Congreso Ascendant, viviremos esta noche juntos: desde el pre-show musical en vivo hasta el último acto, rodeados de la comunidad que hemos construido a lo largo de cinco años.
              </p>
              {/* Qué incluye */}
              <div className="space-y-3 pt-2">
                {[
                  { icon: "🎭", text: "Acceso prioritario al teatro" },
                  { icon: "🎶", text: "Pre-show musical en vivo" },
                  { icon: "🥂", text: "Media botella de champagne por persona" },
                  { icon: "🍽️", text: "Cena gourmet de tres tiempos" },
                  { icon: "🎪", text: "Función completa desde butacas exclusivas" },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-white/80 text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imágenes venue + dinner */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative overflow-hidden group">
              <img
                src={JOYA_VENUE}
                alt="Teatro JOYÀ — VidantaWorld Riviera Maya"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: "280px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm sm:text-base font-['Montserrat',sans-serif]">El Teatro</p>
                <p className="text-[#c9a84c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">VidantaWorld · Riviera Maya</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={JOYA_DINNER}
                alt="Experiencia Show & Cena JOYÀ"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: "280px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm sm:text-base font-['Montserrat',sans-serif]">Experiencia Show & Cena</p>
                <p className="text-[#c9a84c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">Gastronomía de autor</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-10 sm:mt-14 border border-[#c9a84c]/30 p-6 sm:p-10 text-center">
            <p className="text-white/80 text-base sm:text-xl md:text-2xl italic leading-relaxed font-['Cormorant_Garamond',serif] max-w-3xl mx-auto">
              "Una noche donde el arte y la consciencia se encuentran. Porque celebrar el camino recorrido también es parte de la transformación."
            </p>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mt-4 font-['Montserrat',sans-serif]">— 5to Congreso Internacional Ascendant</p>
          </div>
        </div>
      </section>

      {/* GALERÍA DE ACTIVIDADES PREVIAS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Congresos Anteriores</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">Lo que vivimos juntos</h2>
          <p className="text-white/60 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Aprendizaje, integración, convivencia, transformación y mucho más. Así se vive cada edición del Congreso Internacional Ascendant.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <ClickableImg
              src={IMG_ACTIVIDADES}
              alt="Actividades de congresos anteriores"
              className="w-full object-cover"
              style={{ height: "280px" }}
              onClick={() => openLightbox(HOTEL_IMGS.length)}
            />
            <ClickableImg
              src={IMG_CONVIVENCIA}
              alt="Evento de convivencia sorpresa"
              className="w-full object-cover"
              style={{ height: "280px" }}
              onClick={() => openLightbox(HOTEL_IMGS.length + 1)}
            />
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Tu Inversión Incluye</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">Todo lo que necesitas para vivir esta experiencia</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🏨", title: "Hospedaje All-Inclusive", desc: "5 días, 4 noches con todas las comidas, bebidas premium y amenidades del resort." },
              { icon: "🎓", title: "Acceso Total al Congreso", desc: "Entrada a todas las conferencias, talleres y actividades de integración." },
              { icon: "🎁", title: "Kit de Bienvenida", desc: "Material exclusivo del 5to Congreso Internacional Ascendant." },
              { icon: "✨", title: "Experiencias Exclusivas", desc: "Cóctel de bienvenida, evento sorpresa, desayuno de clausura y actividades especiales." },
              { icon: "🚌", title: "Traslados Incluidos", desc: "Traslados aeropuerto-hotel-aeropuerto para tu comodidad." },
              { icon: "🤝", title: "Convivencias Extraordinarias", desc: "Conexión real con una comunidad de personas comprometidas con su crecimiento." },
            ].map(item => (
              <div key={item.title} className="border border-white/10 p-5 sm:p-6 hover:border-[#c9a84c]/40 transition-colors group">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mb-12 sm:mb-16" />
          <p className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 sm:mb-6 font-['Montserrat',sans-serif]">5to Congreso Internacional Ascendant</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Es Tiempo de Fe
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
            Cancún, México · Dreams Sapphire Resort & Spa<br />
            28 de Noviembre – 2 de Diciembre, 2026
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a0a12] px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
          >
            <WaIcon size={20} />
            Quiero Información
          </a>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mt-12 sm:mt-16" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
