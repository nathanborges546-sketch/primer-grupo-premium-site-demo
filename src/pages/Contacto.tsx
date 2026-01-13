import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Check, Facebook, Instagram } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const subjects = [
  { value: "comprar", label: "Quiero comprar un inmueble" },
  { value: "vender", label: "Quiero vender mi inmueble" },
  { value: "alquilar", label: "Quiero alquilar" },
  { value: "valoracion", label: "Solicitar valoración gratuita" },
  { value: "otro", label: "Otro asunto" },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "961 108 848",
    link: "tel:961108848",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@primergrupoblasco.com",
    link: "mailto:info@primergrupoblasco.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Quatre Carreres, Valencia",
    link: null,
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Vie: 9:30 - 14:00, 16:30 - 20:00",
    link: null,
  },
];

const Contacto = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-wide">
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
              Contacto
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              ¿En qué podemos <span className="text-gradient">ayudarte</span>?
            </motion.h1>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Estamos aquí para resolver todas tus dudas. Contacta con nosotros 
              y te responderemos lo antes posible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
                <h2 className="font-display text-2xl font-bold mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-muted-foreground mb-8">
                  Rellena el formulario y nos pondremos en contacto contigo.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre *</Label>
                        <Input id="name" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="612 345 678" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" variant="cta">
                      Enviar mensaje
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
                    <h3 className="font-display text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground mb-6">
                      Gracias por contactar con nosotros. Te responderemos lo antes posible.
                    </p>
                    <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                      Enviar otro mensaje
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <h3 className="font-display text-2xl font-bold mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h4 className="font-display text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/primergrupoblasco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/primergrupoblasco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-primary text-primary-foreground rounded-xl p-8"
              >
                <h4 className="font-display text-xl font-semibold mb-4">
                  ¿Prefieres una llamada?
                </h4>
                <p className="text-primary-foreground/80 mb-6">
                  Llámanos directamente o déjanos tu teléfono y te llamamos nosotros.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:961108848">
                    <Phone className="h-5 w-5 mr-2" />
                    961 108 848
                  </a>
                </Button>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                variants={fadeIn}
                className="aspect-video bg-muted rounded-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-muted-foreground">Quatre Carreres, Valencia</p>
                  <p className="text-sm text-muted-foreground/70">Mapa interactivo próximamente</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
