// ============================================================================
// DONNÉES DE LA BOUTIQUE
// ============================================================================

const STORE = {
  name: 'Maison Élégance Algérienne',
  nameAr: 'دار الأناقة الجزائرية',
  address: 'Sultana haute couture et location, Alger, Algérie',
  phone: '+213 XX XX XX XX',
  email: 'contact@elegance-algerienne.dz',
  whatsappNumber: '213XXXXXXXXX',
  whatsappGroupLink: 'https://chat.whatsapp.com/XXXXXXXXX',
  googleMapsUrl: 'https://maps.google.com/maps?q=36.7624039,2.9523753&z=15&output=embed',
  directionsUrl: 'https://www.google.com/maps/place/Sultana+haute+couture+et+location/@36.7624039,2.8802775,13z/data=!4m10!1m2!2m1!1straditionel+koftan!3m6!1s0x128fb1ff8d32a10f:0x7982dcc0bb5ab54d!8m2!3d36.7624039!4d2.9523753!15sChN0cmFkaXRpb25uZWwgY2FmdGFuWhUiE3RyYWRpdGlvbm5lbCBjYWZ0YW6SAQpkcmVzc19zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJwb1JFNXJaSEJoZWxaYVkzcFdhMVpUTVhOTmJHaFVUMFZqTWxwWFl4QULgAQD6AQQIABA1!16s%2Fg%2F11p74jzfrl?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D',
  rc: 'RC-XXXXXXX',
  nif: 'NIF-XXXXXXX',
  nis: 'NIS-XXXXXXX',
  facebook: '',
  instagram: '',
  tiktok: '',
};

const PRODUCTS = [
  { id:'1', name:'Caftan constantinois royal violet', nameAr:'قفطان قسنطيني بنفسجي ملكي', description:'Caftan traditionnel élégant pour occasions spéciales.', descriptionAr:'قفطان تقليدي أنيق للمناسبات الخاصة.', price:18500, image:'assets/Traditional_Algerian_caftan_in_deep_royal_purple_v-1786403601963.png', category:'traditional', inStock:true },
  { id:'2', name:'Robe constantinoise velours ornée', nameAr:'فستان قسنطيني مخملي مزخرف', description:'Robe traditionnelle raffinée avec détails riches.', descriptionAr:'فستان تقليدي راقٍ بتفاصيل فاخرة.', price:21000, image:'assets/Traditional_Constantine_dress_ornate_velvet_multi-1786403617992.png', category:'traditional', inStock:true },
  { id:'3', name:'Robe algérienne fusion moderne', nameAr:'فستان جزائري عصري بلمسة تقليدية', description:'Fusion entre style traditionnel et modernité.', descriptionAr:'مزيج بين الطابع التقليدي واللمسة العصرية.', price:17200, image:'assets/Fusion_traditional-modern_Algerian_dress_unique_b-1786403624170.png', category:'traditional', inStock:true },
  { id:'4', name:'Caftan blanc et or royal', nameAr:'قفطان أبيض وذهبي ملكي', description:'Pièce raffinée idéale pour mariages et soirées.', descriptionAr:'قطعة فاخرة مثالية للأعراس والسهرات.', price:26500, image:'assets/Opulent_white_and_gold_Algerian_caftan_royal_brid-1786403629891.png', category:'caftans', inStock:true },
  { id:'5', name:'Caftan mariée nord-africain blanc', nameAr:'قفطان عروس أبيض مغاربي', description:'Tenue nuptiale élégante avec finition premium.', descriptionAr:'لباس عروس أنيق بلمسة فاخرة.', price:29800, image:'assets/White_traditional_North_African_bridal_caftan_for_-1786403636938.png', category:'bridal', inStock:true },
  { id:'6', name:'Caftan algérien ivoire et or', nameAr:'قفطان جزائري عاجي وذهبي', description:'Caftan distingué avec broderies luxueuses.', descriptionAr:'قفطان راقٍ بتطريزات فخمة.', price:23800, image:'assets/Elegant_Algerian_caftan_dress_royal_gold_and_ivor-1786403643977.png', category:'caftans', inStock:true },
  { id:'7', name:'Caftan turquoise émeraude', nameAr:'قفطان تركواز زمردي', description:'Style moderne et lumineux pour cérémonies.', descriptionAr:'ستايل عصري ومشرق للمناسبات.', price:19400, image:'assets/Modern_turquoise_emerald_Algerian_caftan_paired_w-1786403654177.png', category:'caftans', inStock:true },
  { id:'8', name:'Robe mariée princesse blanche', nameAr:'فستان عروس أبيض أميري', description:'Robe volumineuse au style princesse.', descriptionAr:'فستان عروس منفوش بطابع أميري.', price:32500, image:'assets/White_wedding_bridal_gown_dress_dreamy_princess_s-1786403667441.png', category:'bridal', inStock:true },
  { id:'9', name:'Robe mariée blanche deluxe', nameAr:'فستان عروس أبيض فاخر', description:'Version deluxe avec tombé élégant.', descriptionAr:'نسخة فاخرة بقصة أنيقة.', price:33800, image:'assets/White_wedding_bridal_gown_dress_dreamy_princess_s-1786403674459.png', category:'bridal', inStock:true },
  { id:'10', name:'Caftan noir et or luxueux', nameAr:'قفطان أسود وذهبي فاخر', description:'Look prestigieux au style haut de gamme.', descriptionAr:'إطلالة فاخرة بطابع راقٍ.', price:25500, image:'assets/Luxurious_black_and_gold_Algerian_caftan_ornate_g-1786403685578.png', category:'caftans', inStock:true },
  { id:'11', name:'Caftan ivoire floral délicat', nameAr:'قفطان عاجي بنقوش زهرية ناعمة', description:'Caftan délicat et féminin pour grandes occasions.', descriptionAr:'قفطان ناعم وأنثوي للمناسبات الراقية.', price:20800, image:'assets/Cream_ivory_Algerian_caftan_delicate_pastel_flora-1786404032155.png', category:'caftans', inStock:true },
  { id:'12', name:'Caftan ivoire floral premium', nameAr:'قفطان عاجي فاخر بنقش وردي', description:'Version premium avec finition élégante.', descriptionAr:'نسخة فاخرة بلمسات أنيقة.', price:22400, image:'assets/Cream_ivory_Algerian_caftan_delicate_pastel_flora-1786404035151.png', category:'caftans', inStock:true },
  { id:'13', name:'Caftan rose pastel romantique', nameAr:'قفطان وردي باستيل رومانسي', description:'Modèle doux et féminin pour cérémonie.', descriptionAr:'موديل ناعم وأنثوي للمناسبات.', price:21900, image:'assets/Soft_pastel_pink_Algerian_caftan_sweet_romantic_A-1786404021010.png', category:'caftans', inStock:true },
  { id:'14', name:'Robe de soirée blanche moderne', nameAr:'فستان سهرة أبيض عصري', description:'Coupe élégante pour soirées et événements.', descriptionAr:'قصة أنيقة للسهرات والمناسبات.', price:17600, image:'assets/Elegant_white_party_evening_dress_modern_A-line_s-1786404059371.png', category:'evening', inStock:true },
  { id:'15', name:'Robe cocktail blanche élégante', nameAr:'فستان كوكتيل أبيض أنيق', description:'Silhouette moderne et raffinée.', descriptionAr:'قصة عصرية وأنيقة.', price:16800, image:'assets/White_evening_cocktail_dress_sleek_modern_fitted_-1786404069008.png', category:'evening', inStock:true },
  { id:'16', name:'Robe de mariée princesse volumineuse', nameAr:'فستان عروس أميري منفوش', description:'Grande robe de mariage au style majestueux.', descriptionAr:'فستان زفاف فاخر بطابع ملكي.', price:34900, image:'assets/White_princess_ball_gown_wedding_dress_voluminous-1786404080605.png', category:'bridal', inStock:true },
];

