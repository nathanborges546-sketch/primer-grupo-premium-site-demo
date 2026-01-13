import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Users, FileText, Shield, Check, ArrowRight, Key, Wallet, Wrench } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const landlordServices = [
  {
    icon: Key,
    title: "Gestión integral",
    description: "Nos encargamos de todo: búsqueda de inquilinos, contratos, cobros y mantenimiento.",
  },
  {
    icon: Users,
    title: "Selección de inquilinos",
    description: "Verificamos solvencia, referencias y antecedentes para encontrar al inquilino ideal.",
  },
  {
    icon: Shield,
    title: "Garantía de cobro",
    description: "Te garantizamos el cobro de la renta cada mes, sin preocupaciones.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Gestionamos las incidencias y reparaciones de tu inmueble.",
  },
];

const tenantServices = [
  {
    icon: Home,
    title: "Amplia oferta",
    description: "Acceso a las mejores propiedades en alquiler de la zona.",
  },
  {
    icon: FileText,
    title: "Trámites sencillos",
    description: "Te ayudamos con toda la documentación y el contrato.",
  },
  {
    icon: Wallet,
    title: "Precios justos",
    description: "Asesoramiento sobre precios de mercado y negociación.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Valoración del inmueble",
    description: "Analizamos tu propiedad y establecemos el precio óptimo de alquiler.",
  },
  {
    number: "02",
    title: "Marketing y difusión",
    description: "Publicamos tu inmueble en los mejores portales con fotos profesionales.",
  },
  {
    number: "03",
    title: "Selección de inquilinos",
    description: "Filtramos candidatos y verificamos su solvencia y referencias.",
  },
  {
    number: "04",
    title: "Contrato y entrega",
    description: "Preparamos el contrato y gestionamos la entrega de llaves.",
  },
  {
    number: "05",
    title: "Gestión continua",
    description: "Nos encargamos del día a día: cobros, incidencias y renovaciones.",
  },
];

const Alquilar = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
            >
              Servicios de Alquiler
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Gestión de alquileres{" "}
              <span className="text-gradient">sin preocupaciones</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
              Ya seas propietario o inquilino, te ofrecemos un servicio completo 
              para que alquilar sea fácil, seguro y sin complicaciones.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="xl" variant="cta" asChild>
                <Link to="/contacto">Soy propietario</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/resultados">Busco alquiler</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services for Landlords */}
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
              Para Propietarios
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Alquila tu inmueble con tranquilidad
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Nos encargamos de todo para que tú solo tengas que recibir la renta cada mes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {landlordServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services for Tenants */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeIn} className="text-accent font-medium text-sm uppercase tracking-wider">
                Para Inquilinos
              </motion.span>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Encuentra tu próximo hogar
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-8">
                Te ayudamos a encontrar el alquiler perfecto para ti, con un proceso 
                claro y sin sorpresas.
              </motion.p>

              <div className="space-y-6">
                {tenantServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/resultados">
                    Ver alquileres disponibles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                Requisitos para alquilar
              </h3>
              <ul className="space-y-4">
                {[
                  "Documento de identidad (DNI/NIE)",
                  "Contrato de trabajo o justificante de ingresos",
                  "Últimas nóminas o declaración de la renta",
                  "Referencias de anteriores arrendadores",
                  "Fianza y garantías adicionales (según caso)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70 mb-4">
                  ¿Tienes dudas sobre los requisitos?
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contacto">Consultar sin compromiso</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process for Landlords */}
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
              Proceso de Alquiler
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Cómo trabajamos
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso profesional y transparente para propietarios.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-5 gap-4"
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="relative"
              >
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border h-full">
                  <span className="text-4xl font-bold text-accent/30">{step.number}</span>
                  <h3 className="font-display text-base font-semibold mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 text-muted-foreground/30">
                    →
                  </div>
                )}
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
              ¿Tienes un inmueble para alquilar?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contacta con nosotros y te explicamos cómo podemos ayudarte a 
              sacar el máximo rendimiento a tu propiedad.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contacto">Contactar ahora</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/vender-inmueble">Prefiero vender</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Alquilar;
