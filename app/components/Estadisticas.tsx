"use client";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Datos locales sugeridos para HomeLab (puedes mover esto a ../data/stats si prefieres)
const statsHomeLab = [
    { count: "500", text: "TIPOS DE", subtext: "EXÁMENES" },
    { count: "24", text: "HORAS", subtext: "RESULTADOS" },
    { count: "10", text: "AÑOS DE", subtext: "EXPERIENCIA" },
    { count: "100", text: "EFECTIVIDAD", subtext: "DIAGNÓSTICA" },
];

function Counter({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const numericValue = parseInt(value, 10);

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Estadisticas() {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {statsHomeLab.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50"
                        >
                            <div className="flex flex-col items-center justify-center">
                                {/* Número con color Magenta de HomeLab */}
                                <span className="text-5xl md:text-7xl font-black text-[#D12E7B] flex items-baseline">
                                    <Counter value={item.count} />
                                    {item.count === "100" && <span className="text-3xl ml-1">%</span>}
                                    {item.count === "500" && <span className="text-3xl ml-1">+</span>}
                                </span>
                                
                                <div className="mt-4 flex flex-col text-center">
                                    <span className="font-bold text-[#333333] text-xs md:text-sm tracking-[0.2em] leading-tight uppercase">
                                        {item.text}
                                    </span>
                                    <span className="font-medium text-[#333333]/60 text-xs md:text-sm tracking-[0.2em] leading-tight uppercase">
                                        {item.subtext}
                                    </span>
                                </div>

                                {/* Línea decorativa inferior que aparece al hacer hover */}
                                <div className="w-0 group-hover:w-12 h-1 bg-[#D12E7B] mt-4 transition-all duration-300 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}