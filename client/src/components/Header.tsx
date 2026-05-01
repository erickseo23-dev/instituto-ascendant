import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "wouter";

// disabled: true = visible pero sin link (próximamente)
const programas = [
  { label: "Mujer Superpoderosa", href: "/mujer-superpoderosa", disabled: false },
  { label: "Meditación Ascendente®", href: "/meditacion-ascendente", disabled: true },
  { label: "KS Healing Systems®", href: "https://kshealing.com", disabled: false },
  { label: "DART", href: "https://kshealing.com/dart", disabled: false },
  { label: "Genética Sagrada", href: "https://kshealing.com/genetica-sagrada", disabled: false },
];

const tienda = [
  { label: "Todos", href: "/tienda", disabled: true },
  { label: "Cursos", href: "/tienda?categoria=cursos", disabled: true },
  { label: "Libros", href: "/tienda?categoria=libros", disabled: true },
  { label: "Meditaciones", href: "/tienda?categoria=meditaciones", disabled: true },
  { label: "Retiros", href: "/tienda?categoria=retiros", disabled: true },
  { label: "Sesiones Personalizadas", href: "/tienda?categoria=sesiones", disabled: true },
];

const navLinks = [
  { label: "Blog", href: "/blog", disabled: false },
  { label: "Recursos Gratuitos", href: "/recursos-gratuitos", disabled: true },
  { label: "Videos", href: "/videos", disabled: true },
  { label: "Sobre Nosotros", href: "/sobre", disabled: false },
];

interface HeaderProps {
  hideNav?: boolean;
}

export default function Header({ hideNav = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
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
                  Para el Crecimiento de la Consciencia Creadora
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {!hideNav && (
              <>
                {/* Programas Dropdown */}
                <div className="relative group">
                  <button
                    className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md flex items-center gap-1 ${
                      scrolled ? "text-[#2D2D2D]" : "text-white/90"
                    } hover:bg-[#C4963C10]`}
                  >
                    Programas
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute left-0 mt-0 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {programas.map((prog) =>
                      prog.disabled ? (
                        <span
                          key={prog.href}
                          className="flex items-center justify-between px-4 py-2.5 text-[#2D2D2D]/40 text-sm cursor-default select-none"
                        >
                          {prog.label}
                          <span className="text-[9px] uppercase tracking-wider text-[#C4963C]/60 ml-2">Pronto</span>
                        </span>
                      ) : (
                        <Link key={prog.href} href={prog.href}>
                          <a
                            target={prog.href.startsWith("http") ? "_blank" : undefined}
                            className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] transition-colors"
                          >
                            {prog.label}
                          </a>
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {navLinks.map((link) =>
                  link.disabled ? (
                    <span
                      key={link.href}
                      className={`px-3.5 py-2 text-[13px] font-medium rounded-md cursor-default select-none opacity-40 ${
                        scrolled ? "text-[#2D2D2D]" : "text-white/90"
                      }`}
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Link key={link.href} href={link.href}>
                      <a
                        className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md hover:bg-[#C4963C10] ${
                          scrolled ? "text-[#2D2D2D]" : "text-white/90 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </Link>
                  )
                )}

                {/* Tienda Dropdown — todos desactivados */}
                <div className="relative group">
                  <button
                    className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-md flex items-center gap-1 opacity-40 cursor-default ${
                      scrolled ? "text-[#2D2D2D]" : "text-white/90"
                    }`}
                  >
                    Tienda
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute right-0 mt-0 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {tienda.map((item) => (
                      <span
                        key={item.href}
                        className="flex items-center justify-between px-4 py-2.5 text-[#2D2D2D]/40 text-sm cursor-default select-none"
                      >
                        {item.label}
                        <span className="text-[9px] uppercase tracking-wider text-[#C4963C]/60 ml-2">Pronto</span>
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            <a
              href="https://cursos.institutoascendant.com/library"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-[#C4963C] text-white text-[13px] font-semibold rounded-md hover:bg-[#B08530] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Acceso Campus
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
            {!hideNav && (
              <>
                {/* Mobile Programas */}
                <button
                  onClick={() => setOpenDropdown(openDropdown === "programas" ? null : "programas")}
                  className="w-full text-left px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors flex items-center justify-between"
                >
                  Programas
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "programas" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "programas" && (
                  <div className="pl-4 space-y-1">
                    {programas.map((prog) =>
                      prog.disabled ? (
                        <span
                          key={prog.href}
                          className="flex items-center justify-between px-4 py-2.5 text-[#2D2D2D]/40 text-sm cursor-default select-none rounded-md"
                        >
                          {prog.label}
                          <span className="text-[9px] uppercase tracking-wider text-[#C4963C]/60">Pronto</span>
                        </span>
                      ) : (
                        <Link key={prog.href} href={prog.href}>
                          <a
                            onClick={() => setMobileOpen(false)}
                            target={prog.href.startsWith("http") ? "_blank" : undefined}
                            className="block px-4 py-2.5 text-[#2D2D2D] text-sm hover:bg-[#C4963C10] rounded-md"
                          >
                            {prog.label}
                          </a>
                        </Link>
                      )
                    )}
                  </div>
                )}

                {navLinks.map((link) =>
                  link.disabled ? (
                    <span
                      key={link.href}
                      className="block px-4 py-3 text-[#2D2D2D]/40 font-medium rounded-md cursor-default select-none"
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Link key={link.href} href={link.href}>
                      <a
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-[#2D2D2D] font-medium rounded-md hover:bg-[#C4963C10] transition-colors"
                      >
                        {link.label}
                      </a>
                    </Link>
                  )
                )}

                {/* Mobile Tienda — todos desactivados */}
                <button
                  className="w-full text-left px-4 py-3 text-[#2D2D2D]/40 font-medium rounded-md cursor-default flex items-center justify-between"
                >
                  Tienda
                  <ChevronDown className="w-4 h-4" />
                </button>
              </>
            )}

            <a
              href="https://cursos.institutoascendant.com/library"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-[#C4963C] text-white text-center font-semibold rounded-md"
            >
              Acceso Campus
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
