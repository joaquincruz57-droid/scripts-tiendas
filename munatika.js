/* ==========================================================
   MUNATIKA - Secciones del inicio (archivo único)
   Incluye: Categorías, Instagram, Local, Preguntas, Reseñas
   ========================================================== */
(function(){
  "use strict";

  // Solo en la página de inicio
  var path=location.pathname.replace(/\/+$/,"");
  var isHome=path===""||/^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if(!isHome)return;

  // Evita que se cargue dos veces
  if(window.__munatikaLoaded)return;
  window.__munatikaLoaded=true;

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
     5) RESEÑAS
     ========================================================== */
  function resenias(){
    /* =====================================================
       RESEÑAS DE CLIENTES
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

  /* ---------- Arranque ---------- */
  ready(function(){
    addFont();
    categorias();
    instagram();
    local();
    faq();
    resenias();
  });
})();
