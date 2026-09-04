'use client';

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Box,
  CalendarDays,
  Check,
  Heart,
  HandHeart,
  Image as ImageIcon,
  Menu,
  MailCheck,
  MapPin,
  ShieldCheck,
  Sparkles,
  ToyBrick,
  X,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const copy = {
  tr: {
    notice: 'İyilik paylaşınca çoğalır, oyuncaklar yeniden oyuna döner.',
    brand: 'askıda oyuncak',
    seoTitle: 'Askıda Oyuncak | Oyuncaklara ikinci hayat',
    seoDescription: 'Kullanılmayan oyuncakları güvenle yeniliyor ve ihtiyaç sahibi çocuklarla buluşturuyoruz.',
    nav: ['Nasıl çalışır?', 'Hikâyemiz', 'Etki'],
    send: 'Oyuncak gönder',
    eyebrow: 'Sevgiyle yenilenen oyuncaklar',
    titleA: 'Oyuncaklara ikinci hayat,',
    titleB: 'çocuklara',
    titleC: ' yeni mutluluklar.',
    lede: 'Evlerde sessizce bekleyen oyuncakları sevgiyle topluyor, özenle yeniliyor ve yeni oyun arkadaşlarıyla buluşturuyoruz. Çünkü her oyuncak ikinci bir hikâyeyi hak eder.',
    primary: 'Oyuncağını paylaş',
    secondary: 'Nasıl çalıştığını gör',
    prepared: 'Sevgiyle hazırlanır',
    stepsMini: 'topla · temizle · onar · paylaş',
    belief: 'Çünkü bir çocuğun büyüdüğü oyuncak, başka bir çocuğun hayaline dönüşebilir.',
    processEyebrow: 'İyilik, özen ister',
    processTitle: 'Bir oyuncak bize geldiğinde ne olur?',
    processText: 'Bağışlanan her oyuncağı yeni sahibine güvenle ulaşana kadar beş adımda özenle hazırlıyoruz.',
    steps: [
      ['01', 'Gönder', 'Kullanmadığınız, paylaşmaya uygun oyuncağı bize ulaştırın.'],
      ['02', 'Temizle', 'Her oyuncağı malzemesine uygun şekilde dezenfekte edelim.'],
      ['03', 'Onar', 'Mümkün olan küçük eksikleri ve hasarları güvenle giderelim.'],
      ['04', 'Buluştur', 'Hazır olan oyuncakları ihtiyaç sahibi çocuklara ulaştıralım.'],
      ['05', 'Belgele', 'Teslim alan kurumdan gelen fotoğrafı ve kurum bilgisini bağışçıyla paylaşalım.'],
    ],
    storyEyebrow: 'Bir sosyal sorumluluk projesi',
    storyArtLabel: 'GÜVENLİ DÖNÜŞÜM',
    storyArtWord: 'paylaş',
    storyArtSteps: 'Kontrol  ·  Hijyen  ·  Onarım  ·  Teslimat',
    storyTitle: 'Fazlalığı azaltırken mutluluğu çoğaltıyoruz.',
    storyText1: 'Askıda Oyuncak, evlerde unutulan oyuncaklarla yeni oyunlara ihtiyaç duyan çocuklar arasında güvenli ve şeffaf bir köprü kurar.',
    storyText2: 'Amacımız yalnızca oyuncak aktarmak değil; paylaşma kültürünü, onarım alışkanlığını ve çocuklar için fırsat eşitliğini birlikte büyütmek.',
    principles: ['Çocuk güvenliği önce gelir', 'Her oyuncak tek tek kontrol edilir', 'Uygun olmayan ürünler dağıtıma çıkmaz'],
    impactEyebrow: 'Birlikte yarattığımız etki',
    impactTitle: 'Daha az atık. Daha çok oyun. Daha güçlü bağlar.',
    impactIntro: 'Bir oyuncağın yeniden kullanılması yalnızca bir eşyayı kurtarmaz. Çevresel, sosyal ve kültürel etkisi aynı anda büyür.',
    impactAxes: ['Oyuncak', 'Çocuk', 'Toplum'],
    impactCards: [
      ['Oyuncaklara ikinci hayat', 'Kullanılabilir ürünlerin ömrünü uzatır, gereksiz atığı azaltır.'],
      ['Çocuklara oyun hakkı', 'Nitelikli oyuncağa erişimi dayanışmayla kolaylaştırır.'],
      ['Topluma onarım kültürü', 'Atmak yerine bakım vermeyi ve paylaşmayı teşvik eder.'],
    ],
    standardsTitle: 'Her oyuncak yeni bir yolculuğa hazır mı?',
    standardsText: 'Güvenliği, temizliği ve eksiksizliği kontrol ediyoruz. Kırık, keskin parçası bulunan veya hijyenik şekilde temizlenemeyen oyuncakları dağıtıma almıyoruz.',
    standardsLink: 'Bağış kabul kriterlerini gör',
    formEyebrow: 'İlk adımı siz atın',
    formTitle: 'Oyuncağınızı göndermek ister misiniz?',
    formText: 'Kısa formu doldurun. Ekibimiz teslimat seçenekleri ve kabul kriterleriyle size geri dönsün.',
    name: 'Adınız soyadınız',
    city: 'Şehir',
    contact: 'E-posta veya telefon',
    note: 'Oyuncaklar hakkında kısa bilgi',
    notePlaceholder: 'Türü, yaklaşık adedi ve genel durumu…',
    submit: 'Gönderim talebi oluştur',
    successTitle: 'Harika, iyilik yola çıktı!',
    successText: 'Talebinizi aldık. Teslimat detayları için sizinle iletişime geçeceğiz.',
    again: 'Yeni talep oluştur',
    privacy: 'Bilgileriniz bağış sürecini yürütmek ve teslimat fotoğrafını size iletmek için kullanılır.',
    proofEyebrow: 'Teslimat sonrası şeffaflık',
    proofTitle: 'Oyuncağınızın yeni hikâyesini görün.',
    proofText: 'Oyuncak teslim edildiğinde, ilgili kurumdan gelen teslimat fotoğrafını ve kurum bilgisini bağışçıya iletiyoruz. Paylaşım izni bulunan fotoğrafları da çocukların mahremiyetini koruyarak burada yayımlıyoruz.',
    proofItems: ['Teslim alan kurumun bilgisi', 'Kurum tarafından gönderilen teslimat fotoğrafı', 'Bağışçıya doğrudan bilgilendirme'],
    proofRecord: 'Örnek teslimat kaydı',
    proofVerified: 'Kurum onaylı',
    proofDemo: 'Demo içerik',
    proofPhotoAlt: 'Bağışlanan ahşap oyuncağına sarılan mutlu bir çocuk, temsili görsel',
    proofPhotoCaption: 'Temsili demo görsel · Gerçek bir teslimat kaydı değildir',
    proofInstitutionLabel: 'Teslim alan kurum',
    proofInstitution: 'Umut Çocuk Destek Merkezi',
    proofLocation: 'İstanbul · Ümraniye',
    proofDateLabel: 'Teslim tarihi',
    proofDate: '24 Ağustos 2026',
    proofPackage: '18 oyuncak · 7 oyun seti',
    proofSentLabel: 'Bağışçı bilgilendirmesi',
    proofSentValue: 'Fotoğraf ve kurum bilgisi iletildi',
    faqEyebrow: 'Merak edilenler',
    faqTitle: 'Sık sorulan sorular',
    faqs: [
      ['Hangi oyuncakları gönderebilirim?', 'Temizlenebilir, eksiksiz, güvenli ve yeniden oynamaya uygun oyuncakları kabul ediyoruz. Pelüş, pilli veya parçalı oyuncaklar için formda kısa bilgi vermeniz yeterli.'],
      ['Oyuncaklar nasıl dezenfekte ediliyor?', 'Oyuncağın malzemesine uygun temizlik ve dezenfeksiyon yöntemi uygulanır. Güvenle temizlenemeyen ürünler dağıtıma alınmaz.'],
      ['Oyuncakların kime ulaştığını görebilir miyim?', 'Çocukların mahremiyetini koruyarak projenin toplam etkisini ve sahadan hikâyeleri düzenli olarak paylaşmayı hedefliyoruz.'],
      ['Kurum olarak destek olabilir miyiz?', 'Evet. Toplama noktası, lojistik, bakım-onarım veya kurumsal gönüllülük desteği için bizimle iletişime geçebilirsiniz.'],
      ['Teslimat fotoğrafları nasıl paylaşılıyor?', 'Kurumdan gelen fotoğraf önce mahremiyet açısından kontrol edilir. Bağışçıya kurum bilgisiyle birlikte doğrudan gönderilir; yalnızca paylaşım izni bulunan ve kişisel bilgi içermeyen fotoğraflar web sitesinde yayımlanır.'],
    ],
    footerText: 'Her çocuğun oyun hakkına, her oyuncağın ikinci bir hikâyeye sahip olduğuna inanıyoruz.',
    footerNav: ['Bağış Yap', 'Kabul Kriterleri', 'Kurumsal Destek', 'İletişim'],
    legalTitle: 'Yasal',
    legalNav: [
      ['Gizlilik ve KVKK', '/gizlilik'],
      ['Kullanım Koşulları', '/kullanim-kosullari'],
      ['Çerez Politikası', '/cerez-politikasi'],
    ],
    legalAria: 'Yasal sayfalar',
    privacyLink: 'Gizlilik metnini okuyun.',
    domain: 'askidaoyuncak.org',
  },
  en: {
    notice: 'Kindness grows when shared, and toys return to play.',
    brand: 'provisional toys',
    seoTitle: 'Provisional Toys | A second life for every toy',
    seoDescription: 'We renew unused toys with care and deliver them to children who need them.',
    nav: ['How it works', 'Our story', 'Impact'],
    send: 'Send a toy',
    eyebrow: 'Toys renewed with love',
    titleA: 'A second life for toys,',
    titleB: 'new joy',
    titleC: ' for children.',
    lede: 'We collect toys waiting quietly at home, renew them with care, and match them with new playmates. Because every toy deserves a second story.',
    primary: 'Share your toy',
    secondary: 'See how it works',
    prepared: 'Prepared with love',
    stepsMini: 'collect · clean · repair · share',
    belief: 'Because a toy one child has grown with can become another child’s dream.',
    processEyebrow: 'Kindness takes care',
    processTitle: 'What happens when a toy reaches us?',
    processText: 'We prepare every donated toy with care in five steps, until it safely reaches its new owner.',
    steps: [
      ['01', 'Send', 'Send us an unused toy that is ready to be shared.'],
      ['02', 'Clean', 'We disinfect every toy with a material-safe method.'],
      ['03', 'Repair', 'Where possible, we safely fix small faults and missing parts.'],
      ['04', 'Match', 'We deliver ready toys to children who need them.'],
      ['05', 'Document', 'We share the receiving institution’s photo and delivery information with the donor.'],
    ],
    storyEyebrow: 'A social responsibility project',
    storyArtLabel: 'SAFE RENEWAL',
    storyArtWord: 'share',
    storyArtSteps: 'Inspect  ·  Clean  ·  Repair  ·  Deliver',
    storyTitle: 'We reduce excess and multiply joy.',
    storyText1: 'Provisional Toys builds a safe, transparent bridge between toys forgotten at home and children waiting for new ways to play.',
    storyText2: 'Our aim is not only to pass toys on, but to grow a culture of sharing, repair, and equal opportunity for children.',
    principles: ['Child safety comes first', 'Every toy is checked individually', 'Unsuitable items are never distributed'],
    impactEyebrow: 'The impact we create together',
    impactTitle: 'Less waste. More play. Stronger bonds.',
    impactIntro: 'Reusing a toy does more than save an object. It creates environmental, social, and cultural value at the same time.',
    impactAxes: ['Toy', 'Child', 'Community'],
    impactCards: [
      ['A second life for toys', 'Extends the life of usable products and reduces avoidable waste.'],
      ['The right to play', 'Makes access to quality toys easier through solidarity.'],
      ['A culture of repair', 'Encourages care and sharing instead of throwing things away.'],
    ],
    standardsTitle: 'Is every toy ready for a new journey?',
    standardsText: 'We check safety, cleanliness, and completeness. Toys that are broken, have sharp parts, or cannot be cleaned hygienically are not distributed.',
    standardsLink: 'See donation criteria',
    formEyebrow: 'Take the first step',
    formTitle: 'Would you like to send your toy?',
    formText: 'Complete this short form. Our team will contact you with delivery options and acceptance criteria.',
    name: 'Full name',
    city: 'City',
    contact: 'Email or phone',
    note: 'A short note about the toys',
    notePlaceholder: 'Type, approximate quantity, and condition…',
    submit: 'Create a donation request',
    successTitle: 'Wonderful—kindness is on its way!',
    successText: 'We received your request. We will contact you with delivery details.',
    again: 'Create another request',
    privacy: 'Your details are used to coordinate the donation and send you the delivery photo.',
    proofEyebrow: 'Transparency after delivery',
    proofTitle: 'See the next chapter of your toy’s story.',
    proofText: 'Once a toy is delivered, we send the donor the receiving institution’s delivery photo and details. With permission, selected photos are also published here while protecting children’s privacy.',
    proofItems: ['Receiving institution details', 'Delivery photo provided by the institution', 'A direct update sent to the donor'],
    proofRecord: 'Sample delivery record',
    proofVerified: 'Institution verified',
    proofDemo: 'Demo content',
    proofPhotoAlt: 'A happy child hugging a donated wooden toy, illustrative image',
    proofPhotoCaption: 'Illustrative demo image · Not an actual delivery record',
    proofInstitutionLabel: 'Receiving institution',
    proofInstitution: 'Hope Child Support Center',
    proofLocation: 'Istanbul · Ümraniye',
    proofDateLabel: 'Delivery date',
    proofDate: '24 August 2026',
    proofPackage: '18 toys · 7 play sets',
    proofSentLabel: 'Donor update',
    proofSentValue: 'Photo and institution details sent',
    faqEyebrow: 'Good to know',
    faqTitle: 'Frequently asked questions',
    faqs: [
      ['Which toys can I send?', 'We accept toys that can be cleaned, are complete, safe, and ready to be enjoyed again. Add a brief note for plush, battery-operated, or multi-part toys.'],
      ['How are toys disinfected?', 'We use a cleaning and disinfection method suited to each material. Items that cannot be cleaned safely are not distributed.'],
      ['Can I see who receives the toys?', 'While protecting children’s privacy, we aim to share the project’s overall impact and stories from the field regularly.'],
      ['Can our organization support the project?', 'Yes. Contact us to support collection points, logistics, repair, or corporate volunteering.'],
      ['How are delivery photos shared?', 'Photos received from institutions are checked for privacy first. The donor receives the photo with institution details; only approved photos without personal information are published on the website.'],
    ],
    footerText: 'We believe every child has the right to play and every toy deserves a second story.',
    footerNav: ['Donate', 'Acceptance Criteria', 'Partner With Us', 'Contact'],
    legalTitle: 'Legal',
    legalNav: [
      ['Privacy Notice', '/privacy'],
      ['Terms of Use', '/terms'],
      ['Cookie Policy', '/cookie-policy'],
    ],
    legalAria: 'Legal pages',
    privacyLink: 'Read the privacy notice.',
    domain: 'ProvisionalToys.org',
  },
} as const;

