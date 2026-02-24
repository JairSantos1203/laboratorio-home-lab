"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Estructura de datos preparada para tu Base de Datos
interface Analisis {
  id: string;
  dni: string;
  paciente: string;
  estado: "pendiente" | "terminado";
  fecha: string;
}

export default function AdminDashboard() {
  const [tabActual, setTabActual] = useState<"todos" | "pendientes" | "terminados">("todos");

  // Simulación de datos (Aquí conectarás tu fetch de la BD)
  const [analisis] = useState<Analisis[]>([
    { id: "1", dni: "70654321", paciente: "JUAN PEREZ", estado: "terminado", fecha: "2024-05-20" },
    { id: "2", dni: "12345678", paciente: "MARIA GARCIA", estado: "pendiente", fecha: "2024-05-21" },
    { id: "3", dni: "44556677", paciente: "CARLOS RUIZ", estado: "pendiente", fecha: "2024-05-21" },
  ]);

  // Cálculos para los Gráficos/Cards de estadísticas
  const total = analisis.length;
  const terminados = analisis.filter(a => a.estado === "terminado").length;
  const pendientes = analisis.filter(a => a.estado === "pendiente").length;

  // Filtrado de lista según el botón seleccionado
  const listaFiltrada = analisis.filter(a => {
    if (tabActual === "pendientes") return a.estado === "pendiente";
    if (tabActual === "terminados") return a.estado === "terminado";
    return true;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 pt-20">
      
      {/* BARRA LATERAL (COLUMNA ADMIN) */}
      <aside className="w-64 bg-[#333333] text-white p-6 flex flex-col fixed h-full shadow-2xl">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#D12E7B] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-black">
            AD
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D12E7B]">Administrador</p>
          <p className="font-bold text-sm tracking-tight">Staff HomeLab</p>
        </div>

        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setTabActual("todos")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tabActual === 'todos' ? 'bg-[#D12E7B] shadow-lg shadow-[#D12E7B]/20' : 'hover:bg-white/5'}`}
          >
            📋 Todos
          </button>
          <button 
            onClick={() => setTabActual("pendientes")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tabActual === 'pendientes' ? 'bg-[#D12E7B]' : 'hover:bg-white/5'}`}
          >
            ⏳ Pendientes
          </button>
          <button 
            onClick={() => setTabActual("terminados")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tabActual === 'terminados' ? 'bg-[#D12E7B]' : 'hover:bg-white/5'}`}
          >
            ✅ Terminados
          </button>
        </nav>

        <button className="mt-auto flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
          🚪 Cerrar Sesión
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL (DASHBOARD) */}
      <main className="flex-1 ml-64 p-10">
        
        {/* SECCIÓN DE GRÁFICOS / CARDS DE ESTADO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-gray-50 rounded-full -mr-10 -mt-10 group-hover:bg-gray-100 transition-colors"></div>
            <p className="text-[#333333] font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-60">Total Análisis</p>
            <h3 className="text-5xl font-black text-[#333333]">{total}</h3>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group">
             <div className="absolute right-0 top-0 w-24 h-24 bg-amber-50 rounded-full -mr-10 -mt-10"></div>
            <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2">En Proceso</p>
            <h3 className="text-5xl font-black text-[#333333]">{pendientes}</h3>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-[#D12E7B]/5 rounded-full -mr-10 -mt-10"></div>
            <p className="text-[#D12E7B] font-black text-[10px] uppercase tracking-[0.2em] mb-2">Terminados</p>
            <h3 className="text-5xl font-black text-[#D12E7B]">{terminados}</h3>
          </motion.div>
        </div>

        {/* LISTADO FILTRADO */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-black/5 overflow-hidden border border-gray-100">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="font-black text-[#333333] uppercase tracking-tighter text-xl">
              Lista de <span className="text-[#D12E7B]">{tabActual}</span>
            </h2>
            <button className="bg-[#333333] text-white px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#D12E7B] transition-all">
              + Registrar Nuevo
            </button>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-left">Paciente</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">DNI</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {listaFiltrada.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-black text-[#333333] uppercase text-sm tracking-tight">{item.paciente}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.fecha}</p>
                  </td>
                  <td className="px-8 py-6 text-center font-bold text-gray-600">{item.dni}</td>
                  <td className="px-8 py-6 text-center">
                    <span className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                      item.estado === 'terminado' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-amber-100 text-amber-600'
                    }`}>
                      {item.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}