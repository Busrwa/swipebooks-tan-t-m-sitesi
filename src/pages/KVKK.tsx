import LegalLayout from "@/components/LegalLayout";

const KVKK = () => (
  <LegalLayout title="KVKK Aydınlatma Metni">
    <p>
      Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi uyarınca hazırlanmıştır.
    </p>

    <h2>1. Veri Sorumlusu</h2>
    <p>
      Veri Sorumlusu: <strong>Buswa Studio</strong><br />
      İletişim: <a href="mailto:buswastudio@gmail.com" className="text-primary underline">buswastudio@gmail.com</a>
    </p>

    <h2>2. İşlenen Kişisel Veriler</h2>
    <ul>
      <li>Kimlik bilgileri (e-posta adresi, kullanıcı kimliği)</li>
      <li>Uygulama kullanım verileri (okuma listesi, yorumlar, beğeniler, streak verisi)</li>
      <li>Cihaz bilgileri (işletim sistemi, cihaz modeli)</li>
      <li>Log kayıtları (çökme logları)</li>
    </ul>

    <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
    <ul>
      <li>Uygulama hizmetlerinin sunulması ve iyileştirilmesi</li>
      <li>Kullanıcı hesap yönetimi</li>
      <li>Gamifikasyon sistemi (puan, seviye, streak)</li>
      <li>Teknik sorunların tespiti ve giderilmesi</li>
      <li>Yasal yükümlülüklerin yerine getirilmesi</li>
    </ul>

    <h2>4. Hukuki Dayanak</h2>
    <p>Kişisel verileriniz, KVKK'nın 5. maddesinin 2. fıkrasında belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
    <ul>
      <li>Açık rızanız</li>
      <li>Sözleşmenin kurulması veya ifası için gerekli olması</li>
      <li>Veri sorumlusunun meşru menfaati</li>
      <li>Hukuki yükümlülüğün yerine getirilmesi</li>
    </ul>

    <h2>5. Yurt Dışına Veri Aktarımı</h2>
    <p>
      SwipeBooks, Firebase (Google Cloud) altyapısını kullanmaktadır. Bu kapsamda kişisel verileriniz, KVKK'nın 9. maddesi uyarınca, yeterli korumanın bulunduğu ülkelerdeki Google Cloud sunucularına aktarılabilmektedir.
    </p>

    <h2>6. Saklama Süreleri</h2>
    <p>
      Kişisel verileriniz, işlenme amaçları için gerekli olan süre boyunca saklanmaktadır. Hesap silme talebiniz halinde verileriniz 30 gün içinde kalıcı olarak silinir.
    </p>

    <h2>7. KVKK Kapsamındaki Haklarınız (Madde 11)</h2>
    <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
    <ol>
      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
      <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
      <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
      <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
      <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
      <li>KVKK'nın 7. maddesi çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
      <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
      <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
    </ol>

    <h2>8. Başvuru Yöntemi</h2>
    <p>
      Yukarıda belirtilen haklarınızı kullanmak için <a href="mailto:buswastudio@gmail.com" className="text-primary underline">buswastudio@gmail.com</a> adresine e-posta gönderebilirsiniz.
    </p>
    <p>
      Başvurularınız en geç <strong>30 gün</strong> içinde yanıtlanacaktır.
    </p>

    <h2>9. Güvenlik Önlemleri</h2>
    <p>
      Kişisel verilerinizin güvenliği için TLS şifrelemesi, Firebase Authentication, Firestore güvenlik kuralları ve düzenli güvenlik denetimleri uygulanmaktadır.
    </p>
  </LegalLayout>
);

export default KVKK;
