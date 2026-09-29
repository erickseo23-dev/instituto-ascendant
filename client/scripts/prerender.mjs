import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Generate searchable HTML from the same React components used in the browser.
// No duplicate curriculum or commercial copy is maintained here.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const server = await createServer({ root, server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
try {
  const { renderPages } = await server.ssrLoadModule("/src/prerender.tsx");
  const template = await readFile(path.join(root, "dist/index.html"), "utf8");
  for (const page of renderPages()) {
    const metadata = `
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${escape(page.url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:site_name" content="Instituto Ascendant" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${escape(page.url)}" />
    <meta property="og:image" content="${escape(page.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(page.structuredData).replaceAll("<", "\\u003c")}</script>`;
    const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
      .replace("</head>", `${metadata}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);
    const destination = path.join(root, "dist", page.path.slice(1));
    await mkdir(destination, { recursive: true });
    await writeFile(path.join(destination, "index.html"), html);
    console.log(`Prerendered ${page.path}`);
  }
} finally {
  await server.close();
}
