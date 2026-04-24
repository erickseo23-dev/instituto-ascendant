import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Fundadores from "./pages/Fundadores";
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


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/fundadores"} component={Fundadores} />
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
