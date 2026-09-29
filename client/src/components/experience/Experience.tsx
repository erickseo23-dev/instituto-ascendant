import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX, Waves } from "lucide-react";
import { createAmbient } from "./ambient";
import "./experience.css";

const ExperienceContext = createContext({ playing: false, volume: 0.3, still: false, error: "", toggleAudio: () => {}, pauseAudio: () => {}, setVolume: (_: number) => {}, toggleMotion: () => {} });
export const useExperience = () => useContext(ExperienceContext);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [pausedMotion, setPausedMotion] = useState(false);
  const [error, setError] = useState("");
  const reduced = useReducedMotion();
  const engine = useRef<ReturnType<typeof createAmbient> | null>(null);
  const request = useRef(0);
  const still = pausedMotion || Boolean(reduced);
  const pauseAudio = useCallback(() => {
    request.current++;
    engine.current?.pause();
    setPlaying(false);
  }, []);
  useEffect(() => {
    const onHidden = () => { if (document.hidden) pauseAudio(); };
    const onMedia = (event: Event) => { if (event.target instanceof HTMLMediaElement && !event.target.muted) pauseAudio(); };
    document.addEventListener("visibilitychange", onHidden);
    document.addEventListener("play", onMedia, true);
    window.addEventListener("ascendant:media-start", pauseAudio);
    return () => {
      document.removeEventListener("visibilitychange", onHidden);
      document.removeEventListener("play", onMedia, true);
      window.removeEventListener("ascendant:media-start", pauseAudio);
      request.current++;
      engine.current?.close();
      engine.current = null;
    };
  }, [pauseAudio]);
  async function toggleAudio() {
    if (playing) { pauseAudio(); return; }
    const currentRequest = ++request.current;
    try {
      if (!engine.current) engine.current = createAmbient();
      engine.current.setVolume(volume);
      await engine.current.play();
      if (currentRequest !== request.current) { engine.current?.pause(); return; }
      window.dispatchEvent(new Event("ascendant:ambient-start"));
      setPlaying(true);
      setError("");
    } catch {
      engine.current?.pause();
      setPlaying(false);
      setError("El sonido no pudo iniciarse. Puedes volver a intentarlo.");
    }
  }
  return <ExperienceContext.Provider value={{ playing, volume, still, error, toggleAudio, pauseAudio,
    setVolume: value => { setVolume(value); engine.current?.setVolume(value); },
    toggleMotion: () => setPausedMotion(value => !value) }}>
    <MotionConfig reducedMotion={still ? "always" : "user"}>
      <div className="asc-experience-root" data-still={still ? "true" : "false"}>{children}</div>
    </MotionConfig>
  </ExperienceContext.Provider>;
}

export function ExperienceControls({ light = false }: { light?: boolean }) {
  const { playing, volume, still, error, toggleAudio, setVolume, toggleMotion } = useExperience();
  const reduced = useReducedMotion();
  return <div className={`asc-controls${light ? " asc-controls-light" : ""}`} aria-label="Ambiente y movimiento">
    <div className="asc-controls-row">
      <button type="button" className="asc-control" onClick={toggleAudio} aria-pressed={playing}>
        {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
        {playing ? "Pausar ambiente" : "Activar ambiente sonoro"}
      </button>
      {!reduced && <button type="button" className="asc-control asc-motion-control" onClick={toggleMotion} aria-pressed={still}>
        {still ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}{still ? "Activar movimiento" : "Pausar movimiento"}
      </button>}
      {playing && <label className="asc-volume">Volumen<input type="range" min="0" max="0.65" step="0.01" value={volume} onChange={event => setVolume(Number(event.target.value))} aria-label="Volumen del ambiente" /></label>}
    </div>
    {error && <p className="asc-audio-error" role="status">{error}</p>}
  </div>;
}

export function AmbientLight({ subtle = false }: { subtle?: boolean }) {
  return <div className={`asc-light${subtle ? " asc-light-subtle" : ""}`} aria-hidden="true"><i /><i /><i /><span /><span /><span /></div>;
}

// Enhance only off-screen content after mount; server-rendered copy stays visible
// without JavaScript and for readers requesting reduced motion.
export function usePageReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { still } = useExperience();
  useEffect(() => {
    if (still || !ref.current || !("IntersectionObserver" in window)) return;
    const elements = ref.current.querySelectorAll<HTMLElement>(".cm-section > .cm-container, .cm-octave, .sd-levels > li, .asc-reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.setAttribute("data-revealed", "true"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight && !element.hasAttribute("data-revealed")) {
        element.setAttribute("data-revealed", "false"); observer.observe(element);
      }
    });
    return () => { observer.disconnect(); elements.forEach(element => element.setAttribute("data-revealed", "true")); };
  }, [still]);
  return ref;
}

