// components/courseInformations.tsx
'use client';

// --- Importações de Bibliotecas e Componentes ---
// Importa o componente Link do Next.js para navegação otimizada entre páginas.
import Link from "next/link";
// Importa o componente Image do Next.js para otimização automática de imagens.
import Image from "next/image";
// Importa ícones da biblioteca 'lucide-react' para uso na interface.
import { CheckCircle, Award, Users, Target, Info } from "lucide-react";
// Importa uma função utilitária para converter strings em slugs (ex: "Meu Título" -> "meu-titulo").
import { slugify } from "@/utils/slugify";
// Importa a interface de tipos para as props do CourseCard, garantindo consistência.
import { CourseCardProps } from "./courseCard";
// Importa os hooks 'useState' e 'useCallback' do React para gerenciar o estado e otimizar funções.
import { useState, useCallback } from "react";
// Importa o hook 'useRouter' do Next.js para permitir redirecionamentos de página programaticamente.
import { useRouter } from 'next/navigation';
// Importa o componente Modal, que é o container animado do nosso formulário.
import Modal from "@/components/modalsContactCourses/modal";
// Importa o componente SubscriptionForm, que contém o formulário em si.
import SubscriptionForm from "@/components/modalsContactCourses/SubscriptionForm";

// --- Definição de Tipos (Interfaces) ---
// Define a estrutura de dados para uma seção do curso.
export interface CourseSection {
    title: string;
    content: string;
}
// Define a estrutura de dados completa para as informações de um curso.
export interface CourseInformationsProps {
    title: string;
    sections: CourseSection[];
    img?: { src: string; alt: string; };
    whatYouWillLearn?: string[];
    depoiments?: { texto: string; autor: string; cargo: string; };
}
// Define as props que o componente CourseInformations espera receber.
interface ComponentProps {
    course: CourseInformationsProps;
    cardData?: CourseCardProps;
}

