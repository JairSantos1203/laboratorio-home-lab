"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importamos para detectar la ruta actual

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // Obtenemos la ruta (ej: "/", "/nosotros")

    // Determinar si estamos en la Home
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    // Lógica de colores dinámica:
    // Si NO es la home, siempre se comporta como "scrolled" (fondo blanco, texto oscuro)
    const headerStyle = !isHomePage || isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5';

    const textStyle = !isHomePage || isScrolled 
        ? 'text-[#333333]' 
        : 'text-white';

    const buttonStyle = !isHomePage || isScrolled
        ? 'bg-[#D12E7B] text-white hover:bg-[#b02666]'
        : 'bg-white text-[#333333] hover:bg-[#D12E7B] hover:text-white';

    return (
        <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${headerStyle}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
                
                {/* LOGO HOMELAB */}
                <div className="flex items-center z-50 relative">
                    <Link href="/" onClick={closeMenu} className="cursor-pointer hover:opacity-80 transition-opacity flex items-center">
                        <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${textStyle}`}>
                            HOME<span className="text-[#D12E7B]">LAB</span>
                        </span>
                    </Link>
                </div>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden z-50 relative p-2 focus:outline-none transition-colors ${isMenuOpen ? 'text-white' : (isHomePage && !isScrolled ? 'text-white' : 'text-[#D12E7B]')}`}
                    aria-label="Toggle Menu"
                >
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                    </div>
                </button>

                {/* NAVEGACIÓN */}
                <nav className={`
                    fixed inset-0 w-full h-[100dvh] bg-[#333333]/95 backdrop-blur-xl transition-transform duration-500 ease-in-out flex flex-col items-center justify-start pt-32 overflow-y-auto z-40
                    md:static md:bg-transparent md:backdrop-blur-none md:flex-row md:translate-x-0 md:h-auto md:w-auto md:pt-0 md:justify-end md:overflow-visible
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    <ul className={`flex flex-col md:flex-row gap-8 items-center text-xl md:text-[14px] font-bold tracking-wider transition-colors ${textStyle} ${isMenuOpen ? '!text-white' : ''}`}>
                        <li>
                            <Link href="/" onClick={closeMenu} className="hover:text-[#D12E7B] transition-colors uppercase">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/nosotros" onClick={closeMenu} className="hover:text-[#D12E7B] transition-colors uppercase">Nosotros</Link>
                        </li>
                        <li>
                            <Link href="/servicios" onClick={closeMenu} className="hover:text-[#D12E7B] transition-colors uppercase">Servicios</Link>
                        </li>
                        <li>
                            <Link href="/resultados" onClick={closeMenu} className="hover:text-[#D12E7B] transition-colors uppercase">Resultados</Link>
                        </li>
                        
                        <li className="mt-4 md:mt-0">
                            <Link
                                href="/contactanos" 
                                onClick={closeMenu}
                                className={`px-6 py-2.5 md:px-6 md:py-2.5 rounded-full transition-all text-center font-black text-xs uppercase tracking-widest shadow-md ${buttonStyle}`}
                            >
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}