const GALLERY = [
  { id:'1', src:'assets/Traditional_Algerian_caftan_in_deep_royal_purple_v-1786403601963.png', alt:'Caftan traditionnel violet royal', altAr:'قفطان تقليدي بنفسجي ملكي' },
  { id:'2', src:'assets/Traditional_Constantine_dress_ornate_velvet_multi-1786403617992.png', alt:'Robe constantinoise ornée', altAr:'فستان قسنطيني مزخرف' },
  { id:'3', src:'assets/Fusion_traditional-modern_Algerian_dress_unique_b-1786403624170.png', alt:'Robe algérienne fusion moderne', altAr:'فستان جزائري عصري' },
  { id:'4', src:'assets/Opulent_white_and_gold_Algerian_caftan_royal_brid-1786403629891.png', alt:'Caftan blanc et or', altAr:'قفطان أبيض وذهبي' },
  { id:'5', src:'assets/White_traditional_North_African_bridal_caftan_for_-1786403636938.png', alt:'Caftan de mariée nord-africain', altAr:'قفطان عروس مغاربي' },
  { id:'6', src:'assets/Elegant_Algerian_caftan_dress_royal_gold_and_ivor-1786403643977.png', alt:'Caftan ivoire et or élégant', altAr:'قفطان أنيق عاجي وذهبي' },
  { id:'7', src:'assets/Modern_turquoise_emerald_Algerian_caftan_paired_w-1786403654177.png', alt:'Caftan turquoise moderne', altAr:'قفطان تركواز عصري' },
  { id:'8', src:'assets/White_wedding_bridal_gown_dress_dreamy_princess_s-1786403667441.png', alt:'Robe mariée princesse blanche', altAr:'فستان عروس أبيض أميري' },
  { id:'9', src:'assets/White_wedding_bridal_gown_dress_dreamy_princess_s-1786403674459.png', alt:'Robe mariée blanche deluxe', altAr:'فستان عروس أبيض فاخر' },
  { id:'10', src:'assets/Luxurious_black_and_gold_Algerian_caftan_ornate_g-1786403685578.png', alt:'Caftan noir et or luxueux', altAr:'قفطان أسود وذهبي فاخر' },
  { id:'11', src:'assets/Soft_pastel_pink_Algerian_caftan_sweet_romantic_A-1786404021010.png', alt:'Caftan rose pastel romantique', altAr:'قفطان وردي باستيل رومانسي' },
  { id:'12', src:'assets/Cream_ivory_Algerian_caftan_delicate_pastel_flora-1786404032155.png', alt:'Caftan ivoire floral délicat', altAr:'قفطان عاجي بنقوش زهرية' },
  { id:'13', src:'assets/Cream_ivory_Algerian_caftan_delicate_pastel_flora-1786404035151.png', alt:'Caftan ivoire floral premium', altAr:'قفطان عاجي فاخر' },
  { id:'14', src:'assets/Elegant_white_party_evening_dress_modern_A-line_s-1786404059371.png', alt:'Robe de soirée blanche moderne', altAr:'فستان سهرة أبيض عصري' },
  { id:'15', src:'assets/White_evening_cocktail_dress_sleek_modern_fitted_-1786404069008.png', alt:'Robe cocktail blanche élégante', altAr:'فستان كوكتيل أبيض أنيق' },
  { id:'16', src:'assets/White_princess_ball_gown_wedding_dress_voluminous-1786404080605.png', alt:'Robe de mariée princesse volumineuse', altAr:'فستان عروس أميري منفوش' },
];

