import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const GizlilikPolitikasi = lazy(() => import("./pages/GizlilikPolitikasi"));
const KVKK = lazy(() => import("./pages/KVKK"));
const KullanimKosullari = lazy(() => import("./pages/KullanimKosullari"));
const HesapSilme = lazy(() => import("./pages/HesapSilme"));
const VeriSilme = lazy(() => import("./pages/VeriSilme"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background">Yükleniyor...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
            <Route path="/hesap-silme" element={<HesapSilme />} />
            <Route path="/veri-silme" element={<VeriSilme />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
