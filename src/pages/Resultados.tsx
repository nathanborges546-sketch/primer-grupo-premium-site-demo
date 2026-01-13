import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, BedDouble, Bath, Maximize, Phone } from "lucide-react";
import heroListings from "@/assets/hero-listings.jpg";
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

const propertyTypes = [
  { value: "all", label: "Todos los tipos" },
  { value: "piso", label: "Piso" },
  { value: "casa", label: "Casa / Chalet" },
  { value: "atico", label: "Ático" },
  { value: "local", label: "Local comercial" },
];

const zones = [
  { value: "all", label: "Todas las zonas" },
  { value: "monteolivete", label: "Monteolivete" },
  { value: "ruzafa", label: "Ruzafa" },
  { value: "malilla", label: "Malilla" },
  { value: "en-corts", label: "En Corts" },
  { value: "quatre-carreres", label: "Quatre Carreres" },
];

const operations = [
  { value: "all", label: "Compra / Alquiler" },
  { value: "venta", label: "Venta" },
  { value: "alquiler", label: "Alquiler" },
];

// Sample properties (placeholders)
const properties = [
  {
    id: 1,
    image: property1,
    title: "Piso en Quatre Carreres",
    location: "Monteolivete, Valencia",
    price: "Consultar precio",
    beds: 3,
    baths: 2,
    size: 95,
    type: "piso",
    operation: "venta",
    tag: "Ejemplo",
  },
  {
    id: 2,
    image: property2,
    title: "Ático con Terraza Panorámica",
    location: "Ruzafa, Valencia",
    price: "Consultar precio",
    beds: 2,
    baths: 1,
    size: 85,
    type: "atico",
    operation: "venta",
    tag: "Ejemplo",
  },
  {
    id: 3,
    image: property3,
    title: "Apartamento Luminoso",
    location: "Malilla, Valencia",
    price: "Consultar precio",
    beds: 2,
    baths: 1,
    size: 70,
    type: "piso",
    operation: "alquiler",
    tag: "Ejemplo",
  },
  {
    id: 4,
    image: property1,
    title: "Piso Reformado Centro",
    location: "En Corts, Valencia",
    price: "Consultar precio",
    beds: 4,
    baths: 2,
    size: 120,
    type: "piso",
    operation: "venta",
    tag: "Ejemplo",
  },
  {
    id: 5,
    image: property2,
    title: "Estudio Moderno",
    location: "Ruzafa, Valencia",
    price: "Consultar precio",
    beds: 1,
    baths: 1,
    size: 45,
    type: "piso",
    operation: "alquiler",
    tag: "Ejemplo",
  },
  {
    id: 6,
    image: property3,
    title: "Chalet Familiar",
    location: "Quatre Carreres, Valencia",
    price: "Consultar precio",
    beds: 5,
    baths: 3,
    size: 250,
    type: "casa",
    operation: "venta",
    tag: "Ejemplo",
  },
];

const Resultados = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [zone, setZone] = useState("all");
  const [operation, setOperation] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = propertyType === "all" || property.type === propertyType;
    const matchesOperation = operation === "all" || property.operation === operation;
    return matchesSearch && matchesType && matchesOperation;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroListings})` }}
        />
        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Encuentra tu <span className="text-gradient">inmueble ideal</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
              Explora nuestra selección de propiedades en las mejores zonas de Valencia. 
              Pisos, áticos, casas y locales comerciales.
            </motion.p>
          </motion.div>

          {/* Search Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl shadow-lg p-6 border border-border"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por ubicación o nombre..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={operation} onValueChange={setOperation}>
                <SelectTrigger>
                  <SelectValue placeholder="Operación" />
                </SelectTrigger>
                <SelectContent>
                  {operations.map((op) => (
                    <SelectItem key={op.value} value={op.value}>
                      {op.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de inmueble" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={zone} onValueChange={setZone}>
                <SelectTrigger>
                  <SelectValue placeholder="Zona" />
                </SelectTrigger>
                <SelectContent>
                  {zones.map((z) => (
                    <SelectItem key={z.value} value={z.value}>
                      {z.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProperties.length}</span> inmuebles encontrados
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={fadeIn}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {property.tag}
                    </span>
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {property.operation}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold">{property.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" /> {property.size} m²
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">{property.price}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contacto">
                          <Phone className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link to="/contacto">Contactar</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Home className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">No se encontraron inmuebles</h3>
              <p className="text-muted-foreground mb-6">Prueba a modificar los filtros de búsqueda</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setPropertyType("all");
                setZone("all");
                setOperation("all");
              }}>
                Limpiar filtros
              </Button>
            </div>
          )}
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
              ¿No encuentras lo que buscas?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Cuéntanos qué necesitas y te ayudaremos a encontrar el inmueble perfecto para ti.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button size="xl" variant="cta" asChild>
                <Link to="/contacto">Solicitar información</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;
