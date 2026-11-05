// ========== EMBEDDED DATA ==========
// Data is embedded directly to avoid fetch issues on GitHub Pages

const DATA = {
    about: {"summary":{"title":"Professional Summary","text":"AI & ML Engineer with almost 3 years of experience building production-grade LLM applications, RAG systems and agent workflows. I've delivered FastAPI-based AI platforms for healthcare, finance, procurement and Islamic knowledge using LangGraph, Qdrant, AWS and Docker, and I work across fine-tuning, retrieval optimization and scalable Gen-AI backends."},"info":[{"icon":"fas fa-location-dot","text":"Lahore, Pakistan"},{"icon":"fas fa-phone","text":"+92 307 770 6100"},{"icon":"fas fa-envelope","text":"mursaleen.sengr@gmail.com"}],"stats":[{"value":"~3 yrs","label":"Building production AI"},{"value":"4","label":"Industries: healthcare, finance, procurement, Islamic knowledge"},{"value":"92%","label":"Accuracy on natural-language to SQL"},{"value":"30–40%","label":"Lower word error rate after fine-tuning Whisper"}],"headline":"Software Engineer specializing in AI & ML"},
    
    experience: {"experiences":[{"date":"July 2026 – Present","title":"Software Engineer (AI/ML)","company":"CodingCops","location":"Lahore, Pakistan","responsibilities":["Design and build multi-agent AI systems and text-to-SQL pipelines using LangGraph and self-hosted LLMs.","Optimize prompts, context management and token usage to improve reasoning efficiency on complex natural-language queries across large datasets."]},{"date":"March 2025 – July 2026","title":"AI/ML Engineer","company":"DiveDeepAI","location":"Islamabad, Pakistan","responsibilities":["Built and deployed Generative AI systems using custom and LangGraph-driven RAG pipelines and LLM fine-tuning.","Architected FastAPI backends and managed deployments on AWS EC2 and DigitalOcean.","Led a 3-person engineering team, drove system architecture and mentored junior developers."]},{"date":"August 2024 – February 2025","title":"Jr AI Engineer","company":"Softoo","location":"Islamabad, Pakistan","responsibilities":["Built production-oriented Generative AI proofs of concept with the solution architect, then validated and iterated on them.","Built RAG applications using LangChain, LangGraph, LLMs and vector databases."]}]},
    
    projects: {"projects":[{"icon":"fas fa-stethoscope","title":"Bridge Vet: Veterinary Clinic Platform","domain":"Healthcare","impact":"Vets spend less time on paperwork: SOAP notes, medication lists and follow-ups are drafted by AI in the background after each appointment.","description":["Managed a development team to deliver an end-to-end clinic management system; built a scalable FastAPI, Redis and Celery backend for asynchronous AI SOAP note generation, medication extraction and appointment follow-ups.","Developed a custom RAG-based clinical assistant for dosage calculations, evaluated retrieval accuracy with Langfuse, and built OCR pipelines that automate inventory tracking."],"tags":["Python","FastAPI","Redis","Celery","Gemini","Vector DBs","Langfuse","OCR","AsyncIO","Docker","AWS EC2"],"stats":[{"icon":"fas fa-file-medical","text":"AI-drafted SOAP notes"},{"icon":"fas fa-chart-simple","text":"Retrieval checked in Langfuse"}]},{"icon":"fas fa-mosque","title":"eQRA-AI: Islamic AI Assistant Mobile App","domain":"Consumer app","impact":"App users get sourced answers on fatwas and duas from an assistant that remembers their past conversations and sends timely notifications.","description":["Built the backend for an Islamic AI assistant, deploying dual RAG chatbots for precise fatwa and dua retrieval, with Mem0-powered long-term conversational memory.","Engineered an event-driven notification system using AWS EventBridge, SNS and Lambda to send real-time push notifications through FCM.","Scaled deployments on DigitalOcean App Platform with Redis and Celery on droplets, and self-hosted Grafana Loki for log aggregation. Prototyped a LangGraph multi-tool agent that routes questions between live web search and Qdrant."],"tags":["Python","FastAPI","Mem0","LangGraph","Qdrant","AWS EventBridge","AWS SNS","AWS Lambda","FCM","Redis","Celery","Grafana Loki","DigitalOcean"],"stats":[{"icon":"fas fa-comments","text":"Two RAG chatbots with memory"},{"icon":"fas fa-bell","text":"Event-driven push notifications"}]},{"icon":"fas fa-file-invoice-dollar","title":"Yani: AI Assistant for Chartered Accountants","domain":"Finance","impact":"Accountants check documents against regulations and ask questions of their data in plain English instead of writing SQL.","description":["Built a RAG chatbot for chartered accountants, alongside a document compliance workflow that checks text against regulatory frameworks to map clauses and flag non-compliance.","Implemented database chat with Vanna.ai trained on complex schemas, reaching 92% accuracy in natural language to SQL.","Developed an Autogen multi-agent system that runs exploratory data analysis and generates charts from the extracted SQL data."],"tags":["Python","Vanna.ai","Autogen","RAG","LLMs","Pandas","Matplotlib","Streamlit"],"stats":[{"icon":"fas fa-bullseye","text":"92% NL-to-SQL accuracy"},{"icon":"fas fa-scale-balanced","text":"Automated compliance checks"}]},{"icon":"fas fa-microphone-lines","title":"Fine-Tuning Whisper for Quranic Arabic","domain":"Speech AI","impact":"More accurate transcription of Quran recitation, including the diacritics that general-purpose speech models get wrong.","description":["Built a fine-tuning pipeline for OpenAI's Whisper on 10,000+ Quranic Tarteel audio samples to improve specialized Arabic speech-to-text and phonetic accuracy.","Achieved a 90% improvement in Harakat (diacritic) recognition and cut word error rate by 30–40% against the base model."],"tags":["Python","PyTorch","Hugging Face","Whisper","Audio Processing"],"stats":[{"icon":"fas fa-arrow-trend-up","text":"90% better diacritic recognition"},{"icon":"fas fa-arrow-trend-down","text":"30–40% lower WER"}]}]},
    
    skills: {"expertise":"AI Expertise","core":["Python","LangGraph","LangChain","RAG","FastAPI","Qdrant","Redis","PyTorch","Hugging Face","Langfuse","Docker","AWS"],"categories":[{"name":"AI Expertise","icon":"fas fa-brain","skills":[{"name":"Agentic AI","icon":"fas fa-robot","logo":"assets/logos/agentic-ai.svg"},{"name":"Generative AI","icon":"fas fa-wand-magic-sparkles","logo":"assets/logos/generative-ai.svg"},{"name":"Artificial Intelligence","icon":"fas fa-microchip","logo":"assets/logos/artificial-intelligence.svg"},{"name":"Machine Learning","icon":"fas fa-chart-line","logo":"assets/logos/machine-learning.svg"},{"name":"Deep Learning","icon":"fas fa-layer-group","logo":"assets/logos/deep-learning.svg"},{"name":"NLP","icon":"fas fa-language","logo":"assets/logos/nlp.svg"}]},{"name":"Languages","icon":"fas fa-code","skills":[{"name":"Python","logo":"assets/logos/python.svg"},{"name":"SQL","logo":"assets/logos/sql.svg"}]},{"name":"AI/ML & Frameworks","icon":"fas fa-brain","skills":[{"name":"PyTorch","logo":"assets/logos/pytorch.svg"},{"name":"Hugging Face","logo":"assets/logos/huggingface.svg"},{"name":"OpenAI","logo":"assets/logos/openai.svg"},{"name":"Gemini","logo":"assets/logos/gemini.svg"},{"name":"LangChain","logo":"assets/logos/langchain.svg"},{"name":"LangGraph","logo":"assets/logos/langgraph.svg"},{"name":"Autogen","logo":"assets/logos/autogen.svg"},{"name":"Mem0","logo":"assets/logos/mem0.svg"},{"name":"RAG","icon":"fas fa-magnifying-glass-chart","logo":"assets/logos/rag.svg"},{"name":"Vanna.ai","icon":"fas fa-table-cells","logo":"assets/logos/vanna.svg"}]},{"name":"Evaluation & Observability","icon":"fas fa-gauge-high","skills":[{"name":"Langfuse","logo":"assets/logos/langfuse.svg"},{"name":"Grafana Loki","logo":"assets/logos/grafana.svg"},{"name":"LLM Benchmarking","icon":"fas fa-ranking-star","logo":"assets/logos/llm-benchmarking.svg"},{"name":"Retrieval Evaluation","icon":"fas fa-list-check","logo":"assets/logos/retrieval-evaluation.svg"},{"name":"Hallucination Reduction","icon":"fas fa-shield-halved","logo":"assets/logos/hallucination-reduction.svg"}]},{"name":"Databases","icon":"fas fa-database","skills":[{"name":"PostgreSQL","logo":"assets/logos/postgresql.svg"},{"name":"Qdrant","logo":"assets/logos/qdrant.svg"},{"name":"FAISS","logo":"assets/logos/faiss.svg"},{"name":"PgVector","logo":"assets/logos/postgresql.svg"},{"name":"Redis","logo":"assets/logos/redis.svg"},{"name":"MongoDB","logo":"assets/logos/mongodb.svg"}]},{"name":"Backend & Infrastructure","icon":"fas fa-server","skills":[{"name":"FastAPI","logo":"assets/logos/fastapi.svg"},{"name":"Celery","logo":"assets/logos/celery.svg"},{"name":"AsyncIO","logo":"assets/logos/python.svg"},{"name":"AWS","logo":"assets/logos/aws.svg"},{"name":"EC2","logo":"assets/logos/aws-ec2.svg"},{"name":"S3","logo":"assets/logos/aws-s3.svg"},{"name":"EventBridge","logo":"assets/logos/aws-eventbridge.svg"},{"name":"SNS","logo":"assets/logos/aws-sns.svg"},{"name":"Lambda","logo":"assets/logos/aws-lambda.svg"},{"name":"DigitalOcean","logo":"assets/logos/digitalocean.svg"},{"name":"Docker","logo":"assets/logos/docker.svg"},{"name":"Linux","logo":"assets/logos/linux.svg"},{"name":"CI/CD","logo":"assets/logos/cicd.svg"},{"name":"Firebase Cloud Messaging","logo":"assets/logos/firebase.svg"}]},{"name":"Data & Apps","icon":"fas fa-chart-pie","skills":[{"name":"Pandas","logo":"assets/logos/pandas.svg"},{"name":"Matplotlib","logo":"assets/logos/matplotlib.svg"},{"name":"Streamlit","logo":"assets/logos/streamlit.svg"},{"name":"OCR","icon":"fas fa-file-image","logo":"assets/logos/ocr.svg"},{"name":"Web Scraping","icon":"fas fa-spider","logo":"assets/logos/web-scraping.svg"}]},{"name":"Tools","icon":"fas fa-screwdriver-wrench","skills":[{"name":"Git","logo":"assets/logos/git.svg"},{"name":"GitHub","logo":"assets/logos/github.svg"},{"name":"GitLab","logo":"assets/logos/gitlab.svg"},{"name":"Postman","logo":"assets/logos/postman.svg"},{"name":"Claude Code","logo":"assets/logos/claude-code.svg"},{"name":"Cursor","logo":"assets/logos/cursor.svg"},{"name":"Antigravity","logo":"assets/logos/antigravity.svg"}]}]},
    
    education: {"degree":{"title":"Bachelor of Science in Software Engineering","institution":"The Islamia University of Bahawalpur","date":"October 2020 – June 2024","cgpa":"3.70/4.00","coursework":"Relevant Coursework: Databases, Object-Oriented Programming, Software Engineering, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Cloud Computing, Computer Networks","location":"Punjab, Pakistan"},"certifications":[{"title":"Intermediate Python","issuer":"DataCamp","year":"2024"},{"title":"Introduction to Large Language Models","issuer":"Google Cloud","year":"2024"}]},
    
    services: {"intro":"I help teams turn LLMs into products people rely on: accurate, measurable, and running in production.","services":[{"icon":"fas fa-file-circle-question","title":"AI assistants on your own documents","text":"RAG chatbots that answer from your files and policies, show their sources, and are tested for accuracy before launch.","proof":"Bridge Vet, eQRA-AI, Yani"},{"icon":"fas fa-diagram-project","title":"Agents and text-to-SQL","text":"Multi-agent workflows and plain-English database chat, so non-technical staff can get answers without writing queries.","proof":"92% NL-to-SQL accuracy on Yani"},{"icon":"fas fa-sliders","title":"Model fine-tuning","text":"Adapting open models like Whisper and LLMs to your domain, language or terminology when off-the-shelf models fall short.","proof":"30–40% lower WER on Quranic Arabic"},{"icon":"fas fa-server","title":"Production AI backends","text":"FastAPI services with background queues, cloud deployment on AWS or DigitalOcean, and monitoring with Langfuse and Grafana Loki.","proof":"Deployed on AWS EC2, Lambda and DigitalOcean"}],"process":[{"title":"Understand the workflow","text":"Start with the task people do today, the data it uses and what a good answer looks like."},{"title":"Prototype on real data","text":"A working version in days, not a slide deck, so you can judge it with your own examples."},{"title":"Measure before scaling","text":"Track retrieval accuracy, hallucinations, latency and token cost, and fix what the numbers show."},{"title":"Ship and monitor","text":"Deploy with logging and evaluation in place, then keep improving from real usage."}]}
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
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderHero() {
    const a = DATA.about || {};

    const proof = document.getElementById('proofStats');
    if (proof) {
        proof.innerHTML = (a.stats || []).map((s) => `
            <div class="proof-item">
                <dt>${esc(s.label)}</dt>
                <dd>${esc(s.value)}</dd>
            </div>`).join('');
    }

    const worked = document.getElementById('workedAt');
    const companies = [...new Set((DATA.experience?.experiences || []).map((j) => j.company))];
    if (worked && companies.length) {
        worked.innerHTML = `<span>Worked at</span>${companies.map((c) => `<strong>${esc(c)}</strong>`).join('')}`;
    }
}

// Small illustrations for the two wide service cards, built from real project facts
const SERVICE_DEMOS = {
    0: [
        ['fas fa-message', 'Q: What dose of amoxicillin for a 12 kg dog?'],
        ['fas fa-file-lines', 'Answer cites the clinic documents it came from'],
        ['fas fa-gauge-high', 'Retrieval accuracy tracked in Langfuse'],
    ],
    3: [
        ['fas fa-bolt', 'FastAPI service, Redis and Celery workers'],
        ['fas fa-cloud', 'AWS EC2, Lambda, EventBridge, SNS, DigitalOcean'],
        ['fas fa-chart-line', 'Logs in Grafana Loki, LLM traces in Langfuse'],
    ],
};

function renderServices() {
    const d = DATA.services;
    if (!d) return;
    const intro = document.getElementById('servicesIntro');
    if (intro) intro.textContent = d.intro || '';

    const grid = document.getElementById('servicesGrid');
    if (grid) {
        grid.innerHTML = (d.services || []).map((s, i) => `
            <article class="service reveal">
                <div class="service-icon"><i class="${esc(s.icon)}" aria-hidden="true"></i></div>
                <h3>${esc(s.title)}</h3>
                <p>${esc(s.text)}</p>
                ${SERVICE_DEMOS[i] ? `<div class="service-demo" aria-hidden="true">
                    ${SERVICE_DEMOS[i].map(([icon, text]) => `
                        <div class="demo-line"><i class="${icon}"></i><b>${esc(text)}</b></div>`).join('')}
                </div>` : ''}
                <p class="service-proof"><i class="fas fa-circle-check" aria-hidden="true"></i>${esc(s.proof)}</p>
            </article>`).join('');
    }

    const steps = document.getElementById('processSteps');
    if (steps) {
        steps.innerHTML = (d.process || []).map((p) => `
            <li class="step">
                <h4>${esc(p.title)}</h4>
                <p>${esc(p.text)}</p>
            </li>`).join('');
    }
}

function renderAbout() {
    const d = DATA.about;
    const el = document.getElementById('about-content');
    if (!d || !el) return;

    const info = (d.info || []).map((i) => `
        <li><i class="${esc(i.icon)}" aria-hidden="true"></i>${esc(i.text)}</li>`).join('');

    el.innerHTML = `
        <img class="about-photo" src="profile-photo-640.jpg" alt="Portrait of Muhammad Mursaleen"
             width="640" height="877" loading="lazy">
        <div class="about-side">
            <p class="about-summary">${esc(d.summary?.text)}</p>
            <ul class="about-info">${info}</ul>
        </div>`;
}

// ========== EXPERIENCE ==========
function renderExperience() {
    const list = DATA.experience?.experiences || [];
    const el = document.getElementById('experience-timeline');
    if (!el) return;

    el.innerHTML = list.map((job) => {
        const current = /present/i.test(job.date);
        return `
        <li class="job reveal${current ? ' is-current' : ''}" id="job-${slug(job.company)}">
            <div class="job-when">
                ${current ? '<span class="badge">Current</span>' : ''}
                <span>${esc(job.date)}</span>
            </div>
            <div class="job-body">
                <h3 class="job-title">${esc(job.title)}</h3>
                <p class="job-org"><strong>${esc(job.company)}</strong>, ${esc(job.location)}</p>
                <ul class="job-points">
                    ${asList(job.responsibilities).map((r) => `<li>${esc(r)}</li>`).join('')}
                </ul>
            </div>
        </li>`;
    }).join('');
}

// ========== PROJECTS ==========
function renderProjects() {
    const list = DATA.projects?.projects || [];
    const el = document.getElementById('projects-grid');
    if (!el) return;

    el.innerHTML = list.map((p, i) => `
        <article class="project reveal" id="project-${slug(p.title)}">
            <div class="project-top">
                <div class="project-icon"><i class="${esc(p.icon)}" aria-hidden="true"></i></div>
                ${p.domain ? `<span class="project-domain">${esc(p.domain)}</span>` : ''}
            </div>
            <h3 class="project-title">${esc(p.title)}</h3>
            ${p.impact ? `<p class="project-impact">${esc(p.impact)}</p>` : ''}
            <ul class="project-metrics">
                ${(p.stats || []).map((s) => `
                    <li><i class="${esc(s.icon)}" aria-hidden="true"></i>${esc(s.text)}</li>`).join('')}
            </ul>
            <ul class="tags" aria-label="Technologies">
                ${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('')}
            </ul>
            <button type="button" class="project-more" data-project="${i}" aria-haspopup="dialog">
                How I built it <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
        </article>`).join('');
}

// ========== PROJECT DETAIL VIEW ==========
// A full view over the page for each project. It adds a history entry, so the back button closes it.
const projectIndex = (match) => (DATA.projects?.projects || []).findIndex((p) => p.title.includes(match));

function initProjectModal() {
    const dlg = document.getElementById('projectModal');
    const list = DATA.projects?.projects || [];
    if (!dlg || typeof dlg.showModal !== 'function' || !list.length) return;
    const root = document.documentElement;
    let current = -1, opener = null, hideTimer = 0;

    const render = (i) => {
        const p = list[i];
        const flow = SHOWCASE.find((c) => p.title.includes(c.match));
        const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
        dlg.innerHTML = `
            <div class="pm-sheet">
                <header class="pm-head">
                    <div class="project-icon"><i class="${esc(p.icon)}" aria-hidden="true"></i></div>
                    ${p.domain ? `<span class="project-domain">${esc(p.domain)}</span>` : ''}
                    <span class="pm-count">${i + 1} / ${list.length}</span>
                    <button type="button" class="icon-btn pm-close" data-close aria-label="Close project">
                        <i class="fas fa-xmark" aria-hidden="true"></i>
                    </button>
                </header>
                <div class="pm-body">
                    <h2 id="pmTitle" class="pm-title">${esc(p.title)}</h2>
                    ${p.impact ? `<p class="pm-impact">${esc(p.impact)}</p>` : ''}
                    <ul class="project-metrics">
                        ${(p.stats || []).map((st) => `
                            <li><i class="${esc(st.icon)}" aria-hidden="true"></i>${esc(st.text)}</li>`).join('')}
                    </ul>
                    ${flow ? `
                    <section class="pm-section">
                        <h3 class="pm-label">How it works</h3>
                        <ol class="pm-flow">
                            ${flow.steps.map(([icon, name, note]) => `
                            <li><span class="pm-flow-icon"><i class="${icon}" aria-hidden="true"></i></span>
                                <strong>${esc(name)}</strong><small>${esc(note)}</small></li>`).join('')}
                        </ol>
                    </section>` : ''}
                    <section class="pm-section">
                        <h3 class="pm-label">How I built it</h3>
                        <ol class="pm-steps">
                            ${asList(p.description).map((t) => `<li>${esc(t)}</li>`).join('')}
                        </ol>
                    </section>
                    <section class="pm-section">
                        <h3 class="pm-label">Tech stack</h3>
                        <ul class="tags">${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
                    </section>
                </div>
                <footer class="pm-foot">
                    <button type="button" class="icon-btn" data-step="-1" aria-label="Previous project: ${esc(prev.title)}">
                        <i class="fas fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <a href="#contact" class="btn btn-primary" data-contact>Discuss a similar project</a>
                    <button type="button" class="icon-btn" data-step="1" aria-label="Next project: ${esc(next.title)}">
                        <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </footer>
            </div>`;
        current = i;
    };

    const hashFor = (i) => `#project-${slug(list[i].title)}`;

    const open = (i) => {
        clearTimeout(hideTimer);
        const wasOpen = dlg.open;
        render(i);
        if (wasOpen) {
            history.replaceState({ projectModal: true }, '', hashFor(i));
            dlg.querySelector('.pm-close').focus();
            return;
        }
        opener = document.activeElement;
        history.pushState({ projectModal: true }, '', hashFor(i));
        // Locking scroll removes the scrollbar; pad by its width so the page behind doesn't shift
        root.style.paddingRight = `${window.innerWidth - root.clientWidth}px`;
        root.classList.add('modal-open');
        dlg.showModal();
        requestAnimationFrame(() => dlg.classList.add('is-open'));
    };

    // Plays the exit animation, then closes. Called once the history entry is gone.
    const hide = (then) => {
        if (!dlg.open) return;
        dlg.classList.remove('is-open');
        hideTimer = setTimeout(() => {
            dlg.close();
            root.classList.remove('modal-open');
            root.style.paddingRight = '';
            if (then) then(); else opener?.focus({ preventScroll: true });
        }, REDUCED_MOTION ? 0 : 260);
    };

    const requestClose = () => {
        if (history.state?.projectModal) history.back(); // popstate below does the hiding
        else hide();
    };

    window.addEventListener('popstate', () => {
        if (dlg.open && !history.state?.projectModal) hide();
    });

    dlg.addEventListener('cancel', (e) => { e.preventDefault(); requestClose(); });
    dlg.addEventListener('click', (e) => {
        if (e.target === dlg || e.target.closest('[data-close]')) return requestClose();
        const step = e.target.closest('[data-step]');
        if (step) return open((current + +step.dataset.step + list.length) % list.length);
        if (e.target.closest('[data-contact]')) {
            e.preventDefault();
            const title = list[current].title;
            history.replaceState(null, '', '#contact');
            hide(() => {
                const topic = document.querySelector('input[name="topic"][value="Project"]');
                const msg = document.getElementById('cf-message');
                if (topic) topic.checked = true;
                if (msg && !msg.value) msg.value = `I'd like to discuss a project similar to ${title}.`;
                document.getElementById('contact')?.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
            });
        }
    });

    // Anything marked data-project opens that project: the card buttons and the hero showcase link
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-project]');
        if (!trigger || dlg.contains(trigger)) return;
        e.preventDefault();
        open(+trigger.dataset.project);
    });

    // A shared link like #project-yani-... opens straight to that project
    const fromHash = list.findIndex((p, i) => location.hash === hashFor(i));
    if (fromHash !== -1) {
        history.replaceState(null, '', '#work');
        open(fromHash);
    }
}

