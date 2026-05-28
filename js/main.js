/* =========================================================
   LAINEKER — interacciones
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Project data ---------- */
  const PROJECTS = [
    {
      id: 'casa-meconi',
      name: 'Casa Meconi',
      cat: 'Residencial',
      loc: 'Vivienda unifamiliar · 2024',
      cover: 'img/casa-meconi/1.jpg',
      facts: [
        ['Tipología', 'Residencial'],
        ['Año', '2024'],
        ['Programa', 'Vivienda unifamiliar'],
        ['Alcance', 'Interiorismo integral']
      ],
      gallery: [
        { src: 'img/casa-meconi/2.jpg', full: true },
        { src: 'img/casa-meconi/3.jpg', full: true },
        { src: 'img/casa-meconi/4.jpg', full: true },
        { src: 'img/casa-meconi/5.jpg', full: false },
        { src: 'img/casa-meconi/6.jpg', full: false }
      ],
      intro: 'El objetivo central de este proyecto era lograr un hogar cálido y a su vez moderno. Este último se incorporó con colores plenos y neutros, líneas y texturas simples, logrando así un hogar funcional con espacios limpios y tranquilos. Complementamos detalles y mobiliario en madera para darle esa calidez que un hogar necesita.',
      body: 'El segundo requisito era lograr el máximo lugar de guardado posible: debajo de la escalera se diseñaron muebles empotrados donde se ubican el lavadero y la despensa, un rack extendido y una estantería. Casa Meconi es habitada por una pequeña familia que quiere crear recuerdos y vivencias por mucho tiempo.'
    },
    {
      id: 'cafe-bolivar',
      name: 'Café–Heladería Bolívar',
      cat: 'Comercial',
      loc: 'Estación reciclada · 2024',
      cover: 'img/cafe-bolivar/01.jpg',
      facts: [
        ['Tipología', 'Comercial · Gastronomía'],
        ['Año', '2024'],
        ['Programa', 'Café y heladería'],
        ['Alcance', 'Diseño de espacio + ambientación']
      ],
      gallery: [
        { src: 'img/cafe-bolivar/02.jpg', full: true },
        { src: 'img/cafe-bolivar/03.jpg', full: false },
        { src: 'img/cafe-bolivar/04.jpg', full: false },
        { src: 'img/cafe-bolivar/05.jpg', full: true },
        { src: 'img/cafe-bolivar/06.jpg', full: false },
        { src: 'img/cafe-bolivar/07.jpg', full: false },
        { src: 'img/cafe-bolivar/08.jpg', full: true },
        { src: 'img/cafe-bolivar/09.jpg', full: false },
        { src: 'img/cafe-bolivar/10.jpg', full: false },
        { src: 'img/cafe-bolivar/11.jpg', full: false },
        { src: 'img/cafe-bolivar/12.jpg', full: false }
      ],
      intro: 'El café y la heladería se implantan en una antigua estación de ómnibus abandonada, rescatada por el municipio para convertirla en un centro comercial. Allí el cliente tiene dos locales —un café y una heladería— y buscaba que ambos reflejaran el aspecto antiguo que muestra la estación.',
      body: 'Como punto de partida tuvimos en cuenta los materiales que se conservaron del edificio, como el hierro y el ladrillo, y quisimos exhibir elementos de la época para lograr una correcta ambientación. Desde lo funcional, resolvimos que tanto el café como la heladería tuvieran acceso desde el interior y desde el exterior.'
    },
    {
      id: 'agencia-escudero',
      name: 'Agencia Federico Escudero',
      cat: 'Comercial',
      loc: 'Viajes y turismo · 2024',
      cover: 'img/agencia-turismo/01.jpg',
      facts: [
        ['Tipología', 'Comercial · Oficina'],
        ['Año', '2024'],
        ['Programa', 'Agencia de viajes'],
        ['Alcance', 'Interiorismo integral']
      ],
      gallery: [
        { src: 'img/agencia-turismo/02.jpg', full: true },
        { src: 'img/agencia-turismo/03.jpg', full: false },
        { src: 'img/agencia-turismo/04.jpg', full: false },
        { src: 'img/agencia-turismo/05.jpg', full: true },
        { src: 'img/agencia-turismo/06.jpg', full: true },
        { src: 'img/agencia-turismo/07.jpg', full: false },
        { src: 'img/agencia-turismo/08.jpg', full: false },
        { src: 'img/agencia-turismo/09.jpg', full: false },
        { src: 'img/agencia-turismo/10.jpg', full: false }
      ],
      intro: 'El cliente buscaba un espacio donde se integraran la atención al público, un sector privado y una sala de estar que pudiera funcionar tanto de espera como de reunión final previa al viaje.',
      body: 'Se utilizó como base de pintura un fondo blanco y gris, simulando el cemento alisado. A partir de esto pudimos llevar los colores del logo a todos los detalles. A su vez incorporamos la madera para dar calidez y armonía a todo el proyecto.'
    },
    {
      id: 'showroom-effimat',
      name: 'Showroom Effimat',
      cat: 'Comercial',
      loc: 'Materiales constructivos · 2024',
      cover: 'img/showroom-effimat/04.jpg',
      facts: [
        ['Tipología', 'Comercial · Showroom'],
        ['Año', '2024'],
        ['Programa', 'Showroom de materiales'],
        ['Alcance', 'Diseño de espacio comercial']
      ],
      gallery: [
        { src: 'img/showroom-effimat/01.jpg', full: true },
        { src: 'img/showroom-effimat/05.jpg', full: true },
        { src: 'img/showroom-effimat/02.jpg', full: false },
        { src: 'img/showroom-effimat/03.jpg', full: false }
      ],
      intro: 'Un showroom para una empresa de materiales constructivos, pensado para exhibir el producto de forma clara y ordenada desde la propia vidriera.',
      body: 'El recorrido se organiza por usos —Home, Work, Cold, Depot— sobre un muro expositor de muestras, acompañado de un puesto de atención. Los acentos en rojo de la marca animan una base neutra y luminosa.'
    },
    {
      id: 'reforma-piriz',
      name: 'Reforma Piriz',
      cat: 'Residencial',
      loc: 'Cocina y baño · 2024',
      cover: 'img/reforma-piriz/04.jpg',
      facts: [
        ['Tipología', 'Residencial · Reforma'],
        ['Año', '2024'],
        ['Programa', 'Cocina y baño'],
        ['Alcance', 'Reforma integral']
      ],
      gallery: [
        { src: 'img/reforma-piriz/05.jpg', full: true },
        { src: 'img/reforma-piriz/06.jpg', full: false },
        { src: 'img/reforma-piriz/07.jpg', full: false },
        { src: 'img/reforma-piriz/08.jpg', full: true },
        { src: 'img/reforma-piriz/bano-01.png', full: false },
        { src: 'img/reforma-piriz/bano-02.png', full: false },
        { src: 'img/reforma-piriz/bano-03.png', full: true }
      ],
      intro: 'En el plano original, la cocina tenía un lavadero separado por un muro. La reforma planteó integrar ambos ambientes en uno solo, ubicando la secadora y el lavarropas dentro de un mueble.',
      body: 'El objetivo de los clientes era una cocina cómoda para cocinar, con el máximo lugar de guardado posible y un desayunador al paso. Aunque el espacio era reducido, se logró una cocina luminosa, de líneas simples y muy funcional, con materiales que aportan elegancia y calidez, sumando estantes visibles, repisas y cuadros.'
    },
    {
      id: 'atico-borne',
      name: 'Ático Born',
      cat: 'Residencial',
      loc: 'Barcelona · 2024',
      ratio: 'r-34',
      year: '2024',
      surface: '145 m²',
      role: 'Reforma integral',
      intro: 'Recuperación de un ático en el casco antiguo, donde la estructura original de vigas convive con una intervención contemporánea y discreta.',
      body: 'Se liberó la envolvente para devolver protagonismo a la luz y a las vistas sobre los tejados del Born. El mobiliario, en gran parte de diseño propio, ordena el espacio sin cerrarlo.',
      gallery: ['r-32','r-32','r-23','r-32']
    },
    {
      id: 'restaurante-sal',
      name: 'Restaurante Sal',
      cat: 'Comercial',
      loc: 'Girona · 2025',
      ratio: 'r-54',
      year: '2025',
      surface: '210 m²',
      role: 'Diseño de espacio + identidad espacial',
      intro: 'Un restaurante de producto de proximidad donde la materia prima dicta también la materialidad del local.',
      body: 'Barro, lino y maderas sin tratar dialogan con una iluminación de bajo nivel que dramatiza la experiencia de mesa. El proyecto se entendió como una continuación del relato gastronómico.',
      gallery: ['r-32','r-23','r-32','r-23']
    },
    {
      id: 'casa-duna',
      name: 'Casa Duna',
      cat: 'Residencial',
      loc: 'Begur · 2023',
      ratio: 'r-32',
      year: '2023',
      surface: '410 m²',
      role: 'Arquitectura + interiorismo',
      intro: 'Vivienda de costa que se mimetiza con el paisaje mediterráneo a través de la piedra local y los blancos rotos.',
      body: 'La planta se escalona siguiendo la topografía para minimizar el impacto y maximizar las vistas al mar. Interior y exterior se funden mediante grandes paños de carpintería oculta.',
      gallery: ['r-169','r-32','r-23','r-32']
    },
    {
      id: 'oficinas-volta',
      name: 'Oficinas Volta',
      cat: 'Corporativo',
      loc: 'Barcelona · 2024',
      ratio: 'r-23',
      year: '2024',
      surface: '680 m²',
      role: 'Espacio de trabajo',
      intro: 'Sede corporativa pensada como un paisaje de trabajo flexible, lejos del lenguaje de oficina convencional.',
      body: 'Acústica, biofilia y una gradación de espacios —del foco a la conversación— estructuran el programa. La madera y los textiles suavizan la escala industrial del edificio existente.',
      gallery: ['r-32','r-32','r-23','r-32']
    },
    {
      id: 'apartamento-eixample',
      name: 'Piso Eixample',
      cat: 'Residencial',
      loc: 'Barcelona · 2023',
      ratio: 'r-11',
      year: '2023',
      surface: '120 m²',
      role: 'Reforma + interiorismo',
      intro: 'Rehabilitación de un piso modernista respetando sus pavimentos hidráulicos y molduras originales.',
      body: 'La intervención contemporánea se inserta como una pieza de mobiliario tonal que articula cocina y salón sin competir con el patrimonio existente.',
      gallery: ['r-32','r-23','r-23','r-32']
    },
    {
      id: 'hotel-ardal',
      name: 'Hotel Ardal',
      cat: 'Hospitality',
      loc: 'Cadaqués · 2025',
      ratio: 'r-34',
      year: '2025',
      surface: '1.200 m²',
      role: 'Concepto + interiorismo',
      intro: 'Un hotel boutique de catorce habitaciones que reinterpreta la artesanía del Empordà en clave contemporánea.',
      body: 'Cada espacio común se concibió como una estancia doméstica a escala ampliada. La cal, la cerámica vidriada y el mimbre tejen una hospitalidad cálida y sin artificio.',
      gallery: ['r-169','r-23','r-32','r-32']
    },
    {
      id: 'casa-pati',
      name: 'Casa Pati',
      cat: 'Residencial',
      loc: 'Sitges · 2024',
      ratio: 'r-54',
      year: '2024',
      surface: '260 m²',
      role: 'Arquitectura + interiorismo',
      intro: 'Vivienda organizada en torno a un patio central que regula la luz y la temperatura de toda la casa.',
      body: 'El patio actúa como corazón climático y social. Los materiales —travertino, encina y estuco— se eligieron por su comportamiento térmico y su capacidad de envejecer bien.',
      gallery: ['r-32','r-23','r-32','r-23']
    },
    {
      id: 'showroom-linea',
      name: 'Showroom Línea',
      cat: 'Comercial',
      loc: 'Madrid · 2023',
      ratio: 'r-32',
      year: '2023',
      surface: '340 m²',
      role: 'Retail + escenografía',
      intro: 'Espacio expositivo para una firma de mobiliario, planteado como una secuencia de atmósferas habitables.',
      body: 'Una estructura modular de podios y cortinas permite reconfigurar el showroom según la colección. La neutralidad cromática deja que el producto sea el único protagonista.',
      gallery: ['r-32','r-32','r-23','r-32']
    }
  ];

  const CATS = ['Todos', 'Residencial', 'Comercial', 'Corporativo', 'Hospitality'];

  /* ---------- Helpers ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const phLabel = (p, n) => `Render ${String(n).padStart(2, '0')} · ${p.name}`;

  function cardHTML(p) {
    const media = p.cover
      ? `<img class="card__img" src="${p.cover}" alt="${p.name} — Estudio Laineker" loading="lazy">`
      : `<div class="ph ${p.ratio}" data-label="${p.name} — foto principal"></div>`;
    return `<a class="card" data-id="${p.id}" data-cat="${p.cat}" href="javascript:void(0)" aria-label="Ver proyecto ${p.name}">
      <div class="card__media">
        ${media}
        <span class="card__view">Ver proyecto <span aria-hidden="true">→</span></span>
      </div>
      <div class="card__meta">
        <div>
          <div class="card__name">${p.name}</div>
          <div class="card__loc">${p.loc}</div>
        </div>
        <div class="card__cat">${p.cat}</div>
      </div>
    </a>`;
  }

  /* ---------- Render masonry ---------- */
  function renderMasonry(host, list) {
    host.innerHTML = list.map(cardHTML).join('');
    bindCards(host);
    revealScan(host);
  }

  function bindCards(scope) {
    $$('.card', scope).forEach(c => {
      c.addEventListener('click', () => openProject(c.dataset.id));
    });
  }

  /* ---------- Project modal ---------- */
  let modal, lastFocus;
  function buildModal() {
    modal = document.createElement('div');
    modal.className = 'pm';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="pm__bar">
        <span class="ttl" data-pm="bar"></span>
        <button class="pm__close" data-pm="close">Cerrar <span class="x" aria-hidden="true">✕</span></button>
      </div>
      <div class="pm__scroll" data-pm="scroll"></div>`;
    document.body.appendChild(modal);
    $('[data-pm="close"]', modal).addEventListener('click', closeProject);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeProject();
    });
  }

  function projectMarkup(p) {
    const next = PROJECTS[(PROJECTS.findIndex(x => x.id === p.id) + 1) % PROJECTS.length];
    const real = !!p.cover;

    let facts;
    if (p.facts) {
      facts = p.facts.map(f =>
        `<div class="pm__fact"><div class="k">${f[0]}</div><div class="v">${f[1]}</div></div>`).join('');
    } else {
      facts = `
        <div class="pm__fact"><div class="k">Tipología</div><div class="v">${p.cat}</div></div>
        <div class="pm__fact"><div class="k">Ubicación</div><div class="v">${p.loc.split(' · ')[0]}</div></div>
        <div class="pm__fact"><div class="k">Año</div><div class="v">${p.year}</div></div>
        <div class="pm__fact"><div class="k">Superficie</div><div class="v">${p.surface}</div></div>
        <div class="pm__fact" style="grid-column:1/-1"><div class="k">Alcance</div><div class="v">${p.role}</div></div>`;
    }

    let hero, gal;
    if (real) {
      hero = `<img src="${p.cover}" alt="${p.name} — Estudio Laineker">`;
      gal = p.gallery.map(g =>
        `<img class="${g.full ? 'g-full' : ''}" src="${g.src}" alt="${p.name} — render" loading="lazy">`).join('');
    } else {
      hero = `<div class="ph" data-label="${p.name} — imagen de portada"></div>`;
      gal = p.gallery.map((r, i) => {
        const full = (r === 'r-169' || r === 'r-32');
        return `<div class="ph ${r} ${full ? 'g-full' : ''}" data-label="${phLabel(p, i + 2)}"></div>`;
      }).join('');
    }

    return `
      <div class="pm__hero">${hero}</div>
      <div class="pm__head">
        <h2 class="pm__title">${p.name}</h2>
        <div class="pm__facts">${facts}</div>
      </div>
      <div class="pm__body"><p>${p.intro}</p><p>${p.body}</p></div>
      <div class="pm__gallery pm__g2">${gal}</div>
      <div class="pm__next" data-next="${next.id}">
        <div><div class="lbl">Siguiente proyecto</div><div class="nm">${next.name}</div></div>
        <span aria-hidden="true" style="font-family:var(--serif);font-size:2rem">→</span>
      </div>`;
  }

  function openProject(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    if (!modal) buildModal();
    lastFocus = document.activeElement;
    $('[data-pm="bar"]', modal).textContent = 'LAINEKER — ' + p.name;
    const scroll = $('[data-pm="scroll"]', modal);
    scroll.innerHTML = projectMarkup(p);
    scroll.scrollTop = 0;
    $('[data-next]', modal).addEventListener('click', function () {
      openProject(this.dataset.next);
    });
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    $('[data-pm="close"]', modal).focus();
  }

  function closeProject() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- Filters ---------- */
  function initFilters() {
    const bar = $('[data-filters]');
    const host = $('[data-masonry="all"]');
    if (!bar || !host) return;
    bar.innerHTML = CATS.map((c, i) =>
      `<button aria-pressed="${i === 0}" data-cat="${c}">${c}</button>`).join('');
    bar.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('button', bar).forEach(x => x.setAttribute('aria-pressed', x === b));
      const cat = b.dataset.cat;
      const list = cat === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
      renderMasonry(host, list);
    });
  }

  /* ---------- Scroll reveal ---------- */
  let io;
  function revealAll(scope) {
    $$('[data-reveal]', scope).forEach(el => el.classList.add('in'));
  }
  function inView(el) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * 0.95 && r.bottom > 0;
  }
  function initReveal() {
    // No IO support → show everything.
    if (!('IntersectionObserver' in window)) { revealAll(document); return; }
    io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealScan(document);
    // Safety net: if the observer never fires (some embedded/preview contexts),
    // force-reveal anything still hidden so the site is never blank.
    setTimeout(() => revealAll(document), 1400);
  }
  function revealScan(scope) {
    if (!io) { revealAll(scope); return; }
    $$('[data-reveal]', scope).forEach(el => {
      if (el.classList.contains('in')) return;
      if (inView(el)) { el.classList.add('in'); return; } // already visible on load
      io.observe(el);
    });
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const nav = $('.nav');
    if (!nav) return;
    const onDark = nav.classList.contains('on-dark');
    const set = () => {
      const solid = window.scrollY > 40;
      nav.classList.toggle('is-solid', solid);
    };
    set();
    window.addEventListener('scroll', set, { passive: true });

    const burger = $('.burger'), menu = $('.menu');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      $$('a', menu).forEach(a => a.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      }));
    }
  }

  /* ---------- Counters ---------- */
  function initCounters() {
    const nums = $$('[data-count]');
    if (!nums.length) return;
    const obs = new IntersectionObserver((ent) => {
      ent.forEach(e => {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        const el = e.target, target = parseFloat(el.dataset.count), dur = 1400;
        const suf = el.dataset.suf || '';
        const t0 = performance.now();
        (function step(t) {
          const k = Math.min(1, (t - t0) / dur);
          const val = Math.floor((1 - Math.pow(1 - k, 3)) * target);
          el.firstChild ? el.childNodes[0].nodeValue = val : el.textContent = val;
          if (k < 1) requestAnimationFrame(step);
          else el.childNodes[0].nodeValue = target;
        })(t0);
      });
    }, { threshold: 0.6 });
    nums.forEach(n => obs.observe(n));
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    const form = $('[data-form]');
    if (!form) return;
    const chips = $$('.chips button', form);
    chips.forEach(b => b.addEventListener('click', () => {
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true');
    }));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = $('.form-msg', form);
      const name = form.querySelector('[name="nombre"]').value.trim();
      if (!name) { msg.textContent = 'Por favor, dinos tu nombre.'; return; }
      msg.textContent = 'Gracias, ' + name.split(' ')[0] + '. Te responderemos en menos de 48 h.';
      form.reset();
      chips.forEach(b => b.setAttribute('aria-pressed', 'false'));
      $$('.field', form).forEach(f => f.classList.remove('filled'));
    });
    // select label state
    $$('.field select', form).forEach(s => {
      const sync = () => s.closest('.field').classList.toggle('filled', !!s.value);
      s.addEventListener('change', sync); sync();
    });
  }

  /* ---------- Year ---------- */
  function initYear() {
    $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initCounters();
    initForm();
    initYear();
    initFilters();

    const preview = $('[data-masonry="preview"]');
    if (preview) renderMasonry(preview, PROJECTS.slice(0, 6));

    const all = $('[data-masonry="all"]');
    if (all) renderMasonry(all, PROJECTS);

    // deep-link ?proyecto=id
    const q = new URLSearchParams(location.search).get('proyecto');
    if (q) setTimeout(() => openProject(q), 350);
  });
})();
