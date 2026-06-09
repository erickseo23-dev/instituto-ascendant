import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import Cookies from "./pages/Cookies";
import MeditacionAscendente from "./pages/MeditacionAscendente";
import Programas from "./pages/Programas";
import Tienda from "./pages/Tienda";
import Videos from "./pages/Videos";
import RecursosGratuitos from "./pages/RecursosGratuitos";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import MujerSuperpoderosa from "./pages/MujerSuperpoderosa";
import MujerSuperpoderosaMasterclass from "./pages/MujerSuperpoderosaMasterclass";
import Contacto from "./pages/Contacto";
import Eventos from "./pages/Eventos";
import Congreso from "./pages/Congreso";
import Becas from "./pages/Becas";
import SolicitudBeca from "./pages/SolicitudBeca";


function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/privacidad"} component={Privacidad} />
      <Route path={"/terminos"} component={Terminos} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/meditacion-ascendente"} component={MeditacionAscendente} />
      <Route path={"/programas"} component={Programas} />
      <Route path={"/tienda"} component={Tienda} />
      <Route path={"/videos"} component={Videos} />
      <Route path={"/recursos-gratuitos"} component={RecursosGratuitos} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogArticle} />
      <Route path={"/mujer-superpoderosa"} component={MujerSuperpoderosa} />
      <Route path={"/mujer-superpoderosa/masterclass"} component={MujerSuperpoderosaMasterclass} />
      <Route path={"/contacto"} component={Contacto} />
      <Route path={"/eventos"} component={Eventos} />
      <Route path={"/congreso"} component={Congreso} />
      <Route path={"/becas"} component={Becas} />
      <Route path={"/becas/solicitud"} component={SolicitudBeca} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
