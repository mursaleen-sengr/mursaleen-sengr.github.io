// ========== EMBEDDED DATA ==========
// Data is embedded directly to avoid fetch issues on GitHub Pages

const DATA = {
    about: {"summary":{"title":"Professional Summary","text":"AI & ML Engineer with 2+ years of experience building production-grade LLM applications, RAG systems, and agent workflows. Delivered FastAPI-based AI platforms serving healthcare, finance, and Islamic knowledge domains using LangGraph, Qdrant, AWS, and Docker. Experienced in fine-tuning, retrieval optimization, and scalable AI backend development."},"info":[{"icon":"fas fa-map-marker-alt","text":"Islamabad, Pakistan"},{"icon":"fas fa-phone","text":"+92 307 770 6100"},{"icon":"fas fa-envelope","text":"mursaleen.sengr@gmail.com"}],"stats":[{"value":"2+","label":"Years Experience"},{"value":"10+","label":"Projects Completed"},{"value":"99.9%","label":"Uptime Achieved"}]},
    
    experience: {"experiences":[{"date":"March 2025 – Present","title":"AI/ML Engineer","company":"DiveDeepAI","location":"Islamabad, Pakistan","responsibilities":["Engineered Generative AI solutions, developing both custom and LangGraph driven RAG pipelines, and fine-tuning LLMs.","Architected robust FastAPI backends; managed deployments on AWS EC2 and DigitalOcean.","Led a 3-person team to deliver sprint goals, managing system architecture and mentored junior developers."]},{"date":"August 2024 – February 2025","title":"Jr AI Engineer","company":"Softoo","location":"Islamabad, Pakistan","responsibilities":["Collaborated with the Solution Architect to rapidly prototype and iterate Generative AI Proof-of-Concepts (POCs).","Built scalable RAG-based applications utilizing LangChain, LangGraph, LLMs, and vector databases."]}]},
    
    projects: {"projects":[{"icon":"fas fa-clinic-medical","title":"Bridge Vet: Veterinary Clinic Platform","description":["Managed a development team to deliver an end-to-end clinic management system; built a scalable FastAPI, Redis, and Celery backend for asynchronous AI SOAP note generation, medication extraction, and appointment follow-ups.","Developed a custom RAG-based clinical assistant for dosage calculations, evaluated retrieval accuracy via Langfuse, and implemented OCR pipelines to automate inventory tracking. Maintained continuous deployments on AWS EC2."],"tags":["Python","FastAPI","Redis","Celery","Google Gemini","Vector DBs","Langfuse","OCR","Docker","AWS EC2"],"stats":[{"icon":"fas fa-stethoscope","text":"Clinical SOAP Notes"},{"icon":"fas fa-shield-alt","text":"Langfuse Evaluated"}]},{"icon":"fas fa-mosque","title":"eQRA-AI: Islamic AI Assistant","description":["Built the backend for an Islamic AI Assistant, deploying dual RAG chatbots (Phase 1) dedicated to precise Fatwa and Duas retrieval. Scaled deployments on DigitalOcean App platform and Redis/Celery over droplets and Grafana Loki for log aggregation.","Developed an agentic MVP (Phase 2) using a LangGraph multi-tool agent to efficiently route user intent between live web queries and vectorized Qdrant databases. Integrated Mem0 for long-term memory and built web scraping pipelines to ingest extensive Islamic literature."],"tags":["Python","FastAPI","LangGraph","Qdrant","Mem0","Redis","Celery","Grafana Loki","AWS","DigitalOcean"],"stats":[{"icon":"fas fa-project-diagram","text":"LangGraph Agents"},{"icon":"fas fa-database","text":"Qdrant & Mem0"}]},{"icon":"fas fa-file-invoice-dollar","title":"Yani: AI Assistant for Chartered Accountants","description":["Built a RAG-based chatbot to assist Chartered Accountants, alongside a distinct document compliance workflow that evaluates text chunks directly against regulatory frameworks to map clauses and flag non-compliance.","Implemented an AI-powered database chat utilizing Vanna.ai trained on complex schemas, achieving 92% accuracy in natural language to SQL conversion.","Developed a multi-agent system using Autogen to perform automated Exploratory Data Analysis (EDA) and dynamically generate visual insights from the extracted SQL data."],"tags":["Python","Vanna.ai","Autogen","RAG","LLMs","Pandas","Matplotlib","Streamlit"],"stats":[{"icon":"fas fa-percentage","text":"92% NL-to-SQL Accuracy"},{"icon":"fas fa-chart-bar","text":"Autogen Multi-Agent EDA"}]},{"icon":"fas fa-microphone-alt","title":"Whisper Fine-Tuning for Quranic Arabic","description":["Optimized a custom fine-tuning pipeline for the Whisper model utilizing 10,000+ Quranic Tarteel audio samples to improve specialized Arabic speech-to-text transcription and phonetic accuracy.","Achieved a 90% improvement in complex Harakat (diacritic) recognition and reduced overall Word Error Rate (WER) by 30–40% compared to foundational baseline models."],"tags":["Python","PyTorch","Hugging Face","Whisper","Audio Processing"],"stats":[{"icon":"fas fa-star","text":"90% Harakat Recognition"},{"icon":"fas fa-chart-line","text":"30-40% WER Reduction"}]}]},
    
    skills: {"categories":[{"name":"Languages","icon":"fas fa-code","skills":[{"name":"Python","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{"name":"SQL","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"}]},{"name":"AI/ML & Frameworks","icon":"fas fa-brain","skills":[{"name":"PyTorch","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"},{"name":"Hugging Face","logo":"https://huggingface.co/front/assets/huggingface_logo.svg"},{"name":"OpenAI","icon":"fas fa-brain"},{"name":"LangChain","logo":"https://cdn.simpleicons.org/langchain"},{"name":"LangGraph","icon":"fas fa-network-wired"},{"name":"Autogen","icon":"fas fa-robot"},{"name":"RAG","icon":"fas fa-search-plus"},{"name":"Mem0","icon":"fas fa-memory"}]},{"name":"Evaluation & Observability","icon":"fas fa-glasses","skills":[{"name":"Langfuse","icon":"fas fa-binoculars"},{"name":"Grafana Loki","logo":"https://cdn.simpleicons.org/grafana"},{"name":"LLM Benchmarking","icon":"fas fa-tasks"},{"name":"Retrieval Evaluation","icon":"fas fa-poll"},{"name":"Hallucination Reduction","icon":"fas fa-shield-alt"}]},{"name":"Databases","icon":"fas fa-database","skills":[{"name":"PostgreSQL","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{"name":"Qdrant","logo":"https://cdn.simpleicons.org/qdrant"},{"name":"FAISS","icon":"fas fa-search-plus"},{"name":"PgVector","icon":"fas fa-vector-square"},{"name":"Redis","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"},{"name":"MongoDB","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"}]},{"name":"Backend & Infrastructure","icon":"fas fa-server","skills":[{"name":"FastAPI","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},{"name":"Celery","logo":"https://cdn.simpleicons.org/celery"},{"name":"AWS (EC2, S3)","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{"name":"DigitalOcean","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"},{"name":"Docker","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},{"name":"Linux","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},{"name":"CI/CD","icon":"fas fa-sync-alt"}]},{"name":"Tools","icon":"fas fa-tools","skills":[{"name":"Git","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{"name":"GitHub","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{"name":"GitLab","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"},{"name":"Web Scraping","icon":"fas fa-spider"},{"name":"Postman","logo":"https://cdn.simpleicons.org/postman"},{"name":"Claude Code","icon":"fas fa-code-branch"},{"name":"Cursor","icon":"fas fa-mouse-pointer"},{"name":"Antigravity","icon":"fas fa-space-shuttle"}]}]},
    
    education: {"degree":{"title":"Bachelor of Science in Software Engineering","institution":"The Islamia University of Bahawalpur","date":"October 2020 – June 2024","cgpa":"3.70/4.00","coursework":"Relevant Coursework: Databases, Object-Oriented Programming, Software Engineering, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Cloud Computing, Computer Networks"},"certifications":[{"title":"Intermediate Python","issuer":"DataCamp","year":"2024"},{"title":"Introduction to Large Language Models","issuer":"Google Cloud","year":"2024"}]}
};

// ========== DATA LOADING ==========
async function loadJSON(key) {
    return DATA[key] || null;
}

// ========== ABOUT SECTION RENDERER ==========
// Everything below this line is hand-written. Content comes from data/*.json via build.py.

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

const asList = (v) => (Array.isArray(v) ? v : [v]).filter(Boolean);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Logos that are dark/monochrome and need inverting in dark mode
const MONO_LOGOS = ['github', 'langchain', 'amazonwebservices', 'apple'];

function renderAbout() {
    const d = DATA.about;
    const el = document.getElementById('about-content');
    if (!d || !el) return;

    const stats = (d.stats || []).map((s) => `
        <div class="stat">
            <div class="stat-value">${esc(s.value)}</div>
            <div class="stat-label">${esc(s.label)}</div>
        </div>`).join('');

    const info = (d.info || []).map((i) => `
        <li><i class="${esc(i.icon)}" aria-hidden="true"></i>${esc(i.text)}</li>`).join('');

    el.innerHTML = `
        <img class="about-photo" src="profile-photo-640.jpg" alt="Portrait of Muhammad Mursaleen"
             width="640" height="877" loading="lazy">
        <div>
            <p class="about-summary">${esc(d.summary?.text)}</p>
            <div class="about-stats">${stats}</div>
            <ul class="about-info">${info}</ul>
        </div>`;
}

// ========== EXPERIENCE ==========
function renderExperience() {
    const list = DATA.experience?.experiences || [];
    const el = document.getElementById('experience-timeline');
    if (!el) return;

    el.innerHTML = list.map((job) => `
        <li class="job" id="job-${slug(job.company)}">
            <p class="job-when">${esc(job.date)}</p>
            <div class="job-body">
                <h3 class="job-title">${esc(job.title)}</h3>
                <p class="job-org"><strong>${esc(job.company)}</strong>, ${esc(job.location)}</p>
                <ul class="job-points">
                    ${asList(job.responsibilities).map((r) => `<li>${esc(r)}</li>`).join('')}
                </ul>
            </div>
        </li>`).join('');
}

// ========== PROJECTS ==========
function renderProjects() {
    const list = DATA.projects?.projects || [];
    const el = document.getElementById('projects-grid');
    if (!el) return;

    el.innerHTML = list.map((p) => `
        <article class="project" id="project-${slug(p.title)}">
            <div>
                <div class="project-icon"><i class="${esc(p.icon)}" aria-hidden="true"></i></div>
                <h3 class="project-title">${esc(p.title)}</h3>
                <ul class="project-metrics">
                    ${(p.stats || []).map((s) => `
                        <li><i class="${esc(s.icon)}" aria-hidden="true"></i>${esc(s.text)}</li>`).join('')}
                </ul>
            </div>
            <div>
                <div class="project-desc">
                    ${asList(p.description).map((t) => `<p>${esc(t)}</p>`).join('')}
                </div>
                <ul class="tags" aria-label="Technologies">
                    ${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('')}
                </ul>
            </div>
        </article>`).join('');
}

// ========== SKILLS ==========
function renderSkills() {
    const cats = DATA.skills?.categories || [];
    const el = document.getElementById('skills-container');
    if (!el) return;

    el.innerHTML = cats.map((c) => `
        <div class="skill-row">
            <dt><i class="${esc(c.icon)}" aria-hidden="true"></i>${esc(c.name)}</dt>
            <dd>
                ${(c.skills || []).map((s) => {
                    let glyph;
                    if (s.logo) {
                        const mono = MONO_LOGOS.some((m) => s.logo.includes(m)) ? ' logo-mono' : '';
                        glyph = `<img class="${mono.trim()}" src="${esc(s.logo)}" alt="" width="20" height="20" loading="lazy">`;
                    } else {
                        glyph = `<i class="${esc(s.icon || 'fas fa-circle')}" aria-hidden="true"></i>`;
                    }
                    return `<span class="skill">${glyph}${esc(s.name)}</span>`;
                }).join('')}
            </dd>
        </div>`).join('');
}

// ========== EDUCATION ==========
function renderEducation() {
    const d = DATA.education;
    const el = document.getElementById('education-content');
    if (!d || !el) return;
    const g = d.degree || {};

    el.innerHTML = `
        <div>
            <h3 class="degree-title">${esc(g.title)}</h3>
            <p class="degree-meta">${esc(g.institution)}, ${esc(g.date)}</p>
            ${g.cgpa ? `<p class="degree-cgpa">CGPA ${esc(g.cgpa)}</p>` : ''}
            <p class="degree-course">${esc(g.coursework)}</p>
        </div>
        <div>
            <h3 class="certs-title">Certifications</h3>
            <ul class="certs">
                ${(d.certifications || []).map((c) => `
                    <li class="cert">
                        <i class="fas fa-award" aria-hidden="true"></i>
                        <div>
                            <div class="cert-name">${esc(c.title)}</div>
                            <div class="cert-issuer">${esc(c.issuer)}</div>
                        </div>
                        <span class="cert-year">${esc(c.year)}</span>
                    </li>`).join('')}
            </ul>
        </div>`;
}

// ========== RETRIEVAL CONSOLE ==========
// A tiny BM25 search over the portfolio's own data, shown with highlighted matches.

const STOP = new Set(('a an and are as at be by can do does did for from have has had how i in is it its me my ' +
    'of on or that the this to was what when where which who why with you your yours he his him about any ' +
    'ever worked work used use using built build tell show some there their they them').split(' '));

const SYNONYMS = {
    agent: ['agentic', 'agents', 'autogen', 'langgraph'],
    finetune: ['fine', 'tuning', 'whisper'],
    db: ['database', 'databases', 'qdrant', 'postgresql', 'redis', 'mongodb'],
    database: ['databases', 'qdrant', 'postgresql', 'pgvector', 'faiss'],
    cloud: ['aws', 'digitalocean', 'ec2'],
    deploy: ['deployments', 'deploying', 'aws', 'digitalocean'],
    health: ['healthcare', 'clinic', 'clinical', 'veterinary'],
    healthcare: ['clinic', 'clinical', 'veterinary'],
    speech: ['whisper', 'audio', 'transcription'],
    study: ['university', 'degree', 'bachelor'],
    education: ['university', 'degree', 'bachelor', 'coursework'],
    lead: ['led', 'team', 'mentored'],
    team: ['led', 'mentored', 'managed'],
    sql: ['vanna', 'nl-to-sql'],
    llm: ['llms', 'gemini', 'openai'],
};

function stem(w) {
    w = w.toLowerCase();
    if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
    if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
}

const tokenize = (text) => (String(text).toLowerCase().match(/[a-z0-9]+(?:[.\-][a-z0-9]+)*/g) || [])
    .flatMap((t) => (t.includes('-') ? [t, ...t.split('-')] : [t]))
    .filter((t) => !STOP.has(t))
    .map(stem);

function buildChunks() {
    const chunks = [];
    const add = (text, source, href) => chunks.push({ text, source, href });

    if (DATA.about?.summary?.text) add(DATA.about.summary.text, 'About', '#about');

    (DATA.experience?.experiences || []).forEach((j) => {
        add(`${j.title} at ${j.company} (${j.date}). ${asList(j.responsibilities).join(' ')}`,
            `${j.title}, ${j.company}`, `#job-${slug(j.company)}`);
    });

    (DATA.projects?.projects || []).forEach((p) => {
        asList(p.description).forEach((t) => {
            add(t, p.title.split(':')[0], `#project-${slug(p.title)}`);
            chunks[chunks.length - 1].extra = `${p.title} ${(p.tags || []).join(' ')}`;
        });
    });

    (DATA.skills?.categories || []).forEach((c) => {
        add(`${c.name}: ${(c.skills || []).map((s) => s.name).join(', ')}.`, 'Skills', '#skills');
        chunks[chunks.length - 1].boost = 0.75; // prefer concrete work over skill lists
    });

    const g = DATA.education?.degree;
    if (g) add(`${g.title}, ${g.institution} (${g.date}). CGPA ${g.cgpa}. ${g.coursework}`, 'Education', '#education');
    (DATA.education?.certifications || []).forEach((c) => {
        add(`Certification: ${c.title}, ${c.issuer}, ${c.year}.`, 'Certifications', '#education');
    });

    chunks.forEach((c) => {
        c.tokens = tokenize(`${c.text} ${c.extra || ''}`);
        c.tf = c.tokens.reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
    });
    return chunks;
}

let INDEX = null;

function search(query, k = 3) {
    if (!INDEX) {
        const chunks = buildChunks();
        const df = new Map();
        chunks.forEach((c) => new Set(c.tokens).forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
        const avg = chunks.reduce((s, c) => s + c.tokens.length, 0) / Math.max(chunks.length, 1);
        INDEX = { chunks, df, avg };
    }

    const base = tokenize(query);
    const terms = new Set(base);
    base.forEach((t) => (SYNONYMS[t] || []).forEach((s) => tokenize(s).forEach((x) => terms.add(x))));
    if (!terms.size) return { hits: [], terms };

    const N = INDEX.chunks.length;
    const k1 = 1.4, b = 0.75;
    const scored = INDEX.chunks.map((c) => {
        let score = 0;
        terms.forEach((t) => {
            const f = c.tf.get(t);
            if (!f) return;
            const n = INDEX.df.get(t) || 0;
            const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
            const weight = base.includes(t) ? 1 : 0.6; // synonyms count a bit less
            score += weight * idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * c.tokens.length / INDEX.avg));
        });
        return { c, score: score * (c.boost || 1) };
    }).filter((h) => h.score > 0).sort((a, b2) => b2.score - a.score);

    const top = scored[0]?.score || 1;
    return {
        hits: scored.slice(0, k).map((h) => ({ ...h.c, rel: h.score / top })),
        terms,
    };
}

function highlight(text, terms) {
    return esc(text).replace(/[A-Za-z0-9]+(?:[.\-][A-Za-z0-9]+)*/g, (w) =>
        (terms.has(stem(w)) && !STOP.has(w.toLowerCase()) ? `<mark>${w}</mark>` : w));
}

function trimAround(text, terms, max = 260) {
    if (text.length <= max) return text;
    const words = text.split(/\s+/);
    const first = words.findIndex((w) => terms.has(stem(w.replace(/[^A-Za-z0-9.\-]/g, ''))));
    let start = Math.max(0, first - 8);
    let out = '';
    for (let i = start; i < words.length && (out + words[i]).length < max; i++) out += (out ? ' ' : '') + words[i];
    return (start > 0 ? '… ' : '') + out + ' …';
}

function showResults(query) {
    const box = document.getElementById('askResults');
    if (!box) return;
    const { hits, terms } = search(query);

    if (!hits.length) {
        box.innerHTML = `<p class="hit-empty">Nothing matched "${esc(query)}". Try a tool like LangGraph or Qdrant, or a field like healthcare or finance.</p>`;
        return;
    }
    box.innerHTML = hits.map((h) => `
        <div class="hit">
            <p class="hit-text">${highlight(trimAround(h.text, terms), terms)}</p>
            <p class="hit-source">
                <a href="${h.href}">${esc(h.source)}</a>
                <span>Relevance ${Math.round(h.rel * 100)}%</span>
            </p>
        </div>`).join('');
}

function initConsole() {
    const form = document.getElementById('askForm');
    const input = document.getElementById('askInput');
    const chipsEl = document.getElementById('askChips');
    if (!form || !input || !chipsEl) return;

    const suggestions = [
        'What have you built with LangGraph?',
        'Have you fine-tuned a model?',
        'Healthcare experience',
        'Which vector databases?',
        'Where did you study?',
    ];

    chipsEl.innerHTML = suggestions.map((q) =>
        `<button type="button" class="chip" aria-pressed="false">${esc(q)}</button>`).join('');

    const chips = [...chipsEl.querySelectorAll('.chip')];
    const run = (q, chip) => {
        chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        showResults(q);
    };

    chips.forEach((chip) => chip.addEventListener('click', () => {
        input.value = chip.textContent;
        run(chip.textContent, chip);
    }));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (q) run(q, null);
    });

    // Open with one example so visitors see what it does
    input.value = suggestions[0];
    run(suggestions[0], chips[0]);
}

// ========== THEME ==========
function initTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const root = document.documentElement;
    const icon = btn.querySelector('i');

    const sync = () => {
        const dark = root.getAttribute('data-theme') === 'dark';
        icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
        btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    };
    sync();

    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
        sync();
    });
}

// ========== NAVIGATION ==========
function initNav() {
    const header = document.getElementById('siteHeader');
    const nav = document.getElementById('siteNav');
    const menu = document.getElementById('menuToggle');
    const links = [...document.querySelectorAll('.nav-link')];

    const setMenu = (open) => {
        nav.classList.toggle('is-open', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
    };
    menu?.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    links.forEach((l) => l.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the section currently in view
    const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
}

// ========== CONTACT FORM ==========
function initContact() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`;
        window.location.href = `mailto:mursaleen.sengr@gmail.com?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`;
        if (status) status.textContent = 'Your email app should open with the message filled in.';
        form.reset();
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    initConsole();
    initTheme();
    initNav();
    initContact();
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});

console.log('%cHi there, thanks for looking under the hood.', 'font: 600 14px sans-serif; color:#0e6e6c');
console.log('Want to talk AI engineering? mursaleen.sengr@gmail.com');
