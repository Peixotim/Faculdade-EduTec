import Image from "next/image";
import { MessageCircle } from "lucide-react";
// Removi os imports não utilizados para limpar o código
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  maisClicado: boolean;
  lancamentos: boolean;
  flag: string;
  benneficies: string[];
  img?: {
    src: string;
    alt: string;
  };
  // As props de cor não estão sendo usadas no card, mas mantive na interface
  bgColorFlag: string;
  bgColorCategory: string;
  bgColorHover: string;
}

export default function CardPage({
  title,
  description,
  flag,
  benneficies,
  category,
  img,
  maisClicado,
  lancamentos,
}: CardPageProps) {
  return (
    <div className="group relative max-w-sm w-full bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/20">
      {lancamentos && (
        <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[170%] h-8 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg transform -rotate-45 -translate-x-1/4 translate-y-4 flex items-center justify-center">
            <span className="text-white text-[11px] font-bold uppercase tracking-wider drop-shadow-sm">
              ⭐ Lançamento
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-green-200/5 via-transparent to-blue-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={img?.src ? img.src : "/images/cp.jpeg"}
          alt={img?.alt ? img.alt : "Imagem"}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {flag && (
          <span
            className={`absolute top-3 right-3 bg-black/20 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm`}
          >
            {flag}
          </span>
        )}
      </div>

      <div className="p-5 font-sans flex flex-col flex-grow justify-between relative z-10">
        <div>
          {/* ÁREA DE TAGS UNIFICADA (ALTERNATIVA PREMIUM) */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`inline-block bg-green-100 text-green-800 text-xs font-medium px-4 py-1 rounded-full`}
            >
              {category}
            </span>

            {maisClicado && (
              <span className="inline-block bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap">
                🔥 Mais Clicado
              </span>
            )}
          </div>

          <h2

            className={`text-lg sm:text-xl text-[#05365F] font-bold mb-2 leading-tight group-hover:text-green-500 transition-colors duration-300`}
          >
            {title}
          </h2>

          <p className="text-slate-600 text-sm mb-4 leading-relaxed font-semibold">
            {description}
          </p>

          <ul className="text-slate-500 text-sm mb-6 space-y-2 font-semibold">
            {benneficies.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 mt-auto">
          <Link
            href={`/cursos/${slugify(category)}`}
            className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:bg-green-600 hover:scale-[1.03]"
          >
            <MessageCircle color="white" width={20} />
            Garanta sua vaga AGORA!
          </Link>
        </div>
      </div>
    </div>
  );
}
