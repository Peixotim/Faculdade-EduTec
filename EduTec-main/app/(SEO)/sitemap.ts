import {MetadataRoute} from "next";
import {readFileImages} from "@/utils/readFileImages";

export default function sitemap ():MetadataRoute.Sitemap {

    const imgBase = readFileImages("public")


    const areas = 0;
    const cursosPorArea = 0;

    return [
        {
            url: String(process.env.URL_BASE),
            priority: 1.0,
            lastModified: new Date(),
            changeFrequency: "daily",
        },
        {
            url: `${String(process.env.URL_BASE)}/${areas}/${cursosPorArea}`,
            priority: 0.5,
            lastModified: new Date(),
            changeFrequency: "daily"
        },
        {
            url: String(process.env.URL_BASE),
            priority: 0.5,
            lastModified: new Date(),
            images: imgBase
        }
    ]
}