import { AmbientLight, ExperienceControls, PresencePause, usePageReveal } from "@/components/experience/Experience";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, BookOpen, Compass, Heart, Mail, Sprout } from "lucide-react";
import Header from "@/components/Header";
import { setSEOMetadata } from "@/config/seo";
import { clarimentalImages } from "@/content/clarimental";
import { secondOctave, secondOctaveFaqs, secondOctaveLevels } from "@/content/segunda-octava";
import "./clarimental.css";
import "./sano-el-dolor.css";

const shifts = [
  { icon: Heart, title: "Reconocer lo que sientes", text: "Dar nombre a tu experiencia emocional y observar cómo se manifiesta en tu vida cotidiana." },
  { icon: Compass, title: "Comprender tus respuestas", text: "Identificar cuándo una reacción presente está vinculada con una experiencia dolorosa de tu historia." },
  { icon: Sprout, title: "Recuperar tu capacidad de elegir", text: "Cultivar dignidad, límites y una dirección interior que te permita responder con mayor libertad." },
];

export default function SanoElDolor() {
  const pageRef = usePageReveal();
  useEffect(() => {
    setSEOMetadata({ ...secondOctave, type: "website", image: clarimentalImages.path });
  }, []);

  return (
    <div ref={pageRef} className="clarimental-page sd-page">
      <a className="cm-skip" href="#contenido-segunda-octava">Saltar al contenido</a>
      <Header forceLight />
      <main id="contenido-segunda-octava">
        <section className="sd-hero" aria-labelledby="sd-title">
          <div className="sd-hero-copy">
            <nav className="sd-breadcrumb" aria-label="Ruta de navegación"><a href="/">Instituto Ascendant</a><span aria-hidden="true">/</span><a href="/clarimental">CLARIMENTAL</a><span aria-hidden="true">/</span><span aria-current="page">Octava II</span></nav>
            <p className="cm-eyebrow">Segunda Octava · Ascensión Intrínseca</p>
            <h1 id="sd-title">Sano El Dolor<br /><em>Que Me Condicionaba</em></h1>
            <p className="sd-lead">Tu historia merece ser comprendida.<br />Tu presente, vivido con mayor libertad.</p>
            <p className="sd-description">Nueve semanas para reconocer el dolor emocional que sigue influyendo en cómo te ves, cómo eliges y cómo te relacionas. Un nuevo paso en la ruta CLARIMENTAL de Claribel Puga.</p>
            <div className="cm-actions"><a className="cm-button" href="#nueve-niveles">Explorar los nueve niveles <ArrowDown size={18} aria-hidden="true" /></a><a className="cm-text-link" href="#participar">Consultar participación <ArrowRight size={18} aria-hidden="true" /></a></div>
            <ExperienceControls />
            <div className="cm-facts" aria-label="Estructura de la Segunda Octava"><p><strong>II</strong><span>octava de CLARIMENTAL</span></p><p><strong>9</strong><span>semanas de formación</span></p><p><strong>9</strong><span>niveles de trabajo</span></p></div>
          </div>
          <div className="sd-hero-visual asc-visual-host">
            <AmbientLight subtle />
            <img className="asc-hero-photo" src={clarimentalImages.path} alt="La luz del sol abre un camino entre los árboles" width="1920" height="1288" fetchPriority="high" />
            <div className="sd-chapter" aria-hidden="true"><span>CLARIMENTAL</span><strong>II</strong><span>El mundo interior</span></div>
            <div className="cm-visual-caption"><span>Confianza · Dignidad · Presencia</span><p>Mirar tu historia.<br />Volver a ti.</p></div>
          </div>
        </section>

        <section className="cm-state cm-section" aria-labelledby="sd-purpose-title"><div className="cm-container">
          <div className="cm-section-intro"><div><p className="cm-eyebrow">El sentido de esta octava</p><h2 id="sd-purpose-title">Cuando el pasado<br /><em>sigue presente.</em></h2></div><div className="cm-prose"><p>Hay experiencias que siguen hablando a través de nuestras reacciones: el temor a ser rechazados, la necesidad de demostrar nuestro valor, la dificultad para confiar o el impulso de protegernos incluso cuando deseamos acercarnos.</p><p>Esta octava invita a reconocer esa relación entre historia y presente. El trabajo comienza al observar lo que sientes, comprender lo que se activa en ti y abrir espacio para una respuesta más consciente.</p></div></div>
          <div className="sd-shifts">{shifts.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={26} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section id="nueve-niveles" className="cm-section sd-curriculum" aria-labelledby="sd-levels-title"><div className="cm-container">
          <div className="cm-route-heading"><p className="cm-eyebrow">Nueve semanas · Nueve niveles</p><h2 id="sd-levels-title">Un mapa para comprender.<br /><em>Un recorrido para sanar.</em></h2><p>Desde el reconocimiento de tu dolor emocional hasta las experiencias que dejaron una huella en tu forma de vivir. Cada nivel abre un espacio de observación, práctica e integración.</p></div>
          <ol className="sd-levels">{secondOctaveLevels.map(level => <li key={level.number}><span className="sd-level-number" aria-hidden="true">{String(level.number).padStart(2, "0")}</span><p className="sd-week">Semana {level.number}</p><h3>{level.title}</h3><p>{level.description}</p></li>)}</ol>
        </div></section>

        <PresencePause />

        <section className="sd-practice cm-section" aria-labelledby="sd-practice-title"><div className="cm-container cm-section-intro">
          <div><p className="cm-eyebrow">Del reconocimiento a la integración</p><h2 id="sd-practice-title">Lo que comprendes,<br /><em>lo llevas a tu vida.</em></h2><p className="sd-description">El Método Ascendant integra comprensión, experiencia y práctica. La Meditación Ascendente Isíaca y el trabajo con ODEL/KS acompañan la exploración de cada semana.</p></div>
          <ol className="sd-practice-steps"><li><span aria-hidden="true">01</span><div><h3>Reconocer</h3><p>Observar la huella de una experiencia en tu cuerpo, tus emociones, tus pensamientos y tus actos.</p></div></li><li><span aria-hidden="true">02</span><div><h3>Profundizar</h3><p>Dar espacio al trabajo interior mediante la meditación y las prácticas del recorrido.</p></div></li><li><span aria-hidden="true">03</span><div><h3>Integrar</h3><p>Llevar lo aprendido a tus decisiones, tus límites y la forma en que te acompañas cada día.</p></div></li></ol>
        </div></section>

        <section className="cm-section" aria-labelledby="sd-route-title"><div className="cm-container">
          <p className="cm-eyebrow">Tu lugar en CLARIMENTAL</p><h2 id="sd-route-title">La Ascensión Intrínseca:<br /><em>transformar tu mundo interior.</em></h2>
          <ol className="sd-route"><li><span className="sd-route-label">Primera octava</span><h3>Todo Lo Bueno Me Sucede</h3><p>Confianza, coherencia y respaldo interior para comenzar el recorrido.</p><a className="cm-text-link" href="/todo-lo-bueno-me-sucede">Conocer la Primera Octava <ArrowRight size={17} aria-hidden="true" /></a></li><li className="sd-route-current" aria-current="step"><span className="sd-route-label">Segunda octava · Estás aquí</span><h3>Sano El Dolor Que Me Condicionaba</h3><p>Comprensión del dolor emocional y una relación más libre con tu historia.</p></li><li><span className="sd-route-label">Tercera octava</span><h3>Reordeno Mis Arquetipos</h3><p>Reconocimiento de los patrones y personajes internos que organizan tu manera de ser.</p><a className="cm-text-link" href="/clarimental#intrinseca">Ver su lugar en la ruta <ArrowRight size={17} aria-hidden="true" /></a></li></ol>
          <a className="cm-text-link sd-full-route" href="/clarimental#ruta">Conocer las nueve octavas de CLARIMENTAL <ArrowRight size={18} aria-hidden="true" /></a>
        </div></section>

        <section className="cm-creator cm-section sd-creator" aria-labelledby="sd-creator-title"><div className="cm-container cm-creator-grid">
          <div className="cm-portrait"><img src={clarimentalImages.claribel} width="950" height="600" loading="lazy" alt="Claribel Puga, creadora de CLARIMENTAL" /></div>
          <div><p className="cm-eyebrow">La creadora del sistema</p><h2 id="sd-creator-title">Claribel Puga</h2><p className="cm-creator-subtitle">Maestra en Neurociencias aplicadas a la espiritualidad. Experta en Neurobiología de la Conducta Humana</p><p>Creadora de CLARIMENTAL, del Método Ascendant y de la Meditación Ascendente. Su propuesta reúne comprensión emocional, práctica contemplativa y desarrollo espiritual en una ruta progresiva de transformación.</p><a className="cm-text-link" href="/clarimental">Conocer el sistema CLARIMENTAL <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div></section>

        <section className="cm-section sd-faq" aria-labelledby="sd-faq-title"><div className="cm-container cm-section-intro">
          <div><p className="cm-eyebrow">Antes de continuar</p><h2 id="sd-faq-title">Tu siguiente paso,<br /><em>con claridad.</em></h2></div>
          <div>{secondOctaveFaqs.map(faq => <details className="cm-details" key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><div><p>{faq.answer}</p></div></details>)}</div>
        </div></section>

        <section id="participar" className="cm-closing cm-section" aria-labelledby="sd-join-title"><div className="cm-container cm-closing-grid">
          <div><p className="cm-eyebrow">Sano El Dolor Que Me Condicionaba</p><h2 id="sd-join-title">Continúa tu recorrido.<br /><em>Acércate a tu próxima octava.</em></h2></div>
          <div><p>Consulta al Instituto las próximas fechas, la modalidad, la inversión y las condiciones para participar en la Segunda Octava.</p><div className="cm-actions"><a className="cm-button cm-button-light" href={secondOctave.inquiryHref}><Mail size={18} aria-hidden="true" /> Consultar disponibilidad</a><a className="sd-email" href={secondOctave.inquiryHref}>info@institutoascendant.com</a><a className="cm-text-link" href="https://cursos.institutoascendant.com/library"><BookOpen size={18} aria-hidden="true" /> Ya soy alumno: ir al campus</a></div></div>
        </div></section>
      </main>
      <footer className="cm-footer"><div className="cm-container"><div><a className="cm-footer-brand" href="/">Instituto Ascendant</a><p>CLARIMENTAL · Un sistema de Claribel Puga</p></div><nav aria-label="Información institucional"><a href="/clarimental">CLARIMENTAL</a><a href="/sobre">El Instituto</a><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a></nav><p className="cm-copyright">© 2026 Instituto Ascendant</p></div></footer>
    </div>
  );
}
