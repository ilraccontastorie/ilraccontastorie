const comics = [
  {id:1,title:"Spider-Man #1",number:"#1",publisher:"Marvel Comics",year:"1990",edition:"Silver Edition",type:"regular",category:"marvel",grade:"9.8",grader:"CGC",era:"vintage",image:"images/spiderman-1-silver-98.webp",description:"Spider-Man #1 del 1990, Silver Edition, con storia, copertina e arte di Todd McFarlane. Esemplare graduato CGC 9.8.",new:true,color:"red"},
  {id:2,title:"Deadpool vs. Carnage #1",number:"#1",publisher:"Marvel Comics",year:"2014",edition:"Direct Edition",type:"signed",category:"marvel",grade:"9.4",grader:"CGC Signature Series",era:"modern",image:"images/deadpool-vs-carnage-1-signed-94.jpg",description:"Deadpool vs. Carnage #1 del 2014, Direct Edition, firmato da Glenn Fabry il 19/09/2023. Storia di Cullen Bunn, matite di Salva Espin e copertina di Glenn Fabry.",new:true,color:"red"},
  {id:3,title:"Simpsons Comics #1",number:"#1",publisher:"Bongo Comics Group",year:"1993",edition:"First Issue Collector’s Item",type:"signed",category:"other",grade:"9.6",grader:"CGC x JSA Authentic Autograph",era:"vintage",image:"images/simpsons-comics-1-signed-96.jpg",description:"Prima uscita di Simpsons Comics del 1993, Bongo Comics Group. Esemplare CGC 9.6 con autografo autenticato da JSA e firma di Bill Morrison. Storia e arte indicate sulla slab: Steve e Cindy Vance, Sondra R. & Tim Bavington, Bill Morrison.",new:true,color:"yellow"},
  {id:4,title:"Batman",number:"—",publisher:"DC Comics",year:"—",edition:"Signed",type:"signed",category:"dc",grade:"—",grader:"—",era:"—",image:"images/batman-signed.jpg",description:"Copia/autografo a tema Batman. La fotografia fornita mostra più firme sul fumetto, ma non rende visibili numero, anno, edizione o certificazione; questi dati potranno essere completati quando avremo una foto della slab o della testata.",new:true,color:"blue"},
  {id:5,title:"Amazing Spider-Man #361",number:"#361",publisher:"Marvel",year:"1992",edition:"Regular",type:"regular",category:"marvel",grade:"9.6",grader:"CGC",era:"vintage",description:"Esempio di scheda catalogo.",new:false,color:"red"},
  {id:6,title:"Batman #1",number:"#1",publisher:"DC",year:"2016",edition:"Signed",type:"signed",category:"dc",grade:"9.8",grader:"CGC",era:"modern",description:"Esempio di fumetto signed moderno.",new:false,color:"blue"},
  {id:7,title:"The Walking Dead #1",number:"#1",publisher:"Image",year:"2003",edition:"Regular",type:"regular",category:"image",grade:"9.6",grader:"CGC",era:"modern",description:"Esempio di fumetto Image moderno.",new:false,color:"dark"},
  {id:8,title:"X-Men #1",number:"#1",publisher:"Marvel",year:"1991",edition:"Signed",type:"signed",category:"marvel",grade:"9.6",grader:"CGC",era:"vintage",description:"Esempio di copia firmata.",new:false,color:"red"},
  {id:9,title:"Wolverine #41",number:"#41",publisher:"Marvel Comics",year:"2024",edition:"Capullo 'Virgin' Edition",type:"signed",category:"marvel",grade:"9.8",grader:"CGC Signature Series",era:"modern",image:"images/wolverine-41-signed-98.jpg",description:"Wolverine #41, Marvel Comics. Esemplare CGC Signature Series 9.8, Capullo 'Virgin' Edition, firmato da Benjamin Percy e Greg Capullo.",new:true,color:"red"},
  {id:10,title:"Doom 2099 #1",number:"#1",publisher:"Marvel Comics",year:"1993",edition:"Foil Cover",type:"regular",category:"marvel",grade:"9.8",grader:"CGC",era:"vintage",image:"images/doom-2099-1-98.jpg",description:"Doom 2099 #1 del 1993, Marvel Comics, con Foil Cover. Esemplare graduato CGC 9.8.",new:true,color:"red"}
];

