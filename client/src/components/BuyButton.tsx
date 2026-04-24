import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface BuyButtonProps {
  productType: "course" | "masterclass";
  label?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export default function BuyButton({
  productType,
  label,
  className = "",
  variant = "default",
  size = "lg",
}: BuyButtonProps) {
  const defaultLabel =
    productType === "course"
      ? "Inscribirme al Curso — $297 USD"
      : "Registrarme Gratis";

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open("https://cursos.institutoascendant.com/offers/default", "_blank")}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {label || defaultLabel}
    </Button>
  );
}
