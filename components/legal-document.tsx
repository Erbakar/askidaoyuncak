'use client';

import { ArrowLeft, HandHeart, ToyBrick } from 'lucide-react';
import { useEffect } from 'react';

export type LegalLanguage = 'tr' | 'en';
export type LegalDocumentType = 'privacy' | 'terms' | 'cookies';

type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  source?: { label: string; href: string };
};

const routes = {
  tr: {
    privacy: '/gizlilik',
    terms: '/kullanim-kosullari',
    cookies: '/cerez-politikasi',
  },
  en: {
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookie-policy',
  },
} as const;

const shared = {
  tr: {
    brand: 'askıda oyuncak',
    tagline: 'Oyuncağa ikinci bir hayat',
    eyebrow: 'Yasal bilgiler',
    back: 'Ana sayfaya dön',
    switchLabel: 'EN',
    updated: 'Son güncelleme: 4 Eylül 2026',
    prepNote: 'Yayına hazırlık notu: Projeyi yürüten tüzel kişinin resmî unvanı, adresi ve başvuru e-posta adresi kesinleştiğinde bu metinlere eklenmeli ve metinler bir hukuk uzmanı tarafından son kez gözden geçirilmelidir.',
    nav: { privacy: 'Gizlilik ve KVKK', terms: 'Kullanım Koşulları', cookies: 'Çerez Politikası' },
    footer: 'Askıda Oyuncak · Sosyal sorumluluk projesi',
  },
  en: {
    brand: 'provisional toys',
    tagline: 'A second life for every toy',
    eyebrow: 'Legal information',
    back: 'Back to the home page',
    switchLabel: 'TR',
    updated: 'Last updated: 4 September 2026',
    prepNote: 'Pre-publication note: The legal name, address, and request email of the entity operating the project must be added when confirmed, and these texts should receive a final review by qualified legal counsel.',
    nav: { privacy: 'Privacy Notice', terms: 'Terms of Use', cookies: 'Cookie Policy' },
    footer: 'Provisional Toys · Social responsibility project',
  },
} as const;

