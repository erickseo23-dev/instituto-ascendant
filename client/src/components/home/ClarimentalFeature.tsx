import { AmbientLight, ExperienceControls } from "@/components/experience/Experience";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ascensions } from "@/content/clarimental";
import { tlbmsCohort } from "@/content/tlbms";
import { isUpcomingDate } from "@/lib/eventos";

export function ClarimentalHomeHero({ imageSrc }: { imageSrc: string }) {
  const upcoming = isUpcomingDate(tlbmsCohort.startDate, tlbmsCohort.timezone);

  return (
    <section id="hero" aria-labelledby="home-title" className="relative overflow-hidden bg-[#263c32] pb-12 pt-28 text-white sm:pt-32 lg:pb-16 lg:pt-36">
      <img src={imageSrc} alt="" fetchPriority="high" className="asc-hero-photo absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172a21]/95 via-[#263c32]/85 to-[#263c32]/60" />
      <AmbientLight subtle />
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c98f]">Instituto Ascendant presenta</p>
          <h1 id="home-title" className="mb-5 break-words text-[clamp(1.8rem,5vw,3.6rem)] font-medium tracking-[0.1em]">CLARIMENTAL</h1>
          <p className="font-serif text-[clamp(2.4rem,4.1vw,3.6rem)] leading-[1.06]">Claridad para vivir.<br /><em className="text-[#e5c98f]">Consciencia para elegir.</em></p>
          <p className="mb-7 mt-6 max-w-lg text-base leading-relaxed text-white/85">El sistema de transformación de Claribel Puga: nueve octavas para transformar tu mundo interior, tu relación con el mundo y tu experiencia espiritual.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="/clarimental" className="inline-flex min-h-12 items-center justify-center gap-3 rounded bg-[#dec18a] px-6 py-3 text-sm font-semibold text-[#263c32] transition-colors hover:bg-[#eed7ae] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explorar CLARIMENTAL <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#programas" className="inline-flex min-h-11 items-center text-sm text-white underline underline-offset-4">Ver todos los programas</a>
          </div>
          <ExperienceControls light />
          <dl className="mt-9 flex gap-6 border-t border-white/20 pt-6 sm:gap-10">
            {[["3", "ascensiones"], ["9", "octavas"], ["81", "semanas de formación"]].map(([value, label]) => <div key={label}><dt className="text-xs text-white/75">{label}</dt><dd className="mt-1 font-serif text-3xl">{value}</dd></div>)}
          </dl>
        </div>

        <article aria-labelledby="home-first-octave" className="rounded-xl border border-[#dfd7c6] bg-[#faf8f2] p-6 text-[#26332e] shadow-xl sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8a642e]">Primera Octava</span>
            <span className="rounded-full bg-[#e6ecdf] px-3 py-1 text-xs font-medium text-[#38523c]">{upcoming ? "Inscripciones abiertas" : "Conoce el programa"}</span>
          </div>
          <h2 id="home-first-octave" className="font-serif text-4xl font-medium leading-[1.05] sm:text-[2.8rem]">Todo Lo Bueno<br />Me Sucede</h2>
          <p className="mb-4 mt-4 text-sm leading-relaxed text-[#53645c]">Nueve semanas para cultivar confianza, coherencia y gozo consciente.</p>
          <p className="text-sm font-medium text-[#53645c]">Con Claribel Puga y YOHEV</p>
          <div className="my-6 space-y-3 border-y border-[#d8dece] py-5">
            <p className="flex items-start gap-3"><Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#8a642e]" aria-hidden="true" /><span className="text-sm"><span className="mb-1 block text-xs uppercase tracking-wider text-[#53645c]">{upcoming ? "Próximo inicio" : "Próximas aperturas"}</span><strong className="font-semibold">{upcoming ? tlbmsCohort.startLabel : "Consulta la próxima generación"}</strong></span></p>
            <p className="flex items-center gap-3 text-sm text-[#53645c]"><Clock className="h-5 w-5 shrink-0 text-[#8a642e]" aria-hidden="true" />{upcoming ? tlbmsCohort.scheduleLabel : "Online · 9 semanas"}</p>
          </div>
          <a href="/todo-lo-bueno-me-sucede" className="flex min-h-12 items-center justify-center gap-3 rounded bg-[#263c32] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#3b5646] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263c32]">{upcoming ? "Conocer el programa e inscribirme" : "Conocer el programa"}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>
          <a href="/todo-lo-bueno-masterclass" className="mt-3 flex min-h-11 items-center justify-center text-sm text-[#53645c] underline underline-offset-4">Ver la masterclass</a>
        </article>
      </div>
    </section>
  );
}

export function ClarimentalRouteOverview() {
  return (
    <section aria-labelledby="home-route-title" className="bg-[#edf0e8] py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8a642e]">La ruta CLARIMENTAL</p><h2 id="home-route-title" className="font-serif text-3xl leading-tight text-[#26332e] sm:text-4xl">Tres ascensiones. Un recorrido completo.</h2></div>
          <a href="/clarimental#ruta" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[#38523c] underline underline-offset-4">Conoce las nueve octavas <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <ol className="grid list-none gap-6 md:grid-cols-3">
          {ascensions.map(stage => <li key={stage.id} className="border-l-2 border-[#b9a16d] pl-5"><a href={`/clarimental#${stage.id}`} className="group block py-1"><p className="text-xs uppercase tracking-wider text-[#6d765f]">{stage.range}</p><h3 className="mb-2 mt-2 font-serif text-2xl text-[#26332e] group-hover:text-[#8a642e]">Ascensión {stage.name}</h3><p className="text-sm text-[#53645c]">{stage.theme}</p></a></li>)}
        </ol>
      </div>
    </section>
  );
}
