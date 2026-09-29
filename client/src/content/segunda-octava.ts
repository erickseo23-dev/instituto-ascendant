import { painLevels } from "./clarimental";

export const secondOctave = {
  path: "/sano-el-dolor-que-me-condicionaba",
  title: "Sano El Dolor Que Me Condicionaba · Segunda Octava de CLARIMENTAL",
  description: "La Segunda Octava de CLARIMENTAL: nueve semanas para reconocer el dolor emocional que condiciona tu presente y cultivar una relación más libre con tu historia.",
  url: "https://www.institutoascendant.com/sano-el-dolor-que-me-condicionaba",
  inquiryHref: "mailto:info@institutoascendant.com?subject=Informaci%C3%B3n%20sobre%20Sano%20El%20Dolor%20Que%20Me%20Condicionaba&body=Hola%2C%20me%20interesa%20la%20Segunda%20Octava%20de%20CLARIMENTAL.%20Quisiera%20conocer%20las%20pr%C3%B3ximas%20fechas%2C%20modalidad%2C%20inversi%C3%B3n%20y%20condiciones%20de%20participaci%C3%B3n.",
};

const descriptions = [
  "Reconoce cómo se expresa el dolor en tu cuerpo, tus emociones, tus pensamientos y tus actos. Traza un mapa de las experiencias que todavía influyen en distintas áreas de tu vida.",
  "Observa la huella del rechazo en tu manera de mostrarte, pertenecer y buscar aceptación. Cultiva una relación contigo que reconozca tu valor y tu derecho a ser.",
  "Explora el miedo a quedarte solo y las respuestas que se activan ante la distancia. Fortalece tu presencia interior y reconoce tus necesidades de apoyo y cercanía.",
  "Reconoce la vergüenza y la tendencia a esconderte o hacerte pequeño. Trabaja en recuperar tu dignidad y en relacionarte con tu historia desde el respeto hacia ti.",
  "Mira cómo la ruptura de la confianza influye en el control, la vigilancia y tus vínculos. Explora una confianza consciente, acompañada de discernimiento y límites.",
  "Observa cuánto de tu esfuerzo nace de la necesidad de demostrar tu valor. Reconoce tus necesidades y aprende a darte un lugar sin depender por completo de la aprobación externa.",
  "Explora las experiencias de fracaso y las conclusiones que construiste sobre ti. Integra lo aprendido y abre espacio para volver a elegir, intentar y avanzar.",
  "Reconoce el impacto de aquello que te lastimó y cómo sigue influyendo en tu presente. Trabaja en recuperar tu capacidad de decidir y establecer límites, respetando tu propio ritmo.",
  "Da espacio al dolor de una pérdida y a los cambios que trajo a tu vida. Honra lo vivido y explora cómo seguir construyendo sentido, presencia y vínculos en el presente.",
];

export const secondOctaveLevels = painLevels.map((title, index) => ({
  number: index + 1,
  title,
  description: descriptions[index],
}));

export const secondOctaveFaqs = [
  { question: "¿Qué lugar ocupa esta octava en CLARIMENTAL?", answer: "Es la Segunda Octava de la Ascensión Intrínseca. Todo Lo Bueno Me Sucede abre el recorrido con confianza y coherencia; esta segunda etapa profundiza en el dolor emocional que condiciona tu presente. Después, Reordeno Mis Arquetipos trabaja los patrones y la identidad." },
  { question: "¿Cuánto dura el recorrido?", answer: "La octava comprende nueve semanas de formación, organizadas en nueve niveles. Las fechas, los horarios y la modalidad se comunican para cada generación." },
  { question: "¿Necesito haber cursado Todo Lo Bueno Me Sucede?", answer: "CLARIMENTAL propone una ruta progresiva que comienza con Todo Lo Bueno Me Sucede. Si deseas incorporarte directamente a la Segunda Octava, consulta al Instituto sobre tu punto de partida y las condiciones de participación." },
  { question: "¿Cómo puedo conocer las próximas fechas y la inversión?", answer: "Escríbenos indicando que te interesa Sano El Dolor Que Me Condicionaba. El Instituto te orientará sobre las próximas aperturas, la modalidad, la inversión y las condiciones de inscripción de esta octava." },
];
