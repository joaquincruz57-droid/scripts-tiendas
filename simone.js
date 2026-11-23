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
