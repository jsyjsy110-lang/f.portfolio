(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();class v{constructor(a){this.onComplete=a,this.container=document.createElement("div"),this.container.className="scene intro-scene full-screen"}mount(a){a.appendChild(this.container),this.render(),this.animate()}render(){this.container.innerHTML=`
      <div class="intro-content">
        <div class="intro-brand">S.</div>
        <div class="loader-track">
          <div class="loader-bar"></div>
        </div>
        <div class="intro-text">
          <span class="status-text">INITIALIZING SYSTEM</span>
        </div>
      </div>
    `;const a=document.createElement("style");a.innerHTML=`
      .intro-scene {
        background: black;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw; height: 100vh;
        position: fixed; top: 0; left: 0;
      }
      
      .intro-brand {
        font-family: var(--font-display);
        font-size: 3rem; color: white;
        margin-bottom: 40px;
        opacity: 0;
        animation: fadeUp 0.5s forwards;
      }
      
      .intro-content {
        text-align: center;
        width: 300px;
      }
      
      .loader-track {
        width: 100%;
        height: 4px;
        background: #333;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;
        border-radius: 2px;
      }
      .loader-bar {
        position: absolute;
        left: -100%;
        width: 100%;
        height: 100%;
        background: white;
        box-shadow: 0 0 10px white;
      }
      
      .status-text {
        font-family: var(--font-body);
        font-size: 0.8rem;
        color: #888;
        letter-spacing: 2px;
      }
      
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,this.container.appendChild(a)}animate(){this.container.querySelector(".loader-bar").animate([{left:"-100%"},{left:"0%"}],{duration:1500,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"}).finished.then(()=>{setTimeout(()=>{this.container.animate([{opacity:1},{opacity:0}],{duration:500,fill:"forwards"}).finished.then(()=>{this.unmount(),this.onComplete()})},300)})}unmount(){this.container.remove()}}class d{constructor(a){this.onNavigate=a,this.container=document.createElement("div"),this.container.className="scene home-scene"}mount(a){a.appendChild(this.container),this.render(),this.addEventListeners()}render(){this.container.innerHTML=`
      <div class="frosted-window">
         <!-- Tech Header -->
         <div class="window-header">
             <div class="hud-left">
                 <span class="hud-label">SYS.ONLINE</span>
                 <div class="hud-bar-anim"></div>
             </div>
             <div class="hud-center">
                 <span class="logo-text">JSY // PROTOCOL</span>
             </div>
             <div class="hud-right">
                 <span class="time-display">2024.CYBER</span>
                 <div class="status-light"></div>
             </div>
         </div>

         <div class="window-body">
             <!-- Cyber Sidebar -->
             <aside class="tech-sidebar">
                 <div class="nav-item active" data-nav="home">
                     <span class="nav-idx">01</span>
                     <span class="nav-label">BASE</span>
                 </div>
                 <div class="nav-item" data-nav="works">
                     <span class="nav-idx">02</span>
                     <span class="nav-label">WORKS</span>
                 </div>
                 <div class="nav-item" data-nav="about">
                     <span class="nav-idx">03</span>
                     <span class="nav-label">DATA</span>
                 </div>
                 <div class="nav-item" data-nav="contact">
                     <span class="nav-idx">04</span>
                     <span class="nav-label">LINK</span>
                 </div>
                 
                 <div class="sidebar-decor">
                     <div class="decor-line"></div>
                     <span class="decor-code">V.4.2</span>
                 </div>
             </aside>

             <!-- Main Content: Tech Dashboard -->
             <main class="dashboard-content scroll-area">
                 <!-- Top Data Strip -->
                 <div class="data-strip">
                     <div class="data-block">
                         <span class="d-label">PROJECTS</span>
                         <span class="d-val">24</span>
                     </div>
                     <div class="data-block">
                         <span class="d-label">STATUS</span>
                         <span class="d-val active">ONLINE</span>
                     </div>
                     <div class="data-block">
                         <span class="d-label">AVAILABILITY</span>
                         <span class="d-val">OPEN</span>
                     </div>
                 </div>

                 <div class="hero-grid">
                     <!-- Main Hero -->
                     <div class="hero-panel glass-panel">
                         <div class="h-content">
                             <div class="h-tag">INTERFACE DESIGN</div>
                             <h1>FUTURE<br>VISION.</h1>
                             <p>Constructing digital realities with precision engineering.</p>
                             <button class="cy-btn" data-nav="works">INITIALIZE GALLERY >></button>
                         </div>
                         <div class="h-graphic">
                             <!-- CSS Arc Reactor -->
                             <div class="arc-container">
                                 <div class="arc-ring r1"></div>
                                 <div class="arc-ring r2"></div>
                                 <div class="arc-core"></div>
                             </div>
                         </div>
                     </div>

                     <!-- Stats & Info -->
                     <div class="side-panel glass-panel">
                         <div class="panel-header">SYSTEM LOG</div>
                         <div class="log-list">
                             <div class="log-item"><span>> UI Update</span><span class="log-time">Now</span></div>
                             <div class="log-item"><span>> New Project</span><span class="log-time">2d</span></div>
                             <div class="log-item"><span>> Sys Check</span><span class="log-time">Ok</span></div>
                         </div>
                     </div>
                 </div>

                 <!-- Modules Grid -->
                 <div class="modules-row">
                     <div class="module-card glass-panel" data-nav="works">
                         <div class="m-head">MODULE A</div>
                         <div class="m-body" style="background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600')"></div>
                         <div class="m-foot">WEB APP // <span class="cyan">ACTIVE</span></div>
                     </div>
                     <div class="module-card glass-panel" data-nav="works">
                         <div class="m-head">MODULE B</div>
                         <div class="m-body" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600')"></div>
                         <div class="m-foot">3D ASSET // <span class="cyan">READY</span></div>
                     </div>
                     <div class="module-card glass-panel long" data-nav="contact">
                         <div class="m-head">COMMUNICATION</div>
                         <div class="contact-preview">
                             <span>ESTABLISH CONNECTION</span>
                             <button class="link-btn">CONNECT</button>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;const a=document.createElement("style");a.innerHTML=`
      .hud-left, .hud-right { display: flex; align-items: center; gap: 10px; font-family: 'Rajdhani'; font-weight: 600; color: var(--text-secondary); }
      .hud-bar-anim { width: 40px; height: 4px; background: var(--tech-cyan); animation: pulse-width 2s infinite; }
      .logo-text { font-family: 'Orbitron'; font-weight: 700; letter-spacing: 2px; color: var(--text-primary); }
      .status-light { width: 8px; height: 8px; background: #00ff66; border-radius: 50%; box-shadow: 0 0 10px #00ff66; }
      
      @keyframes pulse-width { 0%, 100% { width: 10px; opacity: 0.5; } 50% { width: 40px; opacity: 1; } }

      .window-body { flex: 1; display: flex; overflow: hidden; }
      
      /* Sidebar Tech */
      .tech-sidebar {
        width: 100px; border-right: 1px solid rgba(0, 195, 255, 0.3); background: rgba(255,255,255,0.3);
        display: flex; flex-direction: column; padding: 40px 0;
      }
      .nav-item {
        display: flex; flex-direction: column; align-items: center; padding: 20px 0;
        cursor: pointer; color: var(--text-secondary); transition: 0.2s; position: relative;
      }
      .nav-item:hover, .nav-item.active { color: var(--tech-blue); background: rgba(255,255,255,0.5); }
      .nav-item.active::after { content: ''; position: absolute; right: 0; top: 0; height: 100%; width: 3px; background: var(--tech-cyan); }
      
      .nav-idx { font-size: 0.7rem; font-weight: 700; opacity: 0.5; }
      .nav-label { font-family: 'Orbitron'; font-size: 0.8rem; letter-spacing: 1px; margin-top: 5px; }
      
      .sidebar-decor { margin-top: auto; padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 5px; opacity: 0.5; }
      .decor-line { width: 1px; height: 40px; background: var(--text-secondary); }

      .dashboard-content { flex: 1; padding: 30px; display: flex; flex-direction: column; gap: 20px; }
      
      /* Data Strip */
      .data-strip { display: flex; gap: 20px; margin-bottom: 10px; }
      .data-block { 
          background: rgba(255,255,255,0.4); border: 1px solid rgba(0, 195, 255, 0.3);
          padding: 10px 20px; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
          display: flex; flex-direction: column; min-width: 120px;
      }
      .d-label { font-size: 0.7rem; color: var(--text-secondary); letter-spacing: 1px; }
      .d-val { font-family: 'Orbitron'; font-size: 1.2rem; font-weight: 700; color: var(--tech-blue); }
      .d-val.active { color: var(--tech-cyan); text-shadow: 0 0 10px rgba(0,195,255,0.5); }

      /* Hero Grid */
      .hero-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; height: 350px; }
      
      .hero-panel { display: flex; justify-content: space-between; padding: 40px; }
      .h-content { display: flex; flex-direction: column; justify-content: center; z-index: 2; }
      .h-tag { color: var(--tech-cyan); font-weight: 700; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 10px; }
      h1 { font-family: 'Orbitron'; font-size: 3.5rem; line-height: 0.9; color: var(--text-primary); margin-bottom: 20px; }
      .cy-btn {
          margin-top: 20px; background: transparent; border: 1px solid var(--tech-blue); color: var(--tech-blue);
          padding: 12px 25px; font-weight: 700; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
          transition: 0.2s; align-self: flex-start;
      }
      .cy-btn:hover { background: var(--tech-blue); color: white; box-shadow: 0 0 20px rgba(0,102,255,0.4); }

      .h-graphic { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; }
      .arc-container { width: 200px; height: 200px; position: relative; display: flex; justify-content: center; align-items: center; }
      .arc-ring { position: absolute; border-radius: 50%; border: 2px solid transparent; }
      .r1 { width: 100%; height: 100%; border-top: 2px solid var(--tech-cyan); border-bottom: 2px solid var(--tech-cyan); animation: spin 8s linear infinite; }
      .r2 { width: 70%; height: 70%; border-left: 2px solid var(--tech-blue); border-right: 2px solid var(--tech-blue); animation: spin-rev 5s linear infinite; }
      .arc-core { width: 40%; height: 40%; background: radial-gradient(circle, var(--tech-cyan), transparent); opacity: 0.5; animation: pulse 2s infinite; }
      
      @keyframes spin { 100% { transform: rotate(360deg); } }
      @keyframes spin-rev { 100% { transform: rotate(-360deg); } }
      @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }

      /* Side Panel */
      .side-panel { padding: 20px; display: flex; flex-direction: column; }
      .panel-header { font-family: 'Orbitron'; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 10px; margin-bottom: 15px; color: var(--text-primary); }
      .log-item { display: flex; justify-content: space-between; font-family: 'Rajdhani'; font-size: 0.95rem; margin-bottom: 10px; border-bottom: 1px dashed rgba(0,0,0,0.05); padding-bottom: 5px; }
      .log-time { color: var(--tech-cyan); font-weight: 600; }

      /* Modules */
      .modules-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; flex: 1; }
      .module-card { padding: 15px; display: flex; flex-direction: column; cursor: pointer; }
      .m-head { font-family: 'Orbitron'; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px; }
      .m-body { flex: 1; background-size: cover; background-position: center; border-radius: 4px; border: 1px solid rgba(0,195,255,0.2); }
      .m-foot { margin-top: 10px; font-size: 0.8rem; font-weight: 700; display: flex; justify-content: space-between; }
      .cyan { color: var(--tech-cyan); }
      
      .long { grid-column: span 1; background: linear-gradient(135deg, rgba(0,195,255,0.1), rgba(255,255,255,0.4)); }
      .contact-preview { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 15px; }
      .link-btn { background: var(--tech-blue); color: white; border: none; padding: 8px 30px; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px); font-weight: bold; }

      @media (max-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr; height: auto; }
        .modules-row { grid-template-columns: 1fr; }
        .tech-sidebar { width: 60px; } .nav-label { display: none; }
      }
    `,this.container.appendChild(a)}addEventListeners(){this.container.querySelectorAll("[data-nav]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.onNavigate(a.dataset.nav)})})}unmount(){this.container.remove()}}class g{constructor(a){this.onBack=a,this.container=document.createElement("div"),this.container.className="scene works-scene",this.projects=[{id:1,title:"Crystal Brewing",category:"Product Design",img:"projects/crystal.png",size:"large"},{id:2,title:"Air Capsule",category:"Industrial",img:"projects/air_capsule.png",size:"tall"},{id:3,title:"Around Sound",category:"Audio Device",img:"projects/around_sound_1.png",size:"medium"},{id:4,title:"Sound Concept",category:"3D Visual",img:"projects/around_sound_2.png",size:"medium"},{id:5,title:"Ethereal Shapes",category:"Visual Art",img:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",size:"small"},{id:6,title:"Winter Void",category:"Concept",img:"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800",size:"small"}]}mount(a){a.appendChild(this.container),this.render(),this.addEventListeners(),this.container.animate([{opacity:0,transform:"scale(0.98)"},{opacity:1,transform:"scale(1)"}],{duration:400,easing:"ease-out"})}render(){this.container.innerHTML=`
      <div class="frosted-window">
         <!-- Window Header -->
         <div class="window-header">
             <div class="browser-actions">
                 <span class="dot white-glass"></span><span class="dot white-glass"></span>
             </div>
             <div class="address-bar glass-panel">
                 <span class="sparkle-icon">✨</span> portfolio.com/works
             </div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <!-- Sidebar -->
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">Home</div>
                 <div class="sidebar-icon active" data-nav="works">Works</div>
                 <div class="sidebar-icon" data-nav="about">About</div>
                 <div class="sidebar-icon" data-nav="contact">Contact</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <!-- Main Content -->
             <main class="dashboard-content scroll-area">
                 <!-- Back Button (Internal) -->
                 <button class="close-action-btn" id="close-scene">
                    <span class="close-icon">←</span> Back
                 </button>

                 <div class="gallery-header">
                     <div class="gh-left">
                        <h2>Featured Projects</h2>
                        <p>A collection of industrial and digital design.</p>
                     </div>
                     <div class="filter-pills">
                        <span class="pill active">All</span>
                        <span class="pill">Product</span>
                        <span class="pill">Visual</span>
                     </div>
                 </div>

                 <!-- Masonry-like Grid -->
                 <div class="gallery-masonry">
                     ${this.projects.map(s=>`
                        <div class="masonry-item ${s.size} glass-panel">
                            <div class="m-img-wrapper" style="background-image: url('${s.img}')">
                                <div class="m-overlay">
                                    <button class="view-btn">View Details</button>
                                </div>
                            </div>
                            <div class="m-info">
                                <h3>${s.title}</h3>
                                <span>${s.category}</span>
                            </div>
                        </div>
                     `).join("")}
                 </div>
             </main>
         </div>
      </div>
    `;const a=document.createElement("style");a.innerHTML=`
      .gallery-header {
        display: flex; justify-content: space-between; align-items: flex-end;
        margin-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom: 20px;
      }
      .gh-left h2 { font-size: 2rem; color: #526f85; font-weight: 300; margin-bottom: 5px; }
      .gh-left p { color: #8da4b8; }
      
      .filter-pills { display: flex; gap: 10px; }
      .pill {
        padding: 8px 18px; border-radius: 20px; border: 1px solid white;
        background: rgba(255,255,255,0.3); color: #526f85; cursor: pointer; transition: 0.2s;
      }
      .pill.active, .pill:hover { background: white; color: #8ecae6; box-shadow: 0 4px 10px rgba(161, 196, 253, 0.2); }
      
      .gallery-masonry {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        grid-auto-flow: dense;
      }
      
      .masonry-item {
        background: rgba(255,255,255,0.25); border: 1px solid white;
        padding: 15px; display: flex; flex-direction: column;
        transition: 0.3s; break-inside: avoid;
      }
      .masonry-item:hover { transform: translateY(-5px); background: rgba(255,255,255,0.5); box-shadow: 0 10px 30px rgba(161, 196, 253, 0.2); }
      
      /* Sizes for Masonry feel */
      .large { grid-column: span 2; grid-row: span 2; }
      .tall { grid-row: span 2; }
      .medium { grid-column: span 1; }
      
      .m-img-wrapper {
        flex: 1; min-height: 200px;
        border-radius: 12px; background-size: cover; background-position: center;
        position: relative; overflow: hidden; margin-bottom: 15px;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
      }
      .large .m-img-wrapper { min-height: 400px; }
      .tall .m-img-wrapper { min-height: 400px; }
      
      .m-overlay {
        position: absolute; top:0; left:0; width:100%; height:100%;
        background: rgba(255,255,255,0.2); backdrop-filter: blur(3px);
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: 0.3s;
      }
      .m-img-wrapper:hover .m-overlay { opacity: 1; }
      
      .view-btn {
        background: white; color: #526f85; border: none; padding: 10px 20px;
        border-radius: 20px; font-weight: 600; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }
      
      .m-info h3 { font-size: 1.2rem; color: #526f85; margin-bottom: 5px; font-weight: 500; }
      .m-info span { font-size: 0.9rem; color: #8da4b8; }

      @media (max-width: 900px) {
        .large, .tall { grid-column: span 1; grid-row: span 1; }
        .m-img-wrapper { min-height: 250px !important; }
      }
    `,this.container.appendChild(a)}addEventListeners(){this.container.querySelector("#close-scene").addEventListener("click",a=>{a.stopPropagation(),this.onBack()}),this.container.querySelectorAll('[data-nav="home"]').forEach(a=>{a.addEventListener("click",s=>{this.onBack()})})}unmount(){this.container.remove()}}class h{constructor(a){this.onBack=a,this.container=document.createElement("div"),this.container.className="scene about-scene"}mount(a){a.appendChild(this.container),this.render(),this.addEventListeners(),this.container.animate([{opacity:0,transform:"scale(0.98)"},{opacity:1,transform:"scale(1)"}],{duration:300})}render(){this.container.innerHTML=`
      <div class="frosted-window">
         <!-- Close Button -->
         <button class="close-action-btn" id="close-scene">
            <span class="close-icon">←</span> Back
         </button>

         <div class="window-header">
             <div class="browser-actions">
                 <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
             </div>
             <div class="address-bar glass-panel">portfolio.com/blue/about</div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">⚡</div>
                 <div class="sidebar-icon" data-nav="works">❖</div>
                 <div class="sidebar-icon active" data-nav="about">☺</div>
                 <div class="sidebar-icon" data-nav="contact">✉</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <main class="dashboard-content scroll-area">
                 <div class="about-grid">
                     <div class="glass-widget profile-main">
                         <div class="cover-photo"></div>
                         <div class="profile-info">
                             <div class="profile-avatar"></div>
                             <h2>JSY</h2>
                             <p class="role-tag">Creative Developer & Designer</p>
                             <p class="bio-short">
                                 "디지털 경험에 감성을 불어넣습니다."<br>
                                 사용자의 시선을 사로잡는 인터랙션과 직관적인 UI를 설계하며,<br>
                                 기술과 예술의 경계를 허무는 웹 경험을 만듭니다.
                             </p>
                         </div>
                     </div>

                     <div class="glass-widget skills-widget">
                         <h3>Core Skills</h3>
                         <div class="skill-tags">
                             <span class="tag">React</span><span class="tag">TypeScript</span>
                             <span class="tag">Figma</span><span class="tag">Python</span>
                         </div>
                         <div class="skill-bars">
                             <div class="bar-label"><span>Design System</span><span>95%</span></div>
                             <div class="progress-track"><div class="progress-fill" style="width:95%"></div></div>
                             
                             <div class="bar-label"><span>Frontend</span><span>90%</span></div>
                             <div class="progress-track"><div class="progress-fill" style="width:90%"></div></div>
                         </div>
                     </div>

                     <div class="glass-widget experience-widget">
                         <h3>Experience</h3>
                         <div class="timeline-item">
                             <div class="t-date">2023</div>
                             <div class="t-content">
                                 <h4>Senior Dev</h4>
                                 <p>BlueCorp Inc.</p>
                             </div>
                         </div>
                         <div class="timeline-item">
                             <div class="t-date">2021</div>
                             <div class="t-content">
                                 <h4>Designer</h4>
                                 <p>Freelance</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;const a=document.createElement("style");a.innerHTML=`
      .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-bottom: 20px; }
      
      .glass-widget { background: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.6); border-radius: 20px; padding: 25px; color: var(--text-primary); }
      .glass-widget h3 { font-size: 1.1rem; margin-bottom: 15px; color: var(--accent-primary); }
      
      .profile-main { grid-row: span 2; display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; padding: 0; }
      .cover-photo { width: 100%; height: 100px; background: linear-gradient(to right, #60a5fa, #3b82f6); }
      .profile-info { padding: 25px; margin-top: -50px; display: flex; flex-direction: column; align-items: center; }
      .profile-avatar { width: 90px; height: 90px; border-radius: 50%; background: #eee; border: 4px solid white; margin-bottom: 15px; background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'); background-size: cover; }
      .role-tag { background: rgba(59,130,246,0.1); color: var(--accent-primary); padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; margin-bottom: 15px; font-weight: 600; }
      .bio-short { color: var(--text-secondary); line-height: 1.5; font-size: 0.9rem; }
      
      .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
      .tag { background: white; padding: 6px 12px; border-radius: 8px; font-size: 0.85rem; color: var(--text-secondary); box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      
      .progress-track { width: 100%; height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; margin-bottom: 15px; }
      .progress-fill { height: 100%; background: var(--accent-primary); border-radius: 3px; }
      
      .timeline-item { display: flex; gap: 15px; margin-bottom: 15px; border-left: 2px solid rgba(59,130,246,0.2); padding-left: 15px; }
      .t-date { font-weight: bold; color: var(--accent-primary); width: 50px; }
      .t-content h4 { font-size: 0.95rem; margin-bottom: 2px; }
      .t-content p { font-size: 0.85rem; color: var(--text-secondary); }

      @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } .profile-main { grid-row: auto; } }
    `,this.container.appendChild(a)}addEventListeners(){this.container.querySelector("#close-scene").addEventListener("click",a=>{this.onBack()}),this.container.querySelectorAll('[data-nav="home"]').forEach(a=>{a.addEventListener("click",s=>{this.onBack()})})}unmount(){this.container.remove()}}class m{constructor(a){this.onBack=a,this.container=document.createElement("div"),this.container.className="scene contact-scene"}mount(a){a.appendChild(this.container),this.render(),this.addEventListeners(),this.container.animate([{opacity:0,transform:"translateY(20px)"},{opacity:1,transform:"translateY(0)"}],{duration:300})}render(){this.container.innerHTML=`
      <div class="frosted-window">
         <!-- Close Button -->
         <button class="close-action-btn" id="close-scene">
            <span class="close-icon">←</span> Back
         </button>

         <div class="window-header">
             <div class="browser-actions">
                 <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
             </div>
             <div class="address-bar glass-panel">portfolio.com/blue/contact</div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">⚡</div>
                 <div class="sidebar-icon" data-nav="works">❖</div>
                 <div class="sidebar-icon" data-nav="about">☺</div>
                 <div class="sidebar-icon active" data-nav="contact">✉</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <main class="dashboard-content chat-layout">
                 <div class="chat-container glass-panel">
                     <div class="chat-sidebar">
                        <div class="search-bar"><input type="text" placeholder="Search..."></div>
                        <div class="chat-list">
                            <div class="chat-item active">
                                <div class="c-avatar">J</div>
                                <div class="c-info"><h4>J. Blue</h4><p>Online</p></div>
                            </div>
                        </div>
                     </div>
                     <div class="chat-main">
                         <div class="chat-header">
                             <h3>Conversation</h3>
                             <span class="status">Active</span>
                         </div>
                         <div class="chat-messages">
                             <div class="msg received"><p>Hello! How can I help you today?</p></div>
                         </div>
                         <div class="chat-input-area">
                             <input type="text" placeholder="Type a message..." id="msg-input">
                             <button class="send-btn">Send</button>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;const a=document.createElement("style");a.innerHTML=`
      .chat-layout { display: flex; justify-content: center; align-items: center; padding: 40px; height: 100%; }
      .chat-container { width: 100%; height: 100%; display: flex; overflow: hidden; background: rgba(255,255,255,0.4); border-radius: 16px; }
      
      .chat-sidebar { width: 250px; background: rgba(255,255,255,0.3); border-right: 1px solid rgba(255,255,255,0.5); display: flex; flex-direction: column; }
      .search-bar { padding: 20px; }
      .search-bar input { width: 100%; padding: 10px; border-radius: 12px; border: none; background: white; }
      .chat-item { display: flex; gap: 10px; padding: 15px; cursor: pointer; transition: 0.2s; }
      .chat-item.active { background: white; }
      .c-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--accent-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
      
      .chat-main { flex: 1; display: flex; flex-direction: column; }
      .chat-header { padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.2); }
      .status { font-size: 0.8rem; color: #27c93f; }
      
      .chat-messages { flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 15px; overflow-y: auto; }
      .msg { max-width: 70%; padding: 12px 18px; border-radius: 15px; font-size: 0.95rem; }
      .received { background: white; color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      .sent { background: var(--accent-primary); color: white; align-self: flex-end; border-bottom-right-radius: 2px; box-shadow: 0 2px 5px rgba(59,130,246,0.3); }
      
      .chat-input-area { padding: 20px; background: rgba(255,255,255,0.5); display: flex; gap: 10px; }
      .chat-input-area input { flex: 1; padding: 12px; border-radius: 20px; border: none; background: white; }
      .send-btn { background: var(--accent-primary); color: white; border: none; padding: 0 20px; border-radius: 20px; font-weight: bold; cursor: pointer; }
      
      @media (max-width: 768px) { .chat-sidebar { display: none; } }
    `,this.container.appendChild(a)}addEventListeners(){this.container.querySelector("#close-scene").addEventListener("click",i=>{this.onBack()}),this.container.querySelectorAll('[data-nav="home"]').forEach(i=>{i.addEventListener("click",r=>{this.onBack()})});const a=this.container.querySelector("#msg-input"),s=this.container.querySelector(".send-btn"),n=this.container.querySelector(".chat-messages"),t=()=>{if(!a.value.trim())return;const i=document.createElement("div");i.className="msg sent",i.innerHTML=`<p>${a.value}</p>`,n.appendChild(i),n.scrollTop=n.scrollHeight,a.value=""};s.addEventListener("click",t),a.addEventListener("keypress",i=>{i.key==="Enter"&&t()})}unmount(){this.container.remove()}}const b="/f.portfolio/bg-pastel-water.jpg";document.documentElement.style.setProperty("--bg-url",`url('${b}')`);console.log("App initialized");window.onerror=function(e,a,s){const n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;background:red;color:white;z-index:9999;padding:20px;",n.innerText=`Error: ${e} at line ${s}`,document.body.appendChild(n)};const u=document.querySelector("#app");let c=null;function f(){const e=new v(()=>{o(d,l)});p(e)}function p(e){c&&c.unmount(),e.mount(u),c=e}function o(e,...a){const s=new e(...a);p(s)}function l(e){console.log("Navigating to:",e),e==="works"||e==="visual"?o(g,()=>o(d,l)):e==="about"||e==="story"?o(h,()=>o(d,l)):e==="contact"&&o(m,()=>o(d,l))}f();
