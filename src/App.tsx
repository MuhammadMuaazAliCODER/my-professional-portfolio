import { useEffect, useState } from 'react'
import './App.css'
import './portrait.css'

const currentYear = new Date().getFullYear()

const projects = [
  {
    number: '01', name: 'Sokvia', descriptor: 'COMMUNICATION · COLLABORATION',
    description: 'A collaborative communication platform built by a university team, bringing conversations, community features, and shared challenges into one product.',
    contribution: 'A collaborative university team project. This case study presents the shared product and architecture without claiming sole authorship.',
    stack: ['React', 'TypeScript', 'FastAPI', 'MongoDB Atlas', 'Cloudinary'],
    live: 'https://sokvia.vercel.app/', source: 'https://github.com/MuhammadMuaazAliCODER/sokvia-cn-lab',
    visual: 'sokvia-visual', visualLabel: 'A collaborative product, built across the stack',
  },
  {
    number: '02', name: '3M Cart', descriptor: 'COMMERCE · API ARCHITECTURE',
    description: 'A full-stack e-commerce experience pairing a Next.js frontend with a Python-powered API and managed data and media services.',
    contribution: 'The architecture separates the customer-facing frontend, Django REST API, Supabase-hosted PostgreSQL, and Cloudinary media.',
    stack: ['Next.js', 'Django REST Framework', 'PostgreSQL', 'Supabase', 'Cloudinary'],
    live: 'https://m3store-frontend.vercel.app/', visual: 'cart-visual',
    visualLabel: 'Frontend, API, database, and media architecture',
  },
  {
    number: '03', name: 'ChatByMuaaz', descriptor: 'MESSAGING · DEPLOYMENT',
    description: 'A real-time messaging product exploring authentication, direct and group conversations, and the practical work of running a web application in production.',
    contribution: 'Deployed on AWS EC2 with Nginx and PM2. Product capabilities are presented as implementation areas, not a claim that every feature is currently operational.',
    stack: ['JavaScript', 'MongoDB Atlas', 'JWT', 'AWS EC2', 'Nginx', 'PM2'],
    live: 'https://chatbymuaaz.vercel.app/', source: 'https://github.com/MuhammadMuaazAliCODER/ChatByMuaaz',
    visual: 'chat-visual', visualLabel: 'Messaging infrastructure and deployment flow',
  },
]

