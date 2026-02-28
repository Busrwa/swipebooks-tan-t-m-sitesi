import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "SwipeBooks ücretsiz mi?", a: "Evet, SwipeBooks tamamen ücretsiz bir uygulamadır. Herhangi bir ücret veya abonelik gerekmez." },
  { q: "Hesap oluşturmak zorunlu mu?", a: "Uygulamanın temel özelliklerini kullanmak için hesap oluşturmanız gerekmektedir. Kayıt işlemi hızlı ve kolaydır." },
  { q: "Verilerim güvende mi?", a: "Evet, verileriniz Firebase altyapısı üzerinde TLS şifrelemesi ve güvenlik kuralları ile korunmaktadır. Verileriniz üçüncü taraflarla paylaşılmaz veya satılmaz." },
  { q: "Hesabımı nasıl silebilirim?", a: "Uygulama içinden Profil → Hesabı Sil yolunu izleyebilir veya buswastudio@gmail.com adresine e-posta göndererek hesabınızın silinmesini talep edebilirsiniz." },
  { q: "Kişisel verilerim nerede saklanıyor?", a: "Verileriniz Google Cloud (Firebase) altyapısında güvenli olarak saklanmaktadır. Detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz." },
];

const FAQSection = () => {
  return (
    <section id="sss" className="py-20 bg-accent/40">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Sıkça Sorulan Sorular</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
