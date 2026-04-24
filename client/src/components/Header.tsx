import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { label: "Meditación Ascendente", href: "/meditacion-ascendente" },
  { label: "Programas", href: "/programas" },
  { label: "Blog", href: "/blog" },
  { label: "Recursos Gratuitos", href: "/recursos-gratuitos" },
  { label: "Tienda", href: "/tienda" },
  { label: "Videos", href: "/videos" },
  { label: "Fundadores", href: "/fundadores" },
  { label: "Sobre Nosotros", href: "/sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-[72px] md:top-[88px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_1px_0_#C4963C20]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <a className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#C4963C] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-serif text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-[#2D2D2D]" : "text-white"}`}>
                  Instituto Ascendant
                </span>
                <span className={`text-[9px] lg:text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 ${scrolled ? "text-[#C4963C]" : "text-white/70"}`}>
                  Crecimiento de la Consciencia
                </span>
              </div>
            </a>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md hover:bg-[#C4963C10] ${
                    scrolled ? "text-[#2D2D2D]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="#eventos"
              className="ml-4 px-5 py-2.5 bg-[#C4963C] text-white text-[13px] font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Inscribirme
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-[#2D2D2D]" : "text-white"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#C4963C20] shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors"
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="#eventos"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-[#C4963C] text-white text-center font-semibold rounded-md"
            >
              Inscribirme
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
