import { motion } from "framer-motion";
import { Trophy, Zap, Star } from "lucide-react";

const levels = [
  { name: "Kitap Kurdu", points: "0–100", percent: 25, icon: Star },
  { name: "Okuma Ustası", points: "100–500", percent: 55, icon: Zap },
  { name: "Efsane Okur", points: "500+", percent: 85, icon: Trophy },
];

const GamificationSection = () => {
  return (
    <section className="py-20 bg-accent/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Puan ve Seviye Sistemi</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Kitap oku, yorum yap, serileri koru — puan kazan ve seviye atla!
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <l.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{l.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{l.points} puan</p>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