const practiceSteps = [
  { title: "Llega a este momento", text: "Siente los puntos de apoyo de tu cuerpo. Deja que tu respiración encuentre su propio ritmo." },
  { title: "Date espacio", text: "Observa cómo entra y sale el aire, sin forzarlo. Puedes mantener los ojos abiertos." },
  { title: "Observa con amabilidad", text: "Nota lo que sientes. Por este momento, no necesitas resolverlo ni cambiarlo." },
  { title: "Vuelve a elegir", text: "Reconoce una pequeña acción que puedas realizar hoy con más presencia. Regresa a tu entorno a tu ritmo." },
];

export function PresencePause() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const started = useRef(0);
  const elapsed = useRef(0);
  const { playing, toggleAudio } = useExperience();
  const finished = seconds >= 120;
  const stage = practiceSteps[Math.min(3, Math.floor(seconds / 30))];
  useEffect(() => {
    if (!running) return;
    started.current = performance.now();
    const tick = () => {
      const next = Math.min(120, elapsed.current + (performance.now() - started.current) / 1000);
      setSeconds(Math.floor(next));
      if (next >= 120) { elapsed.current = 120; setRunning(false); }
    };
    const interval = window.setInterval(tick, 250);
    const stopWhenHidden = () => {
      if (document.hidden) { elapsed.current = Math.min(120, elapsed.current + (performance.now() - started.current) / 1000); setRunning(false); }
    };
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => { clearInterval(interval); document.removeEventListener("visibilitychange", stopWhenHidden); };
  }, [running]);
  function toggle() {
    if (finished) { elapsed.current = 0; setSeconds(0); setRunning(true); return; }
    if (running) elapsed.current = Math.min(120, elapsed.current + (performance.now() - started.current) / 1000);
    setRunning(value => !value);
  }
  return <section id="pausa" className="asc-pause asc-reveal" aria-labelledby="asc-pause-title">
    <div className="asc-pause-inner">
      <div className="asc-pause-copy"><p className="asc-eyebrow">Dos minutos para ti</p><h2 id="asc-pause-title">Haz una pausa.<br /><em>Vuelve a ti.</em></h2><p>Un pequeño espacio de presencia antes de continuar. Sigue la guía visual y respira a tu ritmo.</p><p className="asc-small">Puedes detenerte en cualquier momento.</p>
        <button type="button" className="asc-control" aria-pressed={playing} onClick={toggleAudio}><Waves size={16} aria-hidden="true" />{playing ? "Pausar ambiente sonoro" : "Acompañar con sonido"}</button>
      </div>
      <div className="asc-pause-practice" data-running={running ? "true" : "false"}>
        <div className="asc-presence-orb" aria-hidden="true"><span /><span /><Waves size={35} strokeWidth={1} /></div>
        <div className="asc-practice-message" aria-live="polite" aria-atomic="true"><h3>{finished ? "Lleva esta presencia contigo" : stage.title}</h3><p>{finished ? "Observa cómo te encuentras y continúa tu recorrido con calma." : stage.text}</p></div>
        <div className="asc-practice-progress" role="progressbar" aria-label="Avance de la pausa" aria-valuemin={0} aria-valuemax={120} aria-valuenow={seconds}><span style={{ width: `${seconds / 1.2}%` }} /></div>
        <div className="asc-practice-actions"><button type="button" className="asc-primary" onClick={toggle}>{running ? <Pause size={16} /> : <Play size={16} />} {running ? "Pausar práctica" : finished ? "Volver a comenzar" : seconds > 0 ? "Continuar práctica" : "Comenzar mi pausa"}</button><span className="asc-timer" aria-hidden="true">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")} / 2:00</span></div>
      </div>
    </div>
  </section>;
}