const documents: Record<LegalLanguage, Record<LegalDocumentType, { title: string; summary: string; sections: readonly LegalSection[] }>> = {
  tr: {
    privacy: {
      title: 'Gizlilik ve KVKK Aydınlatma Metni',
      summary: 'Bağış sürecinde hangi bilgileri neden kullandığımızı, kimlerle paylaşabileceğimizi ve haklarınızı açıklar.',
      sections: [
        {
          title: 'Veri sorumlusu',
          paragraphs: ['Bu metin kapsamında veri sorumlusu, Askıda Oyuncak sosyal sorumluluk projesini yürüten ve resmî bilgileri yayına alınmadan önce bu sayfaya eklenecek olan tüzel kişidir.'],
        },
        {
          title: 'İşlenen bilgiler',
          bullets: ['Ad ve soyadı', 'Şehir bilgisi', 'E-posta adresi veya telefon numarası', 'Bağışlanacak oyuncakların türü, adedi ve durumu hakkında verilen bilgiler', 'Kurumların paylaşmasına izin verilen teslimat kayıtları ve fotoğraflar'],
        },
        {
          title: 'Kullanım amaçları',
          bullets: ['Bağış talebini almak ve sizinle iletişim kurmak', 'Oyuncak kabulü, temizlik, onarım, eşleştirme ve teslimat sürecini yürütmek', 'Teslimat fotoğrafını ve kurum bilgisini bağışçıya iletmek', 'Çocukların mahremiyetini koruyarak izinli etki hikâyelerini yayımlamak', 'Güvenlik, kötüye kullanımın önlenmesi ve yasal yükümlülükleri yerine getirmek'],
        },
        {
          title: 'Hukuki sebepler',
          paragraphs: ['Kişisel veriler; talebinizin yerine getirilmesi, hukuki yükümlülüklerin karşılanması, projenin meşru faaliyetlerinin güvenli biçimde yürütülmesi ve gerekli hâllerde açık rızanız temelinde işlenir. Aydınlatma, rızadan bağımsız bir yükümlülüktür.'],
          source: { label: 'KVKK’nın aydınlatma yükümlülüğü açıklaması', href: 'https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-' },
        },
        {
          title: 'Paylaşım ve aktarım',
          paragraphs: ['Bilgiler yalnızca süreç için gerekli olduğu ölçüde teslim alan kurumlar, lojistik veya teknik hizmet sağlayıcıları ve kanunen yetkili mercilerle paylaşılabilir. Yurt dışına aktarım gerekirse, aktarım öncesinde yürürlükteki mevzuata uygun güvence ve bilgilendirme sağlanır.'],
        },
        {
          title: 'Çocukların mahremiyeti',
          paragraphs: ['Çocuklara ilişkin fotoğraf veya hikâyeler yalnızca gerekli izinler alındığında ve kişisel bilgi en aza indirilerek kullanılır. Paylaşıma uygun olmayan kayıtlar yayımlanmaz; gerektiğinde yüz, isim veya konum gibi ayırt edici unsurlar gizlenir.'],
        },
        {
          title: 'Saklama ve güvenlik',
          paragraphs: ['Bilgiler yalnızca belirtilen amaçlar için gerekli süre boyunca veya yasal saklama yükümlülükleri kapsamında tutulur; süre sonunda güvenli biçimde silinir, yok edilir ya da anonim hâle getirilir. Yetkisiz erişimi önlemek için makul teknik ve idari önlemler uygulanır.'],
        },
        {
          title: 'Haklarınız',
          paragraphs: ['6698 sayılı Kanun’un 11. maddesi kapsamında verinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme veya yok etme isteme, aktarılan üçüncü kişilere bildirim talep etme ve kanunda belirtilen diğer haklara sahipsiniz. Başvuru iletişim kanalı, resmî işletmeci bilgileriyle birlikte bu sayfada yayımlanacaktır.'],
        },
      ],
    },
    terms: {
      title: 'Kullanım Koşulları',
      summary: 'Web sitesinin, bağış talep formunun ve Askıda Oyuncak hizmetlerinin kullanımına ilişkin temel kuralları açıklar.',
      sections: [
        { title: 'Kapsam', paragraphs: ['Bu site, Askıda Oyuncak projesi hakkında bilgi vermek, oyuncak bağışı taleplerini almak ve projenin etkisini paylaşmak amacıyla sunulur. Siteyi kullanmanız bu koşulları kabul ettiğiniz anlamına gelir.'] },
        { title: 'Bağış koşulları', bullets: ['Bağışçı, oyuncakları bağışlamaya yetkili olduğunu beyan eder.', 'Kırık, keskin, eksik, hijyenik biçimde temizlenemeyen veya güvenlik riski taşıyan oyuncaklar kabul edilmeyebilir.', 'Kabul edilen oyuncaklar kontrol, temizlik, uygun olduğunda onarım ve eşleştirme süreçlerinden geçer.', 'Oyuncağın hangi kuruma veya yararlanıcı grubuna yönlendirileceği güvenlik, ihtiyaç ve operasyonel uygunluğa göre belirlenir.'] },
        { title: 'Ücretsiz sosyal fayda', paragraphs: ['Oyuncak bağışı karşılığında bir bedel, vergi avantajı veya belirli bir kişiye teslim garantisi verilmez. Nakliye veya teslim yöntemine ilişkin olası koşullar bağışçıya ayrıca bildirilir.'] },
        { title: 'Teslimat kayıtları', paragraphs: ['Kurumdan gelen teslimat fotoğrafları bağışçıyla paylaşılabilir. Web sitesinde yalnızca gerekli izinleri bulunan ve çocukların mahremiyetini koruyan içerikler yayımlanır. Demo olarak işaretlenen içerikler gerçek bir teslimat kaydı değildir.'] },
        { title: 'Doğru kullanım', bullets: ['Yanlış, yanıltıcı veya başkasına ait iletişim bilgileriyle form gönderilmemelidir.', 'Site güvenliğini bozacak, hizmeti engelleyecek veya hukuka aykırı işlem yapılmamalıdır.', 'Sitedeki marka, metin ve görseller izin olmadan ticari amaçla çoğaltılmamalıdır.'] },
        { title: 'Sorumluluğun sınırı', paragraphs: ['Sitedeki bilgiler genel bilgilendirme niteliğindedir. Bağışın kabulü ve teslim süresi; ürünün durumu, lojistik imkânlar ve kurum ihtiyaçlarına bağlıdır. Güvenlik nedeniyle bir bağış talebi reddedilebilir veya ek bilgi istenebilir.'] },
        { title: 'Değişiklikler ve hukuk', paragraphs: ['Bu koşullar hizmetin gelişimine veya yasal gerekliliklere göre güncellenebilir. Aksi zorunlu olmadıkça Türkiye Cumhuriyeti hukuku uygulanır. Güncel sürüm bu sayfada yayımlandığı tarihte yürürlüğe girer.'] },
      ],
    },
    cookies: {
      title: 'Çerez Politikası',
      summary: 'Sitede kullanılan çerezleri ve benzer teknolojilere ilişkin tercihlerinizi açıklar.',
      sections: [
        { title: 'Mevcut kullanım', paragraphs: ['Sitenin mevcut sürümünde reklam veya pazarlama çerezi kullanılmaz. Barındırma, güvenlik, oturum bütünlüğü ve temel sayfa işlevleri için teknik olarak gerekli çerezler veya benzer kayıtlar kullanılabilir.'] },
        { title: 'Zorunlu teknolojiler', paragraphs: ['Zorunlu çerezler sitenin güvenli biçimde açılması, dil veya oturum gibi açıkça talep edilen işlevlerin sağlanması ve kötüye kullanımın önlenmesi için kullanılabilir. Bu teknolojiler olmadan bazı temel özellikler çalışmayabilir.'] },
        { title: 'Analiz ve pazarlama', paragraphs: ['İleride analiz, performans veya pazarlama amaçlı çerezler eklenirse bunlar varsayılan olarak kapalı tutulur; açık ve aktif tercihiniz alınır. Kabul ve ret seçenekleri eşit biçimde sunulur ve tercihinizi daha sonra değiştirebilirsiniz.'] },
        { title: 'Tarayıcı ayarları', paragraphs: ['Çerezleri tarayıcınızın gizlilik ayarlarından görüntüleyebilir, silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi sitenin bazı bölümlerinin çalışmasını etkileyebilir.'] },
        { title: 'Güncellemeler', paragraphs: ['Kullanılan teknolojiler değiştiğinde bu politika; çerezin adı, amacı, süresi ve birinci veya üçüncü taraf niteliği gibi bilgilerle güncellenir.'], source: { label: 'KVKK Çerez Uygulamaları Hakkında Rehber', href: 'https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber' } },
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy and Data Protection Notice',
      summary: 'Explains what information we use during the donation process, why we use it, who may receive it, and your rights.',
      sections: [
        { title: 'Data controller', paragraphs: ['For this notice, the data controller is the legal entity operating the Provisional Toys social responsibility project. Its confirmed legal name and contact details will be added before public launch.'] },
        { title: 'Information we process', bullets: ['Full name', 'City', 'Email address or telephone number', 'Information you provide about the type, quantity, and condition of donated toys', 'Delivery records and photographs that institutions are authorised to share'] },
        { title: 'Why we use it', bullets: ['Receive your donation request and contact you', 'Coordinate acceptance, cleaning, repair, matching, and delivery', 'Send the donor the delivery photograph and institution details', 'Publish authorised impact stories while protecting children’s privacy', 'Maintain security, prevent misuse, and meet legal obligations'] },
        { title: 'Legal grounds', paragraphs: ['We process personal data where necessary to fulfil your request, comply with law, safely pursue the project’s legitimate activities, and—where required—based on your explicit consent. The duty to provide information applies independently of consent.'], source: { label: 'Official KVKK information-duty guidance', href: 'https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-' } },
        { title: 'Sharing and transfers', paragraphs: ['Information may be shared only as needed with receiving institutions, logistics or technical service providers, and legally authorised public bodies. If an international transfer becomes necessary, appropriate safeguards and notice will be provided before the transfer.'] },
        { title: 'Children’s privacy', paragraphs: ['Photographs or stories involving children are used only when the necessary permissions are in place and personal information is minimised. Records that are unsuitable for publication are not posted; identifying details such as faces, names, or locations are concealed when appropriate.'] },
        { title: 'Retention and security', paragraphs: ['Information is kept only for as long as needed for the stated purposes or applicable legal retention duties, then securely deleted, destroyed, or anonymised. Reasonable technical and organisational safeguards are applied against unauthorised access.'] },
        { title: 'Your rights', paragraphs: ['Under Article 11 of Turkish Law No. 6698, you may ask whether your data is processed, request information or correction, request deletion or destruction, ask that changes be notified to recipients, and exercise the other rights provided by law. The request channel will be published here with the operator’s confirmed details.'] },
      ],
    },
    terms: {
      title: 'Terms of Use',
      summary: 'Sets out the basic rules for using the website, donation request form, and Provisional Toys services.',
      sections: [
        { title: 'Scope', paragraphs: ['This site provides information about Provisional Toys, receives toy-donation requests, and shares the project’s impact. By using the site, you agree to these terms.'] },
        { title: 'Donation conditions', bullets: ['The donor confirms that they are entitled to donate the toys.', 'Broken, sharp, incomplete, unhygienic, or otherwise unsafe toys may be refused.', 'Accepted toys are inspected, cleaned, repaired when appropriate, and matched with a recipient.', 'The receiving institution or beneficiary group is selected according to safety, need, and operational suitability.'] },
        { title: 'No commercial exchange', paragraphs: ['No payment, tax benefit, or guarantee of delivery to a named individual is provided in exchange for a donation. Any transport or handover conditions will be communicated separately.'] },
        { title: 'Delivery records', paragraphs: ['Delivery photographs received from institutions may be shared with the donor. Only authorised content that protects children’s privacy is published on the website. Content marked as a demo is not an actual delivery record.'] },
        { title: 'Acceptable use', bullets: ['Do not submit false, misleading, or third-party contact details.', 'Do not interfere with site security, disrupt the service, or use it unlawfully.', 'Do not commercially reproduce the project’s brand, text, or images without permission.'] },
        { title: 'Limits of service', paragraphs: ['Website content is general information. Acceptance and delivery timing depend on toy condition, logistics, and institutional needs. A donation request may be refused or require additional information for safety reasons.'] },
        { title: 'Changes and governing law', paragraphs: ['These terms may be updated as the service develops or legal requirements change. Unless mandatory rules require otherwise, the laws of the Republic of Türkiye apply. The current version takes effect when published on this page.'] },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      summary: 'Explains the cookies and similar technologies used on the site and the choices available to you.',
      sections: [
        { title: 'Current use', paragraphs: ['The current site does not use advertising or marketing cookies. Technically necessary cookies or similar records may be used for hosting, security, session integrity, and essential page functions.'] },
        { title: 'Essential technologies', paragraphs: ['Essential cookies may support secure site access, explicitly requested functions such as language or session state, and misuse prevention. Some core features may not work if these technologies are blocked.'] },
        { title: 'Analytics and marketing', paragraphs: ['If analytics, performance, or marketing cookies are added later, they will be off by default and used only after an active, informed choice. Accept and reject options will be presented equally, and preferences can be changed later.'] },
        { title: 'Browser controls', paragraphs: ['You can inspect, delete, or block cookies through your browser’s privacy settings. Blocking essential cookies may affect parts of the site.'] },
        { title: 'Updates', paragraphs: ['If the technologies in use change, this policy will be updated with details such as the cookie name, purpose, duration, and whether it is first- or third-party.'], source: { label: 'Official KVKK Cookie Applications Guide', href: 'https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber' } },
      ],
    },
  },
};

function BrandMark() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <HandHeart className="brand-hand" />
      <ToyBrick className="brand-toy" />
    </span>
  );
}

