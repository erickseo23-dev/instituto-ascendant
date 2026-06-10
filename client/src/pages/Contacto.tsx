import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

// Ícono de WhatsApp (SVG inline ya que lucide no lo incluye)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

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

          {/* WhatsApp */}
          <a
            href="https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20programas%20del%20Instituto%20Ascendant."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-sm border border-[#E8E4DF] hover:border-[#25D366]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">WhatsApp</h3>
            <p className="text-[#25D366] text-sm font-medium group-hover:underline">
              +52 (55) 1234-5678
            </p>
            <p className="text-[#999] text-xs mt-2">Haz clic para chatear</p>
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
