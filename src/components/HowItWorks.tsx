import { motion } from "framer-motion";
import { Layers, Heart, UserCheck } from "lucide-react";

const steps = [
  { icon: Layers, title: "Kartları Kaydır", desc: "Kitap kartlarını sağa veya sola kaydırarak keşfet." },
  { icon: Heart, title: "Beğen ve Listeye Ekle", desc: "Hoşuna giden kitapları beğen, okuma listene kaydet." },
  { icon: UserCheck, title: "Profilinden Takip Et", desc: "Okuduklarını ve hedeflerini profilinden takip et." },
];

const HowItWorks = () => {
  return (
    <section id="nasil-calisir" className="py-20 bg-accent/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nasıl Çalışır?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-sm font-semibold text-secondary mb-2">Adım {i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
