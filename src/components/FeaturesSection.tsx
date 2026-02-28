import { motion } from "framer-motion";
import { Search, ScanBarcode, TrendingUp, Flame, Trophy, MessageSquare, BookMarked } from "lucide-react";

const features = [
  { icon: Search, title: "Akıllı Arama", desc: "Kitap adı, yazar veya türe göre hızlıca ara." },
  { icon: ScanBarcode, title: "Barkod ile ISBN Okuma", desc: "Kameranla kitabın ISBN barkodunu tarat, anında bul." },
  { icon: TrendingUp, title: "Popüler Kitaplar", desc: "En çok beğenilen ve okunan kitapları keşfet." },
  { icon: Flame, title: "Günlük Seri (Streak)", desc: "Her gün uygulamayı kullanarak serinleri koru." },
  { icon: Trophy, title: "Puan & Seviye Sistemi", desc: "Okudukça puan kazan, seviye atla." },
  { icon: MessageSquare, title: "Yorum ve Beğeni", desc: "Kitaplar hakkında yorum yap, başkalarının yorumlarını oku." },
  { icon: BookMarked, title: "Kişisel Okuma Listesi", desc: "Beğendiğin kitapları listende sakla, istediğin zaman geri dön." },
];

const FeaturesSection = () => {
  return (
    <section id="ozellikler" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Özellikler</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          SwipeBooks ile kitap okuma deneyimini tamamen yeni bir seviyeye taşı.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
