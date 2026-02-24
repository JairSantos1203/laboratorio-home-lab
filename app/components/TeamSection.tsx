"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const pasosResultados = [
    {
        id: 1,
        titulo: "Seguridad Biométrica",
        descripcion:
            "Tus datos están protegidos bajo protocolos de encriptación de grado médico, garantizando que solo tú accedas a tu información.",
        imagen: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", // Imagen de seguridad/tech
        etiqueta: "Protección"
    },
    {
        id: 2,
        titulo: "Historial Digital",
        descripcion:
            "Mantén un registro organizado de todos tus análisis pasados. Compara tus valores y observa tu evolución clínica en segundos.",
        imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", // Imagen de análisis/data
        etiqueta: "Organización"
    },
    {
        id: 3,
        titulo: "Disponibilidad 24/7",
        descripcion:
            "Ya no dependes de horarios de oficina. Descarga, imprime o comparte tus resultados con tu médico desde cualquier lugar del mundo.",
        imagen: "https://images.unsplash.com/photo-1516542019137-ee2c223add37?q=80&w=800", // Imagen de tablet/movilidad
        etiqueta: "Acceso Total"
    },
];

export default function ResultsGrid() {
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Fondo decorativo HomeLab */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#D12E7B] rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#D12E7B] font-black tracking-[0.3em] uppercase mb-4 block text-sm">
                        Plataforma Digital
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#333333] mb-4 uppercase tracking-tighter">
                        Gestiona tus <span className="text-[#D12E7B]">Resultados</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#D12E7B] mx-auto rounded-full" />
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        Tecnología diseñada para que tomes el control de tu salud de manera ágil y segura.
                    </p>
                </motion.div>

                {/* Grid de tarjetas de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 auto-rows-fr">
                    {pasosResultados.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full relative">
                                
                                {/* Imagen con Label Flotante */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.imagen}
                                        alt={item.titulo}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#D12E7B] text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                                            {item.etiqueta}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                </div>

                                {/* Contenido */}
                                <div className="p-8 flex flex-col flex-grow text-center items-center">
                                    <h3 className="text-2xl font-black text-[#333333] mb-4 uppercase tracking-tight">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.descripcion}
                                    </p>
                                    
                                    {/* Icono decorativo de paso */}
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#D12E7B] font-black border border-gray-100">
                                        0{item.id}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón Central de Acción */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <Link href="/resultados">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center justify-center px-12 py-5 text-xs font-black uppercase tracking-[0.3em] text-white bg-[#333333] rounded-full shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <span className="relative z-10">Ingresar al Portal</span>
                            <span className="absolute inset-0 bg-[#D12E7B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}