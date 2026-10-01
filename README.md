<div align="center">

# 🇹🇷 Gazi Mustafa Kemal Atatürk Arşivi & İnteraktif Kronoloji
### Gazi Mustafa Kemal Atatürk Archive & Interactive Chronology Map

<p align="center">
  Gazi Mustafa Kemal Atatürk'ün hayatını, askeri zaferlerini, devrimlerini ve Cumhuriyet tarihini modern, interaktif bir harita ve sesli rehber eşliğinde keşfedin.
  <br />
  <i>Explore the life, military campaigns, reforms, and chronology of Mustafa Kemal Atatürk through an interactive map and voice-guided virtual tour.</i>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MapLibre GL](https://img.shields.io/badge/MapLibre_GL-6.1-blueviolet?style=for-the-badge&logo=maplibre)](https://maplibre.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

![Atatürk Kronolojisi Ekran Görüntüsü](https://raw.githubusercontent.com/hsemihaktas/My-assets/main/ataturk-history/preview.webp)

</div>

---

## 📖 Proje Hakkında / About the Project

**Atatürk Kronolojisi**, Gazi Mustafa Kemal Atatürk'ün 1881'de Selanik'te başlayan ve Türk milletinin bağımsızlık mücadelesiyle taçlanan destansı yaşamını; görsel arşiv belgeleri, etkileşimli harita koordinatları, sesli anlatım ve kronolojik zaman çizgisiyle bir araya getiren açık kaynaklı bir dijital tarih projesidir.

---

## ✨ Temel Özellikler / Key Features

### 🇹🇷 Türkçe

- 🗺️ **Vektör Tabanlı İnteraktif Harita:** MapLibre GL ve OpenFreeMap altyapısıyla harita üzerinde olayların geçtiği mekanlara animasyonlu kamera geçişi (`flyTo`).
- 📍 **Akıllı Konum Gruplama (Cluster Pin):** Aynı şehir veya mevkide geçen çok sayıda olayı tek bir dinamik işaretçide toplar; tıklandığında olaylar arasında geçiş sağlar.
- 🎙️ **Sesli Anlatım & Otomatik Belgesel Turu (TTS):** Web Speech API kullanılarak Türkçe ve İngilizce dillerine en uygun doğal seslerle olayları dinleme ve duraksız ardışık anlatım ("Anlat/Start") modu.
- 🖼️ **Görsel Arşiv & Galeri:** Her tarihi olaya ait arşiv fotoğrafları, belgeler ve açıklamalar (hover/focus animasyonları ile).
- ⏳ **Zaman Çizelgesi (Timeline Slider):** Yıllara ve tarihlere göre gruplanmış, tıklanan yıla/güne otomatik kayan (auto-scroll) alt gezinme barı.
- 🔍 **Kapsamlı Arama & Kategori Filtresi:** Başlık, açıklama, şehir ve yıl bazlı anlık arama; 5 temel kategoriye göre filtreleme:
  - 🔴 **Askeri Başarılar** (Military)
  - 🔵 **Siyasi Adımlar** (Political)
  - 🟠 **Kişisel Hayat** (Personal)
  - 🟢 **İnkılaplar** (Reforms)
  - 🟣 **Eğitim Hayatı** (Education)
- 📅 **"Tarihte Bugün" Bildirimi:** Kullanıcının ziyaret ettiği gün ve ayda gerçekleşmiş olan tarihi hadiseleri algılayarak ekranda anımsatan akıllı bildirim kutusu.
- 🌐 **Çift Dil Desteği:** Tek tıkla Türkçe (TR) ve İngilizce (EN) dilleri arasında arayüz, harita etiketleri ve veri içeriği değişimi.
- 📱 **Tam Responsive Tasarım:** Masaüstünde sol panel deneyimi, mobil cihazlarda ergonomik alt çekmece (bottom-sheet) arayüzü.

---

### 🇬🇧 English

- 🗺️ **Vector-based Interactive Map:** Smooth animated camera transitions (`flyTo`) powered by MapLibre GL and OpenFreeMap.
- 📍 **Smart Location Stacking:** Clusters multiple historical milestones happening in the same city into unified interactive markers.
- 🎙️ **Text-to-Speech & Guided Virtual Tour:** Voice narration in Turkish and English; includes a hands-free "Tour" mode that automatically steps through history sequentially.
- 🖼️ **Visual Archives & Gallery:** Curated period photographs, historical documents, and labels for each event.
- ⏳ **Chronological Timeline:** Sleek floating slider grouped by year and date with auto-centering on selection.
- 🔍 **Instant Search & Category Filters:** Search by title, summary, location, or year with fast multi-category filtering.
- 📅 **"On This Day" Notification:** Real-time detection of events that occurred on today's calendar date in history.
- 🌐 **Bilingual (TR / EN):** Seamless full-text and map-label switching between Turkish and English.
- 📱 **Mobile First / Responsive:** Elegant desktop card overlays and touch-friendly mobile bottom-sheet sheets.

---

## 🛠️ Teknoloji Yığını / Tech Stack

| Kategori | Teknolojiler |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Kütüphane** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Stil / Arayüz** | [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) |
| **Harita Altyapısı** | [MapLibre GL](https://maplibre.org/), [OpenFreeMap](https://openfreemap.org/) |
| **Ses Motoru** | Web Speech API (`SpeechSynthesis`) |
| **Veri Mimarisi** | Yerel TS veri modelleri (`events.ts` & `events-en.ts`) |

---

## 📂 Proje Yapısı / Project Structure

```text
Ataturk-History/
├── app/
│   ├── layout.tsx              # SEO meta etiketleri, fontlar ve kök yapılandırma
│   ├── page.tsx                # Ana sayfa (SSR güvenli dinamik harita yükleyici)
│   └── globals.css             # Tailwind v4 stil tanımları ve özel scrollbar'lar
├── components/
│   ├── AtaturkMap.tsx          # Ana orkestrasyon bileşeni, sesli tur yönetimi
│   ├── MapLibreView.tsx        # MapLibre GL harita motoru, pin kümeleme & yerelleştirme
│   ├── EventGallery.tsx        # Seçili olayın fotoğraf galerisi ve başlık şeridi
│   ├── EventInfoCard.tsx       # Detaylı bilgi kartı (masaüstü & mobil bottom-sheet)
│   ├── EventTimeline.tsx       # Yıl/tarih bazlı yatay kayan zaman çizelgesi
│   ├── SearchOverlay.tsx       # Olay, yer ve kategori bazlı filtreleme modalı
│   └── OnThisDayNotification.tsx # "Tarihte Bugün" bildirim pop-up bileşeni
├── lib/
│   ├── context/
│   │   └── LanguageContext.tsx # TR / EN dil durum yönetimi (Context API)
│   ├── data/
│   │   ├── events.ts           # Türkçe detaylı kronoloji veri tabanı
│   │   ├── events-en.ts        # İngilizce kronoloji veri tabanı
│   │   └── config.ts           # Kategori renkleri ve başlık tanımlamaları
│   ├── hooks/
│   │   └── useTTS.ts           # Web Speech API seslendirme kancası
│   ├── types.ts                # TypeScript veri arayüzleri (HistoricalEvent vb.)
│   └── utils/
│       ├── dateUtils.ts        # Tarihte bugün eşleşme algoritması
│       └── mapStyle.ts         # Harita stil yardımcıları
└── public/                     # Statik görseller, arşiv fotoğrafları ve web worker'lar
```

---

## 🚀 Başlangıç / Getting Started

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler
- Node.js (v18.x veya üstü önerilir)
- npm, yarn, pnpm veya bun

### Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/hsemihaktas/Ataturk-History.git
   cd Ataturk-History
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

### Üretim (Production Build)

```bash
npm run build
npm run start
```

---

## 🤝 Katkıda Bulunma / Contributing

Katkılarınızı memnuniyetle karşılıyoruz! Tarihsel doğruluk, yeni görsel arşiv belgeleri ekleme veya kod iyileştirmeleri için:

1. Bu depoyu çatallayın (Fork).
2. Özellik dalınızı oluşturun (`git checkout -b feature/YeniOzellik`).
3. Değişikliklerinizi kaydedin (`git commit -m 'feat: Yeni tarihi olay eklendi'`).
4. Dalınıza gönderin (`git push origin feature/YeniOzellik`).
5. Bir **Pull Request** açın.

---

## 📄 Lisans / License

Bu proje [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır. Tarihsel dokümanlar ve fotoğraflar kamuya açık arşivlerden derlenmiştir.

---

<div align="center">
  <sub>"Beni görmek demek, mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir."</sub>
  <br />
  <b>Gazi Mustafa Kemal Atatürk</b>
</div>
