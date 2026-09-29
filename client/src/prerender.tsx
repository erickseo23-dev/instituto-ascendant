import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import Clarimental from "./pages/Clarimental";
import TodoLoBueno from "./pages/TodoLoBueno";
import TodoLoBuenoMasterclass from "./pages/TodoLoBuenoMasterclass";
import { clarimentalMeta, clarimentalImages, ascensions } from "./content/clarimental";
import { tlbmsCohort } from "./content/tlbms";

export function renderPages() {
  const pages = [
    { path: "/clarimental", component: Clarimental, ...clarimentalMeta, image: clarimentalImages.path },
    { path: "/todo-lo-bueno-me-sucede", component: TodoLoBueno, title: tlbmsCohort.title, description: tlbmsCohort.description, url: tlbmsCohort.url, image: clarimentalImages.path },
    { path: "/todo-lo-bueno-masterclass", component: TodoLoBuenoMasterclass, title: "Masterclass · Todo Lo Bueno Me Sucede | Instituto Ascendant", description: tlbmsCohort.description, url: "https://www.institutoascendant.com/todo-lo-bueno-masterclass", image: clarimentalImages.path },
  ];
  return pages.map(({ component: Component, ...page }) => ({
    ...page,
    html: renderToString(<Router ssrPath={page.path}><Component /></Router>),
    structuredData: page.path === "/clarimental" ? {
      "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url: page.url,
      about: { "@type": "CreativeWork", name: "CLARIMENTAL", creator: { "@type": "Person", name: "Claribel Puga" } },
      mainEntity: { "@type": "ItemList", name: "Las nueve octavas de CLARIMENTAL", numberOfItems: 9,
        itemListElement: ascensions.flatMap(stage => stage.octaves).map((octave, i) => ({ "@type": "ListItem", position: i + 1, name: octave.title, description: octave.description })) },
    } : { "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url: page.url },
  }));
}
