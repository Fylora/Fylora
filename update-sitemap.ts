import fs from "fs";
import { tools } from "./src/lib/tools.ts";

const baseUrl = "https://fylora.online";

const standardRoutes = [
    "/",
    "/tools",
    "/about",
    "/faq",
    "/roadmap",
    "/careers",
    "/press",
    "/security",
    "/privacy",
    "/terms",
    "/request-feature"
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for (const route of standardRoutes) {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}

for (const tool of tools) {
    xml += `
  <url>
    <loc>${baseUrl}/${tool.id}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
}

xml += `\n</urlset>\n`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log("Sitemap updated successfully with all " + tools.length + " tools!");
