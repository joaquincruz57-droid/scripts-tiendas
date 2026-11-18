/* ==========================================================
     NUEVA) TIENDA - Artesanías + Trekking (debajo de Instagram)
     Pegala ENTERA justo antes del bloque "3) LOCAL"
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
   CÓMO INSTALARLA (3 cambios en tu archivo)
   ----------------------------------------------------------
   1) Pegá la función tienda() de arriba justo antes del
      bloque "3) LOCAL".

   2) En la función local(), cambiá esta línea dentro de place():
        var ig=document.getElementById("mniInstagram");
      por esta:
        var ig=document.getElementById("mntTienda")||document.getElementById("mniInstagram");

   3) En el arranque, agregá tienda(); después de instagram();
        categorias();
        instagram();
        tienda();
        local();
        faq();
        resenias();
   ========================================================== */
