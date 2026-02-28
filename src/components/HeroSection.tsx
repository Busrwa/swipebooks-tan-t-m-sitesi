import { motion } from "framer-motion";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Yeni Kitaplar Keşfetmenin{" "}
              <span className="text-primary">En Keyifli Yolu</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Sağa kaydır, beğen, okuma listeni oluştur. Binlerce kitap arasından sana özel önerilerle tanış.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Google Play'de İndir
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 md:w-72 animate-float">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground/90 p-1.5 shadow-2xl shadow-primary/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/80 rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden bg-background">
                  <img
                    src={heroPhone}
                    alt="SwipeBooks uygulama ekran görüntüsü"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
