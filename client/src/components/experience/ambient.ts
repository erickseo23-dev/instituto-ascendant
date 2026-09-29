// Original, quiet A-major soundscape. Synthesized on demand: no media downloads,
// tracking, third-party recordings, or audio before an explicit user gesture.
export function createAmbient() {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) throw new Error("Audio no disponible en este navegador.");
  const context = new AudioContextClass();
  const master = context.createGain();
  master.gain.value = 0;
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1600;
  filter.connect(master);
  master.connect(context.destination);
  const notes = [110, 164.8138, 220, 277.1826, 329.6276, 440, 493.8833];
  notes.forEach((frequency, index) => {
    const voice = context.createOscillator();
    const envelope = context.createGain();
    voice.type = "sine";
    voice.frequency.value = frequency;
    envelope.gain.value = index < 2 ? 0.085 : 0.035;
    const breath = context.createOscillator();
    const depth = context.createGain();
    breath.frequency.value = 0.024 + index * 0.003;
    depth.gain.value = index < 2 ? 0.015 : 0.012;
    breath.connect(depth).connect(envelope.gain);
    voice.connect(envelope).connect(filter);
    voice.start();
    breath.start();
  });
  let playing = false;
  let volume = 0.3;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let suspendTimer: ReturnType<typeof setTimeout> | undefined;
  const melody = [659.255, 554.365, 493.883, 440, 554.365, 329.628, 440, 493.883];
  let step = 0;
  function bell() {
    if (!playing) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = melody[step++ % melody.length];
    const now = context.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.028, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 9);
    oscillator.connect(gain).connect(filter);
    oscillator.start(now);
    oscillator.stop(now + 10);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    timer = setTimeout(bell, 6200);
  }
  return {
    async play() {
      if (context.state === "closed") return;
      clearTimeout(suspendTimer);
      await context.resume();
      if (context.state !== "running") throw new Error("No se pudo activar el sonido.");
      if (!playing) { playing = true; bell(); }
      master.gain.setTargetAtTime(volume, context.currentTime, 0.8);
    },
    pause() {
      playing = false;
      clearTimeout(timer);
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(0, context.currentTime, 0.06);
      suspendTimer = setTimeout(() => { if (!playing && context.state !== "closed") void context.suspend(); }, 400);
    },
    setVolume(value: number) {
      volume = value;
      if (playing) master.gain.setTargetAtTime(value, context.currentTime, 0.15);
    },
    close() { playing = false; clearTimeout(timer); clearTimeout(suspendTimer); void context.close(); },
  };
}
