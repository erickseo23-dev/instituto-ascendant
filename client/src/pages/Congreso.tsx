import { useEffect } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// CDN URLs de imágenes reales del PDF
const IMG_PORTADA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-portada_0c278206.jpg";
const IMG_SEDE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-sede_7c2908e3.jpg";
const IMG_ACTIVIDADES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-actividades_63de6650.jpg";
const IMG_CONVIVENCIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/congreso-convivencia_a7cfa9ed.jpg";

export default function Congreso() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white font-['Cormorant_Garamond',serif]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl tracking-widest uppercase font-['Montserrat',sans-serif]">
            Instituto Ascendant
          </Link>
          <a
            href="#inscripcion"
            className="bg-[#c9a84c] text-[#0a0a12] px-6 py-2 text-sm font-bold uppercase tracking-widest font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
          >
            Reservar Lugar
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMG_PORTADA})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/70 via-[#0a0a12]/50 to-[#0a0a12]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#c9a84c]/60 px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] font-['Montserrat',sans-serif]">
              Instituto Ascendant · I3C
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          </div>

          <p className="text-[#c9a84c] text-lg md:text-xl uppercase tracking-[0.4em] mb-4 font-['Montserrat',sans-serif] font-light">
            5to Congreso Internacional
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4 tracking-tight">
            TIEMPO
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 tracking-tight text-[#c9a84c]">
            DE FE
          </h1>
          <p className="text-white/70 text-base md:text-lg uppercase tracking-[0.3em] mb-12 font-['Montserrat',sans-serif]">
            Para el Crecimiento de la Consciencia Creadora
          </p>

          {/* Fecha y lugar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <div className="text-center">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Fecha</p>
              <p className="text-white text-lg font-semibold font-['Montserrat',sans-serif]">28 Nov – 2 Dic, 2026</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Sede</p>
              <p className="text-white text-lg font-semibold font-['Montserrat',sans-serif]">Dreams Sapphire Resort & Spa</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-1 font-['Montserrat',sans-serif]">Destino</p>
              <p className="text-white text-lg font-semibold font-['Montserrat',sans-serif]">Cancún, México</p>
            </div>
          </div>

          <a
            href="#inscripcion"
            className="inline-block bg-[#c9a84c] text-[#0a0a12] px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
          >
            Reservar Mi Lugar
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c9a84c]" />
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-6 font-['Montserrat',sans-serif]">Bienvenida</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Cinco años reuniendo consciencias extraordinarias
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-['Cormorant_Garamond',serif] italic">
            "Nos complace darles la bienvenida a la quinta edición de nuestro Congreso Internacional Ascendant, un evento diseñado para crear nuevas experiencias, integrar nuevo aprendizaje y aportar más herramientas para nuestra transformación y evolución, donde se reúnen personas extraordinarias de diferentes países en un entorno excepcional."
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#c9a84c]/40" />
            <p className="text-[#c9a84c] text-sm font-['Montserrat',sans-serif] uppercase tracking-widest">Dra. Claribel Puga & Dr. Erick Gurrola (YOHEV)</p>
            <div className="h-px w-16 bg-[#c9a84c]/40" />
          </div>
        </div>
      </section>

      {/* PONENTES */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Ponentes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Quiénes te guiarán</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Claribel */}
            <div className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-colors">
              <div className="w-12 h-1 bg-[#c9a84c] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Dra. Claribel Puga</h3>
              <p className="text-[#c9a84c] text-sm uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">Fundadora del Instituto Ascendant</p>
              <p className="text-white/60 leading-relaxed">
                Maestra en neurociencias aplicadas a la espiritualidad y creadora del Método Ascendant y la Meditación Ascendente®. Su trabajo integra rigor pedagógico, comprensión emocional profunda y una visión clara del desarrollo de la consciencia.
              </p>
            </div>
            {/* YOHEV */}
            <div className="border border-white/10 p-8 hover:border-[#c9a84c]/40 transition-colors">
              <div className="w-12 h-1 bg-[#c9a84c] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Dr. Erick Gurrola — YOHEV</h3>
              <p className="text-[#c9a84c] text-sm uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">Creador del Sistema KS Healing</p>
              <p className="text-white/60 leading-relaxed">
                Creador y director del Sistema KS Healing Systems. Aporta profundidad espiritual, marcos simbólicos avanzados y enseñanzas de consciencia expandida que complementan la estructura pedagógica del instituto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINO Y SEDE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 font-['Montserrat',sans-serif]">El Destino</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Cancún, México<br />
                <span className="text-white/50 text-3xl">2026</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#c9a84c] text-xs">✈</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Conectividad Global</p>
                    <p className="text-white/60 text-sm leading-relaxed">Aeropuerto internacional con vuelos directos desde más de 80 ciudades del mundo, a solo 20 minutos del resort.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#c9a84c] text-xs">🌊</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Paraíso Natural</p>
                    <p className="text-white/60 text-sm leading-relaxed">Playas de arena blanca, aguas turquesas del Caribe y clima perfecto durante toda la estancia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#c9a84c] text-xs">★</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Infraestructura de Clase Mundial</p>
                    <p className="text-white/60 text-sm leading-relaxed">Resort de lujo con tecnología de punta, salones de conferencias y todas las amenidades para una experiencia completa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={IMG_SEDE}
                alt="Dreams Sapphire Resort & Spa, Cancún"
                className="w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a12] to-transparent h-24" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">Dreams Sapphire Resort & Spa</p>
                <p className="text-[#c9a84c] text-sm font-['Montserrat',sans-serif] uppercase tracking-widest">La Sede Oficial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENIDADES DEL RESORT */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Dreams Sapphire Resort</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Un oasis de lujo</h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-2xl mx-auto">
            Elegancia contemporánea con la belleza natural del Caribe, instalaciones de primer nivel para una experiencia que integra aprendizaje y bienestar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "500+", label: "Habitaciones de Lujo", desc: "Suites con vista al mar y tecnología inteligente" },
              { num: "3", label: "Salones Principales", desc: "Capacidad para 800 personas en el auditorio principal" },
              { num: "15K m²", label: "de Instalaciones", desc: "Espacios versátiles para diversas actividades" },
              { num: "7", label: "Restaurantes Gourmet", desc: "Cocina de autor y bares premium incluidos" },
            ].map((item) => (
              <div key={item.num} className="border border-white/10 p-6 text-center hover:border-[#c9a84c]/40 transition-colors">
                <p className="text-4xl font-bold text-[#c9a84c] mb-2">{item.num}</p>
                <p className="font-semibold mb-2 text-sm uppercase tracking-wide font-['Montserrat',sans-serif]">{item.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🏊", title: "Piscinas Espectaculares", desc: "Múltiples albercas infinity con vistas al mar Caribe y áreas lounge exclusivas" },
              { icon: "🌿", title: "Spa & Wellness Center", desc: "Tratamientos de relajación y áreas de bienestar completas con descuentos especiales" },
              { icon: "🚗", title: "Traslados Incluidos", desc: "Traslados aeropuerto-hotel-aeropuerto incluidos en tu inversión" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Agenda</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Cronograma de Actividades</h2>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#c9a84c]/20 hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  num: "1",
                  fecha: "28 de Noviembre — Sábado",
                  titulo: "Cóctel de Bienvenida",
                  desc: "Recepción exclusiva frente al mar. El primer encuentro de la comunidad en un ambiente íntimo y festivo.",
                },
                {
                  num: "2",
                  fecha: "29 y 30 de Noviembre — Domingo y Lunes",
                  titulo: "Conferencias de Alto Nivel",
                  desc: "Dos días intensivos con la Dra. Claribel Puga y el Dr. Erick Gurrola (YOHEV). Aprendizaje profundo, integración de herramientas y expansión de consciencia.",
                },
                {
                  num: "3",
                  fecha: "1 de Diciembre — Martes",
                  titulo: "Evento Sorpresa Exclusivo",
                  desc: "Una experiencia única e inolvidable diseñada especialmente para los asistentes. Los detalles se revelarán próximamente.",
                },
                {
                  num: "4",
                  fecha: "2 de Diciembre — Miércoles",
                  titulo: "Desayuno Grupal de Clausura",
                  desc: "Convivencia de agradecimiento y cierre del congreso. Un espacio para integrar lo vivido y celebrar el camino recorrido.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8 items-start">
                  <div className="w-16 h-16 border border-[#c9a84c] flex items-center justify-center flex-shrink-0 bg-[#0a0a12] relative z-10">
                    <span className="text-[#c9a84c] text-2xl font-bold">{item.num}</span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-white/10">
                    <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-2 font-['Montserrat',sans-serif]">{item.fecha}</p>
                    <h3 className="text-2xl font-bold mb-3">{item.titulo}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE ACTIVIDADES PREVIAS */}
      <section className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Congresos Anteriores</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Lo que vivimos juntos</h2>
          <p className="text-white/60 text-center text-lg mb-12 max-w-2xl mx-auto">
            Aprendizaje, integración, convivencia, transformación y mucho más. Así se vive cada edición del Congreso Internacional Ascendant.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <img
                src={IMG_ACTIVIDADES}
                alt="Actividades de congresos anteriores"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ height: "400px" }}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={IMG_CONVIVENCIA}
                alt="Evento de convivencia sorpresa"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Tu Inversión Incluye</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Todo lo que necesitas para vivir esta experiencia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏨",
                title: "Hospedaje All-Inclusive",
                desc: "5 días, 4 noches con todas las comidas, bebidas premium y amenidades del resort.",
              },
              {
                icon: "🎓",
                title: "Acceso Total al Congreso",
                desc: "Entrada a todas las conferencias, talleres y actividades de integración.",
              },
              {
                icon: "🎁",
                title: "Kit de Bienvenida",
                desc: "Material exclusivo del 5to Congreso Internacional Ascendant.",
              },
              {
                icon: "✨",
                title: "Experiencias Exclusivas",
                desc: "Cóctel de bienvenida, evento sorpresa, desayuno de clausura y actividades especiales.",
              },
              {
                icon: "🚌",
                title: "Traslados Incluidos",
                desc: "Traslados aeropuerto-hotel-aeropuerto para tu comodidad.",
              },
              {
                icon: "🤝",
                title: "Convivencias Extraordinarias",
                desc: "Conexión real con una comunidad de personas comprometidas con su crecimiento.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-6 hover:border-[#c9a84c]/40 transition-colors group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFAS / INSCRIPCIÓN */}
      <section id="inscripcion" className="py-24 px-6 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 text-center font-['Montserrat',sans-serif]">Tarifas</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Elige tu forma de participar</h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-2xl mx-auto">
            Todas las tarifas incluyen hospedaje all-inclusive, acceso completo al congreso y todas las experiencias del evento. Precios en pesos mexicanos.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Ocupación Compartida */}
            <div className="border border-white/20 p-8 hover:border-[#c9a84c]/60 transition-colors">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4 font-['Montserrat',sans-serif]">Habitación</p>
              <h3 className="text-2xl font-bold mb-2">Ocupación Compartida</h3>
              <p className="text-white/50 text-sm mb-8">Habitación compartida con otro asistente del congreso</p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">$33,900</p>
                <p className="text-white/50 text-sm mt-1">MXN · pago único</p>
              </div>
              <div className="border-t border-white/10 pt-6 mb-8">
                <p className="text-white/60 text-sm mb-2">O en mensualidades:</p>
                <p className="text-2xl font-bold text-[#c9a84c]">$2,825 <span className="text-base font-normal text-white/50">/ mes × 12</span></p>
                <p className="text-white/40 text-xs mt-3">Noche extra: $5,300 MXN</p>
              </div>
              <button
                onClick={() => window.open("mailto:info@institutoascendant.com?subject=Inscripción 5to Congreso - Ocupación Compartida", "_blank")}
                className="w-full border border-[#c9a84c] text-[#c9a84c] py-3 text-sm font-bold uppercase tracking-widest font-['Montserrat',sans-serif] hover:bg-[#c9a84c] hover:text-[#0a0a12] transition-colors"
              >
                Reservar Este Lugar
              </button>
            </div>

            {/* Ocupación Sencilla */}
            <div className="border border-[#c9a84c] p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0a0a12] text-xs font-bold uppercase tracking-widest px-4 py-1 font-['Montserrat',sans-serif]">
                Privacidad Total
              </div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4 font-['Montserrat',sans-serif]">Habitación</p>
              <h3 className="text-2xl font-bold mb-2">Ocupación Sencilla</h3>
              <p className="text-white/50 text-sm mb-8">Habitación privada exclusiva para ti</p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">$43,800</p>
                <p className="text-white/50 text-sm mt-1">MXN · pago único</p>
              </div>
              <div className="border-t border-white/10 pt-6 mb-8">
                <p className="text-white/60 text-sm mb-2">O en mensualidades:</p>
                <p className="text-2xl font-bold text-[#c9a84c]">$3,650 <span className="text-base font-normal text-white/50">/ mes × 12</span></p>
                <p className="text-white/40 text-xs mt-3">Noche extra: $8,900 MXN</p>
              </div>
              <button
                onClick={() => window.open("mailto:info@institutoascendant.com?subject=Inscripción 5to Congreso - Ocupación Sencilla", "_blank")}
                className="w-full bg-[#c9a84c] text-[#0a0a12] py-3 text-sm font-bold uppercase tracking-widest font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
              >
                Reservar Este Lugar
              </button>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-10 max-w-2xl mx-auto">
            Para más información sobre formas de pago, disponibilidad y detalles del evento, escríbenos a{" "}
            <a href="mailto:info@institutoascendant.com" className="text-[#c9a84c] hover:underline">
              info@institutoascendant.com
            </a>
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mb-16" />
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-6 font-['Montserrat',sans-serif]">5to Congreso Internacional Ascendant</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Es Tiempo de Fe
          </h2>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            Cancún, México · Dreams Sapphire Resort & Spa<br />
            28 de Noviembre – 2 de Diciembre, 2026
          </p>
          <a
            href="#inscripcion"
            className="inline-block bg-[#c9a84c] text-[#0a0a12] px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] font-['Montserrat',sans-serif] hover:bg-[#e0bf6a] transition-colors"
          >
            Reservar Mi Lugar Ahora
          </a>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mt-16" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
