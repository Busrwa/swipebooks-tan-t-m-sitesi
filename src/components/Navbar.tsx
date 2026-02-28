import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <img src={logo} alt="SwipeBooks logo" className="w-8 h-8 rounded-lg" />
          SwipeBooks
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#nasil-calisir" className="hover:text-primary transition-colors">Nasıl Çalışır</a>
          <a href="/#ozellikler" className="hover:text-primary transition-colors">Özellikler</a>
          <a href="/#sss" className="hover:text-primary transition-colors">SSS</a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            İndir
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container flex flex-col gap-4 py-4 text-sm font-medium">
              <a href="/#nasil-calisir" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Nasıl Çalışır</a>
              <a href="/#ozellikler" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Özellikler</a>
              <a href="/#sss" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">SSS</a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center"
              >
                İndir
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
