/* ====== BANNER SIMONE SHOES · Tienda Nube ======
   Se inserta solo en el inicio, arriba del slider / secciones.
   En las demás páginas no hace nada. */
(function () {
  if (document.getElementById('sbBanner')) return;

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
  position:absolute; left:49cqw; top:-1cqw; width:30cqw; z-index:3; pointer-events:none;
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
.sb-logo{left:8cqw;bottom:5cqw;width:10cqw;--d:.4;--t:4s;--r1:-2deg;--r2:2deg}

.sb-px{translate:var(--px,0cqw) var(--py,0cqw);transition:translate .25s ease-out;will-change:translate}

@media (max-width:700px){
  .sb{aspect-ratio:4/5.1}
  .sb-text{font-size:30cqw;top:46%}
  .sb-card{width:64cqw;top:11cqw;font-size:2.55cqw}
  .sb-hero{left:38cqw;top:-2cqw;width:66cqw}
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
      if (el.previousElementSibling !== sec) el.insertAdjacentElement('beforebegin', sec);
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