export function LegalDocument({ language, type }: { language: LegalLanguage; type: LegalDocumentType }) {
  const c = shared[language];
  const document = documents[language][type];
  const otherLanguage: LegalLanguage = language === 'tr' ? 'en' : 'tr';
  const homeHref = language === 'tr' ? '/' : '/?lang=en';

  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement) document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="legal-shell">
      <header className="legal-header">
        <a className="brand" href={homeHref} aria-label={`${c.brand} home`}>
          <BrandMark />
          <span className="brand-lockup"><span className="brand-name">{c.brand}</span><small>{c.tagline}</small></span>
        </a>
        <nav className="legal-header-nav" aria-label={language === 'tr' ? 'Yasal sayfalar' : 'Legal pages'}>
          {(Object.keys(routes[language]) as LegalDocumentType[]).map((item) => <a className={item === type ? 'active' : ''} key={item} href={routes[language][item]}>{c.nav[item]}</a>)}
        </nav>
        <a className="legal-language" href={routes[otherLanguage][type]} lang={otherLanguage}>{c.switchLabel}</a>
      </header>

      <section className="legal-hero">
        <a className="legal-back" href={homeHref}><ArrowLeft aria-hidden="true" />{c.back}</a>
        <p className="eyebrow"><span />{c.eyebrow}</p>
        <h1>{document.title}</h1>
        <p className="legal-summary">{document.summary}</p>
        <p className="legal-updated">{c.updated}</p>
      </section>

      <article className="legal-body">
        <aside className="legal-prepublish-note">{c.prepNote}</aside>
        {document.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            <div className="legal-section-content">
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.source && <p><a href={section.source.href} target="_blank" rel="noreferrer">{section.source.label}</a></p>}
            </div>
          </section>
        ))}
      </article>

      <footer className="legal-page-footer">
        <span>{c.footer}</span>
        <nav aria-label={language === 'tr' ? 'Diğer yasal sayfalar' : 'Other legal pages'}>
          {(Object.keys(routes[language]) as LegalDocumentType[]).map((item) => <a key={item} href={routes[language][item]}>{c.nav[item]}</a>)}
        </nav>
      </footer>
    </main>
  );
}
