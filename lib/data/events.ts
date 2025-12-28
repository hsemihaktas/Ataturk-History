import { HistoricalEvent } from '../types';

export const ATATURK_CHRONOLOGY: HistoricalEvent[] = [
    {
        id: '1',
        year: 1881,
        date: '1881',
        title: 'Doğumu',
        location: 'Selanik',
        coordinates: [40.6401, 22.9444],
        description: '1881 yılında, o dönemde Osmanlı İmparatorluğu\'nun kozmopolit yapısıyla dikkat çeken Selanik şehrinde, Koca Kasım Paşa Mahallesi\'ndeki üç katlı pembe evde dünyaya geldi. Babası Gümrük Muhafaza Memurluğu yapan Ali Rıza Efendi, annesi ise köklü bir Türk ailesine mensup Zübeyde Hanım\'dır. Bu mütevazı başlangıç, yıkılmakta olan bir imparatorluğun küllerinden modern bir cumhuriyet kuracak olan liderin hayat yolculuğunun ilk adımıydı.',
        category: 'personal',
        msbLink: 'https://ata.msb.gov.tr/Genel/icerik/ataturkun-hayati',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_House_Museum_%28Thessaloniki%29.jpg',
                label: 'Doğduğu Pembe Ev'
            },
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zübeyde_Hanım.jpg',
                label: 'Annesi Zübeyde Hanım'
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
        description: 'Küçük yaşta askerlik mesleğine duyduğu ilgiyle, annesinden gizli olarak girdiği sınavı kazanarak Selanik Askeri Rüştiyesi\'ne kaydoldu. Burada matematik dersindeki üstün yeteneği ve olgun kişiliğiyle dikkat çekti. Matematik öğretmeni Yüzbaşı Mustafa Efendi, "Senin de adın Mustafa, benim de. Arada bir fark olsun" diyerek kendisine "bilgi ve erdem bakımından olgunluk" anlamına gelen "Kemal" adını verdi.',
        category: 'education',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1905.jpg',
                label: 'Öğrencilik Yılları'
            }
        ]
    },
    {
        id: '3',
        year: 1895,
        date: '1895',
        title: 'Manastır Askeri İdadisi',
        location: 'Manastır',
        coordinates: [41.0297, 21.3292],
        description: 'Selanik Askeri Rüştiyesi\'ni başarıyla bitirdikten sonra, bugünkü Kuzey Makedonya sınırları içinde bulunan Manastır Askeri İdadisi\'ne girdi. Bu dönemde, tarih öğretmeni Kolağası Mehmet Tevfik Bey sayesinde tarihe, arkadaşı Ömer Naci sayesinde ise edebiyata ve hitabete ilgi duymaya başladı. Fransızcasını ilerletti ve Jean-Jacques Rousseau, Voltaire, Montesquieu gibi aydınlanma çağı düşünürlerinin eserleriyle tanışarak fikir dünyasını zenginleştirdi.',
        category: 'education',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Monastir_Military_High_School.jpg',
                label: 'Manastır Askeri İdadisi'
            }
        ]
    },
    {
        id: '4',
        year: 1899,
        date: '18 Mart 1899',
        title: 'İstanbul Harp Okulu',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Manastır Askeri İdadisi\'nden mezun olduktan sonra, imparatorluğun başkenti İstanbul\'a gelerek Mekteb-i Harbiye-i Şahane\'ye (Kara Harp Okulu) piyade sınıfına 1283 yaka numarasıyla kaydoldu. Başkentteki siyasi çalkantıları yakından gözlemleme fırsatı buldu ve memleket meseleleri üzerine arkadaşlarıyla gizli toplantılar yaparak el yazısı gazeteler çıkarmaya başladı.',
        category: 'education',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk,_Ottoman_War_Academy,_1901.jpg',
                label: 'Harp Okulu Öğrencisi (1901)'
            }
        ]
    },
    {
        id: '5',
        year: 1902,
        date: '1902',
        title: 'Harp Akademisi',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Harp Okulu\'nu teğmen rütbesiyle bitirdikten sonra, kurmay subay yetiştiren Harp Akademisi\'ne (Erkân-ı Harbiye Mektebi) seçildi. Burada aldığı eğitimle askeri strateji ve taktik bilgisini derinleştirirken, siyasi fikirleri de daha belirgin hale geldi.İmparatorluğun kötü gidişatını durdurmak için neler yapılabileceği konusunda yoğun düşünsel faaliyetler yürüttü.',
        category: 'education',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_as_a_alumni_of_Ottoman_Military_Academy,_1905.jpg',
                label: 'Harp Akademisi Mezuniyeti'
            }
        ]
    },
    {
        id: '6',
        year: 1905,
        date: '11 Ocak 1905',
        title: 'Kurmay Yüzbaşı ve İlk Görev',
        location: 'Şam',
        coordinates: [33.5138, 36.2765],
        description: 'Harp Akademisi\'nden Kurmay Yüzbaşı rütbesiyle beşinci olarak mezun oldu. İlk görev yeri olarak Şam\'daki 5. Ordu emrine atandı. Burada 30. Süvari Alayı\'nda staj yaptı ve bölgedeki isyanları bastırma operasyonlarına katılarak ilk kıta tecrübesini kazandı. Bölge halkının durumu ve yönetimin aksaklıklarını yerinde gözlemledi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1906_Damascus.jpg',
                label: 'Şam\'da 5. Ordu (1906)'
            }
        ]
    },
    {
        id: '7',
        year: 1906,
        date: 'Ekim 1906',
        title: 'Vatan ve Hürriyet Cemiyeti',
        location: 'Şam',
        coordinates: [33.5138, 36.2765],
        description: 'Memleketin kurtuluşu için sadece askeri değil siyasi bir örgütlenmenin de şart olduğuna inanarak, Şam\'da güvendiği arkadaşlarıyla birlikte gizli "Vatan ve Hürriyet Cemiyeti"ni kurdu. Bu cemiyetin bir şubesini açmak üzere gizlice Selanik\'e gitti. Bu girişim, onun liderlik vasıflarını ve teşkilatçılık yeteneğini gösteren ilk önemli siyasi adımıydı.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1905.jpg',
                label: 'Genç Kurmay Subay'
            }
        ]
    },
    {
        id: '8',
        year: 1907,
        date: '20 Haziran 1907',
        title: 'Kolağası (Kıdemli Yüzbaşı)',
        location: 'Şam',
        coordinates: [33.5138, 36.2765],
        description: 'Şam\'daki başarılı hizmetleri ve askeri yetenekleri neticesinde rütbesi Kolağası (Kıdemli Yüzbaşı) rütbesine yükseltildi. Askeri hiyerarşideki bu yükseliş, ona daha fazla sorumluluk ve komuta yetkisi kazandırdı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1906_Damascus.jpg',
                label: 'Kolağası Mustafa Kemal'
            }
        ]
    },
    {
        id: '9',
        year: 1907,
        date: 'Eylül 1907',
        title: '3. Ordu\'ya Atama',
        location: 'Selanik',
        coordinates: [40.6401, 22.9444],
        description: 'Manastır\'daki 3. Ordu Karargâhı\'na atandı ve ardından Selanik\'e geçti. Burada İttihat ve Terakki Cemiyeti ile temas kurdu ve cemiyete üye oldu. Ancak ordunun siyasete karışmaması gerektiği yönündeki görüşleri nedeniyle cemiyetin önde gelenleriyle zaman zaman fikir ayrılıkları yaşadı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_and_comrades_in_Salonika.jpg',
                label: 'Selanik\'te Silah Arkadaşlarıyla'
            }
        ]
    },
    {
        id: '10',
        year: 1909,
        date: '13 Nisan 1909',
        title: '31 Mart Ayaklanması ve Hareket Ordusu',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Meşrutiyet rejimine karşı İstanbul\'da başlayan 31 Mart Ayaklanması\'nı bastırmak üzere Selanik\'ten yola çıkan Hareket Ordusu\'nun Kurmay Başkanlığı görevini üstlendi. Ordunun sevk ve idaresinde kritik rol oynadı. Ayaklanmanın bastırılmasından sonra, ordunun siyasete müdahalesinin tehlikelerini bir kez daha vurguladı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hareket_Ordusu_Kurmay_Baskanı_Mustafa_Kemal.jpg',
                label: 'Hareket Ordusu Kurmay Başkanı'
            }
        ]
    },
    {
        id: '11',
        year: 1910,
        date: '1910',
        title: 'Arnavutluk Harekâtı',
        location: 'Arnavutluk',
        coordinates: [41.1533, 20.1683],
        description: 'Harbiye Nazırı Mahmud Şevket Paşa komutasındaki birliklerin Kurmay Başkanı olarak Arnavutluk\'ta çıkan isyanın bastırılmasında fiilen görev aldı. Bu harekât sırasında, zorlu coğrafi koşullarda birliklerin sevk ve idaresi konusundaki tecrübelerini pekiştirdi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_Picardie_Maneuvers_2.jpg',
                label: '1910 Picardie Manevraları (Dönem Fotoğrafı)'
            }
        ]
    },
    {
        id: '12',
        year: 1911,
        date: '13 Eylül 1911',
        title: 'Genelkurmay Görevi',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Selanik\'teki görevinden alınarak İstanbul\'da Genelkurmay Başkanlığı emrine atandı. Burada Osmanlı ordusunun modernizasyonu ve eğitimi konularında çalışmalar yaptı, askeri talimnameler çevirdi ve ordunun savaşa hazırlık durumunu analiz etti.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1911.jpg',
                label: 'İstanbul Genelkurmay Karargahı'
            }
        ]
    },
    {
        id: '13',
        year: 1911,
        date: '27 Kasım 1911',
        title: 'Binbaşılığa Terfi',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Askeri başarıları ve kıdemi doğrultusunda Binbaşılık rütbesine terfi etti. Bu rütbe ile birlikte, daha büyük askeri birlikleri komuta etme ve stratejik kararlar alma yetkisi genişledi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Bey_(1911).jpg',
                label: 'Binbaşı Mustafa Kemal'
            }
        ]
    },
    {
        id: '14',
        year: 1911,
        date: '18 Aralık 1911',
        title: 'Trablusgarp Cephesi',
        location: 'Trablusgarp',
        coordinates: [32.8872, 13.1913],
        description: 'İtalya\'nın Trablusgarp\'ı işgali üzerine, devletin bölgeye ordu gönderememesi nedeniyle gazeteci kılığında (Şerif Bey takma adıyla) ve gönüllü olarak Mısır üzerinden Trablusgarp\'a geçti. Yerel halkı örgütleyerek İtalyanlara karşı direnişi başlattı ve gayrinizami harp taktiklerini başarıyla uyguladı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1911_Tripolitania.jpg',
                label: 'Trablusgarp Cephesi'
            }
        ]
    },
    {
        id: '15',
        year: 1912,
        date: '9 Ocak 1912',
        title: 'Tobruk Zaferi',
        location: 'Tobruk',
        coordinates: [32.0836, 23.9764],
        description: 'Trablusgarp\'ta yerel kuvvetlerden oluşturduğu birliklerle İtalyan ordusuna karşı Tobruk Savaşı\'nı yönetti ve büyük bir zafer kazandı. Bu başarı, onun askeri dehasının ve liderlik yeteneğinin uluslararası alanda duyulmasını sağlayan ilk büyük askeri başarısıydı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_and_Enver_in_Tripoli_1912.jpg',
                label: 'Tobruk Cephesi Komutanları'
            }
        ]
    },
    {
        id: '16',
        year: 1913,
        date: '27 Ekim 1913',
        title: 'Sofya Askeri Ataşeliği',
        location: 'Sofya',
        coordinates: [42.6977, 23.3219],
        description: 'Balkan Savaşları\'nın ardından Sofya\'ya Askeri Ataşe olarak atandı. Bu görev sırasında Bulgaristan ordusunu inceledi, Avrupa diplomasisini yakından tanıdı ve üst düzey devlet adamlarıyla ilişkiler kurdu. Ayrıca kostümlü baloda giydiği Yeniçeri kıyafetiyle büyük ilgi uyandırdı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_Janissary.jpg',
                label: 'Sofya\'da Yeniçeri Kıyafeti'
            }
        ]
    },
    {
        id: '17',
        year: 1914,
        date: '1 Mart 1914',
        title: 'Yarbaylığa Terfi',
        location: 'Sofya',
        coordinates: [42.6977, 23.3219],
        description: 'Sofya\'daki görevi başındayken Yarbaylık rütbesine yükseltildi. Birinci Dünya Savaşı\'nın başlaması üzerine, ısrarla aktif bir görev isteyerek cepheye gitmek için başvuruda bulundu.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_Sofia_1914.jpg',
                label: 'Sofya Askeri Ataşesi'
            }
        ]
    },
    {
        id: '18',
        year: 1915,
        date: 'Şubat 1915',
        title: '19. Tümen Komutanlığı',
        location: 'Tekirdağ',
        coordinates: [40.9780, 27.5110],
        description: 'Israrlı talepleri sonucu Tekirdağ\'da yeni kurulan 19. Tümen Komutanlığı\'na atandı. Bu tümeni kısa sürede savaşa hazır hale getirerek Çanakkale Cephesi\'ne, Eceabat (Maydos) bölgesine intikal ettirdi ve bölgenin savunma planlarını hazırladı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal,_Gallipoli.jpg',
                label: 'Gelibolu Cephesi'
            }
        ]
    },
    {
        id: '19',
        year: 1915,
        date: '25 Nisan 1915',
        title: 'Arıburnu Savunması ve "Ölmeyi Emrediyorum"',
        location: 'Çanakkale',
        coordinates: [40.2333, 26.2833],
        description: 'Çanakkale Kara Savaşları\'nın başladığı gün, inisiyatif kullanarak 57. Alay ile birlikte Arıburnu\'na çıkan ANZAK birliklerini Conkbayırı\'nda durdurdu. Askerlerine verdiği "Ben size taarruzu emretmiyorum, ölmeyi emrediyorum!" emri, savaşın kaderini değiştiren ve tarihe geçen bir dönüm noktası oldu.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Turkish_trenches_at_Gallipoli.jpg',
                label: 'Çanakkale Siperleri'
            }
        ]
    },
    {
        id: '20',
        year: 1915,
        date: '1 Haziran 1915',
        title: 'Albaylığa Terfi',
        location: 'Çanakkale',
        coordinates: [40.1553, 26.4142],
        description: 'Çanakkale Cephesi\'ndeki üstün başarıları, öngörüleri ve cesareti nedeniyle Albaylık rütbesine terfi etti. Bu terfi, onun ordu içindeki prestijini ve komuta ettiği birliklerin büyüklüğünü artırdı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Chanak_1915.jpg',
                label: 'Anafartalar Grubu Komutanı'
            }
        ]
    },
    {
        id: '21',
        year: 1915,
        date: '10 Ağustos 1915',
        title: 'Anafartalar Zaferi',
        location: 'Çanakkale',
        coordinates: [40.3000, 26.3000],
        description: 'Müttefiklerin yeni bir çıkarma yaptığı Anafartalar Grup Komutanlığı\'na getirildi. 1. Anafartalar Zaferi ve ardından Conkbayırı Süngü Hücumu ile düşmanı bir kez daha durdurarak İstanbul\'un işgalini önledi. Bu zaferler onu "Anafartalar Kahramanı" olarak Türk milletinin kalbine kazıdı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_in_Gallipoli.jpg',
                label: 'Anafartalar Kahramanı'
            }
        ]
    },
    {
        id: '22',
        year: 1916,
        date: '14 Ocak 1916',
        title: '16. Kolordu Komutanlığı',
        location: 'Edirne',
        coordinates: [41.6771, 26.5557],
        description: 'Çanakkale\'deki zaferlerin ardından Edirne\'de konuşlu 16. Kolordu Komutanlığı\'na atandı. Burada bir süre dinlendikten ve birliklerini takviye ettikten sonra, Rus cephesindeki kritik durum nedeniyle kolordusuyla birlikte Doğu Cephesi\'ne sevk edildi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_Edirne_1916.jpg',
                label: 'Edirne Ziyareti (1916)'
            }
        ]
    },
    {
        id: '23',
        year: 1916,
        date: '1 Nisan 1916',
        title: 'Tuğgeneral (Mirliva) Rütbesi',
        location: 'Diyarbakır',
        coordinates: [37.9144, 40.2306],
        description: 'Doğu Cephesi\'ndeki Silvan\'da karargâhını kurduktan kısa bir süre sonra Mirliva (Tuğgeneral) rütbesine yükseltildi ve Paşa unvanını aldı. Osmanlı ordusunun en genç generallerinden biri olarak büyük bir sorumluluk üstlendi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Pasha_1916.jpg',
                label: 'Mirliva Mustafa Kemal Paşa'
            }
        ]
    },
    {
        id: '24',
        year: 1916,
        date: '8 Ağustos 1916',
        title: 'Bitlis ve Muş\'un Kurtarılışı',
        location: 'Bitlis',
        coordinates: [38.4006, 42.1095],
        description: 'Rus ordusunun ilerleyişini durdurarak karşı taarruza geçti. Zorlu kış şartlarına ve malzeme eksikliğine rağmen, stratejik bir manevrayla 5. Fırka ile Bitlis\'i, 8. Fırka ile Muş\'u Rus işgalinden kurtardı. Bu başarı, Doğu Cephesi\'nde kazanılan nadir zaferlerden biriydi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk-1916-Bitlis.jpg',
                label: 'Bitlis Cephesi (1916)'
            }
        ]
    },
    {
        id: '25',
        year: 1917,
        date: '5 Temmuz 1917',
        title: '7. Ordu Komutanlığı',
        location: 'Halep',
        coordinates: [36.2021, 37.1343],
        description: 'Filistin-Suriye Cephesi\'nde kurulan Yıldırım Orduları Grubu bünyesindeki 7. Ordu Komutanlığı\'na atandı. Ancak, Alman komutan Falkenhayn ile askeri görüş ayrılıkları ve ordunun durumu hakkındaki raporlarının dikkate alınmaması üzerine görevinden istifa etti.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/General_Mustafa_Kemal_in_Aleppo,_1917.jpg',
                label: 'Halep\'te General Mustafa Kemal'
            }
        ]
    },
    {
        id: '26',
        year: 1917,
        date: 'Ekim 1917',
        title: 'İstanbul\'a Dönüş ve Veliaht ile Seyahat',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'İstifasının ardından İstanbul\'a döndü. Bu dönemde Veliaht Vahdettin ile birlikte Almanya ziyaretine katıldı. Alman karargâhlarında yaptığı gözlemlerle savaşın kaybedileceğini açıkça dile getirdi.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_and_Vahdettin_in_Germany.jpg',
                label: 'Almanya Seyahati'
            }
        ]
    },
    {
        id: '27',
        year: 1918,
        date: '31 Ekim 1918',
        title: 'Yıldırım Orduları Grubu Komutanlığı',
        location: 'Adana',
        coordinates: [37.0000, 35.3213],
        description: 'Suriye cephesinin çökmesi üzerine tekrar bölgeye gönderildi. Liman von Sanders\'in ayrılmasıyla Yıldırım Orduları Grubu Komutanlığı\'nı devraldı. Halep\'in kuzeyinde bir savunma hattı oluşturarak İngiliz kuvvetlerini durdurdu ve Anadolu\'nun işgalini geciktirdi. Mondros Ateşkes Antlaşması\'nın ardından ordunun silah bırakmasını engellemeye çalıştı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1918.jpg',
                label: 'Yıldırım Orduları Komutanı'
            }
        ]
    },
    {
        id: '28',
        year: 1919,
        date: '19 Mayıs 1919',
        title: 'Samsun\'a Çıkış',
        location: 'Samsun',
        coordinates: [41.2928, 36.3313],
        description: '9. Ordu Müfettişi yetkisiyle, Bandırma Vapuru ile yaptığı zorlu yolculuğun ardından Samsun\'a ayak bastı. Bu tarih, fiili olarak Türk Kurtuluş Savaşı\'nın başlangıcı kabul edilir. Anadolu\'da dağınık haldeki direniş örgütlerini birleştirme ve milli egemenliğe dayalı yeni bir devlet kurma hedefiyle yola çıktı.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandirma_Steamboat.jpg',
                label: 'Bandırma Vapuru'
            },
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Samsun_1919.jpg',
                label: 'Samsun\'a Çıkış'
            }
        ]
    },
    {
        id: '29',
        year: 1919,
        date: '28 Mayıs 1919',
        title: 'Havza Genelgesi',
        location: 'Havza',
        coordinates: [40.9789, 35.6592],
        description: 'Milli bilinci uyandırmak amacıyla Havza Genelgesi\'ni yayımladı. İşgallere karşı tüm yurtta protesto mitingleri düzenlenmesini ve askeri birliklerin terhis edilmemesini istedi. Bu genelge, milli direnişin ilk resmi bildirisi niteliğindeydi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_in_Havza_1919.jpg',
                label: 'Havza Günleri'
            }
        ]
    },
    {
        id: '30',
        year: 1919,
        date: '21/22 Haziran 1919',
        title: 'Amasya Genelgesi',
        location: 'Amasya',
        coordinates: [40.6533, 35.8331],
        description: 'Silah arkadaşlarıyla birlikte imzaladığı Amasya Genelgesi ile "Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir" ve "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır" ilkelerini dünyaya ilan etti. Bu belge, Kurtuluş Savaşı\'nın gerekçesi, amacı ve yöntemini belirleyen bir ihtilal beyannamesiydi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amasya_Genelgesi.pdf',
                label: 'Amasya Genelgesi Belgesi'
            }
        ]
    },
    {
        id: '31',
        year: 1919,
        date: '8 Temmuz 1919',
        title: 'Askerlikten İstifa',
        location: 'Erzurum',
        coordinates: [39.9043, 41.2679],
        description: 'İstanbul Hükümeti\'nin görevden alma girişimleri ve geri dön çağrıları karşısında, çok sevdiği askerlik mesleğinden ve resmi görevinden istifa etti. Artık mücadeleye "sine-i millette bir fert" olarak devam edeceğini açıkladı.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Erzurum_1919_civilian.jpg',
                label: 'Sivil Mustafa Kemal'
            }
        ]
    },
    {
        id: '32',
        year: 1919,
        date: '23 Temmuz 1919',
        title: 'Erzurum Kongresi',
        location: 'Erzurum',
        coordinates: [39.9043, 41.2679],
        description: 'Doğu illerinin temsilcilerinin katılımıyla toplanan Erzurum Kongresi\'ne başkanlık etti. Kongrede "Milli sınırlar içinde vatan bir bütündür, bölünemez" kararı alınarak, manda ve himaye kesin bir dille reddedildi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Erzurum_Kongresi_Binası,_Yakutiye-Erzurum.jpg',
                label: 'Erzurum Kongresi Binası'
            }
        ]
    },
    {
        id: '33',
        year: 1919,
        date: '4 Eylül 1919',
        title: 'Sivas Kongresi',
        location: 'Sivas',
        coordinates: [39.7505, 37.0150],
        description: 'Tüm yurttan gelen delegelerle toplanan Sivas Kongresi\'nde, bölgesel cemiyetler "Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti" adı altında birleştirildi. Kongre başkanlığını yürüterek ulusal birliğin sağlanmasında kilit rol oynadı ve Temsil Heyeti\'nin yetkilerini tüm yurdu kapsayacak şekilde genişletti.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Ataturk_1919_Sivas_Congress.jpg',
                label: 'Sivas Kongresi Delegeleri'
            }
        ]
    },
    {
        id: '34',
        year: 1919,
        date: '7 Kasım 1919',
        title: 'Mebusan Meclisi Üyeliği',
        location: 'Erzurum',
        coordinates: [39.9043, 41.2679],
        description: 'İstanbul\'da toplanacak olan son Osmanlı Mebusan Meclisi için yapılan seçimlerde Erzurum\'dan milletvekili seçildi. Ancak güvenlik gerekçesiyle İstanbul\'a gitmedi ve çalışmalarını Anadolu\'dan yürüttü.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_Erzurum_1919.jpg',
                label: 'Erzurum Günleri'
            }
        ]
    },
    {
        id: '35',
        year: 1919,
        date: '27 Aralık 1919',
        title: 'Ankara\'ya Geliş',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Temsil Heyeti ile birlikte, Milli Mücadele\'nin merkezi olarak seçilen Ankara\'ya geldi. Şehir halkı ve seymenler tarafından büyük bir coşkuyla karşılandı. Ankara, bu tarihten itibaren kurtuluş hareketinin karargâhı haline geldi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_arrives_in_Ankara_1919.jpg',
                label: 'Ankara\'da Karşılama'
            }
        ]
    },
    {
        id: '36',
        year: 1920,
        date: '23 Nisan 1920',
        title: 'TBMM\'nin Açılışı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'İstanbul\'un işgali ve Mebusan Meclisi\'nin dağıtılması üzerine, Ankara\'da olağanüstü yetkilere sahip Türkiye Büyük Millet Meclisi\'ni açtı. Meclis Başkanı seçilerek yeni Türk devletinin yasama ve yürütme erklerinin başı oldu. "Egemenlik kayıtsız şartsız milletindir" ilkesi kabul edildi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Opening_of_the_First_Grand_National_Assembly.jpg',
                label: 'Birinci Meclis'
            }
        ]
    },
    {
        id: '37',
        year: 1920,
        date: '11 Mayıs 1920',
        title: 'İdam Kararı',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'İstanbul\'daki Divan-ı Harp tarafından, gıyabında yargılanarak idama mahkûm edildi ve rütbelerinin sökülmesine karar verildi. Bu karar, onun mücadele azmini kırmak yerine daha da bileyecek ve milletle bağını güçlendirecekti.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_portrait_1920s.jpg',
                label: 'Milli Mücadele Dönemi'
            }
        ]
    },
    {
        id: '38',
        year: 1921,
        date: '5 Ağustos 1921',
        title: 'Başkomutanlık Yetkisi',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Yunan ordusunun Ankara\'ya yaklaşması üzerine, Meclis tarafından kendisine 3 ay süreyle Başkomutanlık yetkisi verildi. Bu yetkiyle ordunun tüm ihtiyaçlarını karşılamak için Tekalif-i Milliye Emirleri\'ni yayımladı ve orduyu savaşa hazırladı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_as_Commander_in_Chief.jpg',
                label: 'Başkomutan Mustafa Kemal'
            }
        ]
    },
    {
        id: '39',
        year: 1921,
        date: '23 Ağustos - 13 Eylül 1921',
        title: 'Sakarya Meydan Muharebesi',
        location: 'Sakarya',
        coordinates: [39.5833, 32.1333],
        description: '22 gün 22 gece süren ve "Subaylar Savaşı" olarak bilinen Sakarya Meydan Muharebesi\'ni bizzat cephede yönetti. "Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır" stratejisiyle Yunan ordusunun ilerleyişini durdurdu ve geri çekilmeye zorladı. Türk ordusunun 1683 Viyana bozgunundan beri süren geri çekilişi burada son buldu.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Sakarya_1921.jpg',
                label: 'Sakarya Savaşı'
            }
        ]
    },
    {
        id: '40',
        year: 1921,
        date: '19 Eylül 1921',
        title: 'Mareşallik ve Gazilik',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Sakarya Zaferi\'nin ardından TBMM tarafından kendisine Mareşal rütbesi ve Gazi unvanı verildi. Bu, Türk tarihinde bu rütbeye erişen nadir komutanlardan biri olmasını sağladı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Pasha_Marshal_Uniform.jpg',
                label: 'Mareşal Üniformalı'
            }
        ]
    },
    {
        id: '41',
        year: 1922,
        date: '26 Ağustos 1922',
        title: 'Büyük Taarruz',
        location: 'Afyonkarahisar',
        coordinates: [38.7408, 30.5511],
        description: 'Hazırlıkları büyük bir gizlilikle yürütülen Büyük Taarruz\'u Kocatepe\'den başlattı. Türk ordusu, düşman tahkimatını birkaç saat içinde yararak hızla ilerledi. Bu taarruz, işgalci güçleri Anadolu\'dan tamamen atmak için başlatılan kesin sonuçlu bir harekattı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_observing_the_Great_Offensive.jpg',
                label: 'Kocatepe Gözlem'
            }
        ]
    },
    {
        id: '42',
        year: 1922,
        date: '30 Ağustos 1922',
        title: 'Başkomutanlık Meydan Muharebesi',
        location: 'Dumlupınar',
        coordinates: [38.8611, 29.9753],
        description: 'Dumlupınar\'da bizzat yönettiği meydan savaşında Yunan ana kuvvetlerini imha etti. Zaferin ardından "Ordular! İlk hedefiniz Akdeniz\'dir, ileri!" emrini vererek takip harekatını başlattı.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_in_Dumlupınar.jpg',
                label: 'Cephede Komuta'
            }
        ]
    },
    {
        id: '43',
        year: 1922,
        date: '9 Eylül 1922',
        title: 'İzmir\'in Kurtuluşu',
        location: 'İzmir',
        coordinates: [38.4237, 27.1428],
        description: 'Türk ordusunun İzmir\'e girmesiyle Batı Anadolu\'daki Yunan işgali sona erdi. Büyük bir coşkuyla karşılandığı İzmir\'de Hükümet Konağı\'na Türk bayrağı çekildi. Bu zafer, Milli Mücadele\'nin askeri safhasının başarıyla tamamlandığını müjdeliyordu.',
        category: 'military',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_in_Izmir,_1922.jpg',
                label: 'İzmir\'de Başkomutan (1922)'
            }
        ]
    },
    {
        id: '44',
        year: 1922,
        date: '1 Kasım 1922',
        title: 'Saltanatın Kaldırılması',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Lozan Barış Konferansı\'na İstanbul Hükümeti\'nin de çağrılması üzerine ortaya çıkan ikiliği önlemek ve milli egemenliği tam anlamıyla tesis etmek amacıyla saltanat kaldırıldı. Böylece 600 yıllık Osmanlı hanedanlık yönetimi resmen sona erdi.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/TBMM_1922.jpg',
                label: 'Meclis Çalışmaları'
            }
        ]
    },
    {
        id: '45',
        year: 1923,
        date: '29 Ocak 1923',
        title: 'Latife Hanım ile Evlilik',
        location: 'İzmir',
        coordinates: [38.4237, 27.1428],
        description: 'İzmir\'de Uşakizade ailesinden Latife Hanım ile evlendi. Modern bir Türk kadını profili çizen Latife Hanım ile yurt gezilerine çıktı ve kadın hakları konusunda topluma örnek oldu. Evlilikleri 5 Ağustos 1925 tarihine kadar sürdü.',
        category: 'personal',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_and_Latife_Uşşaki_(1923).jpg',
                label: 'Mustafa Kemal ve Latife Hanım'
            }
        ]
    },
    {
        id: '46',
        year: 1923,
        date: '17 Şubat 1923',
        title: 'İzmir İktisat Kongresi',
        location: 'İzmir',
        coordinates: [38.4237, 27.1428],
        description: 'Siyasi bağımsızlığın ekonomik bağımsızlıkla taçlandırılması gereğine inanarak İzmir İktisat Kongresi\'ni topladı. Çiftçi, tüccar, sanayici ve işçi temsilcilerinin katıldığı kongrede, Misak-ı İktisadi kararları kabul edilerek yeni devletin ekonomi politikaları belirlendi.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/1923_İktisat_kongresi_İGZ.jpg',
                label: 'İktisat Kongresi'
            }
        ]
    },
    {
        id: '47',
        year: 1923,
        date: '11 Ağustos 1923',
        title: '2. TBMM Başkanlığı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Seçimlerin yenilenmesinin ardından toplanan İkinci Türkiye Büyük Millet Meclisi\'nin başkanlığına seçildi. Bu meclis, Cumhuriyet\'i ilan edecek ve devrimleri gerçekleştirecek olan meclisti.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_in_1923.jpg',
                label: 'Meclis Başkanı'
            }
        ]
    },
    {
        id: '48',
        year: 1923,
        date: '9 Eylül 1923',
        title: 'Halk Fırkası\'nın Kuruluşu',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti\'ni siyasi bir partiye dönüştürerek Halk Fırkası\'nı kurdu. Sonradan Cumhuriyet Halk Partisi adını alacak olan bu parti, Türkiye\'nin modernleşme sürecindeki devrimlerin öncüsü oldu.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_CHP_Kurultayi.jpg',
                label: 'Halk Fırkası'
            }
        ]
    },
    {
        id: '49',
        year: 1923,
        date: '29 Ekim 1923',
        title: 'Cumhuriyet\'in İlanı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Teşkilat-ı Esasiye Kanunu\'nda yapılan değişiklikle Türkiye Devleti\'nin yönetim şekli Cumhuriyet olarak ilan edildi. Yapılan oylamada oy birliğiyle Türkiye Cumhuriyeti\'nin ilk Cumhurbaşkanı seçildi. "Türkiye Cumhuriyeti mesut, muvaffak ve muzaffer olacaktır" sözüyle yeni dönemi başlattı.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_leaving_the_parliament.jpg',
                label: 'Cumhuriyet Bayramı'
            }
        ]
    },
    {
        id: '50',
        year: 1924,
        date: '3 Mart 1924',
        title: 'Halifeliğin Kaldırılması',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Laik devlet yapısının önündeki en büyük engellerden biri olan Halifelik kurumu kaldırıldı. Aynı gün Tevhid-i Tedrisat Kanunu ile eğitim birleştirildi, Şeriye ve Evkaf Vekâleti kaldırılarak din ve devlet işleri birbirinden ayrıldı.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1924.jpg',
                label: 'Devrimlerin Başlangıcı'
            }
        ]
    },
    {
        id: '51',
        year: 1924,
        date: '20 Nisan 1924',
        title: '1924 Anayasası',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Yeni devletin yapısını ve işleyişini belirleyen 1924 Anayasası (Teşkilat-ı Esasiye Kanunu) kabul edildi. Bu anayasa ile egemenliğin kayıtsız şartsız millete ait olduğu ilkesi pekiştirildi.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_and_delegates.jpg',
                label: 'Anayasa Görüşmeleri'
            }
        ]
    },
    {
        id: '52',
        year: 1924,
        date: '17 Kasım 1924',
        title: 'Terakkiperver Cumhuriyet Fırkası',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Kazım Karabekir, Rauf Orbay gibi Milli Mücadele komutanları tarafından kurulan ilk muhalefet partisi Terakkiperver Cumhuriyet Fırkası faaliyete geçti. Ancak Şeyh Sait İsyanı ile bağlantılı olduğu gerekçesiyle 1925\'te kapatıldı.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_ve_Silah_Arkadaslari.jpg',
                label: 'Silah Arkadaşlarıyla'
            }
        ]
    },
    {
        id: '53',
        year: 1925,
        date: '25 Kasım 1925',
        title: 'Şapka Kanunu',
        location: 'Kastamonu',
        coordinates: [41.3766, 33.7765],
        description: 'Kastamonu\'da yaptığı gezide şapkayı halka tanıtarak "Buna şapka derler" dedi. Modern kıyafet devriminin bir parçası olarak Şapka Kanunu kabul edildi ve fesin yerini şapka aldı. Bu devrim, dış görünüşle de çağdaş medeniyetler seviyesine ulaşmayı hedefliyordu.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atatürk_Kastamonu_1925.jpg',
                label: 'Kastamonu Şapka Devrimi'
            }
        ]
    },
    {
        id: '54',
        year: 1925,
        date: '26 Aralık 1925',
        title: 'Takvim ve Saat Devrimi',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Batı dünyasıyla uyumu sağlamak amacıyla Miladi Takvim ve uluslararası saat sistemi kabul edildi. Hicri ve Rumi takvim uygulamasına son verilerek, toplumsal ve ticari hayatta ikilikler ortadan kaldırıldı.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_Ankara_1925.jpg',
                label: 'Ankara\'da Modern Yaşam'
            }
        ]
    },
    {
        id: '55',
        year: 1927,
        date: '1 Kasım 1927',
        title: '2. Kez Cumhurbaşkanlığı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'TBMM tarafından ikinci kez Cumhurbaşkanlığına seçildi. Aynı yıl okuduğu Büyük Nutuk ile Milli Mücadele ve Cumhuriyet\'in kuruluş aşamalarını belgeleriyle anlatarak tarihe not düştü.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_delivering_Nutuk.jpg',
                label: 'Nutuk Okurken'
            }
        ]
    },
    {
        id: '56',
        year: 1928,
        date: '1 Kasım 1928',
        title: 'Harf Devrimi',
        location: 'İstanbul',
        coordinates: [41.0082, 28.9784],
        description: 'Arap harflerinin yerine Latin esaslı Yeni Türk Harfleri\'nin kabulüne ilişkin kanun çıkarıldı. Sarayburnu\'nda halka yeni harfleri tanıtarak Millet Mektepleri seferberliğini başlattı. Okuma yazma oranını artırmak ve eğitimi yaygınlaştırmak için büyük bir adım atıldı.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_harf_devriminde.jpg',
                label: 'Başöğretmen Atatürk'
            }
        ]
    },
    {
        id: '57',
        year: 1930,
        date: '12 Ağustos 1930',
        title: 'Serbest Cumhuriyet Fırkası',
        location: 'Yalova',
        coordinates: [40.6550, 29.2769],
        description: 'Çok partili hayata geçiş denemesi olarak, yakın arkadaşı Fethi Okyar\'a Serbest Cumhuriyet Fırkası\'nı kurdurdu. Ancak partinin rejim karşıtlarının odağı haline gelmesi üzerine, Fethi Bey tarafından parti feshedildi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_and_Fethi_Okyar.jpg',
                label: 'Fethi Okyar ile'
            }
        ]
    },
    {
        id: '58',
        year: 1931,
        date: '15 Nisan 1931',
        title: 'Türk Tarih Kurumu',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Türk tarihinin köklerini araştırmak (Atatürk\'ün deyimiyle "Tarih yazmak, tarih yapmak kadar mühimdir") ve Türklerin dünya medeniyetine katkılarını ortaya koymak amacıyla Türk Tarihi Tetkik Cemiyeti\'ni (Türk Tarih Kurumu) kurdu.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_visiting_schools.jpg',
                label: 'Tarih Çalışmaları'
            }
        ]
    },
    {
        id: '59',
        year: 1931,
        date: '4 Mayıs 1931',
        title: '3. Kez Cumhurbaşkanlığı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'TBMM tarafından üçüncü kez Cumhurbaşkanı seçildi. Ülkenin kalkınması ve modernleşmesi yolundaki çalışmalarına hız kesmeden devam etti.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_1931.jpg',
                label: 'Cumhurbaşkanı Atatürk'
            }
        ]
    },
    {
        id: '60',
        year: 1932,
        date: '12 Temmuz 1932',
        title: 'Türk Dil Kurumu',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Türkçeyi yabancı dillerin boyunduruğundan kurtarmak, zenginleştirmek ve bilim dili haline getirmek amacıyla Türk Dili Tetkik Cemiyeti\'ni (Türk Dil Kurumu) kurdu. Dil çalışmalarıyla bizzat ilgilendi, geometri terimlerini Türkçeleştirdi.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_Geometri.jpg',
                label: 'Dil ve Geometri Çalışmaları'
            }
        ]
    },
    {
        id: '61',
        year: 1934,
        date: '8 Kasım 1934',
        title: 'Seyahat',
        location: 'Yalova',
        coordinates: [40.6550, 29.2769],
        description: 'Yalova\'ya gerçekleştirdiği geziden Ankara\'ya döndü. Yalova, onun için hem bir dinlenme yeri hem de önemli kararların alındığı, yerli ve yabancı konukların ağırlandığı bir çalışma ofisi gibiydi.',
        category: 'personal',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_Yalova.jpg',
                label: 'Yalova Günleri'
            }
        ]
    },
    {
        id: '62',
        year: 1934,
        date: '24 Kasım 1934',
        title: 'Atatürk Soyadı',
        location: 'Ankara',
        coordinates: [39.9334, 32.8597],
        description: 'Soyadı Kanunu\'nun kabulünün ardından, TBMM tarafından kendisine "Atatürk" soyadı verildi. Bu soyadı, Türk milletiyle olan özdeşleşmesinin ve ona olan minnetin bir ifadesiydi. Kanunla, bu soyadının başkaları tarafından kullanılması yasaklandı.',
        category: 'reform',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa_Kemal_Atatürk_portrait.jpg',
                label: 'Gazi Mustafa Kemal Atatürk'
            }
        ]
    },
    {
        id: '63',
        year: 1937,
        date: '27 Ocak 1937',
        title: 'Hatay Davası',
        location: 'Hatay',
        coordinates: [36.2023, 36.1613],
        description: 'Hatay\'ın anavatana katılması için yoğun bir diplomatik mücadele yürüttü. "Hatay benim şahsi meselemdir" diyerek, hasta yatağında bile bu konuyla ilgilendi. Milletler Cemiyeti\'nin Hatay\'ın bağımsızlığını kabul etmesi, bu çabaların ilk büyük meyvesiydi.',
        category: 'political',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_visited_Adana.jpg',
                label: 'Güney Seyahati'
            }
        ]
    },
    {
        id: '64',
        year: 1938,
        date: '10 Kasım 1938',
        title: 'Dolmabahçe\'de Veda',
        location: 'İstanbul',
        coordinates: [41.0370, 28.9950],
        description: 'Türkiye Cumhuriyeti\'nin kurucusu Ulu Önder Mustafa Kemal Atatürk, Dolmabahçe Sarayı\'nda saat 09.05\'te hayata gözlerini yumdu. "Beni görmek demek mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir" diyerek ardında büyük bir miras ve yaslı bir ulus bıraktı.',
        category: 'personal',
        gallery: [
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anitkabir_Overview.jpg',
                label: 'Anıtkabir'
            },
            {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ataturk_deathbed_Dolmabahce_March_2008.JPG',
                label: 'Dolmabahçe Sarayı (Vefat Odası)'
            }
        ]
    }
];
