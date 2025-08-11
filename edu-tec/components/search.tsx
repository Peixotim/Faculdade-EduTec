// SearchSection.tsx

import { Search, List, Flame, Star } from "lucide-react";

// 1. Definimos as propriedades que o componente vai receber
interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchSectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#05365F] tracking-tight">
        Encontre seu Curso Ideal
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
        Explore nossa ampla gama de cursos de pós-graduação e encontre o que
        melhor se adapta aos seus objetivos profissionais.
      </p>

      <div className="relative mt-10">
        <div className="flex w-full max-w-3xl mx-auto rounded-xl bg-white shadow-lg shadow-slate-300/40 overflow-hidden ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
          {/* 2. Conectamos o input ao estado da Home */}
          <input
            type="text"
            placeholder="Buscar por área, curso ou palavra-chave..."
            className="flex-grow w-full px-5 py-4 bg-transparent text-lg outline-none text-slate-800 placeholder-slate-400"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <button className="bg-[#05365F] px-6 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {/* 3. Conectamos os botões para alterar o filtro */}
        {/* 4. Usamos classes dinâmicas para destacar o botão ativo */}
        <button
          onClick={() => onFilterChange("todos")}
          className={`flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
            activeFilter === "todos"
              ? "bg-[#05365F] text-white scale-105"
              : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
          }`}
        >
          <List size={18} />
          Todos os Cursos
        </button>

        <button
          onClick={() => onFilterChange("mais_clicados")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeFilter === "mais_clicados"
              ? "bg-blue-600 text-white scale-105 border-transparent shadow-md"
              : "bg-white border border-blue-600 text-blue-700 hover:bg-blue-50"
          }`}
        >
          <Flame size={18} />
          Mais Clicados
        </button>

        <button
          onClick={() => onFilterChange("lancamentos")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeFilter === "lancamentos"
              ? "bg-green-600 text-white scale-105 border-transparent shadow-md"
              : "bg-white border border-green-600 text-green-700 hover:bg-green-50"
          }`}
        >
          <Star size={18} />
          Lançamentos
        </button>
      </div>
    </div>
  );
}