const translations = {
  it:{
    nav_comics:"Fumetti",nav_categories:"Categorie",nav_about:"Chi siamo",nav_contact:"Contatti",
    hero_kicker:"FUMETTI GRADATI · COLLEZIONISMO",hero_title:"IL TUO PROSSIMO<br><span>PEZZO DA COLLEZIONE.</span>",
    hero_text:"Una vetrina dedicata ai fumetti da collezione: CGC, signed, variant e grandi classici. Scopri le nostre disponibilità e contattaci per informazioni.",
    hero_button:"SCOPRI I FUMETTI",hero_button2:"ESPLORA LE CATEGORIE",section_categories:"CATEGORIE",
    section_featured:"IN VETRINA",featured_title:"Ultimi arrivi",view_all:"Vedi catalogo →",
    collection_title:"Modern & Vintage",modern_label:"MODERNI",modern_title:"Le uscite che stanno costruendo il futuro.",
    vintage_label:"VINTAGE",vintage_title:"Classici che hanno fatto la storia.",
    section_catalog:"CATALOGO",catalog_title:"I nostri fumetti",search_placeholder:"Cerca un fumetto...",
    all:"Tutti",regular:"Regular",signed:"Signed",no_results:"Nessun fumetto trovato.",
    section_about:"IL PROGETTO",about_title:"Il Raccontastorie",
    about_text:"Una vetrina dedicata alla passione per i fumetti gradati e al collezionismo. Qui puoi esplorare le nostre disponibilità, conoscere meglio ogni pezzo e contattarci direttamente.",
    about_text2:"Il sito non è uno shop: per ogni fumetto trovi una scheda completa e un pulsante per richiedere informazioni.",
    section_contact:"CONTATTI",contact_title:"Hai trovato il fumetto che cercavi?",contact_text:"Scrivici. Ti risponderemo per disponibilità e informazioni.",
    request:"RICHIEDI INFORMAZIONI",description:"Descrizione",details:"Dettagli",category:"Categoria",type:"Tipo",
    number:"Numero",publisher:"Editore",year:"Anno",edition:"Edizione",grade:"Grading",close:"Chiudi"
  },
  en:{
    nav_comics:"Comics",nav_categories:"Categories",nav_about:"About",nav_contact:"Contact",
    hero_kicker:"GRADED COMICS · COLLECTING",hero_title:"YOUR NEXT<br><span>COLLECTOR'S PIECE.</span>",
    hero_text:"A showcase dedicated to collectible comics: CGC, signed editions, variants and classics. Discover our selection and contact us for information.",
    hero_button:"EXPLORE COMICS",hero_button2:"EXPLORE CATEGORIES",section_categories:"CATEGORIES",
    section_featured:"FEATURED",featured_title:"Latest arrivals",view_all:"View catalog →",
    collection_title:"Modern & Vintage",modern_label:"MODERN",modern_title:"The releases shaping the future.",
    vintage_label:"VINTAGE",vintage_title:"Classics that made history.",
    section_catalog:"CATALOG",catalog_title:"Our comics",search_placeholder:"Search a comic...",
    all:"All",regular:"Regular",signed:"Signed",no_results:"No comics found.",
    section_about:"THE PROJECT",about_title:"Il Raccontastorie",
    about_text:"A showcase built around our passion for graded comics and collecting. Explore our selection, learn more about each piece and contact us directly.",
    about_text2:"This is not an online shop: every comic has a complete profile and a button to request information.",
    section_contact:"CONTACT",contact_title:"Found the comic you were looking for?",contact_text:"Write to us for availability and information.",
    request:"REQUEST INFORMATION",description:"Description",details:"Details",category:"Category",type:"Type",
    number:"Number",publisher:"Publisher",year:"Year",edition:"Edition",grade:"Grading",close:"Close"
  },
  es:{
    nav_comics:"Cómics",nav_categories:"Categorías",nav_about:"Quiénes somos",nav_contact:"Contacto",
    hero_kicker:"CÓMICS GRADUADOS · COLECCIONISMO",hero_title:"TU PRÓXIMA<br><span>PIEZA DE COLECCIÓN.</span>",
    hero_text:"Un escaparate dedicado a los cómics de colección: CGC, ediciones firmadas, variantes y clásicos. Descubre nuestra selección y contáctanos para más información.",
    hero_button:"DESCUBRE LOS CÓMICS",hero_button2:"EXPLORA LAS CATEGORÍAS",section_categories:"CATEGORÍAS",
    section_featured:"DESTACADOS",featured_title:"Últimas novedades",view_all:"Ver catálogo →",
    collection_title:"Modernos y Vintage",modern_label:"MODERNOS",modern_title:"Las ediciones que están construyendo el futuro.",
    vintage_label:"VINTAGE",vintage_title:"Clásicos que hicieron historia.",
    section_catalog:"CATÁLOGO",catalog_title:"Nuestros cómics",search_placeholder:"Buscar un cómic...",
    all:"Todos",regular:"Regular",signed:"Firmado",no_results:"No se encontraron cómics.",
    section_about:"EL PROYECTO",about_title:"Il Raccontastorie",
    about_text:"Un escaparate creado alrededor de nuestra pasión por los cómics graduados y el coleccionismo. Explora nuestra selección, conoce cada pieza y contáctanos directamente.",
    about_text2:"Este sitio no es una tienda online: cada cómic tiene una ficha completa y un botón para solicitar información.",
    section_contact:"CONTACTO",contact_title:"¿Has encontrado el cómic que buscabas?",contact_text:"Escríbenos para consultar disponibilidad e información.",
    request:"SOLICITAR INFORMACIÓN",description:"Descripción",details:"Detalles",category:"Categoría",type:"Tipo",
    number:"Número",publisher:"Editorial",year:"Año",edition:"Edición",grade:"Grading",close:"Cerrar"
  },
  fr:{
    nav_comics:"Bandes dessinées",nav_categories:"Catégories",nav_about:"À propos",nav_contact:"Contact",
    hero_kicker:"BD GRADÉES · COLLECTION",hero_title:"VOTRE PROCHAINE<br><span>PIÈCE DE COLLECTION.</span>",
    hero_text:"Une vitrine dédiée aux bandes dessinées de collection : CGC, éditions signées, variantes et classiques. Découvrez notre sélection et contactez-nous.",
    hero_button:"DÉCOUVRIR LES BD",hero_button2:"EXPLORER LES CATÉGORIES",section_categories:"CATÉGORIES",
    section_featured:"À LA UNE",featured_title:"Dernières arrivées",view_all:"Voir le catalogue →",
    collection_title:"Moderne & Vintage",modern_label:"MODERNE",modern_title:"Les éditions qui construisent l'avenir.",
    vintage_label:"VINTAGE",vintage_title:"Les classiques qui ont marqué l'histoire.",
    section_catalog:"CATALOGUE",catalog_title:"Nos bandes dessinées",search_placeholder:"Rechercher une BD...",
    all:"Toutes",regular:"Regular",signed:"Signée",no_results:"Aucune BD trouvée.",
    section_about:"LE PROJET",about_title:"Il Raccontastorie",
    about_text:"Une vitrine dédiée à notre passion pour les bandes dessinées gradées et la collection. Explorez notre sélection et contactez-nous directement.",
    about_text2:"Ce site n'est pas une boutique en ligne : chaque BD possède une fiche complète et un bouton pour demander des informations.",
    section_contact:"CONTACT",contact_title:"Vous avez trouvé la BD que vous cherchiez ?",contact_text:"Écrivez-nous pour connaître la disponibilité et obtenir des informations.",
    request:"DEMANDER DES INFORMATIONS",description:"Description",details:"Détails",category:"Catégorie",type:"Type",
    number:"Numéro",publisher:"Éditeur",year:"Année",edition:"Édition",grade:"Grading",close:"Fermer"
  },
  de:{
    nav_comics:"Comics",nav_categories:"Kategorien",nav_about:"Über uns",nav_contact:"Kontakt",
    hero_kicker:"GEGRADete COMICS · SAMMELN",hero_title:"DEIN NÄCHSTES<br><span> SAMMLERSTÜCK.</span>",
    hero_text:"Eine Vitrine für hochwertige Sammler-Comics: CGC, signierte Ausgaben, Varianten und Klassiker. Entdecke unsere Auswahl und kontaktiere uns für weitere Informationen.",
    hero_button:"COMICS ENTDECKEN",hero_button2:"KATEGORIEN ENTDECKEN",section_categories:"KATEGORIEN",
    section_featured:"HIGHLIGHTS",featured_title:"Neueste Zugänge",view_all:"Katalog ansehen →",
    collection_title:"Modern & Vintage",modern_label:"MODERN",modern_title:"Ausgaben, die die Zukunft prägen.",
    vintage_label:"VINTAGE",vintage_title:"Klassiker, die Geschichte geschrieben haben.",
    section_catalog:"KATALOG",catalog_title:"Unsere Comics",search_placeholder:"Comic suchen...",
    all:"Alle",regular:"Regular",signed:"Signiert",no_results:"Keine Comics gefunden.",
    section_about:"DAS PROJEKT",about_title:"Il Raccontastorie",
    about_text:"Eine Vitrine aus Leidenschaft für gegradete Comics und das Sammeln. Entdecke unsere Auswahl, erfahre mehr über jedes Stück und kontaktiere uns direkt.",
    about_text2:"Dies ist kein Online-Shop: Jeder Comic besitzt eine vollständige Karte und eine Schaltfläche für Informationsanfragen.",
    section_contact:"KONTAKT",contact_title:"Hast du den gesuchten Comic gefunden?",contact_text:"Schreib uns für Verfügbarkeit und weitere Informationen.",
    request:"INFORMATIONEN ANFRAGEN",description:"Beschreibung",details:"Details",category:"Kategorie",type:"Typ",
    number:"Nummer",publisher:"Verlag",year:"Jahr",edition:"Ausgabe",grade:"Grading",close:"Schließen"
  }
};

