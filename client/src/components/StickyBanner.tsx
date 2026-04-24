import { useState, useEffect } from "react";
import { X, Calendar, Clock, Zap } from "lucide-react";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const bannerDismissed = sessionStorage.getItem("bannerDismissed");
    if (!bannerDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("bannerDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 via-amber-50 to-amber-50 border-b border-amber-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Content */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <Zap className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-medium text-amber-900">
              <span className="font-semibold">Retiro Sagrado:</span> El Niño que Habita en Ti con YOHEV
            </p>
            <div className="flex items-center gap-4 text-xs md:text-sm text-amber-800 mt-1 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                12 de Abril
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8:00-12:00 hrs (CDMX)
              </span>
              <span className="inline-block px-2 py-0.5 bg-amber-600 text-white text-xs font-semibold rounded">
                Club del Retiro Sagrado
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0 hidden sm:block">
          <a
            href="https://kshealing.com/club-retiro-sagrado"
            className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded transition-colors"
          >
            Más Info
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-100 rounded transition-colors"
          aria-label="Cerrar banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile CTA */}
      <div className="sm:hidden px-4 pb-3">
        <a
          href="https://kshealing.com/club-retiro-sagrado"
          className="block w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded text-center transition-colors"
        >
          Ver Más Información
        </a>
      </div>
    </div>
  );
}
