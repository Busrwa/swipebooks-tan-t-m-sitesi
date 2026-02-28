import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdate?: string;
  children: ReactNode;
}

const LegalLayout = ({ title, lastUpdate = "Şubat 2026", children }: LegalLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Ana Sayfa
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Son güncelleme: {lastUpdate}</p>
          <div className="prose prose-neutral max-w-none text-foreground/85 leading-relaxed space-y-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalLayout;