function BrandMark() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <HandHeart className="brand-hand" />
      <ToyBrick className="brand-toy" />
    </span>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const c = copy[language];
  const tr = language === 'tr';

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
    if (requestedLanguage === 'en') setLanguage('en');
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = c.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.seoDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', c.seoTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', c.seoDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', c.seoTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', c.seoDescription);
  }, [c, language]);

  function changeLanguage(nextLanguage: 'tr' | 'en') {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    if (nextLanguage === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function goToDonation() {
    setMenuOpen(false);
    document.querySelector('#bagis')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="site-shell">
      <div className="announcement"><Heart aria-hidden="true" /><span>{c.notice}</span></div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${c.brand} home`}>
          <BrandMark />
          <span className="brand-lockup"><span className="brand-name">{c.brand}</span><small>{tr ? 'Oyuncağa ikinci bir hayat' : 'A second life for every toy'}</small></span>
        </a>

        <nav className="desktop-nav" aria-label={tr ? 'Ana menü' : 'Main menu'}>
          <a href="#nasil-calisir">{c.nav[0]}</a><a href="#hikayemiz">{c.nav[1]}</a><a href="#etki">{c.nav[2]}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label={tr ? 'Dil seçimi' : 'Language selection'}>
            <button className={tr ? 'active' : ''} onClick={() => changeLanguage('tr')} aria-pressed={tr}>TR</button>
            <button className={!tr ? 'active' : ''} onClick={() => changeLanguage('en')} aria-pressed={!tr}>EN</button>
          </div>
          <Button className="donate-button" size="lg" onClick={goToDonation}>{c.send}</Button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={tr ? 'Menüyü aç' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label={tr ? 'Mobil menü' : 'Mobile menu'}>
            <a href="#nasil-calisir" onClick={() => setMenuOpen(false)}>{c.nav[0]}</a>
            <a href="#hikayemiz" onClick={() => setMenuOpen(false)}>{c.nav[1]}</a>
            <a href="#etki" onClick={() => setMenuOpen(false)}>{c.nav[2]}</a>
            <Button onClick={goToDonation}>{c.send}</Button>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <img className="hero-cover-image" src="/hero-cover-v2.png" alt={tr ? 'Bağışlanmaya hazırlanan oyuncaklar ve bağış kutusu' : 'Toys and a donation box ready to be shared'} />
        <div className="hero-cover-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> {c.eyebrow}</p>
          <h1>{c.titleA} <em>{c.titleB}</em>{c.titleC}</h1>
          <p className="hero-lede">{c.lede}</p>
          <div className="hero-actions">
            <Button className="primary-cta" size="lg" onClick={goToDonation}>{c.primary} <ArrowRight /></Button>
            <a className="text-link" href="#nasil-calisir">{c.secondary}</a>
          </div>
          <div className="hero-assurance" aria-label={tr ? 'Güven standartlarımız' : 'Our trust standards'}>
            <span><BadgeCheck />{tr ? 'Tek tek kontrol' : 'Individually checked'}</span>
            <span><Sparkles />{tr ? 'Hijyenik temizlik' : 'Hygienic cleaning'}</span>
            <span><ShieldCheck />{tr ? 'Güvenli teslimat' : 'Safe delivery'}</span>
          </div>
        </div>
      </section>

      <section className="belief-band"><Sparkles aria-hidden="true" /><p>{c.belief}</p><Sparkles aria-hidden="true" /></section>

      <section className="process-section section-pad" id="nasil-calisir">
        <div className="process-layout">
          <div className="process-intro">
            <div className="section-heading"><p className="eyebrow"><span /> {c.processEyebrow}</p><h2>{c.processTitle}</h2><p>{c.processText}</p></div>
            <div className="process-commitment">
              <ShieldCheck aria-hidden="true" />
              <div>
                <strong>{tr ? 'Her adım kayıtlı ve kontrollü' : 'Every step is documented and controlled'}</strong>
                <p>{tr ? 'Oyuncaklar kabulden teslimata kadar aynı güvenlik standardıyla değerlendirilir.' : 'Toys are assessed to the same safety standard from acceptance to delivery.'}</p>
              </div>
            </div>
          </div>
          <div className="process-grid" role="list">
            {c.steps.map((step) => <article className="process-card" key={step[0]} role="listitem"><h3>{step[1]}</h3><p>{step[2]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="story-section section-pad" id="hikayemiz">
        <div className="story-art" data-label={c.storyArtLabel} data-steps={c.storyArtSteps} aria-hidden="true"><div className="story-circle"><Heart /><span>{c.storyArtWord}</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
        <div className="story-copy"><p className="eyebrow light"><span /> {c.storyEyebrow}</p><h2>{c.storyTitle}</h2><p>{c.storyText1}</p><p>{c.storyText2}</p><ul>{c.principles.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
      </section>

      <section className="impact-section section-pad" id="etki">
        <div className="impact-top">
          <div className="section-heading"><p className="eyebrow"><span /> {c.impactEyebrow}</p><h2>{c.impactTitle}</h2></div>
          <p className="impact-intro">{c.impactIntro}</p>
        </div>
        <div className="impact-grid">
          {c.impactCards.map((card, index) => <article key={card[0]}><span className="impact-axis">{c.impactAxes[index]}</span><h3>{card[0]}</h3><p>{card[1]}</p></article>)}
        </div>
        <div className="standards-card"><div className="standards-icon"><ShieldCheck aria-hidden="true" /></div><div><h3>{c.standardsTitle}</h3><p>{c.standardsText}</p></div><a href="#sss">{c.standardsLink} <ArrowRight /></a></div>
      </section>

      <section className="proof-section section-pad" id="yeni-hikayeler">
        <div className="proof-copy">
          <p className="eyebrow"><span /> {c.proofEyebrow}</p>
          <h2>{c.proofTitle}</h2>
          <p className="proof-lede">{c.proofText}</p>
          <ul>
            {c.proofItems.map((item, index) => {
              const Icon = index === 0 ? Building2 : index === 1 ? ImageIcon : MailCheck;
              return <li key={item}><Icon aria-hidden="true" /><span>{item}</span></li>;
            })}
          </ul>
        </div>
        <div className="proof-record">
          <div className="proof-record-head">
            <strong>{c.proofRecord}</strong>
            <div><span className="proof-demo-tag">{c.proofDemo}</span><span className="proof-verified"><BadgeCheck />{c.proofVerified}</span></div>
          </div>
          <figure className="proof-photo">
            <img src="/delivery-record-demo-v2.png" alt={c.proofPhotoAlt} />
            <figcaption>{c.proofPhotoCaption}</figcaption>
          </figure>
          <div className="proof-details">
            <div className="proof-detail proof-detail-wide"><Building2 aria-hidden="true" /><div><small>{c.proofInstitutionLabel}</small><strong>{c.proofInstitution}</strong><span><MapPin aria-hidden="true" />{c.proofLocation}</span></div></div>
            <div className="proof-detail"><CalendarDays aria-hidden="true" /><div><small>{c.proofDateLabel}</small><strong>{c.proofDate}</strong><span>{c.proofPackage}</span></div></div>
          </div>
          <div className="proof-record-meta"><div><small>{c.proofSentLabel}</small><strong>{c.proofSentValue}</strong></div><MailCheck aria-hidden="true" /></div>
        </div>
      </section>

      <section className="donation-section section-pad" id="bagis">
        <div className="donation-intro"><p className="eyebrow light"><span /> {c.formEyebrow}</p><h2>{c.formTitle}</h2><p>{c.formText}</p><div className="donation-domain"><Box aria-hidden="true" /><span>{c.domain}</span></div></div>
        <div className="form-card">
          {submitted ? (
            <div className="success-state" role="status"><span><Check /></span><h3>{c.successTitle}</h3><p>{c.successText}</p><Button variant="outline" onClick={() => setSubmitted(false)}>{c.again}</Button></div>
          ) : (
            <form onSubmit={submitForm}>
              <label>{c.name}<Input name="name" required autoComplete="name" /></label>
              <div className="form-row"><label>{c.city}<Input name="city" required autoComplete="address-level2" /></label><label>{c.contact}<Input name="contact" required /></label></div>
              <label>{c.note}<Textarea name="note" required placeholder={c.notePlaceholder} /></label>
              <Button type="submit" className="form-submit">{c.submit} <ArrowRight /></Button>
              <small>{c.privacy} <a href={c.legalNav[0][1]}>{c.privacyLink}</a></small>
            </form>
          )}
        </div>
      </section>

      <section className="faq-section section-pad" id="sss">
        <div className="section-heading"><p className="eyebrow"><span /> {c.faqEyebrow}</p><h2>{c.faqTitle}</h2></div>
        <Accordion className="faq-list" defaultValue={['item-0']}>
          {c.faqs.map((faq, index) => <AccordionItem key={faq[0]} value={`item-${index}`}><AccordionTrigger>{faq[0]}</AccordionTrigger><AccordionContent><p>{faq[1]}</p></AccordionContent></AccordionItem>)}
        </Accordion>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><a className="brand" href="#top"><BrandMark /><span className="brand-lockup"><span className="brand-name">{c.brand}</span><small>{tr ? 'Oyuncağa ikinci bir hayat' : 'A second life for every toy'}</small></span></a><p>{c.footerText}</p></div>
        <nav className="footer-primary-nav" aria-label={tr ? 'Alt menü' : 'Footer navigation'}>{c.footerNav.map((item, index) => <a key={item} href={index === 0 ? '#bagis' : index === 1 ? '#sss' : '#hikayemiz'}>{item}</a>)}</nav>
        <nav className="footer-legal-nav" aria-label={c.legalAria}><strong>{c.legalTitle}</strong>{c.legalNav.map((item) => <a key={item[0]} href={item[1]}>{item[0]}</a>)}</nav>
        <div className="footer-meta"><span>{c.domain}</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
