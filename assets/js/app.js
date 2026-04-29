const app = document.getElementById("app");
const { createRouter: initRouter } = window.StaticRouter;
const { createStore: initStore } = window.StaticState;
const store = initStore();

function albumPhotos(folder, count) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(count - index).padStart(3, "0");
    return `assets/images/${folder}/${number}.jpg`;
  });
}

const ALBUM_FOLDERS = {
  arcturus: "78_помёт_n_nord-ost_норд-ост_свободен",
  seraphina: "20_помёт_p_poison_поизэн_свободен",
  orion: "57_помёт_u_ulrich_ульрих_свободен",
  aurora: "48_помёт_k_kiowa_кайова_свободна",
  cassius: "63_помёт_m_mephistopheles_мефистофель_свободен",
  lyra: "75_помёт_q_quicksilver_свободен",
  siriusBlack: "77_помёт_m_manowar_мановар_свободен",
  luna: "59_помёт_p_patriot_патриот_свободен",
  ramesses: "09_помёт_r_ramesses_рамсес_свободен",
  jupiter: "77_помёт_m_manowar_мановар_свободен",
};

// Use local image paths for consistency and reliability
const CAT_IMAGES = {
  heroOne: "assets/images/001.jpg",
  heroTwo: "assets/images/002.jpg",
  heroThree: "assets/images/003.jpg",
  detailOne: "assets/images/001.jpg",
  detailTwo: "assets/images/002.jpg",
  detailThree: "assets/images/cat_three.png",
  detailFour: "assets/images/004.jpg",
  detailFive: "assets/images/005.jpg",
  detailSix: "assets/images/006.jpg",
};

// Video path for hero background
const HERO_VIDEOS = ["assets/video/mainecoons_kittens.mp4", "assets/video/mainecoons_kittens.mp4", "assets/video/mainecoons_kittens.mp4"];

const ui = {
  route: { path: "/", params: new URLSearchParams() },
  cartOpen: false,
  mobileOpen: false,
  filtersOpen: false,
  heroIndex: 0,
  testimonialIndex: 0,
  productPhotoIndex: 0,
  notices: [],
  subscribeStatus: "idle",
  subscribeError: "",
  contactStatus: "idle",
  contactErrors: {},
  checkoutStatus: "idle",
  checkoutOrderId: "",
  checkoutErrors: {},
  filters: {
    gender: "all",
    status: "all",
    color: "all",
    priceMin: 0,
    priceMax: 5000,
    ageMin: 0,
    ageMax: 24,
  },
};

const site = {
  phone: "+380 50 361 3099",
  email: "svn-strs@proton.me",
  emailSecondary: "vitaly.boroda@gmail.com",
  address: "Dnipro, Ukraine",
  instagram: "https://www.instagram.com/mainecoon_cattery_sevenstars/",
  instagramPersonal: "https://www.instagram.com/tatyanaskala/",
};

const slides = [
  { src: CAT_IMAGES.heroOne, video: HERO_VIDEOS[0], alt: "Orange and white Maine Coon portrait" },
  { src: CAT_IMAGES.heroTwo, video: HERO_VIDEOS[1], alt: "Maine Coon resting on a scratching post" },
  { src: CAT_IMAGES.heroThree, video: HERO_VIDEOS[2], alt: "Black silver tabby Maine Coon portrait" },
];

