import { ExperienceProvider } from "./components/experience/Experience";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import Graduacion2027 from "./pages/Graduacion2027";
import Clarimental from "./pages/Clarimental";
import SanoElDolor from "./pages/SanoElDolor";
import { secondOctave, secondOctaveLevels } from "./content/segunda-octava";
import TodoLoBueno from "./pages/TodoLoBueno";
import TodoLoBuenoMasterclass from "./pages/TodoLoBuenoMasterclass";
import { clarimentalMeta, clarimentalImages, ascensions } from "./content/clarimental";
import { tlbmsCohort } from "./content/tlbms";

export function renderPages() {
  const pages = [
    { path: "/viaje-graduacion-2027", component: Graduacion2027, title: "Viaje de graduación 2027 · Hilton Puerto Vallarta | Instituto Ascendant", description: "Del 27 al 30 de mayo de 2027: graduación de secundaria del Colegio de Ciencias y Letras de Tepic, Hilton todo incluido, Barco Pirata y cena de gala. Organiza Instituto Ascendant.", url: "https://www.institutoascendant.com/viaje-graduacion-2027", image: "https://www.institutoascendant.com/media/graduacion-2027/hero.jpg" },
    { ...secondOctave, component: SanoElDolor, image: clarimentalImages.path },
    { path: "/clarimental", component: Clarimental, ...clarimentalMeta, image: clarimentalImages.path },
    { path: "/todo-lo-bueno-me-sucede", component: TodoLoBueno, title: tlbmsCohort.title, description: tlbmsCohort.description, url: tlbmsCohort.url, image: clarimentalImages.path },
    { path: "/todo-lo-bueno-masterclass", component: TodoLoBuenoMasterclass, title: "Masterclass · Todo Lo Bueno Me Sucede | Instituto Ascendant", description: tlbmsCohort.description, url: "https://www.institutoascendant.com/todo-lo-bueno-masterclass", image: clarimentalImages.path },
  ];
  return pages.map(({ component: Component, ...page }) => ({
    ...page,
    html: renderToString(<Router ssrPath={page.path}><ExperienceProvider><Component /></ExperienceProvider></Router>),
    structuredData: page.path === "/clarimental" ? {
      "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url: page.url,
      about: { "@type": "CreativeWork", name: "CLARIMENTAL", creator: { "@type": "Person", name: "Claribel Puga" } },
      mainEntity: { "@type": "ItemList", name: "Las nueve octavas de CLARIMENTAL", numberOfItems: 9,
        itemListElement: ascensions.flatMap(stage => stage.octaves).map((octave, i) => ({ "@type": "ListItem", position: i + 1, name: octave.title, description: octave.description })) },
    } : page.path === secondOctave.path ? {
      "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url: page.url,
      isPartOf: { "@type": "WebPage", name: "CLARIMENTAL", url: clarimentalMeta.url },
      mainEntity: { "@type": "ItemList", name: "Los nueve niveles de la Segunda Octava de CLARIMENTAL", numberOfItems: 9,
        itemListElement: secondOctaveLevels.map(level => ({ "@type": "ListItem", position: level.number, name: level.title, description: level.description })) },
    } : { "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url: page.url },
  }));
}