const SERVICES = [
  { id:'1', icon:'🚚', title:'Livraison rapide', titleAr:'توصيل سريع', description:'Livraison a domicile sous 24-48h', descriptionAr:'توصيل للمنزل خلال 24-48 ساعة' },
  { id:'2', icon:'✅', title:'Qualite garantie', titleAr:'جودة مضمونة', description:'Produits soigneusement selectionnes', descriptionAr:'منتجات مختارة بعناية' },
  { id:'3', icon:'💬', title:'Support WhatsApp', titleAr:'دعم واتساب', description:'Disponible 7j/7 sur WhatsApp', descriptionAr:'متاح 7 أيام عبر واتساب' },
  { id:'4', icon:'🔄', title:'Retours faciles', titleAr:'إرجاع سهل', description:'Politique de retour flexible sous 7 jours', descriptionAr:'إرجاع مرن خلال 7 أيام' },
];

const TESTIMONIALS = [
  { id:'1', name:'Amina B.', nameAr:'أمينة ب.', city:'Alger', cityAr:'الجزائر العاصمة', rating:5, review:'Excellente boutique ! Produits de qualite et livraison rapide.', reviewAr:'متجر ممتاز! جودة عالية وتوصيل سريع.' },
  { id:'2', name:'Karim M.', nameAr:'كريم م.', city:'Oran', cityAr:'وهران', rating:5, review:'Service impeccable. Tres reactif sur WhatsApp.', reviewAr:'خدمة ممتازة. سريع الاستجابة على واتساب.' },
  { id:'3', name:'Fatima Z.', nameAr:'فاطمة ز.', city:'Constantine', cityAr:'قسنطينة', rating:4, review:'Tres bon rapport qualite/prix. Emballage soigne.', reviewAr:'نسبة جيدة بين الجودة والسعر.' },
  { id:'4', name:'Yacine H.', nameAr:'ياسين ح.', city:'Setif', cityAr:'سطيف', rating:5, review:'Commande recue en parfait etat. Tres professionnel.', reviewAr:'الطلب وصل في حالة ممتازة.' },
];

const SCHEDULE = [
  { day:0, dayKey:'sunday', open:'09:00', close:'17:00', closed:false },
  { day:1, dayKey:'monday', open:'08:00', close:'20:00', closed:false },
  { day:2, dayKey:'tuesday', open:'08:00', close:'20:00', closed:false },
  { day:3, dayKey:'wednesday', open:'08:00', close:'20:00', closed:false },
  { day:4, dayKey:'thursday', open:'08:00', close:'20:00', closed:false },
  { day:5, dayKey:'friday', open:'14:00', close:'20:00', closed:false },
  { day:6, dayKey:'saturday', open:'08:00', close:'20:00', closed:false },
];

// ============================================================================
// TRADUCTIONS
// ============================================================================

