import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, MapPin, BarChart3, Shield, Check } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const propertyTypes = [
  { value: "piso", label: "Piso" },
  { value: "casa", label: "Casa / Chalet" },
  { value: "atico", label: "Ático" },
  { value: "local", label: "Local comercial" },
  { value: "garaje", label: "Garaje" },
];

const municipalities = [
  { value: "valencia", label: "Valencia" },
  { value: "monteolivete", label: "Monteolivete" },
  { value: "ruzafa", label: "Ruzafa" },
  { value: "malilla", label: "Malilla" },
  { value: "en-corts", label: "En Corts" },
  { value: "quatre-carreres", label: "Quatre Carreres" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Datos de mercado actualizados",
    description: "Información basada en transacciones reales y tendencias actuales del mercado inmobiliario.",
  },
  {
    icon: MapPin,
    title: "Análisis por zona",
    description: "Conoce el valor de las viviendas en tu zona específica con datos precisos.",
  },
  {
    icon: BarChart3,
    title: "Comparativas detalladas",
    description: "Compara precios por metro cuadrado y evolución histórica de precios.",
  },
  {
    icon: Shield,
    title: "Fuente fiable",
    description: "Datos proporcionados por fuentes oficiales y profesionales del sector.",
  },
];

const ValoradorTinsa = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
            >
              Herramienta de Valoración
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              ¿Cuánto cuestan las viviendas en tu zona?
            </motion.h1>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Descubre el valor de mercado de las viviendas en tu zona. 
              Información actualizada y fiable para tomar las mejores decisiones.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
                <h2 className="font-display text-2xl font-bold mb-2">
                  Consulta de precios
                </h2>
                <p className="text-muted-foreground mb-8">
                  Rellena el formulario y te enviaremos información detallada sobre los precios en tu zona.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="municipality">Municipio / Zona</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una zona" />
                        </SelectTrigger>
                        <SelectContent>
                          {municipalities.map((m) => (
                            <SelectItem key={m.value} value={m.value}>
                              {m.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Tipo de inmueble</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tipo de inmueble" />
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

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="size">Superficie (m²)</Label>
                        <Input id="size" type="number" placeholder="80" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rooms">Habitaciones</Label>
                        <Input id="rooms" type="number" placeholder="3" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="612 345 678" />
                    </div>

                    <Button type="submit" size="lg" className="w-full" variant="cta">
                      Solicitar información
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
                      Nos pondremos en contacto contigo lo antes posible con la información solicitada.
                    </p>
                    <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                      Nueva consulta
                    </Button>
                  </div>
                )}
              </div>

              {/* External tool link */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  También puedes consultar la herramienta oficial de TINSA:
                </p>
                <a
                  href="https://www.tinsa.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Ir a TINSA.es →
                </a>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.h3 variants={fadeIn} className="font-display text-2xl font-bold">
                ¿Por qué conocer el valor de mercado?
              </motion.h3>
              <motion.p variants={fadeIn} className="text-muted-foreground">
                Conocer el precio real de las viviendas en tu zona te ayuda a tomar 
                decisiones informadas, ya sea para comprar, vender o invertir.
              </motion.p>

              <div className="space-y-6 mt-8">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeIn}
                className="bg-primary text-primary-foreground rounded-xl p-6 mt-8"
              >
                <h4 className="font-display text-xl font-semibold mb-2">
                  ¿Necesitas una valoración profesional?
                </h4>
                <p className="text-primary-foreground/80 mb-4">
                  Nuestros expertos te ofrecen una valoración gratuita y personalizada de tu inmueble.
                </p>
                <Button variant="hero" asChild>
                  <a href="/vender-inmueble">Solicitar valoración gratuita</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ValoradorTinsa;
