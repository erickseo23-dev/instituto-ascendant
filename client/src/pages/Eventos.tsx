import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { getUpcomingEvents, getEventsByType, formatDate, getDateParts } from "@/lib/eventos";

export default function Eventos() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const allEvents = getUpcomingEvents("instituto");
  const displayedEvents = selectedType
    ? allEvents.filter((e) => e.type === selectedType)
    : allEvents;

  const eventTypes = [
    { value: null, label: "Todos", icon: "📅" },
    { value: "taller", label: "Talleres", icon: "🎓" },
    { value: "certificacion", label: "Certificaciones", icon: "🏆" },
    { value: "retiro", label: "Retiros", icon: "🌿" },
    { value: "masterclass", label: "Masterclass", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#C4963C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Agenda
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2D2D2D] leading-tight mb-4">
            Próximos Eventos
          </h1>
          <p className="text-[#2D2D2D]/60 text-lg max-w-2xl mx-auto">
            Talleres, certificaciones y retiros diseñados para cada etapa de tu recorrido de transformación.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {eventTypes.map((type) => (
            <button
              key={type.value || "all"}
              onClick={() => setSelectedType(type.value as string | null)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType === type.value
                  ? "bg-[#C4963C] text-white shadow-lg"
                  : "bg-white text-[#2D2D2D] border border-[#E8E4DF] hover:border-[#C4963C]"
              }`}
            >
              <span className="mr-2">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-5">
          {displayedEvents.length > 0 ? (
            displayedEvents.map((event, i) => {
              const dateParts = getDateParts(event.date);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-5 lg:gap-8 items-center bg-white rounded-xl p-5 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-500 border border-[#E8E4DF] hover:border-transparent"
                  style={{ borderLeftWidth: "4px", borderLeftColor: event.accent }}
                >
                  {/* Date Block */}
                  <div className="flex lg:flex-col items-center lg:items-center gap-3 lg:gap-0 lg:w-20 lg:text-center">
                    <span
                      className="font-serif text-3xl lg:text-4xl font-bold"
                      style={{ color: event.accent }}
                    >
                      {dateParts.day}
                    </span>
                    <div className="flex lg:flex-col items-center gap-1">
                      <span className="text-[#2D2D2D]/70 text-xs font-semibold uppercase">
                        {dateParts.month}
                      </span>
                      <span className="text-[#2D2D2D]/40 text-xs">{dateParts.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span
                      className={`inline-block px-2.5 py-0.5 text-white text-[10px] font-semibold rounded-full mb-2 uppercase tracking-wider`}
                      style={{ backgroundColor: event.accent }}
                    >
                      {event.type === "taller"
                        ? "Taller"
                        : event.type === "certificacion"
                          ? "Certificación"
                          : event.type === "retiro"
                            ? "Retiro"
                            : event.type === "masterclass"
                              ? "Masterclass"
                              : "Evento"}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#2D2D2D] mb-2 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-[#2D2D2D]/65 text-sm leading-relaxed mb-3 max-w-2xl">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap gap-3 text-[#2D2D2D]/50 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.startTime} - {event.endTime}
                      </span>
                      {event.capacity && (
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          Capacidad: {event.capacity}
                        </span>
                      )}
                      {event.price === 0 && (
                        <span className="flex items-center gap-1 text-[#C4963C] font-semibold">
                          ✓ Gratuito
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:self-center">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md text-sm transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                      style={{ backgroundColor: event.accent }}
                    >
                      Más Información <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[#2D2D2D]/60 text-lg">
                No hay eventos disponibles en esta categoría en este momento.
              </p>
            </motion.div>
          )}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-[#C4963C]/10 to-[#7B6B8A]/10 rounded-xl p-8 lg:p-12 text-center border border-[#C4963C]/20"
        >
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#2D2D2D] mb-3">
            No te pierdas nuestros próximos eventos
          </h3>
          <p className="text-[#2D2D2D]/60 mb-6 max-w-xl mx-auto">
            Suscríbete a nuestro boletín para recibir notificaciones sobre nuevos talleres, certificaciones y retiros.
          </p>
          <button className="px-8 py-3 bg-[#C4963C] text-white font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-sm hover:shadow-md">
            Suscribirse
          </button>
        </motion.div>
      </div>
    </div>
  );
}
