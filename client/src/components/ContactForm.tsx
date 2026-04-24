import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      toast.error("Por favor completa los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar a Formspree
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        toast.error("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error de conexión. Por favor intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] leading-tight mb-5">
            Ponte en <em className="text-[#C4963C] not-italic">contacto</em> con nosotros
          </h2>
          <p className="text-[#2D2D2D]/70 text-base lg:text-lg leading-relaxed">
            ¿Tienes preguntas sobre nuestros programas? Nos encantaría escucharte. Completa el formulario y nos pondremos en contacto pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#C4963C]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D] mb-1">Email</h3>
                <p className="text-[#2D2D2D]/70 text-sm">info@institutoascendant.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#C4963C]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D] mb-1">Teléfono</h3>
                <p className="text-[#2D2D2D]/70 text-sm">+52 (55) 1234-5678</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#C4963C]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#C4963C]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D] mb-1">Ubicación</h3>
                <p className="text-[#2D2D2D]/70 text-sm">Ciudad de México, México</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-[#C4963C]/20 bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:border-[#C4963C] focus:ring-2 focus:ring-[#C4963C]/20 transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#C4963C]/20 bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:border-[#C4963C] focus:ring-2 focus:ring-[#C4963C]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 (55) 1234-5678"
                    className="w-full px-4 py-3 rounded-lg border border-[#C4963C]/20 bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:border-[#C4963C] focus:ring-2 focus:ring-[#C4963C]/20 transition-all"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#C4963C]/20 bg-white text-[#2D2D2D] focus:outline-none focus:border-[#C4963C] focus:ring-2 focus:ring-[#C4963C]/20 transition-all"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta-programa">Consulta sobre programas</option>
                    <option value="certificacion">Información de certificación</option>
                    <option value="taller">Registro a taller</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#C4963C]/20 bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:border-[#C4963C] focus:ring-2 focus:ring-[#C4963C]/20 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-[#C4963C] text-white font-semibold rounded-lg hover:bg-[#B08530] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              <p className="text-xs text-[#2D2D2D]/50 text-center">
                Respetamos tu privacidad. Tus datos serán tratados de acuerdo con nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
