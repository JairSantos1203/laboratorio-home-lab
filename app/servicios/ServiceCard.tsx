// servicios/ServiceCard.tsx
"use client";
import { Servicio } from "./types";
import { motion } from "framer-motion";

interface ServiceCardProps {
  servicio: Servicio;
}

export default function ServiceCard({ servicio }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-[#D12E7B]/10 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#333333] group-hover:bg-[#D12E7B] group-hover:text-white transition-all duration-300 mb-6">
        {/* Aquí va el icono, si no hay uno en la data, ponemos uno por defecto */}
        {servicio.icon ? servicio.icon : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )}
      </div>

      <h3 className="text-xl font-black text-[#333333] uppercase tracking-tighter mb-3">
        {servicio.title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {servicio.description}
      </p>

      <div className="mt-6 flex items-center text-[#D12E7B] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Saber más 
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.div>
  );
}