const kittens = [
  {
    id: "k-001",
    name: "Arcturus",
    breed: "Maine Coon",
    color: "Brown Classic Tabby",
    age: 4,
    gender: "male",
    price: 1800,
    status: "available",
    featured: true,
    description: {
      en: "Arcturus is playful, gentle and highly social. He loves company and adapts beautifully to active family life.",
      ua: "Арктурус лагідний, грайливий і дуже соціальний. Він чудово підходить активній родині.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.arcturus, 15),
    pedigree: { father: "GIC SilverCrest Apollo *UA", mother: "IC NorthStar Bella *PL", grandFather: "IC GoldRidge Titan *DE" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-06-10", done: true },
      { name: "Rabies", date: "2024-07-15", done: true },
      { name: "Booster", date: "2024-09-15", done: false },
    ],
    characteristics: { weight: "4.2 kg", eyeColor: "Golden amber", furLength: "Semi-long", pattern: "Classic tabby" },
  },
  {
    id: "k-002",
    name: "Seraphina",
    breed: "Maine Coon",
    color: "Black Silver Tortie",
    age: 3,
    gender: "female",
    price: 2200,
    status: "available",
    featured: true,
    description: {
      en: "Seraphina is elegant, calm and affectionate, with a rare silver-shimmering coat and premium pedigree.",
      ua: "Серафіна елегантна, спокійна й ніжна, з рідкісним сріблястим забарвленням і чудовим родоводом.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.seraphina, 9),
    pedigree: { father: "IC MajesticCoon Shadow *NO", mother: "GIC VelvetPaw Iris *UA", grandFather: "IC NordLynx Rex *SE" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-07-05", done: true },
      { name: "Rabies", date: "2024-08-10", done: true },
      { name: "Booster", date: "2024-10-10", done: false },
    ],
    characteristics: { weight: "3.8 kg", eyeColor: "Emerald green", furLength: "Long", pattern: "Silver tortie" },
  },
  {
    id: "k-003",
    name: "Orion",
    breed: "Maine Coon",
    color: "Blue & White",
    age: 5,
    gender: "male",
    price: 1600,
    status: "reserved",
    featured: false,
    description: {
      en: "Orion is friendly, active and ideal for a large family. He adores toys and interactive play.",
      ua: "Оріон дружній, активний і добре підходить великій родині. Він обожнює ігри та іграшки.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.orion, 8),
    pedigree: { father: "GIC BlueMist Thor *DK", mother: "IC SkyPaw Athena *UA" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-05-01", done: true },
      { name: "Rabies", date: "2024-06-01", done: true },
      { name: "Booster", date: "2024-08-01", done: true },
    ],
    characteristics: { weight: "5.1 kg", eyeColor: "Copper", furLength: "Semi-long", pattern: "Bicolor" },
  },
];

const moreKittens = [
  {
    id: "k-004",
    name: "Aurora",
    breed: "Maine Coon",
    color: "Red Mackerel Tabby",
    age: 3,
    gender: "female",
    price: 1900,
    status: "available",
    featured: true,
    description: {
      en: "Aurora is energetic, bright and endlessly curious, with a striking red coat and confident personality.",
      ua: "Аврора яскрава, енергійна й дуже допитлива, з виразним рудим забарвленням.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.aurora, 12),
    pedigree: { father: "IC SunsetRidge Leo *IT", mother: "IC AmberMane Nala *UA" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-08-01", done: true },
      { name: "Rabies", date: "2024-09-05", done: true },
      { name: "Booster", date: "2024-11-05", done: false },
    ],
    characteristics: { weight: "3.5 kg", eyeColor: "Amber", furLength: "Long", pattern: "Mackerel tabby" },
  },
  {
    id: "k-005",
    name: "Cassius",
    breed: "Maine Coon",
    color: "Black Smoke",
    age: 6,
    gender: "male",
    price: 2500,
    status: "available",
    featured: false,
    description: {
      en: "Cassius has a dramatic black smoke coat with silver depth and a calm, regal presence.",
      ua: "Кассіус має ефектне чорне димчасте хутро зі срібним відтінком і спокійний благородний характер.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.cassius, 12),
    pedigree: { father: "GIC ShadowLord Damien *CZ", mother: "IC MistVeil Elena *UA", grandFather: "IC DarkKnight Loki *PL" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-04-01", done: true },
      { name: "Rabies", date: "2024-05-01", done: true },
      { name: "Booster", date: "2024-07-01", done: true },
    ],
    characteristics: { weight: "6.2 kg", eyeColor: "Yellow-green", furLength: "Long", pattern: "Smoke" },
  },
  {
    id: "k-006",
    name: "Lyra",
    breed: "Maine Coon",
    color: "Cream & White",
    age: 2,
    gender: "female",
    price: 2000,
    status: "sold",
    featured: false,
    description: {
      en: "Lyra is calm, cuddly and affectionate, with soft cream markings and a gentle temperament.",
      ua: "Ліра ніжна, спокійна й дуже лагідна, з м'яким кремовим забарвленням.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.lyra, 12),
    pedigree: { father: "IC PearlCoon Maximus *BE", mother: "IC IvoryPaw Diana *UA" },
    vaccinations: [
      { name: "FVRCP (Combo)", date: "2024-09-01", done: true },
      { name: "Rabies", date: "2024-10-01", done: true },
    ],
    characteristics: { weight: "3.2 kg", eyeColor: "Blue", furLength: "Long", pattern: "Van/bicolor" },
  },
];

const newKittens = [
  {
    id: "k-007",
    name: "Sirius Black",
    breed: "Maine Coon",
    color: "Solid Black",
    age: 2,
    gender: "male",
    price: 2800,
    status: "available",
    featured: true,
    description: {
      en: "Exclusive solid black male with incredible wild look and massive paws. Truly a star in our cattery.",
      ua: "Ексклюзивний повністю чорний котик з неймовірним диким поглядом та масивними лапами.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.siriusBlack, 18),
    pedigree: { father: "WCH Onyx Night *UA", mother: "CH Shadow Pearl *PL" },
    vaccinations: [{ name: "Full Set", date: "2024-09-01", done: true }],
    characteristics: { weight: "3.1 kg", eyeColor: "Deep Gold", furLength: "Long", pattern: "Solid" },
  },
  {
    id: "k-008",
    name: "Luna",
    breed: "Maine Coon",
    color: "Silver Shaded",
    age: 2,
    gender: "female",
    price: 3200,
    status: "available",
    featured: true,
    description: {
      en: "Luna is a rare silver shaded beauty with a very gentle character. High breeding potential.",
      ua: "Луна — рідкісна срібляста красуня з дуже ніжним характером. Високий племінний потенціал.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.luna, 9),
    pedigree: { father: "GIC Moonshine *DE", mother: "IC Star Dust *UA" },
    vaccinations: [{ name: "Full Set", date: "2024-09-10", done: true }],
    characteristics: { weight: "2.8 kg", eyeColor: "Green", furLength: "Long", pattern: "Shaded" },
  },
  {
    id: "k-010",
    name: "Ramesses",
    breed: "Maine Coon",
    color: "Red Tabby & White",
    age: 3,
    gender: "male",
    price: 2600,
    status: "available",
    featured: true,
    description: {
      en: "Ramesses is a bright and regal kitten from our 'R' litter. Exceptional type and a very bold, loving personality.",
      ua: "Рамсес — яскравий і статний котик з нашого 'R' посліду. Винятковий тип і дуже сміливий, люблячий характер.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.ramesses, 8),
    pedigree: { father: "WCH Mars *UA", mother: "CH Venus *PL" },
    vaccinations: [{ name: "First Vaccination", date: "2024-10-15", done: true }],
    characteristics: { weight: "2.4 kg", eyeColor: "Amber", furLength: "Long", pattern: "Mackerel Tabby & White" },
  },
  {
    id: "k-009",
    name: "Jupiter",
    breed: "Maine Coon",
    color: "Red Self",
    age: 3,
    gender: "male",
    price: 2400,
    status: "available",
    featured: true,
    description: {
      en: "Powerful male with a fiery coat and amazing temperament. A true giant in the making.",
      ua: "Потужний котик з вогняним забарвленням та чудовим характером. Справжній майбутній гігант.",
    },
    photos: albumPhotos(ALBUM_FOLDERS.jupiter, 18),
    pedigree: { father: "WCH Mars *UA", mother: "CH Venus *PL" },
    vaccinations: [{ name: "Full Set", date: "2024-10-01", done: true }],
    characteristics: { weight: "4.5 kg", eyeColor: "Copper", furLength: "Long", pattern: "Solid" },
  }
];

kittens.push(...newKittens);

kittens.push(...moreKittens);

const awards = [
  { id: "a-001", title: { en: "Best in Breed", ua: "Кращий у породі" }, show: "WCF World Show", year: 2024, place: "1st Place", kittenName: "SilverCrest Apollo", icon: "🏆" },
  { id: "a-002", title: { en: "Grand Champion", ua: "Гранд Чемпіон" }, show: "FIFe International Show, Prague", year: 2023, place: "GIC Title", kittenName: "VelvetPaw Iris", icon: "🥇" },
  { id: "a-003", title: { en: "Best Cat of Show", ua: "Краща кішка шоу" }, show: "TICA International Show, Kyiv", year: 2023, place: "Supreme Winner", kittenName: "NorthStar Bella", icon: "⭐" },
  { id: "a-004", title: { en: "International Champion", ua: "Інтернаціональний Чемпіон" }, show: "WCF European Cup", year: 2022, place: "IC Title", icon: "🎖" },
  { id: "a-005", title: { en: "Best Maine Coon Breed", ua: "Найкраща порода — Мейн-кун" }, show: "National Cat Show Ukraine", year: 2022, place: "1st Place", icon: "🦁" },
  { id: "a-006", title: { en: "WCF Certificate", ua: "Сертифікат WCF" }, show: "WCF Certified Cattery Program", year: 2021, place: "Certification", icon: "📜" },
];

const testimonials = [
  {
    author: "Maria Kovalenko",
    location: "Kyiv, Ukraine",
    kittenName: "Arcturus",
    rating: 5,
    text: {
      en: "Seven Stars stayed in touch long after pickup. The kitten arrived healthy, socialized and perfectly prepared.",
      ua: "Seven Stars залишались на зв'язку і після переїзду кошеняти. Усе було організовано бездоганно.",
    },
  },
  {
    author: "Thomas Muller",
    location: "Berlin, Germany",
    kittenName: "Seraphina",
    rating: 5,
    text: {
      en: "The transport, paperwork and overall quality were impeccable. A truly professional cattery.",
      ua: "Транспортування, документи й якість розведення були на найвищому рівні. Дуже професійний розплідник.",
    },
  },
  {
    author: "Oleksii Petrenko",
    location: "Lviv, Ukraine",
    kittenName: "Cassius",
    rating: 5,
    text: {
      en: "Excellent socialization and support. This is the third kitten we have chosen from Seven Stars.",
      ua: "Чудова соціалізація та підтримка. Це вже третє кошеня, яке ми обрали в Seven Stars.",
    },
  },
  {
    author: "Sophie Laurent",
    location: "Paris, France",
    kittenName: "Aurora",
    rating: 5,
    text: {
      en: "Impressed by the service quality and the care given to every animal. Strong recommendation.",
      ua: "Вражена рівнем сервісу та турботою про кожну тварину. Щиро рекомендую.",
    },
  },
];

const translations = {
  en: {
    nav: { home: "Home", kittens: "Kittens", about: "About", awards: "Awards", delivery: "Delivery", contacts: "Contact" },
    hero: {
      tagline: "Maine Coon Cattery",
      subtitle: "Where stars are born",
      desc: "Elite Maine Coon breeding with love and dedication. Healthy, socialized kittens with impeccable pedigrees.",
      cta: "View Kittens",
      ctaAbout: "About Us",
    },
    kittens: {
      title: "Available Kittens",
      subtitle: "Every kitten is a little star",
      filter: "Filters",
      gender: "Gender",
      all: "All",
      male: "Male",
      female: "Female",
      status: "Status",
      available: "Available",
      reserved: "Reserved",
      sold: "Sold",
      price: "Price",
      age: "Age",
      months: "mo.",
      reserve: "Reserve",
      noResults: "No kittens found",
      pedigree: "Pedigree",
      vaccinations: "Vaccinations",
      characteristics: "Characteristics",
      related: "Related Kittens",
      father: "Father",
      mother: "Mother",
      weight: "Weight",
      eyeColor: "Eye Color",
      furLength: "Fur Length",
      pattern: "Pattern",
    },
    cart: { title: "Cart", empty: "Your cart is empty", emptyDesc: "Add kittens to continue", total: "Total", checkout: "Checkout", browse: "Browse Kittens", reservation: "Reservation" },
    checkout: {
      title: "Checkout",
      personal: "Personal Details",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      city: "City",
      address: "Address",
      notes: "Notes",
      delivery: "Delivery Method",
      pickup: "Pickup (Dnipro)",
      courier: "Courier (Ukraine)",
      transport: "International Shipping",
      payment: "Payment",
      card: "Visa/Mastercard",
      bank_transfer: "Bank Transfer",
      stripe: "Stripe",
      confirm: "Confirm Order",
      success: "Order Received!",
      successDesc: "We will contact you within 24 hours to confirm your reservation.",
      orderNum: "Order Number",
    },
    about: {
      title: "About Seven Stars",
      subtitle: "Passion born of love for Maine Coon",
      historyTag: "Our story",
      historyText: "Seven Stars cattery was founded in 2015 in Dnipro. Over the years we have raised over 200 kittens who found homes across Ukraine and in many countries worldwide.",
      missionText: "We preserve and improve Maine Coon breed standards, with attention to health, temperament and type. Every kitten is our pride.",
    },
    testimonials: { title: "Our Clients Say", subtitle: "Happiness in every home" },
    delivery: { title: "Delivery & Care", subtitle: "Your kitten in safe hands" },
    contacts: { title: "Contact Us", subtitle: "We are always happy to help", name: "Your Name", email: "Email", message: "Message", send: "Send", success: "Message sent!" },
    wishlist: { title: "Wishlist", empty: "Your wishlist is empty", add: "Add to Wishlist", remove: "Remove from Wishlist" },
    awards: { title: "Our Awards", subtitle: "International recognition" },
    subscribe: { title: "Be the First to Know", subtitle: "Subscribe to get notified about new kittens", placeholder: "Your email", button: "Subscribe", success: "Thank you! You are subscribed." },
    common: { learnMore: "Learn more", backToList: "Back to list", home: "Home", found: "kittens found", reset: "Reset", resetFilters: "Reset filters" },
  },
  ua: {
    nav: { home: "Головна", kittens: "Кошенята", about: "Про нас", awards: "Нагороди", delivery: "Доставка", contacts: "Контакти" },
    hero: {
      tagline: "Розплідник Maine Coon",
      subtitle: "Де народжуються зірки",
      desc: "Елітне розведення мейн-кунів з любов'ю та відданістю. Здорові, соціалізовані кошенята з бездоганним родоводом.",
      cta: "Переглянути кошенят",
      ctaAbout: "Про розплідник",
    },
    kittens: {
      title: "Доступні кошенята",
      subtitle: "Кожне кошеня — це маленька зірка",
      filter: "Фільтри",
      gender: "Стать",
      all: "Всі",
      male: "Хлопчик",
      female: "Дівчинка",
      status: "Статус",
      available: "Доступний",
      reserved: "Заброньований",
      sold: "Проданий",
      price: "Ціна",
      age: "Вік",
      months: "міс.",
      reserve: "Забронювати",
      noResults: "Кошенята не знайдені",
      pedigree: "Родовід",
      vaccinations: "Вакцинація",
      characteristics: "Характеристики",
      related: "Схожі кошенята",
      father: "Батько",
      mother: "Мати",
      weight: "Вага",
      eyeColor: "Колір очей",
      furLength: "Довжина хутра",
      pattern: "Візерунок",
    },
    cart: { title: "Кошик", empty: "Ваш кошик порожній", emptyDesc: "Додайте кошенят, щоб продовжити", total: "Всього", checkout: "Оформити замовлення", browse: "Переглянути кошенят", reservation: "Бронювання" },
    checkout: {
      title: "Оформлення замовлення",
      personal: "Особисті дані",
      firstName: "Ім'я",
      lastName: "Прізвище",
      email: "Email",
      phone: "Телефон",
      country: "Країна",
      city: "Місто",
      address: "Адреса",
      notes: "Примітки",
      delivery: "Спосіб отримання",
      pickup: "Самовивіз (Дніпро)",
      courier: "Кур'єр по Україні",
      transport: "Міжнародна доставка",
      payment: "Оплата",
      card: "Картка Visa/Mastercard",
      bank_transfer: "Банківський переказ",
      stripe: "Stripe",
      confirm: "Підтвердити замовлення",
      success: "Замовлення прийнято!",
      successDesc: "Ми зв'яжемося з вами протягом 24 годин для підтвердження бронювання.",
      orderNum: "Номер замовлення",
    },
    about: {
      title: "Про Seven Stars",
      subtitle: "Пристрасть, народжена із любові до Maine Coon",
      historyTag: "Наша історія",
      historyText: "Розплідник Seven Stars був заснований у 2015 році в Дніпрі. За ці роки ми виростили понад 200 кошенят, які знайшли домівки в Україні та за її межами.",
      missionText: "Ми прагнемо зберегти та покращити стандарти породи Maine Coon, приділяючи особливу увагу здоров'ю, темпераменту та типу.",
    },
    testimonials: { title: "Відгуки наших клієнтів", subtitle: "Щастя у кожному домі" },
    delivery: { title: "Доставка та догляд", subtitle: "Ваше кошеня в безпеці" },
    contacts: { title: "Зв'яжіться з нами", subtitle: "Ми завжди раді відповісти", name: "Ваше ім'я", email: "Email", message: "Повідомлення", send: "Надіслати", success: "Повідомлення надіслано!" },
    wishlist: { title: "Обране", empty: "Список обраного порожній", add: "До обраного", remove: "З обраного" },
    awards: { title: "Наші нагороди", subtitle: "Визнання на міжнародному рівні" },
    subscribe: { title: "Будьте першими", subtitle: "Підпишіться, щоб отримати сповіщення про нові кошенята", placeholder: "Ваш email", button: "Підписатися", success: "Дякуємо! Ви підписані." },
    common: { learnMore: "Детальніше", backToList: "Назад до списку", home: "Головна", found: "кошенят знайдено", reset: "Скинути", resetFilters: "Скинути фільтри" },
  },
};

const deliverySteps = [
  {
    en: { title: "Choose your kitten", desc: "Browse the catalog and choose your favorite. Contact us for more information." },
    ua: { title: "Оберіть кошеня", desc: "Перегляньте каталог та оберіть свого улюбленця. Зв'яжіться з нами для деталей." },
  },
  {
    en: { title: "Reserve", desc: "Make a deposit to reserve. We will prepare all documents." },
    ua: { title: "Забронюйте", desc: "Внесіть передоплату для бронювання. Ми підготуємо всі документи." },
  },
  {
    en: { title: "Preparation", desc: "Vaccination, vet passport, microchip and health check." },
    ua: { title: "Підготовка", desc: "Вакцинація, ветеринарний паспорт, мікрочіп та перевірка здоров'я." },
  },
  {
    en: { title: "Delivery", desc: "International shipping, courier in Ukraine or pickup in Kyiv." },
    ua: { title: "Доставка", desc: "Міжнародна доставка, кур'єр по Україні або самовивіз у Києві." },
  },
];

const deliveryOptions = [
  { price: "0 €", en: { title: "Pickup (Dnipro)", desc: "Free. We will meet at a convenient location for you." }, ua: { title: "Самовивіз (Дніпро)", desc: "Безкоштовно. Зустрінемось у зручній для вас локації." } },
  { price: "20–50 €", en: { title: "Courier (Ukraine)", desc: "Nova Poshta or Ukrposhta. 1–3 days." }, ua: { title: "Кур'єр по Україні", desc: "Нова Пошта або Укрпошта. Термін 1–3 дні." } },
  { price: "150–400 €", en: { title: "International", desc: "To 30+ countries. Cargo or accompanied hand luggage." }, ua: { title: "Міжнародна доставка", desc: "До 30+ країн. Карго або ручна поклажа у супроводі." } },
];

const stats = [
  { value: "200+", en: "Kittens raised", ua: "Кошенят виховано" },
  { value: "15", en: "Countries", ua: "Країн світу" },
  { value: "9", en: "Years of experience", ua: "Років досвіду" },
  { value: "24+", en: "International awards", ua: "Міжнародних нагород" },
];

const features = [
  { en: { title: "Health guaranteed", desc: "Vet passport, vaccination, microchip" }, ua: { title: "Здоров'я гарантовано", desc: "Ветеринарний паспорт, вакцинація, мікрочіп" } },
  { en: { title: "WCF/FIFe pedigree", desc: "Official pedigree to international standard" }, ua: { title: "Родовід WCF/FIFe", desc: "Офіційний родовід міжнародного стандарту" } },
  { en: { title: "Lifetime support", desc: "Consultations and support for life" }, ua: { title: "Підтримка після", desc: "Консультації та підтримка протягом усього життя" } },
  { en: { title: "Show quality", desc: "Kittens with show and breeding potential" }, ua: { title: "Виставкова якість", desc: "Кошенята з потенціалом для виставок і розведення" } },
];

function t() {
  return translations[store.getState().locale];
}

function icon(name) {
  const icons = { // Removed explicit width/height from SVG for CSS control
    menu: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 6l12 12M18 6L6 18"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7-4.35-9.33-8.28C.9 9.75 2.08 5.52 5.76 4.33 8.12 3.56 10.2 4.28 12 6.2c1.8-1.92 3.88-2.64 6.24-1.87 3.68 1.19 4.86 5.42 3.09 8.39C19 16.65 12 21 12 21Z"/></svg>',
    bag: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 0 1 6 0"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M19 12H5M11 5l-7 7 7 7"/></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M15 18l-6-6 6-6"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M9 18l6-6-6-6"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6"/></svg>',
    quote: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 6C7 8 6 10 6 13h5a4 4 0 0 1-4 5M21 6c-4 2-5 4-5 7h5a4 4 0 0 1-4 5"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 2 3.1 6.4 7 1-5 4.9 1.2 6.9L12 18l-6.3 3.2 1.2-6.9-5-4.9 7-1L12 2Z"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M20 6 9 17l-5-5"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6A2 2 0 0 1 22 16.9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" d="m4 7 8 6 8-6"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8h3V3h-3a5 5 0 0 0-5 5v3H6v5h3v5h5v-5h3l1-5h-4V8a1 1 0 0 1 1-1Z"/></svg>',
  };
  return `<span class="icon">${icons[name] || ""}</span>`;
}

function getKitten(id) {
  return kittens.find((item) => item.id === id);
}

function getCartKittens() {
  return store.getState().cart.map(getKitten).filter(Boolean);
}

function formatPrice(value) {
  return `€${value.toLocaleString("en-US")}`;
}

function formatAge(months, locale) {
  if (locale === "ua") {
    if (months < 12) return `${months} міс.`;
    const years = Math.floor(months / 12);
    const rest = months % 12;
    return rest ? `${years} р. ${rest} міс.` : `${years} р.`;
  }
  if (months < 12) return `${months} mo.`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return rest ? `${years} yr. ${rest} mo.` : `${years} yr.`;
}

function orderId() {
  return `SS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function notice(message) {
  ui.notices = [...ui.notices, { id: Date.now(), message }];
  render();
  window.setTimeout(() => {
    ui.notices = ui.notices.slice(1);
    render();
  }, 2200);
}

function statusLabel(status, locale) {
  return translations[locale].kittens[status];
}

function navLinks(includeHome = true) {
  const strings = t();
  const items = [
    { href: "/", label: strings.nav.home },
    { href: "/kittens", label: strings.nav.kittens },
    { href: "/about", label: strings.nav.about },
    { href: "/awards", label: strings.nav.awards },
    { href: "/delivery", label: strings.nav.delivery },
    { href: "/contacts", label: strings.nav.contacts },
  ];
  return includeHome ? items : items.slice(1);
}

function pageHeader(title, subtitle) {
  return `
    <section class="page-header page-pad">
      <div class="container center">
        <span class="section-tag">${subtitle}</span>
        <h1 class="page-header-title">${title}</h1>
      </div>
    </section>
  `;
}

function routeMeta() {
  const locale = store.getState().locale;
  const baseTitle = locale === "ua" ? "Seven Stars | Розплідник Maine Coon" : "Seven Stars | Maine Coon Cattery";

  if (ui.route.path === "/") {
    return {
      title: baseTitle,
      description: locale === "ua"
        ? "Seven Stars — розплідник Maine Coon. Доступні кошенята, доставка, нагороди та контакти."
        : "Seven Stars Maine Coon cattery. Available kittens, delivery information, awards and contact details.",
      image: slides[0].src,
    };
  }
  if (ui.route.path === "/about") {
    return {
      title: locale === "ua" ? "Про нас | Seven Stars" : "About | Seven Stars",
      description: locale === "ua"
        ? "Історія, місія та стандарти розведення Seven Stars Maine Coon."
        : "Learn about the Seven Stars story, mission and breeding standards.",
      image: CAT_IMAGES.detailThree,
    };
  }
  if (ui.route.path === "/awards") {
    return {
      title: "Awards | Seven Stars",
      description: locale === "ua"
        ? "Міжнародні нагороди та визнання розплідника Seven Stars."
        : "International awards and recognition earned by Seven Stars.",
      image: CAT_IMAGES.heroThree,
    };
  }
  if (ui.route.path === "/delivery") {
    return {
      title: locale === "ua" ? "Доставка | Seven Stars" : "Delivery | Seven Stars",
      description: locale === "ua"
        ? "Варіанти доставки, підготовка кошеняти та супровід після бронювання."
        : "Delivery options, preparation steps and support after reservation.",
      image: CAT_IMAGES.detailOne,
    };
  }
  if (ui.route.path === "/contacts") {
    return {
      title: locale === "ua" ? "Контакти | Seven Stars" : "Contacts | Seven Stars",
      description: locale === "ua"
        ? "Зв'яжіться з Seven Stars щодо бронювання або консультації."
        : "Contact Seven Stars about reservations, questions and consultations.",
      image: CAT_IMAGES.detailSix,
    };
  }
  if (ui.route.path === "/kittens") {
    return {
      title: locale === "ua" ? "Кошенята | Seven Stars" : "Kittens | Seven Stars",
      description: locale === "ua"
        ? "Каталог доступних кошенят Maine Coon із фільтрами за статтю, статусом, віком та кольором."
        : "Browse available Maine Coon kittens with filters by gender, status, age and color.",
      image: filteredKittens()[0]?.photos[0] || CAT_IMAGES.heroOne,
    };
  }
  if (ui.route.path.startsWith("/kittens/")) {
    const kitten = getKitten(ui.route.path.split("/")[2]);
    return kitten
      ? {
          title: `${kitten.name} | Seven Stars`,
          description: `${kitten.breed} • ${kitten.color} • ${formatAge(kitten.age, locale)} • ${locale === "ua" ? "деталі, родовід та вакцинація" : "details, pedigree and vaccination status"}.`,
          image: kitten.photos[0],
        }
      : {
          title: "404 | Seven Stars",
          description: locale === "ua" ? "Сторінку не знайдено." : "Page not found.",
          image: CAT_IMAGES.heroTwo,
        };
  }
  if (ui.route.path === "/checkout") {
    return {
      title: locale === "ua" ? "Оформлення | Seven Stars" : "Checkout | Seven Stars",
      description: locale === "ua"
        ? "Оформлення бронювання кошенят Seven Stars."
        : "Complete your Seven Stars kitten reservation.",
      image: getCartKittens()[0]?.photos[0] || CAT_IMAGES.heroOne,
    };
  }
  if (ui.route.path === "/privacy") {
    return {
      title: locale === "ua" ? "Конфіденційність | Seven Stars" : "Privacy | Seven Stars",
      description: locale === "ua" ? "Політика конфіденційності Seven Stars." : "Seven Stars privacy policy.",
      image: CAT_IMAGES.detailTwo,
    };
  }
  if (ui.route.path === "/terms") {
    return {
      title: locale === "ua" ? "Умови | Seven Stars" : "Terms | Seven Stars",
      description: locale === "ua" ? "Умови бронювання та використання сайту Seven Stars." : "Reservation and website terms for Seven Stars.",
      image: CAT_IMAGES.detailThree,
    };
  }
  return {
    title: "404 | Seven Stars",
    description: locale === "ua" ? "Сторінку не знайдено." : "Page not found.",
    image: CAT_IMAGES.heroTwo,
  };
}

function updateMeta() {
  const meta = routeMeta();
  document.title = meta.title;
  document.documentElement.lang = store.getState().locale === "ua" ? "uk" : "en";

  const setMetaTag = (selector, attribute, value) => {
    let tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      const match = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (match) tag.setAttribute(match[1], match[2]);
      document.head.appendChild(tag);
    }
    tag.setAttribute(attribute, value);
  };

  setMetaTag('meta[name="description"]', "content", meta.description);
  setMetaTag('meta[property="og:title"]', "content", meta.title);
  setMetaTag('meta[property="og:description"]', "content", meta.description);
  setMetaTag('meta[property="og:image"]', "content", meta.image);
  setMetaTag('meta[name="twitter:title"]', "content", meta.title);
  setMetaTag('meta[name="twitter:description"]', "content", meta.description);
  setMetaTag('meta[name="twitter:image"]', "content", meta.image);
}

function heroSlideMarkup() {
  const current = slides[ui.heroIndex];
  const strings = t();
  return `
    <section class="hero">
      <div class="hero-bg"> 
        <video class="hero-video" autoplay muted loop playsinline preload="auto" poster="${current.src}">
          <source src="${current.video}" type="video/mp4">
        </video>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content container reveal-up">
        <span class="hero-tag">✦ ${strings.hero.tagline}</span>
        <h1 class="hero-title">Seven <span>Stars</span></h1>
        <p class="hero-subtitle">${strings.hero.subtitle}</p>
        <p class="hero-desc">${strings.hero.desc}</p>
        <div class="hero-actions">
          <a href="#/kittens" data-link class="btn btn-primary">${strings.hero.cta}</a>
          <a href="#/about" data-link class="btn btn-outline light">${strings.hero.ctaAbout}</a>
        </div>
      </div>
      <div class="hero-nav">
        <button type="button" data-action="hero-prev" class="hero-nav-btn">${icon("chevronLeft")}</button>
        <span>${String(ui.heroIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}</span>
        <button type="button" data-action="hero-next" class="hero-nav-btn">${icon("chevronRight")}</button>
      </div>
      <div class="hero-dots">
        ${slides.map((_, index) => `<button type="button" data-action="hero-dot" data-index="${index}" class="hero-dot ${index === ui.heroIndex ? "active" : ""}"></button>`).join("")}
      </div>
      <div class="hero-scroll">Scroll ${icon("chevronDown")}</div>
    </section>
  `;
}

function aboutSectionMarkup() {
  const locale = store.getState().locale;
  const strings = t();
  return `
    <section class="section section-white">
      <div class="container">
        <div class="about-grid">
          <div>
            <span class="section-tag">${strings.about.historyTag}</span>
            <h2 class="section-title">${strings.about.title}</h2>
            <p class="section-subtitle">${strings.about.subtitle}</p>
            <p class="body-copy">${strings.about.historyText}</p>
            <p class="body-copy">${strings.about.missionText}</p>
            <div class="cert-list"><span>WCF</span><span>FIFe</span><span>TICA</span><span>UAFA</span></div>
          </div>
          <div class="about-visual reveal-up">
            <img src="${CAT_IMAGES.detailThree}" alt="Maine Coon cattery portrait" loading="lazy" decoding="async">
            <div class="about-badge"><strong>2015</strong><span>${locale === "ua" ? "Рік заснування" : "Founded"}</span></div>
          </div>
        </div>
        <div class="stats-grid">
          ${stats.map((item) => `<article class="stat-card reveal-up"><strong>${item.value}</strong><span>${item[locale]}</span></article>`).join("")}
        </div>
        <div class="feature-grid">
          ${features.map((item) => `<article class="feature-card reveal-up"><div class="feature-icon">✦</div><h3>${item[locale].title}</h3><p>${item[locale].desc}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function kittenCardMarkup(kitten) {
  const locale = store.getState().locale;
  const strings = t();
  const wished = store.getState().wishlist.includes(kitten.id);
  const inCart = store.getState().cart.includes(kitten.id);
  return `
    <article class="kitten-card reveal-up" data-href="#/kittens/${kitten.id}" role="link" tabindex="0" aria-label="${kitten.name}"> 
      <div class="kitten-card-image">
        <a href="#/kittens/${kitten.id}" data-link aria-label="${kitten.name}"><img src="${kitten.photos[0]}" alt="${kitten.name}" loading="lazy" decoding="async"></a>
        <div class="kitten-overlay"></div>
        <div class="kitten-top">
          <span class="badge badge-${kitten.status}">${statusLabel(kitten.status, locale)}</span>
          <button type="button" data-action="toggle-wishlist" data-id="${kitten.id}" class="icon-btn ${wished ? "active" : ""}">${icon("heart")}</button>
        </div>
        ${kitten.status === "available" ? `<div class="kitten-actions"><button type="button" data-action="add-cart" data-id="${kitten.id}" class="btn btn-dark small ${inCart ? "is-disabled" : ""}" ${inCart ? "disabled" : ""}>${icon("bag")} ${inCart ? "In Cart" : strings.kittens.reserve}</button><a href="#/kittens/${kitten.id}" data-link class="icon-link">${icon("arrowRight")}</a></div>` : ""}
      </div>
      <div class="kitten-card-body">
        <div class="kitten-row"><a href="#/kittens/${kitten.id}" data-link class="kitten-name">${kitten.name}</a><span class="kitten-price">${formatPrice(kitten.price)}</span></div>
        <div class="kitten-meta">${kitten.color} <span>•</span> ${formatAge(kitten.age, locale)} <span>•</span> ${strings.kittens[kitten.gender]}</div>
      </div>
    </article>
  `;
}

function featuredSectionMarkup() {
  const strings = t();
  return `
    <section class="section section-cream">
      <div class="container">
        <div class="section-head">
          <div><span class="section-tag">${strings.kittens.subtitle}</span><h2 class="section-title">${strings.kittens.title}</h2></div>
          <a href="#/kittens" data-link class="btn btn-outline">${strings.common.learnMore} ${icon("arrowRight")}</a>
        </div>
        <div class="card-grid">${kittens.filter((item) => item.featured).map(kittenCardMarkup).join("")}</div>
      </div>
    </section>
  `;
}

function awardsSectionMarkup(showHeaderLink = true) {
  const locale = store.getState().locale;
  const strings = t();
  return `
    <section class="section section-awards">
      <div class="container">
        <div class="section-head">
          <div><span class="section-tag">${strings.awards.subtitle}</span><h2 class="section-title">${strings.awards.title}</h2></div>
          ${showHeaderLink ? `<a href="#/awards" data-link class="btn btn-outline">${locale === "ua" ? "Всі нагороди" : "All awards"} ${icon("arrowRight")}</a>` : ""}
        </div>
        <div class="awards-grid">
          ${awards.map((award) => `<article class="award-card reveal-up"><span class="award-emoji">${award.icon}</span><div><h3>${award.title[locale]}</h3><p>${award.show}</p><div class="award-meta"><strong>${award.place}</strong><span>${award.year}</span></div>${award.kittenName ? `<small>${award.kittenName}</small>` : ""}</div></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function testimonialsMarkup() {
  const locale = store.getState().locale;
  const strings = t();
  const item = testimonials[ui.testimonialIndex];
  return `
    <section class="section section-dark">
      <div class="container narrow">
        <div class="section-center"><span class="section-tag">${strings.testimonials.subtitle}</span><h2 class="section-title light">${strings.testimonials.title}</h2></div>
        <div class="testimonial-box reveal-up">
          <div class="testimonial-quote">${icon("quote")}</div>
          <div class="testimonial-stars">${Array.from({ length: item.rating }).map(() => `<span class="star">${icon("star")}</span>`).join("")}</div>
          <blockquote>"${item.text[locale]}"</blockquote>
          <div class="testimonial-author"><div class="avatar">${item.author.split(" ").map((word) => word[0]).join("").slice(0, 2)}</div><strong>${item.author}</strong><span>${item.location}</span><small>${locale === "ua" ? `Власник: ${item.kittenName}` : `Owner of: ${item.kittenName}`}</small></div>
          <div class="testimonial-controls">
            <button type="button" data-action="testimonial-prev" class="hero-nav-btn">${icon("chevronLeft")}</button>
            <div class="hero-dots inline">${testimonials.map((_, index) => `<button type="button" data-action="testimonial-dot" data-index="${index}" class="hero-dot ${index === ui.testimonialIndex ? "active" : ""}"></button>`).join("")}</div>
            <button type="button" data-action="testimonial-next" class="hero-nav-btn">${icon("chevronRight")}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function deliveryMarkup() {
  const locale = store.getState().locale;
  const strings = t();
  return `
    <section class="section section-cream">
      <div class="container">
        <div class="section-center"><span class="section-tag">${strings.delivery.subtitle}</span><h2 class="section-title">${strings.delivery.title}</h2></div>
        <div class="steps-grid">
          ${deliverySteps.map((step, index) => `<article class="step-card reveal-up"><div class="step-number">${String(index + 1).padStart(2, "0")}</div><h3>${step[locale].title}</h3><p>${step[locale].desc}</p></article>`).join("")}
        </div>
        <div class="delivery-grid">
          ${deliveryOptions.map((item) => `<article class="delivery-card reveal-up"><h3>${item[locale].title}</h3><p>${item[locale].desc}</p><strong>${item.price}</strong></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function field(name, label, type, errors) {
  return `<div><label>${label}</label><input type="${type}" name="${name}">${errors[name] ? `<small class="error">${errors[name]}</small>` : ""}</div>`;
}

function checkoutField(name, label, type) {
  return `<div><label>${label}</label><input type="${type}" name="${name}">${ui.checkoutErrors[name] ? `<small class="error">${ui.checkoutErrors[name]}</small>` : ""}</div>`;
}

function subscribeMarkup() {
  const strings = t();
  if (ui.subscribeStatus === "success") {
    return `<div class="subscribe-success">${icon("check")} <p>${strings.subscribe.success}</p></div>`;
  }
  return `<form id="subscribe-form" class="subscribe-form"><div class="subscribe-field"><input type="email" name="email" placeholder="${strings.subscribe.placeholder}">${ui.subscribeError ? `<small class="error">${ui.subscribeError}</small>` : ""}</div><button type="submit" class="btn btn-light">${strings.subscribe.button} ${icon("arrowRight")}</button></form>`;
}

function footerMarkup() {
  const strings = t();
  return `
    <footer class="site-footer"> 
      <div class="footer-subscribe"><div class="container footer-subscribe-grid"><div><h3>${strings.subscribe.title}</h3><p>${strings.subscribe.subtitle}</p></div>${subscribeMarkup()}</div></div>
      <div class="container footer-main">
        <div class="footer-grid">
          <div><div class="footer-brand">✦ Seven Stars</div><p class="footer-tag">Maine Coon Cattery</p><p class="footer-copy">WCF • FIFe • TICA<br>Since 2015</p></div>
          <div><h4>Navigation</h4><ul>${navLinks(false).map((item) => `<li><a href="#${item.href}" data-link>${item.label}</a></li>`).join("")}</ul></div>
          <div><h4>${strings.contacts.title}</h4><ul class="footer-contact"><li>${icon("phone")} <a href="tel:${site.phone.replace(/\s/g, '')}">${site.phone}</a></li><li>${icon("mail")} <a href="mailto:${site.email}">${site.email}</a></li><li>${icon("map")} <span>${site.address}</span></li></ul></div>
          <div><h4>Social</h4><div class="socials"><a href="${site.instagram}" target="_blank" rel="noreferrer">${icon("instagram")}</a><a href="${site.instagramPersonal}" target="_blank" rel="noreferrer">${icon("instagram")}</a><a href="mailto:${site.email}">${icon("mail")}</a></div></div>
        </div>
        <div class="footer-bottom"><p>© ${new Date().getFullYear()} Seven Stars Maine Coon Cattery. All rights reserved.</p><div><a href="#/privacy" data-link>Privacy Policy</a><a href="#/terms" data-link>Terms</a></div></div>
      </div>
    </footer>
  `;
}

function headerMarkup() {
  const state = store.getState();
  const darkIntroRoutes = ["/", "/kittens", "/awards", "/delivery", "/contacts", "/privacy", "/terms"];
  const dark = darkIntroRoutes.includes(ui.route.path) && window.scrollY < 40; // Logic for dark header on initial load
  return `
    <header class="site-header ${window.scrollY > 40 ? "scrolled" : ""} ${dark ? "dark" : ""}">
      <div class="container nav-wrap">
        <a href="#/" data-link class="brand"><strong>✦ Seven Stars</strong><span>Maine Coon Cattery</span></a>
        <nav class="desktop-nav">${navLinks(false).map((item) => `<a href="#${item.href}" data-link class="${ui.route.path === item.href ? "active" : ""}">${item.label}</a>`).join("")}</nav>
        <div class="nav-actions">
          <button type="button" data-action="toggle-locale" class="lang-btn">${state.locale === "ua" ? "EN" : "UA"}</button>
          <a href="#/kittens?tab=wishlist" data-link class="nav-icon">${icon("heart")}${state.wishlist.length ? `<span class="count">${state.wishlist.length}</span>` : ""}</a>
          <button type="button" data-action="open-cart" class="nav-icon">${icon("bag")}${state.cart.length ? `<span class="count dark">${state.cart.length}</span>` : ""}</button>
          <button type="button" data-action="toggle-mobile" class="nav-icon mobile-only">${ui.mobileOpen ? icon("close") : icon("menu")}</button>
        </div>
      </div>
      ${ui.mobileOpen ? `<div class="mobile-nav"><div class="mobile-backdrop" data-action="toggle-mobile"></div><nav class="mobile-panel">${navLinks(false).map((item) => `<a href="#${item.href}" data-link>${item.label}</a>`).join("")}<button type="button" data-action="toggle-locale" class="lang-btn wide">${state.locale === "ua" ? "EN" : "UA"}</button></nav></div>` : ""}
    </header>
  `;
}

function cartDrawerMarkup() {
  const strings = t();
  const items = getCartKittens();
  const total = items.reduce((sum, item) => sum + item.price, 0);
  if (!ui.cartOpen) return "";
  return `
    <div class="drawer-layer">
      <div class="drawer-backdrop" data-action="close-cart"></div>
      <aside class="cart-drawer">
        <div class="drawer-header"><div><h2>${strings.cart.title}</h2>${items.length ? `<span>(${items.length})</span>` : ""}</div><button type="button" data-action="close-cart" class="nav-icon">${icon("close")}</button></div>
        <div class="drawer-body">
          ${items.length ? `<ul class="drawer-list">${items.map((kitten) => `<li><a href="#/kittens/${kitten.id}" data-link><img src="${kitten.photos[0]}" alt="${kitten.name}" loading="lazy" decoding="async"></a><div><a href="#/kittens/${kitten.id}" data-link class="drawer-name">${kitten.name}</a><p>${kitten.color}</p><div class="drawer-row"><strong>${formatPrice(kitten.price)}</strong><span>${strings.cart.reservation}</span></div></div><button type="button" data-action="remove-cart" data-id="${kitten.id}" class="remove-btn">${icon("trash")}</button></li>`).join("")}</ul>` : `<div class="drawer-empty"><div class="empty-icon">${icon("bag")}</div><h3>${strings.cart.empty}</h3><p>${strings.cart.emptyDesc}</p><a href="#/kittens" data-link class="btn btn-outline">${strings.cart.browse}</a></div>`}
        </div>
        ${items.length ? `<div class="drawer-footer"><div class="summary-total"><span>${strings.cart.total}</span><strong>${formatPrice(total)}</strong></div><a href="#/checkout" data-link class="btn btn-primary full">${strings.cart.checkout} ${icon("arrowRight")}</a></div>` : ""} 
      </aside>
    </div>
  `;
}

function notFoundPage() {
  return `<section class="empty-page"><div class="empty-box"><p class="code-404">404</p><h1>Page not found</h1><p>The page you are looking for does not exist or has been moved.</p><a href="#/" data-link class="btn btn-primary">Go Home</a></div></section>`;
}

function homePage() {
  return `${heroSlideMarkup()}${aboutSectionMarkup()}${featuredSectionMarkup()}${awardsSectionMarkup(true)}${testimonialsMarkup()}${deliveryMarkup()}`;
}

function aboutPage() {
  return `<div class="page-pad">${aboutSectionMarkup()}${testimonialsMarkup()}</div>`;
}

function awardsPage() {
  return `${pageHeader("Awards", t().awards.subtitle)}${awardsSectionMarkup(false)}`;
}

function deliveryPage() {
  return `${pageHeader("Delivery & Care", t().delivery.subtitle)}${deliveryMarkup()}`;
}

function contactsPage() {
  const locale = store.getState().locale;
  const strings = t();
  return `
    ${pageHeader(strings.contacts.title, strings.contacts.subtitle)}
    <section class="section section-cream page-pad">
      <div class="container contact-grid">
        <div class="contact-panel reveal-up">
          <h2>${locale === "ua" ? "Як нас знайти" : "Find us"}</h2>
          <ul class="contact-list">
            <li>${icon("phone")} <div><span>${locale === "ua" ? "Телефон" : "Phone"}</span><a href="tel:${site.phone.replace(/\s/g, '')}">${site.phone}</a></div></li>
            <li>${icon("mail")} <div><span>Email</span><a href="mailto:${site.email}">${site.email}</a></div></li>
            <li>${icon("mail")} <div><span>Email (Vitaly)</span><a href="mailto:${site.emailSecondary}">${site.emailSecondary}</a></div></li>
            <li>${icon("map")} <div><span>${locale === "ua" ? "Адреса" : "Address"}</span><p>${site.address}</p></div></li>
            <li>${icon("instagram")} <div><span>Instagram</span><a href="${site.instagram}" target="_blank" rel="noreferrer">@mainecoon_cattery_sevenstars</a></div></li>
          </ul>
        </div>
        <div class="form-panel reveal-up">
          <h2>${locale === "ua" ? "Надіслати повідомлення" : "Send a message"}</h2>
          ${ui.contactStatus === "success" ? `<div class="success-box">${icon("check")}<h3>${strings.contacts.success}</h3><p>${locale === "ua" ? "Ми відповімо вам найближчим часом." : "We will reply to you shortly."}</p></div>` : `<form id="contact-form" class="stack-form">${field("name", strings.contacts.name, "text", ui.contactErrors)}${field("email", strings.contacts.email, "email", ui.contactErrors)}<div><label>${strings.contacts.message}</label><textarea name="message" rows="7" placeholder="${locale === "ua" ? "Ваше повідомлення..." : "Your message..."}"></textarea>${ui.contactErrors.message ? `<small class="error">${ui.contactErrors.message}</small>` : ""}</div><button class="btn btn-primary full" type="submit">${strings.contacts.send}</button></form>`}
        </div>
      </div>
    </section>
  `;
}

function filteredKittens() {
  const tab = ui.route.params.get("tab");
  let list = kittens.slice();
  if (tab === "wishlist") {
    list = list.filter((item) => store.getState().wishlist.includes(item.id));
  }
  return list.filter((item) => {
    if (ui.filters.gender !== "all" && item.gender !== ui.filters.gender) return false;
    if (ui.filters.status !== "all" && item.status !== ui.filters.status) return false;
    if (ui.filters.color !== "all" && item.color !== ui.filters.color) return false;
    if (item.price < ui.filters.priceMin || item.price > ui.filters.priceMax) return false;
    if (item.age < ui.filters.ageMin || item.age > ui.filters.ageMax) return false;
    return true;
  });
}

function kittensPage() {
  const strings = t();
  const results = filteredKittens();
  const colors = ["all", ...new Set(kittens.map((item) => item.color))];
  const defaults = { gender: "all", status: "all", color: "all", priceMin: 0, priceMax: 5000, ageMin: 0, ageMax: 24 };
  const activeCount = Object.keys(ui.filters).filter((key) => ui.filters[key] !== defaults[key]).length;
  return `
    ${pageHeader(strings.kittens.title, strings.kittens.subtitle)}
    <section class="section section-cream page-pad">
      <div class="container">
        <div class="filter-bar"><p>${results.length} ${strings.common.found}</p><div class="filter-actions">${activeCount ? `<button type="button" data-action="reset-filters" class="text-btn">${strings.common.reset} (${activeCount})</button>` : ""}<button type="button" data-action="toggle-filters" class="filter-toggle ${ui.filtersOpen ? "active" : ""}">${strings.kittens.filter}</button></div></div>
        ${ui.filtersOpen ? `<div class="filters-panel reveal"><div><label>${strings.kittens.gender}</label><div class="chip-group">${["all", "male", "female"].map((value) => `<button type="button" data-action="set-filter" data-key="gender" data-value="${value}" class="chip ${ui.filters.gender === value ? "active" : ""}">${strings.kittens[value]}</button>`).join("")}</div></div><div><label>${strings.kittens.status}</label><div class="chip-group">${["all", "available", "reserved", "sold"].map((value) => `<button type="button" data-action="set-filter" data-key="status" data-value="${value}" class="chip ${ui.filters.status === value ? "active" : ""}">${strings.kittens[value]}</button>`).join("")}</div></div><div><label>${strings.kittens.price}: €${ui.filters.priceMin} - €${ui.filters.priceMax}</label><input type="range" min="0" max="5000" step="100" value="${ui.filters.priceMin}" data-action="range-filter" data-key="priceMin"><input type="range" min="0" max="5000" step="100" value="${ui.filters.priceMax}" data-action="range-filter" data-key="priceMax"></div><div><label>${strings.kittens.age}: ${ui.filters.ageMin} - ${ui.filters.ageMax} ${strings.kittens.months}</label><input type="range" min="0" max="24" step="1" value="${ui.filters.ageMax}" data-action="range-filter" data-key="ageMax"></div><div><label>Color</label><select data-action="select-filter" data-key="color">${colors.map((value) => `<option value="${value}" ${ui.filters.color === value ? "selected" : ""}>${value}</option>`).join("")}</select></div></div>` : ""}
        ${results.length ? `<div class="card-grid">${results.map(kittenCardMarkup).join("")}</div>` : `<div class="empty-state"><div class="empty-box"><h2>${strings.kittens.noResults}</h2><button type="button" data-action="reset-filters" class="btn btn-outline">${strings.common.resetFilters}</button></div></div>`}
      </div>
    </section>
  `;
}

function productPage(id) {
  const locale = store.getState().locale;
  const strings = t();
  const kitten = getKitten(id);
  if (!kitten) return notFoundPage();
  const inCart = store.getState().cart.includes(id);
  const wished = store.getState().wishlist.includes(id);
  const photos = kitten.photos;
  const related = kittens.filter((item) => item.id !== id && item.status !== "sold").slice(0, 3);
  const photo = photos[ui.productPhotoIndex] || photos[0];
  return `
    <section class="section section-cream page-pad product-page"> 
      <div class="container">
        <nav class="crumbs"><a href="#/" data-link>${strings.common.home}</a><span>/</span><a href="#/kittens" data-link>${strings.nav.kittens}</a><span>/</span><span>${kitten.name}</span></nav>
        <div class="product-grid">
          <div class="product-gallery reveal-up">
            <div class="product-main-shell">
              <div class="product-main">
                <img src="${photo}" alt="${kitten.name}" loading="eager" decoding="async" fetchpriority="high">
                <span class="badge badge-${kitten.status} large">${statusLabel(kitten.status, locale)}</span>
                ${photos.length > 1 ? `<button type="button" data-action="product-prev-photo" data-id="${id}" class="gallery-nav left">${icon("chevronLeft")}</button><button type="button" data-action="product-next-photo" data-id="${id}" class="gallery-nav right">${icon("chevronRight")}</button>` : ""}
              </div>
            </div>
            <div class="thumb-row">${photos.map((src, index) => `<button type="button" data-action="product-photo" data-id="${id}" data-index="${index}" class="thumb ${index === ui.productPhotoIndex ? "active" : ""}"><img src="${src}" alt="" loading="lazy" decoding="async"></button>`).join("")}</div>
          </div>
          <div class="product-info reveal-up">
            <a href="#/kittens" data-link class="back-link">${icon("arrowLeft")} ${strings.common.backToList}</a>
            <h1>${kitten.name}</h1>
            <p class="product-meta">${kitten.breed} • ${kitten.color} • ${formatAge(kitten.age, locale)} • ${strings.kittens[kitten.gender]}</p>
            <p class="product-price">${formatPrice(kitten.price)}</p>
            <p class="body-copy">${kitten.description[locale]}</p>
            <div class="product-actions">
              ${kitten.status === "available" ? `<button type="button" data-action="add-cart" data-id="${kitten.id}" class="btn btn-primary ${inCart ? "is-disabled" : ""}" ${inCart ? "disabled" : ""}>${icon("bag")} ${inCart ? "In Cart" : strings.kittens.reserve}</button><button type="button" data-action="toggle-wishlist" data-id="${kitten.id}" class="wishlist-large ${wished ? "active" : ""}">${icon("heart")}</button>` : `<div class="product-status">${statusLabel(kitten.status, locale)}</div>`}
            </div>
            <div class="info-card"><h3>${strings.kittens.characteristics}</h3><dl><div><dt>${strings.kittens.weight}</dt><dd>${kitten.characteristics.weight}</dd></div><div><dt>${strings.kittens.eyeColor}</dt><dd>${kitten.characteristics.eyeColor}</dd></div><div><dt>${strings.kittens.furLength}</dt><dd>${kitten.characteristics.furLength}</dd></div><div><dt>${strings.kittens.pattern}</dt><dd>${kitten.characteristics.pattern}</dd></div></dl></div>
            <div class="info-card"><h3>${strings.kittens.pedigree}</h3><dl class="single"><div><dt>${strings.kittens.father}</dt><dd>${kitten.pedigree.father}</dd></div><div><dt>${strings.kittens.mother}</dt><dd>${kitten.pedigree.mother}</dd></div>${kitten.pedigree.grandFather ? `<div><dt>${locale === "ua" ? "Дід" : "Grandfather"}</dt><dd>${kitten.pedigree.grandFather}</dd></div>` : ""}</dl></div>
            <div class="info-card"><h3>${strings.kittens.vaccinations}</h3><ul class="vaccinations">${kitten.vaccinations.map((item) => `<li><span>${item.done ? icon("check") : icon("clock")} ${item.name}</span><small>${item.date}</small></li>`).join("")}</ul></div>
          </div>
        </div>
        <div class="related-block"><div class="divider">✦</div><h2>${strings.kittens.related}</h2><div class="card-grid">${related.map(kittenCardMarkup).join("")}</div></div>
      </div>
    </section>
  `;
}

function checkoutPage() {
  const locale = store.getState().locale;
  const strings = t();
  const cart = getCartKittens();
  if (!cart.length && ui.checkoutStatus !== "success") {
    return `<section class="empty-page"><div class="empty-box"><div class="empty-icon">${icon("bag")}</div><h1>${strings.cart.empty}</h1><p>${strings.cart.emptyDesc}</p><a href="#/kittens" data-link class="btn btn-primary">${strings.cart.browse}</a></div></section>`;
  }
  if (ui.checkoutStatus === "success") {
    return `<section class="empty-page"><div class="success-box large">${icon("check")}<h1>${strings.checkout.success}</h1><p>${strings.checkout.successDesc}</p><strong>${strings.checkout.orderNum}: ${ui.checkoutOrderId}</strong><div class="success-actions"><a href="#/kittens" data-link class="btn btn-outline">${strings.kittens.title}</a><a href="#/" data-link class="btn btn-primary">${locale === "ua" ? "На головну" : "Home"}</a></div></div></section>`;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return `
    <section class="section section-cream page-pad"> 
      <div class="container">
        <h1 class="page-title">${strings.checkout.title}</h1>
        <form id="checkout-form" class="checkout-grid">
          <div class="checkout-main">
            <section class="form-card"><h2>${strings.checkout.personal}</h2><div class="form-grid">${checkoutField("firstName", strings.checkout.firstName, "text")}${checkoutField("lastName", strings.checkout.lastName, "text")}${checkoutField("email", strings.checkout.email, "email")}${checkoutField("phone", strings.checkout.phone, "tel")}${checkoutField("country", strings.checkout.country, "text")}${checkoutField("city", strings.checkout.city, "text")}<div class="full">${checkoutField("address", strings.checkout.address, "text")}</div><div class="full"><label>${strings.checkout.notes}</label><textarea name="notes" rows="4"></textarea>${ui.checkoutErrors.notes ? `<small class="error">${ui.checkoutErrors.notes}</small>` : ""}</div></div></section>
            <section class="form-card"><h2>${strings.checkout.delivery}</h2><div class="radio-list">${["pickup", "courier", "transport"].map((method, index) => `<label class="radio-card"><input type="radio" name="delivery" value="${method}" ${index === 0 ? "checked" : ""}><span>${strings.checkout[method]}</span></label>`).join("")}</div></section>
            <section class="form-card"><h2>${strings.checkout.payment}</h2><div class="radio-list">${["card", "bank_transfer", "stripe"].map((method, index) => `<label class="radio-card"><input type="radio" name="payment" value="${method}" ${index === 0 ? "checked" : ""}><span>${strings.checkout[method]}</span></label>`).join("")}</div></section>
          </div>
          <aside class="checkout-side"><div class="summary-card"><h2>${locale === "ua" ? "Ваше замовлення" : "Your Order"}</h2><ul class="summary-list">${cart.map((item) => `<li><img src="${item.photos[0]}" alt="${item.name}" loading="lazy" decoding="async"><div><strong>${item.name}</strong><span>${item.color}</span><small>${formatPrice(item.price)}</small></div></li>`).join("")}</ul><div class="summary-total"><span>${strings.cart.total}</span><strong>${formatPrice(total)}</strong></div><button type="submit" class="btn btn-primary full">${strings.checkout.confirm}</button></div></aside>
        </form>
      </div>
    </section>
  `;
}

function privacyPage() {
  const locale = store.getState().locale;
  return `
    ${pageHeader(locale === "ua" ? "Конфіденційність" : "Privacy Policy", locale === "ua" ? "Захист ваших даних" : "How we handle your data")} 
    <section class="section section-cream page-pad">
      <div class="container narrow form-panel reveal-up">
        <h2>${locale === "ua" ? "Основні принципи" : "Key principles"}</h2>
        <p class="body-copy">${locale === "ua" ? "Ми використовуємо ваші контактні дані лише для відповіді на запити, оформлення бронювання та супроводу клієнтів." : "We use your contact details only to answer inquiries, process reservations and support clients."}</p>
        <p class="body-copy">${locale === "ua" ? "Сайт зберігає локально лише технічні дані інтерфейсу: мову, кошик, список бажаного та нещодавно переглянутих кошенят." : "The website stores only interface-related local data: locale, cart, wishlist and recently viewed kittens."}</p>
        <p class="body-copy">${locale === "ua" ? "Для видалення або уточнення ваших даних зверніться на info@sevenstarscattery.com." : "To remove or clarify your data, contact info@sevenstarscattery.com."}</p>
      </div>
    </section>
  `;
}

function termsPage() {
  const locale = store.getState().locale;
  return `
    ${pageHeader(locale === "ua" ? "Умови бронювання" : "Reservation Terms", locale === "ua" ? "Правила бронювання кошенят" : "How reservations work")} 
    <section class="section section-cream page-pad">
      <div class="container narrow form-panel reveal-up">
        <h2>${locale === "ua" ? "Умови" : "Terms"}</h2>
        <p class="body-copy">${locale === "ua" ? "Бронювання підтверджується після узгодження деталей та підтвердження заявки. Фактична оплата та передача кошеняти узгоджуються індивідуально." : "Reservations are confirmed after the details are reviewed and the request is approved. Final payment and kitten handoff are handled individually."}</p>
        <p class="body-copy">${locale === "ua" ? "Інформація про кошенят, ціни та доступність може змінюватися без попереднього повідомлення." : "Kitten availability, pricing and details may change without prior notice."}</p>
        <p class="body-copy">${locale === "ua" ? "Відправка за кордон потребує окремого погодження документів, маршруту та термінів." : "International delivery requires separate approval of documents, route and timing."}</p>
      </div>
    </section>
  `;
}

function pageContent() {
  const path = ui.route.path;
  if (path === "/") return homePage();
  if (path === "/about") return aboutPage();
  if (path === "/awards") return awardsPage();
  if (path === "/delivery") return deliveryPage();
  if (path === "/contacts") return contactsPage();
  if (path === "/kittens") return kittensPage();
  if (path === "/checkout") return checkoutPage();
  if (path === "/privacy") return privacyPage();
  if (path === "/terms") return termsPage();
  if (path.startsWith("/kittens/")) return productPage(path.split("/")[2]);
  return notFoundPage();
}

function shell() {
  return `${headerMarkup()}<main>${pageContent()}</main>${footerMarkup()}${cartDrawerMarkup()}<div class="toast-stack">${ui.notices.map((item) => `<div class="toast">${item.message}</div>`).join("")}</div>`;
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateContact(formData) {
  const errors = {};
  if (!formData.get("name") || formData.get("name").trim().length < 2) errors.name = "Min 2 chars";
  if (!validateEmail(formData.get("email") || "")) errors.email = "Invalid email";
  if (!formData.get("message") || formData.get("message").trim().length < 10) errors.message = "Min 10 chars";
  return errors;
}

function validateCheckout(formData) {
  const errors = {};
  ["firstName", "lastName", "country", "city"].forEach((key) => {
    if (!formData.get(key) || formData.get(key).trim().length < 2) errors[key] = "Required";
  });
  if (!validateEmail(formData.get("email") || "")) errors.email = "Invalid email";
  if (!formData.get("phone") || formData.get("phone").trim().length < 8) errors.phone = "Invalid phone";
  return errors;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

function setupAnimations() {
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

function setupVideos() {
    const videos = document.querySelectorAll('.hero-video');
    videos.forEach(v => {
        v.muted = true;
        v.defaultPlaybackRate = 2.0;
        v.playbackRate = 2.0;
        v.addEventListener("loadedmetadata", () => {
            v.defaultPlaybackRate = 2.0;
            v.playbackRate = 2.0;
        }, { once: true });
        v.load();
        const playPromise = v.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {});
        }
    });
}

function render() {
  app.innerHTML = shell();
  updateMeta();
  setupAnimations();
  setupVideos();
}

function onClick(event) {
  const link = event.target.closest("a[href^='#/']");
  if (link) {
    const href = link.getAttribute('href');
    if (href.startsWith('#/')) {
       // Smooth scroll to top on route change
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const card = event.target.closest(".kitten-card[data-href]");
  if (card && !event.target.closest("a,button,[data-action]")) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.navigate(card.dataset.href.slice(1));
    return;
  }

  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  const locale = store.getState().locale;

  if (action === "toggle-locale") store.setLocale(locale === "ua" ? "en" : "ua");
  if (action === "open-cart") ui.cartOpen = true;
  if (action === "close-cart") ui.cartOpen = false;
  if (action === "toggle-mobile") ui.mobileOpen = !ui.mobileOpen;
  if (action === "toggle-wishlist" && id) {
    store.toggleWishlist(id);
    notice(store.getState().wishlist.includes(id) ? translations[locale].wishlist.add : translations[locale].wishlist.remove);
  }
  if (action === "add-cart" && id) {
    const kitten = getKitten(id);
    if (kitten && kitten.status === "available") {
      store.addToCart(id);
      ui.cartOpen = true;
      notice(`${kitten.name} ${locale === "ua" ? "додано до кошика" : "added to cart"}`);
    }
  }
  if (action === "remove-cart" && id) store.removeFromCart(id);
  if (action === "toggle-filters") ui.filtersOpen = !ui.filtersOpen;
  if (action === "reset-filters") ui.filters = { gender: "all", status: "all", color: "all", priceMin: 0, priceMax: 5000, ageMin: 0, ageMax: 24 };
  if (action === "set-filter") ui.filters[target.dataset.key] = target.dataset.value;
  if (action === "hero-prev") ui.heroIndex = (ui.heroIndex - 1 + slides.length) % slides.length;
  if (action === "hero-next") ui.heroIndex = (ui.heroIndex + 1) % slides.length;
  if (action === "hero-dot") ui.heroIndex = Number(target.dataset.index);
  if (action === "testimonial-prev") ui.testimonialIndex = (ui.testimonialIndex - 1 + testimonials.length) % testimonials.length;
  if (action === "testimonial-next") ui.testimonialIndex = (ui.testimonialIndex + 1) % testimonials.length;
  if (action === "testimonial-dot") ui.testimonialIndex = Number(target.dataset.index);
  if (action === "product-photo") ui.productPhotoIndex = Number(target.dataset.index);
  if (action === "product-prev-photo" && id) {
    const kitten = getKitten(id);
    ui.productPhotoIndex = (ui.productPhotoIndex - 1 + kitten.photos.length) % kitten.photos.length;
  }
  if (action === "product-next-photo" && id) {
    const kitten = getKitten(id);
    ui.productPhotoIndex = (ui.productPhotoIndex + 1) % kitten.photos.length;
  }
  render();
}

function onChange(event) {
  const target = event.target;
  if (target.dataset.action === "range-filter") {
    ui.filters[target.dataset.key] = Number(target.value);
    render();
  }
  if (target.dataset.action === "select-filter") {
    ui.filters[target.dataset.key] = target.value;
    render();
  }
}

function onSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();

  if (form.id === "subscribe-form") {
    const email = new FormData(form).get("email") || "";
    ui.subscribeError = "";
    if (!validateEmail(email)) {
      ui.subscribeError = "Invalid email address";
      render();
      return;
    }
    ui.subscribeStatus = "success";
    render();
    return;
  }

  if (form.id === "contact-form") {
    const formData = new FormData(form);
    ui.contactErrors = validateContact(formData);
    if (Object.keys(ui.contactErrors).length) {
      render();
      return;
    }
    ui.contactStatus = "success";
    ui.contactErrors = {};
    render();
    return;
  }

  if (form.id === "checkout-form") {
    const formData = new FormData(form);
    ui.checkoutErrors = validateCheckout(formData);
    if (Object.keys(ui.checkoutErrors).length) {
      render();
      return;
    }
    ui.checkoutStatus = "success";
    ui.checkoutOrderId = orderId();
    ui.checkoutErrors = {};
    store.clearCart();
    render();
  }
}

function onScroll() {
  const hero = document.querySelector(".hero-bg");
  if (hero) {
    hero.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0) scale(1.05)`;
  }
  const header = document.querySelector(".site-header");
  if (header) header.classList.toggle("scrolled", window.scrollY > 40);
}

store.subscribe(() => render());

const router = initRouter((route) => {
  ui.route = route;
  ui.mobileOpen = false;
  ui.cartOpen = false;
  ui.productPhotoIndex = 0;
  render();
});

document.addEventListener("click", onClick);
document.addEventListener("keydown", (event) => {
  const card = event.target.closest(".kitten-card[data-href]");
  if (!card || event.target.closest("a,button,[data-action]")) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    router.navigate(card.dataset.href.slice(1));
  }
});
document.addEventListener("change", onChange);
document.addEventListener("submit", onSubmit);
window.addEventListener("scroll", onScroll, { passive: true });

router.start(document.body.dataset.route || "/");
render();