// --- Componente Principal ---
export default function CourseInformations({ course, cardData }: ComponentProps) {
    // --- Hooks e Gerenciamento de Estado ---

    // Inicializa o hook de roteamento do Next.js para ser usado no redirecionamento.
    const router = useRouter();
    // Cria um slug a partir do subtítulo do card para usar na URL do link "Voltar".
    const categorySlug = cardData ? slugify(cardData.subTitle) : "";

    // Cria um estado para controlar a visibilidade do modal (aberto/fechado).
    // O valor inicial é 'false' (fechado).
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Cria um estado para controlar o visual interno do formulário.
    // CORREÇÃO: A sintaxe de tipo union em TypeScript usa '|' e não '||'.
    const [formStatus, setFormStatus] = useState<'form' | 'loading' | 'success'>('form');

    // --- Funções de Controle do Modal ---

    // Função para abrir o modal.
    const openModal = () => {
        // Garante que, toda vez que o modal for aberto, ele comece mostrando o formulário.
        setFormStatus('form');
        // Altera o estado para 'true', o que faz o modal ser renderizado.
        setIsModalOpen(true);
    };

    // Função para fechar o modal.
    // 'useCallback' otimiza a performance, garantindo que a função não seja recriada a cada renderização.
    const closeModal = useCallback(() => setIsModalOpen(false), []);

    // Função assíncrona que é chamada quando o formulário é enviado.
    // CORREÇÃO: A função precisa ser declarada como 'async' para poder usar 'await' dentro dela.
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Previne o comportamento padrão do formulário, que é recarregar a página.
        event.preventDefault();
        // Muda o estado do formulário para 'loading' para exibir a animação de carregamento.
        setFormStatus('loading');

        // Coleta todos os dados dos campos do formulário de uma vez.
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Enviando os seguintes dados para a API:", data);

        try {
            // Simula um tempo de espera (2 segundos) como se estivesse se comunicando com uma API.
            await new Promise(resolve => setTimeout(resolve, 2000));

            // NESTE PONTO, VOCÊ FARIA A CHAMADA REAL PARA A API:
            // Ex: await fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(data) });

            // Se a chamada à API for bem-sucedida, muda o estado para 'success'.
            setFormStatus('success');
        } catch (error) {
            // Se ocorrer um erro durante o envio, ele será capturado aqui.
            console.error("Erro ao enviar o formulário:", error);
            alert('Houve um problema ao enviar sua inscrição. Por favor, tente novamente.');
            // Em caso de erro, retorna o modal para o estado inicial do formulário.
            setFormStatus('form');
        }
    };

    // --- Renderização do Componente (JSX) ---
    return (
        // Container principal da página
        <div className="relative bg-[#F1F1F1] min-h-screen text-[#05365F] font-sans overflow-hidden">
            {/* Elemento de fundo com gradiente para efeito visual */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#00b153]/5 via-[#05365F]/5 to-transparent pointer-events-none" aria-hidden="true" />

            {/* Container que centraliza o conteúdo e adiciona espaçamento */}
            <div className="relative max-w-5xl mx-auto p-4 sm:p-6 md:p-8 z-10">

                {/* Botão "Voltar" que leva para a página da categoria do curso */}
                <Link href={categorySlug ? `/cursos/${categorySlug}` : "/"} className="group relative mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#05365F] px-5 py-2 text-sm font-bold text-[#f7f5ec] shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,177,83,0.4)]">
                    <div className="absolute inset-0 w-0 bg-[#00b153] transition-all duration-300 ease-out group-hover:w-full"></div>
                    <span className="relative flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1"><polyline points="15 18 9 12 15 6" /></svg>
            Voltar para {cardData?.subTitle || "Cursos"}
          </span>
                </Link>

                {/* Card principal do cabeçalho da página */}
                <div className="bg-[#f7f5ec] rounded-xl p-8 shadow-lg shadow-slate-900/20">
                    <header className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Coluna de texto com informações do curso */}
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold text-[#00b153]">{cardData?.subTitle}</span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#05365F] tracking-tight">{course.title}</h1>
                            <p className="text-lg text-slate-700">Transforme sua carreira com um curso prático, focado no mercado e com certificado reconhecido.</p>
                            {cardData && (
                                <div className="flex items-center gap-2 text-yellow-500 mt-2">
                                    {Array.from({ length: cardData.rating }).map((_, index) => (<span key={index} className="text-2xl">★</span>))}
                                    <span className="text-sm text-slate-600 font-medium">({cardData.rating}.0 de 5 estrelas)</span>
                                </div>
                            )}
                        </div>

                        {/* Coluna da imagem e do botão de inscrição */}
                        <div className="relative">
                            {course.img && (
                                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg shadow-slate-900/20">
                                    <Image src={course.img.src} alt={course.img.alt} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            )}
                            <button onClick={openModal} className="mt-6 w-full flex flex-col items-center justify-center gap-1 bg-[#00b153] text-[#f7f5ec] p-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,177,83,0.4)] hover:shadow-[0_0_25px_rgba(0,177,83,0.7)] hover:scale-105">
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={22} />
                                    <span>Quero me Inscrever</span>
                                </div>
                                <span className="text-xs font-normal opacity-80">Vagas limitadas!</span>
                            </button>
                        </div>
                    </header>
                </div>

                {/* Seção principal com os detalhes do curso */}
                <main className="mt-16 md:mt-24 space-y-8">
                    <div className="bg-[#f7f5ec] rounded-xl p-8 shadow-lg shadow-slate-900/20">
                        <h2 className="text-2xl font-bold text-[#00b153] mb-4 flex items-center gap-3"><Info /> Sobre o Curso</h2>
                        <p className="text-[#05365F]/90 leading-relaxed">Este curso foi desenhado para fornecer um conhecimento aprofundado e prático sobre **{course.title}**. Com uma abordagem focada em projetos reais, você desenvolverá as habilidades essenciais que o mercado de trabalho exige. Nossa metodologia combina teoria e prática para garantir uma experiência de aprendizado completa e eficaz.</p>
                    </div>
                    {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
                        <div className="bg-[#f7f5ec] rounded-xl p-8 shadow-lg shadow-slate-900/20">
                            <h2 className="text-2xl font-bold text-[#00b153] mb-6 flex items-center gap-3"><Award /> O que você vai aprender</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {course.whatYouWillLearn.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-[#00b153] mt-1 flex-shrink-0" size={20} />
                                        <span className="text-[#05365F]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {course.sections.map((section, index) => (
                        <div key={index} className="bg-[#f7f5ec] rounded-xl p-8 shadow-lg shadow-slate-900/20">
                            <h2 className="text-2xl font-bold text-[#00b153] mb-4 flex items-center gap-3">{section.title.includes("Objetivo") ? <Target /> : <Users />}{section.title}</h2>
                            <p className="text-[#05365F]/90 leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                    {course.depoiments && (
                        <div className="bg-[#f7f5ec] rounded-xl p-8 shadow-lg shadow-slate-900/20">
                            <blockquote className="text-center">
                                <p className="text-xl italic text-[#05365F]">"{course.depoiments.texto}"</p>
                                <footer className="mt-6">
                                    <p className="font-bold text-[#00b153]">{course.depoiments.autor}</p>
                                    <p className="text-sm text-slate-600">{course.depoiments.cargo}</p>
                                </footer>
                            </blockquote>
                        </div>
                    )}
                </main>
            </div>

            {/* --- Renderização do Modal --- */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <SubscriptionForm
                    status={formStatus}
                    onSubmit={handleFormSubmit}
                    onCancel={closeModal}
                    selectedContent={course.title}
                />
            </Modal>
        </div>
    );
}
