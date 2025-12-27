import { HistoricalEvent } from '../types';

export const ATATURK_CHRONOLOGY: HistoricalEvent[] = [
    {
        id: '1',
        year: 1881,
        date: '1881',
        title: 'Doğumu',
        location: 'Selanik',
        coordinates: [40.6401, 22.9444],
        description: 'Mustafa Kemal, Selanik\'te pembe evde dünyaya geldi. Ali Rıza Efendi ve Zübeyde Hanım\'ın oğlu olarak Türk tarihinin akışını değiştirecek bir ömür başladı.',
        category: 'personal',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/ataturkun-hayati',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Atatürk_House_Museum_%28Thessaloniki%29.jpg/800px-Atatürk_House_Museum_%28Thessaloniki%29.jpg',
                label: 'Doğduğu Pembe Ev'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Zübeyde_Hanım.jpg',
                label: 'Zübeyde Hanım'
            }
        ]
    },
    {
        id: '2',
        year: 1893,
        date: '1893',
        title: 'Selanik Askeri Rüştiyesi',
        location: 'Selanik',
        coordinates: [40.6401, 22.9444],
        description: 'Askeri eğitimine başladığı bu okulda, matematik öğretmeni tarafından "Kemal" ismi verilerek yeteneği tescillendi.',
        category: 'education',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/ataturkun-egitim-hayati',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mustafa_Kemal_Atatürk_1905.jpg/800px-Mustafa_Kemal_Atatürk_1905.jpg',
                label: 'Öğrencilik Yılları'
            }
        ]
    },
    {
        id: '3',
        year: 1899,
        date: '13 Mart 1899',
        title: 'Harp Okulu\'na Giriş',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Manastır Askeri İdadisi\'ni bitirdikten sonra İstanbul\'da Mekteb-i Harbiye-i Şahane\'ye girerek askeri kariyerinde zirveye giden yolu açtı.',
        category: 'education',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/harp-okulu',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1590429712339-651296715f18?q=80&w=800',
                label: 'İstanbul Yılları'
            }
        ]
    },
    {
        id: '4',
        year: 1911,
        date: '1911',
        title: 'Trablusgarp Savaşı',
        location: 'Derne ve Tobruk',
        coordinates: [32.0836, 23.9764],
        description: 'İtalyan işgaline karşı gönüllü olarak Trablusgarp\'a gitti. Yerel halkı örgütleyerek emperyalizme karşı ilk büyük askeri başarısını kazandı.',
        category: 'military',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/trablusgarp-savasi',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mustafa_Kemal_Atatürk_1911_Tripolitania.jpg/800px-Mustafa_Kemal_Atatürk_1911_Tripolitania.jpg',
                label: 'Trablusgarp Cephesi'
            }
        ]
    },
    {
        id: '5',
        year: 1915,
        date: '1915',
        title: 'Çanakkale Destanı',
        location: 'Gelibolu',
        coordinates: [40.4098, 26.6666],
        description: '19. Tümen Komutanı olarak Arıburnu ve Anafartalar\'da dünyayı dize getirdi. "Ben size taarruzu değil, ölmeyi emrediyorum" emriyle zaferin mimarı oldu.',
        category: 'military',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/canakkale-cephesi',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mustafa_Kemal_Atatürk_in_Gallipoli.jpg/800px-Mustafa_Kemal_Atatürk_in_Gallipoli.jpg',
                label: 'Anafartalar Kahramanı'
            }
        ]
    },
    {
        id: '6',
        year: 1919,
        date: '19 Mayıs 1919',
        title: 'Kurtuluş Savaşı Başlıyor',
        location: 'Samsun',
        coordinates: [41.2928, 36.3313],
        description: 'Milli Mücadele\'yi başlatmak üzere Samsun\'a çıktı. Anadolu ihtilalinin fitilini ateşleyerek bağımsızlık yolculuğunu başlattı.',
        category: 'political',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/milli-mucadele-basliyor',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Bandirma_Steamboat.jpg',
                label: 'Bandırma Vapuru'
            }
        ]
    },
    {
        id: '7',
        year: 1920,
        date: '23 Nisan 1920',
        title: 'Milli İradenin Doğuşu',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Türkiye Büyük Millet Meclisi açıldı. "Egemenlik kayıtsız şartsız milletindir" ilkesiyle yeni devletin temelleri Ankara\'da atıldı.',
        category: 'political',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/turkiye-buyuk-millet-meclisinin-acilisi',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Opening_of_the_First_Grand_National_Assembly.jpg/800px-Opening_of_the_First_Grand_National_Assembly.jpg',
                label: 'Birinci Meclis'
            }
        ]
    },
    {
        id: '8',
        year: 1922,
        date: '30 Ağustos 1922',
        title: 'Büyük Zafer',
        location: 'Dumlupınar',
        coordinates: [38.7569, 30.5387],
        description: 'Başkomutanlık Meydan Muharebesi kazanıldı. Anadolu toprakları ebediyen Türk yurdu olarak tescillendi ve işgal sona erdi.',
        category: 'military',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/buyuk-taarruz',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mustafa_Kemal_Atatürk_observing_the_Great_Offensive.jpg/800px-Mustafa_Kemal_Atatürk_observing_the_Great_Offensive.jpg',
                label: 'Kocatepe Gözlem'
            }
        ]
    },
    {
        id: '9',
        year: 1923,
        date: '29 Ekim 1923',
        title: 'Cumhuriyet\'in İlanı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Modern Türkiye\'nin yönetim biçimi Cumhuriyet olarak ilan edildi. Mustafa Kemal Atatürk, oy birliğiyle ilk Cumhurbaşkanı seçildi.',
        category: 'reform',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/cumhuriyetin-ilani',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Mustafa_Kemal_Atatürk_leaving_the_parliament.jpg/800px-Mustafa_Kemal_Atatürk_leaving_the_parliament.jpg',
                label: 'Cumhuriyet Bayramı'
            }
        ]
    },
    {
        id: '10',
        year: 1934,
        date: '24 Kasım 1934',
        title: 'Atatürk Soyadı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Milletin babası olarak TBMM tarafından kendisine "Atatürk" soyadı verildi. Türk milletiyle olan kopmaz bağı bu isimle taçlandı.',
        category: 'reform',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/soyad-kanunu',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mustafa_Kemal_Atatürk_portrait.jpg/800px-Mustafa_Kemal_Atatürk_portrait.jpg',
                label: 'Gazi Mustafa Kemal Atatürk'
            }
        ]
    },
    {
        id: '11',
        year: 1938,
        date: '10 Kasım 1938',
        title: 'Ebediyete İntikal',
        location: 'İstanbul',
        coordinates: [41.0370, 28.9950],
        description: 'Ulu Önder Atatürk, Dolmabahçe Sarayı\'nda hayata gözlerini yumdu. "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır" sözü vasiyeti oldu.',
        category: 'personal',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/ataturkun-vefati',
        gallery: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Anitkabir_Overview.jpg/800px-Anitkabir_Overview.jpg',
                label: 'Anıtkabir'
            }
        ]
    }
];
