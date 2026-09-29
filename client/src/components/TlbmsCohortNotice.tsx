import { tlbmsCohort } from "@/content/tlbms";

export default function TlbmsCohortNotice() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[#d5b88f] bg-[#fffaf4] p-6 text-center sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#855526]">Próxima generación</p>
      <h3 className="my-4 font-serif text-3xl font-semibold text-[#2d2420]">{tlbmsCohort.startLabel}</h3>
      <p className="text-lg text-[#5a3e35]">Sesiones en vivo: {tlbmsCohort.scheduleLabel}</p>
      <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#5a3e35]">
        Estamos preparando las inscripciones de esta generación. Los precios y las opciones de pago se anunciarán al abrirlas.
      </p>
      <a href={tlbmsCohort.contactUrl} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#86572f] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#68401f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86572f]">
        Consultar información por correo
      </a>
    </div>
  );
}
