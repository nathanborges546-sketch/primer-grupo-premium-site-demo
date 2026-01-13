import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Users, FileText, Megaphone, Handshake, Check, ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import heroListings from "@/assets/hero-listings.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Valoración profesional",
    description: "Realizamos un estudio de mercado y valoramos tu inmueble de forma gratuita y sin compromiso.",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Plan de marketing",
    description: "Fotos profesionales, tours virtuales y difusión en los mejores portales inmobiliarios.",
  },
  {
    number: "03",
    icon: Users,
    title: "Gestión de visitas",
    description: "Filtramos a los compradores potenciales y gestionamos todas las visitas por ti.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Negociación experta",
    description: "Negociamos las mejores condiciones y te asesoramos en cada oferta recibida.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Cierre y firma",
    description: "Preparamos toda la documentación y te acompañamos hasta la firma ante notario.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Mejor precio",
    description: "Nuestra estrategia de marketing y negociación consigue los mejores precios del mercado.",
  },
  {
    icon: Shield,
    title: "Seguridad total",
    description: "Verificamos a todos los compradores y garantizamos una transacción segura.",
  },
  {
    icon: Star,
    title: "Sin estrés",
    description: "Nos encargamos de todo para que tú solo tengas que esperar la firma.",
  },
];

const propertyTypes = [
  { value: "piso", label: "Piso" },
  { value: "casa", label: "Casa / Chalet" },
  { value: "atico", label: "Ático" },
  { value: "local", label: "Local comercial" },
  { value: "garaje", label: "Garaje" },
  { value: "otro", label: "Otro" },
];

const VenderInmueble = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroListings})` }}
        />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeIn}
                className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
              >
                Servicios para Vendedores
              </motion.span>
              <motion.h1
                variants={fadeIn}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Vendemos tu inmueble al{" "}
                <span className="text-gradient">mejor precio</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
                Más de 15 años de experiencia vendiendo propiedades en Valencia. 
                Solicita tu valoración gratuita y descubre cuánto vale tu inmueble.
              </motion.p>

              {/* Benefits */}
              <motion.div variants={fadeIn} className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl shadow-xl p-8 border border-border"
            >
              <h2 className="font-display text-2xl font-bold mb-2">
                Solicita valoración gratuita
              </h2>
              <p className="text-muted-foreground mb-6">
                Sin compromiso. Te contactamos en menos de 24 horas.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="612 345 678" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Tipo de inmueble</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección aproximada</Label>
                    <Input id="address" placeholder="Calle, número, zona..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más sobre tu inmueble..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="cta">
                    Solicitar valoración gratuita
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">¡Solicitud enviada!</h3>
                  <p className="text-muted-foreground mb-6">
                    Un asesor se pondrá en contacto contigo en menos de 24 horas.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                    Nueva solicitud
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-accent font-medium text-sm uppercase tracking-wider">
              Nuestro Proceso
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Cómo vendemos tu inmueble
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso claro, profesional y orientado a conseguir el mejor resultado.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-7 w-7" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-accent">{step.number}</span>
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Listo para vender tu inmueble?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Solicita ahora tu valoración gratuita y descubre lo que podemos hacer por ti.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button variant="hero" size="xl" asChild>
                <a href="#top">
                  Solicitar valoración <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default VenderInmueble;
