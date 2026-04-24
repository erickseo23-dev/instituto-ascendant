import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
            Ponte en Contacto
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros programas? Nos encantaría escucharte. Completa el formulario y nos pondremos en contacto pronto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-[#C4963C]/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Email</h3>
            <p className="text-[#666666]">info@institutoascendant.com</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-[#C4963C]/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Teléfono</h3>
            <p className="text-[#666666]">+52 (55) 1234-5678</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-[#C4963C]/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#C4963C]" />
            </div>
            <h3 className="font-semibold text-[#2D2D2D] mb-2">Ubicación</h3>
            <p className="text-[#666666]">Ciudad de México, México</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E4DF] focus:outline-none focus:border-[#C4963C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E4DF] focus:outline-none focus:border-[#C4963C] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+52 (55) 1234-5678"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E4DF] focus:outline-none focus:border-[#C4963C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Asunto
                </label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E4DF] focus:outline-none focus:border-[#C4963C] transition-colors bg-white"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta sobre programas</option>
                  <option value="certificacion">Información de certificación</option>
                  <option value="registro">Registro a taller</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                Mensaje *
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[#E8E4DF] focus:outline-none focus:border-[#C4963C] transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 rounded border-[#E8E4DF] text-[#C4963C]"
              />
              <label htmlFor="privacy" className="text-sm text-[#666666]">
                Respeto tu privacidad. Tus datos serán tratados de acuerdo con nuestra política de privacidad.
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Enviar Mensaje
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
