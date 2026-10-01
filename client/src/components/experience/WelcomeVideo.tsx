import { useEffect, useRef, useState } from "react";
import { useExperience } from "./Experience";

// Optimized welcome media served as static assets by the existing Vercel project.
const welcomeVideo = "/media/clarimental/claribel-bienvenida-720p-compact.mp4";
const welcomePoster = "/media/clarimental/claribel-bienvenida-poster.jpg";

export default function WelcomeVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const { pauseAudio } = useExperience();

  useEffect(() => {
    const pause = () => video.current?.pause();
    const onHidden = () => {
      if (document.hidden) pause();
    };
    window.addEventListener("ascendant:ambient-start", pause);
    document.addEventListener("visibilitychange", onHidden);
    return () => {
      window.removeEventListener("ascendant:ambient-start", pause);
      document.removeEventListener("visibilitychange", onHidden);
    };
  }, []);

  return (
    <section
      id="bienvenida"
      className="cm-welcome cm-section"
      aria-labelledby="cm-welcome-title"
    >
      <div className="cm-container cm-welcome-grid">
        <div className="cm-prose">
          <p className="cm-eyebrow">Bienvenida a CLARIMENTAL</p>
          <h2 id="cm-welcome-title">
            Un mensaje
            <br />
            <em>de Claribel para ti.</em>
          </h2>
          <p id="cm-welcome-description">
            Claribel Puga te da la bienvenida a CLARIMENTAL.
          </p>
          <p className="cm-welcome-duration">
            Video de bienvenida · 1 min 50 s
          </p>
        </div>
        <figure className="cm-welcome-media">
          <video
            ref={video}
            src={welcomeVideo}
            poster={welcomePoster}
            width={720}
            height={1280}
            controls
            playsInline
            preload="none"
            aria-labelledby="cm-welcome-title"
            aria-describedby="cm-welcome-description"
            onPlay={pauseAudio}
            onError={() => setFailed(true)}
          >
            Tu navegador no admite este video.{" "}
            <a href={welcomeVideo}>Abrir el video de bienvenida</a>.
          </video>
          {failed && (
            <p role="status">
              No se pudo cargar el video.{" "}
              <a href={welcomeVideo}>Intenta abrirlo directamente</a>.
            </p>
          )}
          <figcaption>Claribel Puga · Creadora de CLARIMENTAL</figcaption>
        </figure>
      </div>
    </section>
  );
}
