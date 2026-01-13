import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Key, TrendingUp, Users, Check, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Home,
    title: "Comprar",
    description: "Te acompañamos en todo el proceso de compra de tu nuevo hogar.",
    link: "/servicios-comprador-inmuebles",
  },
  {
    icon: TrendingUp,
    title: "Vender",
    description: "Vendemos tu inmueble al mejor precio y en el menor tiempo.",
    link: "/vender-inmueble",
  },
  {
    icon: Key,
    title: "Alquilar",
    description: "Gestión integral de alquileres para propietarios e inquilinos.",
    link: "/alquilar",
  },
];

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "1000+", label: "Clientes satisfechos" },
  { value: "500+", label: "Propiedades vendidas" },
  { value: "100%", label: "Compromiso" },
];

const featuredProperties = [
  {
    image: property1,
    title: "Piso en Quatre Carreres",
    location: "Monteolivete, Valencia",
    price: "Consultar",
    beds: 3,
    baths: 2,
    size: "95",
    tag: "Ejemplo",
  },
  {
    image: property2,
    title: "Ático con Terraza",
    location: "Ruzafa, Valencia",
    price: "Consultar",
    beds: 2,
    baths: 1,
    size: "85",
    tag: "Ejemplo",
  },
  {
    image: property3,
    title: "Apartamento Luminoso",
    location: "Malilla, Valencia",
    price: "Consultar",
    beds: 2,
    baths: 1,
    size: "70",
    tag: "Ejemplo",
  },
];

const Index = () => {
  return (
    <Layout headerVariant="transparent">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container-wide relative z-10 pt-32 pb-20">
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
              Inmobiliaria en Quatre Carreres
            </motion.span>
            
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Tu inmobiliaria de{" "}
              <span className="text-accent">confianza</span> en Valencia
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
            >
              Desde 2009 ayudando a miles de familias a encontrar su hogar ideal. 
              Especialistas en Monteolivete, En Corts, Ruzafa y Malilla.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/servicios-comprador-inmuebles">
                  Quiero Comprar
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/vender-inmueble">Quiero Vender</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-accent font-medium text-sm uppercase tracking-wider">
              Nuestros Servicios
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              ¿En qué podemos ayudarte?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos un servicio integral para todas tus necesidades inmobiliarias. 
              Tratamos cada caso de forma personalizada.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                className="group relative bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Saber más <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.span variants={fadeIn} className="text-accent font-medium text-sm uppercase tracking-wider">
                Sobre Nosotros
              </motion.span>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Desde 2009 a tu servicio
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-6">
                Primer Grupo Blasco se fundó con mucha ilusión y ganas de formar una gran empresa, 
                por profesionales con experiencia empresarial y gestión patrimonial.
              </motion.p>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-8">
                Actualmente somos una inmobiliaria consolidada y de prestigio en Valencia, 
                especialmente en la zona de Quatre Carreres.
              </motion.p>
              
              <motion.div variants={fadeIn} className="space-y-4 mb-8">
                {[
                  "Tratamos con personas, no con inmuebles",
                  "Gestión personalizada y transparente",
                  "Conocimiento profundo de la zona",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn}>
                <Button size="lg" asChild>
                  <Link to="/resultados">
                    Ver Inmuebles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={heroInterior}
                alt="Interior moderno"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80">Años de experiencia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeIn} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <motion.span variants={fadeIn} className="text-accent font-medium text-sm uppercase tracking-wider">
                Propiedades Destacadas
              </motion.span>
              <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold mt-2">
                Encuentra tu hogar ideal
              </motion.h2>
            </div>
            <motion.div variants={fadeIn}>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resultados">
                  Ver todos los inmuebles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProperties.map((property, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {property.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-1">{property.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{property.location}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{property.beds} hab.</span>
                    <span>{property.baths} baño</span>
                    <span>{property.size} m²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{property.price}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/contacto">Contactar</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeIn} className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Quieres vender tu inmueble?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Solicita una valoración gratuita y sin compromiso. 
              Te ayudamos a conseguir el mejor precio para tu propiedad.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/vender-inmueble">Valoración Gratuita</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contacto">Contactar</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