// ========== SKILLS ==========
const RINGS = [
    { label: 'AI expertise and frameworks', cats: ['AI Expertise', 'AI/ML & Frameworks'], r: 0.46, dur: 70, color: '#2dd4bf' },
    { label: 'Languages, evaluation, databases and data', cats: ['Languages', 'Evaluation & Observability', 'Databases', 'Data & Apps'], r: 0.7, dur: 95, color: '#38bdf8', reverse: true },
    { label: 'Cloud, backend and tools', cats: ['Backend & Infrastructure', 'Tools'], r: 0.93, dur: 130, color: '#a78bfa' },
];

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');

function skillGlyph(s, size) {
    const fallback = esc(s.icon || 'fas fa-circle');
    return s.logo
        ? `<img src="${esc(s.logo)}" alt="" width="${size}" height="${size}" loading="lazy"
               onerror="this.outerHTML='<i class=&quot;${fallback}&quot; aria-hidden=&quot;true&quot;></i>'">`
        : `<i class="${fallback}" aria-hidden="true"></i>`;
}

function renderSkills() {
    const cats = DATA.skills?.categories || [];
    const all = cats.flatMap((c) => (c.skills || []).map((s) => ({ ...s, cat: c.name, key: norm(s.name) })));
    const intro = document.getElementById('skillsIntro');
    if (intro) intro.textContent = `${all.length} skills and tools I use to take AI products from prototype to production.`;
    renderCore(all);
    renderOrbit(all);
    renderSkillList(cats, all);
}

