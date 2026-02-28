import { Link } from "react-router-dom";
import { BookOpen, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <BookOpen className="w-5 h-5" />
              SwipeBooks
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Kitap keşfetmenin en keyifli yolu. Sağa kaydır, beğen, okuma listeni oluştur.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/gizlilik-politikasi" className="hover:text-primary-foreground transition-colors">Gizlilik Politikası</Link></li>
              <li><Link to="/kvkk" className="hover:text-primary-foreground transition-colors">KVKK Aydınlatma Metni</Link></li>
              <li><Link to="/kullanim-kosullari" className="hover:text-primary-foreground transition-colors">Kullanım Koşulları</Link></li>
              <li><Link to="/hesap-silme" className="hover:text-primary-foreground transition-colors">Hesap ve Veri Silme</Link></li>
              <li><Link to="/veri-silme" className="hover:text-primary-foreground transition-colors">Veri Silme Talebi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <a href="mailto:buswastudio@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              buswastudio@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 SwipeBooks — Buswa Studio. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