const TRANSLATIONS = {
  fr: {
    nav: { home:'Accueil', products:'Collection', gallery:'Galerie', services:'Prestations', testimonials:'Avis', contact:'Adresse' },
    hero: { cta:'Découvrir la collection', ctaWhatsapp:'Réserver sur WhatsApp' },
    categories: { all:'Toutes les pièces', caftans:'Caftans', traditional:'Traditionnel', evening:'Soirée', bridal:'Mariée' },
    products: { title:'Collection Signature', addToCart:'Ajouter à la sélection', outOfStock:'Pièce indisponible', price:'Tarif' },
    cart: { title:'Votre sélection', empty:'Votre sélection est vide', total:'Montant total', orderViaWhatsapp:'Finaliser sur WhatsApp', clear:'Vider la sélection', remove:'Retirer' },
    order: { title:'Finaliser votre demande', name:'Nom et prénom', phone:'Téléphone', address:'Adresse de livraison', city:'Ville', notes:'Précisions', submit:'Envoyer la demande', success:'Votre demande a bien été transmise.', error:'Une erreur est survenue. Merci de réessayer.', required:'Ce champ est requis', whatsappMessage:'Bonjour, je souhaite réserver les pièces suivantes :' },
    gallery: { title:'Galerie Signature', subtitle:"Découvrez l'élégance de nos créations à travers une sélection d'images." },
    services: { title:'Services Sur Mesure', subtitle:'Un accompagnement raffiné pensé pour sublimer chaque cliente.' },
    testimonials: { title:'Paroles de Clientes', subtitle:'La confiance de nos clientes est notre plus belle signature.' },
    hours: { title:'Horaires de la Maison', open:'Ouvert actuellement', closed:'Fermé actuellement', today:"Aujourd'hui", schedule:'Horaires' },
    map: { title:'Notre Adresse', subtitle:'Retrouvez notre maison et contactez-nous facilement.', getDirections:"Voir l'itinéraire" },
    footer: { rights:'Tous droits réservés', legal:'Informations légales', rc:'RC', nif:'NIF', nis:'NIS', followUs:'Suivez notre univers', joinGroup:'Rejoindre notre groupe privé' },
    whatsapp: { order:'Écrire sur WhatsApp' },
    days: { monday:'Lundi', tuesday:'Mardi', wednesday:'Mercredi', thursday:'Jeudi', friday:'Vendredi', saturday:'Samedi', sunday:'Dimanche' },
    badges: { collection:'Collection Signature', inspiration:'Inspiration', prestige:'Prestige', confiance:'Confiance', emplacement:'Emplacement', selection:'Sélection', maison:'La Maison', univers:'Univers', legal:'Légal' }
  },
  ar: {
    nav: { home:'الرئيسية', products:'التشكيلة', gallery:'المعرض', services:'الخدمات', testimonials:'آراء العميلات', contact:'العنوان' },
    hero: { cta:'اكتشف التشكيلة', ctaWhatsapp:'احجز عبر واتساب' },
    categories: { all:'كل القطع', caftans:'القفاطين', traditional:'تقليدي', evening:'سهرة', bridal:'أعراس' },
    products: { title:'تشكيلة مميزة', addToCart:'أضف إلى الاختيار', outOfStock:'القطعة غير متوفرة', price:'السعر' },
    cart: { title:'اختياراتك', empty:'اختياراتك فارغة حالياً', total:'الإجمالي', orderViaWhatsapp:'إتمام الطلب عبر واتساب', clear:'تفريغ الاختيارات', remove:'إزالة' },
    order: { title:'إتمام الطلب', name:'الاسم الكامل', phone:'رقم الهاتف', address:'عنوان التوصيل', city:'المدينة', notes:'ملاحظات إضافية', submit:'إرسال الطلب', success:'تم إرسال طلبك بنجاح.', error:'حدث خطأ ما، يرجى إعادة المحاولة.', required:'هذا الحقل مطلوب', whatsappMessage:'مرحباً، أود حجز القطع التالية:' },
    gallery: { title:'معرض التشكيلة', subtitle:'اكتشف أناقة تصاميمنا من خلال مجموعة صور مختارة.' },
    services: { title:'خدمات راقية', subtitle:'مرافقة أنيقة صُممت لتجربة عميلة استثنائية.' },
    testimonials: { title:'آراء عميلاتنا', subtitle:'ثقة عميلاتنا هي أجمل شهادة على جودة أعمالنا.' },
    hours: { title:'أوقات استقبال الزبونات', open:'مفتوح حالياً', closed:'مغلق حالياً', today:'اليوم', schedule:'المواعيد' },
    map: { title:'عنواننا', subtitle:'زوروا دارنا وتواصلوا معنا بسهولة.', getDirections:'عرض الاتجاهات' },
    footer: { rights:'جميع الحقوق محفوظة', legal:'البيانات القانونية', rc:'السجل التجاري', nif:'الرقم التعريفي الجبائي', nis:'رقم الإحصاء', followUs:'تابعوا عالمنا', joinGroup:'الانضمام إلى مجموعتنا الخاصة' },
    whatsapp: { order:'راسلنا على واتساب' },
    days: { monday:'الاثنين', tuesday:'الثلاثاء', wednesday:'الأربعاء', thursday:'الخميس', friday:'الجمعة', saturday:'السبت', sunday:'الأحد' },
    badges: { collection:'التشكيلة المميزة', inspiration:'إلهام', prestige:'راقي', confiance:'ثقة', emplacement:'الموقع', selection:'الاختيارات', maison:'الدار', univers:'العالم الرقمي', legal:'قانوني' }
  }
};

