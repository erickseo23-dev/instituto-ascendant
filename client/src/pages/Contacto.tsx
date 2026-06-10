import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-5">
            Ponte en <em className="text-[#C4963C] not-italic">Contacto</em>
          </h1>
          <p className="text-lg text-[#666666] max-w-xl mx-auto leading-relaxed">
            ¿Tienes preguntas sobre nuestros programas o certificaciones? Escríbenos directamente y te responderemos a la brevedad.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">

          {/* Email */}
          <a
            href="mailto:contacto@kshealing.com?subject=Consulta%20Instituto%20Ascendant"
            className="group bg-white rounded-2xl p-8 shadow-sm border border-[#E8E4DF] hover:border-[#C4963C]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#C4963C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C4963C]/20 transition-colors">
              <Mail className="w-7 h-7 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Email</h3>
            <p className="text-[#C4963C] text-sm font-medium group-hover:underline break-all">
              contacto@kshealing.com
            </p>
            <p className="text-[#999] text-xs mt-2">Haz clic para escribirnos</p>
          </a>

          {/* Teléfono */}
          <a
            href="tel:+525512345678"
            className="group bg-white rounded-2xl p-8 shadow-sm border border-[#E8E4DF] hover:border-[#C4963C]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#C4963C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C4963C]/20 transition-colors">
              <Phone className="w-7 h-7 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Teléfono</h3>
            <p className="text-[#C4963C] text-sm font-medium group-hover:underline">
              +52 (55) 1234-5678
            </p>
            <p className="text-[#999] text-xs mt-2">Haz clic para llamarnos</p>
          </a>

          {/* Ubicación */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E4DF] flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#C4963C]/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Ubicación</h3>
            <p className="text-[#666666] text-sm">Tepic, México</p>
            <p className="text-[#999] text-xs mt-2">Clases 100% online</p>
          </div>
        </div>

        {/* CTA adicional por WhatsApp o email */}
        <div className="bg-[#2D2D2D] rounded-2xl p-10 text-center">
          <div className="w-14 h-14 bg-[#C4963C]/20 rounded-xl flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-7 h-7 text-[#C4963C]" />
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-3">
            ¿Prefieres escribirnos directamente?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Haz clic en el botón y se abrirá tu cliente de correo con nuestra dirección ya lista.
          </p>
          <a
            href="mailto:contacto@kshealing.com?subject=Consulta%20Instituto%20Ascendant"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4" />
            Enviar un correo
          </a>
        </div>

      </div>
    </div>
  );
}
