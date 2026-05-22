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
  capacity: number | string | null;
  price: number | null;
  currency: string;
  link: string;
  tags: string[];
  accent: string;
  imagen?: string;
}

// Datos de eventos - Se sincroniza con eventos.json
export const eventos: Event[] = [
  {
    id: "evento-003",
    title: "Certificación Internacional en KS Healing Nivel Básico",
    description: "Únete a una comunidad global de profesionales transformando vidas a través de la Energía KS. Certificación Internacional en 3 módulos intensivos.",
    date: "2026-05-24",
    endDate: "2026-06-07",
    startTime: "08:00",
    endTime: "10:00",
    timezone: "America/Mexico_City",
    type: "certificacion",
    format: "online",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Online en vivo",
    capacity: "cupo limitado",
    price: null,
    currency: "MXN",
    link: "https://www.kshealing.com/ks-healing",
    tags: ["certificacion", "ks-healing", "formacion"],
    accent: "#5A7A5A",
    imagen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213129151/DFQFNvLBPnsDkTcK.png",
  },

  {
    id: "evento-006",
    title: "Taller de Genética Sagrada",
    description: "Explora la Genética Sagrada y su impacto en tu transformación. Taller especializado en la comprensión profunda de tu código genético energético.",
    date: "2026-05-30",
    startTime: "",
    endTime: "",
    timezone: "America/Mexico_City",
    type: "taller",
    format: "online",
    instructor: "yohev",
    source: ["kshealing", "instituto"],
    location: "Online en vivo",
    capacity: "cupo limitado",
    price: null,
    currency: "MXN",
    link: "https://www.kshealing.com/genetica-sagrada",
    tags: ["taller", "genetica-sagrada", "ks-healing"],
    accent: "#5A7A5A",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663213129151/grqzaM5C3pRuoX7dnGFBAz/aa1v2zWj3WLVAQOIDAVvSD-img-1_1770104531000_na1fn_dGFsbGVyLWdlbmV0aWNhLXNhZ3JhZGEtbmV3.png_cdcb018e.webp",
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
