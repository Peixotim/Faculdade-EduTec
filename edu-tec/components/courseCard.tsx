// components/courseCard.tsx

import Link from "next/link";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { slugify } from "@/utils/slugify";

// --- Interface de Props ---
export interface CourseCardProps {
  title: string;
  subTitle: string; // A categoria do curso
  img?: {
    src: string;
    alt: string;
  };
  rating: number;
}

// --- Componente Funcional com Estilo Premium ---
export default function CourseCard({
  title,
  subTitle,
  img,
  rating,
}: CourseCardProps) {
  return (
    // --- Contêiner Principal do Card ---
    // ESTILO PREMIUM: Fundo branco para contraste com a página. Borda e sombra sutis.
    // O card "levanta" e ganha um brilho verde no hover.
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/10">
      {/* --- Seção da Imagem --- */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={img?.src || "/images/cp.jpeg"}
          alt={img?.alt || "Imagem do curso"}
          fill
          // Efeito de zoom na imagem continua ótimo
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-[#00b153] px-3 py-1 text-xs font-semibold text-white shadow-md">
          Últimas Vagas!
        </span>
      </div>

      {/* --- Seção de Conteúdo --- */}
      <div className="flex flex-grow flex-col p-6">
        {/* Categoria e Avaliação */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-[#00b153]">{subTitle}</p>
          <div className="flex text-yellow-500">
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>

        {/* ESTILO PREMIUM: Título em azul escuro para seriedade, muda para verde no hover. */}
        <h2 className="mb-3 text-xl font-bold leading-snug text-[#05365F] transition-colors duration-300 group-hover:text-[#00b153]">
          {title}
        </h2>

        {/* ESTILO PREMIUM: Descrição em cinza suave para hierarquia visual. */}
        <p className="text-sm text-slate-600 font-semibold">
          Curso reconhecido nacionalmente. Avance na sua carreira com
          flexibilidade!
        </p>

        <div className="flex-grow" />

        {/* Botão de Ação */}
        <Link
          href={`/cursos/${slugify(title)}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#00b153] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40"
        >
          <PlusCircle size={20} className="flex-shrink-0" />
          Ver Mais
        </Link>
      </div>
    </div>
  );
}
