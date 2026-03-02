import { useEffect } from "react";

interface SeoProps {
    title: string;
    description?: string;
    url?: string;
}

export const useSeo = ({ title, description, url }: SeoProps) => {
    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Meta Description
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute("content", description);
            } else {
                metaDescription = document.createElement("meta");
                metaDescription.setAttribute("name", "description");
                metaDescription.setAttribute("content", description);
                document.head.appendChild(metaDescription);
            }

            // Update OG description as well
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.setAttribute("content", description);
        }

        // 3. Update OG Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", title);

        // 4. Update Canonical URL
        if (url) {
            const fullUrl = `https://fylora.online${url}`;
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.setAttribute("href", fullUrl);

            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) ogUrl.setAttribute("content", fullUrl);
        }
    }, [title, description, url]);
};
