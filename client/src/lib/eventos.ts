/**
 * Eventos Compartidos - Instituto Ascendant & KS Healing
 * Fuente única de verdad para todos los eventos
 * 
 * Uso:
 * - Instituto Ascendant: getEventsBySource("instituto")
 * - KS Healing: getEventsBySource("kshealing")
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  timezone: string;
  type: "taller" | "certificacion" | "retiro" | "masterclass" | "sesion";
  format: "online" | "presencial" | "hibrido";
  instructor: "yohev" | "claribel" | "otro";
  source: ("kshealing" | "instituto")[];
  location: string;
  capacity: number | null;
  price: number | null;
  currency: string;
  link: string;
  tags: string[];
  accent: string;
}

// Datos de eventos - Se sincroniza con eventos.json
export const eventos: Event[] = [
  {
    id: "evento-003",
    title: "Certificación Internacional en KS Healing Nivel Básico",
    description: "Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.",
    date: "2026-04-26",
    endDate: "2026-05-10",
    startTime: "09:00",
    endTime: "17:00",
    timezone: "America/Mexico_City",
    type: "certificacion",
    format: "online",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Online en vivo",
    capacity: 50,
    price: null,
    currency: "MXN",
    link: "https://kshealing.com",
    tags: ["certificacion", "ks-healing", "formacion"],
    accent: "#5A7A5A",
  },
  {
    id: "evento-004",
    title: "Retiro Sagrado: El Vínculo Materno",
    description: "La primera relación que modeló tu forma de amar y recibir. Sanar el vínculo sin rechazarlo ni idealizarlo. Una experiencia inmersiva de transformación profunda donde experimentarás transmisiones intensivas de Energía KS en comunidad.",
    date: "2026-05-17",
    endDate: "2026-05-17",
    startTime: "09:00",
    endTime: "18:00",
    timezone: "America/Mexico_City",
    type: "retiro",
    format: "presencial",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Presencial",
    capacity: 30,
    price: null,
    currency: "MXN",
    link: "https://kshealing.com",
    tags: ["retiro-sagrado", "ks-healing", "presencial"],
    accent: "#7B6B8A",
  },
];

/**
 * Obtener eventos filtrados por sitio
 * @param source - "instituto" o "kshealing"
 * @returns Array de eventos para ese sitio
 */
export function getEventsBySource(source: "instituto" | "kshealing"): Event[] {
  return eventos.filter((e) => e.source.includes(source));
}

/**
 * Obtener eventos ordenados por fecha
 * @param source - "instituto" o "kshealing"
 * @returns Array de eventos ordenados por fecha
 */
export function getUpcomingEvents(source: "instituto" | "kshealing"): Event[] {
  const filtered = getEventsBySource(source);
  return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Obtener eventos por tipo
 * @param source - "instituto" o "kshealing"
 * @param type - tipo de evento
 * @returns Array de eventos del tipo especificado
 */
export function getEventsByType(
  source: "instituto" | "kshealing",
  type: Event["type"]
): Event[] {
  return getEventsBySource(source).filter((e) => e.type === type);
}

/**
 * Obtener evento por ID
 * @param id - ID del evento
 * @returns Evento o undefined
 */
export function getEventById(id: string): Event | undefined {
  return eventos.find((e) => e.id === id);
}

/**
 * Obtener eventos por instructor
 * @param source - "instituto" o "kshealing"
 * @param instructor - nombre del instructor
 * @returns Array de eventos del instructor
 */
export function getEventsByInstructor(
  source: "instituto" | "kshealing",
  instructor: Event["instructor"]
): Event[] {
  return getEventsBySource(source).filter((e) => e.instructor === instructor);
}

/**
 * Formatear fecha para mostrar
 * @param date - fecha en formato YYYY-MM-DD
 * @returns fecha formateada
 */
export function formatDate(date: string): string {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Obtener mes y día para mostrar en tarjeta
 * @param date - fecha en formato YYYY-MM-DD
 * @returns objeto con día y mes
 */
export function getDateParts(date: string): { day: string; month: string; year: string } {
  const d = new Date(date + "T00:00:00");
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleDateString("es-ES", { month: "short" }).toUpperCase(),
    year: String(d.getFullYear()),
  };
}