let currentLang="it", activeCategory="all", activeType="all", activeEra=null;

function t(key){return translations[currentLang][key] || key;}

function placeholder(c){
  return `<div class="placeholder-cover ${c.color}">
    <span class="cover-publisher">${c.publisher.toUpperCase()}</span>
    <span class="cover-title">${c.title}</span>
    <span class="cover-grade">${c.grader} ${c.grade}</span>
  </div>`;
}

function card(c){
  const badges = [
    `<span class="comic-badge publisher-badge">${c.publisher.replace(" Comics","").toUpperCase()}</span>`,
    `<span class="comic-badge type-badge">${c.type === "signed" ? t("signed").toUpperCase() : t("regular").toUpperCase()}</span>`,
    `<span class="comic-badge grade-badge">${c.grade}</span>`
  ].join("");
  return `<article class="comic-card-item" data-id="${c.id}">
    <div class="cover">${c.image ? `<img src="${c.image}" alt="${c.title}">` : placeholder(c)}</div>
    <div class="comic-meta">
      <div class="comic-badges">${badges}</div>
      <h3>${c.title}</h3>
      <p>${c.publisher} · ${c.year}</p>
      <span class="card-arrow">${t("request")} →</span>
    </div>
  </article>`;
}

function renderFeatured(){
  const grid=document.getElementById("featured-grid");
  grid.innerHTML=comics.filter(c=>c.new).slice(0,4).map(card).join("");
  bindCards();
}