function renderCore(all) {
    const exp = document.getElementById('expertiseList');
    const expCat = DATA.skills?.expertise || 'AI Expertise';
    if (exp) {
        exp.innerHTML = all.filter((s) => s.cat === expCat).map((s) => `
            <li>${skillGlyph(s, 18)}${esc(s.name)}</li>`).join('');
    }
    const el = document.getElementById('coreList');
    if (!el) return;
    const byName = Object.fromEntries(all.map((s) => [s.name, s]));
    const core = (DATA.skills?.core || []).map((n) => byName[n]).filter(Boolean);
    el.innerHTML = core.map((s) => `
        <li><span class="skill-logo">${skillGlyph(s, 18)}</span><span>${esc(s.name)}</span></li>`).join('');
}

function renderOrbit(all) {
    const orbit = document.getElementById('orbit');
    const center = document.getElementById('orbitCenter');
    const legend = document.getElementById('ringLegend');
    if (!orbit || !center) return;

    // Any category not listed in RINGS goes on the outer ring
    const ringOf = (cat) => {
        const i = RINGS.findIndex((r) => r.cats.includes(cat));
        return i === -1 ? RINGS.length - 1 : i;
    };

    const ringsHtml = RINGS.map((ring, ri) => {
        const items = all.filter((s) => ringOf(s.cat) === ri);
        const offset = ri * 17; // stagger rings so logos don't line up
        return `<div class="ring" style="--r:${ring.r};--dur:${ring.dur}s;--dir:${ring.reverse ? 'reverse' : 'normal'};--rdir:${ring.reverse ? 'normal' : 'reverse'};--ring-color:${ring.color}">
            ${items.map((s, i) => `
                <div class="orbit-item" data-key="${s.key}" style="--a:${(360 / items.length) * i + offset}deg;--r:${ring.r}">
                    <button type="button" class="orbit-tile" aria-label="${esc(s.name)}, ${esc(s.cat)}">${skillGlyph(s, 26)}</button>
                </div>`).join('')}
        </div>`;
    }).join('');
    orbit.insertAdjacentHTML('beforeend', ringsHtml);

    const defaultCenter = () => `<div class="oc-value">${all.length}</div>
        <div class="oc-title">skills and tools</div>`;
    const setCenter = (html) => { center.innerHTML = html; };
    const restore = () => setCenter(defaultCenter());
    restore();

    const byKey = Object.fromEntries(all.map((s) => [s.key, s]));
    orbit.querySelectorAll('.orbit-item').forEach((item) => {
        const s = byKey[item.dataset.key];
        const show = () => setCenter(`<div class="oc-logo">${skillGlyph(s, 26)}</div>
            <div class="oc-title">${esc(s.name)}</div><div class="oc-sub">${esc(s.cat)}</div>`);
        const btn = item.querySelector('.orbit-tile');
        btn.addEventListener('mouseenter', show);
        btn.addEventListener('focus', show);
        btn.addEventListener('mouseleave', restore);
        btn.addEventListener('blur', restore);
        btn.addEventListener('click', show);
    });

    if (legend) {
        legend.innerHTML = RINGS.map((r) => `
            <li style="--ring-color:${r.color}"><span class="ring-swatch" aria-hidden="true"></span>
                <span><b>${esc(r.label)}</b>, ${all.filter((s) => ringOf(s.cat) === RINGS.indexOf(r)).length}</span></li>`).join('');
    }

}

