import { tlbmsCohort } from "@/content/tlbms";

export default function TlbmsCohortNotice() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[#d5b88f] bg-[#fffaf4] p-6 text-center sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#855526]">Próxima generación</p>
      <h3 className="my-4 font-serif text-3xl font-semibold text-[#2d2420]">{tlbmsCohort.startLabel}</h3>
      <p className="text-lg text-[#5a3e35]">Sesiones en vivo: {tlbmsCohort.scheduleLabel}</p>
      <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#5a3e35]">
        El programa completo dura nueve semanas. Los pagos en línea aún no están disponibles; escríbenos para consultar la inscripción.
      </p>
      <p className="mt-3 text-[#5a3e35]">Inscripciones hasta el {tlbmsCohort.enrollmentDeadlineLabel}.</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {tlbmsCohort.paymentOptions.map(option => (
          <div key={option.label} className="flex flex-col rounded-xl border border-[#d5b88f] bg-white p-5">
            <h4 className="mb-3 font-serif text-2xl font-semibold text-[#2d2420]">{option.label}</h4>
            <p className="text-2xl font-semibold text-[#86572f]">{option.amountLabel}</p>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-[#5a3e35]">{option.detail}</p>
            <p className="mt-auto text-sm font-medium text-[#5a3e35]">Pago en línea próximamente</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-[#5a3e35]">{tlbmsCohort.refundLabel}</p>
      <a href={tlbmsCohort.contactUrl} className="mt-6 inline-flex min-h-11 items-center text-sm text-[#68401f] underline underline-offset-4">
        Solicitar información por correo
      </a>
      <p className="text-xs text-[#5a3e35]">Se abrirá tu aplicación de correo. Tu inscripción no se confirma desde esta página.</p>
    </div>
  );
}
