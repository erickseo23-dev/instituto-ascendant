import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ascensions } from "@/content/clarimental";

const octaves = ascensions.flatMap(stage => stage.octaves.map(octave => ({ ...octave, stage })));

export default function OctaveExplorer() {
  const [selected, setSelected] = useState(0);
  const current = octaves[selected];
  return <div className="asc-explorer">
    <div className="asc-explorer-top"><p className="asc-eyebrow">Explora tu recorrido</p><p>Selecciona una octava y descubre qué transforma.</p></div>
    <div className="asc-explorer-grid">
      <div className="asc-route-stations" aria-label="Seleccionar una octava">
        {ascensions.map((stage, stageIndex) => <div key={stage.id} className={`asc-station-row asc-${stage.id}`}><p><span>{stage.number}</span> {stage.name}</p><div className="asc-station-buttons">{stage.octaves.map((octave, index) => {
          const position = stageIndex * 3 + index;
          return <button key={octave.roman} type="button" className={position <= selected ? "asc-station asc-station-lit" : "asc-station"} aria-label={`${octave.status}: ${octave.title}`} aria-pressed={selected === position} aria-controls="asc-octave-detail" onClick={() => setSelected(position)}><span>{octave.roman}</span><small>{octave.focus}</small></button>;
        })}</div></div>)}
      </div>
      <div id="asc-octave-detail" className={`asc-octave-detail asc-${current.stage.id}`} aria-live="polite" aria-atomic="true">
        <span className="asc-detail-numeral" aria-hidden="true">{current.roman}</span><p className="asc-eyebrow">{current.status} · 9 semanas</p><h3>{current.title}</h3><p className="asc-detail-focus">{current.focus}</p><p>{current.description}</p>
        {current.href ? <a className="asc-primary" href={current.href}>Conocer esta octava <ArrowRight size={17} aria-hidden="true" /></a> : <a className="asc-control" href={`#${current.stage.id}`}>Explorar la Ascensión {current.stage.name} <ArrowRight size={16} aria-hidden="true" /></a>}
      </div>
    </div>
  </div>;
}