function renderSkillList(cats, all) {
    const grid = document.getElementById('skills-container');
    const tabs = document.getElementById('skillTabs');
    const list = document.getElementById('skillsList');
    const toggle = document.getElementById('skillsViewToggle');
    if (!grid || !tabs) return;

    const groups = [{ name: 'All', items: all }, ...cats.map((c) => ({ name: c.name, items: all.filter((s) => s.cat === c.name) }))];
    const tile = (s) => `<li class="skill"><span class="skill-logo">${skillGlyph(s, 24)}</span>
        <span class="skill-name">${esc(s.name)}<span class="skill-cat">${esc(s.cat)}</span></span></li>`;

    const show = (i) => {
        [...tabs.children].forEach((t, j) => t.setAttribute('aria-selected', String(i === j)));
        grid.innerHTML = groups[i].items.map(tile).join('');
    };
    if (toggle) toggle.innerHTML = `<i class="fas fa-list" aria-hidden="true"></i> See all ${all.length} as a list`;
    tabs.innerHTML = groups.map((g, i) => `
        <button type="button" class="tab" role="tab" aria-selected="${i === 0}">${esc(g.name)}<span class="count">${g.items.length}</span></button>`).join('');
    [...tabs.children].forEach((t, i) => t.addEventListener('click', () => show(i)));
    show(0);

    toggle?.addEventListener('click', () => {
        const open = list.hidden;
        list.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
        toggle.innerHTML = open
            ? '<i class="fas fa-xmark" aria-hidden="true"></i> Hide list'
            : `<i class="fas fa-list" aria-hidden="true"></i> See all ${all.length} as a list`;
        if (open) list.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'start' });
    });
}

