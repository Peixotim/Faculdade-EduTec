import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        sitemap: "https://www.meu_site.com.br/sitemap.xml",
        host: "https://www.meu_site.com.br",
        rules: [
            {
                userAgent: "*",
                allow: "/",
                crawlDelay: 10,
            },
            // Bots de buscadores
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
            },
            {
                userAgent: "DuckDuckBot",
                allow: "/",
            },
            {
                userAgent: "YandexBot",
                allow: "/",
            },
            {
                userAgent: "Baiduspider",
                allow: "/",
            },
            {
                userAgent: "Sogou",
                allow: "/",
            },
            {
                userAgent: "Exabot",
                allow: "/",
            },
            {
                userAgent: "facebot", // Facebook crawler
                allow: "/",
            },
            {
                userAgent: "Twitterbot", // Twitter
                allow: "/",
            },
            {
                userAgent: "Applebot",
                allow: "/",
            },
            {
                userAgent: "Pinterestbot",
                allow: "/",
            },
            {
                userAgent: "LinkedInBot",
                allow: "/",
            },
        ],
    };
}
