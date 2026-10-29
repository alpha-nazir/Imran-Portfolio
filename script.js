/* ==========================================================
   script.js - reads data.js and builds the page.
   Usually you do NOT need to edit this file.
   ========================================================== */
(function () {
  const D = PORTFOLIO;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- 1. Simple text bindings: data-bind="name" ---------- */
  $$("[data-bind]").forEach(el => {
    const v = D[el.dataset.bind];
    if (v !== undefined) el.textContent = v;
  });
  document.title = `${D.name} | ${D.role} Portfolio`;
  $("#heroPhoto").src = D.photo;
  $("#heroPhoto").alt = `Portrait of ${D.name}`;
  $("#year").textContent = new Date().getFullYear();
  $$("[data-cv]").forEach(a => a.href = D.cv);

  /* ---------- 2. Social icons ---------- */
  const ICONS = {
    github: "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z",
    linkedin: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zM7.1 20.5H3.6V9h3.5v11.5z",
    twitter: "M18.9 2H22l-7.3 8.4L23 22h-6.7l-5.2-6.8L5 22H2l7.8-9L1.4 2h6.9l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z",
    instagram: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"
  };
  const socialHTML = Object.entries(D.social || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24"><path d="${ICONS[k]}"/></svg></a>`)
    .join("");
  $$("[data-socials]").forEach(el => el.innerHTML = socialHTML);

  /* ---------- 3. About ---------- */
  $("#aboutText").innerHTML = D.about.map(p => `<p>${p}</p>`).join("");
  $("#aboutExp").textContent = D.aboutStats.experience;
  $("#codeName").textContent = `"${D.name.split("-")[0]}"`;
  if (D.aboutImage) {
    const v = $("#aboutVisual");
    v.innerHTML = "";
    v.style.backgroundImage = `url(${D.aboutImage})`;
    v.style.aspectRatio = "4 / 3";
  }

  /* ---------- 4. Skills ---------- */
  const skillLimit = D.visibleSkills || 4;
  let skillsExpanded = false;
  const renderSkills = () => {
    const list = skillsExpanded ? D.skills : D.skills.slice(0, skillLimit);
    $("#skillsGrid").innerHTML = list.map(s => `
      <div class="card skill reveal">
        <div class="skill-ico"><img src="${s.img || `assets/icons/${s.icon}.svg`}" alt="${s.name} logo" loading="lazy" /></div>
        <h4>${s.name}</h4>
        <div class="bar"><i data-level="${s.level}"></i></div>
        <div class="pct">${s.level}%</div>
      </div>`).join("");
    // missing icon file -> show first letter instead
    $$("#skillsGrid .skill-ico img").forEach((img, i) => img.addEventListener("error", () => {
      img.parentElement.textContent = list[i].name.charAt(0);
    }));
    const btn = $("#skillsMore");
    btn.hidden = D.skills.length <= skillLimit;
    btn.textContent = skillsExpanded ? "Show Less" : `View All Skills (${D.skills.length})`;
    if (typeof reveal !== "undefined") $$("#skillsGrid .reveal").forEach(el => reveal.observe(el));
  };
  renderSkills();
  $("#skillsMore").addEventListener("click", () => { skillsExpanded = !skillsExpanded; renderSkills(); });

  /* ---------- 5. Projects ---------- */
  const projectCard = (p, extra = "") => `
    <article class="card project-card ${extra}" data-cat="${p.category}">
      <div class="thumb" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
        <span class="ico">${p.icon}</span>
        ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />` : ""}
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="links">
          <a href="${p.live}" target="_blank" rel="noopener">Live Demo ↗</a>
          <a href="${p.code}" target="_blank" rel="noopener" class="sec">Code</a>
        </div>
      </div>
    </article>`;

  $("#featuredGrid").innerHTML = D.projects.filter(p => p.featured).slice(0, 3)
    .map(p => projectCard(p, "reveal")).join("");

  const projLimit = D.visibleProjects || 4;
  let projFilter = "All", projExpanded = false;
  const renderProjects = () => {
    const list = D.projects.filter(p => projFilter === "All" || p.category === projFilter);
    const shown = projExpanded ? list : list.slice(0, projLimit);
    $("#projectsGrid").innerHTML = shown.map(p => projectCard(p, "pop")).join("");
    const btn = $("#projectsMore");
    btn.hidden = list.length <= projLimit;
    btn.textContent = projExpanded ? "Show Less" : `View All Projects (${list.length})`;
  };

  const cats = ["All", ...new Set(D.projects.map(p => p.category))];
  $("#filters").innerHTML = cats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}" role="tab">${c}</button>`).join("");

  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    projFilter = btn.dataset.filter;
    projExpanded = false;
    renderProjects();
  });
  $("#projectsMore").addEventListener("click", () => { projExpanded = !projExpanded; renderProjects(); });
  renderProjects();

  /* ---------- 6. Navbar: scroll state, active link, mobile menu ---------- */
  const navbar = $("#navbar"), toggle = $("#menuToggle"), links = $("#navLinks"), toTop = $("#toTop");
  const closeMenu = () => { links.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", scrollY > 20);
    toTop.classList.toggle("show", scrollY > 600);
  }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const navAnchors = $$(".nav-links a[href^='#']:not(.btn)");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id === "featured" ? "projects" : en.target.id;
        navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  /* ---------- 7. Reveal on scroll + animated skill bars ---------- */
  $$(".hero-text, .hero-visual, .about-text, .about-visual").forEach(el => el.classList.add("reveal"));
  var reveal = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      const bar = $(".bar i", en.target);
      if (bar) bar.style.width = bar.dataset.level + "%";
      reveal.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach(el => reveal.observe(el));

  /* ---------- 8. Contact form (validation + opens email app) ---------- */
  const form = $("#contactForm"), note = $("#formNote");
  const rules = {
    name:    v => v.trim().length >= 2 || "Please enter your name",
    email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email",
    message: v => v.trim().length >= 10 || "Message should be at least 10 characters"
  };
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    Object.keys(rules).forEach(k => {
      const field = form.elements[k], res = rules[k](field.value);
      field.classList.toggle("invalid", res !== true);
      field.parentElement.querySelector(".err").textContent = res === true ? "" : res;
      if (res !== true) ok = false;
    });
    if (!ok) return;
    const { name, email, message } = form.elements;
    const subject = encodeURIComponent(`Portfolio message from ${name.value}`);
    const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`);
    window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
    note.textContent = "Thanks! Your email app is opening ✔";
    form.reset();
    setTimeout(() => (note.textContent = ""), 5000);
  });
})();
