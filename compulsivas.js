<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--cp:#f7b6cf;--cs:#fdeaf1;--cd:#c2447c;--ci:#111;--cb:#fdf7f3;--cl:#f1e3ea}
.cbn,.cbf,.ccat,.cso,.clo,.cvf,.cfq,.cpb,.cpc-card{font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
.cbn *,.cbf *,.ccat *,.cso *,.clo *,.cvf *,.cfq *,.cpb *{box-sizing:border-box;margin:0;padding:0}
.sk{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.sk.f{fill:currentColor;stroke:none}
.ctg{display:inline-flex;align-items:center;gap:.8rem;font-size:.68rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#8a8a8a;margin-bottom:.8rem}
.ctg i{display:inline-block;width:2.2rem;height:2px;background:var(--cp)}
.chd{text-align:center;max-width:38rem;margin:0 auto 2.2rem}.chd .ctg{display:flex;justify-content:center}
.ctt{position:relative;display:inline-block;font-weight:800;font-size:clamp(1.8rem,4vw,3rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;padding-bottom:1rem}
.ctt em{font-style:normal;color:#e0709c}
.ctt:after{content:"";position:absolute;left:50%;bottom:0;height:4px;width:0;border-radius:4px;background:var(--cp);transform:translateX(-50%);transition:width 1s cubic-bezier(.2,.9,.2,1) .5s}
.vis>.ctt:after{width:5rem}
.csb{margin-top:.9rem;font-size:.95rem;line-height:1.55;color:#6f6f6f}
.pd{position:relative;width:.55rem;height:.55rem;border-radius:50%}
.pd:after{content:"";position:absolute;inset:0;border-radius:50%;background:inherit;animation:cPl 1.7s ease-out infinite}
@keyframes cPl{0%{transform:scale(1);opacity:.7}to{transform:scale(3.2);opacity:0}}
.rv{opacity:0;transform:translateY(42px);transition:opacity .9s ease var(--d,0s),transform .9s cubic-bezier(.2,.9,.2,1) var(--d,0s)}
.rv.l{transform:translateX(-64px)}.rv.rt{transform:translateX(64px)}
@media(max-width:767px){.rv.l,.rv.rt{transform:translateY(42px)}.chd{margin-bottom:1.5rem}.csb{font-size:.85rem}.ctg{font-size:.6rem;letter-spacing:.24em}.ctg i{width:1.5rem}}
.rv.vis{opacity:1;transform:none}

.cbn{position:relative;width:100%;overflow:hidden;isolation:isolate;height:calc(100svh - var(--cbn-ann,0px));min-height:520px;max-height:1000px;background:#1a1a1a;color:#fff}
.cbn-vid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.cbn:after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.08) 28%,rgba(0,0,0,.1) 55%,rgba(0,0,0,.5))}
.cbn-in{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;text-align:center;padding:0 5% 9svh;gap:1.1rem}
.cbn-btn,.cbn-ig{display:inline-flex;align-items:center;justify-content:center;gap:.7rem;min-width:min(20rem,80vw);padding:1.15rem 2.6rem;border-radius:999px;text-decoration:none;font-size:.9rem;font-weight:700;letter-spacing:.24em;text-transform:uppercase;line-height:1;opacity:0;transform:translateY(24px);animation:cbnUp .9s cubic-bezier(.2,.9,.2,1) .2s forwards;transition:transform .25s,filter .25s,background .25s,color .25s}
.cbn-btn{background:var(--cp);color:var(--ci)!important;border:1px solid var(--cp)}
.cbn-btn:hover{transform:translateY(-3px);filter:brightness(1.06)}
.cbn-ig{background:rgba(255,255,255,.12);color:#fff!important;border:1px solid rgba(255,255,255,.7);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation-delay:.4s}
.cbn-ig:hover{transform:translateY(-3px);background:#fff;color:var(--ci)!important}
.cbn-ig svg{width:1.15rem;height:1.15rem;flex:none}
@keyframes cbnUp{to{opacity:1;transform:none}}
.cbn-bg{transition:background-color .3s,box-shadow .3s,border-color .3s}
html.cbn-top .cbn-bg{background:transparent!important;box-shadow:none!important;border-color:transparent!important}
html:not(.cbn-top) .cbn-fb{background-color:#fdf7f3!important}
html.cbn-top .cbn-hd a,html.cbn-top .cbn-hd .nav-list-link,html.cbn-top .cbn-hd .btn-link{color:#fff!important}
html.cbn-top .cbn-hd svg{filter:brightness(0) invert(1)}
html.cbn-top .cbn-hd input{color:#fff!important;border-color:rgba(255,255,255,.8)!important;background:transparent!important}
html.cbn-top .cbn-hd input::placeholder{color:rgba(255,255,255,.85)!important}
html.cbn-top .cbn-hd .form-control,html.cbn-top .cbn-hd .search-input,html.cbn-top .cbn-hd [class*=search]{border-color:rgba(255,255,255,.8)!important}
.cbn-hd a,.cbn-hd svg{transition:color .3s,filter .3s}
@media(max-width:767px){.cbn{min-height:480px}.cbn-in{gap:.9rem;padding-bottom:8svh}.cbn-btn,.cbn-ig{width:100%;max-width:20rem;min-width:0;padding:1.05rem 1.6rem;font-size:.8rem;letter-spacing:.2em}}

.cbf{width:100%;background:var(--cb)}
.cbf-wrap{max-width:1400px;margin:0 auto;padding:1.4rem 4.4%}
.cbf-track{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
.cbf-item{display:flex;align-items:center;gap:.95rem;padding:.95rem 1.2rem;background:#fff;border:1px solid var(--cl);border-radius:1rem;box-shadow:0 .4rem 1.2rem rgba(247,182,207,.18);transition:transform .25s,box-shadow .25s}
.cbf-item:hover{transform:translateY(-2px);box-shadow:0 .6rem 1.5rem rgba(247,182,207,.32)}
.cbf-ico{flex:none;width:2.7rem;height:2.7rem;border-radius:50%;background:var(--cs);display:grid;place-items:center}
.cbf-ico svg{width:1.3rem;height:1.3rem;fill:none;stroke:var(--ci);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.cbf-title{font-weight:700;font-size:.95rem;line-height:1.15;letter-spacing:.04em;text-transform:uppercase;color:var(--ci)}
.cbf-title b{color:#e0709c}
.cbf-desc{margin-top:.3rem;font-size:.72rem;line-height:1.35;letter-spacing:.08em;text-transform:uppercase;color:#7a7a7a;font-weight:500}
@media(max-width:1100px){.cbf-item{padding:.85rem .9rem;gap:.75rem}.cbf-title{font-size:.82rem}.cbf-desc{font-size:.66rem;letter-spacing:.05em}}
@media(max-width:900px){.cbf-wrap{padding:.9rem 0}.cbf-track{display:flex;gap:.75rem;overflow-x:auto;overflow-y:hidden;padding:.3rem 5% .5rem;scroll-snap-type:x mandatory;scroll-padding:0 5%;-webkit-overflow-scrolling:touch;scrollbar-width:none}.cbf-track::-webkit-scrollbar{display:none}.cbf-item{flex:0 0 74%;max-width:20rem;scroll-snap-align:start;padding:.8rem .95rem;gap:.8rem}.cbf-ico{width:2.5rem;height:2.5rem}.cbf-ico svg{width:1.2rem;height:1.2rem}.cbf-title{font-size:.82rem}.cbf-desc{font-size:.66rem}}

.ccat{background:var(--cb)}
.ccat-wrap{max-width:1400px;margin:0 auto;padding:1.6rem 4.4% 2rem}
.ccat-head{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1.1rem}
.ccat .ctg{margin-bottom:.5rem}
.ccat-title{font-weight:800;font-size:clamp(1.4rem,2.6vw,2.1rem);line-height:1;letter-spacing:-.01em;text-transform:uppercase}
.ccat-title em{font-style:normal;color:#e0709c}
.ccat-all{flex:none;font-size:.7rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--ci)!important;text-decoration:none;padding-bottom:.3rem;border-bottom:2px solid var(--cp);transition:border-color .25s,letter-spacing .25s}
.ccat-all:hover{border-color:var(--ci);letter-spacing:.28em}
.ccat-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1rem}
.ccat-card{position:relative;display:block;aspect-ratio:1;padding:5px;border:2px solid var(--cp);border-radius:50%;text-decoration:none;color:#fff!important;background:var(--cb);opacity:0;transform:translateY(22px);transition:opacity .7s ease var(--d,0s),transform .7s cubic-bezier(.2,.9,.2,1) var(--d,0s),border-color .3s,box-shadow .3s}
.ccat.in .ccat-card{opacity:1;transform:none}
.ccat-card:hover{border-color:var(--ci);box-shadow:0 .9rem 1.8rem rgba(224,112,156,.3)}
.ccat-circ{position:relative;display:block;width:100%;height:100%;border-radius:50%;overflow:hidden;isolation:isolate;background:var(--cs)}
.ccat-circ img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%;transition:transform .8s cubic-bezier(.2,.9,.2,1)}
.ccat-card:hover img{transform:scale(1.08)}
.ccat-circ:after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,transparent 35%,rgba(0,0,0,.25) 60%,rgba(0,0,0,.78))}
.ccat-info{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:0 .6rem 14%;text-align:center}
.ccat-name{font-weight:800;font-size:clamp(.72rem,1.05vw,.95rem);line-height:1.05;letter-spacing:.03em;text-transform:uppercase;text-shadow:0 2px 12px rgba(0,0,0,.4)}
.ccat-btn{display:inline-flex;align-items:center;gap:.4rem;padding:.4rem .4rem .4rem .85rem;border-radius:999px;background:var(--cp);color:var(--ci);font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;line-height:1;transition:background .25s,gap .25s}
.ccat-btn svg{width:1.1rem;height:1.1rem;padding:.26rem;border-radius:50%;background:var(--ci);stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.ccat-card:hover .ccat-btn{background:#fff;gap:.6rem}
@media(max-width:1000px){.ccat-grid{gap:.8rem}.ccat-info{gap:.4rem;padding-bottom:12%}.ccat-name{font-size:.68rem}.ccat-btn{font-size:.55rem;padding:.35rem .35rem .35rem .7rem}}
@media(max-width:760px){.ccat-wrap{padding:1.2rem 0 1.4rem}.ccat-head{padding:0 5%;margin-bottom:.8rem}.ccat-all{font-size:.6rem;letter-spacing:.16em}.ccat-grid{display:flex;gap:.75rem;overflow-x:auto;overflow-y:hidden;padding:.3rem 5% .6rem;scroll-snap-type:x proximity;scroll-padding:0 5%;-webkit-overflow-scrolling:touch;scrollbar-width:none}.ccat-grid::-webkit-scrollbar{display:none}.ccat-card{flex:0 0 34vw;max-width:170px;scroll-snap-align:start}.ccat-name{font-size:.66rem}.ccat-info{padding-bottom:13%}}

.cpc-card{background:#fff!important;border:1px solid var(--cl)!important;border-radius:1.1rem!important;padding:.6rem .6rem .8rem!important;box-shadow:0 .4rem 1.2rem rgba(247,182,207,.16);overflow:hidden;transition:transform .3s,box-shadow .3s,border-color .3s}
.cpc-card:hover{transform:translateY(-3px);box-shadow:0 .9rem 1.8rem rgba(224,112,156,.26);border-color:var(--cp)!important}
.cpc-card img{border-radius:.8rem}
.cpc-card .item-name,.cpc-card .item-name a{font-family:Montserrat,sans-serif!important;font-weight:600!important;font-size:.9rem!important;line-height:1.25!important;color:var(--ci)!important;text-transform:uppercase;letter-spacing:.03em}
.cpc-card .item-name{margin:.75rem .25rem .55rem!important}
.cpc-card .item-price-container>:not(.cpc),.cpc-card .item-actions,.cpc-card .js-item-submit-container,.cpc-card .js-addtocart{display:none!important}
.cpc-card .item-price-container{margin:0!important;padding:0!important}
.cpc{display:flex;flex-direction:column;gap:.45rem;padding:0 .1rem}
.cpc *{box-sizing:border-box}
.cpc-b{display:flex;flex-direction:column;gap:.35rem;padding:.55rem .75rem;border-radius:.75rem;border:1.5px solid}
.cpc-f{display:flex;align-items:center;gap:.65rem}
.cpc-i{flex:none;width:1.35rem;height:1.35rem}.cpc-i svg{width:100%;height:100%}
.cpc-tx{display:flex;flex-direction:column;min-width:0}
.cpc-et{font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;line-height:1.2}
.cpc-tx strong,.cpc-pr{font-size:1.1rem;font-weight:800;line-height:1.15;letter-spacing:-.01em;font-style:normal}
.cpc-pr s{margin-left:.4rem;font-size:.72rem;font-weight:500;color:#9a9a9a}
.cpc-l{background:var(--cb);border-color:#eadfd8;color:#555}.cpc-l .cpc-pr{color:var(--ci)}.cpc-l .cpc-i{color:#777}
.cpc-t{background:var(--cs);border-color:var(--cp);color:var(--cd)}.cpc-t strong{color:var(--cd)}
.cpc-q{background:#fff;border-color:var(--ci);color:var(--ci)}.cpc-q strong{color:var(--ci)}
.cpc-tj{display:flex;flex-wrap:wrap;align-items:center;gap:.3rem;padding-top:.4rem;border-top:1px solid #eee}
.cpc-tj img{height:1.1rem;width:auto;max-width:2.2rem;object-fit:contain;border-radius:0}
.cpc-v{align-self:flex-end;display:inline-flex;align-items:center;justify-content:center;margin-top:.2rem;padding:.7rem 1.2rem;border-radius:999px;background:var(--ci);color:#fff!important;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:none!important;line-height:1;transition:background .25s,color .25s,transform .25s}
.cpc-v:hover{background:var(--cp);color:var(--ci)!important;transform:translateY(-1px)}
@media(max-width:767px){.cpc-card{padding:.45rem .45rem .65rem!important;border-radius:.95rem!important}.cpc-card .item-name,.cpc-card .item-name a{font-size:.74rem!important}.cpc-card .item-name{margin:.6rem .15rem .45rem!important}.cpc{gap:.35rem;padding:0}.cpc-b{padding:.45rem .55rem;gap:.3rem;border-radius:.65rem}.cpc-f{gap:.45rem}.cpc-i{width:1.05rem;height:1.05rem}.cpc-et{font-size:.52rem;letter-spacing:.05em}.cpc-tx strong,.cpc-pr{font-size:.92rem}.cpc-pr s{font-size:.6rem;margin-left:.25rem}.cpc-tj{gap:.2rem;padding-top:.3rem}.cpc-tj img{height:.85rem;max-width:1.6rem}.cpc-v{align-self:stretch;padding:.7rem .8rem;font-size:.62rem;letter-spacing:.1em}}

.cso{--p:0;position:relative;overflow:hidden;background:var(--cb);color:var(--ci);padding:3.4rem 0 0}
.cso-bg{position:absolute;inset:0;pointer-events:none}.cso-bg i{position:absolute;border-radius:50%;will-change:transform}
.cso-b1{width:26rem;height:26rem;left:-9rem;top:-5rem;background:radial-gradient(circle at 35% 35%,rgba(247,182,207,.55),transparent 70%);transform:translate3d(0,calc(var(--p)*-60px),0)}
.cso-b2{width:32rem;height:32rem;right:-11rem;bottom:-7rem;background:radial-gradient(circle at 60% 40%,rgba(247,182,207,.45),transparent 70%);transform:translate3d(0,calc(var(--p)*70px),0)}
.cso-wrap{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:0 4.4% 3rem}
.cso-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem}
.cso-grid>article{display:flex}
.cso-box{position:relative;width:100%;overflow:hidden;isolation:isolate;border-radius:1.6rem;padding:2rem 2rem 1.8rem;display:flex;flex-direction:column;gap:.9rem;min-height:22rem;text-decoration:none!important;transition:transform .4s cubic-bezier(.2,.9,.2,1),box-shadow .4s}
.cso-box:hover{transform:translateY(-6px)}
.cso-ig{background:linear-gradient(145deg,var(--cs),var(--cp));color:var(--ci)!important;box-shadow:0 1rem 2.2rem rgba(224,112,156,.22)}
.cso-ig:hover{box-shadow:0 1.4rem 2.8rem rgba(224,112,156,.38)}
.cso-tt{background:#0f0f0f;color:#fff!important;box-shadow:0 1rem 2.2rem rgba(0,0,0,.2)}
.cso-tt:hover{box-shadow:0 1.4rem 2.8rem rgba(0,0,0,.36)}
.cso-tt:before{content:"";position:absolute;z-index:-1;width:20rem;height:20rem;right:-6rem;top:-7rem;border-radius:50%;background:radial-gradient(circle,rgba(247,182,207,.28),transparent 70%)}
.cso-ghost{position:absolute;z-index:-1;right:-1.5rem;bottom:-1.5rem;width:11rem;height:11rem;opacity:.13;stroke-width:1.4;animation:cFl 7s ease-in-out infinite}
.cso-ig .cso-ghost{color:#fff;opacity:.35}.cso-tt .cso-ghost{color:var(--cp)}
@keyframes cFl{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-14px) rotate(4deg)}}
.cso-top{display:flex;align-items:center;gap:.9rem}
.cso-ic{flex:none;width:3.1rem;height:3.1rem;border-radius:50%;display:grid;place-items:center;transition:transform .5s cubic-bezier(.2,.9,.2,1)}
.cso-box:hover .cso-ic{transform:rotate(-12deg) scale(1.08)}
.cso-ig .cso-ic{background:var(--ci);color:#fff}.cso-tt .cso-ic{background:var(--cp);color:var(--ci)}
.cso-ic svg{width:1.5rem;height:1.5rem}
.cso-who{display:flex;flex-direction:column;line-height:1.25;min-width:0;flex:1}
.cso-who strong{font-size:.95rem;font-weight:700;word-break:break-all}
.cso-who em{font-style:normal;font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.65}
.cso-live{flex:none;display:inline-flex;align-items:center;gap:.5rem;padding:.45rem .85rem;border:1px solid rgba(247,182,207,.6);border-radius:999px;font-size:.62rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#fff;background:rgba(247,182,207,.1)}
.cso-live .pd{background:var(--cp)}
.cso-num{margin-top:.6rem;font-weight:800;font-size:clamp(3.4rem,6.4vw,5.6rem);line-height:.95;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.cso-tt .cso-num{color:var(--cp)}
.cso-lab{margin-top:-.2rem;font-size:.78rem;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
.cso-txt{max-width:25rem;font-size:.95rem;line-height:1.55;opacity:.8}
.cso-btn{position:relative;overflow:hidden;align-self:flex-start;margin-top:auto;display:inline-flex;align-items:center;gap:.75rem;padding:.7rem .7rem .7rem 1.4rem;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;line-height:1;transition:gap .25s,background .25s}
.cso-btn:before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);transition:left .7s}
.cso-box:hover .cso-btn:before{left:130%}
.cso-btn svg{flex:none;width:1.7rem;height:1.7rem;padding:.42rem;border-radius:50%;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s}
.cso-ig .cso-btn{background:var(--ci);color:#fff}.cso-ig .cso-btn svg{background:var(--cp);stroke:var(--ci)}
.cso-tt .cso-btn{background:var(--cp);color:var(--ci)}.cso-tt .cso-btn svg{background:var(--ci);stroke:#fff}
.cso-box:hover .cso-btn{gap:1rem}.cso-box:hover .cso-btn svg{transform:translateX(3px)}
.cso-ig:hover .cso-btn{background:#2a2a2a}.cso-tt:hover .cso-btn{background:#fff}
.cso-marq{position:relative;z-index:1;overflow:hidden;white-space:nowrap;padding:.95rem 0;background:var(--cp);border-top:1px solid rgba(0,0,0,.08)}
.cso-track{display:inline-flex;align-items:center;gap:1.6rem;animation:cMq 40s linear infinite}
.cso-marq:hover .cso-track{animation-play-state:paused}
.cso-track span{font-weight:800;font-size:1.1rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ci)}
.cso-track i{font-style:normal;font-size:.9rem;color:#fff}
@keyframes cMq{to{transform:translateX(-50%)}}
@media(max-width:767px){.cso{padding-top:2.4rem}.cso-wrap{padding-bottom:2rem}.cso-grid{grid-template-columns:1fr;gap:1rem}.cso-box{padding:1.4rem 1.3rem 1.3rem;min-height:0;border-radius:1.3rem;gap:.75rem}.cso-ic{width:2.7rem;height:2.7rem}.cso-ic svg{width:1.3rem;height:1.3rem}.cso-who strong{font-size:.82rem}.cso-live{font-size:.54rem;padding:.38rem .65rem}.cso-ghost{width:8rem;height:8rem}.cso-txt{font-size:.85rem}.cso-btn{font-size:.66rem;padding-left:1.2rem}.cso-track span{font-size:.85rem}.cso-track{gap:1.1rem}.cso-marq{padding:.75rem 0}}

.clo{position:relative;overflow:hidden;background:#fff;color:var(--ci);padding:3.6rem 0 3.8rem}
.clo-wrap{max-width:1200px;margin:0 auto;padding:0 4.4%}
.clo-card{display:grid;grid-template-columns:1.3fr 1fr;background:var(--cb);border:1px solid var(--cl);border-radius:1.6rem;overflow:hidden;box-shadow:0 1.2rem 2.6rem rgba(247,182,207,.25)}
.clo-map{position:relative;min-height:26rem;background:#efe6e0;overflow:hidden;clip-path:inset(0 100% 0 0);transition:clip-path 1.2s cubic-bezier(.2,.9,.2,1) .2s}
.clo-card.vis .clo-map{clip-path:inset(0)}
.clo-map iframe{position:absolute;inset:0;width:100%;height:100%;border:0;filter:grayscale(.3) contrast(1.03) saturate(.9);transform:scale(1.15);transition:transform 1.8s cubic-bezier(.2,.9,.2,1) .2s}
.clo-card.vis iframe{transform:none}
.clo-open{position:absolute;top:1rem;left:1rem;z-index:2;display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1rem;background:#fff;color:#1a56c4!important;font-size:.82rem;font-weight:600;text-decoration:none!important;border-radius:.55rem;box-shadow:0 2px 10px rgba(0,0,0,.18);transition:transform .25s}
.clo-open:hover{transform:translateY(-2px)}.clo-open svg{width:1rem;height:1rem}
.clo-info{padding:2.6rem 2.4rem;display:flex;flex-direction:column;justify-content:center;gap:.5rem}
.clo-badge{align-self:flex-start;display:inline-flex;align-items:center;gap:.55rem;padding:.45rem .9rem;border-radius:999px;background:var(--cs);border:1px solid var(--cp);font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--cd)}
.clo-badge .pd{background:var(--cd)}
.clo-name{margin-top:.5rem;font-weight:800;font-size:clamp(2rem,3.6vw,3rem);line-height:1;letter-spacing:-.01em;text-transform:uppercase}
.clo-dir,.clo-hor{font-size:.92rem;line-height:1.5;color:#666}.clo-dir{font-weight:600;color:var(--ci)}
.clo-feat{list-style:none;margin:1rem 0 1.4rem}
.clo-feat li{display:flex;align-items:center;gap:.9rem;padding:.8rem 0;border-top:1px solid #efe1e8;font-size:.92rem;font-weight:500;color:#333;opacity:0;transform:translateX(26px);transition:opacity .7s ease var(--d,0s),transform .7s cubic-bezier(.2,.9,.2,1) var(--d,0s)}
.clo-feat li:last-child{border-bottom:1px solid #efe1e8}
.clo-card.vis .clo-feat li{opacity:1;transform:none}
.clo-feat svg{flex:none;width:1.5rem;height:1.5rem;padding:.3rem;border-radius:50%;background:var(--cp);stroke:var(--ci);stroke-width:2.4}
.clo-btns{display:flex;flex-wrap:wrap;gap:.7rem}
.clo-b{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:.7rem;padding:1rem 1.6rem;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;text-decoration:none!important;line-height:1;transition:transform .25s,background .25s,border-color .25s,gap .25s}
.clo-b1{background:var(--ci);color:#fff!important}
.clo-b1:hover{background:var(--cp);color:var(--ci)!important;transform:translateY(-2px);gap:1rem}
.clo-b1:before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent);transform:skewX(-20deg);transition:left .7s}
.clo-b1:hover:before{left:130%}
.clo-b2{background:#fff;color:var(--ci)!important;border:1.5px solid var(--cp)}
.clo-b2:hover{border-color:var(--ci);transform:translateY(-2px)}
@media(max-width:900px){.clo-card{grid-template-columns:1fr}.clo-map{min-height:19rem;clip-path:inset(100% 0 0 0)}.clo-info{padding:1.8rem 1.4rem 2rem}}
@media(max-width:767px){.clo{padding:2.4rem 0 2.6rem}.clo-card{border-radius:1.3rem}.clo-map{min-height:16rem}.clo-open{top:.7rem;left:.7rem;padding:.6rem .85rem;font-size:.74rem}.clo-dir,.clo-hor{font-size:.85rem}.clo-feat li{font-size:.85rem;padding:.7rem 0}.clo-btns{flex-direction:column}.clo-b{width:100%;padding:1.05rem 1.2rem;font-size:.68rem}}

/* ====== CLIENTES VERIFICADOS ====== */
.cvf{position:relative;overflow:hidden;background:var(--cb);color:var(--ci);padding:3.6rem 0 3.8rem}
.cvf-wrap{max-width:1200px;margin:0 auto;padding:0 4.4%}
.cvf-sum{display:flex;justify-content:center;margin:0 auto 2rem}
.cvf-score{display:inline-flex;align-items:center;flex-wrap:wrap;justify-content:center;gap:.9rem;padding:.8rem 1.5rem;background:#fff;border:1px solid var(--cl);border-radius:999px;box-shadow:0 .4rem 1.2rem rgba(247,182,207,.2)}
.cvf-score b{font-weight:800;font-size:1.7rem;line-height:1;letter-spacing:-.02em}
.cvf-score .t{font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#6f6f6f}
.cvf-st{display:inline-flex;gap:.15rem;color:#e0709c}
.cvf-st svg{width:1rem;height:1rem}
.cvf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
.cvf-card{display:flex;flex-direction:column;gap:.9rem;background:#fff;border:1px solid var(--cl);border-radius:1.4rem;padding:1.4rem 1.4rem 1.2rem;box-shadow:0 .5rem 1.4rem rgba(247,182,207,.2)}
.cvf-top{display:flex;align-items:center;gap:.8rem}
.cvf-av{flex:none;width:2.7rem;height:2.7rem;border-radius:50%;background:var(--cp);color:var(--ci);display:grid;place-items:center;font-weight:800;font-size:1rem}
.cvf-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.cvf-who strong{font-size:.92rem;font-weight:700}
.cvf-who em{font-style:normal;font-size:.66rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#8a8a8a}
.cvf-tx{flex:1;font-size:.92rem;line-height:1.55;color:#444}
.cvf-ft{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem;padding-top:.8rem;border-top:1px solid #efe1e8}
.cvf-pr{font-size:.64rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ci)}
.cvf-ok{display:inline-flex;align-items:center;gap:.35rem;font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cd)}
.cvf-ok svg{width:1.1rem;height:1.1rem;padding:.2rem;border-radius:50%;background:var(--cd);stroke:#fff;fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
@media(max-width:1000px){.cvf-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:760px){.cvf{padding:2.4rem 0 2.6rem}.cvf-wrap{padding:0}.cvf .chd,.cvf-sum{padding:0 5%}.cvf-grid{display:flex;gap:.75rem;overflow-x:auto;overflow-y:hidden;padding:.3rem 5% .8rem;scroll-snap-type:x mandatory;scroll-padding:0 5%;-webkit-overflow-scrolling:touch;scrollbar-width:none}.cvf-grid::-webkit-scrollbar{display:none}.cvf-card{flex:0 0 82%;max-width:20rem;scroll-snap-align:start;padding:1.2rem 1.1rem 1rem;border-radius:1.2rem}.cvf-tx{font-size:.86rem}}

/* ====== PREGUNTAS FRECUENTES ====== */
.cfq{position:relative;background:#fff;color:var(--ci);padding:3.6rem 0 4rem}
.cfq-wrap{max-width:820px;margin:0 auto;padding:0 4.4%}
.cfq-list{display:flex;flex-direction:column;gap:.7rem}
.cfq-it{background:var(--cb);border:1px solid var(--cl);border-radius:1.1rem;transition:border-color .3s,box-shadow .3s}
.cfq-it[open]{border-color:var(--cp);box-shadow:0 .6rem 1.4rem rgba(247,182,207,.25)}
.cfq-it summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 1.3rem;font-weight:700;font-size:.9rem;line-height:1.3;letter-spacing:.03em;text-transform:uppercase;color:var(--ci)}
.cfq-it summary::-webkit-details-marker{display:none}
.cfq-it summary::marker{content:""}
.cfq-pl{flex:none;width:1.9rem;height:1.9rem;border-radius:50%;background:var(--cp);display:grid;place-items:center;transition:transform .3s,background .3s}
.cfq-pl svg{width:.9rem;height:.9rem;stroke:var(--ci);fill:none;stroke-width:2.4;stroke-linecap:round}
.cfq-it[open] .cfq-pl{transform:rotate(45deg);background:var(--ci)}
.cfq-it[open] .cfq-pl svg{stroke:#fff}
.cfq-a{padding:0 1.3rem 1.25rem;font-size:.92rem;line-height:1.6;color:#555}
.cfq-more{margin-top:2rem;text-align:center}
.cfq-more p{font-size:.92rem;color:#6f6f6f;margin-bottom:1rem}
.cfq-cta{display:inline-flex;align-items:center;justify-content:center;gap:.7rem;padding:1rem 1.8rem;border-radius:999px;background:var(--ci);color:#fff!important;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;text-decoration:none!important;line-height:1;transition:background .25s,color .25s,transform .25s}
.cfq-cta:hover{background:var(--cp);color:var(--ci)!important;transform:translateY(-2px)}
.cfq-cta svg{width:1.1rem;height:1.1rem}
@media(max-width:767px){.cfq{padding:2.4rem 0 2.8rem}.cfq-it summary{padding:.95rem 1rem;font-size:.76rem}.cfq-a{padding:0 1rem 1rem;font-size:.86rem}.cfq-cta{width:100%;font-size:.68rem}}

.cpb{position:fixed;left:16px;bottom:16px;z-index:90;width:max-content;max-width:min(400px,calc(100vw - 32px));background:#fff;border:1px solid var(--cl);border-radius:1.3rem;overflow:hidden;box-shadow:0 18px 44px rgba(224,112,156,.28),0 2px 8px rgba(0,0,0,.06);opacity:0;transform:translateY(28px) scale(.97);pointer-events:none;transition:opacity .5s,transform .5s cubic-bezier(.2,.9,.2,1)}
.cpb.on{opacity:1;transform:none;pointer-events:auto}
.cpb-link{display:flex;align-items:center;gap:.9rem;padding:.8rem 2.6rem .95rem .8rem;color:var(--ci)!important;text-decoration:none!important}
.cpb-img{flex:none;width:4.4rem;height:4.4rem;border-radius:1rem;overflow:hidden;background:var(--cs);display:grid;place-items:center;color:var(--cd)}
.cpb-img img{width:100%;height:100%;object-fit:cover;display:block}.cpb-img svg{width:1.8rem;height:1.8rem}
.cpb-body{display:flex;flex-direction:column;gap:.18rem;min-width:0}
.cpb-who{font-size:.76rem;line-height:1.3;color:#555;font-weight:500}.cpb-who b{font-weight:700;color:var(--ci)}
.cpb-row{display:flex;align-items:baseline;justify-content:space-between;gap:1rem}
.cpb-prod{font-size:.88rem;font-weight:800;line-height:1.15;letter-spacing:.02em;text-transform:uppercase;color:var(--ci)}
.cpb-price{font-size:.9rem;font-weight:800;line-height:1.15;color:var(--cd);white-space:nowrap}
.cpb-time{display:flex;align-items:center;gap:.45rem;margin-top:.15rem;font-size:.6rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#9a9a9a}
.cpb-time i{display:inline-block;width:.5rem;height:.5rem;border-radius:50%;background:var(--cp)}
.cpb-x{position:absolute;top:.55rem;right:.6rem;width:1.7rem;height:1.7rem;border:0;border-radius:50%;background:transparent;font-size:1.25rem;line-height:1;color:#888;cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s}
.cpb-x:hover{background:var(--cs);color:var(--ci)}
.cpb-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:var(--cp);transform-origin:left;transform:scaleX(0)}
.cpb.on .cpb-bar{animation:cpbB var(--cpb-t,6.5s) linear forwards}.cpb:hover .cpb-bar{animation-play-state:paused}
@keyframes cpbB{from{transform:scaleX(1)}to{transform:scaleX(0)}}
@media(max-width:600px){.cpb{left:10px;bottom:10px;border-radius:1.1rem;max-width:calc(100vw - 86px)}.cpb-link{gap:.7rem;padding:.6rem 2.2rem .75rem .6rem}.cpb-img{width:3.4rem;height:3.4rem;border-radius:.8rem}.cpb-who{font-size:.66rem}.cpb-prod,.cpb-price{font-size:.74rem}.cpb-row{gap:.6rem}.cpb-time{font-size:.52rem;letter-spacing:.08em}.cpb-x{top:.35rem;right:.4rem}}
@media(prefers-reduced-motion:reduce){.rv,.ccat-card,.clo-feat li{opacity:1!important;transform:none!important;transition:none!important}.cso-ghost,.cso-track,.pd:after{animation:none}.ctt:after{width:5rem;transition:none}.clo-map{clip-path:none;transition:none}.clo-map iframe{transform:none;transition:none}.cbn-btn,.cbn-ig{animation-duration:.01s!important}.cso-bg i{transform:none!important}.cpb{transition:opacity .2s;transform:none}.cpb.on .cpb-bar{animation:none}.cpc-card,.cpc-v{transition:none}}
</style>

<svg id="cSp" width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="cIg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></symbol><symbol id="cTt" viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.27 0 .53.04.77.12V9.66a5.7 5.7 0 0 0-.77-.05A5.7 5.7 0 0 0 4.2 15.3a5.7 5.7 0 0 0 5.66 5.7 5.7 5.7 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z"/></symbol></svg>

<section class="cbn" id="cBanner" aria-label="Banner Compulsivas"><video class="cbn-vid" id="cbnVid" autoplay muted loop playsinline preload="auto" disablepictureinpicture></video><div class="cbn-in"><a class="cbn-btn" href="/productos/">Ver productos</a><a class="cbn-ig" href="https://www.instagram.com/compulsivas.indumentaria04/" target="_blank" rel="noopener"><svg class="sk" viewBox="0 0 24 24"><use href="#cIg"/></svg>Seguinos en Instagram</a></div></section>

<section class="cbf" id="cBeneficios" aria-label="Beneficios"><div class="cbf-wrap"><div class="cbf-track">
<article class="cbf-item"><span class="cbf-ico"><svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2.2"/><path d="M2.5 10h19M6 15h4"/></svg></span><div><h3 class="cbf-title"><b>3</b> cuotas sin interés</h3><p class="cbf-desc">Con todas las tarjetas</p></div></article>
<article class="cbf-item"><span class="cbf-ico"><svg viewBox="0 0 24 24"><path d="M2.5 6.5h11v9h-11z"/><path d="M13.5 9.5h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg></span><div><h3 class="cbf-title">Envío gratis</h3><p class="cbf-desc">A todo el país</p></div></article>
<article class="cbf-item"><span class="cbf-ico"><svg viewBox="0 0 24 24"><path d="M3 12.5V4.5a1 1 0 0 1 1-1h8l9 9-8.5 8.5z"/><circle cx="7.8" cy="8.3" r="1.3"/></svg></span><div><h3 class="cbf-title"><b>10%</b> OFF</h3><p class="cbf-desc">Pagando con transferencia</p></div></article>
<article class="cbf-item"><span class="cbf-ico"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5"/><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5"/><path d="M4 20v-4.5h4.5M20 4v4.5h-4.5"/></svg></span><div><h3 class="cbf-title">Cambios y devoluciones</h3><p class="cbf-desc">Cambios fáciles y rápidos</p></div></article>
</div></div></section>

<section class="ccat" id="cCategorias" aria-label="Categorías"><div class="ccat-wrap"><div class="ccat-head"><div><span class="ctg"><i></i>Categorías</span><h2 class="ccat-title">Elegí tu <em>estilo</em></h2></div><a class="ccat-all" href="/productos/">Ver todo</a></div><div class="ccat-grid" id="cCatG"></div></div></section>

<section class="cso" id="cSocial" aria-label="Redes sociales"><div class="cso-bg"><i class="cso-b1"></i><i class="cso-b2"></i></div><div class="cso-wrap">
<div class="chd rv"><span class="ctg"><i></i>Comunidad Compulsivas<i></i></span><h2 class="ctt">Sumate a la <em>comunidad</em></h2><p class="csb">Seguinos en Instagram y TikTok para no perderte ninguna novedad.</p></div>
<div class="cso-grid">
<article class="rv l" style="--d:.1s"><a class="cso-box cso-ig" href="https://www.instagram.com/compulsivas.indumentaria04/" target="_blank" rel="noopener"><svg class="sk cso-ghost" viewBox="0 0 24 24"><use href="#cIg"/></svg><div class="cso-top"><span class="cso-ic"><svg class="sk" viewBox="0 0 24 24"><use href="#cIg"/></svg></span><span class="cso-who"><strong>@compulsivas.indumentaria04</strong><em>Instagram</em></span></div><div class="cso-num"><span id="cIgN">+0</span></div><div class="cso-lab">seguidores en Instagram</div><p class="cso-txt">Novedades, looks y promos antes que nadie. Sumate a la comunidad.</p><span class="cso-btn">Seguinos en Instagram <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a></article>
<article class="rv rt" style="--d:.25s"><a class="cso-box cso-tt" href="https://www.tiktok.com/@compulsivas.indumentaria" target="_blank" rel="noopener"><svg class="sk f cso-ghost" viewBox="0 0 24 24"><use href="#cTt"/></svg><div class="cso-top"><span class="cso-ic"><svg class="sk f" viewBox="0 0 24 24"><use href="#cTt"/></svg></span><span class="cso-who"><strong>@compulsivas.indumentaria</strong><em>TikTok</em></span><span class="cso-live"><i class="pd"></i>Hacemos lives</span></div><div class="cso-num"><span id="cTtN">+0</span></div><div class="cso-lab">seguidores en TikTok</div><p class="cso-txt">En TikTok hacemos lives: mirá las prendas en vivo y preguntanos lo que quieras.</p><span class="cso-btn">Seguinos en TikTok <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a></article>
</div></div><div class="cso-marq" aria-hidden="true"><div class="cso-track" id="cTrk"></div></div></section>

<section class="clo" id="cLocal" aria-label="Nuestro local"><div class="clo-wrap">
<div class="chd rv"><span class="ctg"><i></i>Nuestro local<i></i></span><h2 class="ctt">Venís, te lo probás, <em>te lo llevás puesto</em></h2><p class="csb">Pasá por nuestro local, conocé las prendas en persona y encontrá tu look ideal.</p></div>
<div class="clo-card rv" style="--d:.15s"><div class="clo-map"><iframe src="https://maps.google.com/maps?q=-24.6733248,-65.0431885&z=17&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa del local Compulsivas" allowfullscreen></iframe><a class="clo-open" href="https://maps.app.goo.gl/ohuvUcKJum5quh9A8" target="_blank" rel="noopener">Abrir en Maps<svg class="sk" viewBox="0 0 24 24" style="stroke-width:2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a></div>
<div class="clo-info"><span class="clo-badge"><i class="pd"></i>Local físico</span><h3 class="clo-name">Compulsivas</h3><p class="clo-dir" id="cloDir" hidden></p><p class="clo-hor" id="cloHor" hidden></p>
<ul class="clo-feat"><li style="--d:.5s"><svg class="sk" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Probate todo antes de llevártelo</li><li style="--d:.62s"><svg class="sk" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Atención personalizada</li><li style="--d:.74s"><svg class="sk" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Mirá las novedades en persona</li></ul>
<div class="clo-btns"><a class="clo-b clo-b1" href="https://www.google.com/maps/dir/?api=1&destination=-24.6733248,-65.0431885" target="_blank" rel="noopener">Cómo llegar <span aria-hidden="true">→</span></a><a class="clo-b clo-b2" href="https://www.instagram.com/compulsivas.indumentaria04/" target="_blank" rel="noopener">Consultar horario</a></div></div></div>
</div></section>

<section class="cvf" id="cVerif" aria-label="Clientes verificados"><div class="cvf-wrap">
<div class="chd rv"><span class="ctg"><i></i>Clientes verificados<i></i></span><h2 class="ctt">Lo que dicen <em>nuestras clientas</em></h2><p class="csb">Opiniones reales de compras confirmadas en Compulsivas.</p></div>
<div class="cvf-sum rv" style="--d:.1s"><div class="cvf-score"><b id="cvfRt">4.9</b><span class="cvf-st" id="cvfSt"></span><span class="t">Compras verificadas</span></div></div>
<div class="cvf-grid" id="cvfG"></div>
</div></section>

<section class="cfq" id="cFaq" aria-label="Preguntas frecuentes"><div class="cfq-wrap">
<div class="chd rv"><span class="ctg"><i></i>Preguntas frecuentes<i></i></span><h2 class="ctt">Resolvé tus <em>dudas</em></h2><p class="csb">Todo lo que necesitás saber antes de comprar.</p></div>
<div class="cfq-list" id="cfqL"></div>
<div class="cfq-more rv"><p>¿No encontraste lo que buscabas?</p><a class="cfq-cta" href="https://www.instagram.com/compulsivas.indumentaria04/" target="_blank" rel="noopener"><svg class="sk" viewBox="0 0 24 24"><use href="#cIg"/></svg>Escribinos por Instagram</a></div>
</div></section>

<script>
(function(){
var D=document,W=window,rm=W.matchMedia("(prefers-reduced-motion:reduce)").matches,
p=location.pathname.replace(/\/+$/,""),home=p===""||/^\/[a-z]{2}(-[a-z]{2})?$/i.test(p),
$=function(i){return D.getElementById(i)},
fm=function(n){return"$"+Math.round(n).toLocaleString("es-AR")},
fn=function(n){return"+"+String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,".")},
S=function(d){return'<svg class="sk" viewBox="0 0 24 24">'+d+'</svg>'},
rv=function(el,f,o){if(!el)return;if(rm||!W.IntersectionObserver){f(el);return}var ob=new IntersectionObserver(function(es){if(es[es.length-1].isIntersecting){ob.disconnect();f(el)}},o||{threshold:.15});ob.observe(el)},
raf=function(f){requestAnimationFrame(f)};

/* ====== SECCIONES DEL INICIO ====== */
function initHome(){
var B=$("cBanner"),Bn=$("cBeneficios"),Ct=$("cCategorias"),So=$("cSocial"),Lo=$("cLocal"),Cv=$("cVerif"),Fq=$("cFaq"),
w=B.closest(".js-seal, .seal, .footer-seals, .seals")||B.parentNode;
if(!home){w.style.display="none";return}
D.body.appendChild($("cSp"));

/* --- Banner: video según dispositivo --- */
var VP="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/horizontal.mov",
VM="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/vertical.mov",
v=$("cbnVid"),mq=W.matchMedia("(max-width:767px)");
function sv(){var u=mq.matches?VM:VP;if(v.getAttribute("data-u")===u)return;v.setAttribute("data-u",u);v.src=u;var r=v.play();if(r&&r.catch)r.catch(function(){})}
sv();if(mq.addEventListener)mq.addEventListener("change",sv);else if(mq.addListener)mq.addListener(sv);

/* --- Categorías --- */
var CU="https://compulsivas21.mitiendanube.com/",IU="https://pub-206117a07bdc4f2995a7200b0bd57f09.r2.dev/",
CT=[["Básicos Esenciales","basicos-esenciales-1pj2s","Basicos%20Esenciales"],["Remeras","remeras-eziyr","Remeras"],["Pantalones","pantalones-1gmhk","Pantalones"],["Camisas","camisas-1temr","Camisas"],["Blusas","blusas-vmqw1","Blusas"],["Chalecos","chalecos-13rhb","Chalecos"],["Blazers","blazers-1lfi1","Blazers"]];
$("cCatG").innerHTML=CT.map(function(c,i){return'<a class="ccat-card" href="'+CU+c[1]+'" style="--d:'+(i*.06).toFixed(2)+'s"><span class="ccat-circ"><img src="'+IU+c[2]+'.png" alt="'+c[0]+'" loading="lazy"><span class="ccat-info"><span class="ccat-name">'+c[0]+'</span><span class="ccat-btn">Ver <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span></span></a>'}).join("");
rv(Ct,function(x){x.classList.add("in")},{threshold:.1});

/* --- Instagram y TikTok --- */
var IG={BASE:290,START:"2026-11-21",POR_DIA:2},TT={BASE:9400,START:"2026-11-21",POR_DIA:0},
nI=$("cIgN"),nT=$("cTtN"),mr=["@compulsivas.indumentaria04","Seguinos","Lives en TikTok","@compulsivas.indumentaria","Nuevos looks"],h1="",i;
function tg(c){return c.BASE+Math.max(0,Math.floor((Date.now()-new Date(c.START+"T00:00:00").getTime())/864e5))*c.POR_DIA}
function ct(el,m){if(el.getAttribute("data-r"))return;el.setAttribute("data-r","1");if(rm){el.textContent=fn(m);return}var t0=null;function st(t){if(!t0)t0=t;var k=Math.min((t-t0)/2400,1);el.textContent=fn(m*(1-Math.pow(1-k,3)));if(k<1)raf(st);else el.textContent=fn(m)}raf(st)}
for(i=0;i<4;i++)mr.forEach(function(t){h1+="<span>"+t+"</span><i>✦</i>"});
$("cTrk").innerHTML=h1+h1;
function rvAll(s,cb){[].forEach.call(s.querySelectorAll(".rv"),function(e){rv(e,function(x){x.classList.add("vis");if(cb)cb(x)},{threshold:.2,rootMargin:"0px 0px -6% 0px"})})}
rvAll(So,function(x){if(x.contains(nI))ct(nI,tg(IG));if(x.contains(nT))ct(nT,tg(TT))});

/* parallax suave del fondo */
var vi=false,tk=false;
function up(){tk=false;var r=So.getBoundingClientRect(),vh=W.innerHeight||1;So.style.setProperty("--p",Math.max(-1.5,Math.min(1.5,(r.top+r.height/2-vh/2)/vh)).toFixed(3))}
function os(){if(vi&&!tk){tk=true;raf(up)}}
if(!rm){if(W.IntersectionObserver)new IntersectionObserver(function(e){vi=e[e.length-1].isIntersecting;if(vi)up()}).observe(So);else vi=true;W.addEventListener("scroll",os,{passive:true});W.addEventListener("resize",os)}

/* --- Local --- */
var DIRECCION="",HORARIO="",dd=$("cloDir"),hh=$("cloHor");  /* opcional: ej. DIRECCION="Calle 123, Ciudad" · HORARIO="Lun a Sáb de 9 a 21 hs" */
if(DIRECCION){dd.textContent=DIRECCION;dd.hidden=false}
if(HORARIO){hh.textContent=HORARIO;hh.hidden=false}
rvAll(Lo);

/* --- Clientes verificados ---
   Reseñas de EJEMPLO. Cambialas por las reales:
   [nombre, ciudad, producto comprado, comentario, estrellas (1 a 5)]
   PUNTAJE = el número que se muestra arriba (ej. "4.9") */
var PUNTAJE="4.9",
RS=[
["Micaela R.","Salta","Remera Basilio","Me llegó rapidísimo y la calidad es hermosa. El talle me quedó perfecto, ya estoy eligiendo la próxima.",5],
["Luciana G.","San Salvador de Jujuy","Pantalon Veracruz","Re cómodo y queda divino. La atención por Instagram fue súper amable, me ayudaron a elegir el talle.",5],
["Camila F.","Tucumán","Camisa Caron","La tela es muy linda y se ve igual que en las fotos. Superó mis expectativas, la recomiendo.",5],
["Agustina P.","Palpalá","Remera Miniminal","Fui al local, me la probé y me la llevé puesta. Atención 10 puntos y prendas hermosas.",5],
["Florencia S.","Córdoba","Pantalon Veracruz","Pagué por transferencia con el descuento y el envío fue gratis. Todo muy fácil y rápido.",5],
["Sofía M.","Orán","Camisa Caron","Necesité cambiar el talle y fue facilísimo. Se nota que les importa que una quede conforme.",5]
],
STR=function(n){var s="",k;for(k=1;k<=5;k++)s+='<svg class="sk f" viewBox="0 0 24 24" style="opacity:'+(k<=n?1:.25)+'"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';return s},
OKI='<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
$("cvfRt").textContent=PUNTAJE;$("cvfSt").innerHTML=STR(5);
$("cvfG").innerHTML=RS.map(function(r,i){return'<article class="cvf-card rv" style="--d:'+((i%3)*.12).toFixed(2)+'s"><div class="cvf-top"><span class="cvf-av">'+r[0].charAt(0)+'</span><span class="cvf-who"><strong>'+r[0]+'</strong><em>'+r[1]+'</em></span></div><span class="cvf-st">'+STR(r[4])+'</span><p class="cvf-tx">“'+r[3]+'”</p><div class="cvf-ft"><span class="cvf-pr">'+r[2]+'</span><span class="cvf-ok">'+OKI+'Compra verificada</span></div></article>'}).join("");
rvAll(Cv);

/* --- Preguntas frecuentes ---
   [pregunta, respuesta] · editá, agregá o borrá las que quieras */
var FQ=[
["¿Hacen envíos a todo el país?","Sí, hacemos envíos gratis a todo el país. Una vez confirmada tu compra te avisamos con el seguimiento de tu pedido."],
["¿Cómo puedo pagar?","Podés pagar con tarjetas de crédito, débito, Mercado Pago o transferencia bancaria."],
["¿Tienen cuotas sin interés?","Sí, tenés 3 cuotas sin interés con todas las tarjetas."],
["¿Hay descuento por transferencia?","Sí, pagando con transferencia tenés 10% OFF sobre el precio de lista."],
["¿Cómo sé qué talle elegir?","En cada producto vas a encontrar la información del talle. Si te queda alguna duda, escribinos por Instagram y te asesoramos."],
["¿Puedo cambiar o devolver una prenda?","Sí, los cambios son fáciles y rápidos. Escribinos y te guiamos paso a paso."],
["¿Tienen local físico?","Sí, podés venir a conocer las prendas y probártelas en persona. En la sección “Nuestro local” tenés el mapa y cómo llegar."],
["¿Cómo los contacto?","Por Instagram, en @compulsivas.indumentaria04, respondemos todas tus consultas."]
],PL='<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',fl=$("cfqL");
fl.innerHTML=FQ.map(function(f,i){return'<details class="cfq-it rv" style="--d:'+(Math.min(i,4)*.06).toFixed(2)+'s"><summary>'+f[0]+'<span class="cfq-pl">'+PL+'</span></summary><div class="cfq-a">'+f[1]+'</div></details>'}).join("");
[].forEach.call(fl.querySelectorAll("details"),function(d){d.addEventListener("toggle",function(){if(d.open)[].forEach.call(fl.querySelectorAll("details[open]"),function(o){if(o!==d)o.open=false})})});
rvAll(Fq);

/* --- Encabezado transparente --- */
var A='.js-announcement-bar,.announcement-bar,[class*="announcement"],[class*="advertising"]',H=null,fb=false,tm=null;
function hb(c){return c&&c!=="transparent"&&!/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)/.test(c)}
function mk(){
if(!H)return;var ww=H.offsetWidth;
[H].concat([].slice.call(H.querySelectorAll("*"))).forEach(function(e){
if(e!==H&&e.closest(A))return;if(e.classList.contains("cbn-bg"))return;if(e.offsetWidth<ww*.9)return;
if(hb(getComputedStyle(e).backgroundColor)){e.classList.add("cbn-bg");if(fb){H.classList.remove("cbn-fb");fb=false}}});
if(!H.querySelector(".cbn-bg")&&!H.classList.contains("cbn-bg")){H.classList.add("cbn-bg","cbn-fb");fb=true}}
function gh(){
if(H)return H;
H=D.querySelector(".js-head-main, header.head-main, .js-header, header.header, header");
if(!H)return null;
H.classList.add("cbn-hd");
var cs=getComputedStyle(H);
if(cs.position==="static"){H.style.position="sticky";H.style.top="0"}
if(!parseInt(cs.zIndex,10))H.style.zIndex="50";
mk();
if(W.MutationObserver){var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){mk();ft()},80)}).observe(H,{attributes:true,attributeFilter:["class","style"],subtree:true,childList:true})}
if(W.ResizeObserver)new ResizeObserver(function(){ft()}).observe(H);
return H}
function ft(){
var h=gh();if(!h)return;
var a=h.querySelector(A)||D.querySelector(A),ah=a?a.offsetHeight:0;
B.style.setProperty("--cbn-ann",ah+"px");
if((W.scrollY||W.pageYOffset)>1)return;
var tr=h.getBoundingClientRect().top+(a&&h.contains(a)?ah:0),mt=parseFloat(B.style.marginTop)||0,df=B.getBoundingClientRect().top-tr;
if(Math.abs(df)>1)B.style.marginTop=(mt-df)+"px"}
function sc(){
var t=(W.scrollY||W.pageYOffset)<30;
D.documentElement.classList.toggle("cbn-top",t);
if(t){clearTimeout(tm);tm=setTimeout(function(){mk();ft();raf(ft)},120)}}
D.documentElement.classList.add("cbn-top");
W.addEventListener("scroll",sc,{passive:true});
W.addEventListener("resize",function(){mk();ft()});
W.addEventListener("orientationchange",function(){setTimeout(function(){mk();ft()},300)});
W.addEventListener("load",function(){mk();ft();sc()});

/* --- Ubicar cada sección en su lugar --- */
function pb(){
var L=[".js-home-main-slider",".js-home-slider",".js-main-slider",".section-slider-home",".section-banner-home",".js-home-banners",".home-slider",".main-slider",".section-home-slider",'[data-store="home-slider"]','[data-store="home-banner"]',".swiper-container",".swiper"],t=null,k,n,c;
for(k=0;k<L.length;k++){t=D.querySelector(L[k]);if(t&&!B.contains(t))break;t=null}
if(t){n=t;while(n.parentElement&&!/^(MAIN|BODY)$/.test(n.parentElement.tagName)&&!n.parentElement.matches("#content, .js-home-sections-container, .js-content"))n=n.parentElement;if(n.previousElementSibling!==B)n.insertAdjacentElement("beforebegin",B)}
else{c=D.querySelector(".js-home-sections-container, #content, .js-content, main");if(c&&c.firstElementChild!==B)c.insertBefore(B,c.firstChild)}}
function af(s,r){if(r&&r.nextElementSibling!==s)r.insertAdjacentElement("afterend",s)}
function pl(){
pb();af(Bn,B);af(Ct,Bn);
var ps=D.querySelectorAll(".js-section-products-featured, .js-section-products-new, .js-section-products-sale");
af(So,ps.length?ps[ps.length-1]:Ct);af(Lo,So);af(Cv,Lo);af(Fq,Cv);
if([B,Bn,Ct,So,Lo,Cv,Fq].every(function(s){return s.parentNode!==w}))w.style.display="none";
ft()}
function ih(){pl();var k=0,t=setInterval(function(){pl();if(++k>25)clearInterval(t)},300);sc()}
if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",ih);else ih();
}
if($("cBanner"))initHome();

/* ====== TARJETAS DE PRODUCTO (todas las páginas) ====== */
var TD=.1,CU3=3,LG="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/",
TJ=["visa","mastercard","amex","ar/tarjeta-naranja","ar/cabal","mercadopago"].map(function(n){return'<img src="'+LG+n+'@2x.png" alt="" loading="lazy" onerror="this.remove()">'}).join("");
function pn(t){if(!t)return 0;var s=String(t).replace(/[^\d,\.]/g,"");if(!s)return 0;s=s.replace(/\./g,"").replace(",",".");var n=parseFloat(s);return isNaN(n)?0:n}
function ar(c){
if(c.querySelector(".cpc"))return;
var it=c.closest(".js-item-product");if(!it)return;
var pd=c.querySelector(".js-price-display");if(!pd)return;
var pr=parseFloat(pd.getAttribute("data-product-price"))/100;if(!pr)return;
var cp=c.querySelector(".js-compare-price-display"),an=cp?pn(cp.textContent):0,a=it.querySelector(".item-name a[href], .item-image a[href], a[href]");
c.insertAdjacentHTML("beforeend",'<div class="cpc">'+
'<div class="cpc-b cpc-l"><div class="cpc-f"><span class="cpc-i">'+S('<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h4M7 14h2"/>')+'</span><span class="cpc-tx"><span class="cpc-et">Precio de lista</span><span class="cpc-pr">'+fm(pr)+(an>pr?"<s>"+fm(an)+"</s>":"")+'</span></span></div></div>'+
'<div class="cpc-b cpc-t"><div class="cpc-f"><span class="cpc-i">'+S('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/>')+'</span><span class="cpc-tx"><span class="cpc-et">Transferencia · '+Math.round(TD*100)+'% OFF</span><strong>'+fm(pr*(1-TD))+'</strong></span></div></div>'+
'<div class="cpc-b cpc-q"><div class="cpc-f"><span class="cpc-i">'+S('<rect x="2.5" y="5" width="19" height="14" rx="2.2"/><path d="M2.5 10h19M6 15h4"/>')+'</span><span class="cpc-tx"><span class="cpc-et">'+CU3+' cuotas sin interés</span><strong>'+fm(pr/CU3)+'</strong></span></div><div class="cpc-tj">'+TJ+'</div></div>'+
'<a class="cpc-v" href="'+(a?a.getAttribute("href"):"#")+'">Ver más →</a></div>');
var n=c;while(n.parentElement&&n.parentElement!==it)n=n.parentElement;
(n.parentElement===it&&n!==it?n:it).classList.add("cpc-card")}
var pe=0;
function rn(){pe=0;[].forEach.call(D.querySelectorAll(".js-item-product .item-price-container"),ar)}
rn();W.addEventListener("load",rn);
new MutationObserver(function(){if(!pe){pe=1;raf(rn)}}).observe(D.body,{childList:true,subtree:true});

/* ====== BURBUJA DE COMPRAS (todas las páginas) ======
   Estas compras son de EJEMPLO para que veas cómo queda. Cambialas por tus ventas reales
   (nombre, ciudad y fecha son obligatorios).
   fecha real: "AAAA-MM-DDTHH:MM:00-03:00" · img y url opcionales (se toman de la tarjeta del producto)
   Ahora uso ag(minutos) que significa "hace X minutos" para que siempre se vean recientes.
   Las compras con más de 30 días no se muestran (MX). */
var TI="Compulsivas",MX=30,PR=6e3,VS=6500,E1=9e3,E2=15e3,
ag=function(m){return new Date(Date.now()-m*6e4).toISOString()},
CO=[
{nombre:"Valentina",ciudad:"Salta",producto:"Remera Miniminal",precio:23400,img:"",url:"",fecha:ag(8)},
{nombre:"Camila",ciudad:"San Salvador de Jujuy",producto:"Remera Basilio",precio:25900,img:"",url:"",fecha:ag(27)},
{nombre:"Lucía",ciudad:"Tucumán",producto:"Pantalon Veracruz",precio:39700,img:"",url:"",fecha:ag(55)},
{nombre:"Martina",ciudad:"Palpalá",producto:"Camisa Caron",precio:38900,img:"",url:"",fecha:ag(130)},
{nombre:"Julieta",ciudad:"Córdoba",producto:"Pantalon Veracruz",precio:39700,img:"",url:"",fecha:ag(260)},
{nombre:"Rocío",ciudad:"Orán",producto:"Remera Miniminal",precio:23400,img:"",url:"",fecha:ag(1500)}
];
try{if(sessionStorage.getItem("cpbOff")==="1")CO=[]}catch(e){}
var ah=Date.now(),LS=CO.filter(function(c){if(!c.nombre||!c.ciudad||!c.producto||!c.fecha)return false;var t=new Date(c.fecha).getTime();return t&&t<=ah&&ah-t<=MX*864e5});
if(LS.length)(function(){
var bx=D.createElement("div");
bx.className="cpb";bx.setAttribute("role","status");bx.setAttribute("aria-live","polite");
bx.innerHTML='<a class="cpb-link" href="/productos/"><span class="cpb-img"></span><span class="cpb-body"><span class="cpb-who"></span><span class="cpb-row"><span class="cpb-prod"></span><span class="cpb-price"></span></span><span class="cpb-time"><i></i><span></span></span></span></a><button class="cpb-x" type="button" aria-label="Cerrar">×</button><span class="cpb-bar"></span>';
var q=function(s){return bx.querySelector(s)},lk=q(".cpb-link"),ib=q(".cpb-img"),wh=q(".cpb-who"),pd=q(".cpb-prod"),pc=q(".cpb-price"),tt=q(".cpb-time span"),ix=Math.floor(Math.random()*LS.length),t=null,off=false,
BO=S('<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>');
function hc(f){var m=Math.max(1,Math.round((Date.now()-new Date(f).getTime())/6e4));if(m<60)return"hace "+m+" min";var h=Math.round(m/60);if(h<24)return"hace "+h+(h===1?" hora":" horas");var d=Math.round(h/24);return"hace "+d+(d===1?" día":" días")}
function bs(nm){
var its=D.querySelectorAll(".js-item-product"),k=nm.trim().toLowerCase(),i,e,im,a,src,ss;
for(i=0;i<its.length;i++){e=its[i].querySelector(".item-name");
if(e&&e.textContent.trim().toLowerCase()===k){
im=its[i].querySelector("img");a=its[i].querySelector("a[href]");src="";
if(im){src=im.getAttribute("data-src")||"";if(!src){ss=im.getAttribute("data-srcset")||im.getAttribute("srcset")||"";if(ss)src=ss.split(",")[0].trim().split(" ")[0]}if(!src||src.indexOf("data:")===0)src=im.currentSrc||im.src||""}
return{img:src,url:a?a.getAttribute("href"):""}}}
return{img:"",url:""}}
function pt(c){
var f=bs(c.producto),src=c.img||f.img;
ib.innerHTML="";
if(src){var im=D.createElement("img");im.alt=c.producto;im.onerror=function(){ib.innerHTML=BO};im.src=src;ib.appendChild(im)}else ib.innerHTML=BO;
wh.textContent="";wh.appendChild(D.createTextNode(c.nombre+" de "));
var b=D.createElement("b");b.textContent=c.ciudad;wh.appendChild(b);wh.appendChild(D.createTextNode(" compró"));
pd.textContent=c.producto;pc.textContent=fm(c.precio);tt.textContent=hc(c.fecha)+" · "+TI;
lk.href=c.url||f.url||"/productos/"}
function sh(){
if(off)return;
if(D.hidden){t=setTimeout(sh,3e3);return}
pt(LS[ix]);ix=(ix+1)%LS.length;
bx.style.setProperty("--cpb-t",(VS/1e3)+"s");
bx.classList.remove("on");void bx.offsetWidth;bx.classList.add("on");
t=setTimeout(function(){bx.classList.remove("on");t=setTimeout(sh,E1+Math.random()*(E2-E1))},VS)}
bx.addEventListener("mouseenter",function(){clearTimeout(t)});
bx.addEventListener("mouseleave",function(){clearTimeout(t);t=setTimeout(function(){bx.classList.remove("on");t=setTimeout(sh,E1)},2500)});
q(".cpb-x").addEventListener("click",function(){off=true;clearTimeout(t);bx.classList.remove("on");try{sessionStorage.setItem("cpbOff","1")}catch(e){}});
function go(){D.body.appendChild(bx);t=setTimeout(sh,PR)}
if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",go);else go();
})();
})();
</script>