// ========== EDUCATION ==========
function renderEducation() {
    const d = DATA.education;
    const el = document.getElementById('education-content');
    if (!d || !el) return;
    const g = d.degree || {};

    el.innerHTML = `
        <div class="edu-card reveal">
            <div class="edu-head">
                <i class="fas fa-graduation-cap" aria-hidden="true"></i>
                <div>
                    <h3 class="degree-title">${esc(g.title)}</h3>
                    <p class="degree-meta">${esc(g.institution)}${g.location ? `, ${esc(g.location)}` : ''}. ${esc(g.date)}</p>
                </div>
            </div>
            ${g.cgpa ? `<p class="degree-cgpa">CGPA ${esc(g.cgpa)}</p>` : ''}
            <p class="degree-course">${esc(g.coursework)}</p>
        </div>
        <div class="edu-card reveal">
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

// ========== PIPELINE SHOWCASE ==========
// Walks through real projects: an input travels through each system's stages to a measured result.

const SHOWCASE = [
    {
        tab: 'Text-to-SQL',
        project: 'Yani · Finance',
        match: 'Yani',
        input: { icon: 'fas fa-comment', text: 'Which clients have invoices overdue by 60+ days?' },
        steps: [
            ['fas fa-language', 'Question', 'plain English'],
            ['fas fa-database', 'Vanna.ai', 'trained on schema'],
            ['fas fa-code', 'SQL', 'generated'],
            ['fas fa-chart-column', 'Autogen', 'charts + EDA'],
        ],
        output: { kind: 'code', text: "SELECT client, SUM(amount)\nFROM invoices\nWHERE days_overdue > 60\nGROUP BY client;" },
        result: ['92%', 'accuracy, natural language to SQL'],
    },
    {
        tab: 'Clinical AI',
        project: 'Bridge Vet · Healthcare',
        match: 'Bridge Vet',
        input: { icon: 'fas fa-stethoscope', text: 'Visit ended: 12 kg dog, head shaking for 3 days' },
        steps: [
            ['fas fa-notes-medical', 'Visit', 'transcript'],
            ['fas fa-layer-group', 'Celery', 'async queue'],
            ['fas fa-book-medical', 'Gemini + RAG', 'clinic docs'],
            ['fas fa-file-medical', 'SOAP note', 'drafted'],
        ],
        output: { kind: 'rows', text: 'S|Head shaking, 3 days\nO|Redness, left ear canal\nA|Otitis externa\nP|Ear drops, follow-up in 10 days' },
        result: ['Auto', 'SOAP notes drafted after every visit'],
    },
    {
        tab: 'Agents',
        project: 'eQRA-AI · Consumer app',
        match: 'eQRA',
        input: { icon: 'fas fa-comment', text: 'What dua should I read before travelling?' },
        steps: [
            ['fas fa-brain', 'Mem0', 'recalls user'],
            ['fas fa-route', 'LangGraph', 'routes the query'],
            ['fas fa-magnifying-glass', 'Qdrant', 'or web search'],
            ['fas fa-quote-right', 'Answer', 'with sources'],
        ],
        output: { kind: 'text', text: 'Returns the travel dua with its source, remembers the user asked, and can follow up with a push notification.' },
        result: ['2', 'RAG assistants with long-term memory'],
    },
    {
        tab: 'Speech',
        project: 'Whisper fine-tune · Speech AI',
        match: 'Whisper',
        input: { icon: 'fas fa-microphone-lines', text: 'Quran recitation audio', wave: true },
        steps: [
            ['fas fa-wave-square', 'Audio', '10,000+ samples'],
            ['fas fa-sliders', 'Whisper', 'fine-tuned'],
            ['fas fa-pen-nib', 'Harakat', 'diacritics kept'],
            ['fas fa-font', 'Text', 'transcribed'],
        ],
        output: { kind: 'arabic', text: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' },
        result: ['30–40%', 'lower word error rate than base Whisper'],
    },
];

function renderShowcaseOutput(o) {
    if (o.kind === 'code') return `<pre class="sc-code"><code>${esc(o.text)}</code></pre>`;
    if (o.kind === 'rows') {
        return `<dl class="sc-rows">${o.text.split('\n').map((r) => {
            const [k, v] = r.split('|');
            return `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`;
        }).join('')}</dl>`;
    }
    if (o.kind === 'arabic') return `<p class="sc-arabic" lang="ar" dir="rtl">${esc(o.text)}</p>`;
    return `<p class="sc-text">${esc(o.text)}</p>`;
}

function initShowcase() {
    const root = document.getElementById('showcase');
    const tabsEl = document.getElementById('showcaseTabs');
    const stage = document.getElementById('showcaseStage');
    const progress = document.getElementById('showcaseProgress');
    if (!root || !tabsEl || !stage) return;

    tabsEl.innerHTML = SHOWCASE.map((c, i) =>
        `<button type="button" class="sc-tab" role="tab" aria-selected="false" aria-controls="showcaseStage" data-i="${i}">${esc(c.tab)}</button>`).join('');
    const tabs = [...tabsEl.querySelectorAll('.sc-tab')];

    let current = 0, timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));

    const countUp = (el, value) => {
        const m = value.match(/^(\d+)%$/);
        if (!m || REDUCED_MOTION) { el.textContent = value; return; }
        const target = +m[1], t0 = performance.now();
        const tick = (t) => {
            const k = Math.min(1, (t - t0) / 900);
            el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + '%';
            if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const show = (i) => {
        timers.forEach(clearTimeout); timers = [];
        current = i;
        const c = SHOWCASE[i];
        tabs.forEach((t, j) => t.setAttribute('aria-selected', String(j === i)));

        stage.innerHTML = `
            <p class="sc-project"><span>${esc(c.project)}</span>
                <a href="#work" class="sc-link"${projectIndex(c.match) !== -1 ? ` data-project="${projectIndex(c.match)}" aria-haspopup="dialog"` : ''}>See the project <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>
            <div class="sc-input">
                <i class="${c.input.icon}" aria-hidden="true"></i>
                ${c.input.wave ? '<span class="sc-wave" aria-hidden="true">' + '<i></i>'.repeat(18) + '</span>' : ''}
                <span class="sc-typed" data-text="${esc(c.input.text)}"></span>
            </div>
            <ol class="sc-flow" style="--n:${c.steps.length}">
                ${c.steps.map(([icon, name, note]) => `
                <li class="sc-node">
                    <span class="sc-dot"><i class="${icon}" aria-hidden="true"></i></span>
                    <strong>${esc(name)}</strong>
                    <small>${esc(note)}</small>
                </li>`).join('')}
            </ol>
            <div class="sc-output">${renderShowcaseOutput(c.output)}</div>
            <p class="sc-result"><b class="sc-metric">${esc(c.result[0])}</b><span>${esc(c.result[1])}</span></p>`;

        const typed = stage.querySelector('.sc-typed');
        const nodes = [...stage.querySelectorAll('.sc-node')];
        const flow = stage.querySelector('.sc-flow');
        const finish = () => {
            nodes.forEach((n) => n.classList.add('is-on'));
            flow.style.setProperty('--fill', '1');
            stage.classList.add('is-done');
            countUp(stage.querySelector('.sc-metric'), c.result[0]);
        };

        if (REDUCED_MOTION) { typed.textContent = c.input.text; finish(); return; }

        // Type the input, light each stage in turn, then reveal output and result
        const text = c.input.text;
        const typeMs = Math.min(900, text.length * 22);
        for (let k = 1; k <= text.length; k++) later(() => { typed.textContent = text.slice(0, k); }, (typeMs / text.length) * k);
        nodes.forEach((n, k) => later(() => {
            n.classList.add('is-on');
            flow.style.setProperty('--fill', String(k / (nodes.length - 1)));
        }, typeMs + 250 + k * 480));
        later(finish, typeMs + 250 + nodes.length * 480);

        if (progress) {
            progress.classList.remove('is-running');
            void progress.offsetWidth;
            progress.classList.add('is-running');
        }
    };

    tabs.forEach((t) => t.addEventListener('click', () => show(+t.dataset.i)));
    tabsEl.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!d) return;
        const next = (current + d + tabs.length) % tabs.length;
        show(next); tabs[next].focus();
    });
    // The progress bar's CSS animation is the auto-advance clock, so hover or focus pauses it
    if (progress && !REDUCED_MOTION) {
        progress.addEventListener('animationend', () => show((current + 1) % SHOWCASE.length));
    }

    show(0);
}

// ========== HERO: ROTATING HEADLINE + AUDIENCE SWITCH ==========
const HERO_WORDS = ['AI agents', 'RAG systems', 'text-to-SQL', 'LLM assistants', 'fine-tuned models'];

const AUDIENCES = {
    founder: {
        lede: "Got an AI idea, or a prototype that won't hold up with real users? I take it from the first sketch to a product your customers rely on: scoped, built, deployed and monitored.",
        actions: `<a href="#contact" class="btn btn-primary btn-lg">Discuss your project</a>
            <a href="#work" class="btn btn-ghost btn-lg">See results</a>`
    },
    recruiter: {
        lede: 'AI & ML Engineer with ~3 years shipping LLM apps, RAG systems and agent workflows in Python, LangGraph, FastAPI and AWS, from first prototype to leading a team.',
        actions: `<a href="resume.pdf" download class="btn btn-primary btn-lg"><i class="fas fa-arrow-down" aria-hidden="true"></i> Download resume</a>
            <a href="#experience" class="btn btn-ghost btn-lg">View experience</a>`
    }
};

function initHeroRotator() {
    const el = document.getElementById('heroRotator');
    if (!el || REDUCED_MOTION) return;
    let i = 0;
    setInterval(() => {
        el.classList.add('is-out');
        setTimeout(() => {
            i = (i + 1) % HERO_WORDS.length;
            el.textContent = HERO_WORDS[i];
            el.classList.remove('is-out');
        }, 300);
    }, 2600);
}

function initAudience() {
    const buttons = [...document.querySelectorAll('.audience-btn')];
    const panel = document.getElementById('audiencePanel');
    const lede = document.getElementById('heroLede');
    const actions = document.getElementById('heroActions');
    if (!buttons.length || !panel) return;

    const render = (key) => {
        const a = AUDIENCES[key];
        lede.textContent = a.lede;
        actions.innerHTML = a.actions;
    };

    const select = (key, animate) => {
        if (!AUDIENCES[key]) return;
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.audience === key)));
        try { localStorage.setItem('audience', key); } catch (e) { /* storage unavailable */ }
        if (!animate || REDUCED_MOTION) return render(key);
        panel.classList.add('is-swapping');
        setTimeout(() => { render(key); panel.classList.remove('is-swapping'); }, 200);
    };

    buttons.forEach((b) => b.addEventListener('click', () => select(b.dataset.audience, true)));

    // A shared link like ?for=recruiter opens straight to that view
    let initial = new URLSearchParams(location.search).get('for');
    if (!AUDIENCES[initial]) {
        try { initial = localStorage.getItem('audience'); } catch (e) { initial = null; }
    }
    if (AUDIENCES[initial] && initial !== 'founder') select(initial, false);
}

// ========== THEME ==========
function initTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');

    const sync = () => {
        const dark = root.getAttribute('data-theme') !== 'light';
        btn.innerHTML = `<i class="${dark ? 'fas fa-sun' : 'fas fa-moon'}" aria-hidden="true"></i>`;
        btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        if (meta) meta.setAttribute('content', dark ? '#070b14' : '#f6f8fb');
    };
    sync();

    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
        sync();
        window.dispatchEvent(new Event('themechange'));
    });
}

// ========== NAVIGATION ==========
function initNav() {
    const header = document.getElementById('siteHeader');
    const menu = document.getElementById('menuToggle');
    const sheet = document.getElementById('mobileMenu');
    const links = [...document.querySelectorAll('.nav-link')];

    const setMenu = (open) => {
        if (!sheet || !menu) return;
        sheet.hidden = !open;
        document.body.classList.toggle('menu-open', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.innerHTML = `<i class="${open ? 'fas fa-xmark' : 'fas fa-bars'}" aria-hidden="true"></i>`;
        if (open) sheet.querySelector('a')?.focus();
    };
    menu?.addEventListener('click', () => setMenu(sheet.hidden));
    sheet?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sheet && !sheet.hidden) { setMenu(false); menu.focus(); }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 860) setMenu(false); });

    const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 10);
        if (window.scrollY < 200) links.forEach((l) => l.classList.remove('is-active'));
    };
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

// ========== SCROLL REVEAL ==========
// Only elements below the fold are hidden first, so the page is complete without JS.
function initReveal() {
    if (REDUCED_MOTION || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js');
    const els = [...document.querySelectorAll('.reveal')];
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.remove('is-pending'); io.unobserve(e.target); }
        });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
            el.classList.add('is-pending');
            io.observe(el);
        }
    });
}

// ========== HERO FIELD ==========
// Drifting points that link up when close, like neighbours in an embedding space.
function initField() {
    const canvas = document.getElementById('heroField');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.parentElement;
    let w = 0, h = 0, dpr = 1, pts = [], raf = 0, visible = true;
    const pointer = { x: -9999, y: -9999 };
    let color = '45,212,191';

    const readColor = () => {
        color = document.documentElement.getAttribute('data-theme') === 'light' ? '13,148,136' : '45,212,191';
    };

    const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        w = hero.clientWidth; h = hero.clientHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.round(Math.min(45, (w * h) / 30000));
        pts = Array.from({ length: n }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.4 + 0.6,
        }));
    };

    // Lines are grouped into a few opacity buckets so each frame is a handful of strokes, not hundreds
    const BUCKETS = 5;
    const paths = Array.from({ length: BUCKETS }, () => []);
    const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const link = Math.min(140, w / 8), link2 = link * link;
        paths.forEach((b) => { b.length = 0; });
        for (let i = 0; i < pts.length; i++) {
            const p = pts[i];
            for (let j = i + 1; j < pts.length; j++) {
                const q = pts[j];
                const dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
                if (d2 < link2) {
                    const b = Math.min(BUCKETS - 1, Math.floor((1 - Math.sqrt(d2) / link) * BUCKETS));
                    paths[b].push(p.x, p.y, q.x, q.y);
                }
            }
        }
        ctx.lineWidth = 1;
        paths.forEach((seg, b) => {
            if (!seg.length) return;
            ctx.strokeStyle = `rgba(${color},${((b + 0.5) / BUCKETS) * 0.22})`;
            ctx.beginPath();
            for (let k = 0; k < seg.length; k += 4) { ctx.moveTo(seg[k], seg[k + 1]); ctx.lineTo(seg[k + 2], seg[k + 3]); }
            ctx.stroke();
        });
        for (const p of pts) {
            const dp = Math.hypot(p.x - pointer.x, p.y - pointer.y);
            if (dp < 160) {
                ctx.strokeStyle = `rgba(${color},${(1 - dp / 160) * 0.5})`;
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
            }
        }
        ctx.fillStyle = `rgba(${color},0.75)`;
        ctx.beginPath();
        for (const p of pts) { ctx.moveTo(p.x + p.r, p.y); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); }
        ctx.fill();
    };

    const step = () => {
        for (const p of pts) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        draw();
        raf = visible && !document.hidden ? requestAnimationFrame(step) : 0;
    };

    const start = () => { if (!raf && !REDUCED_MOTION) raf = requestAnimationFrame(step); };

    readColor(); resize();
    if (REDUCED_MOTION) draw(); else start();

    window.addEventListener('resize', () => { resize(); if (REDUCED_MOTION) draw(); });
    window.addEventListener('themechange', () => { readColor(); if (REDUCED_MOTION) draw(); });
    hero.addEventListener('pointermove', (e) => {
        const r = canvas.getBoundingClientRect();
        pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    });
    hero.addEventListener('pointerleave', () => { pointer.x = pointer.y = -9999; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
}

// ========== OFF-SCREEN PAUSE ==========
// Looping CSS animations stop while their block is out of view, so scrolling stays smooth.
function initOffscreenPause() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting));
    });
    document.querySelectorAll('#home, .orbit').forEach((el) => io.observe(el));
}

// ========== CONTACT ==========
function initContact() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const copy = document.getElementById('copyEmail');

    copy?.addEventListener('click', async () => {
        const email = 'mursaleen.sengr@gmail.com';
        try {
            await navigator.clipboard.writeText(email);
            copy.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
            copy.setAttribute('aria-label', 'Email address copied');
            setTimeout(() => {
                copy.innerHTML = '<i class="far fa-copy" aria-hidden="true"></i>';
                copy.setAttribute('aria-label', 'Copy email address');
            }, 1800);
        } catch (e) {
            const range = document.createRange();
            range.selectNodeContents(document.getElementById('contactEmail'));
            const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
        }
    });

    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`;
        const subject = `${f.get('topic') || 'Hello'} from ${f.get('name')}`;
        window.location.href = `mailto:mursaleen.sengr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (status) status.textContent = 'Your email app should open with the message filled in.';
        form.reset();
    });
}

// ========== INIT ==========
function init() {
    renderHero();
    renderServices();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    initHeroRotator();
    initAudience();
    initShowcase();
    initProjectModal();
    initOffscreenPause();
    initTheme();
    initNav();
    initReveal();
    initField();
    initContact();
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

console.log('%cHi there, thanks for looking under the hood.', 'font: 600 14px sans-serif; color:#2dd4bf');
console.log('Want to talk AI engineering? mursaleen.sengr@gmail.com');
