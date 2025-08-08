import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "EduTec",
        short_name: "EduTec",
        description: "Plataforma de cursos técnicos online com diversas áreas de atuação. Aprenda com conteúdos atualizados, certificados reconhecidos e estude no seu ritmo. Ideal para quem busca qualificação profissional e melhores oportunidades no mercado de trabalho.",
        start_url: "/",
        display: "standalone",
        background_color: "#F1F1F1",
        theme_color: "#00b153",
        orientation: "portrait",
        scope: "/",
        lang: "pt-BR",
        icons: [
            {
                src: "public/images/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "public/images/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "public/images/icons/maskable-icon.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
