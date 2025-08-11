// components/ui/banners/bannerwrapper.tsx
'use client';

// 1. Importamos o 'motion' para as animações.
import { motion } from 'framer-motion';
// CORREÇÃO: O ícone correto para rolar para baixo é o ArrowDown.
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

// --- Interface de Props (sem alterações) ---
interface BannerWrapperProps {
    background: string;
    title: string;
    subtitle: string;
}

// --- Definições de Animação ---
// Movemos as definições das animações para fora do componente para melhor performance.
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Atraso de 0.1s entre cada elemento filho.
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};


export default function BannerWrapper({
                                          background,
                                          title,
                                          subtitle,
                                      }: BannerWrapperProps) {

    // @ts-ignore
    // @ts-ignore
    return (
        // --- Contêiner Principal ---
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            {/* --- Fundo com Gradiente Animado --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-[#05365F] animate-gradient-xy" />
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}
            />

            {/* --- Conteúdo Central --- */}
            <motion.div
                className="relative z-10 text-center p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* --- Título e Subtítulo Animados --- */}
                <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-8xl drop-shadow-lg">
                    {title.split(" ").map((word, index) => (
                        <motion.span key={index} variants={itemVariants} className="inline-block mr-4">
                            {word}
                        </motion.span>
                    ))}
                </h1>
                {/* 👇 ALTERAÇÃO AQUI 👇 */}
                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-2xl mx-auto text-lg font-semibold bg-gradient-to-r from-slate-200 to-green-300 bg-clip-text text-transparent drop-shadow-sm md:text-xl animate-text-shine"
                >
                    {subtitle}
                </motion.p>
            </motion.div>

            {/* --- Ondas Animadas --- */}
            <div className="absolute bottom-0 left-0 w-full h-[100px]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="fill-[#F1F1F1]">
                        <use href="#gentle-wave" x="50" y="0" className="opacity-70 animate-wave" />
                        <use href="#gentle-wave" x="50" y="3" className="opacity-50 animate-wave-2" />
                        <use href="#gentle-wave" x="50" y="6" className="opacity-30 animate-wave-3" />
                    </g>
                </svg>
            </div>

            {/* --- Botão de Rolar para Baixo --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
            >
                <Link href="#search-section" aria-label="Rolar para a próxima seção">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110">
                        <ArrowUp size={24} />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