const expertise = [
  { label: '01 / FRONTEND', items: 'React, Next.js, JavaScript, TypeScript, HTML, CSS' },
  { label: '02 / BACKEND', items: 'Node.js, Express.js, Python, Django, FastAPI' },
  { label: '03 / DATA', items: 'PostgreSQL, MongoDB' },
  { label: '04 / ENGINEERING', items: 'REST APIs, integrations, authentication, CRUD systems, debugging, Git, Postman' },
  { label: '05 / INFRASTRUCTURE', items: 'AWS EC2, Nginx, PM2, Vercel, Cloudinary, environment configuration' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ kind, label }: { kind: string; label: string }) {
  if (kind === 'sokvia-visual') return (
    <div className={`project-visual ${kind}`} role="img" aria-label={label}>
      <div className="visual-index">S / 01</div><div className="sokvia-orbit orbit-one" /><div className="sokvia-orbit orbit-two" />
      <div className="sokvia-core">S</div><div className="visual-caption">A SHARED SPACE<br />FOR GOOD IDEAS</div>
      <div className="visual-disclaimer">CONCEPTUAL VISUAL / NOT A PRODUCT SCREENSHOT</div>
      <div className="visual-rail">MESSAGES <i /> GROUPS <i /> CHALLENGES</div>
    </div>
  )

  if (kind === 'cart-visual') return (
    <div className={`project-visual ${kind}`} role="img" aria-label={label}>
      <div className="visual-index">SYSTEM / 02</div>
      <div className="architecture">
        <div className="arch-node"><small>01 / EXPERIENCE</small><strong>Next.js</strong></div>
        <div className="arch-link"><span>REST</span></div>
        <div className="arch-node"><small>02 / APPLICATION</small><strong>Django REST</strong></div>
        <div className="arch-services"><div><small>03 / DATA</small><strong>PostgreSQL</strong><em>via Supabase</em></div><div><small>04 / MEDIA</small><strong>Cloudinary</strong><em>asset delivery</em></div></div>
      </div>
      <div className="visual-caption">A CLEAR CONTRACT<br />BETWEEN THE LAYERS</div>
      <div className="visual-disclaimer">CONCEPTUAL VISUAL / NOT A PRODUCT SCREENSHOT</div>
    </div>
  )

  return (
    <div className={`project-visual ${kind}`} role="img" aria-label={label}>
      <div className="visual-index">DEPLOYMENT / 03</div>
      <div className="chat-console">
        <div className="console-top"><span /><span /><span /><b>chat / production</b></div>
        <div className="console-line"><i>01</i><span>client</span><b>↔</b><span>application server</span></div>
        <div className="console-line"><i>02</i><span>JWT</span><b>→</b><span>verified session</span></div>
        <div className="console-line"><i>03</i><span>Nginx</span><b>→</b><span>application process · PM2</span></div>
        <div className="console-line"><i>04</i><span>messages</span><b>↔</b><span>MongoDB Atlas</span></div>
      </div>
      <div className="visual-caption">FROM LOCAL CODE<br />TO A LIVE SERVICE</div>
      <div className="visual-disclaimer">CONCEPTUAL VISUAL / NOT A PRODUCT SCREENSHOT</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Muhammad Muaaz Ali, home">M<span>.</span>MA</a>
        <button aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} type="button"><span /><span /></button>
        <nav id="site-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact <Arrow diagonal /></a>
        </nav>
        <div className="header-location"><span /> LAHORE, PK</div>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /></div>
          <div className="hero-topline reveal-on-load"><p>MUHAMMAD MUAAZ ALI <span>·</span> FULL STACK DEVELOPER</p><p className="hero-edition">LAHORE, PAKISTAN / 2026</p></div>
          <div className="hero-main"><div className="hero-title-wrap"><p className="hero-kicker reveal-on-load delay-one">DESIGNING FOR WHAT HAPPENS UNDERNEATH.</p><h1 id="hero-title" className="reveal-on-load delay-two">Building digital<br />experiences that<br /><em>work beyond</em><br />the surface<span className="period">.</span></h1></div>
            <div className="hero-aside reveal-on-load delay-three"><p>I build full-stack web applications, connect complex systems, and turn ideas into dependable software.</p><div className="hero-actions"><a className="button button-light" href="#work">Explore my work <Arrow /></a><a className="text-link" href="#contact">Let’s discuss a project <Arrow diagonal /></a></div><div className="hero-note"><span>01</span> FULL STACK, FROM FIRST SCREEN TO DEPLOYMENT</div></div>
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /><span>SCROLL TO UNLOCK</span><span className="scroll-count">01 — 06</span></a><div className="hero-index" aria-hidden="true">MUAaz ALI <span>©</span> DEVELOPER</div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading" data-reveal><div><p className="eyebrow">SELECTED WORK <span> / CASE STUDIES</span></p><h2 id="work-title">Built with intent.<br /><em>Made to work.</em></h2></div><p className="section-intro">Three different problems. One consistent approach: understand the system, make the connections work, and pay attention to the details people actually use.</p></div>
          <div className="project-list">{projects.map((project) => <article className={`project project-${project.number}`} key={project.name} data-reveal>
            <div className="project-meta"><span>{project.number} / 03</span><span>{project.descriptor}</span></div>
            <a className="project-visual-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live site`}><ProjectVisual kind={project.visual} label={project.visualLabel} /><span className="visual-open"><Arrow diagonal /></span></a>
            <div className="project-details"><div className="project-copy"><h3>{project.name}<span className="project-dot">.</span></h3><p>{project.description}</p><p className="project-contribution">{project.contribution}</p></div><div className="project-specs"><p className="eyebrow">STACK / SERVICES</p><ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Visit live project <Arrow diagonal /></a>{project.source && <a href={project.source} target="_blank" rel="noreferrer">View source <Arrow diagonal /></a>}</div></div></div>
          </article>)}</div>
        </section>

        <section className="expertise-section section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="expertise-top" data-reveal><p className="eyebrow">CAPABILITIES / THE TOOLKIT</p><p className="expertise-side-note">Connected skills are more useful<br />than isolated technologies.</p></div>
          <div className="expertise-title-row" data-reveal><h2 id="expertise-title">Across the<br /><em>whole stack.</em></h2><p>From interface to infrastructure, I work across the parts that make an application feel like one coherent product.</p></div>
          <div className="expertise-list">{expertise.map((group) => <div className="expertise-row" key={group.label} data-reveal><h3>{group.label}</h3><p>{group.items}</p><span aria-hidden="true">+</span></div>)}</div>
          <div className="service-line"><span>AVAILABLE FOR</span><p>Full-stack features <i>·</i> Frontend implementation <i>·</i> API integration <i>·</i> Backend development <i>·</i> Bug fixing &amp; maintenance <i>·</i> Deployment troubleshooting</p></div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="about-label" data-reveal><p className="eyebrow">A LITTLE ABOUT ME</p><figure className="portrait"><img src="/me.jpeg" alt="Portrait of Muhammad Muaaz Ali" width="768" height="1024" decoding="async" /><figcaption>MUHAMMAD MUAAZ ALI <span>·</span> LAHORE, PAKISTAN</figcaption></figure><span className="about-coordinates">LAHORE<br />31° 32′ N / 74° 21′ E</span></div>
          <div className="about-content" data-reveal><h2 id="about-title">Curious by nature.<br /><em>Responsible by choice.</em></h2><p className="about-copy">I’m Muhammad Muaaz Ali, a Full Stack Web Developer and BSCS student at UET Lahore. I enjoy working across the stack—from shaping interfaces to designing APIs, integrating databases, and deploying applications. I care about solving real problems, writing maintainable code, and continuously improving the products I build.</p><div className="about-detail"><span>BASED IN</span><strong>Lahore, Pakistan</strong></div></div>
        </section>

        <section className="experience-section section-pad" aria-labelledby="experience-title">
          <div className="experience-heading" data-reveal><p className="eyebrow">THE WORK IN PROGRESS</p><h2 id="experience-title">Practice makes<br /><em>perspective.</em></h2></div>
          <div className="timeline-entry" data-reveal><span className="timeline-date">JUNE 2025 — PRESENT</span><div><h3>Professional development</h3><p>Building and improving full-stack applications through hands-on project work, from interface implementation and API design to database integration and deployment.</p><span className="timeline-note">INDEPENDENT &amp; COLLABORATIVE PROJECTS</span></div><span className="timeline-mark" aria-hidden="true" /></div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline" data-reveal><p className="eyebrow">THE NEXT GOOD THING STARTS HERE</p><span>OPEN A CONVERSATION / 06</span></div>
          <div className="contact-main" data-reveal><h2 id="contact-title">Have something<br /><em>worth building?</em></h2><div className="contact-copy"><p>Need a new feature, a reliable developer for your existing application, or help connecting your frontend and backend? Let’s discuss the problem.</p><a className="button button-light contact-button" href="mailto:muaazaliwork@gmail.com?subject=Let%E2%80%99s%20discuss%20a%20project">Start a conversation <Arrow diagonal /></a></div></div>
          <div className="contact-links" data-reveal><a href="mailto:muaazaliwork@gmail.com"><span>EMAIL</span>muaazaliwork@gmail.com <Arrow diagonal /></a><a href="https://www.linkedin.com/in/muhammad-muaaz-ali" target="_blank" rel="noreferrer"><span>LINKEDIN</span>Connect on LinkedIn <Arrow diagonal /></a><a href="https://github.com/MuhammadMuaazAliCODER" target="_blank" rel="noreferrer"><span>GITHUB</span>Explore the code <Arrow diagonal /></a></div>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-name" href="#home">MUHAMMAD MUAAZ ALI</a><span>FULL STACK DEVELOPER <i>·</i> LAHORE, PAKISTAN</span><span>© {currentYear}</span><a href="#home" className="back-top">BACK TO TOP <Arrow diagonal /></a></footer>
    </>
  )
}

export default App
