import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { name: "Resultados", href: "/resultados" },
  { name: "Comprar", href: "/servicios-comprador-inmuebles" },
  { name: "Vender", href: "/vender-inmueble" },
  { name: "Alquilar", href: "/alquilar" },
  { name: "Valorador TINSA", href: "/cuanto-cuestan-las-viviendas-en-tu-zona-tinsa" },
  { name: "Contacto", href: "/contacto" },
];

interface HeaderProps {
  variant?: "default" | "transparent";
}

export const Header = ({ variant = "default" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isTransparent = variant === "transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-sm"
      }`}
    >
      {/* Top bar */}
      <div className={`hidden md:block border-b ${isTransparent ? "border-primary-foreground/20" : "border-border"}`}>
        <div className="container-wide flex items-center justify-between py-2 text-sm">
          <div className={`flex items-center gap-2 ${isTransparent ? "text-primary-foreground" : "text-muted-foreground"}`}>
            <Phone className="h-4 w-4" />
            <span>961 108 848</span>
          </div>
          <div className={`flex items-center gap-4 ${isTransparent ? "text-primary-foreground" : "text-muted-foreground"}`}>
            <a href="https://www.facebook.com/primergrupoblasco/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/primergrupoblasco/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            src={isTransparent ? logoWhite : logoFull}
            alt="Primer Grupo Blasco"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? isTransparent
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                  : isTransparent
                  ? "text-primary-foreground hover:bg-primary-foreground/10"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant={isTransparent ? "heroOutline" : "cta"} size="lg" asChild>
            <Link to="/vender-inmueble">Valoración Gratuita</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container-wide py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="cta" size="lg" className="mt-2" asChild>
                <Link to="/vender-inmueble" onClick={() => setIsMenuOpen(false)}>
                  Valoración Gratuita
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
