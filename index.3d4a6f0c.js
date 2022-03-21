const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};d();const p="WIGGUM RESCUES BOY NO, REALLY",a=["Avocado Times","La Opini\xF3n de Javascripy","La Gaceta del Frontend","La Manzguardia","El rinc\xF3n de Vite","El Developer","ManzDev Today","El Explorer","Manzoverflow","The ${News}","The JS Tribune","Heraldo de GitHub"],s=["oldman.jpg","abe-simpson.jpg","bender.jpg","hans-topo.jpg","ralph-wiggum.jpg","wiii.jpg","homer-clown.jpg","bart-meme.jpg","sr-burns-paz.jpg","homer-sofa.jpg","no-lloren.jpg","homer-uranio.jpg","ned-flanders.jpg","homer-stuck.jpg","homer-intelectual.jpg"];class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}get newspaperName(){const r=Math.floor(Math.random()*a.length);return a[r]}get randomImage(){const r=Math.floor(Math.random()*s.length);return s[r]}static get styles(){return`
      :host {
        --paper-color: #d5d5d5;
        --paper-gradient: linear-gradient(to bottom, transparent 92%, #0008 99%);
        --ink-color: #180205;
        --width: 550px;
      }

      .container {
        background: var(--paper-color);
        color: var(--ink-color);
        width: var(--width);
        border-radius: 5px 5px 25px 5px;
        border: 4px solid #333;
        position: relative;
        background-image: url(https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg);
        mix-blend-mode: luminosity;
        overflow: hidden;
      }

      /* bottom shadow */
      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        background-image: var(--paper-gradient);
      }

      .container::before {
        content: "";
        background: var(--paper-color);
        background-image:
          repeating-linear-gradient(to right, transparent 0 2px, #333 2px 5px),
          var(--paper-gradient);
        border: 4px solid #333;
        display: block;
        position: absolute;
        top: -2px;
        right: -15px;
        width: 25px;
        height: 99%;
        z-index: -1;
        border-radius: 0 0 50px 0 / 0 0 80px 0;
      }

      header,
      .content {
        margin: 0 2em;
      }

      h1 {
        font-family: Chomsky;
        font-weight: lighter;
        text-align: center;
        line-height: 70%;
        letter-spacing: -2px;
        font-size: 5rem;
        margin: 0.3em 0;
        color: #212121;
        mix-blend-mode: multiply;
      }

      hr {
        border: 0;
        border-bottom: 2px solid var(--ink-color);
      }

      .subtitle {
        display: flex;
        justify-content: space-between;
      }

      .subtitle p {
        font-family: "Libre Baskerville";
        margin: 0;
      }

      h2 {
        font-family: "League Gothic";
        font-size: 3.75rem;
        font-weight: bold;
        text-align: center;
        margin: 0.2em 0;
        line-height: 100%;
      }

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        gap: 20px;
        margin-bottom: 1em;
      }

      .content img {
        max-width: 175px;
        filter: grayscale(100%);
        border: 2px solid #444;
      }

      .content .picture span {
        font-family: "Linux Libertine";
        font-style: italic;
        font-size: 0.8rem;
        color: #333;
      }

      .content p {
        font-family: "Linux Libertine";
        font-size: 1rem;
        margin: 0;
        text-align: left;
      }

      /* Animation */
      .container {
        animation: spin 2s ease-in-out 1;
      }

      @keyframes spin {
        0% {
          transform: scale(0) rotate(0deg);
        }

        100% {
          transform: scale(1) rotate(720deg);
        }
      }
    `}connectedCallback(){this.title=this.getAttribute("title")||p,this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <header>
        <h1>${this.newspaperName}</h1>
        <hr>
        <div class="subtitle">
          <p>DAILY NEWS</p>
          <p>0,50\u20AC</p>
        </div>
        <hr>
        <h2>${this.title}</h2>
      </header>
      <div class="content">
        <p>Desarrollador descubre que la finalidad potencial de un programador es convertir el caf\xE9 y la pizza en c\xF3digo. Se ha mostrado indignado al no haberse dado cuenta antes de este hecho.</p>
        <div class="picture">
          <img src="images/${this.randomImage}" alt="image">
          <span>Standard Javascript Developer</span>
        </div>
        <p>En otro orden de cosas, el pasado martes falleci\xF3 un programador backend. El cuerpo sin vida se hall\xF3 en su propia vivienda, frente a un libro titulado \xABJavascript sin tipos\xBB.</p>
      </div>
    </div>`}}customElements.define("manz-newspaper",n);
