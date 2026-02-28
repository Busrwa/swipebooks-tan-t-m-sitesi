import LegalLayout from "@/components/LegalLayout";

const GizlilikPolitikasi = () => (
  <LegalLayout title="Gizlilik Politikası">
    <h2>1. Veri Sorumlusu</h2>
    <p>
      Bu gizlilik politikası, <strong>Buswa Studio</strong> tarafından geliştirilen ve işletilen <strong>SwipeBooks</strong> mobil uygulaması için geçerlidir.
    </p>
    <p>İletişim: <a href="mailto:busrwastudio@gmail.com" className="text-primary underline">busrwastudio@gmail.com</a></p>

    <h2>2. Toplanan Veriler</h2>
    <p>SwipeBooks, hizmetlerini sunabilmek amacıyla aşağıdaki verileri toplamaktadır:</p>
    <ul>
      <li>E-posta adresi</li>
      <li>Kullanıcı kimliği (UID)</li>
      <li>Okuma listesi verileri</li>
      <li>Yorumlar ve beğeniler</li>
      <li>Günlük seri (streak) verisi</li>
      <li>Cihaz bilgisi (işletim sistemi, cihaz modeli)</li>
      <li>Çökme (crash) logları</li>
    </ul>

    <h2>3. Kamera Erişimi</h2>
    <p>
      Uygulama, yalnızca ISBN barkod okuma özelliği kapsamında kamera erişimi talep etmektedir. Kamera aracılığıyla görüntü kaydedilmez veya depolanmaz.
    </p>

    <h2>4. Altyapı ve Veri İşleme</h2>
    <p>
      SwipeBooks, <strong>Firebase (Google LLC)</strong> altyapısını kullanmaktadır. Verileriniz Google Cloud sunucularında güvenli bir şekilde saklanmaktadır.
    </p>

    <h2>5. Reklam ve Veri Paylaşımı</h2>
    <p>
      SwipeBooks'ta reklam gösterilmemektedir. Kişisel verileriniz üçüncü taraflara satılmaz, kiralanmaz veya ticari amaçlarla paylaşılmaz.
    </p>

    <h2>6. Hesap Silme</h2>
    <p>
      Hesabınızı sildiğinizde, tüm kişisel verileriniz <strong>30 gün</strong> içinde kalıcı olarak silinir. Silme işlemi geri alınamaz.
    </p>

    <h2>7. Güvenlik Önlemleri</h2>
    <p>Verilerinizin güvenliği için aşağıdaki önlemler uygulanmaktadır:</p>
    <ul>
      <li>TLS (Transport Layer Security) ile şifreli iletişim</li>
      <li>Firebase Authentication ile kimlik doğrulama</li>
      <li>Firestore güvenlik kuralları ile veri erişim kontrolü</li>
      <li>Düzenli güvenlik güncellemeleri</li>
    </ul>

    <h2>8. Değişiklikler</h2>
    <p>
      Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler uygulama içinden ve bu sayfa üzerinden duyurulacaktır.
    </p>
  </LegalLayout>
);

export default GizlilikPolitikasi;
