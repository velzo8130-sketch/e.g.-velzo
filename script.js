/* ===== VELZO shared data + logic ===== */

const ICONS = {
  earbuds:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 26v14a8 8 0 1 0 8-8"/><path d="M44 26v14a8 8 0 1 1-8-8"/><path d="M20 26a12 12 0 0 1 24 0"/></svg>`,
  watch:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="20" y="20" width="24" height="24" rx="5"/><path d="M26 20v-8h12v8M26 44v8h12v-8"/><path d="M32 28v6l4 3"/></svg>`,
  lamp:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M32 8l14 14H18z"/><path d="M32 22v18"/><path d="M20 52h24"/><path d="M26 46h12l2 6H24z"/></svg>`,
  stand:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 50h36"/><path d="M20 50V34l24-10v26"/><path d="M20 34l24-10"/></svg>`,
  backpack:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 26v-4a12 12 0 0 1 24 0v4"/><rect x="16" y="26" width="32" height="30" rx="6"/><path d="M26 34h12M24 44h16"/></svg>`,
  bottle:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M26 10h12v8l4 6v28a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V24l4-6z"/><path d="M22 34h20"/></svg>`,
  charger:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="32" cy="32" r="18"/><path d="M32 22v10l7 5"/></svg>`,
  projector:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="10" y="22" width="30" height="20" rx="4"/><circle cx="25" cy="32" r="6"/><path d="M40 28l14-6v20l-14-6"/></svg>`,
  tracker:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="22" y="16" width="20" height="32" rx="6"/><path d="M28 16v-4h8v4M28 48v4h8v-4"/></svg>`,
};

const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/></svg>`;
const TRUCK_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>`;
const CASH_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>`;
const SHIELD_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v5c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V7z"/></svg>`;
const STAR_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.7 5.8 6.3.6-4.7 4.3 1.3 6.3L12 16.9 6.4 20l1.3-6.3-4.7-4.3 6.3-.6z"/></svg>`;

const PRODUCTS = [
  {id:"aura-earbuds",name:"Aura Wireless Earbuds",cat:"Tech",icon:"earbuds",price:149,old:219,tag:"Bestseller",
    desc:"Compact true-wireless earbuds with active noise cancellation and a 30-hour case battery.",
    specs:[["Battery","8h + 30h case"],["Connectivity","Bluetooth 5.3"],["Water resistance","IPX5"],["Weight","4.2g per bud"]]},
  {id:"pulse-watch",name:"Pulse Smart Watch",cat:"Tech",icon:"watch",price:220,old:329,tag:"Trending",
    desc:"Track heart rate, sleep and workouts with a bright always-on display that lasts a week per charge.",
    specs:[["Display","1.4\" AMOLED"],["Battery life","7 days"],["Water resistance","5 ATM"],["Sensors","HR, SpO2, GPS"]]},
  {id:"novaglow-lamp",name:"NovaGlow LED Desk Lamp",cat:"Home",icon:"lamp",price:89,old:129,tag:"New",
    desc:"Adjustable colour-temperature desk lamp with touch dimming and a built-in USB charging port.",
    specs:[["Brightness","3 levels"],["Color temp","3000K–6500K"],["Power","USB-C, 8W"],["Arm","Foldable, 3-joint"]]},
  {id:"flexmount-stand",name:"FlexMount Phone Stand",cat:"Lifestyle",icon:"stand",price:55,old:null,tag:"Value pick",
    desc:"An aluminium, fold-flat phone and tablet stand that adjusts to any angle for calls, video or reading.",
    specs:[["Material","Aircraft aluminium"],["Compatibility","4\"–13\" devices"],["Folded size","12 x 4 cm"],["Weight","95g"]]},
  {id:"trekpack-backpack",name:"TrekPack Foldable Backpack",cat:"Lifestyle",icon:"backpack",price:129,old:165,tag:"Trending",
    desc:"A packable 20L backpack that folds into its own pocket — water-resistant and built for everyday carry.",
    specs:[["Capacity","20L"],["Material","Ripstop nylon"],["Folded size","Palm-sized"],["Straps","Padded, breathable"]]},
  {id:"coreflask-bottle",name:"CoreFlask Insulated Bottle",cat:"Lifestyle",icon:"bottle",price:75,old:null,tag:null,
    desc:"Double-wall stainless steel bottle that keeps drinks cold for 24h or hot for 12h.",
    specs:[["Capacity","750ml"],["Material","18/8 stainless steel"],["Insulation","24h cold / 12h hot"],["Lid","Leak-proof flip"]]},
  {id:"airclip-charger",name:"AirClip Wireless Charger",cat:"Tech",icon:"charger",price:85,old:109,tag:null,
    desc:"A magnetic 15W fast wireless charger that snaps to your phone and folds flat for travel.",
    specs:[["Output","15W max"],["Compatibility","Qi / MagSafe"],["Cable","1.2m USB-C"],["Fold","3-way stand"]]},
  {id:"snaplight-projector",name:"SnapLight Mini Projector",cat:"Home",icon:"projector",price:295,old:399,tag:"New",
    desc:"A pocket-sized projector that turns any wall into a 100-inch screen, with built-in speaker.",
    specs:[["Resolution","1080p support"],["Screen size","Up to 100\""],["Battery","2h internal"],["Ports","HDMI, USB, microSD"]]},
  {id:"zenband-tracker",name:"ZenBand Fitness Tracker",cat:"Tech",icon:"tracker",price:99,old:null,tag:"Bestseller",
    desc:"A featherlight fitness band with step, sleep and heart-rate tracking and a 12-day battery.",
    specs:[["Battery life","12 days"],["Display","AMOLED"],["Water resistance","IP68"],["Weight","22g"]]},
];

function fmt(n){return "AED "+n.toFixed(2);}

function productCard(p){
  return `<a class="card" href="product.html?id=${p.id}">
    ${p.tag?`<span class="card-tag">${p.tag}</span>`:""}
    <div class="card-media">${ICONS[p.icon]}</div>
    <h3>${p.name}</h3>
    <p class="card-desc">${p.desc}</p>
    <div class="card-row">
      <span class="price">${fmt(p.price)}${p.old?`<small>${fmt(p.old)}</small>`:""}</span>
      <span class="btn btn-outline" style="padding:8px 16px;font-size:.8rem;">View</span>
    </div>
  </a>`;
}

function renderGrid(el, items){
  if(!el) return;
  el.innerHTML = items.length ? items.map(productCard).join("") : `<div class="empty-state">No products in this category yet.</div>`;
}

function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

/* ---- nav toggle ---- */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(toggle && links){
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
  }

  /* ---- home: trending grid ---- */
  const trendingEl = document.getElementById("trending-grid");
  if(trendingEl){ renderGrid(trendingEl, PRODUCTS.slice(0,6)); }

  /* ---- shop: filterable grid ---- */
  const shopEl = document.getElementById("shop-grid");
  if(shopEl){
    const chips = document.querySelectorAll(".chip");
    renderGrid(shopEl, PRODUCTS);
    chips.forEach(chip=>{
      chip.addEventListener("click", ()=>{
        chips.forEach(c=>c.classList.remove("active"));
        chip.classList.add("active");
        const cat = chip.dataset.cat;
        renderGrid(shopEl, cat==="All" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===cat));
      });
    });
  }

  /* ---- product detail page ---- */
  const detailEl = document.getElementById("product-detail");
  if(detailEl){
    const id = getParam("id");
    const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
    document.title = p.name + " — VELZO";
    detailEl.innerHTML = `
      <div class="product-gallery">${ICONS[p.icon]}</div>
      <div class="product-info">
        ${p.tag?`<span class="badge">${p.tag}</span>`:""}
        <h1>${p.name}</h1>
        <p>${p.desc}</p>
        <div class="price-row"><span class="price">${fmt(p.price)}</span>${p.old?`<span class="old">${fmt(p.old)}</span>`:""}</div>
        <div class="product-actions">
          <a class="btn btn-primary" href="order.html?product=${encodeURIComponent(p.name)}&price=${p.price}">${CASH_ICON} Order — Cash on Delivery</a>
          <a class="btn btn-outline" href="shop.html">Back to shop</a>
        </div>
        <div class="spec-list">
          ${p.specs.map(s=>`<div class="spec-row"><span>${s[0]}</span><span>${s[1]}</span></div>`).join("")}
        </div>
      </div>`;

    const relatedEl = document.getElementById("related-grid");
    if(relatedEl){
      const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,3);
      renderGrid(relatedEl, related.length?related:PRODUCTS.filter(x=>x.id!==p.id).slice(0,3));
    }
  }

  /* ---- order form ---- */
  const orderForm = document.getElementById("order-form");
  if(orderForm){
    const productField = document.getElementById("order-product");
    const priceField = document.getElementById("order-price-display");
    const presetName = getParam("product");
    const presetPrice = getParam("price");

    PRODUCTS.forEach(p=>{
      const opt = document.createElement("option");
      opt.value = p.name; opt.dataset.price = p.price;
      opt.textContent = `${p.name} — ${fmt(p.price)}`;
      productField.appendChild(opt);
    });
    if(presetName){
      productField.value = presetName;
    }
    function syncPrice(){
      const opt = productField.selectedOptions[0];
      priceField.textContent = opt ? fmt(parseFloat(opt.dataset.price)) : "—";
    }
    productField.addEventListener("change", syncPrice);
    syncPrice();
    if(presetPrice) priceField.textContent = fmt(parseFloat(presetPrice));

    const qtyField = document.getElementById("order-qty");

    orderForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = document.getElementById("order-name").value.trim();
      const phone = document.getElementById("order-phone").value.trim();
      const address = document.getElementById("order-address").value.trim();
      const city = document.getElementById("order-city").value.trim();
      const product = productField.value;
      const qty = qtyField.value || 1;
      const opt = productField.selectedOptions[0];
      const unit = opt ? parseFloat(opt.dataset.price) : 0;
      const total = (unit*qty).toFixed(2);

      document.getElementById("summary-name").textContent = name;
      document.getElementById("summary-phone").textContent = phone;
      document.getElementById("summary-address").textContent = `${address}, ${city}`;
      document.getElementById("summary-product").textContent = `${product} × ${qty}`;
      document.getElementById("summary-total").textContent = "AED "+total+" (due on delivery)";

      document.getElementById("order-form-card").classList.add("hide");
      document.getElementById("order-success").classList.add("show");
      window.scrollTo({top:0, behavior:"smooth"});
    });
  }

  /* ---- contact form ---- */
  const contactForm = document.getElementById("contact-form");
  if(contactForm){
    contactForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      document.getElementById("contact-form-card").classList.add("hide");
      document.getElementById("contact-success").classList.add("show");
    });
  }
});
