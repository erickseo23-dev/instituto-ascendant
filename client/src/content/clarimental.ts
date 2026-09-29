export const clarimentalMeta = {
  title: "CLARIMENTAL · Las nueve octavas | Instituto Ascendant",
  description: "Conoce CLARIMENTAL, el sistema de Claribel Puga: nueve octavas de nueve semanas en tres ascensiones hacia claridad, presencia y dirección consciente.",
  url: "https://www.institutoascendant.com/clarimental",
};

// Assets already used by the Instituto. Keep the creator's real portrait.
export const clarimentalImages = {
  path: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/nature-path-RJZfU3Umb5HdB4BLGsPJpk.webp",
  claribel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/TbnksHm6DJKE8fEG5mQxeC/claribel_v3_cf0792df.png",
};

export const ascensions = [
  {
    id: "intrinseca", name: "Intrínseca", number: "01", range: "Octavas I — III",
    theme: "Mi mundo interior", lead: "Confianza, sanación emocional e identidad.",
    description: "Desarrollar el respaldo interior para mirar tu experiencia, trabajar el dolor que te condiciona y reconocer los patrones desde los que respondes a la vida.",
    octaves: [
      { roman: "I", title: "Todo Lo Bueno Me Sucede", focus: "Confianza y coherencia", description: "Transforma la relación con tu realidad. Cultiva confianza, Respaldo Perpetuo y Gozo Consciente, y aprende a atravesar la vida con mayor coherencia.", status: "Primera octava", href: "#primera-octava" },
      { roman: "II", title: "Sano El Dolor Que Me Condicionaba", focus: "Dolor emocional y dignidad", description: "Reconoce el dolor emocional que sigue influyendo en tus decisiones, tu autoestima y tus vínculos. Profundiza en una relación más libre y consciente con tu historia.", status: "Segunda octava", href: "#segunda-octava" },
      { roman: "III", title: "Reordeno Mis Arquetipos", focus: "Patrones e identidad", description: "Explora los personajes internos, las defensas y los patrones que organizan tu manera de ser. Amplía tu capacidad de elegir cómo responder.", status: "En desarrollo", href: null },
    ],
  },
  {
    id: "extrinseca", name: "Extrínseca", number: "02", range: "Octavas IV — VI",
    theme: "Mi relación con el mundo", lead: "Lo heredado, lo relacional y lo colectivo.",
    description: "Reconocer los condicionamientos que recibes de tus raíces, que reproduces en tus vínculos y que incorporas del entorno. Relacionarte desde una dirección interior propia.",
    octaves: [
      { roman: "IV", title: "Sano Mis Raíces", focus: "Condicionamientos heredados", description: "Trabaja con las creencias, los patrones y las lealtades que has recibido de tu familia y tu linaje. Desarrolla una relación consciente con tus raíces y tu pertenencia.", status: "En desarrollo", href: null },
      { roman: "V", title: "Transformo Mis Relaciones", focus: "Clarimentalidad relacional", description: "Observa lo que se activa en tus vínculos. Integra presencia, comunicación, límites y reciprocidad para relacionarte con mayor claridad y libertad.", status: "En desarrollo", href: null },
      { roman: "VI", title: "Recupero Mi Soberanía Interior", focus: "Condicionamientos colectivos y ambientales", description: "Examina las influencias del entorno: inconsciente colectivo, constructos sociales, sugestiones, tendencias y mensajes implícitos o subliminales. Fortalece el discernimiento y la elección consciente.", status: "En desarrollo", href: null },
    ],
  },
  {
    id: "holistica", name: "Holística", number: "03", range: "Octavas VII — IX",
    theme: "Mi integración espiritual", lead: "Esencia, dones y vida clarimental.",
    description: "Profundizar en la relación con tu dimensión espiritual y dar expresión consciente a tus dones. Integrar el recorrido en tus decisiones, tus vínculos y tu propósito.",
    octaves: [
      { roman: "VII", title: "Reconozco Mi Esencia Divina", focus: "Alma, espíritu y Divinidad", description: "Profundiza en tu conexión espiritual desde la presencia y el discernimiento, integrando la relación con tu alma, tu espíritu y la Divinidad.", status: "En desarrollo", href: null },
      { roman: "VIII", title: "Despierto Mis Dones", focus: "Sensibilidad y servicio", description: "Explora tus capacidades y tu sensibilidad espiritual. Aprende a reconocer su expresión y a orientarla hacia el servicio con responsabilidad.", status: "En desarrollo", href: null },
      { roman: "IX", title: "Vivo en Clarimentalidad", focus: "Integración y propósito", description: "Integra claridad, emociones, vínculos y espiritualidad en una forma coherente de habitar la vida. Lleva tu dirección consciente a lo cotidiano.", status: "En desarrollo", href: null },
    ],
  },
];

export const painLevels = [
  "Mapa del Dolor Emocional", "Cuando me Rechazaron", "Cuando me Abandonaron",
  "Cuando me Humillaron", "Cuando me Traicionaron", "Cuando no me Valoraron",
  "Cuando Fracasé", "Cuando me Hicieron Daño", "Cuando Sufrí una Pérdida",
];

export const firstOctaveStages = [
  { name: "Despertar", levels: ["Recordar mi Esencia", "Coherencia Integral", "Coherencia Divina"] },
  { name: "Co-Crear", levels: ["Mi Alma me Guía", "Consejo de la Co-Creación", "Define tus Deseos"] },
  { name: "Maestría", levels: ["De Obstáculos a Oportunidades", "Respaldo Perpetuo", "Gozo Consciente"] },
];