function renderCatalog(){
  const q=document.getElementById("search").value.trim().toLowerCase();
  let list=comics.filter(c=>{
    const categoryOK=activeCategory==="all" || c.category===activeCategory;
    const typeOK=activeType==="all" || c.type===activeType;
    const eraOK=!activeEra || c.era===activeEra;
    const qOK=!q || [c.title,c.publisher,c.year,c.edition,c.grade].join(" ").toLowerCase().includes(q);
    return categoryOK && typeOK && eraOK && qOK;
  });
  const grid=document.getElementById("catalog-grid");
  grid.innerHTML=list.map(card).join("");
  document.getElementById("empty-state").hidden=list.length>0;
  bindCards();
}

function bindCards(){
  document.querySelectorAll(".comic-card-item").forEach(el=>{
    el.addEventListener("click",()=>openModal(Number(el.dataset.id)));
  });
}

function openModal(id){
  const c=comics.find(x=>x.id===id);
  const modal=document.getElementById("comic-modal");
  const content=document.getElementById("modal-content");
  content.innerHTML=`<div class="modal-product">
    <div class="cover">${c.image ? `<img src="${c.image}" alt="${c.title}">` : placeholder(c)}</div>
    <div class="modal-details">
      <div class="section-label">${c.category.toUpperCase()} · ${c.type.toUpperCase()}</div>
      <h2>${c.title}</h2>
      <div class="details-list">
        <div class="detail"><b>${t("number")}</b><span>${c.number}</span></div>
        <div class="detail"><b>${t("publisher")}</b><span>${c.publisher}</span></div>
        <div class="detail"><b>${t("year")}</b><span>${c.year}</span></div>
        <div class="detail"><b>${t("edition")}</b><span>${c.edition}</span></div>
        <div class="detail"><b>${t("grade")}</b><span>${c.grade}</span></div>
      </div>
      <h4>${t("description")}</h4>
      <p>${c.description}</p>
      <a class="request-btn" href="https://wa.me/393385243303?text=${encodeURIComponent("Ciao, sono interessato al fumetto: "+c.title)}" target="_blank" rel="noopener">${t("request")} ↗</a>
    </div>
  </div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){
  const modal=document.getElementById("comic-modal");
  modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";
}

function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  renderFeatured(); renderCatalog();
}

document.addEventListener("DOMContentLoaded",()=>{
  renderFeatured();renderCatalog();
  document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    if(btn.dataset.category){
      activeCategory=btn.dataset.category;
      activeType=btn.dataset.type || "all";
    } else {
      activeCategory="all";
      activeType="all";
    }
    activeEra=null;
    renderCatalog();
  }));
  document.querySelectorAll(".category-card").forEach(btn=>btn.addEventListener("click",()=>{
    activeCategory=btn.dataset.category;activeType="all";activeEra=null;
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    const target=document.querySelector(`.main-tab[data-category="${activeCategory}"]`);
    if(target) target.classList.add("active");
    renderCatalog();
  }));
  document.querySelectorAll(".split-card").forEach(btn=>btn.addEventListener("click",()=>{
    activeEra=btn.dataset.era;activeCategory="all";activeType="all";
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelector('.main-tab[data-filter="all"]').classList.add("active");
    renderCatalog();
  }));
  const backTop=document.getElementById("back-to-top");
  backTop.addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});
  document.getElementById("search").addEventListener("input",renderCatalog);
  document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
  document.querySelector(".modal-close").addEventListener("click",closeModal);
  document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
  const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
});
