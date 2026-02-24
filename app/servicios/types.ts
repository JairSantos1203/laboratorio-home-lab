// servicios/types.ts

import { LucideIcon } from "lucide-react";
// servicios/types.ts
export interface Servicio {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode; // Opcional por si usas iconos de Lucide o SVGs
  image?: string;         // Por si usas fotos
}




export type TabOption = 'servicios' | 'especialidades';