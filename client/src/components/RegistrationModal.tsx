import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import BuyButton from "@/components/BuyButton";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "masterclass" | "course";
}

export default function RegistrationModal({ open, onOpenChange, type }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success(
        type === "masterclass" 
          ? "¡Gracias! Revisa tu email para acceder a la Masterclass" 
          : "¡Bienvenida! Te enviaremos los detalles del curso"
      );
      setFormData({ name: "", email: "", phone: "" });
      onOpenChange(false);
    }, 1000);
  };

  const title = type === "masterclass" 
    ? "Accede a la Masterclass Gratuita" 
    : "Inscribirse al Curso Completo";

  const description = type === "masterclass"
    ? "La Neurobiología de la Intuición: Por qué tu sensibilidad es una ventaja evolutiva"
    : "Mujer Superpoderosa 2.0 - 8 Semanas de Transformación";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </DialogTitle>
          <DialogDescription className="text-foreground/70">
            {description}
          </DialogDescription>
        </DialogHeader>

        {type === "course" ? (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center">
              <p className="text-3xl font-bold mb-1" style={{ color: "#5a4a6a" }}>$297 USD</p>
              <p className="text-sm" style={{ color: "#a89ab8" }}>Pago único · Acceso de por vida</p>
            </div>
            <ul className="space-y-2 text-sm" style={{ color: "#7a6a8a" }}>
              {["8 módulos de contenido pregrabado", "4 Masterclasses en vivo con Claribel", "Diario de Metaconsciencia 30 días", "Meditaciones y audios de hipnosis", "Acceso de por vida al material"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: "#d4749f" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <BuyButton
              productType="course"
              className="w-full text-white border-none"
              label="Inscribirme al Curso — $297 USD"
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground font-medium">
                Nombre Completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 bg-background border-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 bg-background border-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-medium">
                Teléfono (Opcional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 600 000 000"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 bg-background border-border"
              />
            </div>

            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
              <p className="text-sm text-foreground/70">
                Al registrarte, aceptas recibir información sobre el curso y contenido educativo de Claribel Puga.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white h-11"
            >
              {isLoading ? "Procesando..." : "Acceder a la Masterclass Gratis"}
            </Button>

            <p className="text-xs text-center text-foreground/60">
              Respetamos tu privacidad. Nunca compartiremos tu información.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
