import LegalLayout from "@/components/LegalLayout";

const HesapSilme = () => (
  <LegalLayout title="Hesap Silme ve Veri Kaldırma">
    <p>
      SwipeBooks, kullanıcılarının kişisel verilerinin kontrolünü ellerinde tutmalarını önemser. Hesabınızı ve ilişkili verilerinizi aşağıdaki yöntemlerle silebilirsiniz.
    </p>

    <h2>1. Uygulama İçinden Hesap Silme</h2>
    <p>Hesabınızı uygulama içinden silmek için şu adımları izleyin:</p>
    <ol>
      <li><strong>Profil</strong> sayfasına gidin</li>
      <li><strong>Hesabı Sil</strong> seçeneğine tıklayın</li>
      <li>Onay ekranında silme işlemini <strong>onaylayın</strong></li>
    </ol>

    <h2>2. E-posta ile Hesap Silme Talebi</h2>
    <p>
      Alternatif olarak, <a href="mailto:busrwastudio@gmail.com" className="text-primary underline">busrwastudio@gmail.com</a> adresine hesabınıza kayıtlı e-posta adresiyle bir silme talebi gönderebilirsiniz.
    </p>

    <h2>3. Silme İşleminin Kapsamı</h2>
    <ul>
      <li>Tüm kişisel verileriniz (e-posta, UID, okuma listesi, streak verisi) <strong>30 gün</strong> içinde kalıcı olarak silinir.</li>
      <li>Yapmış olduğunuz yorumlar <strong>anonim hale getirilebilir</strong> (kullanıcı adı kaldırılır).</li>
      <li>İstatistiksel ve anonim veriler, hizmet iyileştirme amacıyla korunabilir.</li>
      <li>Silme işlemi <strong>geri alınamaz</strong>.</li>
    </ul>

    <h2>4. Önemli Bilgi</h2>
    <p>
      Hesap silme talebiniz işleme alındıktan sonra geri dönüşü yoktur. Silme işlemi tamamlandığında hesabınıza erişim kalıcı olarak sona erer.
    </p>
  </LegalLayout>
);

export default HesapSilme;
