import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const footerLinks = {
  servicios: [
    { name: "Comprar Inmueble", href: "/servicios-comprador-inmuebles" },
    { name: "Vender Inmueble", href: "/vender-inmueble" },
    { name: "Alquilar", href: "/alquilar" },
    { name: "Valorador TINSA", href: "/cuanto-cuestan-las-viviendas-en-tu-zona-tinsa" },
  ],
  empresa: [
    { name: "Resultados", href: "/resultados" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Cookies", href: "/cookies" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logoWhite} alt="Primer Grupo Blasco" className="h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Desde 2009, su inmobiliaria de confianza en Valencia. Especialistas en Quatre Carreres.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/primergrupoblasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/primergrupoblasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display text-lg font-semibold mb-4 mt-8">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Teléfono</p>
                  <a href="tel:961108848" className="font-medium hover:text-accent transition-colors">
                    961 108 848
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Email</p>
                  <a href="mailto:info@primergrupoblasco.com" className="font-medium hover:text-accent transition-colors">
                    info@primergrupoblasco.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Dirección</p>
                  <p className="font-medium">Quatre Carreres, Valencia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Primer Grupo Blasco. Todos los derechos reservados.</p>
          <p>Inmobiliaria en Valencia</p>
        </div>
      </div>
    </footer>
  );
};
