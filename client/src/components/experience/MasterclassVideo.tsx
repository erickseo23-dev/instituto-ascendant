import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { clarimentalImages } from "@/content/clarimental";
import { useExperience } from "./Experience";

import { tlbmsCohort } from "@/content/tlbms";

export const TLBMS_VIDEO_ID = tlbmsCohort.masterclassVideoId;

export default function MasterclassVideo() {
  const [opened, setOpened] = useState(false);
  const { pauseAudio } = useExperience();
  const frame = useRef<HTMLIFrameElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (opened) frame.current?.focus(); }, [opened]);
  useEffect(() => {
    const stopVideo = () => setOpened(false);
    window.addEventListener("ascendant:ambient-start", stopVideo);
    return () => window.removeEventListener("ascendant:ambient-start", stopVideo);
  }, []);
  return <section id="masterclass" className="asc-masterclass asc-reveal" aria-labelledby="asc-video-title"><div className="asc-media-inner">
    <div className="asc-media-copy"><p className="asc-eyebrow">Conoce la Primera Octava</p><h2 id="asc-video-title">Escucha. Descubre.<br /><em>Da el primer paso.</em></h2><p>Mira la masterclass de <strong>Todo Lo Bueno Me Sucede</strong> con Claribel Puga y YOHEV, y conoce la propuesta que abre el recorrido de CLARIMENTAL.</p><p className="asc-small">Masterclass completa · Grabación</p><a className="asc-control" href="/todo-lo-bueno-me-sucede#inversion">Consultar fechas e inscripción <ArrowRight size={16} aria-hidden="true" /></a></div>
    <div className="asc-video-wrap">
      {opened ? <><iframe ref={frame} src={`https://www.youtube-nocookie.com/embed/${TLBMS_VIDEO_ID}?rel=0&autoplay=1&cc_load_policy=1&cc_lang_pref=es`} title="Masterclass Todo Lo Bueno Me Sucede con Claribel Puga y YOHEV" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /><button type="button" className="asc-close-video" onClick={() => { setOpened(false); requestAnimationFrame(() => opener.current?.focus()); }}><X size={15} aria-hidden="true" /> Cerrar video</button></> : <button ref={opener} type="button" className="asc-video-cover" onClick={() => { pauseAudio(); setOpened(true); }} aria-label="Reproducir masterclass Todo Lo Bueno Me Sucede"><img src={clarimentalImages.claribel} alt="" loading="lazy" width="950" height="600" /><span className="asc-video-shade" /><span className="asc-play-circle"><Play size={28} fill="currentColor" aria-hidden="true" /></span><span className="asc-video-caption"><small>Claribel Puga · YOHEV</small><strong>Todo Lo Bueno<br />Me Sucede</strong><span>Reproducir masterclass</span></span></button>}
      <p className="asc-video-external"><a href={`https://www.youtube.com/watch?v=${TLBMS_VIDEO_ID}`} target="_blank" rel="noopener noreferrer" onClick={pauseAudio}>También puedes verla en YouTube ↗</a></p>
    </div>
  </div></section>;
}
