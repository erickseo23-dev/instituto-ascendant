import { AmbientLight, ExperienceControls, PresencePause, usePageReveal } from "@/components/experience/Experience";
import WelcomeVideo from "@/components/experience/WelcomeVideo";
import MasterclassVideo from "@/components/experience/MasterclassVideo";
import OctaveExplorer from "@/components/experience/OctaveExplorer";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, BookOpen, Compass, Eye, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { setSEOMetadata } from "@/config/seo";
import { ascensions, clarimentalImages, clarimentalMeta, firstOctaveStages, painLevels } from "@/content/clarimental";
import { tlbmsCohort } from "@/content/tlbms";
import "./clarimental.css";

const capacities = [
  { icon: Eye, title: "Claridad", text: "Observar y comprender tu mundo interior." },
  { icon: Heart, title: "Presencia", text: "Habitar lo que sientes con mayor consciencia." },
  { icon: Sparkles, title: "Discernimiento", text: "Reconocer las influencias y elegir tu respuesta." },
  { icon: Compass, title: "Dirección", text: "Vivir en coherencia con tus valores y tu propósito." },
];

export default function Clarimental() {
  const pageRef = usePageReveal();
  useEffect(() => {
    setSEOMetadata({ ...clarimentalMeta, type: "website", image: clarimentalImages.path });
  }, []);

  return (
    <div ref={pageRef} className="clarimental-page">
      <a className="cm-skip" href="#contenido-clarimental">Saltar al contenido</a>
      <Header forceLight />
      <main id="contenido-clarimental">
        <section className="cm-hero" aria-labelledby="cm-title">
          <div className="cm-hero-copy">
            <a className="cm-breadcrumb" href="/">Instituto Ascendant <span aria-hidden="true">/</span> CLARIMENTAL</a>
            <p className="cm-eyebrow">El sistema de transformación de Claribel Puga</p>
            <h1 id="cm-title">CLARIMENTAL</h1>
            <p className="cm-hero-heading">Claridad para vivir.<br /><em>Consciencia para elegir.</em></p>
            <p className="cm-hero-description">Un recorrido de nueve octavas para transformar tu mundo interior, tu relación con el mundo y tu experiencia espiritual.</p>
            <div className="cm-actions">
              <a className="cm-button" href="#ruta">Explora las nueve octavas <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="cm-text-link" href="#primera-octava">Conoce el primer paso <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <ExperienceControls />
            <div className="cm-facts" aria-label="Estructura del recorrido">
              <p><strong>3</strong><span>ascensiones</span></p>
              <p><strong>9</strong><span>octavas</span></p>
              <p><strong>81</strong><span>semanas de formación</span></p>
            </div>
          </div>
          <div className="cm-hero-visual asc-visual-host">
            <AmbientLight />
            <img className="asc-hero-photo" src={clarimentalImages.path} alt="Un sendero entre árboles iluminado por la luz del sol" width="1920" height="1288" fetchPriority="high" />
            <div className="cm-visual-caption"><span>La ruta hacia el Estado Clarimental</span><p>Un proceso que se profundiza.<br />Una claridad que se integra.</p></div>
          </div>
        </section>

        <WelcomeVideo />

        <section className="cm-state cm-section" aria-labelledby="estado-title">
          <div className="cm-container">
            <div className="cm-section-intro">
              <div><p className="cm-eyebrow">El Estado Clarimental</p><h2 id="estado-title">Volver a ti.<br /><em>Elegir con claridad.</em></h2></div>
              <div className="cm-prose"><p>El Estado Clarimental es la capacidad de recuperar y sostener claridad, presencia, discernimiento y dirección consciente en la vida cotidiana.</p><p>Se cultiva desde el primer paso. A lo largo de la ruta aprendes a reconocer tus pensamientos, emociones y condicionamientos, y a relacionarte con tu experiencia desde una posición interior más libre y coherente.</p></div>
            </div>
            <div className="cm-capacities">{capacities.map(({ icon: Icon, title, text }) => <div key={title}><Icon size={25} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}</div>
          </div>
        </section>

        <section id="ruta" className="cm-route cm-section" aria-labelledby="ruta-title">
          <div className="cm-container">
            <div className="cm-route-heading"><p className="cm-eyebrow">La ruta CLARIMENTAL</p><h2 id="ruta-title">Nueve octavas.<br /><em>Tres movimientos de transformación.</em></h2><p>Cada octava comprende nueve semanas. Cada ascensión reúne tres octavas y amplía el ámbito en el que integras lo aprendido.</p></div>
            <OctaveExplorer />
            <nav className="cm-route-nav" aria-label="Ascensiones de CLARIMENTAL">{ascensions.map(stage => <a key={stage.id} href={`#${stage.id}`}><span>{stage.number}</span> {stage.name} <ArrowDown size={15} aria-hidden="true" /></a>)}</nav>
            {ascensions.map(stage => (
              <section id={stage.id} className={`cm-ascension cm-${stage.id}`} key={stage.id} aria-labelledby={`${stage.id}-title`}>
                <div className="cm-stage-heading">
                  <span className="cm-stage-number" aria-hidden="true">{stage.number}</span>
                  <div><p className="cm-eyebrow">{stage.range} <span aria-hidden="true">·</span> 27 semanas</p><h3 id={`${stage.id}-title`}>Ascensión {stage.name}</h3><p className="cm-stage-theme">{stage.theme}</p></div>
                  <div className="cm-stage-description"><strong>{stage.lead}</strong><p>{stage.description}</p></div>
                </div>
                <ol className="cm-octaves" start={stage.number === "01" ? 1 : stage.number === "02" ? 4 : 7}>
                  {stage.octaves.map(octave => <li className="cm-octave" key={octave.roman}>
                    <div className="cm-octave-top"><span className="cm-roman" aria-label={`Octava ${octave.roman}`}>{octave.roman}</span><span className="cm-status">{octave.status}</span></div>
                    <h4>{octave.title}</h4><p className="cm-focus">{octave.focus}</p><p>{octave.description}</p>
                    {octave.href ? <a className="cm-text-link" href={octave.href}>Conocer esta octava <ArrowRight size={17} aria-hidden="true" /></a> : <p className="cm-octave-foot">9 semanas <span aria-hidden="true">·</span> Próxima etapa de la ruta</p>}
                  </li>)}
                </ol>
              </section>
            ))}
            <p className="cm-route-note">Las 81 semanas corresponden al recorrido formativo completo. Las aperturas de cada octava se anunciarán por separado.</p>
          </div>
        </section>

        <PresencePause />

        <section className="cm-first-steps cm-section" aria-labelledby="primeros-pasos-title">
          <div className="cm-container">
            <p className="cm-eyebrow">Las primeras octavas</p><h2 id="primeros-pasos-title">Comenzar con confianza.<br /><em>Profundizar con consciencia.</em></h2>
            <div className="cm-programs">
              <article id="primera-octava" className="cm-program">
                <div className="cm-program-label"><span>I</span><p>Ascensión Intrínseca<br /><strong>La puerta de entrada</strong></p></div>
                <h3>Todo Lo Bueno<br />Me Sucede</h3>
                <p>Un primer recorrido para pasar de la lucha y el control a una relación con la vida basada en confianza, coherencia y gozo consciente.</p>
                <div className="cm-cohort"><span>Próximo inicio</span><strong>{tlbmsCohort.startLabel}</strong><p>Sesiones en vivo: {tlbmsCohort.scheduleLabel}</p></div>
                <details className="cm-details"><summary>Los nueve niveles de la Primera Octava <span aria-hidden="true">+</span></summary><div>{firstOctaveStages.map((stage, index) => <section key={stage.name}><h4>{stage.name}</h4><ol start={index * 3 + 1}>{stage.levels.map(level => <li key={level}>{level}</li>)}</ol></section>)}</div></details>
                <p className="cm-availability">Inscripciones hasta el {tlbmsCohort.enrollmentDeadlineLabel}. Consulta los detalles de la próxima generación.</p>
                <a className="cm-button" href="/todo-lo-bueno-me-sucede">Conocer el programa <ArrowRight size={18} aria-hidden="true" /></a>
              </article>
              <article id="segunda-octava" className="cm-program cm-program-second">
                <div className="cm-program-label"><span>II</span><p>Ascensión Intrínseca<br /><strong>El siguiente paso</strong></p></div>
                <h3>Sano El Dolor<br />Que Me Condicionaba</h3>
                <p>Profundiza en el dolor emocional que sigue influyendo en cómo te ves, cómo eliges y cómo te relacionas. Reconoce tu historia y recupera tu dignidad interior.</p>
                <h4 className="cm-levels-title">Nueve niveles de trabajo</h4><ol className="cm-pain-levels">{painLevels.map((level, index) => <li key={level}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{level}</li>)}</ol>
                <p className="cm-availability">Consulta las próximas aperturas y las condiciones de participación con el Instituto.</p>
                <a className="cm-button" href="/sano-el-dolor-que-me-condicionaba">Conocer el programa <ArrowRight size={18} aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <MasterclassVideo />

        <section className="cm-creator cm-section" aria-labelledby="claribel-title">
          <div className="cm-container cm-creator-grid">
            <div className="cm-portrait"><img src={clarimentalImages.claribel} width="950" height="600" loading="lazy" alt="Claribel Puga, creadora de CLARIMENTAL" /></div>
            <div><p className="cm-eyebrow">Creadora de CLARIMENTAL</p><h2 id="claribel-title">Claribel Puga</h2><p className="cm-creator-subtitle">Maestra en Neurociencias aplicadas a la espiritualidad. Experta en Neurobiología de la Conducta Humana</p><p>Creadora de la Meditación Ascendente y cofundadora del Instituto Ascendant, Claribel integra enseñanza, práctica contemplativa y desarrollo espiritual en una ruta progresiva de transformación.</p><p>CLARIMENTAL se desarrolla a través del Método Ascendant. La Meditación Ascendente acompaña el recorrido como práctica central para profundizar e integrar la experiencia.</p><a className="cm-text-link" href="/sobre">Conocer al Instituto <ArrowRight size={18} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="cm-closing cm-section" aria-labelledby="cm-closing-title"><div className="cm-container cm-closing-grid"><div><p className="cm-eyebrow">Tu recorrido comienza con un primer paso</p><h2 id="cm-closing-title">Una ruta para conocerte.<br /><em>Una práctica para vivir.</em></h2></div><div><p>Explora la Primera Octava o consulta al Instituto sobre la etapa que te interesa.</p><div className="cm-actions"><a className="cm-button cm-button-light" href="/todo-lo-bueno-me-sucede">Explorar la Primera Octava <ArrowRight size={18} aria-hidden="true" /></a><a className="cm-text-link" href="https://cursos.institutoascendant.com/library"><BookOpen size={18} aria-hidden="true" /> Ya soy alumno: ir al campus</a></div></div></div></section>
      </main>
      <footer className="cm-footer"><div className="cm-container"><div><a className="cm-footer-brand" href="/">Instituto Ascendant</a><p>CLARIMENTAL · Un sistema de Claribel Puga</p></div><nav aria-label="Información institucional"><a href="/sobre">El Instituto</a><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a><a href="mailto:info@institutoascendant.com">Contacto</a></nav><p className="cm-copyright">© 2026 Instituto Ascendant</p></div></footer>
    </div>
  );
}
