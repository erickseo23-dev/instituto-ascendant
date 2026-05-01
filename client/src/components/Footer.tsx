import { Sparkles, Youtube, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#C4963C] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-lg font-semibold text-white">Instituto Ascendant</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">Instituto para el Crecimiento de la Consciencia Creadora. Desarrollo espiritual consciente, sanación energética y crecimiento personal.</p>
            <div className="flex gap-3">
              {[Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4963C] hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Programas</h4>
            <ul className="space-y-2.5 text-sm">
              {["KS Healing Systems®", "Meditación Ascendente®", "Desarrollo de la Consciencia", "Certificaciones", "Talleres Gratuitos"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#C4963C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          {/* Instituto */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Instituto</h4>
            <ul className="space-y-2.5 text-sm">
              {["Sobre Nosotros", "Fundadores", "Testimonios", "Blog", "Preguntas Frecuentes"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#C4963C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C4963C]" />
                <a href="mailto:info@institutoascendant.com" className="hover:text-[#C4963C] transition-colors">info@institutoascendant.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C4963C]" />
                +52 (311) 393-1660
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C4963C] mt-0.5 flex-shrink-0" />
                <span>Av. Insurgentes 2177<br />Tepic, Nay. Méx.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2026 Instituto Ascendant para el Crecimiento de la Consciencia Creadora. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white/60 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white/60 transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