// ============================================================================
// ÉTAT DE L'APPLICATION
// ============================================================================

let currentLang = localStorage.getItem('boutique_lang') || 'fr';
let cartItems = [];
let currentCategory = 'all';
let lightboxIndex = -1;
let addedProductId = null;

function t(key) {
  const keys = key.split('.');
  let obj = TRANSLATIONS[currentLang];
  for (const k of keys) {
    if (obj && obj[k] !== undefined) {
      obj = obj[k];
    } else {
      return key;
    }
  }
  return obj;
}

// ============================================================================
// GESTION DU PANIER (LOCALSTORAGE)
// ============================================================================

function loadCart() {
  try {
    const raw = localStorage.getItem('boutique_cart');
    cartItems = raw ? JSON.parse(raw) : [];
  } catch (e) {
    cartItems = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('boutique_cart', JSON.stringify(cartItems));
  } catch (e) {}
}

function addToCart(product) {
  const existing = cartItems.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    });
  }
  saveCart();
  renderCart();
  renderNavbar();
  
  addedProductId = product.id;
  renderProducts();
  setTimeout(() => {
    addedProductId = null;
    renderProducts();
  }, 1500);
}

function handleAddToCart(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (p && p.inStock) {
    addToCart(p);
  }
}

function removeFromCart(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  saveCart();
  renderCart();
  renderNavbar();
}

function updateQuantity(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.quantity = qty;
    saveCart();
    renderCart();
    renderNavbar();
  }
}

function clearCart() {
  cartItems = [];
  saveCart();
  renderCart();
  renderNavbar();
}

function getTotalPrice() {
  return cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function getTotalItems() {
  return cartItems.reduce((sum, i) => sum + i.quantity, 0);
}

// ============================================================================
// HORAIRES ET OUVERTURE
// ============================================================================

function getAlgiersDate() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Algiers' }));
}

function checkOpen() {
  const now = getAlgiersDate();
  const today = SCHEDULE.find(s => s.day === now.getDay());
  if (!today || today.closed) return { open: false, now };

  const [oh, om] = today.open.split(':').map(Number);
  const [ch, cm] = today.close.split(':').map(Number);
  const cur = now.getHours() * 60 + now.getMinutes();
  const op = oh * 60 + om;
  const cl = ch * 60 + cm;

  return { open: cur >= op && cur < cl, now };
}

// ============================================================================
// RENDU DOM
// ============================================================================

function setCategory(cat) {
  currentCategory = cat;
  renderCategories();
  renderProducts();
}

