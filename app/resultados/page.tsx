"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Importación necesaria para la navegación

export default function ResultadosPage() {
  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      
      {/* PASO 1: BOTÓN DE ACCESO ADMIN DISCRETO */}
      <div className="absolute top-10 right-6 md:right-12 z-50">
        <Link href="/resultados/admin-login">
          <button className="flex items-center gap-3 text-gray-400 hover:text-[#D12E7B] transition-all duration-300 group">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
              Acceso Staff
            </span>
            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 group-hover:border-[#D12E7B]/30 group-hover:bg-[#D12E7B]/5 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </button>
        </Link>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#D12E7B]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#333333]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-3xl mb-6 text-[#D12E7B] shadow-inner">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#333333] uppercase tracking-tighter mb-4">
            Consulta tus <span className="text-[#D12E7B]">Resultados</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
            Ingresa los datos impresos en tu comprobante de atención para descargar tus análisis clínicos de forma segura.
          </p>
        </div>

        {/* CONTENEDOR DEL FORMULARIO DE ACCESO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Barra lateral decorativa magenta */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#D12E7B]"></div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Campo Usuario/ID */}
              <div className="space-y-2">
                <label className="text-[#333333] font-black uppercase text-[11px] tracking-widest ml-1">
                  Usuario o DNI:
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ej. 70654321"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D12E7B]/20 focus:bg-white outline-none rounded-2xl py-4 px-6 transition-all font-bold text-[#333333]"
                  />
                </div>
              </div>

              {/* Campo Contraseña/Token */}
              <div className="space-y-2">
                <label className="text-[#333333] font-black uppercase text-[11px] tracking-widest ml-1">
                  Código de Acceso:
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D12E7B]/20 focus:bg-white outline-none rounded-2xl py-4 px-6 transition-all font-bold text-[#333333]"
                  />
                </div>
              </div>
            </div>

            {/* Términos y privacidad sutil */}
            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" className="mt-1 accent-[#D12E7B]" id="terms" />
              <label htmlFor="terms" className="text-xs text-gray-400 font-medium">
                Acepto los términos de privacidad y autorizo la visualización de mis datos médicos sensibles.
              </label>
            </div>

            {/* BOTÓN DE ACCESO */}
            <button className="w-full bg-[#333333] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#D12E7B] transition-all duration-500 shadow-xl shadow-black/10 flex items-center justify-center gap-3">
              Ingresar al portal
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </button>
          </form>
        </motion.div>

        {/* AYUDA ADICIONAL */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-3xl flex items-center gap-4 border border-gray-100">
            <div className="bg-white p-3 rounded-2xl text-[#D12E7B] shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-[#333333] font-bold text-sm uppercase tracking-tight">¿Problemas para entrar?</p>
              <p className="text-gray-500 text-xs">Consulta nuestra guía de acceso rápido.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-3xl flex items-center gap-4 border border-gray-100">
            <div className="bg-white p-3 rounded-2xl text-[#D12E7B] shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-[#333333] font-bold text-sm uppercase tracking-tight">Soporte Técnico</p>
              <p className="text-gray-500 text-xs">Llámanos al (044) 480730</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}