import LegalLayout from "@/components/LegalLayout";

const VeriSilme = () => (
  <LegalLayout title="Veri Silme Talebi">
    <p>
      Bu sayfa, Google Play politikalarına uygun olarak SwipeBooks kullanıcılarının veri silme haklarını açıklamaktadır.
    </p>

    <h2>1. Silinecek Veriler</h2>
    <p>Hesabınızın silinmesi halinde aşağıdaki veriler kalıcı olarak kaldırılır:</p>
    <ul>
      <li>E-posta adresi</li>
      <li>Kullanıcı kimliği (UID)</li>
      <li>Okuma listesi</li>
      <li>Beğeniler ve favoriler</li>
      <li>Günlük seri (streak) verisi</li>
      <li>Puan ve seviye bilgileri</li>
      <li>Cihaz bilgileri</li>
    </ul>

    <h2>2. Silinmeyecek Veriler</h2>
    <p>Aşağıdaki anonim veriler, hizmet kalitesinin iyileştirilmesi amacıyla korunabilir:</p>
    <ul>
      <li>Anonim istatistiksel veriler (toplam kullanıcı sayısı, popülerlik verileri)</li>
      <li>Anonimleştirilmiş yorum içerikleri (kullanıcı kimliği kaldırılmış)</li>
    </ul>

    <h2>3. İşlem Süresi</h2>
    <p>
      Veri silme işlemi, talebinizin alınmasından itibaren en geç <strong>30 gün</strong> içinde tamamlanır.
    </p>

    <h2>4. Başvuru Yöntemi</h2>
    <p>Veri silme talebinizi aşağıdaki yöntemlerle iletebilirsiniz:</p>
    <ol>
      <li><strong>Uygulama içi:</strong> Profil → Hesabı Sil → Onay</li>
      <li><strong>E-posta:</strong> <a href="mailto:buswastudio@gmail.com" className="text-primary underline">buswastudio@gmail.com</a></li>
    </ol>

    <h2>5. Hesap Olmadan Veri Silme</h2>
    <p>
      Hesabınıza erişiminiz yoksa, kayıt sırasında kullandığınız e-posta adresini belirterek <a href="mailto:buswastudio@gmail.com" className="text-primary underline">buswastudio@gmail.com</a> adresine veri silme talebi gönderebilirsiniz. Kimlik doğrulama amacıyla ek bilgi talep edilebilir.
    </p>

    <h2>6. İtiraz ve Başvuru</h2>
    <p>
      Veri silme işlemiyle ilgili her türlü itiraz ve sorunuz için <a href="mailto:buswastudio@gmail.com" className="text-primary underline">buswastudio@gmail.com</a> adresine başvurabilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanacaktır.
    </p>
  </LegalLayout>
);

export default VeriSilme;
