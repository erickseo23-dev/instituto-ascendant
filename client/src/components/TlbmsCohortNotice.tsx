import { tlbmsCohort } from "@/content/tlbms";

export default function TlbmsCohortNotice() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[#d5b88f] bg-[#fffaf4] p-6 text-center sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#855526]">Inscripciones abiertas</p>
      <h3 className="my-4 font-serif text-3xl font-semibold text-[#2d2420]">{tlbmsCohort.startLabel}</h3>
      <p className="text-lg text-[#5a3e35]">Sesiones en vivo: {tlbmsCohort.scheduleLabel}</p>
      <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#5a3e35]">
        Elige tu forma de pago para inscribirte. Ambas opciones incluyen el programa completo de nueve semanas.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {tlbmsCohort.paymentOptions.map(option => (
          <div key={option.url} className="flex flex-col rounded-xl border border-[#d5b88f] bg-white p-5">
            <h4 className="mb-3 font-serif text-2xl font-semibold text-[#2d2420]">{option.label}</h4>
            <p className="text-2xl font-semibold text-[#86572f]">{option.amountLabel}</p>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-[#5a3e35]">{option.detail}</p>
            <a href={option.url} className="mt-auto inline-flex min-h-12 items-center justify-center rounded-lg bg-[#86572f] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#68401f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86572f]">
              {option.buttonLabel}
            </a>
          </div>
        ))}
      </div>
      <a href={tlbmsCohort.contactUrl} className="mt-6 inline-flex min-h-11 items-center text-sm text-[#68401f] underline underline-offset-4">
        ¿Tienes preguntas? Escríbenos
      </a>
    </div>
  );
}