function renderCategories() {
  const container = document.getElementById('categories');
  if (!container) return;
  const cats = ['all', 'caftans', 'traditional', 'evening', 'bridal'];
  container.innerHTML = cats.map(cat => `
    <button class="cat-btn ${currentCategory === cat ? 'active' : ''}" onclick="setCategory('${cat}')">
      ${t('categories.' + cat)}
    </button>
  `).join('');
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  const filtered = currentCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === currentCategory);
    
  container.innerHTML = filtered.map(p => {
    const isAdded = addedProductId === p.id;
    return `
      <div class="product-card fade-in visible">
        <div class="product-image">
          <img src="${p.image}" alt="${isAr ? p.nameAr : p.name}" loading="lazy">
          <div class="product-image-overlay"></div>
          ${!p.inStock ? `<div class="product-out-of-stock">${t('products.outOfStock')}</div>` : ''}
          <div class="product-price-area">
            <p class="product-price-label">${t('products.price')}</p>
            <p class="product-price">${p.price.toLocaleString()} DA</p>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${isAr ? p.nameAr : p.name}</h3>
          <p class="product-desc">${isAr ? p.descriptionAr : p.description}</p>
          <button 
            class="add-to-cart-btn ${isAdded ? 'added' : ''}" 
            ${!p.inStock ? 'disabled' : ''} 
            onclick="handleAddToCart('${p.id}')"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>${isAdded ? (isAr ? 'تمت الإضافة' : 'Ajouté') : t('products.addToCart')}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  
  container.innerHTML = GALLERY.map((item, index) => `
    <div class="gallery-card fade-in visible" onclick="openLightbox(${index})">
      <div class="gallery-image">
        <img src="${item.src}" alt="${isAr ? item.altAr : item.alt}" loading="lazy">
        <div class="gallery-image-overlay"></div>
        <div class="gallery-image-hover-overlay"></div>
        <div class="gallery-bottom">
          <div>
            <p class="gallery-label">${isAr ? 'المعرض' : 'Galerie'}</p>
            <p class="gallery-name">${isAr ? item.altAr : item.alt}</p>
          </div>
          <span class="gallery-view-btn">${isAr ? 'عرض' : 'Voir'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  
  container.innerHTML = SERVICES.map(service => `
    <div class="service-card fade-in visible">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${isAr ? service.titleAr : service.title}</h3>
      <p class="service-desc">${isAr ? service.descriptionAr : service.description}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  
  container.innerHTML = TESTIMONIALS.map(item => `
    <div class="testimonial-card fade-in visible">
      <div class="testimonial-top">
        <div class="stars">
          ${[1,2,3,4,5].map(s => `<span class="${s <= item.rating ? 'star-filled' : 'star-empty'}">★</span>`).join('')}
        </div>
        <span class="quote-mark">“</span>
      </div>
      <p class="testimonial-review">${isAr ? item.reviewAr : item.review}</p>
      <div class="testimonial-author">
        <p class="testimonial-name">${isAr ? item.nameAr : item.name}</p>
        <p class="testimonial-city">${isAr ? item.cityAr : item.city}</p>
      </div>
    </div>
  `).join('');
}

function renderOpeningHours() {
  const container = document.getElementById('hours-content');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  const status = checkOpen();
  const todayIndex = status.now.getDay();
  const currentTime = status.now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  
  container.innerHTML = `
    <div class="hours-status-card">
      <div class="hours-status-top">
        <div class="hours-clock-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <p class="hours-label">${t('hours.today')} • ${isAr ? 'توقيت الجزائر' : 'Heure d’Alger'}</p>
          <p class="hours-time">${currentTime}</p>
        </div>
      </div>
      
      <div class="status-badge ${status.open ? 'open' : 'closed'}">
        <span class="status-dot ${status.open ? 'open' : 'closed'}"></span>
        <span>${status.open ? t('hours.open') : t('hours.closed')}</span>
      </div>
      
      <p class="hours-desc">
        ${status.open 
          ? (isAr ? 'المحل مفتوح حالياً لاستقبال الزبونات.' : 'La boutique est actuellement disponible pour accueillir les clients.')
          : (isAr ? 'المحل مغلق حالياً. راجعي المواعيد.' : 'La boutique est actuellement fermée. Consultez les horaires ci-contre.')
        }
      </p>
    </div>
    
    <div class="schedule-table">
      ${SCHEDULE.map(d => `
        <div class="schedule-row ${d.day === todayIndex ? 'today' : ''}">
          <div>
            <p class="day-name">${t('days.' + d.dayKey)}</p>
            ${d.day === todayIndex ? `<p class="today-label">${t('hours.today')}</p>` : ''}
          </div>
          <div class="schedule-time">
            ${d.closed ? `<span class="schedule-closed">${t('hours.closed')}</span>` : `${d.open} — ${d.close}`}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderMapSection() {
  const container = document.getElementById('map-content');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  const directionsUrl = STORE.directionsUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(STORE.address));
  
  container.innerHTML = `
    <div class="map-frame">
      ${STORE.googleMapsUrl 
        ? `<iframe src="${STORE.googleMapsUrl}" width="100%" height="520" style="border:0" allowfullscreen loading="lazy"></iframe>`
        : `<div style="height:520px; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.3); color:rgba(255,255,255,0.5); font-size:0.875rem; text-align:center; padding:1.5rem">
            <p>Configurez NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL dans .env.local</p>
          </div>`
      }
    </div>
    
    <div class="contact-cards">
      <div class="contact-card">
        <p class="contact-label">${isAr ? 'العنوان' : 'Adresse'}</p>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <p>${STORE.address}</p>
        </div>
      </div>
      
      <div class="contact-card">
        <p class="contact-label">${isAr ? 'التواصل' : 'Contact'}</p>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:${STORE.phone}">${STORE.phone}</a>
        </div>
        <div class="contact-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:${STORE.email}">${STORE.email}</a>
        </div>
      </div>
      
      <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" class="directions-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        <span>${t('map.getDirections')}</span>
      </a>
    </div>
  `;
}

function renderFooter() {
  const container = document.getElementById('footer-content');
  if (!container) return;
  
  const isAr = currentLang === 'ar';
  const name = isAr ? STORE.nameAr : STORE.name;
  
  container.innerHTML = `
    <div class="grid-footer">
      <div>
        <p class="footer-label">${isAr ? 'الدار' : 'La Maison'}</p>
        <h3 class="footer-title">${name}</h3>
        <ul class="footer-list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${STORE.address}</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <a href="tel:${STORE.phone}">${STORE.phone}</a>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:${STORE.email}">${STORE.email}</a>
          </li>
        </ul>
      </div>
      
      <div class="footer-center">
        <p class="footer-label">${isAr ? 'العالم الرقمي' : 'Univers'}</p>
        <h3 class="footer-subtitle">${t('footer.followUs')}</h3>
        
        <div class="social-links">
          ${STORE.facebook ? `<a href="${STORE.facebook}" target="_blank" rel="noopener noreferrer" class="social-link"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>` : ''}
          ${STORE.instagram ? `<a href="${STORE.instagram}" target="_blank" rel="noopener noreferrer" class="social-link"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>` : ''}
          ${STORE.tiktok ? `<a href="${STORE.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link"><svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h.09A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg></a>` : ''}
          <a href="https://wa.me/${STORE.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z"/></svg>
          </a>
        </div>
        
        ${STORE.whatsappGroupLink ? `
          <a href="${STORE.whatsappGroupLink}" target="_blank" rel="noopener noreferrer" class="footer-wa-group">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z"/></svg>
            <span>${t('footer.joinGroup')}</span>
          </a>
        ` : ''}
      </div>
      
      <div class="footer-right">
        <p class="footer-label">${isAr ? 'قانوني' : 'Légal'}</p>
        <h3 class="footer-subtitle">${t('footer.legal')}</h3>
        <div>
          <p class="footer-legal-item"><span class="footer-legal-label">${t('footer.rc')} :</span> ${STORE.rc}</p>
          <p class="footer-legal-item"><span class="footer-legal-label">${t('footer.nif')} :</span> ${STORE.nif}</p>
          <p class="footer-legal-item"><span class="footer-legal-label">${t('footer.nis')} :</span> ${STORE.nis}</p>
        </div>
      </div>
    </div>
  `;
  
  const copyEl = document.getElementById('footer-copyright');
  if (copyEl) {
    const year = new Date().getFullYear();
    copyEl.innerText = `© ${year} ${name}. ${t('footer.rights')}`;
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if (!container || !footer) return;
  
  const isAr = currentLang === 'ar';
  
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>${t('cart.empty')}</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }
  
  container.innerHTML = cartItems.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${isAr ? item.nameAr : item.name}">
      </div>
      <div class="cart-item-details">
        <p class="cart-item-name">${isAr ? item.nameAr : item.name}</p>
        <p class="cart-item-price">${(item.price * item.quantity).toLocaleString()} DA</p>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="${t('cart.remove')}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  footer.style.display = 'block';
  footer.innerHTML = `
    <div class="cart-total-row">
      <span class="cart-total-label">${t('cart.total')}</span>
      <span class="cart-total-value">${getTotalPrice().toLocaleString()} DA</span>
    </div>
    <button class="cart-order-btn" onclick="openOrderModal()">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z"/></svg>
      <span>${t('cart.orderViaWhatsapp')}</span>
    </button>
    <button class="cart-clear-btn" onclick="clearCart()">${t('cart.clear')}</button>
  `;
}

function updateStaticTranslations() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (key) el.innerText = t(key);
  });
  
  document.querySelectorAll('[data-t-badge]').forEach(el => {
    const key = el.getAttribute('data-t-badge');
    if (key) el.innerText = t('badges.' + key);
  });
}

function renderNavbar() {
  const isAr = currentLang === 'ar';
  const brandEl = document.getElementById('navbar-brand');
  if (brandEl) {
    brandEl.innerHTML = `
      <svg class="brand-emblem" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 6 L88 26 L88 64 L50 94 L12 64 L12 26 Z" stroke="url(#gold-grad)" stroke-width="2.5" fill="rgba(245, 166, 35, 0.06)" />
        <path d="M30 42 L38 58 L50 40 L62 58 L70 42 L67 68 H33 Z" stroke="url(#gold-grad)" stroke-width="2" fill="url(#gold-grad-light)" />
        <circle cx="30" cy="37" r="2.5" fill="#f5a623" />
        <circle cx="50" cy="34" r="3" fill="#f5a623" />
        <circle cx="70" cy="37" r="2.5" fill="#f5a623" />
        <path d="M35 73 H65" stroke="#f5a623" stroke-width="2" stroke-linecap="round" />
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffd27a" />
            <stop offset="50%" stop-color="#f5a623" />
            <stop offset="100%" stop-color="#b87b14" />
          </linearGradient>
          <linearGradient id="gold-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(255, 210, 122, 0.25)" />
            <stop offset="100%" stop-color="rgba(245, 166, 35, 0.05)" />
          </linearGradient>
        </defs>
      </svg>
      <div class="brand-text-container">
        <span class="brand-title">${isAr ? STORE.nameAr : STORE.name}</span>
        <span class="brand-subtitle">${isAr ? 'هوت كوتور • قفاطين فاخرة' : 'HAUTE COUTURE • ALGER'}</span>
      </div>
    `;
  }
  
  const badgeEl = document.getElementById('cart-badge');
  const total = getTotalItems();
  if (badgeEl) {
    badgeEl.innerText = total;
    badgeEl.style.display = total > 0 ? 'flex' : 'none';
  }
  
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.innerText = isAr ? 'FR' : 'AR';
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  localStorage.setItem('boutique_lang', lang);
  renderAll();
}

function renderAll() {
  updateStaticTranslations();
  renderNavbar();
  renderCategories();
  renderProducts();
  renderGallery();
  renderServices();
  renderTestimonials();
  renderOpeningHours();
  renderMapSection();
  renderFooter();
  renderCart();
  
  const waUrl = 'https://wa.me/' + STORE.whatsappNumber + '?text=' + encodeURIComponent(t('order.whatsappMessage'));
  
  const waFab = document.getElementById('whatsapp-fab');
  if (waFab) waFab.href = waUrl;
  
  const waHero = document.getElementById('hero-btn-whatsapp');
  if (waHero) waHero.href = waUrl;
}

// ============================================================================
// LIGHTBOX
// ============================================================================

function openLightbox(index) {
  lightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  
  if (lightbox && img && GALLERY[index]) {
    img.src = GALLERY[index].src;
    img.alt = currentLang === 'ar' ? GALLERY[index].altAr : GALLERY[index].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
  openLightbox(lightboxIndex);
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
  openLightbox(lightboxIndex);
}

// ============================================================================
// MODAL & SIDEBARS
// ============================================================================

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('active');
  document.getElementById('cart-sidebar')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('active');
  document.getElementById('cart-sidebar')?.classList.remove('active');
  document.body.style.overflow = '';
}

function openOrderModal() {
  closeCart();
  const modal = document.getElementById('order-modal');
  const totalEl = document.getElementById('order-total');
  if (totalEl) totalEl.innerText = `${getTotalPrice().toLocaleString()} DA`;
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  const modal = document.getElementById('order-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  const successEl = document.getElementById('order-success');
  const formEl = document.getElementById('order-form');
  if (successEl) successEl.style.display = 'none';
  if (formEl) formEl.style.display = 'flex';
}

function submitOrder(e) {
  e.preventDefault();
  
  const name = document.getElementById('order-name')?.value.trim();
  const phone = document.getElementById('order-phone')?.value.trim();
  const address = document.getElementById('order-address')?.value.trim();
  const city = document.getElementById('order-city')?.value.trim();
  const notes = document.getElementById('order-notes')?.value.trim();
  
  let hasError = false;
  if (!name) { document.getElementById('error-name').innerText = t('order.required'); hasError = true; } else { document.getElementById('error-name').innerText = ''; }
  if (!phone) { document.getElementById('error-phone').innerText = t('order.required'); hasError = true; } else { document.getElementById('error-phone').innerText = ''; }
  if (!address) { document.getElementById('error-address').innerText = t('order.required'); hasError = true; } else { document.getElementById('error-address').innerText = ''; }
  if (!city) { document.getElementById('error-city').innerText = t('order.required'); hasError = true; } else { document.getElementById('error-city').innerText = ''; }
  
  if (hasError) return;
  
  const list = cartItems.map(i => `- ${currentLang === 'ar' ? i.nameAr || i.name : i.name} x${i.quantity} = ${(i.price * i.quantity).toLocaleString()} DA`).join('\n');
  const msg = `${t('order.whatsappMessage')}\n\n📋 *${t('order.name')}:* ${name}\n📞 *${t('order.phone')}:* ${phone}\n📍 *${t('order.address')}:* ${address}, ${city}\n\n🛒 *Commande:*\n${list}\n\n💰 *${t('cart.total')}:* ${getTotalPrice().toLocaleString()} DA${notes ? `\n\n📝 ${notes}` : ''}`;
  
  window.open(`https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  
  document.getElementById('order-form').style.display = 'none';
  document.getElementById('order-success').style.display = 'block';
  
  clearCart();
  
  setTimeout(() => {
    closeOrderModal();
    document.getElementById('order-form').reset();
  }, 3000);
}

// ============================================================================
// ANIMATIONS ET INITIALISATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  
  renderAll();
  
  // Scroll Navbar
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
  
  // Parallax Blobs
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax-blobs').forEach(blobContainer => {
      const parent = blobContainer.closest('.parallax-wrapper');
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const offset = (rect.top / window.innerHeight) * 40;
        blobContainer.style.transform = `translateY(${offset}px)`;
      }
    });
  });
  
  // Toggle Langue Button
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'fr' ? 'ar' : 'fr');
  });
  
  // Panier UI
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  
  // Order Modal UI
  document.getElementById('order-close')?.addEventListener('click', closeOrderModal);
  document.getElementById('order-modal-backdrop')?.addEventListener('click', closeOrderModal);
  document.getElementById('order-form')?.addEventListener('submit', submitOrder);
  
  // Lightbox UI
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next')?.addEventListener('click', lightboxNext);
  document.getElementById('lightbox-prev')?.addEventListener('click', lightboxPrev);
  
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') currentLang === 'ar' ? lightboxPrev() : lightboxNext();
      if (e.key === 'ArrowLeft') currentLang === 'ar' ? lightboxNext() : lightboxPrev();
    }
  });
  
  // Menu Mobile UI
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-icon-open');
  const menuCloseIcon = document.getElementById('menu-icon-close');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      if (menuOpenIcon) menuOpenIcon.style.display = isOpen ? 'none' : 'block';
      if (menuCloseIcon) menuCloseIcon.style.display = isOpen ? 'block' : 'none';
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        if (menuOpenIcon) menuOpenIcon.style.display = 'block';
        if (menuCloseIcon) menuCloseIcon.style.display = 'none';
      });
    });
  }
  
  // Actualiser les horaires chaque minute
  setInterval(renderOpeningHours, 60000);
});
