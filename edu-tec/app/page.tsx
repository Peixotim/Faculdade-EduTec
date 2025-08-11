"use client";
import { useState } from "react";
import TopBar from "../components/ui/topbar";
import Footer from "../components/ui/footer";
import BannerWrapper from "@/components/ui/banners/bannerwrapper";
import Seta from "@/components/ui/seta";
import CardPage from "@/components/cards";
import Storaged from "@/utils/storaged";
import SearchSection from "@/components/search";
import {Instagram} from "lucide-react";

export default function Home() {
  const cardProps = Storaged();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos"); // Filtro inicial

  // Lógica de filtragem combinada (Busca + Filtro)
  const filteredCards = cardProps.filter((card) => {
    // --- Verificação 1: A busca (search) ---
    const searchTermLower = searchTerm.toLowerCase();

    // Checa se o termo de busca está no título OU na descrição.
    const matchesSearch =
      (card.title || "").toLowerCase().includes(searchTermLower) ||
      (card.description || "").toLowerCase().includes(searchTermLower);

    // --- Verificação 2: O filtro (filter) ---
    let matchesFilter = true; // Por padrão, todos os cards passam no filtro.

    if (activeFilter === "mais_clicados") {
      // Se o filtro for 'mais_clicados', o card SÓ PASSA se 'card.maisClicado' for true.
      matchesFilter = card.maisClicado === true;
    } else if (activeFilter === "lancamentos") {
      // Se o filtro for 'lancamentos', o card SÓ PASSA se 'card.lancamentos' for true.
      matchesFilter = card.lancamentos === true;
    }
    // Se o filtro for 'todos', a variável continua `true` e todos os cards passam nesta verificação.

    // --- Decisão Final ---
    // O card só é incluído no resultado se passar nas DUAS verificações.
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#F1F1F1]">
      <TopBar />
      <main>
        <BannerWrapper
          background="/images/banners/1024x600.webp"
          title=""
          subtitle=""
        />
          <a href="https://www.instagram.com/edutec_brasil/"
             target="_blank"
             rel="noopener noreferrer"
             className="absolute bottom-15 right-4 p-2 rounded-full">
              <Instagram className="text-white hover:text-green-600 transtion"/>
          </a>
        {/* Passando as props e as funções para o componente SearchSection */}
        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <hr className="max-w-5xl mx-auto border-slate-200" />

        <section id= "cursos" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#05365F] mb-8 text-center">
              Cursos em Destaque
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Renderizando apenas os cards que passaram no filtro e na busca */}
              {filteredCards.map((card, i) => (
                <CardPage key={i} {...card} />
              ))}
            </div>
          </div>
        </section>

        <Seta />
        <Footer />
      </main>
    </div>
  );
}
