import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resultados from "./pages/Resultados";
import ValoradorTinsa from "./pages/ValoradorTinsa";
import ServiciosComprador from "./pages/ServiciosComprador";
import VenderInmueble from "./pages/VenderInmueble";
import Alquilar from "./pages/Alquilar";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/cuanto-cuestan-las-viviendas-en-tu-zona-tinsa" element={<ValoradorTinsa />} />
          <Route path="/servicios-comprador-inmuebles" element={<ServiciosComprador />} />
          <Route path="/vender-inmueble" element={<VenderInmueble />} />
          <Route path="/alquilar" element={<Alquilar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
