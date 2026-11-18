/* ==========================================================
   MUNATIKA - Secciones del inicio + Página de producto (archivo único)
   Inicio: Categorías, Instagram, Tienda, Local, Preguntas, Reseñas
   Producto: precio con transferencia, cuotas, reseñas infinitas,
             confianza, preguntas y barra fija "Comprar" en celular
   ========================================================== */
(function(){
  "use strict";

  // Detecta en qué página estamos
  var path=location.pathname.replace(/\/+$/,"");
  var isHome=path===""||/^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  var isProduct=/\/productos\/[^\/]+/i.test(path);
  if(!isHome&&!isProduct)return;

  // Evita que se cargue dos veces
  if(window.__munatikaLoaded)return;
  window.__munatikaLoaded=true;

  /* =====================================================
     RESEÑAS DE CLIENTES (se usan en el inicio y en cada producto)
     Para agregar otra, copiá una línea y cambiá los datos.
     "producto" es opcional (dejalo vacío "" si no lo sabés).
     ===================================================== */
  var RESENIAS=[
    {nombre:"Matias R.", lugar:"Córdoba", producto:"", texto:"Muchas gracias por la atención, fuimos de vacaciones y pasamos por el local. Es hermoso todo lo que tienen.", estrellas:5},
    {nombre:"Sofia Y.", lugar:"Buenos Aires", producto:"", texto:"Quedé enamorada de las cosas que tienen. En invierno fuimos y todo hermoso.", estrellas:5},
    {nombre:"Maria Jose S.", lugar:"Jujuy", producto:"", texto:"Siempre que venimos al norte nos compramos cositas acá. Es hermoso y la atención es genial!", estrellas:5},
    {nombre:"Nadia M.", lugar:"Santa Cruz", producto:"", texto:"Mis hijos se compraron de todo, todo muy lindo, artesanal y camperas hermosas de abrigo.", estrellas:5},
    {nombre:"Carlos S.", lugar:"Tucumán", producto:"", texto:"Mi esposa encantada con las cosas que compró en este local. Son cosas muy lindas.", estrellas:5},
    {nombre:"Martina G.", lugar:"Salta", producto:"", texto:"Nada que decir, son excelentes las cosas que tienen!", estrellas:5}
  ];

  /* ---------- Utilidades ---------- */
  function ready(fn){
    if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",fn);
    else fn();
  }

  function addFont(){
    var a=document.createElement("link");
    a.rel="preconnect";a.href="https://fonts.googleapis.com";
    var b=document.createElement("link");
    b.rel="preconnect";b.href="https://fonts.gstatic.com";b.crossOrigin="anonymous";
    var c=document.createElement("link");
    c.rel="stylesheet";
    c.href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(a);
    document.head.appendChild(b);
    document.head.appendChild(c);
  }

  function addCSS(css){
    var s=document.createElement("style");
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  function mount(html){
    var t=document.createElement("div");
    t.innerHTML=html.trim();
    var s=t.firstElementChild;
    document.body.appendChild(s);
    return s;
  }

  function topLevel(el){
    while(el.parentElement&&!/^(MAIN|BODY)$/.test(el.parentElement.tagName)&&!el.parentElement.matches("#content, .js-home-sections-container, .js-content")){
      el=el.parentElement;
    }
    return el;
  }

  /* ==========================================================
     1) CATEGORÍAS
     ========================================================== */
  function categorias(){
    addCSS(`
.mnc{--mnc-orange:#B65F36;--trek-pos-desk:right center;--trek-pos-mob:80% 50%;width:100%;background:#fff;padding:28px 0 12px;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.mnc *{box-sizing:border-box;margin:0;padding:0}
.mnc-wrap{max-width:1400px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.mnc-card{position:relative;display:block;overflow:hidden;border-radius:22px;min-height:400px;background:#2b1a0e;color:#fff !important;text-decoration:none !important;box-shadow:0 10px 28px rgba(0,0,0,.14);isolation:isolate;transition:transform .35s ease,box-shadow .35s ease}
.mnc-card:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,.22)}
.mnc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:right center;z-index:-2;transition:transform .7s ease}
.mnc-img.mnc-img--trek{object-position:var(--trek-pos-desk)}
.mnc-card:hover .mnc-img{transform:scale(1.05)}
.mnc-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.5) 40%,rgba(0,0,0,0) 78%)}
.mnc-body{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;height:100%;min-height:400px;padding:34px 36px;max-width:62%}
.mnc-ico{width:64px;height:64px;color:#fff;margin-bottom:14px;flex:none}
.mnc-title{font-size:clamp(2rem,3.4vw,3rem);font-weight:700;line-height:1.05;letter-spacing:-.01em;color:#fff;margin-bottom:10px}
.mnc-desc{font-size:clamp(.95rem,1.2vw,1.1rem);line-height:1.5;color:rgba(255,255,255,.92);margin-bottom:22px;max-width:320px}
.mnc-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:999px;background:#21301D;color:#fff;font-size:.95rem;font-weight:600;line-height:1;transition:background .25s ease,color .25s ease,gap .25s ease}
.mnc-btn--art{background:var(--mnc-orange)}
.mnc-btn b{font-weight:600;transition:transform .25s ease}
.mnc-card:hover .mnc-btn{background:var(--mnc-orange);color:#fff}
.mnc-card:hover .mnc-btn b{transform:translateX(4px)}
@media (max-width:900px){
  .mnc{padding:18px 0 6px}
  .mnc-wrap{grid-template-columns:repeat(2,1fr);gap:10px;padding:0 10px}
  .mnc-card{min-height:290px;border-radius:16px}
  .mnc-body{min-height:290px;max-width:100%;padding:14px 12px}
  .mnc-shade{background:linear-gradient(180deg,rgba(0,0,0,.05) 0%,rgba(0,0,0,.45) 50%,rgba(0,0,0,.88) 100%)}
  .mnc-img{object-position:center}
  .mnc-img.mnc-img--trek{object-position:var(--trek-pos-mob)}
  .mnc-ico{width:34px;height:34px;margin-bottom:6px}
  .mnc-title{font-size:1.35rem;margin-bottom:6px}
  .mnc-desc{font-size:.76rem;line-height:1.4;margin-bottom:12px;max-width:none}
  .mnc-btn{padding:10px 14px;font-size:.74rem;gap:6px}
}
@media (max-width:380px){
  .mnc-card,.mnc-body{min-height:270px}
  .mnc-title{font-size:1.2rem}
  .mnc-desc{font-size:.7rem}
  .mnc-btn{padding:9px 12px;font-size:.7rem}
}
@media (prefers-reduced-motion:reduce){
  .mnc-card,.mnc-img,.mnc-btn,.mnc-btn b{transition:none}
}
`);

    var sec=mount(`
<section class="mnc" id="mncCategorias" aria-label="Categorías">
  <div class="mnc-wrap">

    <a class="mnc-card" href="https://munatika.mitiendanube.com/artesanias-ehr3e">
      <img class="mnc-img" src="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Calabazas%20de%20mate%20sobre%20tejido%20ru%CC%81stico.png" alt="Artesanías: calabazas de mate sobre tejido rústico" loading="lazy">
      <span class="mnc-shade"></span>
      <span class="mnc-body">
        <svg class="mnc-ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 12h20"/>
          <path d="M24 12c0 4-12 8-12 22 0 12 8 20 20 20s20-8 20-20c0-14-12-18-12-22"/>
          <path d="M16 30h32"/>
        </svg>
        <h2 class="mnc-title">Artesanías</h2>
        <p class="mnc-desc">Piezas únicas, hechas a mano con tradición del norte.</p>
        <span class="mnc-btn mnc-btn--art">Ver productos <b aria-hidden="true">→</b></span>
      </span>
    </a>

    <a class="mnc-card" href="https://munatika.mitiendanube.com/trekking-1v6u1">
      <img class="mnc-img mnc-img--trek" src="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Senderismo%20entre%20montan%CC%83as%20en%20verde%20bosque.png" alt="Trekking: senderismo entre montañas en verde bosque" loading="lazy">
      <span class="mnc-shade"></span>
      <span class="mnc-body">
        <svg class="mnc-ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 50L22 22l10 14 8-10 20 24z"/>
          <path d="M17 29l5 5 5-5"/>
        </svg>
        <h2 class="mnc-title">Trekking</h2>
        <p class="mnc-desc">Equipamiento y accesorios para tus aventuras.</p>
        <span class="mnc-btn">Ver productos <b aria-hidden="true">→</b></span>
      </span>
    </a>

  </div>
</section>
`);

    function place(){
      var sels=[".js-home-main-slider",".js-home-slider",".js-main-slider",".section-slider-home",".section-banner-home",".js-home-banners",".home-slider",".main-slider",".section-home-slider",'[data-store="home-slider"]','[data-store="home-banner"]',".swiper-container",".swiper"];
      var banner=document.getElementById("hyBanner"), ref=null;

      if(banner){ref=banner;}
      else{
        for(var i=0;i<sels.length;i++){
          var el=document.querySelector(sels[i]);
          if(el&&!sec.contains(el)){ref=el;break;}
        }
        if(ref) ref=topLevel(ref);
      }

      if(ref){
        if(ref.nextElementSibling!==sec) ref.insertAdjacentElement("afterend",sec);
      }else{
        var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
        if(c&&c.firstElementChild!==sec) c.insertBefore(sec,c.firstChild);
      }
    }

    place();
    var n=0,t=setInterval(function(){place();if(++n>25)clearInterval(t);},300);
  }

  /* ==========================================================
     2) INSTAGRAM
     ========================================================== */
  function instagram(){
    addCSS(`
.mni{--mni-orange:#B65F36;--mni-dark:#1e120a;position:relative;background:var(--mni-dark);color:#fff;padding:76px 0 0;overflow:hidden;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.mni *{box-sizing:border-box;margin:0;padding:0}
.mni::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(60% 80% at 15% 20%,rgba(182,95,54,.20) 0%,rgba(182,95,54,0) 70%)}
.mni-wrap{position:relative;max-width:1200px;margin:0 auto;padding:0 20px}
.mni-main{display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center;padding-bottom:68px}
.mni-tag{display:inline-flex;align-items:center;gap:12px;padding:8px 16px;border:1px solid rgba(255,255,255,.18);border-radius:40px;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#e9d9c8;margin-bottom:22px}
.mni-tag i{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--mni-orange)}
.mni-num{font-size:clamp(4.6rem,10vw,8.6rem);font-weight:800;line-height:.95;letter-spacing:-.03em;color:#fff;font-variant-numeric:tabular-nums}
.mni-sub{margin-top:8px;font-size:clamp(1.3rem,2.4vw,2rem);font-weight:600;letter-spacing:-.01em;color:var(--mni-orange)}
.mni-txt{margin:18px 0 28px;max-width:460px;font-size:16px;line-height:1.65;color:#c9b9a8}
.mni-btn{display:inline-flex;align-items:center;gap:12px;padding:18px 32px;background:var(--mni-orange);color:#fff !important;font-size:14px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border-radius:999px;text-decoration:none !important;line-height:1;box-shadow:0 12px 28px rgba(182,95,54,.35);transition:transform .25s ease,filter .25s ease,gap .25s ease}
.mni-btn:hover{transform:translateY(-3px);filter:brightness(1.1);gap:16px}
.mni-card{display:block;padding:28px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:22px;color:#fff !important;text-decoration:none !important;backdrop-filter:blur(4px);transition:transform .3s ease,border-color .3s ease}
.mni-card:hover{transform:translateY(-5px);border-color:var(--mni-orange)}
.mni-card-top{display:flex;align-items:center;gap:14px}
.mni-ava{flex:0 0 auto;width:58px;height:58px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#cf7547,#8f4726);color:#fff}
.mni-ava svg{width:30px;height:30px}
.mni-who{display:flex;flex-direction:column;line-height:1.3;min-width:0;flex:1}
.mni-who strong{font-size:16px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mni-who em{font-style:normal;font-size:13px;color:#b9a896}
.mni-ig{width:28px;height:28px;color:#fff;flex:0 0 auto}
.mni-list{list-style:none;margin:24px 0}
.mni-list li{display:flex;align-items:center;gap:14px;padding:15px 0;border-top:1px solid rgba(255,255,255,.12);font-size:15px;color:#ecdfd1}
.mni-list li:last-child{border-bottom:1px solid rgba(255,255,255,.12)}
.mni-list span{font-size:15px;font-weight:700;color:var(--mni-orange);min-width:26px}
.mni-follow{display:block;text-align:center;padding:16px;border:1px solid #fff;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;transition:background .25s ease,color .25s ease,border-color .25s ease}
.mni-card:hover .mni-follow{background:var(--mni-orange);border-color:var(--mni-orange);color:#fff}
.mni-marq{position:relative;border-top:1px solid rgba(255,255,255,.12);padding:18px 0;overflow:hidden;white-space:nowrap}
.mni-track{display:inline-flex;align-items:center;gap:30px;animation:mniMarq 32s linear infinite}
.mni-track span{font-size:26px;font-weight:700;letter-spacing:-.01em;text-transform:uppercase;color:#fff}
.mni-track i{font-style:normal;color:var(--mni-orange);font-size:18px}
@keyframes mniMarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.mni-left,.mni-card{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s ease}
.mni-card{transition:opacity .8s ease .15s,transform .8s ease .15s,border-color .3s ease}
.mni.mni-in .mni-left,.mni.mni-in .mni-card{opacity:1;transform:none}
.mni.mni-in .mni-card:hover{transform:translateY(-5px)}
@media (max-width:900px){
  .mni{padding-top:48px}
  .mni-main{grid-template-columns:1fr;gap:34px;padding-bottom:42px;text-align:center}
  .mni-txt{font-size:14px;margin-left:auto;margin-right:auto}
  .mni-btn{padding:16px 26px;font-size:13px}
  .mni-card{padding:20px;text-align:left}
  .mni-list li{font-size:14px;padding:13px 0}
  .mni-track span{font-size:20px}
  .mni-track{gap:22px}
}
@media (prefers-reduced-motion:reduce){
  .mni-track{animation:none}
  .mni-left,.mni-card{transition:none;opacity:1;transform:none}
}
`);

    var sec=mount(`
<section class="mni" id="mniInstagram" aria-label="Seguinos en Instagram">
  <div class="mni-wrap">
    <div class="mni-main">

      <div class="mni-left">
        <span class="mni-tag"><i></i>Comunidad Munatika</span>
        <div class="mni-num"><span data-mni-count>+0</span></div>
        <div class="mni-sub">seguidores en Instagram</div>
        <p class="mni-txt">Artesanías con identidad del norte, novedades y equipamiento para tus próximas aventuras. Sumate a la comunidad.</p>
        <a class="mni-btn" href="https://www.instagram.com/munatika_artesanias/" target="_blank" rel="noopener">
          Seguinos en Instagram <span aria-hidden="true">→</span>
        </a>
      </div>

      <a class="mni-card" href="https://www.instagram.com/munatika_artesanias/" target="_blank" rel="noopener">
        <div class="mni-card-top">
          <span class="mni-ava">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 50L22 22l10 14 8-10 20 24z"/></svg>
          </span>
          <span class="mni-who">
            <strong>munatika_artesanias</strong>
            <em>Artesanías y trekking del norte</em>
          </span>
          <svg class="mni-ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"></circle></svg>
        </div>
        <ul class="mni-list">
          <li><span>01</span> Novedades y piezas nuevas primero</li>
          <li><span>02</span> Promos y sorteos exclusivos</li>
          <li><span>03</span> Detrás de escena del trabajo artesanal</li>
          <li><span>04</span> Ideas y equipamiento para tus aventuras</li>
        </ul>
        <span class="mni-follow">Seguir @munatika_artesanias</span>
      </a>

    </div>
  </div>

  <div class="mni-marq" aria-hidden="true">
    <div class="mni-track">
      <span>@munatika_artesanias</span><i>✦</i><span>Seguinos</span><i>✦</i><span>Hecho a mano</span><i>✦</i><span>@munatika_artesanias</span><i>✦</i><span>Seguinos</span><i>✦</i><span>Hecho a mano</span><i>✦</i>
      <span>@munatika_artesanias</span><i>✦</i><span>Seguinos</span><i>✦</i><span>Hecho a mano</span><i>✦</i><span>@munatika_artesanias</span><i>✦</i><span>Seguinos</span><i>✦</i><span>Hecho a mano</span><i>✦</i>
    </div>
  </div>
</section>
`);

    /* ====== CONFIGURACIÓN DEL CONTADOR ====== */
    var BASE=700;           // seguidores actuales
    var START="2026-11-16"; // fecha desde la que empieza a crecer
    var CRECE_POR_DIA=3;    // cuántos seguidores suma por día
    /* ======================================== */

    function findFeatured(){
      var sels=[
        ".js-section-products-featured",
        ".section-featured-home",
        ".js-products-featured",
        ".js-featured-products",
        ".section-products-featured",
        ".js-home-featured",
        '[data-store="home-products-featured"]',
        '[data-store="home-featured-products"]'
      ];
      for(var i=0;i<sels.length;i++){
        var el=document.querySelector(sels[i]);
        if(el&&!sec.contains(el)) return el;
      }
      var heads=document.querySelectorAll("h1,h2,h3,h4,.h1,.h2,.h3,.section-title");
      for(var j=0;j<heads.length;j++){
        var h=heads[j];
        if(sec.contains(h)) continue;
        if(/productos\s+destacados/i.test(h.textContent||"")){
          return h.closest("section")||h;
        }
      }
      return null;
    }

    function place(){
      var ref=findFeatured();
      if(ref){
        ref=topLevel(ref);
        if(ref.nextElementSibling!==sec) ref.insertAdjacentElement("afterend",sec);
      }else{
        var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
        if(c&&c.lastElementChild!==sec) c.appendChild(sec);
      }
    }

    place();
    var n=0,t=setInterval(function(){place();if(++n>25)clearInterval(t);},300);

    var dias=Math.max(0,Math.floor((Date.now()-new Date(START+"T00:00:00").getTime())/864e5));
    var total=BASE+dias*CRECE_POR_DIA;
    var el=sec.querySelector("[data-mni-count]");
    var fmt=function(v){return "+"+Math.round(v).toLocaleString("es-AR");};
    var reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    function animar(){
      if(reduce){el.textContent=fmt(total);return;}
      var dur=2400,t0=null;
      function step(ts){
        if(!t0)t0=ts;
        var p=Math.min((ts-t0)/dur,1);
        el.textContent=fmt(total*(1-Math.pow(1-p,3)));
        if(p<1)requestAnimationFrame(step);else el.textContent=fmt(total);
      }
      requestAnimationFrame(step);
    }

    var done=false;
    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries,obs){
        entries.forEach(function(e){
          if(e.isIntersecting&&!done){done=true;sec.classList.add("mni-in");animar();obs.disconnect();}
        });
      },{threshold:.25}).observe(sec);
    }else{
      sec.classList.add("mni-in");el.textContent=fmt(total);
    }
  }

  /* ==========================================================
     2.5) TIENDA - Artesanías + Trekking (debajo de Instagram)
     ========================================================== */
  function tienda(){
    addCSS(`
.mnt{--mnt-orange:#B65F36;--mnt-green:#21301D;--mnt-cream:#f7f1e8;position:relative;background:var(--mnt-cream);padding:96px 0 88px;overflow:hidden;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:#1a1a1a}
.mnt *{box-sizing:border-box;margin:0;padding:0}
.mnt::before{content:"";position:absolute;top:-180px;right:-160px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(182,95,54,.16) 0%,rgba(182,95,54,0) 70%);pointer-events:none}
.mnt::after{content:"";position:absolute;bottom:-200px;left:-180px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(33,48,29,.12) 0%,rgba(33,48,29,0) 70%);pointer-events:none}
.mnt-wrap{position:relative;z-index:1;max-width:1300px;margin:0 auto;padding:0 20px}
.mnt-head{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;margin-bottom:48px}
.mnt-tag{display:inline-flex;align-items:center;gap:12px;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#555;margin-bottom:18px}
.mnt-tag i{display:inline-block;width:44px;height:3px;background:var(--mnt-orange)}
.mnt-title{font-size:clamp(2.5rem,6vw,5.4rem);font-weight:800;line-height:.98;letter-spacing:-.035em;text-transform:uppercase;color:#0a0a0a}
.mnt-title em{font-style:normal;color:var(--mnt-orange)}
.mnt-txt{max-width:400px;font-size:17px;line-height:1.65;color:#5d554c;padding-bottom:6px}
.mnt-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:24px}
.mnt-card{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:600px;border-radius:28px;overflow:hidden;isolation:isolate;color:#fff !important;text-decoration:none !important;background:#2b1a0e;box-shadow:0 18px 44px rgba(30,18,10,.22);transition:transform .4s ease,box-shadow .4s ease}
.mnt-card:hover{transform:translateY(-6px);box-shadow:0 26px 56px rgba(30,18,10,.32)}
.mnt-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transition:transform .9s ease}
.mnt-card:hover .mnt-img{transform:scale(1.07)}
.mnt-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.05) 0%,rgba(0,0,0,.25) 38%,rgba(10,6,3,.92) 100%)}
.mnt-num{position:absolute;top:26px;left:30px;font-size:14px;font-weight:700;letter-spacing:3px;color:#fff;padding:9px 16px;border:1px solid rgba(255,255,255,.45);border-radius:999px;backdrop-filter:blur(6px);background:rgba(0,0,0,.18)}
.mnt-pill{position:absolute;top:26px;right:30px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;padding:9px 16px;border-radius:999px;background:var(--mnt-orange)}
.mnt-card--trek .mnt-pill{background:var(--mnt-green)}
.mnt-body{padding:40px 40px 38px}
.mnt-name{font-size:clamp(2.2rem,4.2vw,3.8rem);font-weight:800;line-height:1;letter-spacing:-.025em;text-transform:uppercase;margin-bottom:12px}
.mnt-desc{font-size:16px;line-height:1.6;color:rgba(255,255,255,.88);max-width:430px;margin-bottom:22px}
.mnt-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px;list-style:none}
.mnt-chips li{padding:9px 16px;border:1px solid rgba(255,255,255,.32);border-radius:999px;font-size:13px;font-weight:500;color:#fff;background:rgba(255,255,255,.08);backdrop-filter:blur(4px)}
.mnt-btn{display:inline-flex;align-items:center;gap:12px;padding:18px 32px;border-radius:999px;background:#fff;color:#0a0a0a;font-size:13px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;line-height:1;transition:background .25s ease,color .25s ease,gap .25s ease}
.mnt-card:hover .mnt-btn{background:var(--mnt-orange);color:#fff;gap:18px}
.mnt-perks{display:grid;grid-template-columns:repeat(4,1fr);margin-top:24px;background:#fff;border:1px solid #e6dccd;border-radius:22px;box-shadow:0 10px 30px rgba(0,0,0,.05);overflow:hidden}
.mnt-perk{display:flex;align-items:center;gap:16px;padding:26px 26px;border-right:1px solid #eee3d4}
.mnt-perk:last-child{border-right:0}
.mnt-perk svg{flex:0 0 auto;width:40px;height:40px;padding:9px;border-radius:50%;background:var(--mnt-cream);color:var(--mnt-orange)}
.mnt-perk strong{display:block;font-size:15px;font-weight:700;color:#0a0a0a;line-height:1.25}
.mnt-perk span{display:block;font-size:13px;color:#7a7066;line-height:1.35;margin-top:2px}
.mnt-head,.mnt-card,.mnt-perks{opacity:0;transform:translateY(30px);transition:opacity .9s ease,transform .9s ease,box-shadow .4s ease}
.mnt-card:nth-child(2){transition-delay:.15s}
.mnt-perks{transition-delay:.25s}
.mnt.mnt-in .mnt-head,.mnt.mnt-in .mnt-card,.mnt.mnt-in .mnt-perks{opacity:1;transform:none}
.mnt.mnt-in .mnt-card:hover{transform:translateY(-6px)}
@media (max-width:1000px){
  .mnt-perks{grid-template-columns:repeat(2,1fr)}
  .mnt-perk:nth-child(2){border-right:0}
  .mnt-perk:nth-child(-n+2){border-bottom:1px solid #eee3d4}
}
@media (max-width:900px){
  .mnt{padding:56px 0 48px}
  .mnt-head{flex-direction:column;align-items:flex-start;gap:16px;margin-bottom:28px}
  .mnt-tag{font-size:11px;letter-spacing:2px}
  .mnt-tag i{width:28px}
  .mnt-txt{font-size:14px;padding:0}
  .mnt-grid{grid-template-columns:1fr;gap:16px}
  .mnt-card{min-height:460px;border-radius:22px}
  .mnt-num{top:18px;left:18px;font-size:12px;padding:7px 13px}
  .mnt-pill{top:18px;right:18px;font-size:10px;padding:7px 13px}
  .mnt-body{padding:26px 22px 24px}
  .mnt-desc{font-size:14px;margin-bottom:16px}
  .mnt-chips{margin-bottom:22px;gap:6px}
  .mnt-chips li{font-size:12px;padding:8px 13px}
  .mnt-btn{padding:16px 26px;font-size:12px}
  .mnt-perks{margin-top:16px;border-radius:18px}
  .mnt-perk{padding:18px 14px;gap:10px;flex-direction:column;align-items:flex-start;text-align:left}
  .mnt-perk svg{width:34px;height:34px;padding:7px}
  .mnt-perk strong{font-size:13px}
  .mnt-perk span{font-size:12px}
}
@media (prefers-reduced-motion:reduce){
  .mnt-head,.mnt-card,.mnt-perks{transition:none;opacity:1;transform:none}
  .mnt-img{transition:none}
}
`);

    var sec=mount(`
<section class="mnt" id="mntTienda" aria-label="Qué encontrás en la tienda">
  <div class="mnt-wrap">

    <div class="mnt-head">
      <div>
        <span class="mnt-tag"><i></i>Nuestra tienda</span>
        <h2 class="mnt-title">Dos mundos,<br><em>una sola tienda</em></h2>
      </div>
      <p class="mnt-txt">Artesanías hechas a mano con identidad del norte y equipamiento para tus caminatas. Elegí tu categoría y empezá a explorar.</p>
    </div>

    <div class="mnt-grid">

      <a class="mnt-card mnt-card--art" href="https://munatika.mitiendanube.com/artesanias-ehr3e">
        <img class="mnt-img" src="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Calabazas%20de%20mate%20sobre%20tejido%20ru%CC%81stico.png" alt="Artesanías del norte hechas a mano" loading="lazy">
        <span class="mnt-shade"></span>
        <span class="mnt-num">01</span>
        <span class="mnt-pill">Hecho a mano</span>
        <span class="mnt-body">
          <h3 class="mnt-name">Artesanías</h3>
          <p class="mnt-desc">Piezas únicas con tradición del norte. Cada una tiene su carácter y su historia.</p>
          <ul class="mnt-chips">
            <li>Piezas únicas</li>
            <li>Tradición del norte</li>
            <li>Regalos con identidad</li>
          </ul>
          <span class="mnt-btn">Ver artesanías <b aria-hidden="true">→</b></span>
        </span>
      </a>

      <a class="mnt-card mnt-card--trek" href="https://munatika.mitiendanube.com/trekking-1v6u1">
        <img class="mnt-img" src="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Senderismo%20entre%20montan%CC%83as%20en%20verde%20bosque.png" alt="Equipamiento de trekking para la montaña" loading="lazy" style="object-position:75% 50%">
        <span class="mnt-shade"></span>
        <span class="mnt-num">02</span>
        <span class="mnt-pill">Aventura</span>
        <span class="mnt-body">
          <h3 class="mnt-name">Trekking</h3>
          <p class="mnt-desc">Equipamiento y accesorios para tus caminatas por la Quebrada y más allá.</p>
          <ul class="mnt-chips">
            <li>Equipamiento</li>
            <li>Accesorios</li>
            <li>Abrigo</li>
          </ul>
          <span class="mnt-btn">Ver trekking <b aria-hidden="true">→</b></span>
        </span>
      </a>

    </div>

    <div class="mnt-perks">
      <div class="mnt-perk">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 20V7"/><path d="M12 7H8a2.5 2.5 0 1 1 0-5c2 0 4 5 4 5zM12 7h4a2.5 2.5 0 1 0 0-5c-2 0-4 5-4 5z"/></svg>
        <div><strong>10% OFF</strong><span>Pagando por transferencia</span></div>
      </div>
      <div class="mnt-perk">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
        <div><strong>3 cuotas sin interés</strong><span>Con todas las tarjetas</span></div>
      </div>
      <div class="mnt-perk">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>
        <div><strong>Envíos a todo el país</strong><span>Rápidos y seguros</span></div>
      </div>
      <div class="mnt-perk">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <div><strong>Local en Purmamarca</strong><span>Visitanos o retirá tu compra</span></div>
      </div>
    </div>

  </div>
</section>
`);

    function place(){
      var ig=document.getElementById("mniInstagram");
      if(ig){
        if(ig.nextElementSibling!==sec) ig.insertAdjacentElement("afterend",sec);
      }else{
        var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
        if(c&&c.lastElementChild!==sec) c.appendChild(sec);
      }
    }

    place();
    var n=0,t=setInterval(function(){place();if(++n>30)clearInterval(t);},300);

    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries,obs){
        entries.forEach(function(e){
          if(e.isIntersecting){sec.classList.add("mnt-in");obs.disconnect();}
        });
      },{threshold:.1}).observe(sec);
    }else{
      sec.classList.add("mnt-in");
    }
  }

  /* ==========================================================
     3) LOCAL
     ========================================================== */
  function local(){
    addCSS(`
.mnl{--mnl-orange:#B65F36;background:#fff;padding:70px 0;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.mnl *{box-sizing:border-box;margin:0;padding:0}
.mnl-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.mnl-head{margin-bottom:38px}
.mnl-tag{display:inline-flex;align-items:center;gap:12px;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#555;margin-bottom:16px}
.mnl-tag i{display:inline-block;width:44px;height:3px;background:var(--mnl-orange)}
.mnl-title{font-size:clamp(2.2rem,5.2vw,4.4rem);font-weight:800;line-height:1;letter-spacing:-.03em;text-transform:uppercase;color:#0a0a0a}
.mnl-txt{margin-top:20px;max-width:560px;font-size:17px;line-height:1.6;color:#666}
.mnl-card{display:grid;grid-template-columns:1.3fr 1fr;background:#fff;border:1px solid #e6e2dc;border-radius:18px;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,.05)}
.mnl-map{position:relative;min-height:440px;background:#ecebe8}
.mnl-map iframe{position:absolute;inset:0;width:100%;height:100%;border:0;filter:grayscale(.25) contrast(1.02)}
.mnl-open{position:absolute;top:14px;left:14px;display:inline-flex;align-items:center;gap:8px;padding:11px 16px;background:#fff;color:#1a56c4 !important;font-size:14px;font-weight:600;text-decoration:none !important;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.18)}
.mnl-open svg{width:16px;height:16px}
.mnl-info{padding:44px 40px;display:flex;flex-direction:column;justify-content:center}
.mnl-zona{font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--mnl-orange)}
.mnl-dir{margin:10px 0 6px;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:800;line-height:1.05;letter-spacing:-.02em;text-transform:uppercase;color:#0a0a0a}
.mnl-sub{margin-bottom:24px;font-size:15px;color:#777}
.mnl-feat{list-style:none;margin-bottom:30px}
.mnl-feat li{display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid #ececec;font-size:15px;color:#333}
.mnl-feat li:last-child{border-bottom:1px solid #ececec}
.mnl-feat span{font-size:16px;font-weight:700;color:#c9c9c9;min-width:26px}
.mnl-btns{display:flex;flex-wrap:wrap;gap:12px}
.mnl-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:17px 28px;border-radius:40px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none !important;line-height:1;transition:transform .2s ease,background .2s ease,border-color .2s ease}
.mnl-b1{background:#0a0a0a;color:#fff !important}
.mnl-b1:hover{background:var(--mnl-orange);transform:translateY(-2px)}
.mnl-b2{background:#fff;color:#0a0a0a !important;border:1px solid #ddd}
.mnl-b2:hover{border-color:#0a0a0a;transform:translateY(-2px)}
.mnl-head,.mnl-card{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
.mnl-card{transition-delay:.15s}
.mnl.mnl-in .mnl-head,.mnl.mnl-in .mnl-card{opacity:1;transform:none}
@media (max-width:900px){
  .mnl{padding:44px 0}
  .mnl-head{margin-bottom:26px}
  .mnl-tag{font-size:11px;letter-spacing:2px}
  .mnl-tag i{width:28px}
  .mnl-title{font-size:2.2rem}
  .mnl-txt{font-size:14px}
  .mnl-card{grid-template-columns:1fr}
  .mnl-map{min-height:280px}
  .mnl-info{padding:26px 20px 28px}
  .mnl-dir{font-size:1.9rem}
  .mnl-b{padding:15px 20px;font-size:12px;letter-spacing:1.5px;flex:1 1 100%}
}
@media (prefers-reduced-motion:reduce){
  .mnl-head,.mnl-card{transition:none;opacity:1;transform:none}
}
`);

    var sec=mount(`
<section class="mnl" id="mnlLocal" aria-label="Nuestro local en Purmamarca">
  <div class="mnl-wrap">

    <div class="mnl-head">
      <span class="mnl-tag"><i></i>Nuestro local en el norte jujeño</span>
      <h2 class="mnl-title">¿Venís de vacaciones<br>o andás por el norte?<br>Visitanos</h2>
      <p class="mnl-txt">Pasá por nuestro local en Purmamarca. Llevate una artesanía hecha a mano o equipate para tu próxima caminata por la Quebrada.</p>
    </div>

    <div class="mnl-card">
      <div class="mnl-map">
        <iframe
          src="https://maps.google.com/maps?q=-23.7465481,-65.4989945&z=16&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa del local Munatika en Purmamarca"
          allowfullscreen></iframe>
        <a class="mnl-open" href="https://maps.app.goo.gl/XFvv7JiUBPGQ92kW7" target="_blank" rel="noopener">
          Abrir en Maps
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"></path></svg>
        </a>
      </div>

      <div class="mnl-info">
        <span class="mnl-zona">Purmamarca, Jujuy</span>
        <h3 class="mnl-dir">Rivadavia, Purmamarca</h3>
        <p class="mnl-sub">Y4618 · Quebrada de Humahuaca, Jujuy</p>

        <ul class="mnl-feat">
          <li><span>01</span> Artesanías únicas, hechas a mano</li>
          <li><span>02</span> Equipamiento y accesorios de trekking</li>
          <li><span>03</span> Atención personalizada</li>
        </ul>

        <div class="mnl-btns">
          <a class="mnl-b mnl-b1" href="https://maps.app.goo.gl/XFvv7JiUBPGQ92kW7" target="_blank" rel="noopener">
            Cómo llegar <span aria-hidden="true">→</span>
          </a>
          <a class="mnl-b mnl-b2" href="https://www.instagram.com/munatika_artesanias/" target="_blank" rel="noopener">
            Consultar horario
          </a>
        </div>
      </div>
    </div>

  </div>
</section>
`);

    function place(){
      // Va debajo de la sección Tienda (o de Instagram si Tienda no existe)
      var ig=document.getElementById("mntTienda")||document.getElementById("mniInstagram");
      if(ig){
        if(ig.nextElementSibling!==sec) ig.insertAdjacentElement("afterend",sec);
      }else{
        var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
        if(c&&c.lastElementChild!==sec) c.appendChild(sec);
      }
    }

    place();
    var n=0,t=setInterval(function(){place();if(++n>30)clearInterval(t);},300);

    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries,obs){
        entries.forEach(function(e){
          if(e.isIntersecting){sec.classList.add("mnl-in");obs.disconnect();}
        });
      },{threshold:.15}).observe(sec);
    }else{
      sec.classList.add("mnl-in");
    }
  }

  /* ==========================================================
     4) PREGUNTAS FRECUENTES
     ========================================================== */
  function faq(){
    addCSS(`
.mnf{--mnf-orange:#B65F36;background:#fff;padding:80px 0;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.mnf *{box-sizing:border-box;margin:0;padding:0}
.mnf-wrap{max-width:1200px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr 1.5fr;gap:70px;align-items:start}
.mnf-head{position:sticky;top:120px}
.mnf-tag{display:inline-flex;align-items:center;gap:12px;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#555;margin-bottom:16px}
.mnf-tag i{display:inline-block;width:44px;height:3px;background:var(--mnf-orange)}
.mnf-title{font-size:clamp(2.4rem,5vw,4.4rem);font-weight:800;line-height:1;letter-spacing:-.03em;text-transform:uppercase;color:#0a0a0a}
.mnf-txt{margin:20px 0 26px;max-width:360px;font-size:16px;line-height:1.6;color:#666}
.mnf-btn{display:inline-flex;align-items:center;gap:10px;padding:17px 30px;background:#0a0a0a;color:#fff !important;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;border-radius:40px;text-decoration:none !important;line-height:1;transition:transform .2s ease,background .2s ease}
.mnf-btn:hover{background:var(--mnf-orange);transform:translateY(-2px)}
.mnf-list{border-top:1px solid #e6e6e6}
.mnf-item{border-bottom:1px solid #e6e6e6}
.mnf-q{width:100%;display:flex;align-items:center;gap:18px;padding:24px 4px;background:none;border:0;cursor:pointer;text-align:left;color:#0a0a0a;font-family:inherit}
.mnf-n{font-size:20px;font-weight:700;color:var(--mnf-orange);min-width:30px}
.mnf-qt{flex:1;font-size:19px;font-weight:600;line-height:1.3}
.mnf-ic{position:relative;flex:0 0 auto;width:36px;height:36px;border:1px solid #ddd;border-radius:50%;transition:background .25s ease,border-color .25s ease,transform .3s ease}
.mnf-ic::before,.mnf-ic::after{content:"";position:absolute;top:50%;left:50%;background:#0a0a0a;transform:translate(-50%,-50%);transition:background .25s ease,opacity .25s ease}
.mnf-ic::before{width:14px;height:2px}
.mnf-ic::after{width:2px;height:14px}
.mnf-q:hover .mnf-ic{border-color:#0a0a0a}
.mnf-item.mnf-open .mnf-ic{background:#0a0a0a;border-color:#0a0a0a;transform:rotate(180deg)}
.mnf-item.mnf-open .mnf-ic::before{background:#fff}
.mnf-item.mnf-open .mnf-ic::after{opacity:0}
.mnf-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s ease}
.mnf-a > div{overflow:hidden}
.mnf-item.mnf-open .mnf-a{grid-template-rows:1fr}
.mnf-a p{margin:0;padding:0 56px 26px 52px;font-size:16px;line-height:1.65;color:#555}
.mnf-a strong{color:#0a0a0a}
.mnf-head,.mnf-list{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
.mnf-list{transition-delay:.15s}
.mnf.mnf-in .mnf-head,.mnf.mnf-in .mnf-list{opacity:1;transform:none}
@media (max-width:900px){
  .mnf{padding:48px 0}
  .mnf-wrap{grid-template-columns:1fr;gap:32px}
  .mnf-head{position:static}
  .mnf-title{font-size:2.4rem}
  .mnf-tag{font-size:11px;letter-spacing:2px}
  .mnf-tag i{width:28px}
  .mnf-txt{font-size:14px;margin-bottom:20px}
  .mnf-q{padding:18px 0;gap:12px}
  .mnf-n{font-size:17px;min-width:24px}
  .mnf-qt{font-size:16px}
  .mnf-ic{width:30px;height:30px}
  .mnf-a p{padding:0 6px 20px 36px;font-size:14px}
}
@media (prefers-reduced-motion:reduce){
  .mnf-head,.mnf-list{transition:none;opacity:1;transform:none}
  .mnf-a{transition:none}
}
`);

    var sec=mount(`
<section class="mnf" id="mnfFaq" aria-label="Preguntas frecuentes">
  <div class="mnf-wrap">

    <div class="mnf-head">
      <span class="mnf-tag"><i></i>Preguntas frecuentes</span>
      <h2 class="mnf-title">Todo lo que<br>necesitás saber</h2>
      <p class="mnf-txt">Si no encontrás tu respuesta, escribinos por Instagram y te respondemos.</p>
      <a class="mnf-btn" href="https://www.instagram.com/munatika_artesanias/" target="_blank" rel="noopener">Escribinos <span aria-hidden="true">→</span></a>
    </div>

    <div class="mnf-list">

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">01</span>
          <span class="mnf-qt">¿Cómo puedo pagar?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Podés pagar por <strong>transferencia con 10% OFF</strong> o con tarjeta en <strong>3 cuotas sin interés</strong>, con todas las tarjetas. También aceptamos Mercado Pago.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">02</span>
          <span class="mnf-qt">¿Hacen envíos a todo el país?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Sí, enviamos a todo el país de forma rápida y segura. El costo y el tiempo de entrega los ves al ingresar tu código postal en el carrito, antes de pagar.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">03</span>
          <span class="mnf-qt">¿Cuánto tarda en llegar mi pedido?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Una vez confirmado el pago, preparamos tu pedido y lo despachamos en pocos días hábiles. Después te llega el código de seguimiento para que sigas el envío.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">04</span>
          <span class="mnf-qt">¿Las artesanías son piezas únicas?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Sí. Cada pieza está hecha a mano, por eso puede tener pequeñas diferencias de forma, color o detalle respecto a la foto. Eso es parte de su valor artesanal.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">05</span>
          <span class="mnf-qt">¿Puedo cambiar o devolver un producto?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Sí. Podés pedir el cambio si el producto está sin uso y en perfecto estado. Escribinos por Instagram y te indicamos los pasos.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">06</span>
          <span class="mnf-qt">¿Dónde está el local y puedo retirar mi compra?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Estamos en <strong>Rivadavia, Purmamarca, Jujuy</strong>. Podés pasar a conocer las piezas y también retirar tu compra online coordinando antes con nosotros.</p></div></div>
      </div>

      <div class="mnf-item">
        <button class="mnf-q" type="button" aria-expanded="false">
          <span class="mnf-n">07</span>
          <span class="mnf-qt">¿Lo que veo en la web está disponible en el local?</span>
          <span class="mnf-ic"></span>
        </button>
        <div class="mnf-a"><div><p>Si querés confirmar disponibilidad de un producto antes de venir, escribinos por Instagram y te avisamos si lo tenemos en el local.</p></div></div>
      </div>

    </div>
  </div>
</section>
`);

    function place(){
      var loc=document.getElementById("mnlLocal");
      if(loc){
        if(loc.nextElementSibling!==sec) loc.insertAdjacentElement("afterend",sec);
      }else{
        var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
        if(c&&c.lastElementChild!==sec) c.appendChild(sec);
      }
    }

    place();
    var n=0,t=setInterval(function(){place();if(++n>30)clearInterval(t);},300);

    // Acordeón: una pregunta abierta a la vez
    var items=sec.querySelectorAll(".mnf-item");
    items.forEach(function(item){
      item.querySelector(".mnf-q").addEventListener("click",function(){
        var wasOpen=item.classList.contains("mnf-open");
        items.forEach(function(i){
          i.classList.remove("mnf-open");
          i.querySelector(".mnf-q").setAttribute("aria-expanded","false");
        });
        if(!wasOpen){
          item.classList.add("mnf-open");
          item.querySelector(".mnf-q").setAttribute("aria-expanded","true");
        }
      });
    });

    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries,obs){
        entries.forEach(function(e){
          if(e.isIntersecting){sec.classList.add("mnf-in");obs.disconnect();}
        });
      },{threshold:.12}).observe(sec);
    }else{
      sec.classList.add("mnf-in");
    }
  }

  /* ==========================================================
     5) RESEÑAS (inicio)
     Las reseñas se editan arriba, en la lista RESENIAS.
     ========================================================== */
  function resenias(){
    if(!RESENIAS.length)return;

    addCSS(`
.mnr{--mnr-orange:#B65F36;background:#fff;padding:80px 0;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.mnr *{box-sizing:border-box;margin:0;padding:0}
.mnr-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.mnr-head{text-align:center;margin-bottom:44px}
.mnr-title{font-size:clamp(2.2rem,5vw,4.2rem);font-weight:800;line-height:1;letter-spacing:-.03em;text-transform:uppercase;color:#0a0a0a}
.mnr-title em{font-style:normal;color:var(--mnr-orange)}
.mnr-sub{margin-top:16px;font-size:17px;color:#666}
.mnr-stars{color:var(--mnr-orange);letter-spacing:2px;margin-right:6px}
.mnr-bar{display:block;width:70px;height:4px;margin:22px auto 0;background:var(--mnr-orange);border-radius:2px}
.mnr-slider{position:relative}
.mnr-track{display:flex;gap:24px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:6px 2px 18px}
.mnr-track::-webkit-scrollbar{display:none}
.mnr-card{flex:0 0 calc((100% - 48px)/3);scroll-snap-align:start;display:flex;flex-direction:column;justify-content:space-between;gap:26px;padding:30px;background:#fff;border:1px solid #e6e2dc;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,.05)}
.mnr-rate{color:var(--mnr-orange);font-size:22px;letter-spacing:3px;line-height:1}
.mnr-rate s{text-decoration:none;color:#ddd}
.mnr-text{margin-top:16px;font-size:16px;line-height:1.65;color:#333}
.mnr-foot{display:flex;align-items:center;gap:14px}
.mnr-ava{flex:0 0 auto;width:52px;height:52px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#cf7547,#8f4726);color:#fff;font-size:22px;font-weight:700}
.mnr-who{flex:1;min-width:0;line-height:1.3}
.mnr-who strong{display:block;font-size:16px;font-weight:700;color:#0a0a0a}
.mnr-who span{display:block;font-size:13px;color:#777}
.mnr-badge{flex:0 0 auto;padding:8px 12px;border:1px solid var(--mnr-orange);border-radius:999px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--mnr-orange);white-space:nowrap}
.mnr-nav{position:absolute;top:50%;transform:translateY(-60%);z-index:2;width:46px;height:46px;border:1px solid #ddd;border-radius:50%;background:#fff;color:#0a0a0a;font-size:20px;line-height:1;cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.12);transition:background .2s ease,color .2s ease,border-color .2s ease}
.mnr-nav:hover{background:var(--mnr-orange);border-color:var(--mnr-orange);color:#fff}
.mnr-prev{left:-18px}
.mnr-next{right:-18px}
.mnr-head,.mnr-slider{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
.mnr-slider{transition-delay:.15s}
.mnr.mnr-in .mnr-head,.mnr.mnr-in .mnr-slider{opacity:1;transform:none}
@media (max-width:900px){
  .mnr{padding:48px 0}
  .mnr-head{margin-bottom:28px}
  .mnr-sub{font-size:14px}
  .mnr-nav{display:none}
  .mnr-track{gap:14px;padding-right:20px}
  .mnr-card{flex:0 0 84%;padding:24px 20px;border-radius:18px}
  .mnr-text{font-size:15px}
  .mnr-badge{font-size:10px;padding:7px 10px}
}
@media (max-width:1100px) and (min-width:901px){
  .mnr-card{flex:0 0 calc((100% - 24px)/2)}
}
@media (prefers-reduced-motion:reduce){
  .mnr-head,.mnr-slider{transition:none;opacity:1;transform:none}
  .mnr-track{scroll-behavior:auto}
}
`);

    var sec=mount(`
<section class="mnr" id="mnrResenias" aria-label="Clientes verificados">
  <div class="mnr-wrap">

    <div class="mnr-head">
      <h2 class="mnr-title">Clientes <em>verificados</em></h2>
      <p class="mnr-sub"><span class="mnr-stars" aria-hidden="true">★★★★★</span> Lo que dicen quienes ya compraron en Munatika</p>
      <span class="mnr-bar"></span>
    </div>

    <div class="mnr-slider">
      <button class="mnr-nav mnr-prev" type="button" aria-label="Anterior">←</button>
      <div class="mnr-track" id="mnrTrack"></div>
      <button class="mnr-nav mnr-next" type="button" aria-label="Siguiente">→</button>
    </div>

  </div>
</section>
`);

    // Armado de tarjetas
    var track=sec.querySelector("#mnrTrack");
    RESENIAS.forEach(function(r){
      var card=document.createElement("article");
      card.className="mnr-card";

      var top=document.createElement("div");
      var rate=document.createElement("div");
      rate.className="mnr-rate";
      var n=Math.max(1,Math.min(5,r.estrellas||5));
      rate.setAttribute("aria-label",n+" de 5 estrellas");
      rate.textContent="★★★★★".slice(0,n);
      if(n<5){var off=document.createElement("s");off.textContent="★★★★★".slice(0,5-n);rate.appendChild(off);}
      var txt=document.createElement("p");
      txt.className="mnr-text";
      txt.textContent=r.texto||"";
      top.appendChild(rate);top.appendChild(txt);

      var foot=document.createElement("div");
      foot.className="mnr-foot";
      var ava=document.createElement("span");
      ava.className="mnr-ava";
      ava.textContent=(r.nombre||"?").charAt(0).toUpperCase();
      var who=document.createElement("div");
      who.className="mnr-who";
      var nm=document.createElement("strong");nm.textContent=r.nombre||"";
      var sub=document.createElement("span");
      sub.textContent=[r.lugar,r.producto].filter(Boolean).join(" · ");
      who.appendChild(nm);who.appendChild(sub);
      var badge=document.createElement("span");
      badge.className="mnr-badge";
      badge.textContent="✓ Verificado";
      foot.appendChild(ava);foot.appendChild(who);foot.appendChild(badge);

      card.appendChild(top);card.appendChild(foot);
      track.appendChild(card);
    });

    // Ubicación: justo arriba de las preguntas frecuentes
    function place(){
      var f=document.getElementById("mnfFaq");
      if(f){
        if(f.previousElementSibling!==sec) f.insertAdjacentElement("beforebegin",sec);
      }else{
        var loc=document.getElementById("mnlLocal");
        if(loc){
          if(loc.nextElementSibling!==sec) loc.insertAdjacentElement("afterend",sec);
        }else{
          var c=document.querySelector(".js-home-sections-container, #content, .js-content, main");
          if(c&&c.lastElementChild!==sec) c.appendChild(sec);
        }
      }
    }

    place();
    var k=0,t=setInterval(function(){place();if(++k>30)clearInterval(t);},300);

    // Flechas y avance automático
    function step(){
      var c=track.querySelector(".mnr-card");
      return c?c.offsetWidth+24:300;
    }
    sec.querySelector(".mnr-prev").addEventListener("click",function(){track.scrollBy({left:-step(),behavior:"smooth"});});
    sec.querySelector(".mnr-next").addEventListener("click",function(){track.scrollBy({left:step(),behavior:"smooth"});});

    var reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    var paused=false,visible=false;
    ["mouseenter","touchstart","pointerdown"].forEach(function(ev){track.addEventListener(ev,function(){paused=true;},{passive:true});});
    ["mouseleave","touchend"].forEach(function(ev){track.addEventListener(ev,function(){setTimeout(function(){paused=false;},4000);},{passive:true});});

    setInterval(function(){
      if(reduce||paused||!visible||document.hidden)return;
      var end=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;
      if(end) track.scrollTo({left:0,behavior:"smooth"});
      else track.scrollBy({left:step(),behavior:"smooth"});
    },4500);

    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          visible=e.isIntersecting;
          if(e.isIntersecting) sec.classList.add("mnr-in");
        });
      },{threshold:.2}).observe(sec);
    }else{
      sec.classList.add("mnr-in");visible=true;
    }
  }

  /* ==========================================================
     6) PÁGINA DE PRODUCTO (landing)
     - Cinta de beneficios arriba
     - Precio grande + tarjeta "Mejor precio" por transferencia
     - 3 cuotas sin interés
     - Barra de despacho, estrellas y reseñas en carrusel infinito
     - Medios de pago, confianza, ayuda por Instagram y preguntas
     - Celular: barra fija abajo con foto + "Comprar" al bajar
     Tipografía: hereda la de tu tema (la de tu tienda).
     Si querés forzar otra, poné en CFG.fuente por ej. '"Poppins",sans-serif'
     ========================================================== */
  function producto(){

    /* ====== CONFIGURACIÓN ====== */
    var CFG={
      transf:10,      // % de descuento por transferencia
      cuotas:3,       // cuotas sin interés
      fuente:"",      // "" = usa la tipografía de tu tienda
      ig:"https://www.instagram.com/munatika_artesanias/",
      despacho:"pocos días hábiles" // texto resaltado en la barra verde
    };
    /* =========================== */

    var ICO={
      card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
      bolt:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
      back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',
      chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z"/></svg>',
      truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>',
      shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>'
    };

    function parse(s){
      s=String(s||"").replace(/[^\d.,]/g,"");
      if(!s)return 0;
      if(s.indexOf(",")>-1) s=s.replace(/\./g,"").replace(",",".");
      else if(/\.\d{3}$/.test(s)) s=s.replace(/\./g,"");
      return parseFloat(s)||0;
    }
    function fmt(v){return "$"+Math.round(v).toLocaleString("es-AR");}
    function isMine(el){return !!(el.closest&&el.closest(".mnp-pay,.mnp-after,.mnp-bar,.mnp-tick"));}

    function start(){
      if(window.__mnpDone)return true;
      var form=document.querySelector("form.js-product-form, form#product_form, form[data-store^='product-form'], .js-product-form");
      if(!form)return false;
      window.__mnpDone=true;

      /* ---------- CSS ---------- */
      addCSS(`
.mnp-tick,.mnp-pay,.mnp-after,.mnp-bar{--mnp-orange:#B65F36;--mnp-green:#21301D;--mnp-cream:#f7f1e8;font-family:var(--mnp-font,inherit)}
.mnp-tick *,.mnp-pay *,.mnp-after *,.mnp-bar *{box-sizing:border-box}
.mnp-hide{display:none !important}

.mnp-tick{overflow:hidden;white-space:nowrap;background:var(--mnp-green);color:#fff;padding:11px 0}
.mnp-tick-track{display:inline-flex;animation:mnpMarq 32s linear infinite}
.mnp-tick span{margin-right:34px;font-size:12px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase}
.mnp-tick b{color:#e69a70;font-weight:800}
@keyframes mnpMarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.mnp-title{font-weight:800 !important;letter-spacing:-.02em !important;line-height:1.05 !important}
.mnp-lbl{display:block;width:100%;flex-basis:100%;margin:16px 0 2px;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#8a8076}
.mnp-price{font-weight:800 !important;letter-spacing:-.02em;font-size:clamp(2.3rem,5vw,3.3rem) !important;line-height:1.05 !important}

.mnp-pay{margin:20px 0 22px;display:grid;gap:12px}
.mnp-best{display:grid;grid-template-columns:auto 1fr auto;grid-template-areas:"ic lb pr" "ic sb pr";column-gap:16px;align-items:center;padding:18px 22px;border-radius:22px;background:var(--mnp-green);color:#fff;box-shadow:0 12px 28px rgba(33,48,29,.28)}
.mnp-best-ic{grid-area:ic;width:50px;height:50px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:#e69a70}
.mnp-best-ic svg{width:24px;height:24px}
.mnp-best-lb{grid-area:lb;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.65)}
.mnp-best-sb{grid-area:sb;font-size:15px;line-height:1.35;color:rgba(255,255,255,.92)}
.mnp-best-pr{grid-area:pr;font-size:clamp(1.9rem,3vw,2.4rem);font-weight:800;letter-spacing:-.02em;line-height:1}
.mnp-cuo{display:flex;align-items:center;gap:12px;padding:14px 22px;border:1px solid #e0d6c8;border-radius:999px;background:#fff;font-size:14px;color:#3b342d}
.mnp-cuo svg{width:22px;height:22px;color:#8a8076;flex:none}
.mnp-cuo span{flex:1;text-align:center;letter-spacing:.5px;text-transform:uppercase}
.mnp-cuo strong{font-size:1.4rem;font-weight:800;color:#0a0a0a;letter-spacing:-.01em}

.mnp-after{margin-top:22px}
.mnp-after p{margin:0}
.mnp-ship{display:flex;align-items:center;gap:14px;margin-bottom:14px;padding:14px 18px;border-radius:14px;background:#e9f3e6;border:1px solid #bfdcb8;color:var(--mnp-green);font-size:16px;line-height:1.3}
.mnp-ship-ic{flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--mnp-green);color:#fff}
.mnp-ship-ic svg{width:17px;height:17px}
.mnp-ship b{font-weight:800}
.mnp-rate{display:flex;align-items:center;flex-wrap:wrap;gap:6px 10px;margin-bottom:10px;font-size:15px;color:#5d554c}
.mnp-rate i{font-style:normal;color:var(--mnp-orange);letter-spacing:2px;font-size:17px}
.mnp-rate b{color:#0a0a0a;font-weight:800}
.mnp-rev{overflow:hidden;margin-bottom:16px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
.mnp-rev-track{display:flex;width:max-content;animation:mnpMarq 48s linear infinite}
.mnp-rev:hover .mnp-rev-track,.mnp-rev:active .mnp-rev-track{animation-play-state:paused}
.mnp-rc{flex:0 0 auto;width:250px;margin-right:12px;padding:14px 16px;background:#fff;border:1px solid #e6e2dc;border-radius:16px}
.mnp-rc i{display:block;margin-bottom:6px;font-style:normal;color:var(--mnp-orange);font-size:12px;letter-spacing:2px}
.mnp-rc p{margin:0 0 8px;font-size:14px;line-height:1.4;color:#333;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.mnp-rc b{font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#0a0a0a}
.mnp-pays{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}
.mnp-pays img{height:30px;width:auto;padding:4px 7px;border:1px solid #e0d6c8;border-radius:8px;background:#fff;object-fit:contain}
.mnp-trust{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px}
.mnp-tc{display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;padding:16px 10px;border:1px solid #e0d6c8;border-radius:16px;background:#fff}
.mnp-tc svg{width:20px;height:20px;color:var(--mnp-orange)}
.mnp-tc strong{font-size:15px;font-weight:700;line-height:1.2;color:#0a0a0a}
.mnp-tc span{font-size:12.5px;line-height:1.35;color:#7a7066}
.mnp-help{text-align:center;margin-bottom:22px !important;font-size:15px;color:#3b342d}
.mnp-help a{color:var(--mnp-orange) !important;font-weight:700;text-decoration:underline !important;text-underline-offset:3px}
.mnp-faq{margin-bottom:10px}
.mnp-fi{margin-bottom:8px;border:1px solid #e0d6c8;border-radius:14px;background:#faf7f2;overflow:hidden}
.mnp-fq{width:100%;display:flex;align-items:center;gap:12px;padding:16px 16px;background:none;border:0;cursor:pointer;text-align:left;color:#0a0a0a;font-family:inherit;font-size:13px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;line-height:1.35}
.mnp-fq svg{flex:none;width:20px;height:20px;color:#3b342d}
.mnp-fq span{flex:1}
.mnp-fq em{flex:none;position:relative;width:18px;height:18px}
.mnp-fq em::before,.mnp-fq em::after{content:"";position:absolute;top:50%;left:50%;background:#0a0a0a;transform:translate(-50%,-50%);transition:opacity .25s ease}
.mnp-fq em::before{width:14px;height:2px}
.mnp-fq em::after{width:2px;height:14px}
.mnp-fi.on .mnp-fq em::after{opacity:0}
.mnp-fa{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
.mnp-fa>div{overflow:hidden}
.mnp-fi.on .mnp-fa{grid-template-rows:1fr}
.mnp-fa p{padding:0 18px 18px 48px;font-size:14.5px;line-height:1.6;color:#555}

.mnp-badge{position:absolute;left:14px;bottom:14px;z-index:3;display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;background:rgba(255,255,255,.95);box-shadow:0 4px 14px rgba(0,0,0,.12);font-family:var(--mnp-font,inherit);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#21301D;pointer-events:none}
.mnp-badge i{font-style:normal;color:#B65F36;letter-spacing:1px}

.mnp-bar{position:fixed;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:9990;display:none;align-items:center;gap:10px;padding:10px 12px;background:#fff;border:1px solid #eee3d4;border-radius:22px;box-shadow:0 10px 36px rgba(0,0,0,.24);transform:translateY(150%);transition:transform .35s ease}
.mnp-bar.on{transform:none}
.mnp-bar img{flex:none;width:52px;height:52px;object-fit:cover;border-radius:12px;background:var(--mnp-cream)}
.mnp-bar-i{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.25}
.mnp-bar-i strong{font-size:13px;font-weight:700;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#0a0a0a}
.mnp-bar-i span{font-size:16px;font-weight:800;color:#0a0a0a}
.mnp-bar-i em{font-style:normal;font-size:13px;font-weight:700;color:var(--mnp-orange)}
.mnp-bar-s{flex:none;max-width:84px;height:46px;padding:0 8px;border:1px solid #ddd;border-radius:999px;background:#fff;font-family:inherit;font-size:14px;color:#0a0a0a}
.mnp-bar-b{flex:none;height:46px;padding:0 20px;border:0;border-radius:999px;background:var(--mnp-orange);color:#fff;font-family:inherit;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}
.mnp-bar-b:active{filter:brightness(.92)}

@media (max-width:900px){
  .mnp-tick span{font-size:11px;letter-spacing:2px;margin-right:26px}
  .mnp-best{grid-template-columns:auto 1fr;grid-template-areas:"ic lb" "ic pr" "ic sb";padding:16px 18px;row-gap:2px;border-radius:20px}
  .mnp-best-ic{width:46px;height:46px}
  .mnp-best-pr{font-size:2rem}
  .mnp-cuo{padding:13px 18px}
  .mnp-trust{gap:8px}
  .mnp-tc{padding:14px 6px}
  .mnp-tc strong{font-size:14px}
  .mnp-tc span{font-size:12px}
  .mnp-bar{display:flex}
  body.mnp-has-bar{padding-bottom:92px}
}
@media (prefers-reduced-motion:reduce){
  .mnp-tick-track,.mnp-rev-track{animation:none}
  .mnp-rev{overflow-x:auto;-webkit-mask-image:none;mask-image:none}
  .mnp-bar,.mnp-fa{transition:none}
}
`);
      if(CFG.fuente) document.documentElement.style.setProperty("--mnp-font",CFG.fuente);

      /* ---------- Elementos de la página ---------- */
      var h1=null,hs=document.querySelectorAll("h1");
      for(var i=0;i<hs.length;i++){
        if(!hs[i].closest("header,nav,footer")&&hs[i].textContent.trim()){h1=hs[i];break;}
      }
      if(h1) h1.classList.add("mnp-title");

      var priceEl=null,pe=document.querySelectorAll(".js-price-display");
      for(var j=0;j<pe.length;j++){
        if(!pe[j].closest(".js-item-product,.item-product,.js-product-related,[data-store^='product-item']")){priceEl=pe[j];break;}
      }
      if(priceEl){
        priceEl.classList.add("mnp-price");
        priceEl.insertAdjacentHTML("beforebegin",'<span class="mnp-lbl">Precio</span>');
      }

      var nombre=h1?h1.textContent.trim():document.title;
      var ogm=document.querySelector('meta[property="og:image"]');
      var imgSrc=ogm?ogm.getAttribute("content"):"";

      function readPrice(){
        if(priceEl){
          var c=priceEl.getAttribute("content");
          if(c&&parse(c)) return parse(c);
          var d=priceEl.getAttribute("data-product-price");
          if(d&&parseFloat(d)) return parseFloat(d)/100;
          var tx=parse(priceEl.textContent);
          if(tx) return tx;
        }
        var m=document.querySelector('meta[property="product:price:amount"]');
        return m?parse(m.getAttribute("content")):0;
      }

      /* ---------- Cinta de beneficios ---------- */
      var items=['10% OFF <b>TRANSFERENCIA</b>','<b>'+CFG.cuotas+' CUOTAS</b> SIN INTERÉS','ENVÍOS A TODO EL <b>PAÍS</b>','HECHO A <b>MANO</b>'];
      var tk="";
      for(var r=0;r<2;r++) items.forEach(function(x){tk+='<span>✦ '+x+'</span>';});
      var tick=document.createElement("div");
      tick.className="mnp-tick";
      tick.setAttribute("aria-hidden","true");
      tick.innerHTML='<div class="mnp-tick-track">'+tk+tk+'</div>';
      var hdr=document.querySelector("header, #header, .js-head-main");
      if(hdr&&hdr.parentNode) hdr.insertAdjacentElement("afterend",tick);
      else document.body.insertBefore(tick,document.body.firstChild);

      /* ---------- Tarjetas de precio ---------- */
      var pay=document.createElement("div");
      pay.className="mnp-pay";
      pay.innerHTML=
        '<div class="mnp-best">'+
          '<span class="mnp-best-ic">'+ICO.card+'</span>'+
          '<span class="mnp-best-lb">Mejor precio</span>'+
          '<span class="mnp-best-sb">Por transferencia · ahorrás <b data-s></b></span>'+
          '<strong class="mnp-best-pr" data-t></strong>'+
        '</div>'+
        '<div class="mnp-cuo">'+ICO.card+'<span>'+CFG.cuotas+' cuotas sin interés</span><strong data-c></strong></div>';
      form.insertAdjacentElement("beforebegin",pay);

      /* ---------- Bloque debajo del formulario ---------- */
      var after=document.createElement("div");
      after.className="mnp-after";

      var revHTML="";
      RESENIAS.forEach(function(rv){
        var n=Math.max(1,Math.min(5,rv.estrellas||5));
        var c=document.createElement("div");c.className="mnp-rc";
        var s=document.createElement("i");s.textContent="★★★★★".slice(0,n);
        var p=document.createElement("p");p.textContent=rv.texto||"";
        var b=document.createElement("b");b.textContent=rv.nombre||"";
        c.appendChild(s);c.appendChild(p);c.appendChild(b);
        revHTML+=c.outerHTML;
      });

      // Logos de medios de pago (CDN de Tiendanube)
      var LOGO_BASE="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/";
      var LOGOS=[["visa@2x.png","visa"],["mastercard@2x.png","mastercard"],["amex@2x.png","amex"],["ar/tarjeta-naranja@2x.png","tarjeta naranja"],["nativa@2x.png","nativa"],["ar/cabal@2x.png","cabal"],["mercadopago@2x.png","mercadopago"],["maestro@2x.png","maestro"]];
      var logosHTML=LOGOS.map(function(l){
        return '<img src="'+LOGO_BASE+l[0]+'" alt="'+l[1]+'" loading="lazy" onerror="this.remove()">';
      }).join("");

      after.innerHTML=
        '<div class="mnp-ship"><span class="mnp-ship-ic">'+ICO.bolt+'</span><p>Despachamos tu pedido en <b>'+CFG.despacho+'</b></p></div>'+
        '<div class="mnp-rate"><i aria-hidden="true">★★★★★</i><b>5,0</b><span>· Clientes verificados</span></div>'+
        '<div class="mnp-rev" aria-label="Reseñas de clientes"><div class="mnp-rev-track">'+revHTML+revHTML+'</div></div>'+
        '<div class="mnp-pays" aria-label="Medios de pago">'+logosHTML+'</div>'+
        '<div class="mnp-trust">'+
          '<div class="mnp-tc">'+ICO.back+'<strong>Cambios y devoluciones</strong><span>Producto sin uso y en perfecto estado</span></div>'+
          '<div class="mnp-tc">'+ICO.chat+'<strong>Atención personalizada</strong><span>Te respondemos por Instagram</span></div>'+
          '<div class="mnp-tc">'+ICO.truck+'<strong>Envíos a todo el país</strong><span>Rápidos y seguros</span></div>'+
        '</div>'+
        '<p class="mnp-help">¿Dudas con este producto? <a href="'+CFG.ig+'" target="_blank" rel="noopener">Escribinos por Instagram</a></p>'+
        '<div class="mnp-faq">'+
          faqItem(ICO.shield,"¿Qué pasa si tengo un problema con mi compra?","Escribinos por Instagram y lo resolvemos lo antes posible. Estamos para ayudarte antes y después de tu compra.")+
          faqItem(ICO.back,"¿Puedo cambiar o devolver el producto?","Sí. Podés pedir el cambio si el producto está sin uso y en perfecto estado. Escribinos por Instagram y te indicamos los pasos.")+
          faqItem(ICO.truck,"¿Cómo sé dónde está mi pedido?","Una vez despachado, te llega el código de seguimiento para que sigas tu envío.")+
        '</div>';
      form.insertAdjacentElement("afterend",after);

      function faqItem(ico,q,a){
        return '<div class="mnp-fi"><button class="mnp-fq" type="button" aria-expanded="false">'+ico+'<span>'+q+'</span><em></em></button><div class="mnp-fa"><div><p>'+a+'</p></div></div></div>';
      }

      // Acordeón: una abierta a la vez
      var fis=after.querySelectorAll(".mnp-fi");
      fis.forEach(function(fi){
        fi.querySelector(".mnp-fq").addEventListener("click",function(){
          var was=fi.classList.contains("on");
          fis.forEach(function(o){o.classList.remove("on");o.querySelector(".mnp-fq").setAttribute("aria-expanded","false");});
          if(!was){fi.classList.add("on");fi.querySelector(".mnp-fq").setAttribute("aria-expanded","true");}
        });
      });

      /* ---------- Sello sobre la foto ---------- */
      var g=document.querySelector(".js-product-slider-container, .js-swiper-product, .product-image-container, .js-product-gallery, [data-store='product-image']");
      if(g){
        if(getComputedStyle(g).position==="static") g.style.position="relative";
        var bd=document.createElement("span");
        bd.className="mnp-badge";
        bd.innerHTML='<i>★★★★★</i> Hecho a mano';
        g.appendChild(bd);
      }

      /* ---------- Barra fija (celular) ---------- */
      var bar=document.createElement("div");
      bar.className="mnp-bar";
      bar.innerHTML=(imgSrc?'<img alt="" src="">':'')+
        '<div class="mnp-bar-i"><strong></strong><span data-bp></span><em data-bt></em></div>'+
        '<button type="button" class="mnp-bar-b">Comprar</button>';
      if(imgSrc) bar.querySelector("img").setAttribute("src",imgSrc);
      bar.querySelector("strong").textContent=nombre;
      document.body.appendChild(bar);

      var barBtn=bar.querySelector(".mnp-bar-b");
      function realBtn(){return form.querySelector(".js-addtocart, .js-prod-submit-form, input[type=submit], button[type=submit]");}

      barBtn.addEventListener("click",function(){
        var b=realBtn();
        if(b&&!b.disabled) b.click();
        else form.scrollIntoView({behavior:"smooth",block:"center"});
      });

      // Selector de talle/variante espejo (solo si hay un único selector)
      var sels=form.querySelectorAll("select");
      if(sels.length===1){
        var real=sels[0];
        var mir=document.createElement("select");
        mir.className="mnp-bar-s";
        mir.setAttribute("aria-label","Variante");
        for(var o=0;o<real.options.length;o++){
          var op=document.createElement("option");
          op.value=real.options[o].value;
          op.textContent=real.options[o].text;
          op.disabled=real.options[o].disabled;
          mir.appendChild(op);
        }
        mir.value=real.value;
        mir.addEventListener("change",function(){
          real.value=mir.value;
          real.dispatchEvent(new Event("change",{bubbles:true}));
        });
        real.addEventListener("change",function(){mir.value=real.value;});
        bar.insertBefore(mir,barBtn);
      }

      // Aparece cuando el botón original ya quedó arriba
      var target=realBtn()||form;
      function toggleBar(on){
        bar.classList.toggle("on",on);
        document.body.classList.toggle("mnp-has-bar",on);
      }
      if("IntersectionObserver" in window){
        new IntersectionObserver(function(es){
          var e=es[0];
          toggleBar(!e.isIntersecting&&e.boundingClientRect.top<0);
        },{threshold:0}).observe(target);
      }

      /* ---------- Textos de transferencia repetidos del tema ---------- */
      function hideDup(){
        var root=form;
        while(root.parentElement&&h1&&!root.contains(h1)) root=root.parentElement;
        var els=root.querySelectorAll("div,p,span,li");
        for(var k=0;k<els.length;k++){
          var el=els[k];
          if(isMine(el)||el.classList.contains("mnp-hide")) continue;
          if(el.closest("[role=dialog],.modal,.js-modal,[class*=modal],.user-content,[class*=description],header,footer,nav")) continue;
          if(el.contains(form)||(h1&&el.contains(h1))||(priceEl&&el.contains(priceEl))) continue;
          var own="";
          for(var q=0;q<el.childNodes.length;q++){if(el.childNodes[q].nodeType===3) own+=el.childNodes[q].nodeValue;}
          if(/transferencia/i.test(own)) el.classList.add("mnp-hide");
        }
      }

      /* ---------- Actualizar precios ---------- */
      function set(sel,txt){var n=pay.querySelector(sel);if(n)n.textContent=txt;}
      function update(){
        var p=readPrice();
        pay.style.display=p>0?"":"none";
        if(p<=0)return;
        var t=p*(1-CFG.transf/100);
        set("[data-t]",fmt(t));
        set("[data-s]",fmt(p-t));
        set("[data-c]",fmt(p/CFG.cuotas));
        bar.querySelector("[data-bp]").textContent=fmt(p);
        bar.querySelector("[data-bt]").textContent=fmt(t)+" transf.";
        hideDup();
      }
      update();
      setTimeout(update,600);
      setTimeout(update,1600);
      if(priceEl&&"MutationObserver" in window){
        new MutationObserver(update).observe(priceEl,{childList:true,characterData:true,subtree:true,attributes:true});
      }

      return true;
    }

    if(!start()){
      var tries=0,w=setInterval(function(){
        if(start()||++tries>30) clearInterval(w);
      },300);
    }
  }

  /* ---------- Arranque ---------- */
  ready(function(){
    addFont();
    if(isHome){
      categorias();
      instagram();
      tienda();
      local();
      faq();
      resenias();
    }
    if(isProduct){
      producto();
    }
  });
})();
