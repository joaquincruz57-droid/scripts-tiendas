/* ====== BANNER SIMONE SHOES · Tienda Nube ======
   Se inserta solo en el inicio, arriba del slider / secciones.
   En las demás páginas no hace nada. */
(function () {
  if (window.__sbBanner || document.getElementById('sbBanner')) return;
  window.__sbBanner = true;

  /* ---------- Solo en el inicio ---------- */
  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* ---------- Imágenes ---------- */
  var IMG = {
    logo: 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Logo%20de%20Simone%20Shoes%20con%20letras%20curvadas.png',
    foto: 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/imgi_16_799263768_17943080322342260_6280568601188949525_n.jpg',
    nike: 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Zapatillas%20Nike%20grises%20aisladas.png',
    vansMarron: 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Zapatillas%20Vans%20marro%CC%81n%20y%20beige.png',
    vansNegras: 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Zapatillas%20Vans%20negras%20sobrepuestas.png'
  };

  /* ---------- Textos (editables) ---------- */
  var TXT = {
    palabra: 'SIMONE',
    usuario: 'simoneshoes',
    sub: 'Calzado · Nuevos ingresos',
    likes: '1.284',
    caption: 'Nuevos ingresos. Zapatillas que no pasan desapercibidas 🔥'
  };

  /* ---------- CSS ---------- */
  var css = `
.sb{
  --sb-navy:#2f4058;
  --sb-blue:#0b5fe0;
  --sb-sky:#b5d8f7;
  --sb-bg:#eaf3fb;
  --sb-rot:-14deg;
  position:relative; overflow:hidden; width:100%;
  background:var(--sb-bg);
  aspect-ratio:16/7.2;
  container-type:inline-size;
  isolation:isolate;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
}
.sb *{box-sizing:border-box;margin:0;padding:0}
.sb img{display:block;max-width:100%;user-select:none;-webkit-user-drag:none}

.sb-text{
  position:absolute; left:0; right:0; top:50%;
  transform:translateY(-47%) skewX(-6deg);
  display:flex; justify-content:center;
  font-family:"Anton","Bebas Neue",Impact,sans-serif;
  font-size:28cqw; line-height:.8; color:var(--sb-navy);
  letter-spacing:.005em; z-index:1; pointer-events:none;
}
.sb-text span{
  display:inline-block; opacity:0; transform:translateY(30%);
  animation:sbLetter .9s cubic-bezier(.2,.9,.2,1) forwards;
  animation-delay:calc(var(--i)*.09s + .1s);
}
@keyframes sbLetter{to{opacity:1;transform:none}}

.sb-card{
  position:absolute; left:50%; top:8.5%;
  width:24.3cqw; transform:translateX(-50%);
  font-size:.95cqw; background:#fff; border-radius:2em;
  box-shadow:0 2.5em 6em rgba(47,64,88,.25);
  z-index:2; overflow:hidden;
  opacity:0; animation:sbCard .9s .25s cubic-bezier(.2,.9,.2,1) forwards;
}
@keyframes sbCard{from{opacity:0;transform:translateX(-50%) translateY(6%)}to{opacity:1;transform:translateX(-50%)}}
.sb-ph{display:flex;align-items:center;gap:1em;padding:1.3em 1.5em;height:4em}
.sb-av{width:2.9em;height:2.9em;border-radius:50%;background:var(--sb-navy);border:.22em solid var(--sb-sky);padding:.35em;flex:none;display:grid;place-items:center}
.sb-av img{width:100%}
.sb-ph b{display:block;font-size:1.15em;color:#111;line-height:1.15}
.sb-ph small{font-size:1em;color:#666}
.sb-dots{margin-left:auto;color:#111;letter-spacing:.1em;font-size:1.3em}
.sb-foto{aspect-ratio:1/.99;overflow:hidden;background:#ddd}
.sb-foto img{width:100%;height:100%;object-fit:cover}
.sb-acc{display:flex;align-items:center;gap:1.1em;padding:1.1em 1.5em .4em}
.sb-acc svg{width:2.1em;height:2.1em;fill:none;stroke:#111;stroke-width:1.7;stroke-linejoin:round;stroke-linecap:round}
.sb-acc svg.on{fill:var(--sb-blue);stroke:var(--sb-blue);animation:sbBeat 1.8s ease-in-out infinite}
.sb-acc svg.sb-sv{margin-left:auto}
@keyframes sbBeat{0%,100%{transform:scale(1)}14%{transform:scale(1.22)}28%{transform:scale(1)}42%{transform:scale(1.14)}70%{transform:scale(1)}}
.sb-likes{padding:.4em 1.5em;font-size:1.1em;color:#111}
.sb-cap{padding:.2em 1.5em 1.6em;font-size:1.1em;line-height:1.4;color:#111}

/* Zapatilla que sobresale de la card */
.sb-hero{
  position:absolute; left:50cqw; top:3cqw; width:22cqw; z-index:3; pointer-events:none;
  opacity:0; animation:sbHeroIn 1.1s .5s cubic-bezier(.2,.9,.2,1) forwards;
}
.sb-hero img{
  width:100%; transform:rotate(var(--sb-rot));
  filter:drop-shadow(0 3cqw 3cqw rgba(0,0,0,.28));
  animation:sbFloatHero 6s ease-in-out 1.6s infinite;
}
@keyframes sbHeroIn{from{opacity:0;transform:translateY(-14%)}to{opacity:1;transform:none}}
@keyframes sbFloatHero{0%,100%{transform:rotate(var(--sb-rot)) translateY(0)}50%{transform:rotate(calc(var(--sb-rot) + 2.5deg)) translateY(-1.2cqw)}}

/* Productos flotando */
.sb-fl{position:absolute;z-index:1;pointer-events:none;opacity:0;animation:sbPop .8s cubic-bezier(.2,.9,.2,1) forwards;animation-delay:calc(var(--d)*1s + .6s)}
.sb-fl > div{animation:sbFloat var(--t,5s) ease-in-out calc(var(--d)*1s + 1.4s) infinite}
.sb-fl img{width:100%;filter:drop-shadow(0 1.2cqw 1.2cqw rgba(0,0,0,.2))}
@keyframes sbPop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}
@keyframes sbFloat{0%,100%{transform:translateY(0) rotate(var(--r1,-3deg))}50%{transform:translateY(-1.4cqw) rotate(var(--r2,3deg))}}

.sb-marron{left:7cqw;top:7cqw;width:17cqw;--d:.0;--t:5s;--r1:-4deg;--r2:3deg}
.sb-negras{right:9cqw;bottom:4cqw;width:19cqw;--d:.2;--t:5.6s;--r1:4deg;--r2:-4deg}

/* Logo con halo difuminado para que se vea bien */
.sb-logo{left:8cqw;bottom:5cqw;width:11cqw;--d:.4;--t:4s;--r1:-2deg;--r2:2deg}
.sb-logo::before{
  content:"";position:absolute;inset:-30%;z-index:-1;border-radius:50%;
  background:radial-gradient(closest-side,rgba(47,64,88,.95) 0%,rgba(47,64,88,.8) 55%,rgba(47,64,88,0) 100%);
  filter:blur(8px);
}

.sb-px{translate:var(--px,0cqw) var(--py,0cqw);transition:translate .25s ease-out;will-change:translate}

@media (max-width:700px){
  .sb{aspect-ratio:4/5.1}
  .sb-text{font-size:30cqw;top:46%}
  .sb-card{width:64cqw;top:11cqw;font-size:2.55cqw}
  .sb-hero{left:44cqw;top:0cqw;width:48cqw}
  .sb-marron{left:2cqw;top:3cqw;width:30cqw}
  .sb-negras{right:2cqw;bottom:2cqw;width:34cqw}
  .sb-logo{left:4cqw;bottom:2cqw;width:20cqw}
}
@media (prefers-reduced-motion:reduce){
  .sb *{animation-duration:.01s!important;animation-iteration-count:1!important}
}`;

  /* ---------- HTML ---------- */
  var letras = TXT.palabra.split('').map(function (l, i) {
    return '<span style="--i:' + i + '">' + l + '</span>';
  }).join('');

  var html = `
<div class="sb-text sb-px" data-depth="0.4" aria-label="${TXT.palabra}">${letras}</div>

<div class="sb-fl sb-marron sb-px" data-depth="1.2"><div><img src="${IMG.vansMarron}" alt=""></div></div>
<div class="sb-fl sb-negras sb-px" data-depth="1.4"><div><img src="${IMG.vansNegras}" alt=""></div></div>
<div class="sb-fl sb-logo sb-px" data-depth="1.0"><div><img src="${IMG.logo}" alt="Simone Shoes"></div></div>

<article class="sb-card sb-px" data-depth="0.6">
  <div class="sb-ph">
    <span class="sb-av"><img src="${IMG.logo}" alt=""></span>
    <div><b>${TXT.usuario}</b><small>${TXT.sub}</small></div>
    <span class="sb-dots">···</span>
  </div>
  <div class="sb-foto"><img src="${IMG.foto}" alt=""></div>
  <div class="sb-acc">
    <svg class="on" viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.3C.3 8.4 2.2 4.5 6 4.5c2.2 0 3.6 1.2 6 3.7 2.4-2.5 3.8-3.7 6-3.7 3.8 0 5.7 3.9 4 7.2C19.5 16.4 12 21 12 21z"/></svg>
    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>
    <svg viewBox="0 0 24 24"><path d="M22 3L9.5 13M22 3l-7 18-3.5-8L3 9.5z"/></svg>
    <svg class="sb-sv" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></svg>
  </div>
  <div class="sb-likes">Les gusta a <b>${TXT.likes}</b> personas</div>
  <div class="sb-cap"><b>${TXT.usuario}</b> ${TXT.caption}</div>
</article>

<div class="sb-hero sb-px" data-depth="1.8">
  <img src="${IMG.nike}" alt="Zapatillas Nike">
</div>`;

  /* ---------- Fuente + estilos ---------- */
  var head = document.head;
  [['preconnect', 'https://fonts.googleapis.com'], ['preconnect', 'https://fonts.gstatic.com']].forEach(function (p) {
    var l = document.createElement('link');
    l.rel = p[0]; l.href = p[1];
    if (p[1].indexOf('gstatic') > -1) l.crossOrigin = 'anonymous';
    head.appendChild(l);
  });
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
  head.appendChild(font);

  var st = document.createElement('style');
  st.id = 'sbStyles';
  st.textContent = css;
  head.appendChild(st);

  /* ---------- Crear sección ---------- */
  var sec = document.createElement('section');
  sec.className = 'sb';
  sec.id = 'sbBanner';
  sec.setAttribute('aria-label', 'Banner Simone Shoes');
  sec.innerHTML = html;

  /* ---------- Ubicar arriba del inicio ---------- */
  function ubicar() {
    var selectores = [
      '.js-home-main-slider', '.js-home-slider', '.js-main-slider', '.section-slider-home',
      '.section-banner-home', '.js-home-banners', '.home-slider', '.main-slider',
      '.section-home-slider', '[data-store="home-slider"]', '[data-store="home-banner"]',
      '.swiper-container', '.swiper'
    ];
    var banner = null;
    for (var i = 0; i < selectores.length; i++) {
      banner = document.querySelector(selectores[i]);
      if (banner && !sec.contains(banner)) break;
      banner = null;
    }

    if (banner) {
      var el = banner;
      while (el.parentElement && !/^(MAIN|BODY)$/.test(el.parentElement.tagName) &&
             !el.parentElement.matches('#content, .js-home-sections-container, .js-content')) {
        el = el.parentElement;
      }
      var prev = el.previousElementSibling;
      while (prev && (prev.id === 'sbBeneficios' || prev.id === 'sbCategorias')) prev = prev.previousElementSibling;
      if (prev !== sec) el.insertAdjacentElement('beforebegin', sec);
    } else {
      var cont = document.querySelector('.js-home-sections-container, #content, .js-content, main');
      if (!cont) return;
      if (cont.firstElementChild !== sec) cont.insertBefore(sec, cont.firstChild);
    }
  }

  function arrancar() {
    ubicar();
    var n = 0, t = setInterval(function () { ubicar(); if (++n > 25) clearInterval(t); }, 300);
    initParallax();
  }

  /* ---------- Parallax con mouse (solo desktop) ---------- */
  function initParallax() {
    if (window.matchMedia('(pointer:coarse)').matches ||
        window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var els = sec.querySelectorAll('.sb-px');
    sec.addEventListener('mousemove', function (e) {
      var r = sec.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      els.forEach(function (el) {
        var d = parseFloat(el.dataset.depth || 1);
        el.style.setProperty('--px', (-x * d * 1.2).toFixed(2) + 'cqw');
        el.style.setProperty('--py', (-y * d * 1.2).toFixed(2) + 'cqw');
      });
    });
    sec.addEventListener('mouseleave', function () {
      els.forEach(function (el) { el.style.setProperty('--px', '0cqw'); el.style.setProperty('--py', '0cqw'); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else { arrancar(); }
})();


/* ====== BENEFICIOS SIMONE SHOES · carrusel infinito ======
   Se ubica justo debajo del banner. Solo en el inicio. */
(function () {
  if (window.__sbBeneficios || document.getElementById('sbBeneficios')) return;
  window.__sbBeneficios = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* ---------- Beneficios (editables) ---------- */
  var ITEMS = [
    { icon: 'truck',  t: 'Envío gratis a todo el país', s: 'Llevamos tu pedido hasta tu casa' },
    { icon: 'card',   t: '3 cuotas sin interés',        s: 'Pagá en cuotas, sin recargo' },
    { icon: 'tag',    t: '10% OFF transferencia',       s: 'Pagando por transferencia bancaria', hot: true },
    { icon: 'chat',   t: 'Atención personalizada',      s: 'Te asesoramos antes y después' },
    { icon: 'shield', t: 'Compra segura',               s: 'Tus datos siempre protegidos' }
  ];

  var ICONS = {
    truck:  '<path d="M1.5 6h12v10h-12z"/><path d="M13.5 9.5h4l3 3V16h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    card:   '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/>',
    tag:    '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    chat:   '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'
  };

  /* ---------- CSS ---------- */
  var css = `
.sbn{
  --n:#2f4058; --blue:#0b5fe0; --line:#dce7f2;
  position:relative; width:100%; overflow:hidden; background:#fff;
  border-bottom:1px solid var(--line);
  font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
}
.sbn *{box-sizing:border-box;margin:0;padding:0}
.sbn-view{
  overflow:hidden; padding:30px 0;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
          mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
}
.sbn-track{display:flex; width:max-content; will-change:transform}
.sbn-on .sbn-track{animation:sbnMove var(--dur,40s) linear infinite}
.sbn:hover .sbn-track{animation-play-state:paused}
.sbn-grp{display:flex; flex:none}
@keyframes sbnMove{to{transform:translate3d(calc(var(--gw,0px) * -1),0,0)}}

.sbn-item{
  display:flex; align-items:center; gap:18px; flex:none;
  padding:6px 48px; border-right:1px solid var(--line);
}
.sbn-ico{
  flex:none; width:58px; height:58px; border-radius:50%;
  display:grid; place-items:center; background:#fff; color:var(--n);
  border:1px solid var(--line);
  transition:background .3s ease,color .3s ease,border-color .3s ease,transform .3s ease;
}
.sbn-ico svg{
  width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.6;
  stroke-linecap:round;stroke-linejoin:round;
  animation:sbnBob 3.4s ease-in-out infinite; animation-delay:var(--sd,0s);
}
@keyframes sbnBob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-2px) rotate(-5deg)}}
.sbn-item:hover .sbn-ico{background:var(--n);color:#fff;border-color:var(--n);transform:scale(1.06)}
.sbn-hot .sbn-ico{color:var(--blue);border-color:rgba(11,95,224,.45)}
.sbn-hot:hover .sbn-ico{background:var(--blue);border-color:var(--blue);color:#fff}

.sbn-t{
  display:block; font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif; font-weight:400;
  text-transform:uppercase; font-size:25px; line-height:1.05; letter-spacing:.012em;
  color:#16202e; white-space:nowrap;
}
.sbn-t::after{
  content:""; display:block; width:28px; height:3px; margin:8px 0 9px;
  background:var(--blue); border-radius:2px; transition:width .35s ease;
}
.sbn-item:hover .sbn-t::after{width:56px}
.sbn-s{display:block; font-size:14.5px; line-height:1.35; color:#6b7684; white-space:nowrap}

@media (max-width:700px){
  .sbn-view{padding:14px 0}
  .sbn-item{gap:12px;padding:4px 26px}
  .sbn-ico{width:42px;height:42px}
  .sbn-ico svg{width:20px;height:20px}
  .sbn-t{font-size:18px}
  .sbn-t::after{width:22px;height:2.5px;margin:5px 0 6px}
  .sbn-s{font-size:12px}
}
@media (prefers-reduced-motion:reduce){
  .sbn-on .sbn-track{animation:none}
  .sbn-view{overflow-x:auto}
  .sbn-ico svg{animation:none}
}`;

  /* ---------- HTML ---------- */
  function item(it, i) {
    return '<div class="sbn-item' + (it.hot ? ' sbn-hot' : '') + '" style="--sd:' + (i * 0.7) + 's">' +
      '<span class="sbn-ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[it.icon] + '</svg></span>' +
      '<span><b class="sbn-t">' + it.t + '</b><span class="sbn-s">' + it.s + '</span></span>' +
    '</div>';
  }

  var head = document.head;
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600&display=swap';
  head.appendChild(font);

  var st = document.createElement('style');
  st.id = 'sbnStyles';
  st.textContent = css;
  head.appendChild(st);

  var ben = document.createElement('section');
  ben.className = 'sbn';
  ben.id = 'sbBeneficios';
  ben.setAttribute('aria-label', 'Beneficios de Simone Shoes');
  ben.innerHTML = '<div class="sbn-view"><div class="sbn-track"><div class="sbn-grp">' +
    ITEMS.map(item).join('') + '</div></div></div>';

  var view = ben.querySelector('.sbn-view');
  var track = ben.querySelector('.sbn-track');

  /* ---------- Loop infinito: sin reiniciar la animación ---------- */
  var gwActual = 0;
  function armar() {
    var g = track.querySelector('.sbn-grp');
    var gw = Math.round(g.getBoundingClientRect().width);
    if (!gw) return;
    var necesarias = Math.ceil(view.clientWidth / gw) + 1;
    var hay = track.querySelectorAll('.sbn-grp[data-c]').length;
    while (hay < necesarias) {
      var c = g.cloneNode(true);
      c.setAttribute('data-c', '1');
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
      hay++;
    }
    while (hay > necesarias) { track.lastElementChild.remove(); hay--; }
    if (gw !== gwActual) {
      gwActual = gw;
      ben.style.setProperty('--gw', gw + 'px');
      ben.style.setProperty('--dur', (gw / 45).toFixed(1) + 's'); /* 45 px/seg: subí el número para ir más rápido */
    }
  }

  /* ---------- Ubicar justo debajo del banner ---------- */
  function ubicar() {
    var sec = document.getElementById('sbBanner');
    if (!sec) return false;
    if (ben.previousElementSibling !== sec) sec.insertAdjacentElement('afterend', ben);
    return true;
  }

  /* ---------- Arrancar cuando las fuentes ya cargaron (evita saltos) ---------- */
  var iniciado = false;
  function iniciar() {
    if (iniciado) return;
    iniciado = true;
    armar();
    ben.classList.add('sbn-on');
  }
  function alCargarFuentes() {
    if (document.fonts && document.fonts.load) {
      Promise.all([document.fonts.load('25px Anton'), document.fonts.load('14px Poppins')]).then(iniciar, iniciar);
    } else { iniciar(); }
  }

  function arrancar() {
    var n = 0;
    var t = setInterval(function () {
      ubicar();
      if (++n > 40) clearInterval(t);
    }, 250);
    font.onload = alCargarFuentes;
    setTimeout(iniciar, 2500); /* por si las fuentes tardan */
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { if (iniciado) armar(); }, 200); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else { arrancar(); }
})();


/* ====== CATEGORÍAS (MARCAS) SIMONE SHOES ======
   Se ubica justo debajo de los beneficios. Solo en el inicio. */
(function () {
  if (window.__sbCats || document.getElementById('sbCategorias')) return;
  window.__sbCats = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* ---------- Marcas (editables) ----------
     url: poné acá el link real de cada categoría de tu tienda.
     Ahora usan el buscador de Tienda Nube (/search/?q=...) para que funcionen desde ya. */
  var R2 = 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/';
  var CATS = [
    { n: 'Adidas',      img: 'Logotipo%20Adidas%20sobre%20ondas%20azules.png',         url: '/search/?q=adidas' },
    { n: 'New Balance', img: 'Logotipo%20New%20Balance%20sobre%20fondo%20azul.png',    url: '/search/?q=new+balance' },
    { n: 'Nike',        img: 'Logotipo%20Nike%20sobre%20ondas%20azules.png',           url: '/search/?q=nike' },
    { n: 'Puma',        img: 'Logotipo%20Puma%20en%20azul%20degradado.png',            url: '/search/?q=puma' },
    { n: 'Vans',        img: 'Logotipo%20VANS%C2%AE%20sobre%20ondas%20azules.png',     url: '/search/?q=vans' },
    { n: 'Jordan',      img: 'Silueta%20Jumpman%20sobre%20ondas%20azules.png',         url: '/search/?q=jordan' }
  ];

  /* ---------- CSS ---------- */
  var css = `
.sbc{
  --n:#2f4058; --blue:#0b5fe0; --sky:#b5d8f7; --line:#dce7f2;
  position:relative; width:100%; overflow:hidden; isolation:isolate;
  padding:46px 0 54px;
  background:linear-gradient(180deg,#f5f9fd 0%,#eaf3fb 100%);
  font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
}
.sbc *{box-sizing:border-box;margin:0;padding:0}
.sbc::before,.sbc::after{content:"";position:absolute;z-index:-1;border-radius:50%;pointer-events:none}
.sbc::before{width:420px;height:420px;left:-140px;top:-120px;background:radial-gradient(circle,rgba(181,216,247,.55),transparent 70%)}
.sbc::after{width:520px;height:520px;right:-180px;bottom:-200px;background:radial-gradient(circle,rgba(181,216,247,.5),transparent 70%)}
.sbc-wrap{max-width:1200px;margin:0 auto;padding:0 4.4%}

.sbc-head{text-align:center;margin-bottom:38px}
.sbc-tag{display:inline-flex;align-items:center;gap:.8rem;font-size:.68rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#7b8898;margin-bottom:.8rem}
.sbc-tag i{display:inline-block;width:2.2rem;height:2px;background:var(--sky)}
.sbc-title{
  position:relative;display:inline-block;padding-bottom:16px;
  font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;
  font-size:clamp(2.1rem,4.6vw,3.3rem);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#16202e;
}
.sbc-title em{font-style:normal;color:var(--blue)}
.sbc-title::after{content:"";position:absolute;left:50%;bottom:0;width:0;height:4px;border-radius:4px;background:var(--blue);transform:translateX(-50%);transition:width .9s cubic-bezier(.2,.9,.2,1) .4s}
.sbc.in .sbc-title::after{width:64px}
.sbc-sub{margin-top:12px;font-size:.95rem;line-height:1.5;color:#6b7684}

.sbc-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:24px}
.sbc-item{
  display:flex;flex-direction:column;align-items:center;gap:16px;text-decoration:none!important;
  opacity:0;transform:translateY(28px);
  transition:opacity .7s ease var(--d,0s),transform .7s cubic-bezier(.2,.9,.2,1) var(--d,0s);
}
.sbc.in .sbc-item{opacity:1;transform:none}
.sbc.in .sbc-item:hover{transform:translateY(-8px);transition-delay:0s}

.sbc-ring{
  position:relative;width:100%;aspect-ratio:1;border-radius:50%;
  box-shadow:0 14px 28px rgba(47,64,88,.2);
  animation:sbcFloat 5.5s ease-in-out infinite;animation-delay:var(--f,0s);
}
.sbc-ring::before{
  content:"";position:absolute;inset:0;border-radius:50%;
  background:conic-gradient(from 0deg,var(--sky),var(--blue),var(--sky),#8fc2f0,var(--sky));
  animation:sbcSpin 5s linear infinite;animation-play-state:paused;
}
.sbc-item:hover .sbc-ring::before{animation-play-state:running}
.sbc-circ{
  position:absolute;inset:5px;border-radius:50%;overflow:hidden;background:var(--n);
  border:4px solid #fff;
}
.sbc-circ img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.9,.2,1)}
.sbc-item:hover .sbc-circ img{transform:scale(1.1)}
@keyframes sbcFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes sbcSpin{to{transform:rotate(360deg)}}

.sbc-name{
  position:relative;font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;
  font-size:1.35rem;line-height:1;letter-spacing:.04em;text-transform:uppercase;color:#16202e;text-align:center;
  padding-bottom:9px;
}
.sbc-name::after{content:"";position:absolute;left:50%;bottom:0;width:22px;height:3px;border-radius:3px;background:var(--blue);transform:translateX(-50%);transition:width .35s ease}
.sbc-item:hover .sbc-name::after{width:48px}

@media(max-width:1000px){
  .sbc-grid{grid-template-columns:repeat(3,1fr);gap:26px 18px}
}
@media(max-width:700px){
  .sbc{padding:32px 0 38px}
  .sbc-wrap{padding:0 6%}
  .sbc-head{margin-bottom:26px}
  .sbc-tag{font-size:.6rem;letter-spacing:.24em}
  .sbc-tag i{width:1.5rem}
  .sbc-sub{font-size:.85rem}
  .sbc-grid{gap:22px 14px}
  .sbc-ring{box-shadow:0 8px 16px rgba(47,64,88,.2)}
  .sbc-circ{inset:4px;border-width:3px}
  .sbc-item{gap:11px}
  .sbc-name{font-size:1rem;padding-bottom:7px}
  .sbc-name::after{width:18px;height:2.5px}
}
@media(prefers-reduced-motion:reduce){
  .sbc-item{opacity:1;transform:none;transition:none}
  .sbc-ring,.sbc-ring::before{animation:none}
  .sbc-title::after{width:64px;transition:none}
}`;

  /* ---------- HTML ---------- */
  var items = CATS.map(function (c, i) {
    return '<a class="sbc-item" href="' + c.url + '" aria-label="Ver productos ' + c.n + '" style="--d:' + (i * 0.08).toFixed(2) + 's;--f:' + (i * 0.6).toFixed(1) + 's">' +
      '<span class="sbc-ring"><span class="sbc-circ"><img src="' + R2 + c.img + '" alt="' + c.n + '" loading="lazy"></span></span>' +
      '<span class="sbc-name">' + c.n + '</span></a>';
  }).join('');

  var sec = document.createElement('section');
  sec.className = 'sbc';
  sec.id = 'sbCategorias';
  sec.setAttribute('aria-label', 'Categorías por marca');
  sec.innerHTML =
    '<div class="sbc-wrap">' +
      '<div class="sbc-head"><span class="sbc-tag"><i></i>Categorías<i></i></span><br>' +
      '<h2 class="sbc-title">Elegí tu <em>marca</em></h2>' +
      '<p class="sbc-sub">Encontrá tus zapatillas favoritas</p></div>' +
      '<div class="sbc-grid">' + items + '</div>' +
    '</div>';

  /* ---------- Estilos y fuentes ---------- */
  var head = document.head;
  if (!document.querySelector('link[href*="family=Anton"]') || !document.querySelector('link[href*="family=Poppins"]')) {
    var f = document.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600&display=swap';
    head.appendChild(f);
  }
  var st = document.createElement('style');
  st.id = 'sbcStyles';
  st.textContent = css;
  head.appendChild(st);

  /* ---------- Aparecer al hacer scroll ---------- */
  function mostrar() { sec.classList.add('in'); }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      if (es[es.length - 1].isIntersecting) { io.disconnect(); mostrar(); }
    }, { threshold: 0.12 });
    io.observe(sec);
  } else { mostrar(); }

  /* ---------- Ubicar justo debajo de los beneficios ---------- */
  function ubicar() {
    var ben = document.getElementById('sbBeneficios');
    if (!ben) return;
    if (ben.nextElementSibling !== sec) ben.insertAdjacentElement('afterend', sec);
  }
  function arrancar() {
    ubicar();
    var n = 0, t = setInterval(function () { ubicar(); if (++n > 40) clearInterval(t); }, 250);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
  else arrancar();
})();


/* ====== REDES SOCIALES SIMONE SHOES · Instagram + TikTok ======
   Se ubica justo debajo de los productos destacados. Solo en el inicio.
   Los contadores suben solos hasta el número final cuando la sección aparece en pantalla. */
(function () {
  if (window.__sbSocial || document.getElementById('sbSocial')) return;
  window.__sbSocial = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* ---------- Datos (editables) ---------- */
  var IG = { user: '@simoneshoesss', url: 'https://www.instagram.com/simoneshoesss/', seguidores: 2740 };
  var TT = { user: '@simoneshoesss', url: 'https://www.tiktok.com/@simoneshoesss',    seguidores: 8870 };
  var CINTA = ['@simoneshoesss', 'Seguinos', 'Nuevos ingresos', 'Envío gratis a todo el país', 'Simone Shoes'];

  var reducido = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- CSS ---------- */
  var css = `
.sso{
  --p:0; --n:#2f4058; --blue:#0b5fe0; --sky:#b5d8f7;
  position:relative; overflow:hidden; isolation:isolate; padding:66px 0 0;
  background:linear-gradient(160deg,#3b506d 0%,#2f4058 45%,#243247 100%); color:#fff;
  font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
}
.sso *{box-sizing:border-box;margin:0;padding:0}
.sso-bg{position:absolute;inset:0;z-index:-1;pointer-events:none}
.sso-bg i{position:absolute;border-radius:50%;will-change:transform}
.sso-b1{width:460px;height:460px;left:-150px;top:-120px;background:radial-gradient(circle,rgba(181,216,247,.3),transparent 70%);transform:translate3d(0,calc(var(--p)*-60px),0)}
.sso-b2{width:560px;height:560px;right:-190px;bottom:-190px;background:radial-gradient(circle,rgba(11,95,224,.4),transparent 70%);transform:translate3d(0,calc(var(--p)*70px),0)}
.sso-wrap{position:relative;max-width:1200px;margin:0 auto;padding:0 4.4% 58px}

.sso-head{text-align:center;max-width:640px;margin:0 auto 40px}
.sso-tag{display:inline-flex;align-items:center;gap:.8rem;font-size:.68rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--sky);margin-bottom:.8rem}
.sso-tag i{display:inline-block;width:2.2rem;height:2px;background:var(--sky)}
.sso-title{
  position:relative;display:inline-block;padding-bottom:16px;
  font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;
  font-size:clamp(2.1rem,4.8vw,3.4rem);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#fff;
}
.sso-title em{font-style:normal;color:var(--sky)}
.sso-title::after{content:"";position:absolute;left:50%;bottom:0;width:0;height:4px;border-radius:4px;background:linear-gradient(90deg,var(--sky),var(--blue));transform:translateX(-50%);transition:width 1s cubic-bezier(.2,.9,.2,1) .5s}
.sso-head.vis .sso-title::after{width:70px}
.sso-sub{margin-top:12px;font-size:.98rem;line-height:1.55;color:rgba(255,255,255,.72)}

.sso-rv{opacity:0;transform:translateY(42px);transition:opacity .9s ease var(--d,0s),transform .9s cubic-bezier(.2,.9,.2,1) var(--d,0s)}
.sso-rv.l{transform:translateX(-64px)}
.sso-rv.r{transform:translateX(64px)}
.sso-rv.vis{opacity:1;transform:none}

.sso-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.sso-grid>article{display:flex}
.sso-box{
  position:relative;width:100%;overflow:hidden;isolation:isolate;border-radius:26px;
  padding:34px 34px 30px;min-height:390px;display:flex;flex-direction:column;gap:14px;
  text-decoration:none!important;transition:transform .4s cubic-bezier(.2,.9,.2,1),box-shadow .4s;
}
.sso-box:hover{transform:translateY(-7px)}
.sso-ig{background:linear-gradient(145deg,#e6f3fe,#a6cff2);color:#16202e!important;box-shadow:0 20px 44px rgba(8,16,28,.38)}
.sso-ig:hover{box-shadow:0 28px 56px rgba(8,16,28,.5)}
.sso-tt{background:linear-gradient(150deg,#1d2a3c,#0f1722);color:#fff!important;border:1px solid rgba(181,216,247,.2);box-shadow:0 20px 44px rgba(8,16,28,.45)}
.sso-tt:hover{box-shadow:0 28px 56px rgba(8,16,28,.6),0 0 40px rgba(11,95,224,.25)}
.sso-tt::before{content:"";position:absolute;z-index:-1;width:340px;height:340px;right:-110px;top:-120px;border-radius:50%;background:radial-gradient(circle,rgba(11,95,224,.38),transparent 70%)}

.sso-ghost{position:absolute;z-index:-1;right:-26px;bottom:-26px;width:190px;height:190px;stroke-width:1.4;animation:ssoFl 7s ease-in-out infinite}
.sso-ig .sso-ghost{color:#fff;opacity:.45}
.sso-tt .sso-ghost{color:var(--sky);opacity:.12}
@keyframes ssoFl{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-14px) rotate(4deg)}}
.sso-sk{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.sso-sk.f{fill:currentColor;stroke:none}

.sso-top{display:flex;align-items:center;gap:14px}
.sso-ic{flex:none;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;transition:transform .5s cubic-bezier(.2,.9,.2,1)}
.sso-ic svg{width:26px;height:26px}
.sso-box:hover .sso-ic{transform:rotate(-12deg) scale(1.08)}
.sso-ig .sso-ic{background:var(--n);color:#fff}
.sso-tt .sso-ic{background:var(--sky);color:var(--n)}
.sso-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.sso-who strong{font-size:1rem;font-weight:700;word-break:break-all}
.sso-who em{font-style:normal;font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;opacity:.65}

.sso-num{
  margin-top:10px;font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;
  font-size:clamp(3.8rem,7vw,6.2rem);line-height:.95;letter-spacing:.01em;font-variant-numeric:tabular-nums;
}
.sso-tt .sso-num{color:var(--sky)}
.sso-lab{margin-top:-2px;font-size:.78rem;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
.sso-barw{height:6px;border-radius:6px;overflow:hidden;max-width:25rem}
.sso-ig .sso-barw{background:rgba(47,64,88,.18)}
.sso-tt .sso-barw{background:rgba(255,255,255,.12)}
.sso-fill{display:block;height:100%;width:0;border-radius:6px}
.sso-ig .sso-fill{background:linear-gradient(90deg,var(--blue),var(--n))}
.sso-tt .sso-fill{background:linear-gradient(90deg,var(--sky),var(--blue))}
.sso-txt{max-width:25rem;font-size:.95rem;line-height:1.55;opacity:.82}

.sso-btn{
  position:relative;overflow:hidden;align-self:flex-start;margin-top:auto;display:inline-flex;align-items:center;gap:12px;
  padding:11px 11px 11px 24px;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;line-height:1;
  transition:gap .25s,background .25s;
}
.sso-btn::before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);transition:left .7s}
.sso-box:hover .sso-btn::before{left:130%}
.sso-btn svg{flex:none;width:28px;height:28px;padding:7px;border-radius:50%;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s}
.sso-ig .sso-btn{background:var(--n);color:#fff}
.sso-ig .sso-btn svg{background:var(--sky);stroke:var(--n)}
.sso-tt .sso-btn{background:var(--sky);color:var(--n)}
.sso-tt .sso-btn svg{background:var(--n);stroke:#fff}
.sso-box:hover .sso-btn{gap:16px}
.sso-box:hover .sso-btn svg{transform:translateX(3px)}
.sso-ig:hover .sso-btn{background:#16202e}
.sso-tt:hover .sso-btn{background:#fff}

.sso-marq{position:relative;overflow:hidden;white-space:nowrap;padding:15px 0;background:var(--sky);color:#16202e}
.sso-track{display:inline-flex;align-items:center;gap:26px;animation:ssoMq 40s linear infinite}
.sso-marq:hover .sso-track{animation-play-state:paused}
.sso-track span{font-weight:700;font-size:1.05rem;letter-spacing:.14em;text-transform:uppercase}
.sso-track i{font-style:normal;font-size:.9rem;color:var(--blue)}
@keyframes ssoMq{to{transform:translateX(-50%)}}

@media(max-width:767px){
  .sso{padding-top:44px}
  .sso-wrap{padding-bottom:36px}
  .sso-head{margin-bottom:28px}
  .sso-tag{font-size:.6rem;letter-spacing:.24em}
  .sso-tag i{width:1.5rem}
  .sso-sub{font-size:.86rem}
  .sso-rv.l,.sso-rv.r{transform:translateY(42px)}
  .sso-grid{grid-template-columns:1fr;gap:16px}
  .sso-box{padding:24px 22px 22px;min-height:0;border-radius:22px;gap:11px}
  .sso-ic{width:44px;height:44px}
  .sso-ic svg{width:22px;height:22px}
  .sso-who strong{font-size:.86rem}
  .sso-num{font-size:3.8rem}
  .sso-ghost{width:130px;height:130px}
  .sso-txt{font-size:.86rem}
  .sso-btn{font-size:.66rem;padding-left:20px}
  .sso-track span{font-size:.82rem}
  .sso-track{gap:18px}
  .sso-marq{padding:12px 0}
}
@media(prefers-reduced-motion:reduce){
  .sso-rv{opacity:1!important;transform:none!important;transition:none!important}
  .sso-ghost,.sso-track{animation:none}
  .sso-title::after{width:70px;transition:none}
  .sso-b1,.sso-b2{transform:none!important}
}`;

  /* ---------- HTML ---------- */
  var FLECHA = '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var cinta = '';
  for (var i = 0; i < 4; i++) CINTA.forEach(function (t) { cinta += '<span>' + t + '</span><i>✦</i>'; });

  var html =
'<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
  '<symbol id="ssoIg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></symbol>' +
  '<symbol id="ssoTt" viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.27 0 .53.04.77.12V9.66a5.7 5.7 0 0 0-.77-.05A5.7 5.7 0 0 0 4.2 15.3a5.7 5.7 0 0 0 5.66 5.7 5.7 5.7 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z"/></symbol>' +
'</svg>' +
'<div class="sso-bg"><i class="sso-b1"></i><i class="sso-b2"></i></div>' +
'<div class="sso-wrap">' +
  '<div class="sso-head sso-rv"><span class="sso-tag"><i></i>Comunidad Simone<i></i></span><br>' +
    '<h2 class="sso-title">Seguinos en <em>redes</em></h2>' +
    '<p class="sso-sub">Nuevos ingresos, novedades y promos antes que nadie. Sumate a la comunidad.</p></div>' +
  '<div class="sso-grid">' +
    '<article class="sso-rv l" style="--d:.1s"><a class="sso-box sso-ig" href="' + IG.url + '" target="_blank" rel="noopener">' +
      '<svg class="sso-sk sso-ghost" viewBox="0 0 24 24"><use href="#ssoIg"/></svg>' +
      '<div class="sso-top"><span class="sso-ic"><svg class="sso-sk" viewBox="0 0 24 24"><use href="#ssoIg"/></svg></span>' +
        '<span class="sso-who"><strong>' + IG.user + '</strong><em>Instagram</em></span></div>' +
      '<div class="sso-num" data-meta="' + IG.seguidores + '">+0</div>' +
      '<div class="sso-lab">seguidores en Instagram</div>' +
      '<div class="sso-barw"><span class="sso-fill"></span></div>' +
      '<p class="sso-txt">Mirá todos los modelos, nuevos ingresos y promos en nuestro Instagram.</p>' +
      '<span class="sso-btn">Seguinos en Instagram ' + FLECHA + '</span></a></article>' +
    '<article class="sso-rv r" style="--d:.25s"><a class="sso-box sso-tt" href="' + TT.url + '" target="_blank" rel="noopener">' +
      '<svg class="sso-sk f sso-ghost" viewBox="0 0 24 24"><use href="#ssoTt"/></svg>' +
      '<div class="sso-top"><span class="sso-ic"><svg class="sso-sk f" viewBox="0 0 24 24"><use href="#ssoTt"/></svg></span>' +
        '<span class="sso-who"><strong>' + TT.user + '</strong><em>TikTok</em></span></div>' +
      '<div class="sso-num" data-meta="' + TT.seguidores + '">+0</div>' +
      '<div class="sso-lab">seguidores en TikTok</div>' +
      '<div class="sso-barw"><span class="sso-fill"></span></div>' +
      '<p class="sso-txt">Videos, unboxings y todo lo nuevo de Simone Shoes en TikTok.</p>' +
      '<span class="sso-btn">Seguinos en TikTok ' + FLECHA + '</span></a></article>' +
  '</div>' +
'</div>' +
'<div class="sso-marq" aria-hidden="true"><div class="sso-track">' + cinta + cinta + '</div></div>';

  var sec = document.createElement('section');
  sec.className = 'sso';
  sec.id = 'sbSocial';
  sec.setAttribute('aria-label', 'Seguinos en redes sociales');
  sec.innerHTML = html;

  /* ---------- Estilos y fuentes ---------- */
  var head = document.head;
  if (!document.querySelector('link[href*="family=Anton"]') || !document.querySelector('link[href*="family=Poppins"]')) {
    var f = document.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600;700&display=swap';
    head.appendChild(f);
  }
  var st = document.createElement('style');
  st.id = 'ssoStyles';
  st.textContent = css;
  head.appendChild(st);

  /* ---------- Contador que sube hasta el número final ---------- */
  function fmt(n) { return '+' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function contar(el) {
    if (el.getAttribute('data-run')) return;
    el.setAttribute('data-run', '1');
    var meta = parseFloat(el.getAttribute('data-meta')) || 0;
    var fill = el.closest('.sso-box').querySelector('.sso-fill');
    if (reducido) { el.textContent = fmt(meta); fill.style.width = '100%'; return; }
    var t0 = null, dur = 2800;
    function paso(t) {
      if (!t0) t0 = t;
      var k = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(meta * e);
      fill.style.width = (e * 100).toFixed(1) + '%';
      if (k < 1) requestAnimationFrame(paso);
      else { el.textContent = fmt(meta); fill.style.width = '100%'; }
    }
    requestAnimationFrame(paso);
  }

  /* ---------- Animaciones al hacer scroll ---------- */
  function revelar(x) {
    x.classList.add('vis');
    var n = x.querySelector('.sso-num');
    if (n) setTimeout(function () { contar(n); }, 350);
  }
  [].forEach.call(sec.querySelectorAll('.sso-rv'), function (el) {
    if (reducido || !('IntersectionObserver' in window)) { revelar(el); return; }
    var io = new IntersectionObserver(function (es) {
      if (es[es.length - 1].isIntersecting) { io.disconnect(); revelar(el); }
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
  });

  /* ---------- Parallax suave del fondo ---------- */
  if (!reducido) {
    var visible = false, tick = false;
    var up = function () {
      tick = false;
      var r = sec.getBoundingClientRect(), vh = window.innerHeight || 1;
      sec.style.setProperty('--p', Math.max(-1.5, Math.min(1.5, (r.top + r.height / 2 - vh / 2) / vh)).toFixed(3));
    };
    var onScroll = function () { if (visible && !tick) { tick = true; requestAnimationFrame(up); } };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { visible = e[e.length - 1].isIntersecting; if (visible) up(); }).observe(sec);
    } else { visible = true; }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  /* ---------- Ubicar debajo de los productos destacados ---------- */
  function ubicar() {
    var ref = null, l;
    l = document.querySelectorAll('.js-section-products-featured');
    if (l.length) ref = l[l.length - 1];
    else {
      l = document.querySelectorAll('.js-section-products-new, .js-section-products-sale');
      ref = l.length ? l[l.length - 1] : document.getElementById('sbCategorias');
    }
    if (!ref) return;
    if (ref.nextElementSibling !== sec) ref.insertAdjacentElement('afterend', sec);
  }
  function arrancar() {
    ubicar();
    var n = 0, t = setInterval(function () { ubicar(); if (++n > 40) clearInterval(t); }, 300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
  else arrancar();
})();


/* ====== AYUDANTES COMPARTIDOS (WhatsApp, animaciones, ubicación) ====== */
(function () {
  if (window.__sbHelper) return;
  window.__sbHelper = true;

  /* ---------- WhatsApp de la tienda ----------
     Poné acá tu número con código de país, sin + ni espacios. Ej: '5493885551234'
     Si lo dejás vacío, el script intenta tomarlo solo del botón verde de WhatsApp que ya tiene tu tienda. */
  var NUMERO = '';

  function numero() {
    if (NUMERO) return String(NUMERO).replace(/\D/g, '');
    var as = document.querySelectorAll('a[href*="wa.me/"],a[href*="api.whatsapp.com/send"],a[href*="web.whatsapp.com/send"],a[href*="whatsapp://send"]');
    for (var i = 0; i < as.length; i++) {
      if (as[i].hasAttribute('data-sbwa')) continue;
      var h = as[i].getAttribute('href') || '';
      var m = h.match(/wa\.me\/(\d+)/) || h.match(/phone=(\d+)/);
      if (m) return m[1];
    }
    return '';
  }
  window.__sbWA = function (msg) {
    var n = numero();
    return n ? 'https://wa.me/' + n + '?text=' + encodeURIComponent(msg) : '/contacto/';
  };
  function refrescar() {
    [].forEach.call(document.querySelectorAll('[data-sbwa]'), function (a) {
      a.setAttribute('href', window.__sbWA(a.getAttribute('data-sbwa')));
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-sbwa]');
    if (a) a.setAttribute('href', window.__sbWA(a.getAttribute('data-sbwa')));
  }, true);
  var n0 = 0, t0 = setInterval(function () { refrescar(); if (++n0 > 40) clearInterval(t0); }, 500);

  /* ---------- Fuentes + animación de entrada compartida ---------- */
  function iniciar() {
    if (!document.querySelector('link[href*="family=Anton"]') || !document.querySelector('link[href*="family=Poppins"]')) {
      var f = document.createElement('link');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600;700&display=swap';
      document.head.appendChild(f);
    }
    var st = document.createElement('style');
    st.id = 'sbHelperStyles';
    st.textContent =
      '.sb-rv{opacity:0;transform:translateY(40px);transition:opacity .9s ease var(--d,0s),transform .9s cubic-bezier(.2,.9,.2,1) var(--d,0s)}' +
      '.sb-rv.l{transform:translateX(-60px)}.sb-rv.r{transform:translateX(60px)}' +
      '@media(max-width:767px){.sb-rv.l,.sb-rv.r{transform:translateY(40px)}}' +
      '.sb-rv.vis{opacity:1;transform:none}' +
      '@media(prefers-reduced-motion:reduce){.sb-rv{opacity:1!important;transform:none!important;transition:none!important}}';
    document.head.appendChild(st);
    refrescar();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

  window.__sbReveal = function (root, onShow) {
    var red = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    [].forEach.call(root.querySelectorAll('.sb-rv'), function (el) {
      function show() { el.classList.add('vis'); if (onShow) onShow(el); }
      if (red || !('IntersectionObserver' in window)) { show(); return; }
      var io = new IntersectionObserver(function (es) {
        if (es[es.length - 1].isIntersecting) { io.disconnect(); show(); }
      }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
      io.observe(el);
    });
  };

  window.__sbPlace = function (sec, prevId) {
    function u() {
      var p = document.getElementById(prevId);
      if (p && p.nextElementSibling !== sec) p.insertAdjacentElement('afterend', sec);
    }
    function go() { u(); var n = 0, t = setInterval(function () { u(); if (++n > 40) clearInterval(t); }, 300); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  };
})();


/* ====== VENTA POR MAYOR · Simone Shoes ======
   Va justo debajo de la sección de redes. Solo en el inicio. */
(function () {
  if (window.__sbMayor || document.getElementById('sbMayorista')) return;
  window.__sbMayor = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* ---------- Textos (editables) ---------- */
  var MENSAJE = 'Hola! Quiero consultar por la venta por mayor de Simone Shoes.';
  var PERKS = [
    'Los mejores precios mayoristas',
    'Calidad que tus clientes van a volver a buscar',
    'Te asesoramos para que arranques a vender'
  ];
  var PASOS = ['Escribinos por WhatsApp', 'Te pasamos precios y catálogo', 'Armamos tu pedido'];

  var R2 = 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/';
  var IMG = {
    nike: R2 + 'Zapatillas%20Nike%20grises%20aisladas.png',
    vansN: R2 + 'Zapatillas%20Vans%20negras%20sobrepuestas.png',
    vansM: R2 + 'Zapatillas%20Vans%20marro%CC%81n%20y%20beige.png'
  };

  var css = `
.sbm{--n:#2f4058;--blue:#0b5fe0;--sky:#b5d8f7;position:relative;overflow:hidden;background:linear-gradient(180deg,#f5f9fd 0%,#fff 100%);padding:66px 0;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
.sbm *{box-sizing:border-box;margin:0;padding:0}
.sbm-wrap{max-width:1200px;margin:0 auto;padding:0 4.4%}
.sbm-card{
  position:relative;overflow:hidden;isolation:isolate;display:grid;grid-template-columns:1.08fr .92fr;gap:20px;align-items:center;
  border-radius:30px;padding:56px;color:#fff;
  background:radial-gradient(80% 120% at 100% 0%,#3f5878 0%,transparent 58%),linear-gradient(135deg,#2f4058 0%,#1b2839 100%);
  box-shadow:0 28px 58px rgba(47,64,88,.34);
}
.sbm-card::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:radial-gradient(rgba(181,216,247,.16) 1.2px,transparent 1.3px);background-size:22px 22px;-webkit-mask-image:linear-gradient(90deg,#000,transparent 70%);mask-image:linear-gradient(90deg,#000,transparent 70%)}
.sbm-badge{display:inline-flex;align-items:center;gap:.6rem;padding:.5rem 1rem;border-radius:999px;background:rgba(181,216,247,.14);border:1px solid rgba(181,216,247,.42);font-size:.66rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--sky)}
.sbm-pd{position:relative;width:.55rem;height:.55rem;border-radius:50%;background:var(--sky)}
.sbm-pd::after{content:"";position:absolute;inset:0;border-radius:50%;background:inherit;animation:sbmPl 1.7s ease-out infinite}
@keyframes sbmPl{0%{transform:scale(1);opacity:.7}to{transform:scale(3.2);opacity:0}}
.sbm-title{margin:18px 0 14px;font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;font-size:clamp(2.3rem,4.8vw,3.7rem);line-height:1.02;letter-spacing:.01em;text-transform:uppercase}
.sbm-title em{font-style:normal;color:var(--sky)}
.sbm-sub{max-width:31rem;font-size:1rem;line-height:1.6;color:rgba(255,255,255,.8)}
.sbm-list{list-style:none;margin:24px 0 28px;display:grid;gap:12px}
.sbm-list li{display:flex;align-items:center;gap:12px;font-size:.96rem;font-weight:500}
.sbm-list svg{flex:none;width:26px;height:26px;padding:6px;border-radius:50%;background:var(--sky);stroke:var(--n);fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.sbm-cta{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:14px;padding:13px 30px 13px 14px;border-radius:999px;background:#25d366;color:#06301a!important;font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1;text-decoration:none!important;box-shadow:0 14px 28px rgba(37,211,102,.35);transition:transform .25s,box-shadow .25s,gap .25s}
.sbm-cta::before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);transition:left .7s}
.sbm-cta:hover{transform:translateY(-3px);box-shadow:0 20px 34px rgba(37,211,102,.45);gap:18px}
.sbm-cta:hover::before{left:130%}
.sbm-wa{flex:none;width:40px;height:40px;border-radius:50%;background:#fff;display:grid;place-items:center;color:#25d366}
.sbm-wa svg{width:22px;height:22px;fill:currentColor}
.sbm-steps{display:flex;gap:18px;margin-top:30px;padding-top:24px;border-top:1px solid rgba(181,216,247,.22)}
.sbm-st{display:flex;align-items:center;gap:10px;font-size:.78rem;line-height:1.3;color:rgba(255,255,255,.82)}
.sbm-st b{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:rgba(181,216,247,.16);border:1px solid rgba(181,216,247,.45);font-size:.78rem;color:var(--sky)}

.sbm-vis{position:relative;height:420px}
.sbm-glow{position:absolute;left:50%;top:50%;width:340px;height:340px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(181,216,247,.55),transparent 68%)}
.sbm-dash{position:absolute;left:50%;top:50%;width:360px;height:360px;margin:-180px 0 0 -180px;border-radius:50%;border:2px dashed rgba(181,216,247,.42);animation:sbmSpin 40s linear infinite}
@keyframes sbmSpin{to{transform:rotate(360deg)}}
.sbm-sh{position:absolute;pointer-events:none}
.sbm-sh img{display:block;width:100%;filter:drop-shadow(0 22px 22px rgba(0,0,0,.42));animation:sbmFl var(--t,6s) ease-in-out infinite;animation-delay:var(--dl,0s)}
@keyframes sbmFl{0%,100%{transform:translateY(0) rotate(var(--r1,-10deg))}50%{transform:translateY(-14px) rotate(var(--r2,-6deg))}}
.sbm-s1{width:76%;left:14%;top:0;z-index:2;--r1:-14deg;--r2:-10deg;--t:6s}
.sbm-s2{width:54%;right:-2%;bottom:0;z-index:3;--r1:5deg;--r2:9deg;--t:5.4s;--dl:-1.5s}
.sbm-s3{width:50%;left:-2%;bottom:6%;z-index:1;--r1:-6deg;--r2:-2deg;--t:6.6s;--dl:-3s}

@media(max-width:900px){
  .sbm-card{grid-template-columns:1fr;padding:34px 24px 26px;gap:8px}
  .sbm-vis{height:250px;order:2}
  .sbm-glow{width:230px;height:230px}
  .sbm-dash{width:250px;height:250px;margin:-125px 0 0 -125px}
}
@media(max-width:767px){
  .sbm{padding:40px 0}
  .sbm-card{border-radius:24px}
  .sbm-sub{font-size:.9rem}
  .sbm-list{margin:18px 0 22px}
  .sbm-list li{font-size:.88rem}
  .sbm-cta{width:100%;justify-content:center;font-size:.72rem;padding:12px 22px 12px 12px}
  .sbm-steps{flex-direction:column;gap:10px;margin-top:22px;padding-top:18px}
  .sbm-st{font-size:.76rem}
}
@media(prefers-reduced-motion:reduce){.sbm-dash,.sbm-sh img,.sbm-pd::after{animation:none}}`;

  var CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var WA = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  var sec = document.createElement('section');
  sec.className = 'sbm';
  sec.id = 'sbMayorista';
  sec.setAttribute('aria-label', 'Venta por mayor');
  sec.innerHTML =
    '<div class="sbm-wrap"><div class="sbm-card sb-rv">' +
      '<div class="sbm-info">' +
        '<span class="sbm-badge"><i class="sbm-pd"></i>Venta por mayor</span>' +
        '<h2 class="sbm-title">¿Querés <em>revender</em> Simone Shoes?</h2>' +
        '<p class="sbm-sub">También vendemos por mayor. Si querés empezar a vender, te damos los mejores precios y la mejor calidad.</p>' +
        '<ul class="sbm-list">' + PERKS.map(function (p) { return '<li>' + CHECK + p + '</li>'; }).join('') + '</ul>' +
        '<a class="sbm-cta" href="/contacto/" data-sbwa="' + MENSAJE + '" target="_blank" rel="noopener"><span class="sbm-wa">' + WA + '</span>Quiero vender por mayor</a>' +
        '<div class="sbm-steps">' + PASOS.map(function (p, i) { return '<div class="sbm-st"><b>' + (i + 1) + '</b><span>' + p + '</span></div>'; }).join('') + '</div>' +
      '</div>' +
      '<div class="sbm-vis"><i class="sbm-glow"></i><i class="sbm-dash"></i>' +
        '<div class="sbm-sh sbm-s3"><img src="' + IMG.vansM + '" alt="" loading="lazy"></div>' +
        '<div class="sbm-sh sbm-s1"><img src="' + IMG.nike + '" alt="Zapatillas Nike" loading="lazy"></div>' +
        '<div class="sbm-sh sbm-s2"><img src="' + IMG.vansN + '" alt="Zapatillas Vans" loading="lazy"></div>' +
      '</div>' +
    '</div></div>';

  var st = document.createElement('style');
  st.id = 'sbmStyles';
  st.textContent = css;
  document.head.appendChild(st);

  window.__sbReveal(sec);
  window.__sbPlace(sec, 'sbSocial');
})();


/* ====== CLIENTES VERIFICADOS · Simone Shoes ======
   Reseñas de EJEMPLO. Reemplazalas por las reales en el bloque RS.
   Se ubican debajo de la sección de venta por mayor. Solo en el inicio. */
(function () {
  if (window.__sbResenas || document.getElementById('sbResenas')) return;
  window.__sbResenas = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  /* [nombre, ciudad, producto comprado, comentario, estrellas (1 a 5)] */
  var PUNTAJE = '4.9';
  var RS = [
    ['Micaela R.', 'Salta', 'Zapatillas Nike', 'Llegaron rapidísimo y son idénticas a las fotos. El talle me quedó perfecto, ya estoy mirando otro par.', 5],
    ['Lucas G.', 'San Salvador de Jujuy', 'Zapatillas Vans', 'Excelente atención por WhatsApp, me ayudaron a elegir el talle. Súper recomendable.', 5],
    ['Camila F.', 'Tucumán', 'Zapatillas New Balance', 'Muy cómodas y la calidad es increíble. Pagué por transferencia con el 10% OFF y el envío fue gratis.', 5],
    ['Agustín P.', 'Palpalá', 'Zapatillas Jordan', 'Las busqué por todos lados y acá las encontré. Llegaron impecables y bien empaquetadas.', 5],
    ['Florencia S.', 'Córdoba', 'Zapatillas Adidas', 'Todo muy fácil, desde la compra hasta que me llegó. Se nota que cuidan cada detalle.', 5],
    ['Mateo L.', 'Orán', 'Zapatillas Nike', 'Compré en 3 cuotas sin interés y llegaron en pocos días. Muy conforme con la compra.', 5],
    ['Sofía M.', 'Salta', 'Zapatillas Puma', 'Hermosas y livianas. Me respondieron todas las dudas al instante, de 10.', 5],
    ['Joaquín C.', 'San Pedro de Jujuy', 'Zapatillas Vans', 'Segunda vez que compro y siempre llega todo perfecto. Ya las recomendé a mis amigos.', 5],
    ['Valentina A.', 'Rosario', 'Zapatillas Nike', 'Me llegaron a Rosario sin costo de envío. El empaque impecable y las zapatillas hermosas.', 5],
    ['Nicolás B.', 'Buenos Aires', 'Zapatillas New Balance', 'Dudaba de comprar online pero salió todo perfecto. Excelente calidad y muy buen precio.', 5],
    ['Rocío V.', 'Tucumán', 'Zapatillas Adidas', 'El talle me quedó justo y el color es igual al de la foto. Muy buena atención.', 5],
    ['Franco D.', 'Salta', 'Zapatillas Jordan', 'Atención personalizada de verdad, me asesoraron en todo momento. Las mejores.', 5],
    ['Julieta N.', 'Mendoza', 'Zapatillas Puma', 'Compra segura y rápida. Me mantuvieron informada del envío hasta que llegó.', 5],
    ['Tomás R.', 'Palpalá', 'Zapatillas Vans', 'Muy buena calidad por el precio que pagás. Llegaron antes de lo que esperaba.', 4]
  ];

  var css = `
.sbr{--n:#2f4058;--blue:#0b5fe0;--sky:#b5d8f7;--line:#dce7f2;position:relative;overflow:hidden;background:#fff;padding:66px 0 70px;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
.sbr *{box-sizing:border-box;margin:0;padding:0}
.sbr-wrap{max-width:1200px;margin:0 auto;padding:0 4.4%}
.sbr-head{text-align:center;max-width:640px;margin:0 auto 26px}
.sbr-tag{display:inline-flex;align-items:center;gap:.8rem;font-size:.68rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#7b8898;margin-bottom:.8rem}
.sbr-tag i{display:inline-block;width:2.2rem;height:2px;background:var(--sky)}
.sbr-title{position:relative;display:inline-block;padding-bottom:16px;font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;font-size:clamp(2.1rem,4.6vw,3.3rem);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#16202e}
.sbr-title em{font-style:normal;color:var(--blue)}
.sbr-title::after{content:"";position:absolute;left:50%;bottom:0;width:0;height:4px;border-radius:4px;background:var(--blue);transform:translateX(-50%);transition:width .9s cubic-bezier(.2,.9,.2,1) .4s}
.sbr-head.vis .sbr-title::after{width:64px}
.sbr-sub{margin-top:12px;font-size:.95rem;line-height:1.5;color:#6b7684}
.sbr-sum{display:flex;justify-content:center;margin:0 auto 32px}
.sbr-score{display:inline-flex;align-items:center;flex-wrap:wrap;justify-content:center;gap:14px;padding:12px 26px;background:#fff;border:1px solid var(--line);border-radius:999px;box-shadow:0 10px 24px rgba(47,64,88,.1)}
.sbr-score b{font-weight:700;font-size:1.7rem;line-height:1;letter-spacing:-.02em;color:#16202e}
.sbr-score .t{font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#6b7684}
.sbr-st{display:inline-flex;gap:3px;color:var(--blue)}
.sbr-st svg{width:1rem;height:1rem;fill:currentColor}

.sbr-rows{display:flex;flex-direction:column;gap:6px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
.sbr-row{overflow:hidden;padding:8px 0 16px}
.sbr-track{display:flex;width:max-content;animation:sbrMove 95s linear infinite;will-change:transform}
.sbr-row.rev .sbr-track{animation-direction:reverse}
.sbr-rows:hover .sbr-track{animation-play-state:paused}
.sbr-half{display:flex;gap:18px;padding-right:18px;flex:none}
@keyframes sbrMove{to{transform:translate3d(-50%,0,0)}}

.sbr-card{position:relative;flex:none;width:330px;display:flex;flex-direction:column;gap:12px;padding:22px 22px 18px;background:linear-gradient(180deg,#fff,#f6faff);border:1px solid var(--line);border-radius:22px;box-shadow:0 12px 28px rgba(47,64,88,.09);overflow:hidden}
.sbr-card::before{content:"“";position:absolute;right:16px;top:-6px;font-family:Georgia,serif;font-size:5.4rem;line-height:1;color:var(--sky);opacity:.55;pointer-events:none}
.sbr-top{display:flex;align-items:center;gap:12px}
.sbr-av{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#d6eafc,#8fc2f0);color:var(--n);font-weight:700;font-size:1rem}
.sbr-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.sbr-who strong{font-size:.92rem;font-weight:700;color:#16202e}
.sbr-who em{font-style:normal;font-size:.66rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#8a96a5;white-space:nowrap}
.sbr-tx{flex:1;font-size:.9rem;line-height:1.55;color:#4a5566;white-space:normal}
.sbr-ft{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:12px;border-top:1px solid var(--line)}
.sbr-pr{font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--n)}
.sbr-ok{display:inline-flex;align-items:center;gap:.35rem;font-size:.58rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);white-space:nowrap}
.sbr-ok svg{width:1.1rem;height:1.1rem;padding:.2rem;border-radius:50%;background:var(--blue);stroke:#fff;fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}

@media(max-width:767px){
  .sbr{padding:42px 0 46px}
  .sbr-head{padding:0 5%;margin-bottom:20px}
  .sbr-tag{font-size:.6rem;letter-spacing:.24em}
  .sbr-tag i{width:1.5rem}
  .sbr-sub{font-size:.85rem}
  .sbr-sum{margin-bottom:22px;padding:0 5%}
  .sbr-score{padding:10px 18px;gap:10px}
  .sbr-score b{font-size:1.4rem}
  .sbr-card{width:262px;padding:18px 18px 15px;border-radius:18px;gap:10px}
  .sbr-half{gap:12px;padding-right:12px}
  .sbr-tx{font-size:.82rem}
  .sbr-av{width:38px;height:38px}
  .sbr-track{animation-duration:80s}
}
@media(prefers-reduced-motion:reduce){
  .sbr-track{animation:none}
  .sbr-row{overflow-x:auto}
  .sbr-title::after{width:64px;transition:none}
}`;

  function estrellas(n) {
    var s = '';
    for (var k = 1; k <= 5; k++) s += '<svg viewBox="0 0 24 24" style="opacity:' + (k <= n ? 1 : .25) + '"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
    return s;
  }
  var OK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function tarjeta(r) {
    return '<article class="sbr-card"><div class="sbr-top"><span class="sbr-av">' + r[0].charAt(0) + '</span>' +
      '<span class="sbr-who"><strong>' + r[0] + '</strong><em>' + r[1] + '</em></span></div>' +
      '<span class="sbr-st">' + estrellas(r[4]) + '</span>' +
      '<p class="sbr-tx">“' + r[3] + '”</p>' +
      '<div class="sbr-ft"><span class="sbr-pr">' + r[2] + '</span><span class="sbr-ok">' + OK + 'Compra verificada</span></div></article>';
  }
  function fila(lista, rev) {
    var set = lista.map(tarjeta).join('');
    var half = '<div class="sbr-half">' + set + set + '</div>';
    var half2 = '<div class="sbr-half" aria-hidden="true">' + set + set + '</div>';
    return '<div class="sbr-row' + (rev ? ' rev' : '') + '"><div class="sbr-track">' + half + half2 + '</div></div>';
  }
  var mitad = Math.ceil(RS.length / 2);

  var sec = document.createElement('section');
  sec.className = 'sbr';
  sec.id = 'sbResenas';
  sec.setAttribute('aria-label', 'Clientes verificados');
  sec.innerHTML =
    '<div class="sbr-wrap">' +
      '<div class="sbr-head sb-rv"><span class="sbr-tag"><i></i>Clientes verificados<i></i></span><br>' +
        '<h2 class="sbr-title">Lo que dicen <em>nuestros clientes</em></h2>' +
        '<p class="sbr-sub">Opiniones reales de compras confirmadas en Simone Shoes.</p></div>' +
      '<div class="sbr-sum sb-rv" style="--d:.1s"><div class="sbr-score"><b>' + PUNTAJE + '</b><span class="sbr-st">' + estrellas(5) + '</span><span class="t">Compras verificadas</span></div></div>' +
    '</div>' +
    '<div class="sbr-rows sb-rv" style="--d:.15s">' + fila(RS.slice(0, mitad), false) + fila(RS.slice(mitad), true) + '</div>';

  var st = document.createElement('style');
  st.id = 'sbrStyles';
  st.textContent = css;
  document.head.appendChild(st);

  window.__sbReveal(sec);
  window.__sbPlace(sec, 'sbMayorista');
})();


/* ====== PREGUNTAS FRECUENTES · Simone Shoes ======
   Última sección del inicio. Editá, agregá o borrá preguntas en el bloque FQ. */
(function () {
  if (window.__sbFaq || document.getElementById('sbFaq')) return;
  window.__sbFaq = true;

  var path = location.pathname.replace(/\/+$/, '');
  var esInicio = path === '' || /^\/[a-z]{2}(-[a-z]{2})?$/i.test(path);
  if (!esInicio) return;

  var MENSAJE = 'Hola! Tengo una consulta sobre Simone Shoes.';
  var FQ = [
    ['¿Hacen envíos a todo el país?', 'Sí, hacemos envíos gratis a todo el país. Una vez confirmada tu compra te avisamos con el seguimiento de tu pedido.'],
    ['¿Cómo puedo pagar?', 'Podés pagar con tarjeta de crédito, débito o transferencia bancaria.'],
    ['¿Tienen cuotas sin interés?', 'Sí, tenés 3 cuotas sin interés en tus compras.'],
    ['¿Hay descuento por transferencia?', 'Sí, pagando por transferencia tenés 10% OFF sobre el precio de lista.'],
    ['¿Cómo sé qué talle elegir?', 'Si tenés dudas con el talle, escribinos por WhatsApp y te asesoramos para que elijas el que mejor te quede.'],
    ['¿Puedo cambiar mis zapatillas si no me quedan?', 'Escribinos y coordinamos el cambio con vos. Queremos que estés conforme con tu compra.'],
    ['¿Venden por mayor?', 'Sí, también vendemos por mayor. Si querés empezar a vender, escribinos por WhatsApp y te pasamos precios y catálogo.'],
    ['¿Es segura la compra?', 'Sí, tus datos están protegidos y los pagos se procesan en una plataforma segura.'],
    ['¿Cómo los contacto?', 'Por WhatsApp o por Instagram, en @simoneshoesss. Respondemos todas tus consultas.']
  ];

  var css = `
.sbf{--n:#2f4058;--blue:#0b5fe0;--sky:#b5d8f7;--line:#dce7f2;position:relative;overflow:hidden;background:linear-gradient(180deg,#f5f9fd,#eaf3fb);padding:66px 0 72px;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
.sbf *{box-sizing:border-box;margin:0;padding:0}
.sbf-wrap{max-width:820px;margin:0 auto;padding:0 4.4%}
.sbf-head{text-align:center;margin-bottom:34px}
.sbf-tag{display:inline-flex;align-items:center;gap:.8rem;font-size:.68rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#7b8898;margin-bottom:.8rem}
.sbf-tag i{display:inline-block;width:2.2rem;height:2px;background:var(--sky)}
.sbf-title{position:relative;display:inline-block;padding-bottom:16px;font-family:"Anton","Bebas Neue",Impact,"Arial Narrow",sans-serif;font-weight:400;font-size:clamp(2.1rem,4.6vw,3.3rem);line-height:1.02;letter-spacing:.01em;text-transform:uppercase;color:#16202e}
.sbf-title em{font-style:normal;color:var(--blue)}
.sbf-title::after{content:"";position:absolute;left:50%;bottom:0;width:0;height:4px;border-radius:4px;background:var(--blue);transform:translateX(-50%);transition:width .9s cubic-bezier(.2,.9,.2,1) .4s}
.sbf-head.vis .sbf-title::after{width:64px}
.sbf-sub{margin-top:12px;font-size:.95rem;line-height:1.5;color:#6b7684}
.sbf-list{display:flex;flex-direction:column;gap:11px}
.sbf-it{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 6px 16px rgba(47,64,88,.06);transition:border-color .3s,box-shadow .3s}
.sbf-it:hover{border-color:var(--sky)}
.sbf-it[open]{border-color:var(--sky);box-shadow:0 14px 30px rgba(47,64,88,.14)}
.sbf-it summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;font-weight:600;font-size:.92rem;line-height:1.35;letter-spacing:.02em;color:#16202e}
.sbf-it summary::-webkit-details-marker{display:none}
.sbf-it summary::marker{content:""}
.sbf-pl{flex:none;width:32px;height:32px;border-radius:50%;background:var(--sky);display:grid;place-items:center;transition:transform .3s,background .3s}
.sbf-pl svg{width:15px;height:15px;stroke:var(--n);fill:none;stroke-width:2.4;stroke-linecap:round}
.sbf-it[open] .sbf-pl{transform:rotate(45deg);background:var(--n)}
.sbf-it[open] .sbf-pl svg{stroke:#fff}
.sbf-a{padding:0 22px 20px;font-size:.92rem;line-height:1.65;color:#5a6676}
.sbf-more{margin-top:34px;text-align:center}
.sbf-more p{font-size:.95rem;color:#6b7684;margin-bottom:16px}
.sbf-cta{display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:15px 30px 15px 16px;border-radius:999px;background:var(--n);color:#fff!important;font-size:.74rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1;text-decoration:none!important;box-shadow:0 12px 26px rgba(47,64,88,.28);transition:background .25s,color .25s,transform .25s}
.sbf-cta:hover{background:var(--sky);color:var(--n)!important;transform:translateY(-2px)}
.sbf-cta .w{flex:none;width:34px;height:34px;border-radius:50%;background:#25d366;display:grid;place-items:center;color:#fff}
.sbf-cta svg{width:19px;height:19px;fill:currentColor}
@media(max-width:767px){
  .sbf{padding:42px 0 48px}
  .sbf-head{margin-bottom:24px}
  .sbf-tag{font-size:.6rem;letter-spacing:.24em}
  .sbf-tag i{width:1.5rem}
  .sbf-sub{font-size:.85rem}
  .sbf-it{border-radius:15px}
  .sbf-it summary{padding:15px 16px;font-size:.8rem}
  .sbf-a{padding:0 16px 16px;font-size:.86rem}
  .sbf-cta{width:100%;font-size:.7rem}
}
@media(prefers-reduced-motion:reduce){.sbf-title::after{width:64px;transition:none}}`;

  var PL = '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
  var WA = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  var sec = document.createElement('section');
  sec.className = 'sbf';
  sec.id = 'sbFaq';
  sec.setAttribute('aria-label', 'Preguntas frecuentes');
  sec.innerHTML =
    '<div class="sbf-wrap">' +
      '<div class="sbf-head sb-rv"><span class="sbf-tag"><i></i>Preguntas frecuentes<i></i></span><br>' +
        '<h2 class="sbf-title">Resolvé tus <em>dudas</em></h2>' +
        '<p class="sbf-sub">Todo lo que necesitás saber antes de comprar.</p></div>' +
      '<div class="sbf-list">' + FQ.map(function (f, i) {
        return '<details class="sbf-it sb-rv" style="--d:' + (Math.min(i, 4) * 0.06).toFixed(2) + 's"><summary>' + f[0] +
          '<span class="sbf-pl">' + PL + '</span></summary><div class="sbf-a">' + f[1] + '</div></details>';
      }).join('') + '</div>' +
      '<div class="sbf-more sb-rv"><p>¿No encontraste lo que buscabas?</p>' +
        '<a class="sbf-cta" href="/contacto/" data-sbwa="' + MENSAJE + '" target="_blank" rel="noopener"><span class="w">' + WA + '</span>Escribinos por WhatsApp</a></div>' +
    '</div>';

  var st = document.createElement('style');
  st.id = 'sbfStyles';
  st.textContent = css;
  document.head.appendChild(st);

  /* Una sola pregunta abierta a la vez */
  var lista = sec.querySelector('.sbf-list');
  [].forEach.call(lista.querySelectorAll('details'), function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) [].forEach.call(lista.querySelectorAll('details[open]'), function (o) { if (o !== d) o.open = false; });
    });
  });

  window.__sbReveal(sec);
  window.__sbPlace(sec, 'sbResenas');
})();


/* ====== BURBUJA DE COMPRAS RECIENTES · Simone Shoes (todas las páginas) ======
   Compras de EJEMPLO para que veas cómo queda. Cambialas por tus ventas reales en el bloque COMPRAS.
   ag(minutos) significa "hace X minutos". También podés poner una fecha real:
   fecha: "2026-11-22T15:30:00-03:00". Las compras de más de 30 días no se muestran. */
(function () {
  if (window.__sbBubble) return;
  window.__sbBubble = true;

  var TIENDA = 'Simone Shoes', MAX_DIAS = 30, PRIMERA = 6000, VISIBLE = 6500, ESPERA_MIN = 9000, ESPERA_MAX = 15000;
  var LOGO = 'https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/Logo%20de%20Simone%20Shoes%20con%20letras%20curvadas.png';

  try { if (sessionStorage.getItem('sbpOff') === '1') return; } catch (e) {}

  function ag(m) { return new Date(Date.now() - m * 6e4).toISOString(); }
  var COMPRAS = [
    { nombre: 'Valentina', ciudad: 'Salta',                 producto: 'Zapatillas Nike',        precio: 129900, img: '', url: '', fecha: ag(8) },
    { nombre: 'Lucas',     ciudad: 'San Salvador de Jujuy', producto: 'Zapatillas Vans',        precio: 109900, img: '', url: '', fecha: ag(27) },
    { nombre: 'Camila',    ciudad: 'Tucumán',               producto: 'Zapatillas New Balance', precio: 139900, img: '', url: '', fecha: ag(55) },
    { nombre: 'Agustín',   ciudad: 'Palpalá',               producto: 'Zapatillas Jordan',      precio: 149900, img: '', url: '', fecha: ag(130) },
    { nombre: 'Florencia', ciudad: 'Córdoba',               producto: 'Zapatillas Adidas',      precio: 119900, img: '', url: '', fecha: ag(260) },
    { nombre: 'Mateo',     ciudad: 'Orán',                  producto: 'Zapatillas Puma',        precio: 99900,  img: '', url: '', fecha: ag(1500) }
  ];

  var ahora = Date.now();
  var LS = COMPRAS.filter(function (c) {
    if (!c.nombre || !c.ciudad || !c.producto || !c.fecha) return false;
    var t = new Date(c.fecha).getTime();
    return t && t <= ahora && ahora - t <= MAX_DIAS * 864e5;
  });
  if (!LS.length) return;

  var css = `
.sbp{--n:#2f4058;--blue:#0b5fe0;--sky:#b5d8f7;--line:#dce7f2;position:fixed;left:16px;bottom:16px;z-index:90;width:max-content;max-width:min(400px,calc(100vw - 32px));background:#fff;border:1px solid var(--line);border-radius:1.3rem;overflow:hidden;box-shadow:0 18px 44px rgba(47,64,88,.28),0 2px 8px rgba(0,0,0,.06);opacity:0;transform:translateY(28px) scale(.97);pointer-events:none;transition:opacity .5s,transform .5s cubic-bezier(.2,.9,.2,1);font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.sbp *{box-sizing:border-box;margin:0;padding:0}
.sbp.on{opacity:1;transform:none;pointer-events:auto}
.sbp-link{display:flex;align-items:center;gap:.9rem;padding:.8rem 2.6rem .95rem .8rem;color:#16202e!important;text-decoration:none!important}
.sbp-img{flex:none;width:4.4rem;height:4.4rem;border-radius:1rem;overflow:hidden;background:var(--n);display:grid;place-items:center}
.sbp-img img{width:100%;height:100%;object-fit:cover;display:block}
.sbp-img img.lg{object-fit:contain;padding:.5rem}
.sbp-body{display:flex;flex-direction:column;gap:.18rem;min-width:0}
.sbp-who{font-size:.76rem;line-height:1.3;color:#5a6676;font-weight:500}
.sbp-who b{font-weight:700;color:#16202e}
.sbp-row{display:flex;align-items:baseline;justify-content:space-between;gap:1rem}
.sbp-prod{font-size:.86rem;font-weight:700;line-height:1.15;letter-spacing:.02em;text-transform:uppercase;color:#16202e}
.sbp-price{font-size:.9rem;font-weight:700;line-height:1.15;color:var(--blue);white-space:nowrap}
.sbp-time{display:flex;align-items:center;gap:.45rem;margin-top:.15rem;font-size:.6rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#8a96a5}
.sbp-time i{display:inline-block;width:.5rem;height:.5rem;border-radius:50%;background:var(--sky)}
.sbp-x{position:absolute;top:.55rem;right:.6rem;width:1.7rem;height:1.7rem;border:0;border-radius:50%;background:transparent;font-size:1.25rem;line-height:1;color:#8a96a5;cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s}
.sbp-x:hover{background:#eaf3fb;color:#16202e}
.sbp-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:linear-gradient(90deg,var(--sky),var(--blue));transform-origin:left;transform:scaleX(0)}
.sbp.on .sbp-bar{animation:sbpB var(--t,6.5s) linear forwards}
.sbp:hover .sbp-bar{animation-play-state:paused}
@keyframes sbpB{from{transform:scaleX(1)}to{transform:scaleX(0)}}
@media(max-width:600px){
  .sbp{left:10px;bottom:10px;border-radius:1.1rem;max-width:calc(100vw - 86px)}
  .sbp-link{gap:.7rem;padding:.6rem 2.2rem .75rem .6rem}
  .sbp-img{width:3.4rem;height:3.4rem;border-radius:.8rem}
  .sbp-who{font-size:.66rem}
  .sbp-prod,.sbp-price{font-size:.72rem}
  .sbp-row{gap:.6rem}
  .sbp-time{font-size:.52rem;letter-spacing:.08em}
  .sbp-x{top:.35rem;right:.4rem}
}
@media(prefers-reduced-motion:reduce){.sbp{transition:opacity .2s;transform:none}.sbp.on .sbp-bar{animation:none}}`;

  function fm(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  function hace(f) {
    var m = Math.max(1, Math.round((Date.now() - new Date(f).getTime()) / 6e4));
    if (m < 60) return 'hace ' + m + ' min';
    var h = Math.round(m / 60);
    if (h < 24) return 'hace ' + h + (h === 1 ? ' hora' : ' horas');
    var d = Math.round(h / 24);
    return 'hace ' + d + (d === 1 ? ' día' : ' días');
  }
  /* Busca el producto en la página (por nombre) para tomar su foto y su link */
  function buscar(nombre) {
    var its = document.querySelectorAll('.js-item-product'), k = nombre.trim().toLowerCase();
    for (var i = 0; i < its.length; i++) {
      var e = its[i].querySelector('.item-name');
      if (e && e.textContent.trim().toLowerCase() === k) {
        var im = its[i].querySelector('img'), a = its[i].querySelector('a[href]'), src = '';
        if (im) {
          src = im.getAttribute('data-src') || '';
          if (!src) { var ss = im.getAttribute('data-srcset') || im.getAttribute('srcset') || ''; if (ss) src = ss.split(',')[0].trim().split(' ')[0]; }
          if (!src || src.indexOf('data:') === 0) src = im.currentSrc || im.src || '';
        }
        return { img: src, url: a ? a.getAttribute('href') : '' };
      }
    }
    return { img: '', url: '' };
  }

  function iniciar() {
    var st = document.createElement('style');
    st.id = 'sbpStyles';
    st.textContent = css;
    document.head.appendChild(st);
    if (!document.querySelector('link[href*="family=Poppins"]')) {
      var f = document.createElement('link');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
      document.head.appendChild(f);
    }

    var bx = document.createElement('div');
    bx.className = 'sbp';
    bx.setAttribute('role', 'status');
    bx.setAttribute('aria-live', 'polite');
    bx.innerHTML = '<a class="sbp-link" href="/productos/"><span class="sbp-img"></span><span class="sbp-body"><span class="sbp-who"></span>' +
      '<span class="sbp-row"><span class="sbp-prod"></span><span class="sbp-price"></span></span>' +
      '<span class="sbp-time"><i></i><span></span></span></span></a>' +
      '<button class="sbp-x" type="button" aria-label="Cerrar">×</button><span class="sbp-bar"></span>';
    var q = function (s) { return bx.querySelector(s); };
    var lk = q('.sbp-link'), ib = q('.sbp-img'), wh = q('.sbp-who'), pd = q('.sbp-prod'), pc = q('.sbp-price'), tt = q('.sbp-time span');
    var ix = Math.floor(Math.random() * LS.length), t = null, off = false;

    function pintar(c) {
      var f = buscar(c.producto), src = c.img || f.img;
      ib.innerHTML = '';
      var im = document.createElement('img');
      if (src) { im.alt = c.producto; im.onerror = function () { im.className = 'lg'; im.src = LOGO; }; im.src = src; }
      else { im.alt = TIENDA; im.className = 'lg'; im.src = LOGO; }
      ib.appendChild(im);
      wh.textContent = '';
      wh.appendChild(document.createTextNode(c.nombre + ' de '));
      var b = document.createElement('b'); b.textContent = c.ciudad; wh.appendChild(b);
      wh.appendChild(document.createTextNode(' compró'));
      pd.textContent = c.producto;
      pc.textContent = fm(c.precio);
      tt.textContent = hace(c.fecha) + ' · ' + TIENDA;
      lk.href = c.url || f.url || '/productos/';
    }
    function mostrar() {
      if (off) return;
      if (document.hidden) { t = setTimeout(mostrar, 3e3); return; }
      pintar(LS[ix]); ix = (ix + 1) % LS.length;
      bx.style.setProperty('--t', (VISIBLE / 1e3) + 's');
      bx.classList.remove('on'); void bx.offsetWidth; bx.classList.add('on');
      t = setTimeout(function () {
        bx.classList.remove('on');
        t = setTimeout(mostrar, ESPERA_MIN + Math.random() * (ESPERA_MAX - ESPERA_MIN));
      }, VISIBLE);
    }
    bx.addEventListener('mouseenter', function () { clearTimeout(t); });
    bx.addEventListener('mouseleave', function () {
      clearTimeout(t);
      t = setTimeout(function () { bx.classList.remove('on'); t = setTimeout(mostrar, ESPERA_MIN); }, 2500);
    });
    q('.sbp-x').addEventListener('click', function () {
      off = true; clearTimeout(t); bx.classList.remove('on');
      try { sessionStorage.setItem('sbpOff', '1'); } catch (e) {}
    });
    document.body.appendChild(bx);
    t = setTimeout(mostrar, PRIMERA);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();


/* ====== TARJETAS DE PRODUCTO · SIMONE SHOES ======
   Reemplaza el precio de cada producto por 3 cajas:
   precio de lista · transferencia con descuento · cuotas sin interés + botón "Ver más".
   Funciona en todas las páginas donde haya productos (inicio, categorías, buscador). */
(function () {
  if (window.__sbCards) return;
  window.__sbCards = true;

  /* ---------- Ajustes (editables) ---------- */
  var DESC_TRANSF = 0.10;   /* 10% OFF por transferencia */
  var CUOTAS = 3;           /* cuotas sin interés */
  var LOGOS_BASE = 'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/';
  var LOGOS = ['visa', 'mastercard', 'amex', 'ar/tarjeta-naranja', 'ar/cabal', 'mercadopago']; /* borrá los que no uses */

  /* ---------- CSS ---------- */
  var css = `
:root{--sp-navy:#2f4058;--sp-ink:#16202e;--sp-sky:#b5d8f7;--sp-pale:#eaf3fb;--sp-blue:#0b5fe0;--sp-bg:#f5f9fd;--sp-line:#dce7f2}
.spc-card,.spc-card *{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.spc-card{background:#fff!important;border:1px solid var(--sp-line)!important;border-radius:1.1rem!important;padding:.6rem .6rem .8rem!important;box-shadow:0 .4rem 1.2rem rgba(47,64,88,.08);overflow:hidden;transition:transform .3s,box-shadow .3s,border-color .3s}
.spc-card:hover{transform:translateY(-3px);box-shadow:0 .9rem 1.8rem rgba(47,64,88,.18);border-color:var(--sp-sky)!important}
.spc-card img{border-radius:.8rem}
.spc-card .item-name,.spc-card .item-name a{font-weight:600!important;font-size:.9rem!important;line-height:1.25!important;color:var(--sp-ink)!important;text-transform:uppercase;letter-spacing:.03em}
.spc-card .item-name{margin:.75rem .25rem .55rem!important}
.spc-card .item-price-container>:not(.spc),.spc-card .item-actions,.spc-card .js-item-submit-container,.spc-card .js-addtocart{display:none!important}
.spc-card .item-price-container{margin:0!important;padding:0!important}

.spc{display:flex;flex-direction:column;gap:.45rem;padding:0 .1rem}
.spc *{box-sizing:border-box}
.spc-b{display:flex;flex-direction:column;gap:.35rem;padding:.55rem .75rem;border-radius:.75rem;border:1.5px solid}
.spc-f{display:flex;align-items:center;gap:.65rem}
.spc-i{flex:none;width:1.35rem;height:1.35rem}
.spc-i svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.spc-tx{display:flex;flex-direction:column;min-width:0}
.spc-et{font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;line-height:1.2}
.spc-tx strong,.spc-pr{font-size:1.1rem;font-weight:700;line-height:1.15;letter-spacing:-.01em;font-style:normal}
.spc-pr s{margin-left:.4rem;font-size:.72rem;font-weight:500;color:#9aa5b1}

.spc-l{background:var(--sp-bg);border-color:var(--sp-line);color:#5d6b7c}
.spc-l .spc-pr{color:var(--sp-ink)}
.spc-l .spc-i{color:#7b8898}
.spc-t{background:var(--sp-pale);border-color:var(--sp-sky);color:var(--sp-blue)}
.spc-t strong{color:var(--sp-blue)}
.spc-q{background:#fff;border-color:var(--sp-navy);color:var(--sp-navy)}
.spc-q strong{color:var(--sp-navy)}

.spc-tj{display:flex;flex-wrap:wrap;align-items:center;gap:.3rem;padding-top:.4rem;border-top:1px solid var(--sp-line)}
.spc-tj img{height:1.1rem;width:auto;max-width:2.2rem;object-fit:contain;border-radius:0}

.spc-v{align-self:flex-end;display:inline-flex;align-items:center;justify-content:center;margin-top:.2rem;padding:.7rem 1.2rem;border-radius:999px;background:var(--sp-navy);color:#fff!important;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:none!important;line-height:1;transition:background .25s,color .25s,transform .25s}
.spc-v:hover{background:var(--sp-sky);color:var(--sp-navy)!important;transform:translateY(-1px)}

@media(max-width:767px){
  .spc-card{padding:.45rem .45rem .65rem!important;border-radius:.95rem!important}
  .spc-card .item-name,.spc-card .item-name a{font-size:.74rem!important}
  .spc-card .item-name{margin:.6rem .15rem .45rem!important}
  .spc{gap:.35rem;padding:0}
  .spc-b{padding:.45rem .55rem;gap:.3rem;border-radius:.65rem}
  .spc-f{gap:.45rem}
  .spc-i{width:1.05rem;height:1.05rem}
  .spc-et{font-size:.52rem;letter-spacing:.05em}
  .spc-tx strong,.spc-pr{font-size:.92rem}
  .spc-pr s{font-size:.6rem;margin-left:.25rem}
  .spc-tj{gap:.2rem;padding-top:.3rem}
  .spc-tj img{height:.85rem;max-width:1.6rem}
  .spc-v{align-self:stretch;padding:.7rem .8rem;font-size:.62rem;letter-spacing:.1em}
}
@media(prefers-reduced-motion:reduce){.spc-card,.spc-v{transition:none}}`;

  /* ---------- Utilidades ---------- */
  function fm(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  function pn(t) {
    if (!t) return 0;
    var s = String(t).replace(/[^\d,\.]/g, '');
    if (!s) return 0;
    s = s.replace(/\./g, '').replace(',', '.');
    var n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  }
  function ico(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }

  var ICO_LISTA = ico('<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h4M7 14h2"/>');
  var ICO_TRANSF = ico('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/>');
  var ICO_CUOTAS = ico('<rect x="2.5" y="5" width="19" height="14" rx="2.2"/><path d="M2.5 10h19M6 15h4"/>');

  var TJ = LOGOS.map(function (n) {
    return '<img src="' + LOGOS_BASE + n + '@2x.png" alt="" loading="lazy" onerror="this.remove()">';
  }).join('');

  /* ---------- Estilos y fuente ---------- */
  var D = document;
  function init() {
    if (!D.querySelector('link[href*="family=Poppins"]')) {
      var f = D.createElement('link');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
      D.head.appendChild(f);
    }
    var st = D.createElement('style');
    st.id = 'spcStyles';
    st.textContent = css;
    D.head.appendChild(st);

    render();
    window.addEventListener('load', render);
    var pend = false;
    new MutationObserver(function () {
      if (pend) return;
      pend = true;
      requestAnimationFrame(function () { pend = false; render(); });
    }).observe(D.body, { childList: true, subtree: true });
  }

  /* ---------- Armar las cajas en cada producto ---------- */
  function armar(c) {
    if (c.querySelector('.spc')) return;
    var it = c.closest('.js-item-product'); if (!it) return;
    var pd = c.querySelector('.js-price-display'); if (!pd) return;
    var pr = parseFloat(pd.getAttribute('data-product-price')) / 100; if (!pr) return;
    var cp = c.querySelector('.js-compare-price-display');
    var antes = cp ? pn(cp.textContent) : 0;
    var a = it.querySelector('.item-name a[href], .item-image a[href], a[href]');

    c.insertAdjacentHTML('beforeend',
      '<div class="spc">' +
        '<div class="spc-b spc-l"><div class="spc-f"><span class="spc-i">' + ICO_LISTA + '</span>' +
          '<span class="spc-tx"><span class="spc-et">Precio de lista</span>' +
          '<span class="spc-pr">' + fm(pr) + (antes > pr ? '<s>' + fm(antes) + '</s>' : '') + '</span></span></div></div>' +
        '<div class="spc-b spc-t"><div class="spc-f"><span class="spc-i">' + ICO_TRANSF + '</span>' +
          '<span class="spc-tx"><span class="spc-et">Transferencia · ' + Math.round(DESC_TRANSF * 100) + '% OFF</span>' +
          '<strong>' + fm(pr * (1 - DESC_TRANSF)) + '</strong></span></div></div>' +
        '<div class="spc-b spc-q"><div class="spc-f"><span class="spc-i">' + ICO_CUOTAS + '</span>' +
          '<span class="spc-tx"><span class="spc-et">' + CUOTAS + ' cuotas sin interés</span>' +
          '<strong>' + fm(pr / CUOTAS) + '</strong></span></div>' +
          '<div class="spc-tj">' + TJ + '</div></div>' +
        '<a class="spc-v" href="' + (a ? a.getAttribute('href') : '#') + '">Ver más →</a>' +
      '</div>');

    var n = c;
    while (n.parentElement && n.parentElement !== it) n = n.parentElement;
    (n.parentElement === it && n !== it ? n : it).classList.add('spc-card');
  }

  function render() {
    [].forEach.call(D.querySelectorAll('.js-item-product .item-price-container'), armar);
  }

  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', init);
  else init();
})();
