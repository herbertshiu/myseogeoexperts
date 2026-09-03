/* Harbour Ledger style: keep every route inside the same publication frame so the site reads as one coherent desk. */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { PublicationFooter } from "./components/PublicationFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ThemeProvider } from "./contexts/ThemeContext";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/notes/:slug" component={ArticlePage} />
      <Route path="/404" component={NotFound} />
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
          <SiteHeader />
          <Router />
          <PublicationFooter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
