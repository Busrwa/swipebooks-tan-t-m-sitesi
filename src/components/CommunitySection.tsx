import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp, Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Topluluk</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Diğer okurlarla etkileşime geç. Yorumla, beğen, tartış.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: MessageCircle, title: "Yorum Yap", desc: "Kitaplar hakkında düşüncelerini paylaş." },
            { icon: ThumbsUp, title: "Beğen", desc: "En iyi yorumları ve önerileri beğen." },
            { icon: Users, title: "Toplulukla Büyü", desc: "Binlerce okurla birlikte kitap keşfet." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
