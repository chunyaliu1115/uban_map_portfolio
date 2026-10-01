export type Lang = "zh" | "en" | "fr";

export type ProjectKey = "fibre" | "transit" | "seniors" | "childcare" | "tainanBus" | "tainan";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "zh", label: "中" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

type Dict = {
  htmlLang: string;
  meta: { title: string; description: string; ogDescription: string };
  nav: { work: string; profile: string; notes: string; contact: string; tagline: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    body: string;
    ctaWork: string;
    ctaContact: string;
    stats: { value: string; label: string }[];
    figCaption: string;
    scale: string;
    dataPoint: string;
    grid: string;
    mapAlt: string;
  };
  notes: {
    eyebrow: string;
    title: string;
    read: string;
    close: string;
    mapHeading: string;
    mapHint: string;
    viewOnMap: string;
    items: {
      date: string;
      category: string;
      title: string;
      excerpt: string;
      body: string[];
      sections?: {
        heading: string;
        place: string;
        body: string;
        imageAlt: string;
      }[];
      media?: { kind: "image" | "video"; alt: string; caption?: string }[];
      mapPoints?: string[];
      mapAlt?: string;
      closing?: string;
      source?: string;
      videoCaption?: string;
    }[];
  };
  work: {
    eyebrow: string;
    heading: string;
    count: string;
    view: string;
    close: string;
    filter: {
      all: string;
      france: string;
      taiwan: string;
      empty: string;
    };
    featuredProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    transitProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    seniorsProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    childcareProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    tainanBusProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    tainanProject: {
      year: string;
      tag: string;
      title: string;
      sections: { heading: string; body: string }[];
      downloadPdf: string;
    };
    projects: Record<ProjectKey, { year: string; tag: string; title: string; blurb: string; region: "france" | "taiwan" }>;
  };
  about: {
    eyebrow: string;
    name: string;
    role: string;
    body: string;
    based: string;
    languages: string;
    langRows: { name: string; level: string }[];
    experience: string;
    education: string;
    skills: string;
    skillGroups: { label: string; items: string[] }[];
    jobs: {
      title: string;
      period: string;
      blurb: string;
      link?: { url: string; label: string };
      links?: { url: string; label: string }[];
    }[];
    degrees: { degree: string; school: string; period: string }[];
    publicationsHeading: string;
    publications: { citation: string; url: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    email: string;
    location: string;
    response: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    project: string;
    projectPlaceholder: string;
    send: string;
    received: string;
    receivedBody: string;
    sendAnother: string;
    copyright: string;
    disciplines: string;
  };
};

const projectKeys = ["transit", "seniors", "childcare", "fibre", "tainanBus", "tainan"] as const;

export const dictionaries: Record<Lang, Dict> = {
  zh: {
    htmlLang: "zh-Hant",
    meta: {
      title: "劉君雅 C-Y. Esther LIU — 空間數據分析師與都市規劃師",
      description:
        "空間數據分析師與都市規劃師，將人口、土地使用與流動轉譯為清晰易讀的地圖。GIS、人口學、空間分析。中文 · 法語 · 英語。",
      ogDescription:
        "為規劃者而作的 GIS、人口學與空間分析——嚴謹、清晰、一眼可讀的地圖。",
    },
    nav: {
      work: "作品",
      profile: "簡歷",
      notes: "隨筆集",
      contact: "聯絡",
      tagline: "空間 · 規劃",
    },
    hero: {
      eyebrow: "( 01 ) — 空間敘事",
      titleA: "解讀城市每一層",
      titleEm: "空間輪廓",
      titleB: "的脈絡。",
      body:
        "將人口、土地與空間流動的複雜脈絡，化繁為簡，寫出故事、製成地圖，並帶出決策。",
      ctaWork: "瀏覽精選作品 →",
      ctaContact: "開始一個專案",
      stats: [
        { value: "12", label: "製圖年資" },
        { value: "40+", label: "完成地圖" },
        { value: "3", label: "工作語言" },
      ],
      figCaption: "圖 01 — 人口密度",
      scale: "1 : 25 000",
      dataPoint: "資料點",
      grid: "座標 45.2N · 5.4E",
      mapAlt: "以溫暖紙色為底、青綠色調呈現人口密度的城市分區面量圖",
    },
    notes: {
      eyebrow: "隨筆集",
      title: "城市 · 規劃 · 生活",
      read: "閱讀全文 →",
      close: "關閉 ✕",
      mapHeading: "照片位置",
      mapHint: "點選標記，查看對應地點與照片",
      viewOnMap: "在 Google 地圖查看 ↗",
      items: [
        {
          date: "2026.09",
          category: "城市 · 規劃",
          title: "南特空間隨筆：那些取代十字路口的城市綠洲",
          excerpt: "從六個尺度迥異的圓環，看南特如何將交通工程轉化為人本微型地景。",
          body: [
            "漫步在南特，最直觀的空間體驗往往不是紅綠燈前的停頓，而是車流在一個個圓環間平順流轉的節奏。帶著都市規劃與地理學的濾鏡生活在這座城市，我發現這裡的交通號誌極少。",
            "這種獨特的城市景觀，其實源於法國 1970 至 80 年代的交通工程典範轉移。自 1983 年法國正式確立「環內車輛先行」法規後，圓環迅速取代了傳統十字路口。這項改變不僅將致命的垂直碰撞事故降至最低，更藉由駕駛間的自發性讓行，大幅消解了怠速停等的時間。",
            "如今，這些圓環早已超越單一的工程標準，演變成尺度各異、機能多元的城市微型地景。以下透過六個截然不同的空間切片，帶大家一窺它們的魅力。",
          ],
          sections: [
            {
              heading: "化身社區綠肺的住宅區圓環",
              place: "Place Canclaux",
              body: "Place Canclaux 是位於傳統住宅區內的中小型圓環，擁有極佳的綠化覆蓋。它示範了圓環如何兼具「交通寧靜區」與「社區微型公園」的雙重機能。",
              imageAlt: "綠樹環抱的 Place Canclaux 空拍景觀",
            },
            {
              heading: "隱身巷弄的微型交通寧靜區",
              place: "Place du 116ème Régiment d’Infanterie",
              body: "Place du 116ème Régiment d’Infanterie 位於複雜的巷弄交匯處，尺度非常小且周邊全為純住宅。這座帶有植栽的小綠島取代了紅綠燈，是南特市區內典型用來強制汽機車減速的鄰里型交通設施。而且，有發現嗎？它還是三角形的！",
              imageAlt: "住宅巷弄間呈三角形的 116 步兵團廣場",
            },
            {
              heading: "迎向永續的荷蘭式人本設計",
              place: "Place du Commandant Cousteau",
              body: "Place du Commandant Cousteau 圓環，是近期極具指標性的「荷蘭式圓環」（rond-point à la hollandaise）交通改造項目。這是南特為了永續轉型所做的最新嘗試。這裡打破了傳統車輛優先的邏輯，單車族與步行者擁有絕對路權。",
              imageAlt: "具環形自行車動線的 Commandant Cousteau 圓環",
            },
            {
              heading: "輕軌貫穿的複合圓環",
              place: "Rond-Point de Vannes",
              body: "Rond-Point de Vannes 是南特市內一個結合輕軌（Tramway）與多條公車路線的重要複合式樞紐。這個經典的高密度都會區交通節點，展現了南特卓越的「大眾運輸優先」理念：軌道與大眾運輸動線巧妙地和一般車輛的環狀動線交織。",
              imageAlt: "輕軌穿越 Rond-Point de Vannes 的空拍景觀",
            },
            {
              heading: "非典型的方形圓環",
              place: "Rond Point Carré",
              body: "做為一個的交通運作邏輯為標準圓環，但硬體島嶼卻被塑造成直角矩形狀，並種植了排列整齊的樹木，這樣的設計更像是個「城市廣場」（place urbaine），徹底打破了傳統圓環的流線型態。這種方形設計所形成的直角邊界迫使車輛面臨嚴苛的動線挑戰，迫使車輛必須強制減速才能轉彎，達到另類交通安全的效果。",
              imageAlt: "種滿整齊樹木的方形圓環 Rond Point Carré 空拍景觀",
            },
            {
              heading: "巨型公路樞紐",
              place: "Rond Point d’Armor",
              body: "這座圓環懸浮在南特西側環城大道上方，以立體化設計消化跨城通勤的龐大車流。然而多線條又無任何交通號誌的巨型圓環，每每讓開車行經的駕駛都心驚膽戰。",
              imageAlt: "橫跨環城大道的巨型圓環 Rond Point d’Armor 空拍景觀",
            },
          ],
          closing: "這些遍布全城的圓形錨點，見證了南特從「車流導向」邁向「人本微型地景」的精彩轉變，也是我持續探索在地空間美學的最佳起點。",
          source: "圖片來源：Google Maps",
          videoCaption: "位於南特市區的某無名圓環。看看在無交通號誌下，汽車、機車、騎士和行人的日常移動。",
        },
        {
          date: "2026.08",
          category: "規劃 · 生活",
          title: "輕軌、水鏡與百年石牆：南特最迷人的城市切面",
          excerpt: "布列塔尼公爵城堡如何從封閉堡壘，變成免費開放、串連輕軌與水鏡廣場的城市客廳。",
          body: [
            "做為南特市中心最耀眼的歷史地標，布列塔尼公爵城堡（Château des ducs de Bretagne）早已超越了一座歷史古蹟的定義，成為都市規劃中「空間解嚴」的絕佳典範。在許多歐洲城市，中世紀城堡往往被高高的圍牆與昂貴的門票孤立於常民生活之外，但南特卻反其道而行，將這座宏偉的堡壘徹底釋放為免費的公共休憩空間。",
            "從都市規劃的視角來看，這座城堡的成功在於無縫接軌的動線設計。居民可以牽著狗散步、上班族能提著咖啡穿越城牆捷徑，歷史建築的邊界被柔化，成為日常通勤與散步的必經之路。開放式的中庭與高低起伏的城牆步道，讓不同年齡層的市民都能自由探索，將歷史場域轉化為充滿活力的立體公園。",
            "綠地與親水設施的巧妙結合，是這片區域最迷人的生活切面。護城河畔的草皮不再是嚴肅的軍事緩衝區，而是市民野餐、曬太陽的綠色心臟。城牆外側更規劃了廣闊的水鏡廣場（Miroir d'Eau），這層薄薄的水面不僅完美倒影了古典城牆，更在炎炎夏日化身為孩子們瘋狂玩水的都市綠洲。這種設計既兼顧了微氣候調節，也為生硬的石造建築注入了活力。",
            "在交通網絡的佈局上，輕軌直接沿著城堡外圍平穩駛過。大面積的無車步行區與軌道共構，沒有刺耳的噪音與壅塞的車流，只有行人、單車與輕軌和諧共存。這種低碳交通的規劃，讓即使是推著嬰兒車的父母或輪椅使用者，都能毫無阻礙地從商業區過渡到這片歷史綠地。",
            "除了戶外空間，城堡內部更藏著南特歷史博物館（Musée d'histoire de Nantes）。它將城市從造船工業到風靡全球的 LU 餅乾輝煌商業史濃縮於此，為這座開放式的休憩空間提供了深厚的文化定錨。",
          ],
          media: [
            { kind: "image", alt: "由護城河仰望布列塔尼公爵城堡的雙塔與石牆" },
            { kind: "video", alt: "沿著城牆步道行走的城堡動線影片" },
            { kind: "video", alt: "水鏡廣場薄水面上的倒影與嬉戲影片" },
            { kind: "video", alt: "輕軌沿城堡外圍行駛的街景影片" },
            { kind: "image", alt: "南特歷史博物館內的 LU 餅乾招牌與城市海報" },
          ],
          mapPoints: [
            "布列塔尼公爵城堡",
            "南特歷史博物館",
            "水鏡廣場 Miroir d'Eau",
            "輕軌 Duchesse Anne – Château 站",
          ],
          mapAlt: "標示城堡、博物館、水鏡廣場與輕軌站的空拍地圖",
          closing: "南特以市民為本的都市設計，讓城堡不再是凝固的歷史，而是一處結合了交通、綠意、文化與常民笑聲的鮮活地景。",
          source: "照片來源：劉君雅；Google Maps",
        },
        {
          date: "2006.07",
          category: "城市 · 生活",
          title: "台灣戰後城市型態：為何我們的城市缺乏美感？",
          excerpt: "從殖民現代化、戰後工業化到當代重劃，回望台灣城市地景形成與轉變的歷史脈絡。",
          body: [
            "在探討台灣的空間地景時，許多人常感嘆：為什麼台灣的城市看起來這麼缺乏美感？放眼望去，充斥著鐵皮屋頂與雜亂無章的街道。若從歷史的宏觀視角剖析，這種失序的都市型態，其實與戰後的政治體制及空間發展策略息息相關。",
            "回顧日治時期，台灣的城市是很美的。日本政府在台灣推動了大規模的現代化都市計畫，意圖將台灣打造成展示其統治能力的「模範殖民地」。當時的殖民政府大量吸收西方（如法國巴黎與德國）的都市規劃技術與建築風格。這也是為什麼，台灣目前所保留的日治時期建築，大多具有當時日本仿西洋歷史式樣的強烈特色。",
            "第二次世界大戰後，國民黨迫遷來台，台灣的都市發展命運產生了劇變。戰後國民黨政府最主要的政治目標「反攻大陸」，台灣僅僅被國家機器視為一個後勤補給基地。在這種隨時準備離開的「過客心態」下，當時的政府並未真正關心台灣這塊土地的長期發展與整體規劃。這種歷史背景，註定了台灣戰後都市建設在起步時，就嚴重缺乏長遠的空間美學與宜居性考量。",
            "另一方面，台灣戰後的發展策略是極度「工業導向」的。為了快速刺激經濟與出口，國民黨在台灣西部的交通網絡沿線，快速且大量地設立了工業區與出口加工區。當時的都市建設與資源投入，幾乎全都是以服務出口導向為目的。此外，國民黨更推行了「客廳即工廠」的生產模式，以期進一步擴大生產力並降低成本。這項政策讓小型的獨立家庭工廠四處林立，甚至連農村地區也逐漸走向工業化。當工業生產與日常居住空間緊密交織在一起，為了快速容納機台、擴充倉儲，且在缺乏嚴格都市分區管制的時空背景下，搭建快速且成本低廉的「鐵皮屋」便成為最務實的選擇。鐵皮屋如同野草般蔓延，成為台灣城鄉景觀最鮮明的標誌。",
            "如今的台灣，早已卸下「反共基地」的沉重歷史包袱，成為兩千三百萬人真真切切、共同扎根的家園。儘管多數老舊城區仍遺留著住工混雜、鐵皮蔓延的歷史痕跡，但自 2000 年政黨輪替以來，台灣的都市發展逐漸擺脫了昔日的過客心態，開始走向現代大型重劃區與水岸綠帶整合的長遠規劃。",
            "尤其在土地利用與都市規劃層面，政府逐步引入更嚴格的土地使用分區管制與開發審議機制。近年來，不論是強調宜居與綠覆率的現代重劃區，還是舊城區的街道再造與立面美化，都能看出台灣社會對「城市美感」與「生活品質」的追求。從過去為了經濟生存的粗放式開發，到今日開始重視空間秩序與環境永續，台灣城市正在努力修復那段被忽視的空間歷史。從戰後求生存的實用走向對環境美學的重視，這座島嶼的城市面貌正迎來深刻的蛻變，一步步找回屬於自己的空間尊嚴。",
          ],
          media: [
            { kind: "image", alt: "台南市區巷弄中的鐵窗花、遮雨棚與盆栽", caption: "台南市區某條巷弄一景。此巷弄街景生動呈現了台灣常民空間的微觀樣貌，外推的鐵窗花、遮雨棚與盆栽，交織出實用主義至上卻充滿生活氣息的非正式都市景觀。" },
            { kind: "image", alt: "台灣大學椰林大道與日治時期校舍", caption: "台灣大學校史館（原舊總圖書館）——台大校園保留了日治時期仿羅馬式建築與標誌性的十三溝面磚，筆直的椰林大道展現了當時嚴謹的西方近代大學中軸線空間秩序。" },
            { kind: "image", alt: "新北老市區密集的鐵皮屋頂空拍景觀", caption: "這張俯視圖展現了新北老市區高密度的「鐵皮屋頂海」，是戰後「客廳即工廠」政策與缺乏嚴格管制下，住工混雜蔓延的歷史縮影。" },
            { kind: "image", alt: "台中七期重劃區與國家歌劇院空拍景觀", caption: "台中七期重劃區以國家歌劇院為核心，具備嚴格的建築退縮與大面積綠地，呈現出有別於老舊市區的現代化棋盤式格局與天際線。" },
            { kind: "image", alt: "高雄亞洲新灣區與流行音樂中心空拍景觀", caption: "高雄亞洲新灣區與流行音樂中心，成功將過去封閉的重工業港區轉化為開放的親水綠帶，是台灣傳統工業都市轉型的現代規劃典範。" },
          ],
          source: "本文核心論述改編自作者博士論文：劉君雅（2020）。《Régimes politiques, développement économique et croissance urbaine de Taiwan》。巴黎第一大學土地規劃博士論文。圖片來源：Google Maps。",
        },
      ],
    },
    work: {
      eyebrow: "( 02 ) — 精選作品",
      heading: "承載決策的地圖。",
      count: "06 個專案",
      view: "查看地圖 →",
      close: "關閉 ✕",
      filter: {
        all: "全部",
        france: "法國篇",
        taiwan: "台灣篇",
        empty: "台灣篇作品即將上架。",
      },
      featuredProject: {
        year: "2026 — GIS",
        tag: "GIS",
        title: "數位斷層的空間分析：法國大西洋羅亞爾省",
        sections: [
          {
            heading: "專案發想",
            body: "本專案旨在探討法國大西洋羅亞爾省（Loire-Atlantique）的微觀數位落差（Fracture Numérique）現象。從宏觀數據觀察，法國主要都會區的高速光纖（FttH）覆蓋率已相當普及，例如巴黎與里昂皆達 96%，南特市（Nantes）為 93%；而羅亞爾省整體的平均覆蓋率更達到 98%，顯著優於馬賽的 85%。然而，亮眼的整體高覆蓋率往往會掩蓋局部的基礎建設落後。本專案結合都市人口地理學與空間分析，試圖精準定位出隱藏在 98% 高平均值下的資源分配死角。",
          },
          {
            heading: "地圖製作過程",
            body: "本分析深度整合了 INSEE 人口普查數據與 ARCEP 電信基礎建設公開資料。在 QGIS 資料處理階段，首先運用 SQL 語法進行空間資料清理，將法式小數點格式標準化轉換，並透過 INSEE 共通代碼完成跨資料庫的屬性表連接。為提升製圖自動化與精確度，視覺化過程捨棄傳統靜態圖示，全面採用 QGIS 幾何產生器（Générateur de géométrie）。透過撰寫自訂條件判斷式，系統能動態運算市鎮質心，自動過濾掉覆蓋率已達標的區域，並依照缺口比例即時生成動態點位。",
          },
          {
            heading: "地圖說明",
            body: "本地圖採雙變數疊加方式，將「人口密度」與「光纖覆蓋率」兩項關鍵指標進行空間交叉比對。\n\n人口密度底圖：底圖以面量圖呈現每平方公里的人口密度，依照數值由低至高劃分為七個級距（從低於 100 至高於 1500 hab/km²），顏色越深，代表該統計區塊的人口越密集。\n\n光纖覆蓋率指標：圖面上的黑色中空圓圈代表各區域的光纖（FttH）覆蓋率。圓圈直徑與「覆蓋率不足的程度」成正比：覆蓋率越低（如 90%），代表缺口越大、圓圈越大；覆蓋率越普及（如 98%），圓圈則越小。\n\n空間尺度配置：在版面設計上，左側展示了大西洋羅亞爾省（Loire-Atlantique）的全區宏觀分佈；右側則針對「南特（Nantes）」與「聖納澤爾（Saint-Nazaire）」兩大都會區配置了局部放大視圖，凸顯都會核心與外圍近郊的基礎建設差異。",
          },
          {
            heading: "分析結論",
            body: "空間交叉比對結果顯示，儘管羅亞爾省整體表現極佳，但在南特都會區與聖納澤爾（Saint-Nazaire）周邊的部分人口密集市鎮，依然存在顯著的佈建遲滯。這份分析不僅將龐雜的電信數據轉化為直觀的地理情報，客觀呈現了數位落差的實際地理分佈，更展現了空間數據視覺化如何作為都市計畫與公共政策資源分配的決策輔助工具。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      transitProject: {
        year: "2026 — GIS",
        tag: "永續交通 · GIS",
        title: "南特都會區綠色微型交通與大眾運輸接駁空間分析",
        sections: [
          {
            heading: "專案發想",
            body: "隨著永續城市發展，微型交通與大眾運輸的無縫接軌成為關鍵。本專案以法國南特（Nantes）為研究範圍，發想自「最後一哩路」概念，旨在探討城市中現有的自行車道，是否能有效輔助並串聯大眾運輸（TAN）路網，實現低碳出行的願景。",
          },
          {
            heading: "製作過程",
            body: "實作上，我運用 QGIS 整合南特都會區的開放資料，將圖層統一至公制座標系統（EPSG:2154）以確保運算精準度。首先，以交通站點為核心建立 300 公尺的接駁緩衝區，接著透過空間交集運算（Intersection），精準擷取出涵蓋於該服務圈內的自行車道路段，並進一步計算出綠色路網的覆蓋率。",
          },
          {
            heading: "地圖說明",
            body: "地圖視覺設計著重資訊層級的引導。以柔和的真實街道底圖為基礎，淺色區塊標示出 300 公尺的接駁範圍；鮮綠色粗線代表成功整合的自行車道，灰色細線則為範圍外的零星路網，並搭配點位標示交通樞紐。透過強烈的視覺對比，讓路網的優勢與盲區一目了然。",
          },
          {
            heading: "分析結論",
            body: "這份空間分析直觀且量化地呈現了南特市綠色運輸的連通性：分析結果顯示，高達 83.45% 的自行車道路網成功涵蓋於大眾運輸 300 公尺的黃金接駁圈內。這項明確的數據不僅驗證了南特現有路網的整合效益，更能精準指出未來基礎設施的擴建潛力區，為都市規劃者優化空間資源配置提供實質的決策參考。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      seniorsProject: {
        year: "2026 — GIS",
        tag: "公共衛生 · GIS",
        title: "南特市高齡醫療資源空間錯位分析：10 分鐘步行生活圈檢視",
        sections: [
          {
            heading: "專案發想",
            body: "面對高齡化社會，都市空間規劃不僅應衡量醫療設施的絕對數量，更需檢視「醫」與「藥」在微觀地理上的連動性。本專案以南特市為研究範圍，探討 65 歲以上長者在 10 分鐘微弱型移動（Micro-mobility）的步行距離內，全科醫生診所與藥局兩大基層醫療節點的空間配置是否產生錯位，進而找出需要政策介入的公衛盲區。",
          },
          {
            heading: "QGIS 空間運算與製圖技術",
            body: "資料建置與地理編碼：本專案採用法國最小地理單位 IRIS，計算南特市高齡人口絕對數值，並以紅色漸層呈現高齡人口密度熱點。接著蒐集南特地區全科醫生診所與藥局的地址資料，進行地理編碼（Geocoding），將醫、藥點位呈現在地圖上。\n\n等時圈生成與幾何重組：考量高齡者的體力限制，導入 TravelTime API 進行路網分析。以各醫、藥點位為核心，運算出「步行 10 分鐘」的實際可達範圍，並生成多邊形等時圈（Isochrones）圖層，具象化實體醫療服務圈。接著透過幾何運算與空間重組，將南特切割為四大醫療覆蓋情境，最後疊加 IRIS 老齡化底圖，利用面積比例分配法（Areal Interpolation）推算各錯位區內的實際高齡人數。",
          },
          {
            heading: "地圖說明與數據洞察",
            body: "底層紅色漸層反映南特市 46,623 名高齡人口的分布熱點，藍、綠色塊與網底則揭示四種醫療可及性狀態：\n醫藥雙全（底圖原色透出）為資源完善的安全區，涵蓋全市 84.0%（39,152 人）的長者。\n有醫無藥（半透明藍色）占 7.0%（3,243 人），住所附近有醫生但無藥局。\n有藥無醫（半透明綠色）占 3.0%（1,398 人），住所附近有藥局但無醫生。\n醫療沙漠（黑色斜線網底）占 6.1%（2,830 人），其 10 分鐘步行範圍內完全無醫生也無藥局。",
          },
          {
            heading: "空間政策結論",
            body: "南特市雖有八成以上長者享有完善的基層醫療，但仍有高達 10% 面臨醫與藥的空間斷層，更有近三千名長者居住在亟待公部門介入的黑色網底區。此分析具體指出了城市公衛政策的施力點：針對資源錯位區應盡快設置醫、藥據點，以彌平高齡群體的就醫空間阻礙。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      childcareProject: {
        year: "2026 — GIS",
        tag: "公共托育 · GIS",
        title: "2032 年法國南特市托育資源供需落差與潛在需求熱區分析",
        sections: [
          {
            heading: "專案發想",
            body: "面對都市人口結構變遷，公共托育資源的空間配置往往落後於實際需求。南特市人口結構極具活力，近 60% 市民年齡在 40 歲以下，出生率高於全法平均。隨著大量 25 至 55 歲的年輕家庭與專業人士持續移入，市內托嬰設施長期供不應求。本專案旨在透過空間數據分析，提前佈局南特市未來十年的托育資源規劃。",
          },
          {
            heading: "製作過程",
            body: "本專案高度整合人口統計與地理資訊系統（GIS）分析流程。首先，匯入法國國家統計局（INSEE）2016 與 2022 年的 IRIS 街區人口數據，透過線性外推模型，精算出 2032 年 0 至 2 歲嬰幼兒的預估人口總量。接著，自南特大都會區開放資料平台擷取現有托嬰中心（Crèches）空間點位，統一轉換至法國標準座標系統。最後，在 QGIS 軟體中運用空間屬性結合與多邊形點位加總運算，將各項數據整合於單一地理分析框架。",
          },
          {
            heading: "地圖說明",
            body: "圖表採用雙變數疊加的視覺化策略。面狀底圖透過漸層色彩呈現 2032 年 0 至 2 歲嬰幼兒人口預估分佈，紅色越深代表潛在托育需求越高。圖面上疊加的實心黑點，則精準標示南特市內現有的托嬰設施位置。此視覺配置讓「現有供給」與「未來需求」的空間落差一目了然。",
          },
          {
            heading: "分析結論",
            body: "地圖上呈現深紅色且缺乏黑點覆蓋的街區，即是未來十年托育需求極高（單一街區達 201–428 名幼兒）卻面臨資源匱乏的潛在熱區。這些供需嚴重失衡的「托育沙漠」，正是南特市兒童局未來增設公共托嬰設施、優化教育資源空間配置的最核心選址標的。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      tainanBusProject: {
        year: "2026 — GIS",
        tag: "公共運輸 · GIS",
        title: "台南市公車服務盲區與高密度住宅聚落空間分析",
        sections: [
          {
            heading: "專案發想",
            body: "台南市作為台灣六都中大眾運輸相對匱乏的城市，公車系統的佈建與優化對於實踐交通平權顯得格外重要。為了精準鎖定具備高度通勤需求、卻長期被忽視的交通弱勢區，本專案試圖找出都市中亟需資源投入的「公車沙漠」區域。",
          },
          {
            heading: "製作過程",
            body: "本分析整合了內政部 SEGIS 統計區人口數據，以及 OpenStreetMap（OSM）的重要旅次吸引點（POI）。在 QGIS 空間分析環境中，我們建立公車站點的 400 公尺徒步圈（約步行 5 分鐘的距離），並運用「差異（Difference）」工具將其從都市空間中挖除，藉此精準界定出現有公車路線無法觸及的服務盲區。",
          },
          {
            heading: "地圖說明",
            body: "閱讀本地圖時需翻轉常規的視覺認知：圖面上的「留白」並非空白，而是已被公車路網完整涵蓋的優勢區；反之，零星分散的「藍色破洞」才是真正的公車沙漠區。觀察 POI 點位能發現強烈的對比張力——臺南火車站、大型醫院與商場幾乎全數落在白色區域內，顯示路線高度向「重要目的地」傾斜。而圖面上的深藍色塊，正是被現有路網遺漏的純住宅聚落。",
          },
          {
            heading: "分析結論",
            body: "疊加分析明確指出，在安南、永康、歸仁與仁德等行政區交界，存在顯著的交通斷層，且這些地區也不在未來的捷運規劃路線上。然而，這些深藍色的極端盲區，其居住密度高達每平方公里 6,000–16,000 人，且每塊零星盲區內皆實質困住了 300 至 600 名無公車可搭的潛在乘客。基於此空間分析，強烈建議台南市政府儘速設置微循環接駁小巴或新闢公車路線，服務這些「人潮擁擠卻寸步難行」的公車盲區。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      tainanProject: {
        year: "2026 — GIS",
        tag: "人口預測 · GIS",
        title: "臺南都會區人口變遷預測（2024–2036）",
        sections: [
          {
            heading: "專案發想與背景",
            body: "台灣正面臨前所未有的人口崩跌危機。截至 2026 年 8 月，全國總人口已連續 32 個月呈現負成長，並創下連續 68 個月「生不如死」（死亡數多於出生數）的嚴峻紀錄。台灣的總生育率自 1984 年跌破 2.1 的人口替換水準後便持續下滑，去年（2025）更僅剩 0.695，創下歷史新低，名列全球最低。\n\n然而，宏觀的統計數字唯有落實到「空間尺度」才能彰顯其真實意義，進而作為決策者制定政策的依據。基於此，我決定從家鄉臺南出發。我想探究在全國性人口萎縮的浪潮下，這座兼具深厚歷史底蘊與強勢科技產業的城市，在未來十年（2036）的人口流向與城區重組趨勢，並找出首當其衝面臨衰退挑戰的特定區域。",
          },
          {
            heading: "資料處理與視覺化策略",
            body: "本專案的核心數據仰賴「SEGIS 社會經濟資料服務平台」釋出的 2015 年與 2024 年歷史人口網格圖資。在 QGIS 環境中，我透過屬性連接整併跨越九年的空間數據，並導入「時間權重（Temporal Weight）」邏輯，動態推估 2036 年的外推趨勢。在資料清理階段，針對開放資料常見的空值缺陷，我運用「空值轉零」與「零下限（Zero-floor）」機制，避免在嚴重衰退區推算出現不合理的負數人口。最後在視覺化呈現上，採用 7 階發散色系（RdBu），並以白色作為絕對零度（-1 至 1）的基準，輔以藍紅兩色對比出人口成長與衰退的空間分佈，並加入臺南市全境鷹眼圖確立空間尺度。",
          },
          {
            heading: "分析結論",
            body: "預測模型揭示了未來十年臺南人口流失與集中的雙軌現象。呼應全國性的人口衰退，大臺南都會區總人口預估將從 2024 年的 185.7 萬人微幅下滑至 2036 年的 184.1 萬人，呈現約 1.6 萬人的淨流失。然而，紅藍交錯的網格反映出這並非均勻的衰退，而是複雜的內部空間重組。整體大臺南地區在空間上呈現顯著的東西差異：西半部呈現藍白交錯的緩慢成長；東半部近山區則多呈紅色，面臨大量人口流失，如白河區與東山區的部分網格，預估未來十年將減少 200 至 260 人以上。在舊臺南市區方面，東區、南區、北區及部分中西區皆出現明顯的衰退警訊。\n\n儘管大環境處於負成長，人口逆勢集中的藍色板塊仍沿著重大建設脈絡，高度集中於以下四個核心區域：\n\n善化區：受惠於南部科學園區強大的就業磁吸效應，部分特定街廓預估將迎來高達 7,500 人的極端爆發性社會增加。\n\n安南區與永康區：作為緊鄰舊市區的第一圈外圍，透過大型重劃區吸收了大量自市中心溢出的居住需求，形成廣闊的藍色成長帶。\n\n歸仁區：展現了由高鐵特區與沙崙智慧綠能科學城帶動的點狀集中成長。\n\n綜上而論，未來臺南都市治理的挑戰已不再僅是單純的總量衰退，而是必須正面應對「舊城萎縮、新城極化」的空間錯位現實，以落實更具韌性與精準度的公共資源配置。",
          },
        ],
        downloadPdf: "下載原版高清地圖（PDF）",
      },
      projects: {
        fibre: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "數位斷層的空間分析",
          blurb: "法國大西洋羅亞爾省：光纖覆蓋率 × 人口密度。",
          region: "france" as const,
        },
        transit: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "綠色微型交通與大眾運輸接駁分析",
          blurb: "南特都會區自行車道與 TAN 站點的 300 公尺接駁覆蓋分析。",
          region: "france" as const,
        },
        seniors: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "高齡醫療資源空間錯位分析",
          blurb: "南特市 10 分鐘步行生活圈中的醫生、藥局與高齡人口。",
          region: "france" as const,
        },
        childcare: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "2032 年南特托育資源供需分析",
          blurb: "現有托嬰設施與 0 至 2 歲幼兒未來需求熱區的空間落差。",
          region: "france" as const,
        },
        tainanBus: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "台南市公車服務盲區與高密度住宅聚落空間分析",
          blurb: "找出高人口密度卻未被現有公車路網覆蓋的住宅聚落。",
          region: "taiwan" as const,
        },
        tainan: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "臺南都會區人口變遷預測（2024–2036）",
          blurb: "舊城萎縮與新城極化：未來十年臺南的人口流失與集中熱區。",
          region: "taiwan" as const,
        },
      },
    },
    about: {
      eyebrow: "( 03 ) — 簡歷",
      name: "劉君雅 博士",
      role: "社會經濟研究與 GIS 專案負責人",
      body:
        "來自台灣台南，旅居法國超過 15 年，擁有土地規劃博士學位、人口學與地理學，以及國家發展的碩士學位。專長為線上平台建置與數據庫管理、製圖分析、AI空間模型訓練與地理資訊系統的技術培訓。致力將空間分析方法應用於社會經濟研究中。",
      based: "現居 — 法國南特 · 歐盟長期居留",
      languages: "語言",
      langRows: [
        { name: "中文 · 台語", level: "母語" },
        { name: "法語", level: "流利" },
        { name: "英文", level: "IELTS 6.5" },
      ],
      experience: "工作經歷",
      education: "學歷",
      skills: "技術技能",
      skillGroups: [
        { label: "GIS 工具", items: ["QGIS", "ArcGIS", "Géoclip", "GeoDa", "Google Earth Pro"] },
        { label: "資料庫", items: ["SQL", "PostgreSQL/PostGIS"] },
        { label: "統計", items: ["R", "SPSS", "Excel"] },
        { label: "資料 / 網頁視覺化", items: ["Tableau", "Power BI", "Illustrator", "Photoshop", "Canva", "Lovable"] },
      ],
      jobs: [
        {
          title: "GeoAI 空間數據專家 — Scale AI（遠距）",
          period: "2026",
          blurb:
            "空間 AI 與大型語言模型對齊（RLHF）：評估、微調並評測生成式 AI 與前沿模型，專注於空間推理、地理統計與 GIS 工作流程。",
          links: [
            { url: "https://coursera.org/share/f07f2788a0e599d1adc9ec05695d85a3", label: "Google Data Analytics 證書 ↗" },
            { url: "https://coursera.org/share/e6d52d0a3e5164f24a93d7286d522cea", label: "Google AI 證書 ↗" },
          ],
        },
        {
          title: "地理統計師 — Gérontopôle des Pays de la Loire",
          period: "2023 — 2025",
          blurb:
            "從零建置並營運 Cart'âge 線上製圖平台與高齡化主題的地域資料庫，累積 2,200 多項指標。培訓 50 位以上公部門使用者，並定期發表區域人口分析。",
          link: {
            url: "https://cart-age.gerontopole-paysdelaloire.fr/#view=map8&c=indicator",
            label: "cart-age.gerontopole-paysdelaloire.fr ↗",
          },
        },
        {
          title: "中文講師 — 里昂第二大學",
          period: "2015–2017 · 2020–2022",
          blurb: "應外系全職講師，教授法國大學生中文。",
        },
        {
          title: "博士研究員 — 台灣教育部（獎助）",
          period: "2017 — 2020",
          blurb:
            "研究台灣都市發展：政治體制、經濟發展與都市成長。指導教授 Natacha Aveline，地理學博士論文，巴黎第一大學，2020 年。",
          link: {
            url: "https://theses.fr/2020PA01H015",
            label: "theses.fr/2020PA01H015 ↗",
          },
        },
      ],
      degrees: [
        { degree: "土地規劃 博士", school: "巴黎第一大學 Panthéon-Sorbonne", period: "2014–2020" },
        { degree: "地理學 碩士 (M2)", school: "巴黎西堤大學", period: "2012–2013" },
        { degree: "人口學 碩士 (M2)", school: "巴黎西堤大學", period: "2011–2012" },
        { degree: "國家發展 碩士", school: "國立台灣大學", period: "2005–2008" },
        { degree: "公共行政 學士", school: "國立暨南國際大學", period: "2002–2005" },
        { degree: "法文 副學士", school: "文藻外語大學", period: "1997–2002" },
      ],
      publicationsHeading: "著作",
      publications: [
        {
          citation:
            "Liu, Cy., Arora, A. 台灣土地利用與土地覆蓋變遷之十年分析與模擬：機器學習與馬可夫鏈模型。Environ Dev Sustain (2024)。(SCI, Impact Score: 5.6)",
          url: "https://doi.org/10.1007/s10668-024-05859-w",
          label: "doi.org/10.1007/s10668-024-05859-w ↗",
        },
      ],
    },
    contact: {
      eyebrow: "( 04 ) — 聯絡",
      heading: "一起繪製下一個專案。",
      body:
        "承接 GIS 研究、空間稽核與規劃支援。歡迎談談您的資料，以及背後要做的決策。",
      email: "chunyaliu@hotmail.com",
      location: "南特 · 47.2184° N, 1.5536° W",
      response: "48 小時內回覆",
      name: "姓名",
      namePlaceholder: "您的姓名",
      emailLabel: "電子郵件",
      emailPlaceholder: "you@studio.com",
      project: "專案",
      projectPlaceholder: "描述資料、區域與決策…",
      send: "送出訊息 →",
      received: "訊息已收到。",
      receivedBody: "謝謝您——我會在兩個工作天內回覆。",
      sendAnother: "再送一則",
      copyright: "© 2026 C-Y. ESTHER LIU — 作品圖集",
      disciplines: "GIS · 人口學 · 空間分析",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "C-Y. Esther LIU 劉君雅 — Spatial Data Analyst & Urban Planner",
      description:
        "Spatial data analyst and urban planner translating demography, land use and movement into legible maps. GIS, demography, spatial analytics. FR · EN · Mandarin.",
      ogDescription:
        "GIS, demography and spatial analytics for planners — rigorous, legible maps built to be read at a glance.",
    },
    nav: {
      work: "WORK",
      profile: "PROFILE",
      notes: "NOTES",
      contact: "CONTACT",
      tagline: "SPATIAL · PLANNING",
    },
    hero: {
      eyebrow: "( 01 ) — SPATIAL NARRATIVE",
      titleA: "Reading cities as ",
      titleEm: "layered terrain",
      titleB: ", one contour at a time.",
      body:
        "Distilling the complex weave of population, land, and spatial movement into clear, simple stories and maps to inform decision-making.",
      ctaWork: "View selected work →",
      ctaContact: "Start a project",
      stats: [
        { value: "12", label: "Years mapping" },
        { value: "40+", label: "Maps shipped" },
        { value: "3", label: "Working langs" },
      ],
      figCaption: "FIG. 01 — POPULATION DENSITY",
      scale: "1 : 25 000",
      dataPoint: "DATA POINT",
      grid: "GRID 45.2N · 5.4E",
      mapAlt:
        "Refined cartographic choropleth of a city district showing population density in muted teal over warm paper",
    },
    notes: {
      eyebrow: "NOTEBOOK",
      title: "CITY · PLANNING · LIFE",
      read: "READ →",
      close: "CLOSE ✕",
      mapHeading: "Photo locations",
      mapHint: "Select a marker to find its place and photograph",
      viewOnMap: "View on Google Maps ↗",
      items: [
        {
          date: "2026.09",
          category: "CITY · PLANNING",
          title: "Nantes Spatial Notes: The Urban Oases That Replaced Crossroads",
          excerpt: "Six roundabouts reveal how Nantes turns traffic engineering into small, people-centred landscapes.",
          body: [
            "Walking through Nantes, the most immediate spatial experience is often not waiting at a traffic light, but the rhythm of vehicles flowing smoothly from one roundabout to the next. Living here through the lens of urban planning and geography, I began to notice how few traffic signals the city has.",
            "This distinctive landscape grew out of a shift in French traffic engineering during the 1970s and 1980s. After France formally established priority for vehicles already on the roundabout in 1983, roundabouts rapidly replaced conventional crossroads. The change reduced dangerous right-angle collisions and, through spontaneous yielding between drivers, greatly cut time spent idling.",
            "Today, these roundabouts have moved far beyond a single engineering standard. They have become small urban landscapes of many scales and functions. Six contrasting spatial snapshots reveal their appeal.",
          ],
          sections: [
            { heading: "A residential roundabout as a neighbourhood green lung", place: "Place Canclaux", body: "Set within a traditional residential district, Place Canclaux is a small-to-medium roundabout with exceptional tree cover. It shows how a roundabout can work simultaneously as a traffic-calmed zone and a miniature neighbourhood park.", imageAlt: "Aerial view of tree-filled Place Canclaux" },
            { heading: "A tiny traffic-calming space hidden among side streets", place: "Place du 116ème Régiment d’Infanterie", body: "At a complex junction of narrow residential streets, this planted island replaces traffic lights and forces vehicles to slow down. It is a typical neighbourhood-scale traffic-calming device in central Nantes — and, unusually, it is triangular.", imageAlt: "Triangular planted junction at Place du 116ème Régiment d’Infanterie" },
            { heading: "A Dutch-style, people-first design for a sustainable future", place: "Place du Commandant Cousteau", body: "Place du Commandant Cousteau is a recent landmark conversion into a Dutch-style roundabout (rond-point à la hollandaise). Part of Nantes’ latest sustainability push, it overturns the traditional vehicle-first logic by giving cyclists and pedestrians clear priority.", imageAlt: "Dutch-style roundabout at Place du Commandant Cousteau" },
            { heading: "A multi-modal roundabout traversed by the tramway", place: "Rond-Point de Vannes", body: "Rond-Point de Vannes combines a tramway with several bus routes. This classic high-density urban node captures Nantes’ public-transport-first approach: rails and transit movements are carefully woven through the circular flow of general traffic.", imageAlt: "Tram tracks crossing Rond-Point de Vannes" },
            { heading: "An atypical square roundabout", place: "Rond Point Carré", body: "Traffic here follows the logic of a standard roundabout, yet the central island is shaped as a right-angled rectangle planted with neatly aligned trees — a design closer to an urban square (place urbaine) that completely breaks the streamlined form of a classic roundabout. The right-angled edges pose a demanding challenge for drivers, forcing vehicles to slow down sharply to turn, an unusual form of road safety.", imageAlt: "Aerial view of the square, tree-planted Rond Point Carré" },
            { heading: "A giant motorway interchange", place: "Rond Point d’Armor", body: "This roundabout floats above the western ring road of Nantes, using a grade-separated design to absorb the heavy flow of cross-city commuters. Yet the giant multi-lane circle, with no traffic signals at all, makes every driver passing through it nervous.", imageAlt: "Aerial view of the giant Rond Point d’Armor spanning the ring road" },
          ],
          closing: "These circular anchors across the city trace Nantes’ remarkable shift from traffic-led engineering to people-centred micro-landscapes — and offer my favourite starting point for exploring the aesthetics of local space.",
          source: "Images: Google Maps",
          videoCaption: "An unnamed roundabout in central Nantes. A glimpse of the everyday movement of cars, motorbikes, cyclists and pedestrians — with no traffic signals.",
        },
        {
          date: "2026.08",
          category: "PLANNING · LIFE",
          title: "Tram, Water Mirror and Centuries-Old Walls: Nantes' Most Compelling Urban Section",
          excerpt: "How the Château des ducs de Bretagne turned from a closed fortress into a free public living room linked to tram and water mirror.",
          body: [
            "As the most striking historic landmark in central Nantes, the Château des ducs de Bretagne has long outgrown the definition of a monument: it is a textbook case of what planners call the liberation of space. In many European cities, medieval castles remain cut off from everyday life behind high walls and expensive tickets. Nantes did the opposite, releasing this grand fortress as a free public space for rest and recreation.",
            "From a planning perspective, the castle succeeds through seamless circulation. Residents walk their dogs here, commuters cut through the ramparts with a coffee in hand; the edges of the monument soften into an everyday route. The open courtyard and the undulating wall walk invite people of every age to explore, turning a historic site into a lively three-dimensional park.",
            "The blend of greenery and water is the most charming slice of life in this district. The lawns along the moat are no longer a solemn military buffer but a green heart for picnics and sunbathing. Beyond the walls lies the broad Miroir d'Eau: a thin film of water that mirrors the classical ramparts and, in high summer, becomes an urban oasis where children splash about. The design tempers the microclimate and breathes life into the hard stonework.",
            "In terms of networks, the tramway glides smoothly along the outer edge of the castle. Large car-free pedestrian areas share space with the tracks: no harsh noise, no congested traffic, only pedestrians, cyclists and trams coexisting. This low-carbon arrangement lets parents with prams and wheelchair users move without obstacle from the shopping district into this historic green space.",
            "Beyond the outdoor spaces, the castle houses the Musée d'histoire de Nantes. It distils the city's commercial history, from shipbuilding to the world-famous LU biscuit, giving this open recreational space a deep cultural anchor.",
          ],
          media: [
            { kind: "image", alt: "Towers and stone walls of the Château des ducs de Bretagne seen from the moat" },
            { kind: "video", alt: "Walking along the castle's rampart route" },
            { kind: "video", alt: "Reflections and play on the thin sheet of water at the Miroir d'Eau" },
            { kind: "video", alt: "A tram passing along the outer edge of the castle" },
            { kind: "image", alt: "LU sign and vintage Nantes posters inside the Musée d'histoire de Nantes" },
          ],
          mapPoints: [
            "Château des ducs de Bretagne",
            "Musée d'histoire de Nantes",
            "Miroir d'Eau",
            "Duchesse Anne – Château tram stop",
          ],
          mapAlt: "Aerial map marking the castle, museum, water mirror and tram stop",
          closing: "Nantes' citizen-centred urban design keeps the castle from freezing into history, making it a living landscape of movement, greenery, culture and everyday laughter.",
          source: "Photographs: Chun-ya Liu; Google Maps",
        },
        {
          date: "2006.07",
          category: "CITY · LIFE",
          title: "Taiwan’s Post-war Urban Form: Why Do Our Cities Seem to Lack Beauty?",
          excerpt: "From colonial modernisation and post-war industrialisation to contemporary redevelopment, a historical reading of Taiwan’s urban landscape.",
          body: [
            "When discussing Taiwan’s spatial landscape, many people ask why its cities seem so lacking in beauty. Corrugated-metal roofs and disorderly streets dominate the view. Seen through a broad historical lens, however, this apparently chaotic urban form is closely tied to the island’s post-war political system and spatial-development strategy.",
            "Looking back at the Japanese colonial period, Taiwan’s cities were beautiful. The Japanese administration pursued large-scale modern urban planning, intending to make Taiwan a ‘model colony’ that demonstrated its governing capacity. The colonial government drew extensively on Western planning techniques and architectural styles, including those of Paris and Germany. This is why so many surviving buildings from that era bear the strong imprint of Japan’s contemporary interpretations of Western historicist architecture.",
            "After the Second World War, the Kuomintang’s retreat and relocation to Taiwan radically altered the course of the island’s urban development. The post-war government’s overriding political goal was to ‘retake the mainland’, and the state treated Taiwan primarily as a logistical base. With this transient mindset—always prepared to leave—the government showed little real concern for the land’s long-term development or comprehensive planning. From the outset, this historical context left post-war urban construction with little consideration for enduring spatial quality or liveability.",
            "Taiwan’s post-war development strategy was also intensely industry-led. To accelerate economic growth and exports, the Kuomintang rapidly established industrial estates and export-processing zones along the transport networks of western Taiwan. Urban investment was directed almost entirely toward export production. The government also promoted the model of ‘the living room as factory’ to expand output and reduce costs. Small independent household factories proliferated, and even rural areas gradually industrialised. As production became tightly interwoven with domestic space, inexpensive corrugated-metal structures offered the most practical way to house machinery and expand storage—especially in the absence of strict urban zoning. They spread like weeds and became one of the most recognisable features of Taiwan’s urban and rural landscape.",
            "Taiwan has now shed the historical burden of being an ‘anti-communist base’ and become the true shared home of 23 million people. Although many older districts still bear the marks of mixed residential-industrial use and spreading sheet-metal additions, urban development has gradually moved beyond that transient mindset since the first change of governing party in 2000. Long-term planning increasingly combines large modern redevelopment districts with waterfront green corridors.",
            "Land-use planning has also introduced stricter zoning controls and development-review mechanisms. Recent projects—from liveable, green redevelopment districts to street renewal and façade improvement in older neighbourhoods—show a growing public concern for urban beauty and quality of life. Taiwan is moving from the rough development once driven by economic survival toward spatial order and environmental sustainability, repairing a long-neglected chapter of its spatial history. As pragmatism gives way to greater care for environmental aesthetics, the island’s cities are undergoing a profound transformation and gradually reclaiming their own spatial dignity.",
          ],
          media: [
            { kind: "image", alt: "Window grilles, awnings and potted plants in a narrow Tainan lane", caption: "A lane in central Tainan. Projecting window grilles, rain awnings and potted plants vividly reveal the fine-grained landscape of everyday Taiwanese life—an informal urbanism governed by pragmatism yet rich in lived character." },
            { kind: "image", alt: "The palm-lined boulevard and Japanese-era buildings at National Taiwan University", caption: "The NTU History Gallery, formerly the university’s main library. The campus preserves Japanese-era Romanesque architecture and its distinctive thirteen-groove tiles, while the straight palm boulevard expresses the rigorous axial order of a modern Western university." },
            { kind: "image", alt: "Aerial view of dense corrugated-metal rooftops in an older New Taipei district", caption: "This aerial view shows a dense ‘sea of corrugated-metal roofs’ in an older district of New Taipei—a historical trace of the post-war ‘living room as factory’ policy and the spread of mixed residential-industrial uses under weak regulation." },
            { kind: "image", alt: "Aerial view of Taichung’s Seventh Redevelopment Zone and National Taichung Theater", caption: "Centred on the National Taichung Theater, the Seventh Redevelopment Zone applies strict building setbacks and extensive green space, creating a modern grid and skyline distinct from the older city." },
            { kind: "image", alt: "Aerial view of Kaohsiung’s Asia New Bay Area and Music Center", caption: "Kaohsiung’s Asia New Bay Area and Music Center have transformed a formerly closed heavy-industrial harbour into an accessible waterfront green corridor—a contemporary planning model for the renewal of Taiwan’s traditional industrial cities." },
          ],
          source: "This essay’s central argument is adapted from the author’s doctoral dissertation: Liu, Chun-ya (2020). Régimes politiques, développement économique et croissance urbaine de Taiwan. Doctoral dissertation in Land Planning, Université Paris 1 Panthéon-Sorbonne. Images: Google Maps.",
        },
      ],
    },
    work: {
      eyebrow: "( 02 ) — SELECTED WORK",
      heading: "Maps that carry a decision.",
      count: "06 PROJECTS",
      view: "VIEW MAP →",
      close: "CLOSE ✕",
      filter: {
        all: "All",
        france: "France",
        taiwan: "Taiwan",
        empty: "Taiwan projects coming soon.",
      },
      featuredProject: {
        year: "2026 — GIS",
        tag: "GIS",
        title: "Spatial Analysis of the Digital Divide: Loire-Atlantique, France",
        sections: [
          {
            heading: "Project Concept",
            body: "This project investigates the micro digital divide (fracture numérique) in France's Loire-Atlantique department. Macro-level figures show that high-speed fibre (FttH) coverage is already widespread across France's major metropolitan areas — Paris and Lyon both reach 96%, Nantes 93% — while Loire-Atlantique as a whole averages 98%, well ahead of Marseille's 85%. Yet such strong overall coverage often masks pockets of lagging infrastructure. Combining urban population geography with spatial analysis, the project pinpoints the blind spots in resource allocation hidden beneath that 98% average.",
          },
          {
            heading: "Cartographic Process",
            body: "The analysis deeply integrates INSEE census data with ARCEP public telecommunications infrastructure data. During the QGIS data-preparation stage, SQL is first used to clean the spatial data, standardising French decimal formats, before joining attribute tables across databases through INSEE communal codes. To improve automation and precision, the visualisation sets aside traditional static symbology in favour of QGIS Geometry Generators. Custom conditional expressions dynamically compute municipal centroids, automatically filter out areas that already meet coverage targets, and generate dynamic point symbols scaled in real time to the coverage gap.",
          },
          {
            heading: "Reading the Map",
            body: "This map uses a bivariate overlay to cross-compare two key indicators — population density and fibre coverage rate.\n\nPopulation density basemap: The basemap is a choropleth showing inhabitants per square kilometre, classified into seven classes from low to high (from below 100 to above 1,500 hab/km²). The darker the colour, the more densely populated the statistical unit.\n\nFibre coverage indicator: The hollow black circles on the map represent the fibre (FttH) coverage rate of each area. The circle diameter is proportional to the coverage shortfall: the lower the coverage (e.g. 90%), the larger the gap and the larger the circle; the higher the coverage (e.g. 98%), the smaller the circle.\n\nSpatial layout: In terms of layout, the left side shows the macro distribution across the whole of Loire-Atlantique; the right side provides zoomed-in views of the two metropolitan areas, Nantes and Saint-Nazaire, highlighting the infrastructure gap between the urban cores and their outskirts.",
          },
          {
            heading: "Analysis Conclusion",
            body: "Spatial cross-comparison shows that, despite Loire-Atlantique's excellent overall performance, notable deployment delays persist in several densely populated municipalities around the Nantes metropolitan area and near Saint-Nazaire. The analysis converts dense telecommunications data into intuitive geographic intelligence, objectively mapping the actual geography of the digital divide and demonstrating how spatial-data visualisation can serve as a decision-support tool for urban planning and public-policy resource allocation.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      transitProject: {
        year: "2026 — GIS",
        tag: "SUSTAINABLE MOBILITY · GIS",
        title: "Spatial Analysis of Cycling–Public Transport Intermodality in Metropolitan Nantes",
        sections: [
          {
            heading: "Project Concept",
            body: "As cities pursue more sustainable development, seamless connections between micromobility and public transport have become essential. Focusing on Nantes, France, this project draws on the “last-mile” concept to assess whether the existing cycle network can effectively support and connect with the TAN public transport system, advancing the goal of low-carbon mobility.",
          },
          {
            heading: "Methodology",
            body: "The analysis uses QGIS to integrate open data from Nantes Métropole. All layers were reprojected to the metric coordinate system EPSG:2154 to ensure accurate calculations. A 300-metre interchange buffer was first created around each transport stop. Spatial intersection was then used to extract the cycle segments located within these service areas and calculate the coverage of the connected green mobility network.",
          },
          {
            heading: "Map Description",
            body: "The visual design guides the reader through a clear information hierarchy. A softly rendered street basemap provides context; pale areas show the 300-metre interchange catchments, bold green lines identify cycle routes successfully connected to public transport, and fine grey lines show scattered infrastructure beyond those areas. Transport hubs are marked as points, making both the network's strengths and its gaps immediately visible.",
          },
          {
            heading: "Analysis Conclusion",
            body: "This spatial analysis presents an intuitive and quantified picture of green-mobility connectivity in Nantes: the results show that as much as 83.45% of the cycle network lies within the 300-metre golden interchange catchment of public transport. This clear figure not only confirms the integration benefits of the existing network but also pinpoints priority areas for future infrastructure expansion, providing urban planners with practical decision support for optimizing the spatial allocation of resources.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      seniorsProject: {
        year: "2026 — GIS",
        tag: "PUBLIC HEALTH · GIS",
        title: "Spatial mismatch of senior healthcare resources in Nantes: a 10-minute walking-life-circle review",
        sections: [
          {
            heading: "Project rationale",
            body: "In an ageing society, urban planning must measure more than the sheer number of health facilities: it has to examine how doctors and pharmacies interlock at a fine geographic scale. Taking the city of Nantes as its study area, this project asks whether general practitioners and pharmacies — the two frontline nodes of primary care — are spatially mismatched within a 10-minute walk (micro-mobility range) of residents aged 65 and over, in order to identify the public-health blind spots that call for policy intervention.",
          },
          {
            heading: "QGIS spatial analysis and cartography",
            body: "Data building and geocoding: the analysis uses IRIS, France's smallest statistical unit, to compute the absolute number of older residents in each area, rendered as a red graded surface of senior-population hotspots. Addresses of general practices and pharmacies across Nantes were then collected and geocoded so that every care point appears on the map.\n\nIsochrones and geometric recomposition: given the limited stamina of older walkers, the TravelTime API was used for network analysis. From each doctor and pharmacy, the true 10-minute walking reach was computed and turned into polygon isochrone layers that make the real service catchment tangible. Geometric operations then split Nantes into four coverage situations; overlaying the IRIS ageing surface and applying areal interpolation yields the actual number of seniors living inside each mismatch zone.",
          },
          {
            heading: "Reading the map and key figures",
            body: "The red graded base reflects the distribution of the city's 46,623 senior residents, while the blue and green blocks and the hatching reveal four states of medical accessibility:\nFull coverage (base colour showing through) is the safe zone, home to 84.0% (39,152 people) of the city's seniors.\nDoctor but no pharmacy (translucent blue) covers 7.0% (3,243 people).\nPharmacy but no doctor (translucent green) covers 3.0% (1,398 people).\nMedical desert (black diagonal hatching) covers 6.1% (2,830 people), with neither a doctor nor a pharmacy within a 10-minute walk.",
          },
          {
            heading: "Spatial policy conclusion",
            body: "More than eight in ten Nantes seniors enjoy complete primary care, yet almost 10% face a spatial rupture between medicine and pharmacy, and close to three thousand live in the hatched areas that most urgently need public action. The analysis pinpoints where urban health policy should act: opening medical or pharmacy outlets in the mismatched zones would remove the spatial barriers that stand between older residents and everyday care.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      childcareProject: {
        year: "2026 — GIS",
        tag: "EARLY CHILDHOOD · GIS",
        title: "Childcare supply–demand gaps and potential demand hotspots in Nantes, France: 2032 projection",
        sections: [
          {
            heading: "Project rationale",
            body: "As urban population structures change, the spatial distribution of public childcare often lags behind actual demand. Nantes has a notably young and dynamic population: nearly 60% of residents are under 40, and its birth rate exceeds the French average. With large numbers of young families and professionals aged 25 to 55 continuing to move into the city, childcare facilities have remained under sustained pressure. This project uses spatial data analysis to anticipate and guide Nantes’ childcare planning over the coming decade.",
          },
          {
            heading: "Methodology",
            body: "The project closely integrates demographic statistics with a geographic information system (GIS) workflow. First, 2016 and 2022 IRIS neighbourhood population data from France’s national statistics institute (INSEE) were imported, and a linear extrapolation model was used to estimate the number of children aged 0–2 in 2032. Existing crèche locations were then obtained from the Nantes Métropole open-data platform and transformed into the standard French coordinate system. Finally, QGIS spatial joins and point-in-polygon aggregation brought all datasets together in a single geographic analysis framework.",
          },
          {
            heading: "Map description",
            body: "The map uses a bivariate overlay strategy. The graduated area layer shows the projected distribution of children aged 0–2 in 2032, with deeper reds indicating higher potential childcare demand. Solid black dots precisely locate existing childcare facilities across Nantes. This visual arrangement makes the spatial gap between current supply and future demand immediately legible.",
          },
          {
            heading: "Analysis conclusion",
            body: "Neighbourhoods shown in deep red but lacking black-dot coverage are potential hotspots where childcare demand will be very high over the next decade—201 to 428 children in a single district—yet facilities remain scarce. These severely imbalanced “childcare deserts” are the priority locations for Nantes’ children’s services to add public crèches and improve the spatial allocation of early-years provision.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      tainanBusProject: {
        year: "2026 — GIS",
        tag: "PUBLIC TRANSPORT · GIS",
        title: "Spatial Analysis of Bus Transit Deserts and High-Density Residential Areas in Tainan City",
        sections: [
          {
            heading: "Project rationale",
            body: "Among Taiwan’s six special municipalities, Tainan has a relatively limited public transport network. Expanding and improving its bus system is therefore especially important to achieving transport equity. To pinpoint transport-disadvantaged areas with high commuting demand that have long been overlooked, this project identifies the city’s “bus deserts” where investment is most urgently needed.",
          },
          {
            heading: "Methodology",
            body: "The analysis combines population data for statistical areas from Taiwan’s Ministry of the Interior SEGIS platform with major trip-attracting points of interest (POIs) from OpenStreetMap (OSM). In QGIS, 400-metre walking catchments—approximately a five-minute walk—were created around bus stops. The Difference tool was then used to subtract these catchments from the urban area, precisely delineating service gaps beyond the reach of the existing bus network.",
          },
          {
            heading: "Reading the map",
            body: "This map requires a reversal of conventional visual expectations: the white space is not empty, but represents areas fully covered by the bus network; the scattered blue “holes” are the actual bus deserts. The POIs reveal a strong contrast—Tainan railway station, major hospitals and shopping centres almost all fall within white areas, showing how strongly routes favour major destinations. The dark-blue patches, by contrast, are residential neighbourhoods left behind by the existing network.",
          },
          {
            heading: "Analysis conclusion",
            body: "The overlay analysis identifies pronounced transport gaps around the boundaries of Annan, Yongkang, Guiren and Rende districts—areas also excluded from planned future metro routes. Yet these extreme dark-blue gaps contain residential densities of 6,000–16,000 people per square kilometre, with each isolated pocket effectively stranding 300–600 potential passengers without bus access. The findings strongly recommend that the Tainan City Government introduce neighbourhood circulator minibuses or new bus routes in these bus deserts, where many people live but everyday mobility remains severely constrained.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      tainanProject: {
        year: "2026 — GIS",
        tag: "POPULATION PROJECTION · GIS",
        title: "Projected Population Change in the Tainan Metropolitan Area (2024–2036)",
        sections: [
          {
            heading: "Project rationale and context",
            body: "Taiwan is facing an unprecedented demographic decline. As of August 2026, the national population had contracted for 32 consecutive months, with deaths outnumbering births for 68 months in a row. Taiwan’s total fertility rate has fallen continuously since it dropped below the replacement level of 2.1 in 1984; in 2025 it reached just 0.695, a historic low and the lowest in the world.\n\nYet macro statistics only reveal their true meaning—and become usable for policymakers—once they are brought down to a spatial scale. I therefore began with my home city, Tainan. My aim was to examine how a city that combines deep historical heritage with a powerful technology sector will see its population move and its districts reorganise over the coming decade (to 2036), and to identify the specific areas facing decline first.",
          },
          {
            heading: "Data processing and visual strategy",
            body: "The core data come from historical population grid layers for 2015 and 2024 published by Taiwan’s SEGIS socio-economic data service platform. In QGIS I joined the attributes to combine nine years of spatial data and introduced a temporal weighting logic to extrapolate the 2036 trend. During data cleaning, to address the null values common in open data, I applied a null-to-zero conversion together with a zero-floor rule, preventing implausible negative populations in severely declining areas. For the visualisation I used a seven-class diverging RdBu palette with white as the absolute-zero band (-1 to 1), contrasting growth and decline in blue and red, and added a locator map of the whole of Tainan City to anchor the spatial scale.",
          },
          {
            heading: "Analysis conclusion",
            body: "The projection reveals a dual dynamic of loss and concentration over the next decade. In line with the national decline, the Greater Tainan metropolitan population is projected to fall slightly from 1.857 million in 2024 to 1.841 million in 2036, a net loss of some 16,000 residents. The interwoven red and blue cells show, however, that this is not uniform shrinkage but a complex internal spatial reorganisation. A marked east–west contrast emerges: the western half shows slow growth in alternating blue and white, while the eastern foothills are largely red, facing substantial population loss—some cells in Baihe and Dongshan are projected to lose 200 to more than 260 residents. Within the old city, the East, South, North and parts of the West Central districts all show clear signs of decline.\n\nDespite the overall negative trend, the blue areas of counter-cyclical concentration follow major infrastructure and cluster strongly in four core zones:\n\nShanhua District: driven by the powerful employment pull of the Southern Taiwan Science Park, certain blocks are projected to see extreme social growth of up to 7,500 residents.\n\nAnnan and Yongkang Districts: as the first ring immediately outside the old city, their large land-readjustment zones absorb housing demand spilling out of the centre, forming a broad blue growth belt.\n\nGuiren District: shows point-based concentrated growth driven by the high-speed rail district and the Shalun Smart Green Energy Science City.\n\nTaken together, the challenge for Tainan’s urban governance is no longer aggregate decline alone, but the spatial mismatch of a shrinking old city and a polarising new one—calling for more resilient and more precisely targeted allocation of public resources.",
          },
        ],
        downloadPdf: "Download the original high-resolution map (PDF)",
      },
      projects: {
        fibre: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Spatial Analysis of the Digital Divide",
          blurb: "Fibre coverage × population density in Loire-Atlantique.",
          region: "france" as const,
        },
        transit: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Cycling–Transit Intermodality Analysis",
          blurb: "300-metre interchange coverage between cycle routes and TAN stops across Nantes Métropole.",
          region: "france" as const,
        },
        seniors: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Senior healthcare accessibility in Nantes",
          blurb: "Doctors, pharmacies and older residents within a 10-minute walk.",
          region: "france" as const,
        },
        childcare: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Childcare supply and demand in Nantes, 2032",
          blurb: "Spatial gaps between existing crèches and projected demand among children aged 0–2.",
          region: "france" as const,
        },
        tainanBus: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Bus transit deserts in Tainan City",
          blurb: "Locating high-density residential neighbourhoods left beyond the reach of the existing bus network.",
          region: "taiwan" as const,
        },
        tainan: {
          year: "2026 — GIS",
          tag: "GIS",
          title: "Projected population change in Tainan, 2024–2036",
          blurb: "A shrinking old city and a polarising new one: where Tainan loses and gains residents.",
          region: "taiwan" as const,
        },
      },
    },
    about: {
      eyebrow: "( 03 ) — PROFILE",
      name: "Chun-ya LIU, PhD",
      role: "SOCIO-ECONOMIC STUDIES & GIS SPECIALIST",
      body:
        "From Tainan, Taiwan, and living in France for over 15 years, with a PhD in land planning, masters in demography and geography, as well as in national development. I specialise in online platform building and database management, cartographic analysis, AI spatial model training and GIS technical training — and I am dedicated to applying spatial-analysis methods in socio-economic research.",
      based: "BASED — NANTES, FR\nEU LONG-TERM RESIDENT",
      languages: "LANGUAGES",
      langRows: [
        { name: "Chinese · Taiwanese", level: "ZH · NATIVE" },
        { name: "French", level: "FR · FLUENT" },
        { name: "English", level: "EN · IELTS 6.5" },
      ],
      experience: "EXPERIENCE",
      education: "EDUCATION",
      skills: "TECHNICAL SKILLS",
      skillGroups: [
        { label: "GIS TOOLS", items: ["QGIS", "ArcGIS", "Géoclip", "GeoDa", "Google Earth Pro"] },
        { label: "DATABASE", items: ["SQL", "PostgreSQL/PostGIS"] },
        { label: "STATISTICS", items: ["R", "SPSS", "Excel"] },
        { label: "DATA / WEB VISUALISATION", items: ["Tableau", "Power BI", "Illustrator", "Photoshop", "Canva", "Lovable"] },
      ],
      jobs: [
        {
          title: "GeoAI Spatial Data Specialist — Scale AI (Remote)",
          period: "2026",
          blurb:
            "Geospatial AI & LLM Alignment (RLHF): Evaluated, fine-tuned, and benchmarked generative AI and frontier models, with a specialized focus on spatial reasoning, geostatistics, and GIS workflows.",
          links: [
            { url: "https://coursera.org/share/f07f2788a0e599d1adc9ec05695d85a3", label: "Google Data Analytics Certificate ↗" },
            { url: "https://coursera.org/share/e6d52d0a3e5164f24a93d7286d522cea", label: "Google AI Certificate ↗" },
          ],
        },
        {
          title: "Geo-statistician — Gérontopôle des Pays de la Loire",
          period: "2023 — 2025",
          blurb:
            "Built and ran Cart'âge, an online mapping platform and territorial database on ageing — grown from nothing to 2,200+ indicators. Trained 50+ public-sector users and published regular regional demographic analyses.",
          link: {
            url: "https://cart-age.gerontopole-paysdelaloire.fr/#view=map8&c=indicator",
            label: "cart-age.gerontopole-paysdelaloire.fr ↗",
          },
        },
        {
          title: "Mandarin Lecturer — Université Lumière Lyon 2",
          period: "2015–2017 · 2020–2022",
          blurb: "Taught simplified Chinese to French university students, 200 hours per year.",
        },
        {
          title: "Doctoral Researcher — Ministry of Education, Taiwan (Grant)",
          period: "2017 — 2020",
          blurb:
            "Research on Taiwan's urban development: political regimes, economic development and urban growth. PhD thesis in Geography, supervised by Natacha Aveline — Université Paris 1 Panthéon-Sorbonne, 2020.",
          link: {
            url: "https://theses.fr/2020PA01H015",
            label: "theses.fr/2020PA01H015 ↗",
          },
        },
      ],
      degrees: [
        { degree: "PhD, Land Planning", school: "Université Paris 1 Panthéon-Sorbonne", period: "2014–2020" },
        { degree: "M2 Geography", school: "Université Paris Cité", period: "2012–2013" },
        { degree: "M2 Demography", school: "Université Paris Cité", period: "2011–2012" },
        { degree: "MA National Development", school: "National Taiwan University", period: "2005–2008" },
        { degree: "BA Public Administration", school: "National Chi Nan University", period: "2002–2005" },
        { degree: "Associate Degree in French", school: "Wenzao Ursuline University of Languages", period: "1997–2002" },
      ],
      publicationsHeading: "PUBLICATIONS",
      publications: [
        {
          citation:
            "Liu, Cy., Arora, A. Decadal analysis and simulation of land use and land cover changes in Taiwan using machine learning and Markov chain models. Environ Dev Sustain (2024). (SCI, Impact Score: 5.6)",
          url: "https://doi.org/10.1007/s10668-024-05859-w",
          label: "doi.org/10.1007/s10668-024-05859-w ↗",
        },
      ],
    },
    contact: {
      eyebrow: "( 04 ) — CONTACT",
      heading: "Let's map the next project.",
      body:
        "Available for GIS studies, spatial audits, and planning support. Tell me about your data and the decision behind it.",
      email: "chunyaliu@hotmail.com",
      location: "NANTES · 47.2184° N, 1.5536° W",
      response: "RESPONSE WITHIN 48H",
      name: "NAME",
      namePlaceholder: "Your name",
      emailLabel: "EMAIL",
      emailPlaceholder: "you@studio.com",
      project: "PROJECT",
      projectPlaceholder: "Describe the data, region, and decision…",
      send: "Send message →",
      received: "Message received.",
      receivedBody: "Thank you — I'll reply within two working days.",
      sendAnother: "Send another",
      copyright: "© 2026 C-Y. ESTHER LIU — ATLAS OF WORK",
      disciplines: "GIS · DEMOGRAPHY · SPATIAL ANALYTICS",
    },
  },

  fr: {
    htmlLang: "fr",
    meta: {
      title: "C-Y. Esther LIU 劉君雅 — Analyste de données spatiales & urbaniste",
      description:
        "Analyste de données spatiales et urbaniste : je traduis démographie, usage des sols et mobilités en cartes lisibles. SIG, démographie, analyse spatiale. FR · EN · Mandarin.",
      ogDescription:
        "SIG, démographie et analyse spatiale pour les aménageurs — des cartes rigoureuses, lisibles d'un seul coup d'œil.",
    },
    nav: {
      work: "TRAVAUX",
      profile: "PROFIL",
      notes: "CARNETS",
      contact: "CONTACT",
      tagline: "SPATIAL · AMÉNAGEMENT",
    },
    hero: {
      eyebrow: "( 01 ) — RÉCIT SPATIAL",
      titleA: "Lire la ville comme un ",
      titleEm: "terrain stratifié",
      titleB: ", courbe après courbe.",
      body:
        "Distiller l'écheveau complexe de la population, des sols et des mobilités en récits et cartes clairs et simples afin d'éclairer la prise de décision.",
      ctaWork: "Voir les travaux →",
      ctaContact: "Démarrer un projet",
      stats: [
        { value: "12", label: "Ans de cartographie" },
        { value: "40+", label: "Cartes livrées" },
        { value: "3", label: "Langues de travail" },
      ],
      figCaption: "FIG. 01 — DENSITÉ DE POPULATION",
      scale: "1 : 25 000",
      dataPoint: "POINT DE DONNÉES",
      grid: "GRILLE 45.2N · 5.4E",
      mapAlt:
        "Carte choroplèthe soignée d'un quartier montrant la densité de population en vert-bleu sur fond papier",
    },
    notes: {
      eyebrow: "CARNET",
      title: "VILLE · URBANISME · VIE",
      read: "LIRE →",
      close: "FERMER ✕",
      mapHeading: "Localisation des photos",
      mapHint: "Sélectionnez un repère pour retrouver le lieu et sa photo",
      viewOnMap: "Voir sur Google Maps ↗",
      items: [
        {
          date: "2026.09",
          category: "VILLE · URBANISME",
          title: "Carnet spatial nantais : ces oasis urbaines qui remplacent les carrefours",
          excerpt: "Six giratoires montrent comment Nantes transforme l’ingénierie routière en micro-paysages à échelle humaine.",
          body: [
            "À Nantes, l’expérience spatiale la plus immédiate n’est souvent pas l’arrêt devant un feu, mais le rythme fluide de la circulation d’un giratoire à l’autre. En habitant la ville avec le regard de l’urbanisme et de la géographie, j’ai remarqué combien les feux de circulation y sont rares.",
            "Ce paysage singulier vient du changement de paradigme de l’ingénierie routière française dans les années 1970 et 1980. Après l’adoption en 1983 de la priorité aux véhicules déjà engagés dans l’anneau, les giratoires ont rapidement remplacé les carrefours traditionnels. Ils ont réduit les collisions perpendiculaires les plus graves et, grâce à la cession spontanée du passage, fortement limité les temps d’attente au ralenti.",
            "Aujourd’hui, ces giratoires dépassent largement la simple norme technique. De tailles et de fonctions variées, ils sont devenus de véritables micro-paysages urbains. En voici six coupes spatiales très différentes.",
          ],
          sections: [
            { heading: "Un giratoire résidentiel devenu poumon vert du quartier", place: "Place Canclaux", body: "Située dans un quartier résidentiel traditionnel, la place Canclaux est un giratoire de petite à moyenne taille doté d’une couverture végétale remarquable. Elle montre comment un rond-point peut être à la fois une zone apaisée et un micro-parc de quartier.", imageAlt: "Vue aérienne de la place Canclaux arborée" },
            { heading: "Une micro-zone apaisée cachée entre les ruelles", place: "Place du 116ème Régiment d’Infanterie", body: "À la jonction complexe de petites rues entièrement résidentielles, cet îlot planté remplace les feux et oblige les véhicules à ralentir. C’est un dispositif d’apaisement typique des quartiers nantais — avec une particularité : il est triangulaire.", imageAlt: "Îlot triangulaire de la place du 116ème Régiment d’Infanterie" },
            { heading: "Un aménagement néerlandais tourné vers la mobilité durable", place: "Place du Commandant Cousteau", body: "La place du Commandant Cousteau est une récente opération emblématique de transformation en « rond-point à la hollandaise ». Cette expérimentation nantaise inverse la logique traditionnelle de priorité automobile : cyclistes et piétons y disposent d’une priorité affirmée.", imageAlt: "Rond-point à la hollandaise de la place du Commandant Cousteau" },
            { heading: "Un giratoire multimodal traversé par le tramway", place: "Rond-Point de Vannes", body: "Le Rond-Point de Vannes associe le tramway à plusieurs lignes de bus. Ce nœud métropolitain dense illustre parfaitement la priorité nantaise aux transports collectifs : rails et flux de transport public s’entrelacent avec finesse dans la circulation annulaire des voitures.", imageAlt: "Tramway traversant le Rond-Point de Vannes" },
            { heading: "Un giratoire carré atypique", place: "Rond Point Carré", body: "La circulation y suit la logique d’un giratoire classique, mais l’îlot central prend la forme d’un rectangle aux angles droits, planté d’arbres alignés avec soin : un parti plus proche de la « place urbaine », qui rompt radicalement avec la forme fluide du rond-point traditionnel. Ces bords perpendiculaires imposent une trajectoire exigeante qui oblige les véhicules à fortement ralentir pour tourner — une forme inédite de sécurité routière.", imageAlt: "Vue aérienne du Rond Point Carré planté d’arbres alignés" },
            { heading: "Un échangeur autoroutier géant", place: "Rond Point d’Armor", body: "Ce giratoire surplombe le périphérique ouest de Nantes et absorbe, grâce à sa conception dénivelée, l’énorme flux des navettes interurbaines. Pourtant, cet anneau géant aux multiples voies, dépourvu de tout feu de signalisation, fait frémir chaque conducteur qui s’y engage.", imageAlt: "Vue aérienne du gigantesque Rond Point d’Armor enjambant le périphérique" },
          ],
          closing: "Ces ancrages circulaires disséminés dans la ville témoignent du passage remarquable de Nantes d’une logique de flux automobile à des micro-paysages à échelle humaine. Ils sont aussi mon meilleur point de départ pour continuer à explorer l’esthétique des espaces locaux.",
          source: "Images : Google Maps",
          videoCaption: "Un giratoire anonyme dans le centre de Nantes. Un aperçu du mouvement quotidien des voitures, motos, cyclistes et piétons — sans aucun feu.",
        },
        {
          date: "2026.08",
          category: "URBANISME · VIE",
          title: "Tramway, miroir d'eau et murs centenaires : la plus belle coupe urbaine de Nantes",
          excerpt: "Comment le Château des ducs de Bretagne est passé de forteresse fermée à salon urbain gratuit, relié au tramway et au miroir d'eau.",
          body: [
            "Repère historique le plus éclatant du centre de Nantes, le Château des ducs de Bretagne dépasse depuis longtemps le statut de simple monument : il est devenu un cas d'école de « libération de l'espace » en urbanisme. Dans beaucoup de villes européennes, les châteaux médiévaux restent isolés de la vie quotidienne derrière de hauts murs et des billets coûteux. Nantes a fait l'inverse en ouvrant entièrement cette forteresse comme espace public gratuit.",
            "Du point de vue de l'urbanisme, la réussite du château tient à la continuité de ses cheminements. Les habitants y promènent leur chien, les actifs traversent les remparts un café à la main : les limites du monument s'adoucissent et deviennent un passage quotidien. La cour ouverte et le chemin de ronde, tout en dénivelés, invitent tous les âges à explorer et transforment le site historique en un parc vertical plein de vie.",
            "L'alliance des espaces verts et de l'eau constitue la coupe de vie la plus séduisante du quartier. Les pelouses des douves ne sont plus une zone tampon militaire mais le cœur vert des pique-niques et des bains de soleil. À l'extérieur des murs s'étend le vaste Miroir d'Eau : cette fine lame d'eau reflète parfaitement les remparts et devient, l'été, une oasis urbaine où les enfants s'éclaboussent. Le dispositif régule le microclimat tout en insufflant de la vie à la pierre.",
            "Côté réseaux, le tramway longe paisiblement l'enceinte du château. De larges zones piétonnes sans voiture cohabitent avec la plateforme : ni bruit strident ni congestion, seulement piétons, vélos et tramway en bonne entente. Cette mobilité bas carbone permet aux parents avec poussette comme aux personnes en fauteuil de passer sans obstacle du quartier commerçant à cet espace vert historique.",
            "Au-delà des extérieurs, le château abrite le Musée d'histoire de Nantes. Il condense l'histoire économique de la ville, des chantiers navals à la célèbre biscuiterie LU, et offre un ancrage culturel profond à cet espace de détente ouvert à tous.",
          ],
          media: [
            { kind: "image", alt: "Les tours et les murs du Château des ducs de Bretagne vus depuis les douves" },
            { kind: "video", alt: "Cheminement le long du chemin de ronde du château" },
            { kind: "video", alt: "Reflets et jeux sur la lame d'eau du Miroir d'Eau" },
            { kind: "video", alt: "Le tramway longeant l'enceinte du château" },
            { kind: "image", alt: "Enseigne LU et affiches anciennes au Musée d'histoire de Nantes" },
          ],
          mapPoints: [
            "Château des ducs de Bretagne",
            "Musée d'histoire de Nantes",
            "Miroir d'Eau",
            "Arrêt de tram Duchesse Anne – Château",
          ],
          mapAlt: "Vue aérienne signalant le château, le musée, le miroir d'eau et l'arrêt de tram",
          closing: "L'urbanisme nantais, centré sur les habitants, fait du château non plus une histoire figée mais un paysage vivant où se mêlent mobilité, verdure, culture et rires du quotidien.",
          source: "Photographies : Chun-ya Liu ; Google Maps",
        },
        {
          date: "2006.07",
          category: "VILLE · VIE",
          title: "La forme urbaine de Taïwan après-guerre : pourquoi nos villes semblent-elles manquer d’esthétique ?",
          excerpt: "De la modernisation coloniale et de l’industrialisation d’après-guerre aux nouveaux quartiers contemporains, une lecture historique du paysage urbain taïwanais.",
          body: [
            "Lorsqu’on observe les paysages de Taïwan, une question revient souvent : pourquoi les villes taïwanaises semblent-elles manquer d’esthétique ? Les toits en tôle et les rues désordonnées dominent le regard. Pourtant, replacée dans une perspective historique, cette forme urbaine apparemment chaotique est étroitement liée au régime politique de l’après-guerre et aux stratégies de développement spatial.",
            "À l’époque coloniale japonaise, les villes de Taïwan étaient belles. L’administration japonaise y mena de vastes projets d’urbanisme moderne afin de faire de l’île une « colonie modèle », vitrine de sa capacité à gouverner. Elle puisa largement dans les techniques urbanistiques et les styles architecturaux occidentaux, notamment ceux de Paris et d’Allemagne. C’est pourquoi de nombreux édifices conservés de cette période portent encore la marque des interprétations japonaises de l’architecture historiciste occidentale.",
            "Après la Seconde Guerre mondiale, le repli et l’installation du Kuomintang à Taïwan bouleversèrent le destin urbain de l’île. L’objectif politique prioritaire du gouvernement était alors de « reconquérir le continent », et l’appareil d’État considérait surtout Taïwan comme une base logistique. Dans cet état d’esprit transitoire, toujours prêt au départ, le pouvoir se soucia peu du développement à long terme du territoire et de sa planification d’ensemble. Ce contexte historique priva dès l’origine la construction urbaine d’après-guerre d’une véritable réflexion sur l’esthétique spatiale et l’habitabilité.",
            "La stratégie de développement d’après-guerre fut par ailleurs résolument industrielle. Pour stimuler rapidement l’économie et les exportations, le Kuomintang implanta de nombreuses zones industrielles et zones franches d’exportation le long des réseaux de transport de l’ouest de l’île. Les investissements urbains servaient presque exclusivement la production exportatrice. Le gouvernement encouragea également le modèle du « salon transformé en usine » afin d’accroître la production et de réduire les coûts. De petits ateliers familiaux indépendants se multiplièrent partout, jusque dans les campagnes. La production industrielle se mêlant étroitement à l’habitat, les constructions rapides et bon marché en tôle devinrent la solution la plus pragmatique pour accueillir les machines et agrandir les espaces de stockage, dans un contexte dépourvu de zonage urbain strict. Elles proliférèrent comme des herbes sauvages et devinrent l’un des signes les plus visibles des paysages urbains et ruraux taïwanais.",
            "Taïwan a aujourd’hui abandonné le lourd héritage de la « base anticommuniste » pour devenir le véritable foyer commun de 23 millions d’habitants. Si de nombreux quartiers anciens portent encore les traces de la mixité entre habitat et industrie ainsi que de l’extension des structures en tôle, le développement urbain se libère progressivement de cette mentalité transitoire depuis la première alternance politique de 2000. La planification à long terme associe désormais de grands secteurs de remembrement modernes à des corridors verts le long des fronts d’eau.",
            "Dans le domaine de l’usage des sols et de l’urbanisme, les pouvoirs publics ont également introduit des règles de zonage et des procédures d’examen des projets plus strictes. Qu’il s’agisse des nouveaux quartiers privilégiant l’habitabilité et la végétation ou de la requalification des rues et des façades dans les centres anciens, les projets récents révèlent une attention croissante à l’esthétique urbaine et à la qualité de vie. Taïwan passe peu à peu d’un développement extensif dicté par la survie économique à une recherche d’ordre spatial et de durabilité environnementale, réparant ainsi un pan longtemps négligé de son histoire spatiale. En quittant le pragmatisme de l’après-guerre pour accorder davantage d’importance à l’esthétique du cadre de vie, les villes de l’île connaissent une profonde métamorphose et retrouvent progressivement leur propre dignité spatiale.",
          ],
          media: [
            { kind: "image", alt: "Grilles, auvents et plantes en pot dans une ruelle de Tainan", caption: "Une ruelle du centre de Tainan. Grilles en saillie, auvents et plantes en pot composent un paysage informel guidé par le pragmatisme, mais profondément habité par la vie quotidienne." },
            { kind: "image", alt: "Allée de palmiers et bâtiments de l’époque japonaise à l’Université nationale de Taïwan", caption: "Le musée d’histoire de l’Université nationale de Taïwan, ancienne bibliothèque centrale. Le campus conserve une architecture néo-romane de l’époque japonaise et ses briques caractéristiques à treize rainures ; la rectitude de l’allée des palmiers exprime l’ordre axial rigoureux d’une université occidentale moderne." },
            { kind: "image", alt: "Vue aérienne des toitures en tôle d’un quartier ancien du Nouveau Taipei", caption: "Cette vue aérienne montre une dense « mer de toits en tôle » dans un quartier ancien du Nouveau Taipei : un condensé historique de la politique du « salon transformé en usine » et de la diffusion d’une mixité habitat-industrie peu réglementée." },
            { kind: "image", alt: "Vue aérienne du septième secteur de remembrement de Taichung et du Théâtre national", caption: "Organisé autour du Théâtre national de Taichung, le septième secteur de remembrement impose des retraits bâtis stricts et de vastes espaces verts, dessinant une trame et une ligne d’horizon modernes qui contrastent avec la ville ancienne." },
            { kind: "image", alt: "Vue aérienne de l’Asia New Bay Area et du Music Center de Kaohsiung", caption: "À Kaohsiung, l’Asia New Bay Area et le Music Center ont transformé un ancien port industriel fermé en corridor vert ouvert sur l’eau : un modèle contemporain de reconversion pour les villes industrielles traditionnelles de Taïwan." },
          ],
          source: "L’argument central de ce texte est adapté de la thèse de doctorat de l’autrice : Liu, Chun-ya (2020). Régimes politiques, développement économique et croissance urbaine de Taiwan. Thèse de doctorat en aménagement du territoire, Université Paris 1 Panthéon-Sorbonne. Images : Google Maps.",
        },
      ],
    },
    work: {
      eyebrow: "( 02 ) — TRAVAUX CHOISIS",
      heading: "Des cartes qui portent une décision.",
      count: "06 PROJETS",
      view: "VOIR LA CARTE →",
      close: "FERMER ✕",
      filter: {
        all: "Tous",
        france: "France",
        taiwan: "Taïwan",
        empty: "Projets Taïwan à venir.",
      },
      featuredProject: {
        year: "2026 — SIG",
        tag: "SIG",
        title: "Analyse spatiale de la fracture numérique : Loire-Atlantique, France",
        sections: [
          {
            heading: "Problématique",
            body: "Ce projet explore la fracture numérique micro-locale dans le département français de Loire-Atlantique. Les données macro montrent que la couverture fibre optique (FttH) est déjà très répandue dans les grandes aires métropolitaines françaises — Paris et Lyon atteignent 96 %, Nantes 93 % — tandis que la Loire-Atlantique affiche une moyenne de 98 %, bien devant Marseille (85 %). Pourtant, une couverture globale aussi élevée masque souvent des retards localisés d'infrastructure. Croisant géographie de la population urbaine et analyse spatiale, le projet cherche à localiser avec précision les angles morts de l'allocation des ressources dissimulés sous cette moyenne de 98 %.",
          },
          {
            heading: "Méthodologie",
            body: "L'analyse intègre profondément les données de recensement de l'INSEE avec les données publiques d'infrastructure télécom de l'ARCEP. Lors de la préparation des données dans QGIS, SQL sert d'abord à nettoyer les données spatiales, en standardisant le formatage des décimales françaises, avant de joindre les tables attributaires entre bases via les codes communaux INSEE. Pour gagner en automatisation et en précision, la visualisation délaisse la symbologie statique traditionnelle au profit des générateurs de géométrie de QGIS. Des expressions conditionnelles personnalisées calculent dynamiquement les centroïdes communaux, filtrent automatiquement les zones atteignant les objectifs de couverture et génèrent des symboles ponctuels dynamiques mis à l'échelle en temps réel selon le manque de couverture.",
          },
          {
            heading: "Lecture de la carte",
            body: "Cette carte emploie une superposition bivariable pour croiser deux indicateurs clés — la densité de population et le taux de couverture fibre.\n\nCarte de densité de population : Le fond de carte est une carte choroplèthe représentant la densité par kilomètre carré, classée en sept paliers, du plus faible au plus élevé (de moins de 100 à plus de 1 500 hab/km²). Plus la teinte est foncée, plus l'unité statistique est densément peuplée.\n\nIndicateur de couverture fibre : Les cercles noirs évidés sur la carte représentent le taux de couverture fibre (FttH) de chaque zone. Le diamètre des cercles est proportionnel au manque de couverture : plus la couverture est faible (ex. 90 %), plus le manque est grand et le cercle large ; plus la couverture est élevée (ex. 98 %), plus le cercle est petit.\n\nÉchelle spatiale : La mise en page présente à gauche la distribution macro de l'ensemble de la Loire-Atlantique ; à droite, des vues rapprochées des deux aires métropolitaines, Nantes et Saint-Nazaire, mettent en évidence l'écart d'infrastructure entre les cœurs urbains et leurs périphéries.",
          },
          {
            heading: "Conclusion",
            body: "La comparaison spatiale croisée montre que, malgré l'excellente performance globale de la Loire-Atlantique, des retards de déploiement significatifs persistent dans plusieurs communes densément peuplées de l'aire métropolitaine de Nantes et autour de Saint-Nazaire. L'analyse convertit une masse de données télécom en intelligence géographique intuitive, cartographiant objectivement la géographie réelle de la fracture numérique et illustrant comment la visualisation de données spatiales peut servir d'outil d'aide à la décision pour l'urbanisme et l'allocation des ressources dans les politiques publiques.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      transitProject: {
        year: "2026 — SIG",
        tag: "MOBILITÉ DURABLE · SIG",
        title: "Analyse spatiale de l'intermodalité vélo et transports en commun (TAN) à Nantes",
        sections: [
          {
            heading: "Problématique",
            body: "Avec le développement de villes plus durables, l'articulation fluide entre les micromobilités et les transports en commun devient un enjeu majeur. Centré sur Nantes, ce projet s'inspire du concept du « dernier kilomètre » afin d'évaluer si le réseau cyclable existant complète et relie efficacement le réseau de transports TAN, au service d'une mobilité bas-carbone.",
          },
          {
            heading: "Méthodologie",
            body: "L'analyse mobilise QGIS pour intégrer les données ouvertes de Nantes Métropole. Toutes les couches ont été reprojetées dans le système de coordonnées métrique EPSG:2154 afin de garantir la précision des calculs. Une zone tampon de 300 mètres a d'abord été créée autour de chaque arrêt de transport. Une intersection spatiale a ensuite permis d'extraire précisément les tronçons cyclables compris dans ces aires de desserte, puis de calculer la couverture du réseau de mobilité verte connecté.",
          },
          {
            heading: "Lecture de la carte",
            body: "La conception visuelle privilégie une hiérarchie claire de l'information. Un fond de plan routier adouci apporte le contexte ; les zones claires indiquent les périmètres d'intermodalité de 300 mètres, les lignes vertes épaisses représentent les pistes cyclables effectivement connectées et les fines lignes grises signalent les aménagements plus dispersés hors de ces zones. Les pôles de transport sont figurés par des points, rendant immédiatement lisibles les forces et les lacunes du réseau.",
          },
          {
            heading: "Conclusion",
            body: "Cette analyse spatiale offre une lecture à la fois intuitive et quantifiée de la connectivité des mobilités vertes à Nantes : les résultats montrent que jusqu'à 83,45 % du réseau cyclable est compris dans le rayon d'intermodalité « doré » de 300 mètres autour des transports en commun. Ce chiffre précis confirme les bénéfices d'intégration du réseau existant et permet de localiser les secteurs à fort potentiel d'extension future, constituant une aide concrète à la décision pour optimiser l'allocation spatiale des ressources d'aménagement.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      seniorsProject: {
        year: "2026 — SIG",
        tag: "SANTÉ PUBLIQUE · SIG",
        title: "Accessibilité médicale des seniors à Nantes : analyse spatiale à 10 minutes à pied",
        sections: [
          {
            heading: "Genèse du projet",
            body: "Face au vieillissement de la population, la planification urbaine ne peut se contenter de compter les équipements de santé : elle doit examiner l'articulation fine entre médecins et pharmacies. Prenant Nantes comme terrain, ce projet interroge l'éventuelle discordance spatiale entre les cabinets de médecine générale et les pharmacies — les deux nœuds des soins de premier recours — dans un rayon de 10 minutes de marche (micro-mobilité) pour les habitants de 65 ans et plus, afin de repérer les angles morts de santé publique appelant une intervention.",
          },
          {
            heading: "Traitement spatial et cartographie sous QGIS",
            body: "Construction des données et géocodage : l'analyse s'appuie sur l'IRIS, plus petite maille statistique française, pour calculer le nombre absolu de seniors et représenter les foyers de densité par un dégradé de rouges. Les adresses des médecins généralistes et des pharmacies de l'agglomération ont ensuite été collectées puis géocodées pour placer chaque point de soin sur la carte.\n\nIsochrones et recomposition géométrique : compte tenu des capacités de marche des personnes âgées, l'API TravelTime a servi à l'analyse de réseau. Depuis chaque médecin et chaque pharmacie, la zone réellement atteignable en 10 minutes à pied a été calculée sous forme d'isochrones polygonales, matérialisant les aires de service. Des opérations géométriques ont ensuite découpé Nantes en quatre situations de couverture ; la superposition du fond IRIS et une interpolation surfacique (areal interpolation) permettent d'estimer le nombre réel de seniors dans chaque zone de discordance.",
          },
          {
            heading: "Lecture de la carte et enseignements",
            body: "Le dégradé rouge du fond traduit la répartition des 46 623 seniors nantais ; les aplats bleus et verts ainsi que les hachures révèlent quatre états d'accessibilité :\nCouverture complète (fond visible) : la zone bien dotée, où vivent 84,0 % (39 152 personnes) des seniors.\nMédecin sans pharmacie (bleu translucide) : 7,0 % (3 243 personnes).\nPharmacie sans médecin (vert translucide) : 3,0 % (1 398 personnes).\nDésert médical (hachures noires) : 6,1 % (2 830 personnes), sans médecin ni pharmacie à 10 minutes à pied.",
          },
          {
            heading: "Conclusion : enjeux de politique spatiale",
            body: "Si plus de huit seniors nantais sur dix bénéficient d'une offre de premier recours complète, près de 10 % subissent une rupture spatiale entre médecine et pharmacie, et près de trois mille habitants âgés résident dans les zones hachurées qui appellent une action publique rapide. L'analyse désigne les points d'appui d'une politique de santé urbaine : implanter des cabinets ou des pharmacies dans les zones de discordance pour lever les obstacles spatiaux à l'accès aux soins des plus âgés.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      childcareProject: {
        year: "2026 — SIG",
        tag: "PETITE ENFANCE · SIG",
        title: "Cartographie de l’offre et de la demande en crèches à Nantes, France (projection 2032)",
        sections: [
          {
            heading: "Genèse du projet",
            body: "Face aux transformations de la structure démographique urbaine, la répartition spatiale de l’offre publique d’accueil de la petite enfance reste souvent en retard sur les besoins réels. Nantes se distingue par une population jeune et dynamique : près de 60 % de ses habitants ont moins de 40 ans et son taux de natalité dépasse la moyenne nationale. Avec l’arrivée continue de jeunes familles et d’actifs qualifiés âgés de 25 à 55 ans, les structures d’accueil demeurent durablement sous tension. Ce projet mobilise l’analyse spatiale afin d’anticiper la planification des crèches nantaises pour la prochaine décennie.",
          },
          {
            heading: "Méthodologie",
            body: "Le projet articule étroitement statistiques démographiques et système d’information géographique (SIG). Les données de population à l’échelle IRIS de l’INSEE pour 2016 et 2022 ont d’abord été intégrées ; un modèle d’extrapolation linéaire a ensuite permis d’estimer la population des enfants de 0 à 2 ans en 2032. Les localisations des crèches existantes ont été extraites de la plateforme de données ouvertes de Nantes Métropole puis harmonisées dans le système de coordonnées français de référence. Enfin, des jointures spatiales et des agrégations de points par polygone dans QGIS ont réuni l’ensemble des données dans un cadre d’analyse géographique unique.",
          },
          {
            heading: "Lecture de la carte",
            body: "La carte repose sur une superposition bivariée. Le fond surfacique en dégradé représente la répartition projetée des enfants de 0 à 2 ans en 2032 : plus le rouge est soutenu, plus la demande potentielle d’accueil est élevée. Les points noirs pleins localisent précisément les crèches actuellement présentes à Nantes. Cette composition rend immédiatement visible le décalage spatial entre l’offre existante et la demande future.",
          },
          {
            heading: "Conclusion",
            body: "Les quartiers en rouge foncé dépourvus de points noirs constituent les futurs secteurs de très forte demande—de 201 à 428 enfants dans un seul quartier—où l’offre demeure insuffisante. Ces « déserts de la petite enfance », marqués par un profond déséquilibre entre offre et demande, sont les secteurs prioritaires pour l’implantation de nouvelles crèches publiques et l’optimisation spatiale des ressources éducatives par les services de la Ville de Nantes.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      tainanBusProject: {
        year: "2026 — SIG",
        tag: "TRANSPORT PUBLIC · SIG",
        title: "Analyse spatiale des déserts de desserte en bus et des quartiers résidentiels à forte densité à Tainan",
        sections: [
          {
            heading: "Problématique",
            body: "Parmi les six municipalités spéciales de Taïwan, Tainan dispose d’un réseau de transports collectifs relativement limité. Le déploiement et l’optimisation du réseau de bus sont donc particulièrement importants pour concrétiser l’équité des mobilités. Afin de localiser précisément les secteurs défavorisés qui présentent une forte demande de déplacement mais restent durablement négligés, ce projet identifie les « déserts de bus » nécessitant en priorité de nouveaux investissements.",
          },
          {
            heading: "Méthodologie",
            body: "L’analyse croise les données de population par zone statistique de la plateforme SEGIS du ministère taïwanais de l’Intérieur avec les principaux pôles générateurs de déplacements (POI) d’OpenStreetMap (OSM). Sous QGIS, des zones de marche de 400 mètres—soit environ cinq minutes à pied—ont été créées autour des arrêts de bus. L’outil Différence a ensuite permis de soustraire ces zones de l’espace urbain et de délimiter précisément les secteurs non desservis par le réseau actuel.",
          },
          {
            heading: "Lecture de la carte",
            body: "La lecture de cette carte suppose d’inverser les conventions visuelles habituelles : les espaces blancs ne sont pas vides, mais correspondent aux secteurs entièrement couverts par le réseau de bus ; à l’inverse, les « trous bleus » dispersés constituent les véritables déserts de desserte. Les POI révèlent un contraste marqué : la gare de Tainan, les grands hôpitaux et les centres commerciaux se situent presque tous dans les zones blanches, signe que les lignes privilégient fortement les destinations majeures. Les taches bleu foncé correspondent, quant à elles, aux quartiers purement résidentiels oubliés par le réseau actuel.",
          },
          {
            heading: "Conclusion",
            body: "L’analyse par superposition met en évidence d’importantes ruptures de desserte aux limites des districts d’Annan, Yongkang, Guiren et Rende, qui ne se trouvent pas non plus sur les futurs tracés de métro. Pourtant, ces secteurs bleu foncé présentent des densités résidentielles de 6 000 à 16 000 habitants par kilomètre carré, chaque poche isolée laissant effectivement 300 à 600 usagers potentiels sans accès au bus. L’analyse recommande donc vivement à la municipalité de Tainan de mettre rapidement en place des minibus de desserte locale ou de nouvelles lignes dans ces déserts de bus, où la population est nombreuse mais la mobilité quotidienne fortement entravée.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      tainanProject: {
        year: "2026 — SIG",
        tag: "PROJECTION DÉMOGRAPHIQUE · SIG",
        title: "Projection des évolutions démographiques de l’aire métropolitaine de Tainan (2024–2036)",
        sections: [
          {
            heading: "Genèse et contexte",
            body: "Taïwan traverse un effondrement démographique sans précédent. En août 2026, la population nationale reculait depuis 32 mois consécutifs, avec un excédent des décès sur les naissances depuis 68 mois d’affilée. L’indice conjoncturel de fécondité ne cesse de baisser depuis qu’il est passé sous le seuil de renouvellement de 2,1 en 1984 : il n’était plus que de 0,695 en 2025, un minimum historique et le plus faible au monde.\n\nMais les statistiques macroéconomiques ne prennent tout leur sens — et ne deviennent exploitables par les décideurs — qu’une fois ramenées à l’échelle spatiale. J’ai donc choisi de partir de ma ville natale, Tainan, afin d’examiner comment une ville à la fois riche d’un patrimoine historique profond et portée par une industrie technologique puissante verra ses flux de population et l’organisation de ses quartiers se recomposer d’ici 2036, et d’identifier les secteurs les plus directement exposés au déclin.",
          },
          {
            heading: "Traitement des données et stratégie visuelle",
            body: "Les données proviennent des grilles de population historiques 2015 et 2024 diffusées par la plateforme taïwanaise de données socio-économiques SEGIS. Sous QGIS, une jointure attributaire a permis de combiner neuf années de données spatiales, puis une logique de pondération temporelle (Temporal Weight) d’extrapoler la tendance à 2036. Lors du nettoyage, pour traiter les valeurs nulles fréquentes dans les données ouvertes, j’ai appliqué une conversion des nulles en zéro ainsi qu’un plancher à zéro (Zero-floor), afin d’éviter des populations négatives incohérentes dans les secteurs en fort déclin. La visualisation repose sur une palette divergente RdBu à sept classes, le blanc marquant la classe neutre (-1 à 1), le bleu et le rouge opposant croissance et déclin ; une carte de situation de l’ensemble de Tainan ancre l’échelle spatiale.",
          },
          {
            heading: "Conclusion",
            body: "Le modèle révèle une double dynamique de perte et de concentration pour la décennie à venir. Conformément au déclin national, la population de l’aire métropolitaine de Tainan passerait de 1,857 million d’habitants en 2024 à 1,841 million en 2036, soit une perte nette d’environ 16 000 habitants. L’entrelacement des cellules rouges et bleues montre toutefois qu’il ne s’agit pas d’un recul uniforme, mais d’une recomposition spatiale interne complexe. Un net contraste est-ouest apparaît : la moitié ouest connaît une croissance lente, en alternance de bleu et de blanc, tandis que la moitié est, proche des reliefs, apparaît majoritairement en rouge et perd beaucoup d’habitants — certaines cellules de Baihe et de Dongshan perdraient de 200 à plus de 260 personnes. Dans l’ancienne ville, les districts Est, Sud, Nord et une partie du Centre-Ouest présentent des signaux de déclin marqués.\n\nMalgré ce contexte négatif, les îlots bleus de concentration démographique suivent les grands projets d’aménagement et se regroupent dans quatre secteurs clés :\n\nDistrict de Shanhua : porté par la très forte attractivité en emplois du parc scientifique du Sud, certains îlots enregistreraient une croissance sociale explosive atteignant 7 500 habitants.\n\nDistricts d’Annan et de Yongkang : première couronne au contact immédiat de l’ancienne ville, ils absorbent, grâce à de vastes zones de remembrement, la demande résidentielle débordant du centre et forment une large ceinture de croissance bleue.\n\nDistrict de Guiren : croissance ponctuelle concentrée, entraînée par le quartier de la grande vitesse ferroviaire et la cité scientifique des énergies vertes de Shalun.\n\nAu total, l’enjeu de la gouvernance urbaine de Tainan n’est plus seulement le recul global, mais bien la réalité d’un décalage spatial entre une ancienne ville qui se vide et de nouveaux pôles qui se polarisent — ce qui appelle une allocation des ressources publiques plus résiliente et plus finement ciblée.",
          },
        ],
        downloadPdf: "Télécharger la carte originale en haute résolution (PDF)",
      },
      projects: {
        fibre: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Analyse spatiale de la fracture numérique",
          blurb: "Couverture fibre × densité de population en Loire-Atlantique.",
          region: "france" as const,
        },
        transit: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Intermodalité vélo–transports en commun",
          blurb: "Couverture à 300 mètres entre pistes cyclables et arrêts TAN dans Nantes Métropole.",
          region: "france" as const,
        },
        seniors: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Accessibilité médicale des seniors à Nantes",
          blurb: "Médecins, pharmacies et seniors dans un rayon de 10 minutes à pied.",
          region: "france" as const,
        },
        childcare: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Offre et demande en crèches à Nantes en 2032",
          blurb: "Écarts spatiaux entre les crèches existantes et la demande projetée des enfants de 0 à 2 ans.",
          region: "france" as const,
        },
        tainanBus: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Déserts de desserte en bus à Tainan",
          blurb: "Localiser les quartiers résidentiels denses laissés hors de portée du réseau de bus actuel.",
          region: "taiwan" as const,
        },
        tainan: {
          year: "2026 — SIG",
          tag: "SIG",
          title: "Évolutions démographiques de Tainan, 2024–2036",
          blurb: "Ancienne ville qui se vide, nouveaux pôles qui se polarisent : où Tainan perd et gagne des habitants.",
          region: "taiwan" as const,
        },
      },
    },
    about: {
      eyebrow: "( 03 ) — PROFIL",
      name: "Chun-ya LIU, docteure",
      role: "CHARGÉE D'ÉTUDES SOCIO-ÉCONOMIQUES EN SIG",
      body:
        "Originaire de Tainan, à Taïwan, et installée en France depuis plus de 15 ans, docteure en aménagement du territoire, titulaire de masters en démographie et en géographie, ainsi qu'en développement national. Spécialisée dans la création de plateformes en ligne et la gestion de bases de données, l'analyse cartographique, la formation aux modèles spatiaux IA et la formation technique en SIG, je consacre mon travail à l'application des méthodes d'analyse spatiale à la recherche socio-économique.",
      based: "BASÉE À — NANTES, FR\nRÉSIDENTE LONGUE DURÉE UE",
      languages: "LANGUES",
      langRows: [
        { name: "Chinois · Taïwanais", level: "ZH · LANGUE MATERNELLE" },
        { name: "Français", level: "FR · COURANT" },
        { name: "Anglais", level: "EN · IELTS 6.5" },
      ],
      experience: "EXPÉRIENCE",
      education: "FORMATION",
      skills: "COMPÉTENCES TECHNIQUES",
      skillGroups: [
        { label: "OUTILS SIG", items: ["QGIS", "ArcGIS", "Géoclip", "GeoDa", "Google Earth Pro"] },
        { label: "BASES DE DONNÉES", items: ["SQL", "PostgreSQL/PostGIS"] },
        { label: "STATISTIQUES", items: ["R", "SPSS", "Excel"] },
        { label: "DATAVISUALISATION / WEB", items: ["Tableau", "Power BI", "Illustrator", "Photoshop", "Canva", "Lovable"] },
      ],
      jobs: [
        {
          title: "Spécialiste GeoAI données spatiales — Scale AI (À distance)",
          period: "2026",
          blurb:
            "IA géospatiale & alignement des LLM (RLHF) : évaluation, ajustement fin et benchmarking de modèles d'IA générative et de modèles de pointe, avec une spécialisation en raisonnement spatial, géostatistique et flux de travail SIG.",
          links: [
            { url: "https://coursera.org/share/f07f2788a0e599d1adc9ec05695d85a3", label: "Certificat Google Data Analytics ↗" },
            { url: "https://coursera.org/share/e6d52d0a3e5164f24a93d7286d522cea", label: "Certificat Google AI ↗" },
          ],
        },
        {
          title: "Géostatisticienne — Gérontopôle des Pays de la Loire",
          period: "2023 — 2025",
          blurb:
            "Conception et animation de Cart'âge, plateforme cartographique en ligne et base de données territoriale sur le vieillissement — passée de zéro à plus de 2 200 indicateurs. Formation de plus de 50 agents publics et publication régulière d'analyses démographiques régionales.",
          link: {
            url: "https://cart-age.gerontopole-paysdelaloire.fr/#view=map8&c=indicator",
            label: "cart-age.gerontopole-paysdelaloire.fr ↗",
          },
        },
        {
          title: "Lectrice de chinois — Université Lumière Lyon 2",
          period: "2015–2017 · 2020–2022",
          blurb: "Enseignement du chinois simplifié à des étudiants français, 200 heures par an.",
        },
        {
          title: "Doctorante chercheuse — Ministère de l'Éducation, Taïwan (Bourse)",
          period: "2017 — 2020",
          blurb:
            "Régimes politiques, développement économique et croissance urbaine de Taiwan. Thèse de doctorat en géographie, sous la direction de Natacha Aveline — Université Paris 1 Panthéon-Sorbonne, 2020.",
          link: {
            url: "https://theses.fr/2020PA01H015",
            label: "theses.fr/2020PA01H015 ↗",
          },
        },
      ],
      degrees: [
        { degree: "Doctorat, aménagement & urbanisme", school: "Université Paris 1 Panthéon-Sorbonne", period: "2014–2020" },
        { degree: "M2 Géographie", school: "Université Paris Cité", period: "2012–2013" },
        { degree: "M2 Démographie", school: "Université Paris Cité", period: "2011–2012" },
        { degree: "Master en développement national", school: "National Taiwan University", period: "2005–2008" },
        { degree: "Licence en administration publique", school: "Université nationale de Chi Nan", period: "2002–2005" },
        { degree: "DUT de français", school: "Université Wenzao de langues étrangères", period: "1997–2002" },
      ],
      publicationsHeading: "PUBLICATIONS",
      publications: [
        {
          citation:
            "Liu, Cy., Arora, A. Analyse décennale et simulation des changements d'occupation et d'usage des sols à Taïwan par apprentissage automatique et chaînes de Markov. Environ Dev Sustain (2024). (SCI, Impact Score: 5.6)",
          url: "https://doi.org/10.1007/s10668-024-05859-w",
          label: "doi.org/10.1007/s10668-024-05859-w ↗",
        },
      ],
    },
    contact: {
      eyebrow: "( 04 ) — CONTACT",
      heading: "Cartographions le prochain projet.",
      body:
        "Disponible pour des études SIG, des audits spatiaux et de l'appui à la planification. Parlez-moi de vos données et de la décision qu'elles éclairent.",
      email: "chunyaliu@hotmail.com",
      location: "NANTES · 47.2184° N, 1.5536° O",
      response: "RÉPONSE SOUS 48H",
      name: "NOM",
      namePlaceholder: "Votre nom",
      emailLabel: "E-MAIL",
      emailPlaceholder: "vous@studio.com",
      project: "PROJET",
      projectPlaceholder: "Décrivez les données, le territoire et la décision…",
      send: "Envoyer le message →",
      received: "Message bien reçu.",
      receivedBody: "Merci — je réponds sous deux jours ouvrés.",
      sendAnother: "Envoyer un autre message",
      copyright: "© 2026 C-Y. ESTHER LIU — ATLAS DES TRAVAUX",
      disciplines: "SIG · DÉMOGRAPHIE · ANALYSE SPATIALE",
    },
  },
};

export { projectKeys };

export const inboxCopy: Record<
  Lang,
  {
    label: string;
    empty: string;
    signIn: string;
    signOut: string;
    error: string;
    sending: string;
    delete: string;
    title: string;
    subtitle: string;
    emailField: string;
    passwordField: string;
    login: string;
    register: string;
    toggleToRegister: string;
    toggleToLogin: string;
    back: string;
    google: string;
    checkEmail: string;
  }
> = {
  zh: {
    label: "最近收到的訊息",
    empty: "目前還沒有留言。",
    signIn: "網站管理登入",
    signOut: "登出",
    error: "送出失敗，請稍後再試。",
    sending: "送出中…",
    delete: "刪除",
    title: "網站管理登入",
    subtitle: "僅供網站擁有者查看訪客留言。",
    emailField: "電子郵件",
    passwordField: "密碼",
    login: "登入",
    register: "註冊",
    toggleToRegister: "還沒有帳號？註冊",
    toggleToLogin: "已有帳號？登入",
    back: "← 回到網站",
    google: "使用 Google 登入",
    checkEmail: "請至信箱收取確認信。",
  },
  en: {
    label: "RECENT MESSAGES",
    empty: "No messages yet.",
    signIn: "Owner sign-in",
    signOut: "Sign out",
    error: "Could not send. Please try again.",
    sending: "Sending…",
    delete: "Delete",
    title: "Owner sign-in",
    subtitle: "Private area for reading visitor messages.",
    emailField: "Email",
    passwordField: "Password",
    login: "Sign in",
    register: "Create account",
    toggleToRegister: "No account yet? Create one",
    toggleToLogin: "Already have an account? Sign in",
    back: "← Back to site",
    google: "Continue with Google",
    checkEmail: "Check your inbox to confirm your address.",
  },
  fr: {
    label: "MESSAGES RÉCENTS",
    empty: "Aucun message pour le moment.",
    signIn: "Connexion propriétaire",
    signOut: "Déconnexion",
    error: "Envoi impossible. Réessayez.",
    sending: "Envoi…",
    delete: "Supprimer",
    title: "Connexion propriétaire",
    subtitle: "Espace privé pour lire les messages des visiteurs.",
    emailField: "E-mail",
    passwordField: "Mot de passe",
    login: "Se connecter",
    register: "Créer un compte",
    toggleToRegister: "Pas encore de compte ? Créez-en un",
    toggleToLogin: "Déjà un compte ? Connectez-vous",
    back: "← Retour au site",
    google: "Continuer avec Google",
    checkEmail: "Confirmez votre adresse depuis votre boîte mail.",
  },
};

export const commentsCopy: Record<
  Lang,
  {
    eyebrow: string;
    heading: string;
    hint: string;
    empty: string;
    loading: string;
    formHeading: string;
    namePlaceholder: string;
    bodyPlaceholder: string;
    replyPlaceholder: string;
    send: string;
    sending: string;
    reply: string;
    delete: string;
    edit: string;
    save: string;
    cancel: string;
    ownerBadge: string;
    ownerName: string;
    anonymous: string;
    error: string;
  }
> = {
  zh: {
    eyebrow: "留言板",
    heading: "讀者提問與討論",
    hint: "留言為公開內容，三種語言版本共用同一串討論，歡迎以任何語言提問。",
    empty: "還沒有留言，成為第一個提問的人吧。",
    loading: "載入中…",
    formHeading: "留下你的想法",
    namePlaceholder: "你的名字",
    bodyPlaceholder: "想問什麼、想到什麼都可以…",
    replyPlaceholder: "回覆這則留言…",
    send: "送出留言",
    sending: "送出中…",
    reply: "回覆",
    delete: "刪除",
    edit: "編輯",
    save: "儲存",
    cancel: "取消",
    ownerBadge: "作者",
    ownerName: "劉君雅 Esther",
    anonymous: "匿名讀者",
    error: "送出失敗，請稍後再試。",
  },
  en: {
    eyebrow: "COMMENTS",
    heading: "Questions & discussion",
    hint: "Comments are public and shared across the 中 / EN / FR versions — write in any language.",
    empty: "No comments yet. Be the first to ask.",
    loading: "Loading…",
    formHeading: "Leave a comment",
    namePlaceholder: "Your name",
    bodyPlaceholder: "Ask a question or share a thought…",
    replyPlaceholder: "Reply to this comment…",
    send: "Post comment",
    sending: "Sending…",
    reply: "Reply",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    ownerBadge: "AUTHOR",
    ownerName: "C-Y. Esther LIU",
    anonymous: "Anonymous reader",
    error: "Could not send. Please try again.",
  },
  fr: {
    eyebrow: "COMMENTAIRES",
    heading: "Questions et discussion",
    hint: "Les commentaires sont publics et partagés entre les versions 中 / EN / FR — écrivez dans la langue de votre choix.",
    empty: "Aucun commentaire pour le moment. Posez la première question.",
    loading: "Chargement…",
    formHeading: "Laisser un commentaire",
    namePlaceholder: "Votre nom",
    bodyPlaceholder: "Une question, une remarque…",
    replyPlaceholder: "Répondre à ce commentaire…",
    send: "Publier",
    sending: "Envoi…",
    reply: "Répondre",
    delete: "Supprimer",
    edit: "Modifier",
    save: "Enregistrer",
    cancel: "Annuler",
    ownerBadge: "AUTEURE",
    ownerName: "C-Y. Esther LIU",
    anonymous: "Lecteur anonyme",
    error: "Envoi impossible. Réessayez.",
  },
};
