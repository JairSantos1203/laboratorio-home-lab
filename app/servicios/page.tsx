"use client";
import ServiceCard from "./ServiceCard";
import { servicios } from "./data"; 

export default function ServiciosPage() {
  return (
    <section className="relative bg-white pb-24">
      
      {/* ENCABEZADO PREMIUM HOMELAB */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-[#333333] overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Fondo con gradiente profundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#444444] via-[#333333] to-[#1a1a1a]"></div>
        
        {/* Patrón de puntos técnico */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        {/* Brillo ambiental en Magenta */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D12E7B] rounded-full blur-[100px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-block mb-4">
            <span className="text-white uppercase font-black tracking-[0.4em] text-[10px] bg-[#D12E7B] px-4 py-1.5 rounded-full shadow-lg shadow-[#D12E7B]/20">
              Servicios de laboratorio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
            Nuestro <span className="text-[#D12E7B]">Servicios</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base font-medium tracking-wide">
            Soluciones de diagnóstico precisas con la mejor tecnología y calidez humana.
          </p>
        </div>
      </div>

      {/* ONDA DIVISORA */}
      <div className="relative w-full leading-[0] -mt-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-20"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.id} servicio={servicio} />
          ))}
        </div>
      </div>

      {/* FOOTER DE SECCIÓN (Opcional) */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
          ¿No encuentras lo que buscas?
        </p>
        <button className="mt-4 text-[#D12E7B] font-black uppercase text-sm border-b-2 border-[#D12E7B] pb-1 hover:text-[#333333] hover:border-[#333333] transition-all">
          Contáctanos para pruebas especiales
        </button>
      </div>
    </section>
  );
}