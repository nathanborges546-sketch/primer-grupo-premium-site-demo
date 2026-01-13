import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search, FileCheck, Home, Handshake, Check, ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";
import property2 from "@/assets/property-2.jpg";

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
    icon: Search,
    title: "Definimos tus necesidades",
    description: "Analizamos contigo qué tipo de vivienda buscas, presupuesto, zona preferida y características imprescindibles.",
  },
  {
    number: "02",
    icon: Home,
    title: "Búsqueda personalizada",
    description: "Realizamos una búsqueda exhaustiva en nuestra cartera y en el mercado para encontrar las opciones que mejor se adapten a ti.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Visitas y asesoramiento",
    description: "Te acompañamos en las visitas, asesorándote sobre cada propiedad, su estado, precio de mercado y potencial.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Negociación y cierre",
    description: "Negociamos las mejores condiciones en tu nombre y te acompañamos hasta la firma ante notario.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Seguridad jurídica",
    description: "Verificamos toda la documentación y estado legal de cada propiedad.",
  },
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Te presentamos solo las opciones que realmente encajan con lo que buscas.",
  },
  {
    icon: ThumbsUp,
    title: "Experiencia local",
    description: "Conocemos cada rincón de Quatre Carreres y alrededores.",
  },
];

const ServiciosComprador = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeIn}
                className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium"
              >
                Servicios para Compradores
              </motion.span>
              <motion.h1
                variants={fadeIn}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Te ayudamos a encontrar tu{" "}
                <span className="text-gradient">hogar ideal</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
                Comprar una vivienda es una de las decisiones más importantes de tu vida. 
                Te acompañamos en cada paso del proceso para que sea una experiencia segura y satisfactoria.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button size="xl" variant="cta" asChild>
                  <Link to="/resultados">Ver inmuebles disponibles</Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/contacto">Hablar con un asesor</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block"
            >
              <img
                src={property2}
                alt="Terraza con vistas"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
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
              Cómo te acompañamos en la compra
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso claro y transparente para que encuentres tu vivienda ideal sin estrés.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="relative"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
                )}
                
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">{step.number}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
                ¿Por qué elegirnos?
              </motion.span>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Ventajas de comprar con nosotros
              </motion.h2>

              <div className="space-y-6">
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

              <motion.div variants={fadeIn} className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/contacto">
                    Solicitar asesoramiento <ArrowRight className="h-4 w-4" />
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
                Lo que hacemos por ti
              </h3>
              <ul className="space-y-4">
                {[
                  "Análisis de tus necesidades y presupuesto",
                  "Búsqueda activa de propiedades",
                  "Verificación del estado legal y técnico",
                  "Acompañamiento en todas las visitas",
                  "Asesoramiento sobre hipotecas y financiación",
                  "Negociación del precio en tu nombre",
                  "Gestión de documentación y trámites",
                  "Acompañamiento hasta la firma ante notario",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Preparado para encontrar tu hogar?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contacta con nosotros y cuéntanos qué estás buscando. Te ayudaremos a encontrarlo.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Button size="xl" variant="cta" asChild>
                <Link to="/contacto">Contactar ahora</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/resultados">Ver inmuebles</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiciosComprador;
